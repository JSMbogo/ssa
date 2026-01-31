import { ArrowRight, Heart } from 'lucide-react'

export default function Partners() {
    const partners = [
        { name: 'Black Life', logo: null },
        { name: 'New Vision', logo: null },
        { name: 'Nation', logo: null },
        { name: 'Mukwano', logo: null },
        { name: 'MTN', logo: null },
        { name: 'BOA', logo: null },
        { name: 'Browserbase', logo: null },
        { name: 'PesaPal', logo: null },
        { name: 'GPV', logo: null },
        { name: 'Pylon', logo: null },
    ]

    return (
        <section className="border-b border-border bg-secondary/5 mb-10 mt-10">
            <div className="border-b border-border py-3 px-6 flex items-center justify-center text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/80 flex items-center gap-2 flex-wrap justify-center leading-none">
                    100+ Organizations trust Safe Space Africa.
                    <span className="text-primary flex items-center gap-1 cursor-pointer hover:underline decoration-2 underline-offset-4 decoration-primary">
                        See why classes <Heart className="h-3 w-3 fill-current" /> us <ArrowRight className="h-3 w-3" />
                    </span>
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-border border-b border-border">
                {partners.slice(0, 5).map((partner, i) => (
                    <div key={i} className="group flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 bg-white hover:bg-secondary/5 h-14 md:h-16 relative overflow-hidden">
                        <span className="text-sm font-bold text-foreground/40 group-hover:text-foreground transition-colors font-mono uppercase tracking-tight">
                            {partner.name}
                        </span>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-border">
                {partners.slice(5, 10).map((partner, i) => (
                    <div key={i} className="group flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 bg-white hover:bg-secondary/5 h-14 md:h-16 relative overflow-hidden">
                        <span className="text-sm font-bold text-foreground/40 group-hover:text-foreground transition-colors font-mono uppercase tracking-tight">
                            {partner.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}
