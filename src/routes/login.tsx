import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <PageShell>
      <div className="mx-auto mt-16 max-w-sm space-y-4 rounded-xl border border-dashed border-border p-6">
        <h1 className="font-grotesk text-2xl font-bold">Sign in</h1>
        <p className="text-sm text-muted">
          Optional — the portfolio is public. Sign in to leave a mark.
        </p>
        {authEnabled ? (
          GROK_PROVIDERS.map((p) => (
            <button
              key={p.providerId}
              type="button"
              onClick={() => signIn(p.providerId, { callbackURL: "/" })}
              className="w-full rounded-md border border-dashed border-border bg-pill px-4 py-2.5 font-medium hover:bg-beige"
            >
              Continue with {p.label}
            </button>
          ))
        ) : (
          <p className="text-sm text-muted">Sign-in is disabled.</p>
        )}
        <Link to="/" className="block text-center text-sm text-muted hover:text-fg">
          Back to portfolio
        </Link>
      </div>
    </PageShell>
  );
}
