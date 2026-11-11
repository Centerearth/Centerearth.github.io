import Sidebar from "./Sidebar";

const projects = [
  {
    title: "Chess",
    description:
      "Full-stack chess application. Currently the client is text-based but am working on a website version as well as a chess agent to play against",
    image: "/chess.png",
    github: "https://github.com/Centerearth/chess",
  },
  {
    title: "BYU ACM Website",
    description:
      "The website for BYU's ACM chapter, deployed in one of BYU's first Kubernetes cluster.",
    image: "/acm.png",
  },
  {
    title: "Detox Extension",
    description:
      "A chrome extension that forces users to wait 10 seconds before accessing certain websites.",
    image: "/detox.png",
    github: "https://github.com/Centerearth/detox-extension",
  },
  {
    title: "RateMyClass",
    description: (
      <>
        RateMyClass is a RateMyProfessor spinoff tailored for BYU classes. Try
        it out at{" "}
        <ExternalLink href="https://ratemyclass.me" className="text-neutral-400 underline hover:text-neutral-100">
          ratemyclass.me
        </ExternalLink>
      </>
    ),
    image: "/ratemyclass.png",
    github: "https://github.com/Centerearth/startup",
  },
  {
    title: "FIDO2 Attacks",
    description:
      "Implemented a web app supporting FIDO2 passkey authentication, successfully recreated several FIDO2 attacks for research.",
    image: "/fido2.png",
    github: "https://github.com/Centerearth/FIDO2_attacks",
  },
  {
    title: "Rubiks Solver",
    description:
      "A recursive solver for the Rubik's cube implementing a custom bi-directional search.",
    image: "/rubiks.png",
    github: "https://github.com/Centerearth/rubiks_recursive",
  },
];

function ExternalLink({
  href,
  className = "text-neutral-400 hover:text-neutral-100",
  children,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function ProjectCard({ title, description, image, github }) {
  return (
    <div className="border border-neutral-600 bg-[#222222] p-4">
      <h2 className="my-4 text-2xl font-bold">{title}</h2>
      <p className="my-4">{description}</p>
      <img
        src={image}
        alt={title}
        className="h-[200px] w-full object-contain object-center"
      />
      {github && (
        <p className="my-4 text-center">
          <ExternalLink href={github}>Github</ExternalLink>
        </p>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="mx-auto grid min-h-screen max-w-7xl gap-8 p-8 text-neutral-200 antialiased md:grid-cols-[320px_1fr]">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className="flex flex-col gap-8">
        <section id="projects">
          <h2 className="mb-4 text-2xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
