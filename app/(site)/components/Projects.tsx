import { getRepos } from "@/lib/github";
import Image from 'next/image'

export default async function Projects( ) {
  const repos = await getRepos();

  return (
    <div>
      <h1 className="text-4xl sm:text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="text-gradient">
          Pedro!
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">Hi everyone! Check out my projects!</p>
      <h2 className="mt-16 sm:mt-24 font-bold text-gray-700 dark:text-gray-200 text-3xl">My Projects</h2>

      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{repos.map((repo) => (
        <a href={repo.url} key={repo.name} target="_blank" rel="noopener noreferrer" className="flex flex-col border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          {repo.image && (
            <Image
              src={repo.image}
              alt=""
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 px-1 font-extrabold text-gradient break-words">
            {repo.name}
          </div>
          {repo.description && (
            <p className="mt-1 px-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-4">{repo.description}</p>
          )}
          {repo.language && (
            <p className="mt-auto px-1 pt-2 pb-1 text-xs text-gray-500 dark:text-gray-400">{repo.language}</p>
          )}
        </a>
      ))}
      </div>
    </div>
  );
}
