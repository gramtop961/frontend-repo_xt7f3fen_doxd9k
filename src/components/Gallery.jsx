export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559595500-e15296bdb2b0?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517167685284-96dd43deca1d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514846326710-096e4a8035e0?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Galeria</h2>
            <p className="mt-3 text-slate-300">Foto reale nga puna jonë dhe ambienti i sallonit.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-white/10">
              <img src={src} alt={`Galeria ${i+1}`} className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
