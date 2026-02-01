
export default function Partners() {
    const partners = [
        { name: 'English', logo: null },
        { name: 'Luganda', logo: null },
        { name: 'Runyankole', logo: null },
        { name: 'Lusoga', logo: null },
        { name: 'Swahili', logo: null },
    ]

    return (
        <section className="border-b border-border bg-secondary/5 mb-10 mt-10">
            <div className="border-b border-border py-3 px-6 flex items-center justify-center text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/80 flex items-center gap-2 flex-wrap justify-center leading-none">
                    Languages we support
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
