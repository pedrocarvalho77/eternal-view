import { featured, getRepos, type Repo } from "@/lib/github";
import Link from 'next/link'

const linkFocus = "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";

function FeaturedCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex h-full flex-col rounded-lg border-2 border-gray-300 p-5 hover:border-blue-500 dark:border-gray-700 dark:hover:border-blue-400 transition ${linkFocus}`}
    >
      <span className="text-lg font-extrabold text-blue-700 dark:text-blue-400 break-words">
        {repo.name}
        <span className="sr-only"> (opens on GitHub)</span>
      </span>
      {repo.description && (
        <p className="mt-2 text-gray-700 dark:text-gray-300 line-clamp-5">{repo.description}</p>
      )}
      {repo.language && (
        <p className="mt-auto pt-4 text-sm text-gray-500 dark:text-gray-400">{repo.language}</p>
      )}
    </a>
  );
}

export default async function Projects( ) {
  const repos = await getRepos();
  const top = featured.map((name) => repos.find((r) => r.name === name)).filter((r): r is Repo => !!r);
  const rest = repos.filter((r) => !top.includes(r));

  return (
    <div>
      <h1 className="text-4xl sm:text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="text-blue-700 dark:text-blue-400">
          Pedro!
        </span>
      </h1>
      <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
        Software engineer at FanDuel (through Blip.pt) in Porto, working with Java and Spring Boot.
      </p>
      <Link
        href="/contact"
        className="mt-6 inline-block rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-blue-500 dark:text-gray-950 dark:hover:bg-blue-400 dark:focus-visible:ring-offset-gray-950"
      >
        Get in touch
      </Link>

      <h2 className="mt-16 sm:mt-24 font-bold text-gray-700 dark:text-gray-200 text-3xl">A bit about me</h2>
      <p className="mt-3 max-w-prose text-lg text-gray-700 dark:text-gray-300">
        I studied Computer Science at FCUP and I&apos;m now doing a master&apos;s in Software Engineering at
        ISEP. Before moving into development, I held leadership roles in youth non-profits, and I try to bring
        that organizational side to the code I write.{" "}
        <Link href="/about" className="underline underline-offset-4 hover:text-blue-700 dark:hover:text-blue-400">
          More about me
        </Link>
      </p>

      <h2 className="mt-12 font-bold text-gray-700 dark:text-gray-200 text-3xl">Featured projects</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {top.map((repo) => <FeaturedCard key={repo.name} repo={repo} />)}
      </div>

      {rest.length > 0 && (
        <>
          <h2 className="mt-12 font-bold text-gray-700 dark:text-gray-200 text-xl">More on GitHub</h2>
          <ul className="mt-3 divide-y divide-gray-200 dark:divide-gray-800">
            {rest.map((repo) => (
              <li key={repo.name}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col gap-0.5 py-3 hover:text-blue-700 dark:hover:text-blue-400 sm:flex-row sm:items-baseline sm:gap-4 ${linkFocus}`}
                >
                  <span className="font-semibold sm:w-56 sm:shrink-0 break-words">
                    {repo.name}
                    <span className="sr-only"> (opens on GitHub)</span>
                  </span>
                  <span className="min-w-0 flex-1 text-sm text-gray-600 dark:text-gray-400 sm:truncate">
                    {repo.description}
                  </span>
                  {repo.language && (
                    <span className="text-sm text-gray-500 dark:text-gray-500">{repo.language}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
