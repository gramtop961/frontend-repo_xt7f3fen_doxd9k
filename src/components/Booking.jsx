import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({ full_name: "", phone: "", email: "", service_title: "", preferred_date: "", preferred_time: "", notes: "" });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });
    try {
      const base = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${base}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Gabim gjatë dërgimit");
      setStatus({ loading: false, success: "Rezervimi u dërgua me sukses! Do t'ju kontaktojmë së shpejti.", error: null });
      setForm({ full_name: "", phone: "", email: "", service_title: "", preferred_date: "", preferred_time: "", notes: "" });
    } catch (e) {
      setStatus({ loading: false, success: null, error: e.message || "Gabim i panjohur" });
    }
  };

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="booking" className="py-20 md:py-28 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Rezervime</h2>
        <p className="mt-3 text-slate-300">Plotësoni formularin për të lënë një prenotim. Ne do të konfirmojmë orarin me ju.</p>

        <form onSubmit={submit} className="mt-10 grid md:grid-cols-2 gap-6 bg-slate-900/60 border border-white/10 p-6 rounded-2xl">
          <div className="grid gap-4">
            <input name="full_name" value={form.full_name} onChange={update} required placeholder="Emri i plotë" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-200/40" />
            <div className="grid grid-cols-2 gap-4">
              <input name="phone" value={form.phone} onChange={update} required placeholder="Telefoni" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-200/40" />
              <input name="email" value={form.email} onChange={update} placeholder="Email (opsionale)" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-200/40" />
            </div>
            <input name="service_title" value={form.service_title} onChange={update} required placeholder="Shërbimi i kërkuar (p.sh. Haircut)" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-200/40" />
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="date" name="preferred_date" value={form.preferred_date} onChange={update} required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-200/40" />
              <input type="time" name="preferred_time" value={form.preferred_time} onChange={update} required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-200/40" />
            </div>
            <textarea name="notes" value={form.notes} onChange={update} rows="3" placeholder="Shënime (opsionale)" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-200/40" />
            <div className="flex items-center justify-end">
              <button disabled={status.loading} className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-medium hover:bg-rose-100 transition-colors disabled:opacity-60">
                {status.loading ? "Duke dërguar..." : "Dërgo rezervimin"}
              </button>
            </div>
            {status.success && <p className="text-emerald-300">{status.success}</p>}
            {status.error && <p className="text-red-300">{status.error}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
