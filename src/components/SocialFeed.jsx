import { useEffect, useState } from "react";

export default function SocialFeed() {
  const [ig, setIg] = useState([]);

  useEffect(() => {
    const run = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || "";
        const res = await fetch(`${base}/api/social/instagram`);
        const data = await res.json();
        setIg(Array.isArray(data) ? data : []);
      } catch {}
    };
    run();
  }, []);

  if (!ig.length) return null;

  return (
    <section className="py-16 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <h3 className="text-white text-2xl font-semibold">Nga Instagram</h3>
          <a href="https://instagram.com" target="_blank" className="text-rose-200 hover:text-white underline underline-offset-4">Ndiqni profilin</a>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {ig.map((p) => (
            <a key={p.id} href={p.permalink} target="_blank" className="block group rounded-xl overflow-hidden border border-white/10">
              <img src={p.image_url} alt={p.caption || "post"} className="w-full h-40 object-cover group-hover:scale-105 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
