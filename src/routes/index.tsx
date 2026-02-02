import { createFileRoute, Link } from '@tanstack/react-router'
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
    { name: 'Safety first', icon: <Shield className="w-6 h-6 text-primary" /> },
    { name: 'Confidentiality', icon: <Eye className="w-6 h-6 text-africa-gold" /> },
    { name: 'Integrity', icon: <Award className="w-6 h-6 text-africa-red" /> },
    { name: 'Accountability', icon: <Users className="w-6 h-6 text-primary" /> },
  ]

  const services = [
    {
      title: 'Confidential Reporting & Whistleblowing Systems',
      description: 'Design, implementation, and management of secure reporting mechanisms for: Sexual Exploitation, Abuse, and Harassment (SEAH), Child safeguarding concerns.',
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      image: '/service-whistleblowing.png',
    },
    {
      title: 'Safeguarding Policy Development',
      description: 'Support to develop, review, and operationalise: Child safeguarding policies (schools & NGOs), Codes of Conduct, Reporting, investigation.',
      icon: <FileText className="w-8 h-8 text-primary" />,
      image: '/service-safeguarding.png',
    },
    {
      title: 'Training & Capacity Building',
      description: 'NGO staff and partners, Teachers, school leaders, and education officers, Corporate staff, HR, and compliance teams, Government officials and programme managers.',
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      image: '/service-training.png',
    },
    {
      title: 'Case Management & Survivor Referral Support',
      description: 'Guidance on survivor-centred case handling, Safe documentation and information management, Referral mapping to medical, psychosocial.',
      icon: <UserCheck className="w-8 h-8 text-primary" />,
      image: '/service-policy.png',
    },
  ]

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 border-b border-border">
        <div className="p-8 lg:p-10 space-y-6 border-r border-border bg-white flex flex-col justify-center relative">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px:16px] pointer-events-none" />
          <div className="space-y-4 relative z-10">
            <div className="inline-block border-2 border-africa-gold px-6 py-2 text-[10px] font-black uppercase tracking-[0.5em] text-africa-gold">
              Trusted Reporting.
            </div>
            <h1 className="text-4xl lg:text-6xl font-black tracking-[calc(var(--spacing)*-0.05)] text-foreground leading-[0.9] uppercase">
              Safer Communities
            </h1>
            <div className="max-w-md border-l-8 border-africa-red pl-8 py-2 bg-secondary/10">
              <p className="text-lg text-foreground font-black uppercase tracking-tight leading-none italic">
                "Report it if it's suspicious."
              </p>
            </div>
          </div>

          <div className="space-y-6 relative z-10">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-bold">
              SpeakSafe Africa is positioned as a trusted, survivor-centred safeguarding and whistleblowing partner, focused on enabling safe disclosure, ethical action, and institutional accountability across Africa.
            </p>
            <div className="flex flex-col sm:flex-row shadow-[10px_10px_0_rgba(0,0,0,0.05)]">
              <Link to="/report" className="bg-primary px-8 py-6 text-sm font-black uppercase tracking-[0.3em] text-primary-foreground hover:bg-primary/90 transition-all flex items-center justify-center border-r border-white/10 flex-grow">
                Create a Secure Report
                <ArrowRight className="ml-4 h-5 w-5" />
              </Link>
              <Link to="/contact" className="border-t sm:border-t-0 sm:border-l border-border bg-white px-8 py-6 text-sm font-black uppercase tracking-[0.3em] text-foreground hover:bg-secondary/20 transition-all flex items-center justify-center flex-grow">
                Learn More
              </Link>
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
              alt="Speak Safe Africa Hero"
              className="w-full h-full object-cover grayscale contrast-150 brightness-90"
            />
          </div>

          <div className="w-full flex justify-between items-center gap-4 pt-6 border-t border-border mt-6 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">Reporting Channels:</span>
            <div className="flex flex-wrap gap-5 items-center">
              <div className="flex flex-col group cursor-pointer">
                <div className="flex items-center gap-3 text-primary group-hover:text-primary/80 transition-colors">
                  <Smartphone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-xl font-black uppercase text-foreground tracking-tight">0700512997</span>
                </div>
                <div className="flex gap-2 text-[8px] font-bold uppercase text-muted-foreground ml-8 tracking-widest bg-secondary/10 px-2 py-1 rounded w-fit">
                  <span>Calls</span>
                  <span className="text-africa-gold">•</span>
                  <span>WhatsApp</span>
                  <span className="text-africa-red">•</span>
                  <span>SMS</span>
                </div>
              </div>



              <div className="flex flex-col group cursor-pointer" title="report@speaksafe.africa">
                <div className="flex items-center gap-3 text-primary group-hover:text-primary/80 transition-colors">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-lg md:text-xl font-black uppercase text-foreground tracking-tight hidden sm:inline-block">report@speaksafe.africa</span>
                </div>
                <div className="flex gap-2 text-[8px] font-bold uppercase text-muted-foreground ml-8 tracking-widest bg-secondary/10 px-2 py-1 rounded w-fit">
                  <span>24/7 Support</span>
                  <span className="text-africa-gold">•</span>
                  <span>Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Partners />

      {/* Vision & Mission */}
      <section id="vision" className="grid md:grid-cols-2 border-b border-border">
        <div className="p-12 lg:p-20 space-y-8 bg-primary text-primary-foreground border-r border-border relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-4 opacity-20 text-[6rem] font-black leading-none pointer-events-none uppercase tracking-tighter text-africa-gold">V</div>
          <h2 className="text-[10px] font-black uppercase tracking-[1em] text-africa-gold border-b border-africa-gold/20 pb-4 relative z-10">Vision</h2>
          <p className="text-2xl lg:text-4xl font-black uppercase leading-[1.2] tracking-tighter relative z-10">
            An Africa where speaking out is safe, trusted, and leads to meaningful action.
          </p>
        </div>
        <div className="p-12 lg:p-20 space-y-12 bg-white text-foreground relative flex flex-col justify-center">
          <div className="absolute bottom-0 left-0 p-8 opacity-5 text-[10rem] font-black leading-none pointer-events-none uppercase tracking-tighter text-africa-red">M</div>
          <h2 className="text-xs font-black uppercase tracking-[1em] text-africa-red border-b border-africa-red/20 pb-8 relative z-10">Mission</h2>
          <p className="text-lg lg:text-2xl font-black leading-tight tracking-tight uppercase relative z-10">
            SpeakSafe Africa exists to ensure that every person can speak up safely by providing confidential, survivor-centred safeguarding and whistleblowing systems that strengthen accountability, ethical conduct, and protection across institutions.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-b border-border bg-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-x divide-border border-b border-border">
          {coreValues.map((value, i) => (
            <div key={value.name} className={`p-16 flex flex-col items-center justify-center space-y-8 hover:bg-secondary/10 transition-colors group ${i >= 3 ? 'border-t md:border-t-0' : ''}`}>
              <div className="group-hover:scale-125 transition-transform">
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
                  <Link to="/contact" className="text-[10px] font-black uppercase tracking-[0.4em] flex items-center group-hover:text-white transition-colors">
                    Learn More <ArrowRight className="ml-4 h-4 w-4" />
                  </Link>
                  <span className={`font-black opacity-20 text-4xl group-hover:text-white/20 transition-colors ${i % 3 === 0 ? 'text-primary' : i % 3 === 1 ? 'text-africa-gold' : 'text-africa-red'}`}>/0{(i + 1)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div >
  )
}
