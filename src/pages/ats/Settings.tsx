import TopBar from '@/components/ats/TopBar';
import { Building2, Users, Bell, Shield, Plug, CreditCard } from 'lucide-react';

const sections = [
  { icon: Building2, title: 'Company Profile', description: 'Logo, name, careers page branding' },
  { icon: Users, title: 'Team & Permissions', description: 'Invite recruiters and managers' },
  { icon: Bell, title: 'Notifications', description: 'Email and Slack preferences' },
  { icon: Shield, title: 'Security', description: 'SSO, 2FA, audit logs' },
  { icon: Plug, title: 'Integrations', description: 'Slack, Google Calendar, LinkedIn' },
  { icon: CreditCard, title: 'Billing', description: 'Plan, invoices, payment method' },
];

export default function Settings() {
  return (
    <>
      <TopBar title="Settings" subtitle="Manage your workspace" />
      <div className="px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-5xl">
          {sections.map((s) => (
            <button
              key={s.title}
              className="text-left bg-[#16162a] border border-white/5 rounded-xl p-5 card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-[#6366f1]/15 text-[#a5b4fc] flex items-center justify-center mb-3">
                <s.icon size={20} />
              </div>
              <h3 className="text-base font-semibold text-white mb-1">{s.title}</h3>
              <p className="text-sm text-gray-400">{s.description}</p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
