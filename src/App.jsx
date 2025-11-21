import React, { useState, useEffect } from 'react';
import { 
  Play, Instagram, Facebook, Mail, Menu, X, 
  Clapperboard, Smartphone, Palette, Megaphone, Globe,
  ShieldCheck, ArrowRight, ChevronDown, Users, Zap, Film, Monitor
} from 'lucide-react';

// --- LOGO COMPONENT (Identidad Visual) ---
const EscofilmLogo = ({ className = "h-8" }) => (
  <svg viewBox="0 0 240 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="40" fontFamily="sans-serif" fontWeight="400" fontSize="32" fill="currentColor" letterSpacing="2">
      ESCOFILM
    </text>
    <path d="M 145 15 L 210 15" stroke="currentColor" strokeWidth="2" />
    <path d="M 145 15 L 145 25" stroke="currentColor" strokeWidth="2" />
    <circle cx="215" cy="15" r="2" fill="#fbbf24" />
  </svg>
);

// --- NAVIGATION ---
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Agencia', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled || isMobileMenuOpen ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 cursor-pointer text-white hover:text-amber-400 transition-colors duration-300">
            <EscofilmLogo className="h-8 md:h-10" />
          </div>
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-xs font-bold text-zinc-300 hover:text-white transition-colors uppercase tracking-[0.15em]">
                {link.name}
              </a>
            ))}
            <a href="#contacto" className="bg-white text-black px-6 py-3 rounded-none font-bold text-xs uppercase tracking-widest hover:bg-amber-400 transition-all duration-300">
              Cotizar Proyecto
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-zinc-300 hover:text-white p-2">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-zinc-800 animate-in slide-in-from-top-5">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-zinc-400 hover:text-white uppercase tracking-widest">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// --- HERO SECTION (OPTIMIZADO VISUALMENTE) ---
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* CAPA DE VIDEO CON MEJORAS CSS */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            // Aquí usamos un poster de alta calidad para la carga
            poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            // CLASES CLAVE:
            // object-cover: Cubre toda la pantalla.
            // mix-blend-overlay: Se fusiona con el fondo negro para oscurecerlo naturalmente.
            // brightness-75: Baja el brillo para que el texto resalte.
            // contrast-125: ¡TRUCO! Aumenta el contraste para que parezca más HD.
            // saturate-110: Aviva los colores.
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-normal filter brightness-75 contrast-125 saturate-110"
         >
            <source src="/reel.mp4" type="video/mp4" />
         </video>

         {/* --- TEXTURE OVERLAYS (El secreto para ocultar mala calidad) --- */}
         
         {/* 1. Trama de puntos (Grid) para disimular pixeles */}
         <div className="absolute inset-0 z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
         
         {/* 2. Scanlines (Estilo TV/Cine) */}
         <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-2 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>

         {/* 3. Viñeta oscura para centrar la atención */}
         <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,#000_90%)]"></div>
      </div>

      <div className="relative z-30 text-center px-4 max-w-6xl mx-auto mt-10">
        <div className="flex justify-center mb-8">
            <div className="px-4 py-2 border border-amber-400/30 bg-black/40 rounded-full backdrop-blur-md flex items-center gap-2 shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase">Producción Digital High-End</span>
            </div>
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9] drop-shadow-2xl">
          CREAMOS<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">LEGADO VISUAL</span>
        </h1>
        
        <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-300 font-medium leading-relaxed drop-shadow-md">
          Especialistas en traducir la identidad corporativa en contenido digital de alto impacto. 
          Video, Fotografía y Estrategia.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <a href="#portafolio" className="group relative px-8 py-4 bg-amber-400 text-black font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-all hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.4)]">
            Ver Showreel
            <Play size={14} className="fill-current" />
          </a>
          <a href="#contacto" className="px-8 py-4 border border-zinc-500 bg-black/30 backdrop-blur-sm text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all">
            Hablar con un Productor
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce z-30">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll</span>
        <ChevronDown size={20} className="text-zinc-500" />
      </div>
    </section>
  );
};

// --- ABOUT SECTION ---
const About = () => {
  return (
    <section id="nosotros" className="py-32 bg-black relative border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-amber-400"></div>
                <h2 className="text-amber-400 font-bold tracking-widest uppercase text-xs">La Agencia</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Fusión entre <span className="italic serif text-zinc-500">Arte Urbano</span> y <br/>Exigencia Corporativa.
            </h3>
            <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
              <p>
                En Escofilm, no somos solo operadores de cámara; somos narradores estratégicos. Entendemos que las Grandes Corporaciones necesitan algo más que "contenido bonito": necesitan seguridad, consistencia y un retorno de inversión claro.
              </p>
              <p>
                Nuestra metodología de "Personalización Total" elimina los paquetes genéricos. Analizamos tu marca, tu audiencia y tus objetivos comerciales para diseñar una producción visual que no solo se ve bien, sino que vende.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-zinc-900 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">4+</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Años Exp.</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Proyectos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">A Medida</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute top-0 right-0 w-full h-full bg-amber-400/10 -translate-y-4 translate-x-4 border border-amber-400/20 rounded-sm"></div>
            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="/set.png" 
                alt="Equipo Escofilm en Set" 
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
                 <div className="text-white font-bold">Set de Producción</div>
                 <div className="text-xs text-amber-400 uppercase tracking-wider">Behind the scenes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SERVICES SECTION ---
const Services = () => {
  const services = [
    {
      icon: <Film className="w-8 h-8 text-amber-400" />,
      title: "Producción Audiovisual",
      desc: "Video corporativo, comerciales y cobertura de eventos con equipos de cine digital 4K.",
    },
    {
      icon: <Megaphone className="w-8 h-8 text-white" />,
      title: "Campañas Publicitarias",
      desc: "Creatividad estratégica. Desde el concepto hasta la ejecución de campañas de alto impacto.",
    },
    {
      icon: <Users className="w-8 h-8 text-zinc-400" />,
      title: "Gestión Social Media",
      desc: "Community Management integral. No solo posteamos, gestionamos la reputación de tu marca.",
    },
    {
      icon: <Monitor className="w-8 h-8 text-amber-400" />,
      title: "Desarrollo Web & SEO",
      desc: "Sitios web corporativos optimizados para velocidad y conversión. Diseño UX/UI moderno.",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Meta Ads & Growth",
      desc: "Gestión de presupuesto publicitario en Facebook e Instagram para maximizar leads.",
    },
    {
      icon: <Palette className="w-8 h-8 text-zinc-400" />,
      title: "Diseño & Branding",
      desc: "Identidad visual, logotipos y manuales de marca asistidos por Inteligencia Artificial.",
    }
  ];

  return (
    <section id="servicios" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 md:flex justify-between items-end">
          <div>
             <div className="text-amber-400 font-bold tracking-widest uppercase text-xs mb-4">Nuestra Oferta</div>
             <h3 className="text-4xl font-bold text-white">Soluciones Integrales</h3>
          </div>
          <p className="mt-4 md:mt-0 text-zinc-500 max-w-md text-sm text-right hidden md:block">
            Todo lo que tu empresa necesita para dominar el entorno digital,<br/> centralizado en un solo proveedor.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
          {services.map((service, index) => (
            <div key={index} className="bg-black p-12 hover:bg-zinc-900/50 transition-colors group">
              <div className="mb-6 p-3 bg-zinc-900 w-fit rounded group-hover:bg-amber-400/10 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PORTFOLIO SECTION ---
const Portfolio = () => {
  return (
    <section id="portafolio" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div>
              <h2 className="text-zinc-500 font-bold tracking-widest uppercase text-xs mb-2">Showcase</h2>
              <h3 className="text-4xl font-bold text-white">Últimos Proyectos</h3>
           </div>
           <button className="text-white border-b border-amber-400 pb-1 hover:text-amber-400 transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2">
             Ver Portafolio Completo <ArrowRight size={14}/>
           </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[600px]">
            <div className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden bg-zinc-900">
                <img src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=800&q=80" alt="Fashion" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 flex flex-col justify-end p-8">
                    <div className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Campaña Moda</div>
                    <div className="text-white text-2xl font-bold">Vogue Style Shoot</div>
                </div>
            </div>
            <div className="relative group overflow-hidden bg-zinc-900">
                <img src="/comida.jpg" alt="Corporate" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"/>
                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                    <div className="text-white font-bold text-sm">Desserts</div>
                 </div>
            </div>
            <div className="relative group overflow-hidden bg-zinc-900">
                 <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80" alt="Urban" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"/>
                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                    <div className="text-white font-bold text-sm">Urban Brand</div>
                 </div>
            </div>
            <div className="lg:col-span-2 relative group overflow-hidden bg-zinc-900">
                 <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80" alt="Events" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 flex flex-col justify-end p-8">
                    <div className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Eventos</div>
                    <div className="text-white text-xl font-bold">Conferencia Global Tech</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

// --- CONTACT SECTION ---
const Contact = () => {
  return (
    <section id="contacto" className="py-32 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
          HABLEMOS DE <span className="text-zinc-700">NEGOCIOS</span>
        </h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-xl mx-auto font-light">
          ¿Listo para diferenciarte de tu competencia? Agenda una consultoría inicial sin costo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
           <a href="#" className="flex flex-col items-center justify-center p-8 bg-zinc-900 rounded-sm border border-zinc-800 hover:border-green-500/50 hover:bg-zinc-900/80 transition-all group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone size={24} />
              </div>
              <div className="text-white font-bold text-lg">WhatsApp Business</div>
              <div className="text-zinc-500 text-sm mt-1">Respuesta Rápida</div>
           </a>
           <a href="#" className="flex flex-col items-center justify-center p-8 bg-zinc-900 rounded-sm border border-zinc-800 hover:border-amber-400/50 hover:bg-zinc-900/80 transition-all group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
              </div>
              <div className="text-white font-bold text-lg">Email Corporativo</div>
              <div className="text-zinc-500 text-sm mt-1">Solicitar Propuesta PDF</div>
           </a>
        </div>
        <div className="mt-16 flex items-center justify-center gap-2 text-zinc-600 text-xs uppercase tracking-widest">
            <ShieldCheck size={14} />
            <span>Datos protegidos licencia autorizada</span>
        </div>
      </div>
    </section>
  );
};

// --- FOOTER ---
const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="flex items-center gap-2">
            <EscofilmLogo className="h-6 text-white" />
            <span className="text-zinc-600 text-xs">© 2025</span>
         </div>
         <div className="flex gap-8">
             <a href="#" className="text-zinc-500 hover:text-white text-xs uppercase tracking-widest transition-colors">Instagram</a>
             <a href="#" className="text-zinc-500 hover:text-white text-xs uppercase tracking-widest transition-colors">Facebook</a>
             <a href="#" className="text-zinc-500 hover:text-white text-xs uppercase tracking-widest transition-colors">LinkedIn</a>
         </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-black text-zinc-200 font-sans selection:bg-amber-400 selection:text-black">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;