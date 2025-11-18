export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Rreth nesh</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Te Prestige, besojmë në bukuri të natyrshme dhe elegancë të thjeshtë.
              Ekipi ynë me eksperiencë shumëvjeçare kujdeset që çdo eksperiencë të jetë
              e personalizuar sipas stilit dhe nevojave tuaja.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Ambient minimal, tonalitete të buta dhe produkte profesionale premium –
              çdo detaj është menduar për rehati dhe rezultate perfekte.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-2xl border border-white/10" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop" alt="Stafi" />
            <img className="rounded-2xl border border-white/10" src="https://images.unsplash.com/photo-1559595500-e15296bdb2b0?q=80&w=1200&auto=format&fit=crop" alt="Ambienti" />
            <img className="rounded-2xl border border-white/10" src="https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=1200&auto=format&fit=crop" alt="Detaje" />
            <img className="rounded-2xl border border-white/10" src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop" alt="Puna" />
          </div>
        </div>
      </div>
    </section>
  )
}
