import snapshotData from "./repos-snapshot.json";

export type Repo = {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  homepage: string | null;
};

const USER = "pedrocarvalho77";
const snapshot: Repo[] = snapshotData;

// Repos shown first and larger on the home page, in this order. The rest are listed below them.
export const featured = ["jubilant-api", "jubliant-spoon", "Tiger-0-Compiler", "AI-Machine-Learning"];

// Local descriptions for repos whose GitHub description is empty.
const overrides: Record<string, Partial<Pick<Repo, "description">>> = {
  "Tiger-0-Compiler": { description: "A Tiger-0 language compiler written in Haskell, Yacc and Lex." },
  Battleship: { description: "Battleship academic project in C." },
};

// Used when the GitHub API fails (e.g. rate limit on shared build IPs), so a deploy never fails because of it.
// Refresh with: gh api "users/pedrocarvalho77/repos?type=owner&sort=pushed&per_page=100" (see README).
async function fetchRepos(): Promise<Repo[]> {
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
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);

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
    }));
}

// Anonymous GitHub API calls are limited to 60/h per IP; set GITHUB_TOKEN to raise that.
export async function getRepos(): Promise<Repo[]> {
  let repos: Repo[];
  try {
    repos = await fetchRepos();
  } catch (e) {
    console.warn(`getRepos: ${e instanceof Error ? e.message : e}; using the bundled snapshot`);
    repos = snapshot;
  }
  return repos.map((r) => ({ ...r, ...overrides[r.name] }));
}
