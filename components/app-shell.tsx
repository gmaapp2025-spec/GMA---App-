'use client';

import { useMemo, useState } from 'react';

type ModuleKey =
  | 'dashboard'
  | 'emails'
  | 'whatsapp'
  | 'fiscal'
  | 'condominios'
  | 'documentos'
  | 'historico'
  | 'configuracoes';

type SidebarItem = {
  key: ModuleKey;
  label: string;
  icon: string;
};

const modules: SidebarItem[] = [
  { key: 'dashboard', label: 'Dashboard', icon: '◫' },
  { key: 'emails', label: 'Central de E-mails', icon: '✉' },
  { key: 'whatsapp', label: 'Central de WhatsApp', icon: '◌' },
  { key: 'fiscal', label: 'Emissor Fiscal', icon: '▣' },
  { key: 'condominios', label: 'Cadastro de Condomínios', icon: '⌂' },
  { key: 'documentos', label: 'Documentos', icon: '▤' },
  { key: 'historico', label: 'Histórico de Operações', icon: '⏱' },
  { key: 'configuracoes', label: 'Configurações', icon: '⚙' }
];

const dashboardCards = [
  { label: 'Condomínios', value: '148', delta: '+12%' },
  { label: 'Documentos pendentes', value: '36', delta: '-8%' },
  { label: 'Mensagens', value: '2.340', delta: '+18%' },
  { label: 'Notas fiscais', value: '591', delta: '+9%' }
];

const recentActivity = [
  { title: 'Atendimento de síndico', detail: 'Residencial Araguaia • 08:40', status: 'Concluído' },
  { title: 'Cobrança de taxa condominial', detail: 'Portal do Condomínio • 09:10', status: 'Em análise' },
  { title: 'Envio de minuta de assembleia', detail: 'Condomínio Primavera • 09:45', status: 'Pendente' },
  { title: 'Mensagem de suporte via WhatsApp', detail: 'Residencial Aurora • 10:05', status: 'Respondida' }
];

const emails = [
  { from: 'contato@residencialaraguaia.com.br', subject: 'Solicitação de 2ª via de boleto', tag: 'Urgente' },
  { from: 'admin@condominiojardim.com', subject: 'Reunião de assembleia agendada', tag: 'Normal' },
  { from: 'sac@residencialaurora.com', subject: 'Pedido de alteração de dados cadastrais', tag: 'Importante' }
];

const whatsappConversations = [
  { name: 'Síndico - Residencial Araguaia', unread: 7, status: 'Ativa' },
  { name: 'Central de atendimento', unread: 4, status: 'Ativa' },
  { name: 'Financeiro - Condomínio Jardim', unread: 2, status: 'Em espera' }
];

const fiscalData = [
  { number: 'NF-2026-0412', value: 'R$ 2.480,00', status: 'Emitida' },
  { number: 'NF-2026-0413', value: 'R$ 1.120,00', status: 'Pendente' },
  { number: 'NF-2026-0414', value: 'R$ 980,00', status: 'Agendada' }
];

const condominios = [
  { name: 'Residencial Araguaia', units: 220, admin: 'Marina Costa', status: 'Ativo' },
  { name: 'Condomínio Jardim', units: 140, admin: 'Fábio Nunes', status: 'Ativo' },
  { name: 'Residencial Aurora', units: 96, admin: 'Lívia Souza', status: 'Em revisão' }
];

const documents = [
  { name: 'ATA 021/2026.pdf', owner: 'Assembléia', date: '12/10/2026' },
  { name: 'Orçamento manutenção.pdf', owner: 'Financeiro', date: '11/10/2026' },
  { name: 'Mapa de vagas.pdf', owner: 'Segurança', date: '09/10/2026' }
];

const timeline = [
  'Cadastro de nova unidade concluído.',
  'Documento de assembleia enviado ao síndico.',
  'WhatsApp de cobrança respondido pela equipe.',
  'NF de serviços de jardinagem emitida com sucesso.'
];

const settings = [
  'Configuração de e-mail corporativo',
  'Integração WhatsApp Business',
  'Parâmetros de emissão fiscal',
  'Permissões de usuários e perfis'
];

function renderModuleContent(activeModule: ModuleKey) {
  switch (activeModule) {
    case 'dashboard':
      return (
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {dashboardCards.map((card) => (
              <div key={card.label} className="card-surface p-5">
                <p className="text-sm text-slate-500">{card.label}</p>
                <div className="mt-3 flex items-end justify-between">
                  <span className="text-3xl font-bold text-slate-900">{card.value}</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                    {card.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="card-surface p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="section-title">Atividades recentes</h3>
              <button className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">Ver tudo</button>
            </div>
            <div className="space-y-3">
              {recentActivity.map((item) => (
                <div key={item.title} className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
                  <div>
                    <p className="font-medium text-slate-800">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.detail}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'emails':
      return (
        <div className="card-surface p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="section-title">Central de e-mails</h3>
            <button className="rounded-lg bg-gma-600 px-3 py-2 text-sm font-medium text-white">Nova rotina</button>
          </div>
          <div className="space-y-3">
            {emails.map((email) => (
              <div key={email.subject} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium text-slate-800">{email.from}</p>
                    <p className="text-sm text-slate-600">{email.subject}</p>
                  </div>
                  <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700">{email.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'whatsapp':
      return (
        <div className="card-surface p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="section-title">Central de WhatsApp</h3>
            <button className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white">Abrir fila</button>
          </div>
          <div className="space-y-3">
            {whatsappConversations.map((chat) => (
              <div key={chat.name} className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                <div>
                  <p className="font-medium text-slate-800">{chat.name}</p>
                  <p className="text-sm text-slate-500">{chat.status}</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  {chat.unread} não lidas
                </span>
              </div>
            ))}
          </div>
        </div>
      );

    case 'fiscal':
      return (
        <div className="card-surface p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="section-title">Emissor Fiscal</h3>
            <button className="rounded-lg bg-gma-600 px-3 py-2 text-sm font-medium text-white">Nova emissão</button>
          </div>
          <div className="space-y-3">
            {fiscalData.map((item) => (
              <div key={item.number} className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                <div>
                  <p className="font-medium text-slate-800">{item.number}</p>
                  <p className="text-sm text-slate-500">{item.value}</p>
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case 'condominios':
      return (
        <div className="card-surface p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="section-title">Cadastro de condomínios</h3>
            <button className="rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-white">Cadastrar</button>
          </div>
          <div className="space-y-3">
            {condominios.map((condominio) => (
              <div key={condominio.name} className="grid gap-3 rounded-xl border border-slate-200 p-4 md:grid-cols-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Condomínio</p>
                  <p className="font-medium text-slate-800">{condominio.name}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Unidades</p>
                  <p className="font-medium text-slate-800">{condominio.units}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Administrador</p>
                  <p className="font-medium text-slate-800">{condominio.admin}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Status</p>
                  <span className="inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                    {condominio.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'documentos':
      return (
        <div className="card-surface p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="section-title">Documentos</h3>
            <button className="rounded-lg bg-gma-600 px-3 py-2 text-sm font-medium text-white">Upload</button>
          </div>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.name} className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                <div>
                  <p className="font-medium text-slate-800">{doc.name}</p>
                  <p className="text-sm text-slate-500">{doc.owner}</p>
                </div>
                <span className="text-sm text-slate-500">{doc.date}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case 'historico':
      return (
        <div className="card-surface p-5">
          <h3 className="section-title mb-4">Histórico de operações</h3>
          <div className="space-y-4 border-l border-slate-200 pl-4">
            {timeline.map((item, index) => (
              <div key={item} className="relative">
                <span className="absolute -left-[1.12rem] top-1 h-2.5 w-2.5 rounded-full bg-gma-600" />
                <p className="text-slate-700">{item}</p>
                <p className="mt-1 text-xs text-slate-400">Evento {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'configuracoes':
      return (
        <div className="card-surface p-5">
          <h3 className="section-title mb-4">Configurações</h3>
          <div className="space-y-3">
            {settings.map((item) => (
              <div key={item} className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                <span className="font-medium text-slate-700">{item}</span>
                <button className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700">Editar</button>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

export function AppShell() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeModule, setActiveModule] = useState<ModuleKey>('dashboard');

  const currentModuleLabel = useMemo(
    () => modules.find((module) => module.key === activeModule)?.label ?? 'Dashboard',
    [activeModule]
  );

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#0f766e_0%,_#0f172a_50%,_#020617_100%)] p-6">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-sm lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col justify-between bg-slate-950/60 p-8 text-white">
            <div>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gma-500 text-lg font-bold text-white">G</span>
                <span className="text-lg font-semibold tracking-[0.2em] text-white">ROBÔ GMA</span>
              </div>

              <h1 className="max-w-md text-4xl font-bold leading-tight">Gestão administrativa inteligente para condomínios.</h1>
              <p className="mt-5 max-w-md text-base text-slate-300">
                Centralize operações, comunicação, documentos e controle financeiro com uma plataforma moderna e responsiva.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-gma-300">148</p>
                <p className="mt-1 text-sm text-slate-300">Condomínios</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-gma-300">36</p>
                <p className="mt-1 text-sm text-slate-300">Pendências</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-gma-300">24/7</p>
                <p className="mt-1 text-sm text-slate-300">Monitoramento</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white p-8">
            <div className="w-full max-w-md">
              <div className="mb-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-gma-700">Acesso administrativo</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Entrar no sistema</h2>
              </div>

              <form
                className="space-y-5"
                onSubmit={(event) => {
                  event.preventDefault();
                  setIsAuthenticated(true);
                }}
              >
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Usuário</label>
                  <input
                    defaultValue="admin@gma.com.br"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-gma-500 focus:ring-2 focus:ring-gma-200"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Senha</label>
                  <input
                    type="password"
                    defaultValue="123456"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-gma-500 focus:ring-2 focus:ring-gma-200"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="inline-flex items-center gap-2 text-slate-600">
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                    Permanecer conectado
                  </label>
                  <button type="button" className="font-medium text-gma-700">
                    Esqueci a senha
                  </button>
                </div>

                <button type="submit" className="w-full rounded-xl bg-gma-600 px-4 py-3 font-semibold text-white transition hover:bg-gma-700">
                  Acessar painel
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-100">
      <aside className="w-full max-w-[280px] bg-slate-950 p-5 text-slate-200">
        <div className="mb-8 flex items-center gap-3 px-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gma-500 text-xl font-bold text-white">G</div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Sistema</p>
            <h1 className="text-xl font-semibold text-white">ROBÔ GMA</h1>
          </div>
        </div>

        <nav className="space-y-2">
          {modules.map((module) => (
            <button
              key={module.key}
              type="button"
              onClick={() => setActiveModule(module.key)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
                activeModule === module.key
                  ? 'bg-gma-600 text-white shadow-lg shadow-gma-500/20'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-base">{module.icon}</span>
              {module.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <header className="mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Painel principal</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">{currentModuleLabel}</h2>
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
        </header>

        {renderModuleContent(activeModule)}
      </main>
    </div>
  );
}
