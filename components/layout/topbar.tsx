import { ReactNode } from 'react';

type TopbarProps = {
  title: string;
  onMenuToggle: () => void;
};

export function Topbar({ title, onMenuToggle }: TopbarProps) {
  return (
    <header className="border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur-sm sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-700 lg:hidden"
            onClick={onMenuToggle}
            aria-label="Abrir menu"
          >
            ☰
          </button>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Painel principal</p>
            <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">{title}</h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 md:block">
            31/10/2026 • 08:40
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gma-100 font-semibold text-gma-700">AC</div>
            <div>
              <p className="text-sm font-medium text-slate-800">Ana Costa</p>
              <p className="text-xs text-slate-500">Administrador</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Panel({
  title,
  action,
  children,
  className = ''
}: {
  title?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-soft sm:p-5 ${className}`}>
      {title && (
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}
