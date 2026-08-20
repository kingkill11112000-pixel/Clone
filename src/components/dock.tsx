import { Link, useRouterState } from "@tanstack/react-router";
import { Github, Home, Linkedin, Monitor, Moon, Smartphone, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme";
import { DATA } from "@/data/site";

const ITEMS = [
  { to: "/", label: "Home", icon: Home },
  { to: "/web-apps", label: "Web Apps", icon: Monitor },
  { to: "/mobile-apps", label: "Mobile Apps", icon: Smartphone },
] as const;

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function MediumIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-.87 6.42-1.95 6.42-1.08 0-1.95-2.88-1.95-6.42s.87-6.42 1.95-6.42 1.95 2.88 1.95 6.42zM24 12c0 3.17-.28 5.75-.63 5.75-.35 0-.63-2.58-.63-5.75s.28-5.75.63-5.75C23.72 6.25 24 8.83 24 12z" />
    </svg>
  );
}

const SOCIALS = [
  { href: DATA.contact.social.GitHub.url, label: "GitHub", Icon: Github },
  { href: DATA.contact.social.LinkedIn.url, label: "LinkedIn", Icon: Linkedin },
  { href: DATA.contact.social.X.url, label: "X", Icon: XIcon },
  { href: DATA.contact.social.Medium.url, label: "Medium", Icon: MediumIcon },
] as const;

export function Dock() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { theme, toggle } = useTheme();

  return (
    <>
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-16 bg-bg backdrop-blur-lg"
        style={{ WebkitMaskImage: "linear-gradient(to top, black, transparent)" }}
        aria-hidden
      />
      <nav
        aria-label="Primary"
        className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-0.5 rounded-full border border-border bg-bg px-1 py-1 shadow-[0_0_0_1px_rgb(0_0_0_/_0.03),0_2px_4px_rgb(0_0_0_/_0.05),0_12px_24px_rgb(0_0_0_/_0.05)]"
      >
        {ITEMS.map((item) => {
          const active = pathname === item.to;
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex size-10 items-center justify-center rounded-full text-fg/80 transition-colors hover:bg-surface",
                active && "bg-fg text-bg hover:bg-fg",
              )}
            >
              <Icon className="size-4" strokeWidth={1.8} />
            </Link>
          );
        })}
        <span className="mx-0.5 h-6 w-px bg-border" aria-hidden />
        {SOCIALS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex size-10 items-center justify-center rounded-full text-fg/80 transition-colors hover:bg-surface"
          >
            <Icon className="size-4" />
          </a>
        ))}
        <span className="mx-0.5 h-6 w-px bg-border" aria-hidden />
        <button
          type="button"
          onClick={toggle}
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          className="flex size-10 items-center justify-center rounded-full text-fg/80 transition-colors hover:bg-surface"
        >
          {theme === "dark" ? (
            <Moon className="size-4" strokeWidth={1.8} />
          ) : (
            <Sun className="size-4" strokeWidth={1.8} />
          )}
        </button>
      </nav>
    </>
  );
}
