import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import SocialFeed from "./components/SocialFeed";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Booking />
        <SocialFeed />
        <Contact />
      </main>
      <footer className="py-10 border-t border-white/10 bg-slate-950/60">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Prestige Beauty Salon. Të gjitha të drejtat e rezervuara.</p>
          <p className="text-slate-400 text-sm">Dizajn minimalist, ngjyra të buta, performancë e optimizuar.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;