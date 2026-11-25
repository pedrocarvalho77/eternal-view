export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <div>
      <h1 className="text-gradient text-4xl sm:text-5xl drop-shadow font-extrabold">Contact</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-10">
        You can find me on Twitter at{" "}
        <a href="https://twitter.com/pedro_mcarvalho" target="_blank" rel="noopener noreferrer" className="underline">
          @pedro_mcarvalho
        </a>
      </p>
    </div>
  );
}
