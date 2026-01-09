import Image from "next/image";

const navItems = [
  { label: "About", href: "/about-fca" },
  { label: "Admissions", href: "/admissions" },
  { label: "Academics", href: "/academics" },
  { label: "Student Life", href: "/student-life" },
  { label: "Athletics", href: "/athletics" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <a className="flex items-center gap-3" href="/">
          <Image
            src="/images/logo.png"
            alt="Faith Christian Academy of Plant City"
            width={52}
            height={52}
            className="h-12 w-12 object-contain"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-zinc-900">
            Faith Christian Academy
          </span>
        </a>
        <nav className="hidden flex-wrap gap-4 text-sm font-medium text-zinc-700 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white"
          href="/admissions/request-a-tour"
        >
          Request a Tour
        </a>
      </div>
    </header>
  );
}
