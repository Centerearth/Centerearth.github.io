import Sidebar from "./Sidebar";
import chessImg from "./assets/chess.png";
import acmImg from "./assets/acm.png";
import detoxImg from "./assets/detox.png";
import ratemyclassImg from "./assets/ratemyclass.png";
import fido2Img from "./assets/fido2.png";
import rubiksImg from "./assets/rubiks.png";
import iinuiImg from "./assets/iinui.png";
import acmLeadershipImg from "./assets/acm-leadership.JPG";
import missionImg from "./assets/mission.jpg";
import iqcImg from "./assets/iqc.jpg";
import resumePdf from "./assets/Andrew Nicholls resume.pdf";

const projects = [
  {
    title: "Chess",
    description:
      "Full-stack chess application. I developed two agents to play against, one a tradition adverserial-search agent with a custom heuristic function, and the other was trained with pytorch",
    image: chessImg,
    github: "https://github.com/Centerearth/chess",
  },
  {
    title: "BYU ACM Website",
    description:
      "The website for BYU's ACM chapter, deployed in one of BYU's first Kubernetes cluster.",
    image: acmImg,
  },
  {
    title: "Detox Extension",
    description:
      "A chrome extension that forces users to wait 10 seconds before accessing certain websites.",
    image: detoxImg,
    github: "https://github.com/Centerearth/detox-extension",
  },
  {
    title: "RateMyClass",
    description: (
      <>
        RateMyClass is a RateMyProfessor spinoff tailored for BYU classes.
      </>
    ),
    image: ratemyclassImg,
    github: "https://github.com/Centerearth/startup",
  },
  {
    title: "FIDO2 Attacks",
    description:
      "A web app supporting FIDO2 passkey authentication, I also successfully recreated several FIDO2 attacks for research.",
    image: fido2Img,
    github: "https://github.com/Centerearth/FIDO2_attacks",
  },
  {
    title: "Rubiks Solver",
    description:
      "A recursive solver for the Rubik's cube implementing a custom bi-directional search.",
    image: rubiksImg,
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

function FeatureCard({ image, imageAlt = "", children }) {
  return (
    <div className="flex flex-col gap-6 border border-neutral-600 bg-[#222222] p-4 md:flex-row md:items-center">
      <div className="flex-1 space-y-4">{children}</div>
      {image && (
        <img
          src={image}
          alt={imageAlt}
          className="h-[200px] w-full object-contain object-center md:w-2/5"
        />
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
        <section id="about">
          <h2 className="mb-4 text-2xl font-bold">About Me</h2>
          <div className="flex flex-col gap-5">
            <FeatureCard>
              <p>
                Hi, I'm Andrew! I'm a junior at BYU studying computer science,
                math, cybersecurity, and French. Right now I'm taking a break
                from school to build{" "}
                <a href="#startup" className="underline hover:text-neutral-100">
                  iinui
                </a>
                , a startup I'm working on full-time, and I'm an incoming SWE
                intern at Lucid.
              </p>
              <p>
                When I'm not coding, you'll find me playing piano, throwing a
                frisbee, or out on a long walk.
              </p>
              <p>
                I'd love to connect! Reach out on{" "}
                <ExternalLink
                  href="https://www.linkedin.com/in/andrew-curtis-nicholls"
                  className="text-neutral-400 underline hover:text-neutral-100"
                >
                  LinkedIn,
                </ExternalLink>{" "}
                check out what I'm building on{" "}
                <ExternalLink
                  href="https://github.com/Centerearth"
                  className="text-neutral-400 underline hover:text-neutral-100"
                >
                  GitHub,
                </ExternalLink>{" "}
                or take a look at my resume{" "}
                <ExternalLink
                  href={resumePdf}
                  className="text-neutral-400 underline hover:text-neutral-100"
                >
                  here
                </ExternalLink>
                .
              </p>
            </FeatureCard>
          </div>
        </section>
        <section id="startup">
          <h2 className="mb-4 text-2xl font-bold">Startup</h2>
          <div className="flex flex-col gap-5">
            <FeatureCard image={iinuiImg} imageAlt="Screenshot of the product">
              <p>
                I am currently taking a break from school to work full-time on a
                startup called iinui. It is a marketplace for Polynesians
                (starting with French Polynesia) to list their houses,
                activities, hotels, etc. The main stack is NextJs, Drizzle +
                Postgres, hosted on Railway. More to come in the next couple of
                months!!!
              </p>
              <p>
                <ExternalLink href="https://iinui.com">iinui.com</ExternalLink>
              </p>
            </FeatureCard>
          </div>
        </section>
        <section id="projects">
          <h2 className="mb-4 text-2xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
        <section id="research">
          <h2 className="mb-4 text-2xl font-bold">Research</h2>
          <div className="flex flex-col gap-5">
            <FeatureCard image={fido2Img} imageAlt="Screenshot from research">
              <p>
                Conducted a systematic literature review and developed a
                taxonomy of all FIDO2 attacks currently published, worked on
                recreating several of them and am currently writing the paper
                with the other students. Also diving into security of agentic
                systems.
              </p>
              <ExternalLink href="https://isrl.byu.edu">
                isrl.byu.edu
              </ExternalLink>
            </FeatureCard>
          </div>
        </section>
        <section id="leadership">
          <h2 className="mb-4 text-2xl font-bold">Leadership</h2>
          <div className="flex flex-col gap-5">
            <FeatureCard
              image={acmLeadershipImg}
              imageAlt="Picture helping at an event"
            >
              <p>
                I am president of the student chapter of ACM at BYU! We host a
                variety of networking and recruitment events for students,
                including hackathons, recruitment dinners, Q&A's, workshops, and
                much more. It has been a blast being able to talk to so many
                talented and helpful people in the industry and connect them
                with my friends at the universities.
              </p>
              <p>
                <ExternalLink href="https://acm.byu.edu">
                  acm.byu.edu
                </ExternalLink>
              </p>
            </FeatureCard>
            <FeatureCard>
              <p>
                I serve as one of the program directors for BYU Yserve's Kids
                Who Code initiative. We volunteer to provide beginner coding
                classes to local elementary schools. No photo for privacy
                reasons.
              </p>
            </FeatureCard>
          </div>
        </section>
        <section id="mission">
          <h2 className="mb-4 text-2xl font-bold">Mission</h2>
          <div className="flex flex-col gap-5">
            <FeatureCard image={missionImg} imageAlt="Picture from Tahiti">
              <p>
                I was blessed to be able to serve as a full-time missionary for
                the Church of Jesus Christ of Latter-Day Saints for two years on
                Tahiti and the surrounding islands in French Polynesia!
              </p>
            </FeatureCard>
          </div>
        </section>
        <section id="awards">
          <h2 className="mb-4 text-2xl font-bold">Awards</h2>
          <div className="flex flex-col gap-5">
            <FeatureCard image={iqcImg} imageAlt="Picture from ICQ">
              <p>
                I won first prize at the Intermountain Quantum Competition in
                the JustBuild track. My team was charged with creating and
                advising a fictional client interested in applying quantum
                approaches to their problem. We decided to recommend that Master
                Planner, a schedule outsourcing company, pass on implementing
                Grover's search. We ran several benchmarks using IBM's qiskit
                library to show that Grover's search did not actually provide a
                legitimate speed up, and ran noise simulations to show that
                noise completely drowns the answer.
              </p>
            </FeatureCard>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
