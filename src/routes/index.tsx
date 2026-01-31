import { createFileRoute } from '@tanstack/react-router'
import Partners from '@/components/Partners'
import {
  Shield,
  Eye,
  HandHelping,
  Award,
  Users,
  Briefcase,
  FileText,
  UserCheck,
  BookOpen,
  MessageSquare,
  ArrowRight,
  Globe,
  Mail,
  MessageCircle,
  Smartphone,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const coreValues = [
    { name: 'Confidentiality', icon: <Eye className="w-6 h-6" /> },
    { name: 'Independence', icon: <Shield className="w-6 h-6" /> },
    { name: 'Survivor-centred', icon: <HandHelping className="w-6 h-6" /> },
    { name: 'Integrity', icon: <Award className="w-6 h-6" /> },
    { name: 'Accountability', icon: <Users className="w-6 h-6" /> },
    { name: 'Professionalism', icon: <Briefcase className="w-6 h-6" /> },
  ]

  const services = [
    {
      title: 'Whistleblowing & Reporting Systems',
      description: 'Anonymous and confidential channels (Web, Email, WhatsApp, SMS) and secure case tracking.',
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      image: '/service-whistleblowing.png',
    },
    {
      title: 'Safeguarding & Ethics Case Management',
      description: 'Independent intake, triage, risk assessment, and survivor support coordination.',
      icon: <UserCheck className="w-8 h-8 text-primary" />,
      image: '/service-safeguarding.png',
    },
    {
      title: 'Policy & Compliance Support',
      description: 'Development of safeguarding and whistleblowing policies, and Codes of Conduct.',
      icon: <FileText className="w-8 h-8 text-primary" />,
      image: '/service-policy.png',
    },
    {
      title: 'Training & Capacity Building',
      description: 'Leadership training, safeguarding awareness, and annual refresher sessions.',
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      image: '/service-training.png',
    },
  ]

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 border-b border-border">
        <div className="p-8 lg:p-10 space-y-6 border-r border-border bg-white flex flex-col justify-center relative">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px:16px] pointer-events-none" />
          <div className="space-y-4 relative z-10">
            <div className="inline-block border-2 border-primary px-6 py-2 text-[10px] font-black uppercase tracking-[0.5em] text-primary">
              Trust & Accountability
            </div>
            <h1 className="text-4xl lg:text-6xl font-black tracking-[calc(var(--spacing)*-0.05)] text-foreground leading-[0.9] uppercase">
              A safe place <br />
              <span className="text-primary italic">to speak.</span> <br />
              <span className="text-foreground">A trusted way</span> <br />
              <span className="text-primary italic">to act.</span>
            </h1>
            <div className="max-w-md border-l-8 border-primary pl-8 py-2 bg-secondary/10">
              <p className="text-lg text-foreground font-black uppercase tracking-tight leading-none italic">
                "Report it if it's suspicious."
              </p>
            </div>
          </div>

          <div className="space-y-6 relative z-10">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-bold">
              Safe Space Africa provides independent safeguarding services that help organizations create safe reporting environments.
            </p>
            <div className="flex flex-col sm:flex-row shadow-[10px_10px_0_rgba(0,0,0,0.05)]">
              <button className="bg-primary px-8 py-6 text-sm font-black uppercase tracking-[0.3em] text-primary-foreground hover:bg-primary/90 transition-all flex items-center justify-center border-r border-white/10 flex-grow">
                Create a Secure Report
                <ArrowRight className="ml-4 h-5 w-5" />
              </button>
              <button className="border-t sm:border-t-0 sm:border-l border-border bg-white px-8 py-6 text-sm font-black uppercase tracking-[0.3em] text-foreground hover:bg-secondary/20 transition-all flex items-center justify-center flex-grow">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="bg-secondary/5 relative flex flex-col items-center justify-center p-8 lg:p-10 overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:32px_32px]" />
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-border" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-border" />
          <div className="relative border-[12px] border-white shadow-[-15px_15px_0_rgba(0,0,0,0.05)] z-10 w-full aspect-square overflow-hidden max-w-[400px]">
            <img
              src="/hero.png"
              alt="Safe Space Africa Hero"
              className="w-full h-full object-cover grayscale contrast-150 brightness-90"
            />
          </div>

          <div className="w-full flex justify-between items-center gap-4 pt-6 border-t border-border mt-6 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">Reporting Channels:</span>
            <div className="flex gap-4 lg:gap-6">
              <div className="flex items-center gap-2 group cursor-pointer" title="Web Reporting">
                <Globe className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase hidden sm:inline-block">Web</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer" title="Email Reporting">
                <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase hidden sm:inline-block">Email</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer" title="WhatsApp Reporting">
                <MessageCircle className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase hidden sm:inline-block">WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer" title="SMS Reporting">
                <Smartphone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase hidden sm:inline-block">SMS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Partners />

      {/* Vision & Mission */}
      <section id="vision" className="grid md:grid-cols-2 border-b border-border">
        <div className="p-12 lg:p-20 space-y-8 bg-primary text-primary-foreground border-r border-border relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-4 opacity-20 text-[6rem] font-black leading-none pointer-events-none uppercase tracking-tighter">V</div>
          <h2 className="text-[10px] font-black uppercase tracking-[1em] text-primary-foreground/40 border-b border-primary-foreground/20 pb-4 relative z-10">Vision</h2>
          <p className="text-3xl lg:text-5xl font-black uppercase leading-[1] tracking-tighter relative z-10">
            Africa’s most <br /> trusted platform <br /> for ethical <br /> reporting.
          </p>
        </div>
        <div className="p-12 lg:p-20 space-y-12 bg-white text-foreground relative flex flex-col justify-center">
          <div className="absolute bottom-0 left-0 p-8 opacity-5 text-[10rem] font-black leading-none pointer-events-none uppercase tracking-tighter">M</div>
          <h2 className="text-xs font-black uppercase tracking-[1em] text-muted-foreground/40 border-b border-border pb-8 relative z-10">Mission</h2>
          <p className="text-3xl lg:text-5xl font-black leading-none tracking-tight uppercase relative z-10">
            CONFIDENTIAL & INDEPENDENT safeguarding solutions.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-b border-border bg-white">
        <div className="grid md:grid-cols-3 lg:grid-cols-6 divide-x divide-border border-b border-border">
          {coreValues.map((value, i) => (
            <div key={value.name} className={`p-16 flex flex-col items-center justify-center space-y-8 hover:bg-secondary/10 transition-colors group ${i >= 3 ? 'border-t md:border-t-0' : ''}`}>
              <div className="text-primary group-hover:scale-125 transition-transform">
                {value.icon}
              </div>
              <span className="font-black uppercase tracking-[0.3em] text-[10px] text-center">{value.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white">
        <div className="grid lg:grid-cols-[1fr_2fr] border-b border-border">
          <div className="p-16 lg:p-24 border-r border-border bg-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />
            <h2 className="text-xs font-black uppercase tracking-[0.8em] text-primary/40 border-b border-primary/20 pb-8 mb-8 relative z-10">How We Help</h2>
            <h3 className="text-4xl font-black text-foreground uppercase tracking-tighter leading-none mb-6 relative z-10">Services <br /> Provided</h3>
            <div className="border-l-8 border-primary p-10 bg-secondary/20 relative z-10">
              <p className="text-foreground text-sm uppercase font-black tracking-widest leading-loose">
                "Note: we do not replace Law Enforcement but we coordinate."
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 divide-x divide-border divide-y md:divide-y-0 relative">
            {services.map((service, i) => (
              <div key={service.title} className="relative p-10 space-y-8 bg-white transition-all group flex flex-col justify-between border-b border-border overflow-hidden cursor-pointer hover:border-transparent">
                {/* Background Image on Hover */}
                <div
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%) brightness(0.4)'
                  }}
                />

                <div className="space-y-8 relative z-10">
                  <div className="text-primary group-hover:text-white transition-colors group-hover:translate-x-4 transition-transform inline-block">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight leading-none h-16 flex items-center group-hover:text-white transition-colors">{service.title}</h4>
                  <p className="text-muted-foreground font-bold leading-relaxed group-hover:text-white/80 transition-colors">{service.description}</p>
                </div>
                <div className="relative z-10 pt-10 border-t border-border group-hover:border-white/20 flex justify-between items-center mt-auto">
                  <button className="text-[10px] font-black uppercase tracking-[0.4em] flex items-center group-hover:text-white transition-colors">
                    Learn More <ArrowRight className="ml-4 h-4 w-4" />
                  </button>
                  <span className="text-primary font-black opacity-20 text-4xl group-hover:text-white/20 transition-colors">/0{(i + 1)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div >
  )
}
