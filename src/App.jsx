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
        it out at <ExternalLink href="https://ratemyclass.me">ratemyclass.me</ExternalLink>
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

function ExternalLink({ href, className = "text-blue-600 underline", children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function ProjectCard({ title, description, image, github }) {
  return (
    <div className="border border-gray-300 p-2.5">
      <h2 className="my-4 text-2xl font-bold">{title}</h2>
      <p className="my-4">{description}</p>
      <img src={image} alt={title} className="h-[200px] w-full object-contain object-center" />
      {github && (
        <p className="my-4">
          <ExternalLink href={github}>Github</ExternalLink>
        </p>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="flex min-h-screen flex-col text-center antialiased">
      <header className="bg-[#282c34] p-5 text-white">
        <h1 className="my-5 text-3xl font-bold">Andrew Nicholls</h1>
      </header>
      <main className="flex-1">
        <section className="flex flex-col items-center justify-center gap-5 p-5 sm:flex-row">
          <img src="/MELO4163.jpg" alt="Andrew Nicholls" className="size-[200px] rounded-full object-cover" />
          <div className="max-w-[500px]">
            <h2 className="my-4 text-2xl font-bold">About Me</h2>
            <p className="my-4">
              Welcome to my personal website!
              I'm a junior at BYU studying computer science, math, and cybersecurity.
              Send me a message on LinkedIn if you want to connect,
              or check out my GitHub to see what I'm working on!
            </p>
          </div>
        </section>
        <section>
          <h2 className="my-4 text-2xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-[#282c34] p-5 text-white">
        <ExternalLink href="https://github.com/Centerearth" className="mx-2.5 text-[#61dafb]">
          GitHub
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/andrew-curtis-nicholls" className="mx-2.5 text-[#61dafb]">
          LinkedIn
        </ExternalLink>
      </footer>
    </div>
  );
}

export default App;
