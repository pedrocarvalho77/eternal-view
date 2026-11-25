export const metadata = { title: "Skills" };

const groups = [
  { title: "Languages & frameworks", items: ["Java", "Spring Boot", "Maven"] },
  { title: "Messaging & data", items: ["Kafka", "Cassandra"] },
  { title: "APIs", items: ["REST"] },
  { title: "CI/CD", items: ["GitHub Actions", "Jenkins", "Buildkite"] },
  { title: "Observability", items: ["Datadog"] },
  { title: "Practices", items: ["Unit, component and integration testing", "Design patterns"] },
];

export default function Skills() {
  return (
    <div>
      <h1 className="text-gradient text-4xl sm:text-5xl drop-shadow font-extrabold">Skills</h1>
      <div className="mt-10 space-y-6">
        {groups.map((g) => (
          <section key={g.title}>
            <h2 className="font-bold text-gray-700 dark:text-gray-200 text-xl">{g.title}</h2>
            <ul className="mt-2 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li key={item} className="rounded-full border border-gray-300 dark:border-gray-600 px-3 py-1 text-sm text-gray-700 dark:text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
