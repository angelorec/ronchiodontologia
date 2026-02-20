import React from 'react';
import { BadgeCheck, Heart, Sparkles, FlaskConical } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import IconBox from './ui/IconBox';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const Specialist: React.FC = () => {
  return (
    <Section id="especialista" background="gradient-top" className="pb-10 md:pb-32">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      {/* Mobile-only title */}
      <div className="lg:hidden text-center mb-10">
        <SectionHeader
          category="Especialista Responsável"
          title="Dra. Jaqueline Ronchi Soares"
          subtitle=""
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left"
        >
          <SectionHeader
            category="Especialista Responsável"
            title="Dra. Jaqueline Ronchi Soares"
            subtitle=""
            className="hidden lg:block mb-6 md:mb-8"
          />

          <p className="text-rose-gold font-bold text-lg md:text-xl mb-6 md:mb-8 flex items-center justify-center lg:justify-start gap-2">
            <BadgeCheck size={20} /> CRO/SC 18894
          </p>

          <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Com anos de dedicação à saúde bucal e à estética facial, a Dra. Jaqueline combina ciência e arte para devolver não apenas sorrisos, mas autoestima. Especialista em Harmonização Orofacial, busca resultados sutis e elegantes que respeitam a individualidade de cada rosto, com um olhar atento aos detalhes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-sm mx-auto lg:mx-0 md:max-w-none">
            {[
              { icon: <Heart size={20} />, text: "Odontologia Estética" },
              { icon: <Sparkles size={20} />, text: "Mestra em Harmonização" },
              { icon: <FlaskConical size={20} />, text: "Preenchimentos & Bioestimuladores" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-4 rounded-xl shadow-sm border border-primary/5 flex items-center gap-3"
              >
                <IconBox icon={item.icon} size="sm" />
                <span className="text-xs md:text-sm font-medium text-left">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start">
            <Button
              variant="dark"
              onClick={() => window.location.href = '#contato'}
              className="w-full sm:w-auto"
            >
              Agendar Consulta
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
        >
          <div className="relative group px-4">
            <div className="absolute inset-0 bg-rose-gold/20 rounded-[3rem] rotate-6 scale-105 group-hover:rotate-3 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] -rotate-3 scale-105 group-hover:-rotate-1 transition-transform duration-500"></div>
            <img
              src="https://i.imgur.com/gIjoRIe.jpeg"
              alt="Portrait of Dra Jaqueline Ronchi"
              className="relative z-10 w-[280px] h-[380px] md:w-[350px] md:h-[450px] lg:w-[450px] lg:h-[580px] object-cover rounded-[3rem] shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-0 md:-bottom-10 md:-right-4 z-20 bg-white p-3 md:p-4 rounded-xl shadow-lg border border-primary/10 rotate-3">
              <span className="font-serif italic text-xl md:text-2xl text-slate-800">Jaqueline R.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Specialist;