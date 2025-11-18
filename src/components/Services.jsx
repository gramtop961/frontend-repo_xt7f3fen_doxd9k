import { useEffect, useState } from "react";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || "";
        const res = await fetch(`${base}/api/services`);
        const data = await res.json();
        setServices(data);
      } catch (e) {
        setError("Nuk u ngarkuan shërbimet");
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Shërbimet</h2>
        <p className="mt-3 text-slate-300">Lista e trajtimeve tona premium me çmime transparente.</p>

        {loading && <p className="text-slate-400 mt-6">Duke u ngarkuar...</p>}
        {error && <p className="text-red-300 mt-6">{error}</p>}

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.id || s.title} className="group rounded-2xl p-6 bg-slate-900/60 border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-medium text-white">{s.title}</h3>
                {s.duration_minutes && (
                  <span className="text-xs text-slate-400">{s.duration_minutes} min</span>
                )}
              </div>
              {s.description && (
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">{s.description}</p>
              )}
              <div className="mt-5 flex items-center justify-between">
                <span className="text-white font-semibold">€{Number(s.price).toFixed(2)}</span>
                <a href="#booking" className="text-rose-200 hover:text-white underline underline-offset-4">Rezervo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
