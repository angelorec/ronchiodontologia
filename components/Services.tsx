import React from 'react';
import { Stethoscope, Smile, ScanFace, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, featured = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className={`group p-8 md:p-10 bg-white rounded-[2.5rem] md:rounded-[2rem] transition-all duration-300 relative overflow-hidden ${featured ? 'shadow-2xl shadow-primary/20 border-2 border-primary/30 hover:border-primary md:-translate-y-4' : 'shadow-2xl shadow-slate-200/80 border-2 border-primary/20 hover:border-primary/50 hover:shadow-primary/10'}`}
  >
    <div className={`absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 rounded-bl-[3rem] md:rounded-bl-[4rem] transition-colors bg-primary/10 group-hover:bg-primary/20`}></div>
    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 md:mb-8 transition-transform group-hover:scale-110 ${featured ? 'bg-gradient-to-br from-primary to-rose-gold shadow-lg shadow-primary/30' : 'bg-gradient-to-br from-primary-light to-white shadow-sm'}`}>
      {React.cloneElement(icon as React.ReactElement, {
        className: featured ? 'text-white' : 'text-primary',
        size: 28
      })}
    </div>
    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-900">{title}</h3>
    <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 leading-relaxed">{description}</p>
    <a href="#contato" className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-widest hover:text-rose-gold transition-colors">
      Saiba Mais <ArrowRight size={16} className="ml-2" />
    </a>
  </motion.div>
);

const Services: React.FC = () => {
  return (
    <Section id="servicos" background="light" className="pt-10 md:pt-32">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <SectionHeader
        center
        category="Tratamentos"
        title="Nossos Serviços"
        subtitle="Tratamentos completos para sua saúde e estética, realizados com as técnicas mais modernas do mercado."
      />

      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard
          icon={<Stethoscope />}
          title="Odontologia Geral"
          description="Limpezas, restaurações estéticas e tratamentos preventivos para manter sua saúde bucal sempre em dia com conforto."
        />
        <ServiceCard
          featured
          icon={<Smile />}
          title="Harmonização"
          description="Botox, preenchimento e bioestimuladores para um rejuvenescimento natural, realçando seus traços com sofisticação."
        />
        <ServiceCard
          icon={<ScanFace />}
          title="Avaliação Digital"
          description="Diagnóstico preciso com planejamento digital e escaneamento 3D para garantir previsibilidade e o melhor plano de tratamento."
        />
      </div>
    </Section>
  );
};

export default Services;