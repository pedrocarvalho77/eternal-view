export const metadata = { title: "Contact" };

const email = "pedromiguelrc99@gmail.com";

const links = [
  { label: "GitHub", href: "https://github.com/pedrocarvalho77" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pedrocarvalho77/" },
  { label: "X (Twitter)", href: "https://twitter.com/pedro_mcarvalho" },
];

export default function Contact() {
  return (
    <div>
      <h1 className="text-blue-700 dark:text-blue-400 text-4xl sm:text-5xl font-extrabold">Contact</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-10">
        Email is the best way to reach me:
      </p>
      <p className="mt-2 text-xl">
        <a href={`mailto:${email}`} className="font-semibold underline underline-offset-4 break-all">
          {email}
        </a>
      </p>
      <ul className="mt-8 flex flex-wrap gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-gray-300 px-4 py-3 text-gray-800 hover:border-blue-500 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-600 dark:text-gray-200 dark:hover:text-blue-400"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
