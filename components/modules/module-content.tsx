import { Panel, Topbar } from '@/components/layout/topbar';
import { SummaryCard } from '@/components/ui/summary-card';

export type ModuleKey =
  | 'dashboard'
  | 'emails'
  | 'whatsapp'
  | 'fiscal'
  | 'condominios'
  | 'documentos'
  | 'historico'
  | 'configuracoes';

export type ModuleItem = {
  key: ModuleKey;
  label: string;
  icon: string;
};

export const modules: ModuleItem[] = [
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
  { label: 'Condomínios', value: '148', trend: '+12%', tone: 'emerald' as const },
  { label: 'Documentos pendentes', value: '36', trend: '-8%', tone: 'amber' as const },
  { label: 'Mensagens', value: '2.340', trend: '+18%', tone: 'sky' as const },
  { label: 'Notas fiscais', value: '591', trend: '+9%', tone: 'violet' as const }
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

const statusClass = (status: string) => {
  const styles: Record<string, string> = {
    Concluído: 'bg-emerald-100 text-emerald-700',
    'Em análise': 'bg-amber-100 text-amber-700',
    Pendente: 'bg-slate-100 text-slate-700',
    Respondida: 'bg-sky-100 text-sky-700',
    Ativa: 'bg-emerald-100 text-emerald-700',
    'Em espera': 'bg-amber-100 text-amber-700',
    Emitida: 'bg-emerald-100 text-emerald-700',
    Agendada: 'bg-violet-100 text-violet-700',
    Ativo: 'bg-emerald-100 text-emerald-700',
    'Em revisão': 'bg-amber-100 text-amber-700'
  };

  return styles[status] ?? 'bg-slate-100 text-slate-700';
};

export function renderModuleContent(activeModule: ModuleKey) {
  switch (activeModule) {
    case 'dashboard':
      return (
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {dashboardCards.map((card) => (
              <SummaryCard
                key={card.label}
                label={card.label}
                value={card.value}
                trend={card.trend}
                tone={card.tone}
              />
            ))}
          </div>

          <Panel title="Atividades recentes" action={<button className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">Ver tudo</button>}>
            <div className="space-y-3">
              {recentActivity.map((item) => (
                <div key={item.title} className="flex flex-col gap-2 rounded-xl border border-slate-200 p-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-medium text-slate-800">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.detail}</p>
                  </div>
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusClass(item.status)}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      );

    case 'emails':
      return (
        <Panel
          title="Central de e-mails"
          action={<button className="rounded-lg bg-gma-600 px-3 py-2 text-sm font-medium text-white">Nova rotina</button>}
        >
          <div className="space-y-3">
            {emails.map((email) => (
              <div key={email.subject} className="rounded-xl border border-slate-200 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-medium text-slate-800">{email.from}</p>
                    <p className="text-sm text-slate-600">{email.subject}</p>
                  </div>
                  <span className="inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700">
                    {email.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      );

    case 'whatsapp':
      return (
        <Panel
          title="Central de WhatsApp"
          action={<button className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white">Abrir fila</button>}
        >
          <div className="space-y-3">
            {whatsappConversations.map((chat) => (
              <div key={chat.name} className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-medium text-slate-800">{chat.name}</p>
                  <p className="text-sm text-slate-500">{chat.status}</p>
                </div>
                <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusClass(chat.status)}`}>
                  {chat.unread} não lidas
                </span>
              </div>
            ))}
          </div>
        </Panel>
      );

    case 'fiscal':
      return (
        <Panel
          title="Emissor Fiscal"
          action={<button className="rounded-lg bg-gma-600 px-3 py-2 text-sm font-medium text-white">Nova emissão</button>}
        >
          <div className="space-y-3">
            {fiscalData.map((item) => (
              <div key={item.number} className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-medium text-slate-800">{item.number}</p>
                  <p className="text-sm text-slate-500">{item.value}</p>
                </div>
                <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusClass(item.status)}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </Panel>
      );

    case 'condominios':
      return (
        <Panel
          title="Cadastro de condomínios"
          action={<button className="rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-white">Cadastrar</button>}
        >
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
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusClass(condominio.status)}`}>
                    {condominio.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      );

    case 'documentos':
      return (
        <Panel title="Documentos" action={<button className="rounded-lg bg-gma-600 px-3 py-2 text-sm font-medium text-white">Upload</button>}>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.name} className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-medium text-slate-800">{doc.name}</p>
                  <p className="text-sm text-slate-500">{doc.owner}</p>
                </div>
                <span className="text-sm text-slate-500">{doc.date}</span>
              </div>
            ))}
          </div>
        </Panel>
      );

    case 'historico':
      return (
        <Panel title="Histórico de operações">
          <div className="space-y-4 border-l border-slate-200 pl-4">
            {timeline.map((item, index) => (
              <div key={item} className="relative">
                <span className="absolute -left-[1.12rem] top-1 h-2.5 w-2.5 rounded-full bg-gma-600" />
                <p className="text-slate-700">{item}</p>
                <p className="mt-1 text-xs text-slate-400">Evento {index + 1}</p>
              </div>
            ))}
          </div>
        </Panel>
      );

    case 'configuracoes':
      return (
        <Panel title="Configurações">
          <div className="space-y-3">
            {settings.map((item) => (
              <div key={item} className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-medium text-slate-700">{item}</span>
                <button className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700">
                  Editar
                </button>
              </div>
            ))}
          </div>
        </Panel>
      );

    default:
      return null;
  }
}

export { Topbar };
