import { Shield } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-foreground text-background border-t border-border mt-auto">
            <div className="grid md:grid-cols-4 divide-x divide-white/10">
                <div className="p-12 md:col-span-2 space-y-8">
                    <div className="flex items-center space-x-2">
                        <Shield className="h-10 w-10 text-primary" />
                        <span className="text-3xl font-black tracking-tighter uppercase">
                            Speak Safe <span className="text-primary tracking-normal">Africa</span>
                        </span>
                    </div>
                    <p className="text-emerald-100/40 text-lg max-w-md font-medium">
                        A trusted, independent platform dedicated to safeguarding, ethical accountability, and secure reporting across the continent.
                    </p>
                </div>
                <div className="p-12 space-y-6">
                    <h5 className="font-black text-white text-xs uppercase tracking-[0.3em] border-b border-white/10 pb-4">Quick Links</h5>
                    <ul className="space-y-4 text-emerald-100/60 font-bold uppercase tracking-widest text-[10px]">
                        <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                        <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                        <li><a href="#vision" className="hover:text-primary transition-colors">Vision & Mission</a></li>
                    </ul>
                </div>
                <div className="p-12 space-y-6">
                    <h5 className="font-black text-white text-xs uppercase tracking-[0.3em] border-b border-white/10 pb-4">Contact</h5>
                    <ul className="space-y-4 text-emerald-100/60 font-bold uppercase tracking-widest text-[10px]">
                        <li>General Enquiries: info@speaksafe.africa</li>
                        <li>Secure Reporting: report@speaksafe.africa</li>
                        <li>Calls / WhatsApp / SMS: 0700512997</li>
                        <li>Location: Africa Regional Operations</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/5 p-8 text-center text-emerald-100/20 text-[10px] font-black uppercase tracking-[0.5em]">
                <p>© 2026 Speak Safe Africa. All rights reserved.</p>
            </div>
        </footer>
    )
}
