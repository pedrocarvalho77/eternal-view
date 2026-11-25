import Image from "next/image";

export const metadata = { title: "About" };

export default function About() {
  return (
    <div>
      <h1 className="text-gradient text-4xl sm:text-5xl drop-shadow font-extrabold">About</h1>
      <Image
        src="/img/about.png"
        alt="Portrait of Pedro Carvalho"
        width={350}
        height={350}
        className="mt-6 max-w-full h-auto object-cover rounded-lg border border-gray-500"
      />
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-10">
        With a degree in Computer Science and interest in areas like AI, sports, and others. I have some
        experience of management positions in non-profit organizations and almost one year of experience as
        an operational assistant. Throughout my career, I have tried to combine the technical knowledge
        obtained in my degree with my organizational experience. However, now I&apos;m more interested in
        gaining more technical knowledge.
      </p>
    </div>
  );
}
