export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(40%_60%_at_70%_30%,#fecdd3_0%,transparent_60%)]" />
      <div className="absolute -top-20 -left-40 w-[36rem] h-[36rem] rounded-full bg-rose-200/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Elegancë e përjetshme, kujdes i personalizuar
            </h1>
            <p className="mt-5 text-slate-300 leading-relaxed">
              Prestige Beauty Salon ofron shërbime premium për flokë, thonj dhe lëkurë
              me estetikë moderne dhe standarde të larta. Rezervoni online me disa klikime.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#booking" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-medium hover:bg-rose-100 transition-colors">
                Rezervo tani
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/30 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors">
                Shiko shërbimet
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1514846326710-096e4a8035e0?q=80&w=1600&auto=format&fit=crop"
                alt="Prestige Beauty Salon"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-3xl bg-rose-200/20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
