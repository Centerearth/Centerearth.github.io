import profileImg from "./assets/MELO4163.jpg";

const nav = [
  { label: "About", href: "#about" },
  { label: "Startup", href: "#startup" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Leadership", href: "#leadership" },
  { label: "Mission", href: "#mission" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar({ active = "#home" }) {
  return (
    <aside
      className="sticky top-8 flex h-[calc(100vh-4rem)] flex-col
                 border border-neutral-600 bg-[#222222] p-6 text-neutral-200
                 "
    >
      {/* Profile */}
      <div className="flex items-center gap-4">
        <img
          src={profileImg}
          alt="Andrew Nicholls"
          className="size-20 rounded-full border-2 border-neutral-500 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold">Andrew Nicholls</h2>
          <p className="text-neutral-400">@Centerearth</p>
        </div>
      </div>

      <hr className="my-6 border-t border-neutral-600" />

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {nav.map(({ label, href }) => {
          const isActive = href === active;
          return (
            <a
              key={href}
              href={href}
              className={`block border-l-2 px-3 py-2 text-lg transition-colors
                 ${
                   isActive
                     ? "border-neutral-400 bg-white/5 text-neutral-100"
                     : "border-transparent text-neutral-300 hover:bg-white/5 hover:text-neutral-100"
                 }`}
            >
              {label}
            </a>
          );
        })}
      </nav>

      {/* Footer pinned to the bottom */}
      <div className="mt-auto">
        <hr className="mb-4 border-t border-neutral-600" />
        <div className="flex gap-4 text-sm text-neutral-400">
          <a
            href="https://github.com/Centerearth"
            className="hover:text-neutral-100"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-curtis-nicholls"
            className="hover:text-neutral-100"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </aside>
  );
}
