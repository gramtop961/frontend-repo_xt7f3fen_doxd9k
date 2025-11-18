export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Kontakt</h2>
            <p className="mt-3 text-slate-300">Adresa: Rr. Shembull 123, Tiranë</p>
            <p className="text-slate-300">Tel: +355 xx xxx xxxx</p>
            <p className="text-slate-300">Email: info@prestigesalon.al</p>

            <div className="mt-6">
              <iframe
                title="Harta"
                src="https://www.google.com/maps?q=tirana&output=embed"
                className="w-full h-64 rounded-2xl border border-white/10"
                loading="lazy"
              />
            </div>
          </div>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white text-xl font-medium">Na shkruani</h3>
            <form className="mt-4 grid gap-3" onSubmit={(e)=>e.preventDefault()}>
              <input placeholder="Emri i plotë" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none" />
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none" />
                <input placeholder="Telefoni" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none" />
              </div>
              <textarea rows="4" placeholder="Mesazhi juaj" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none" />
              <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-medium hover:bg-rose-100 transition-colors">Dërgo</button>
              <p className="text-slate-400 text-sm">Ose na shkruani në rrjete sociale.</p>
              <div className="flex gap-3">
                <a href="https://instagram.com" target="_blank" className="text-rose-200 hover:text-white underline underline-offset-4">Instagram</a>
                <a href="https://facebook.com" target="_blank" className="text-rose-200 hover:text-white underline underline-offset-4">Facebook</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
