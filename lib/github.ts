export type Repo = {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  homepage: string | null;
  image?: string;
};

const USER = "pedrocarvalho77";

// Local overrides for repos whose GitHub description is empty, plus cover images (in /public/projects).
const overrides: Record<string, Partial<Pick<Repo, "description" | "image">>> = {
  "Tiger-0-Compiler": {
    description: "A Tiger-0 language compiler written in Haskell, Yacc and Lex.",
    image: "/projects/tiger-0-compiler.png",
  },
  "AI-Machine-Learning": { image: "/projects/ai-machine-learning.png" },
  Battleship: { description: "Battleship academic project in C.", image: "/projects/battleship.png" },
};

// Anonymous GitHub API calls are limited to 60/h per IP; set GITHUB_TOKEN to raise that.
export async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    `https://api.github.com/users/${USER}/repos?type=owner&sort=pushed&per_page=100`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN && { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }),
      },
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);

  const repos: any[] = await res.json();
  return repos
    .filter((r) => !r.fork && !r.archived)
    .map((r) => ({
      name: r.name,
      url: r.html_url,
      description: r.description,
      language: r.language,
      stars: r.stargazers_count,
      homepage: r.homepage || null,
      ...overrides[r.name],
    }));
}
