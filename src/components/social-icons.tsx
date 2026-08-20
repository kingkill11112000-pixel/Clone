import { Github, Linkedin } from "lucide-react";
import { DATA } from "@/data/site";
import { cn } from "@/lib/utils";

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

const ICONS = [
  { href: DATA.contact.social.GitHub.url, label: "GitHub", Icon: Github },
  { href: DATA.contact.social.LinkedIn.url, label: "LinkedIn", Icon: Linkedin },
  { href: DATA.contact.social.X.url, label: "X", Icon: XIcon },
  { href: DATA.contact.social.Medium.url, label: "Medium", Icon: MediumIcon },
] as const;

export function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 text-muted", className)}>
      {ICONS.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="transition-colors hover:text-fg"
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  );
}
