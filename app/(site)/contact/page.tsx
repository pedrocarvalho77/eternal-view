export const metadata = { title: "Contact" };

const links = [
  { label: "GitHub", href: "https://github.com/pedrocarvalho77" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pedrocarvalho77/" },
  { label: "Twitter", href: "https://twitter.com/pedro_mcarvalho" },
];

export default function Contact() {
  return (
    <div>
      <h1 className="text-gradient text-4xl sm:text-5xl drop-shadow font-extrabold">Contact</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-10">You can find me on:</p>
      <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mt-2">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} target="_blank" rel="noopener noreferrer" className="underline">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
