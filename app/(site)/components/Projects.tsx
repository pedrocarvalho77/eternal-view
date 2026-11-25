import { getProjects } from "@/sanity/sanity-utils";
import Image from 'next/image'
import Link from 'next/link'

export default async function Projects( ) {
  const projects = await getProjects();

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

      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold text-gradient">
            {project.name}
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
}
