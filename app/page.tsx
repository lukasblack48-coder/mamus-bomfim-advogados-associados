"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import {
  Scale,
  Landmark,
  Wheat,
  Briefcase,
  FileSignature,
  Users,
  Building2,
  Gavel,
  Instagram,
  MapPin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const areas = [
  { icon: Landmark, title: "Civil e Contratos", text: "Obrigações, responsabilidade civil e segurança contratual." },
  { icon: Wheat, title: "Agrário e Agroambiental", text: "Estratégia jurídica para o produtor e a cadeia do agro." },
  { icon: Briefcase, title: "Empresarial", text: "Sociedade, governança e operação com previsibilidade." },
  { icon: FileSignature, title: "Tributário", text: "Conformidade e defesa em matéria fiscal." },
  { icon: Users, title: "Trabalho", text: "Contencioso e preventivo trabalhista." },
  { icon: Building2, title: "Administrativo", text: "Relação com a Administração e licenças." },
  { icon: Gavel, title: "Consumidor", text: "Defesa em relações de consumo." },
  { icon: Scale, title: "Família", text: "Família e sucessões com discreção." },
];

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Page() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#topo" className="font-serif text-lg tracking-tight">Mamus Bomfim</a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#atuacao">Atuação</a>
            <a href="#escritorio">Escritório</a>
            <a href="#contato">Contato</a>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="https://www.instagram.com/mamusbomfim/" className="rounded-full bg-ink px-4 py-2 text-sm text-parchment dark:bg-parchment dark:text-ink">Instagram</a>
          </div>
        </div>
      </header>
      <main id="topo" className="pt-24">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <motion.div initial="hidden" animate="show" variants={fade}>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-brass">Primavera do Leste · MT</p>
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">Segurança jurídica para quem produz e empreende no interior.</h1>
            <p className="mt-6 max-w-md text-[var(--muted)]">Sociedade de advogados com atuação em civil, trabalho, agrário, tributário, empresarial e família. Atendimento na Av. Paraná, 769.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.instagram.com/mamusbomfim/" className="inline-flex items-center gap-2 rounded-full bg-brass px-5 py-3 text-sm text-ink">Falar no Instagram <ArrowUpRight className="h-4 w-4" /></a>
              <a href="mailto:contato@llwebsites.com.br?subject=Mamus%20Bomfim" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm"><Mail className="h-4 w-4" /> E-mail</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink text-parchment">
            <div className="absolute inset-0 bg-gradient-to-br from-ink via-[#24304a] to-brass/40" />
            <div className="absolute inset-8 flex flex-col justify-between">
              <Scale className="h-10 w-10 text-brass-light" />
              <div>
                <p className="font-serif text-3xl">Mamus Bomfim</p>
                <p className="mt-2 text-sm text-parchment/70">Advogados Associados</p>
              </div>
            </div>
          </motion.div>
        </section>
        <section id="atuacao" className="mx-auto max-w-6xl px-5 py-16">
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="font-serif text-3xl md:text-4xl">Áreas de atuação</motion.h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a, i) => (
              <motion.article key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5">
                <a.icon className="mb-4 h-5 w-5 text-brass" />
                <h3 className="font-serif text-lg">{a.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{a.text}</p>
              </motion.article>
            ))}
          </div>
        </section>
        <section id="escritorio" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
            <h2 className="font-serif text-3xl md:text-4xl">O escritório</h2>
            <p className="mt-5 text-[var(--muted)]">A banca Mamus Bomfim Advogados Associados (CNPJ 24.982.232/0001-50) atua em Primavera do Leste. Sócios: Bruno Cesar Figueiredo Mamus e Andre Luiz Bomfim. Endereço: Av. Paraná, 769, esquina com Av. Cuiabá, Primavera II.</p>
          </motion.div>
          <div className="grid grid-cols-2 gap-3">
            {["Av. Paraná, 769", "Esquina Av. Cuiabá", "Primavera II", "CEP 78850-000"].map((label) => (
              <div key={label} className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5">
                <MapPin className="mb-3 h-4 w-4 text-brass" />
                <p className="text-sm">{label}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="contato" className="mx-auto max-w-6xl px-5 pb-24">
          <div className="rounded-3xl bg-ink px-6 py-12 text-parchment dark:bg-parchment dark:text-ink md:px-12">
            <h2 className="font-serif text-3xl">Agende uma conversa</h2>
            <p className="mt-3 max-w-lg text-sm opacity-80">Preview independente LL Websites. Contato oficial: Instagram @mamusbomfim.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.instagram.com/mamusbomfim/" className="inline-flex items-center gap-2 rounded-full bg-brass px-5 py-3 text-sm text-ink"><Instagram className="h-4 w-4" /> @mamusbomfim</a>
              <a href="https://www.google.com/maps/search/?api=1&query=Avenida+Parana+769+Primavera+do+Leste" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm dark:border-ink/20"><MapPin className="h-4 w-4" /> Como chegar</a>
            </div>
          </div>
        </section>
      </main>
      <a href="https://www.instagram.com/mamusbomfim/" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg" aria-label="Instagram do escritório"><Instagram /></a>
      <footer className="border-t border-[var(--line)] px-5 py-8 text-center text-xs text-[var(--muted)]">Preview independente LL Websites · Mamus Bomfim Advogados Associados · Primavera do Leste/MT</footer>
    </>
  );
}
