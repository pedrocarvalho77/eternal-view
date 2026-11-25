import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image"
import { notFound } from "next/navigation";

type Props = {
  params: { project: string };
};

export default async function ProjectComponent({ params }: Props) {
  const project = await getProject(params.project);
  if (!project) notFound();

  return (
    <div>
      <header className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-gradient text-4xl sm:text-5xl drop-shadow font-extrabold">{project.name}</h1>
        {project.url && (
          <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-500 dark:text-gray-300 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition">
            View Project
          </a>
        )}
      </header>

      <div className="text-lg text-gray-700 dark:text-gray-300 mt-5">
        <PortableText value={project.content ?? []} />
      </div>

      {project.image && (
        <Image src={project.image} alt={project.name} width={1920} height={1080} className="mt-10 h-auto w-full border-2 border-gray-700 object-cover rounded-xl" />
      )}
    </div>
  );
}
