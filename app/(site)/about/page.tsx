import Image from "next/image";

export const metadata = { title: "About" };

export default function About() {
  return (
    <div>
      <h1 className="text-blue-700 dark:text-blue-400 text-4xl sm:text-5xl font-extrabold">About</h1>
      <Image
        src="/img/about.png"
        alt="Portrait of Pedro Carvalho"
        width={350}
        height={350}
        className="mt-6 max-w-full h-auto object-cover rounded-lg border border-gray-500"
      />
      <div className="text-lg text-gray-700 dark:text-gray-300 mt-10 space-y-4">
        <p>
          I&apos;m a software engineer at FanDuel (through Blip.pt) in Porto, Portugal. I have a bachelor&apos;s
          degree in Computer Science from FCUP and I&apos;m now doing a master&apos;s in Computer Software
          Engineering at ISEP.
        </p>
        <p>
          Before moving into development, I held management roles in non-profit organizations, including
          president of Grupo de Jovens Luz da Vida and founding member and treasurer of Projeto 1513. I try to
          combine that organizational experience with my technical background.
        </p>
        <p>Outside of work I&apos;m interested in sports, volunteering and music.</p>
      </div>
    </div>
  );
}
