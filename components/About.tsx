import React from 'react';
import { ArrowRight, Leaf, Microscope } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import IconBox from './ui/IconBox';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Section id="sobre">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-light/50 to-transparent -z-10"></div>

      {/* Mobile-only header, appears above everything else */}
      <div className="md:hidden">
        <SectionHeader
          category="Nossa Essência"
          title={<>Sobre a <span className="italic font-serif text-primary">Clínica</span></>}
          showDivider
          className="mb-8"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group max-w-md mx-auto md:max-w-none"
        >
          <div className="absolute -top-10 -left-10 w-32 md:w-40 h-32 md:h-40 bg-rose-gold/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-32 md:w-40 h-32 md:h-40 bg-primary/10 rounded-full blur-2xl"></div>

          <div className="relative z-10 overflow-hidden rounded-[2rem] md:rounded-tr-[5rem] md:rounded-bl-[5rem] shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsKZZW4u-_0IjH9kh_dBOMZFTnNM4c7INn3rTAaP_Sl6eiMgskn8E8mv_5kj1IcKX4jPrVzEG7Al-yDWLBbcUZk5bbGmgxTMnHTcEZP3wEaao94esGsqJYoovk1Ai5XFVvhVQjpKwc4mqHmq1aAV5gxdm2cG7aztu0wZ7-C-ZzntUHqD9DhMj2n6MwYHCE6IgwG4SwS8Rk681eZVTaibKEaMVxckzRCGqDJ9x-VKzA2AAXpYVZHFESxI6j7rw2krccQZFrMPlAyzs"
              alt="Cozy clinic interior"
              className="w-full h-full object-cover aspect-[4/5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-primary/10 z-20 max-w-[200px] md:max-w-xs">
            <p className="font-serif italic text-primary text-sm md:text-lg">"Um ambiente pensado para o seu conforto."</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 md:space-y-10"
        >
          <SectionHeader
            category="Nossa Essência"
            title={<>Sobre a <span className="italic font-serif text-primary">Clínica</span></>}
            showDivider
            className="hidden md:block mb-8 md:mb-10"
          />

          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light text-center md:text-left">
            Na Ronchi Odontologia, acreditamos que cada sorriso conta uma história única. Nossa clínica foi projetada para oferecer um ambiente <strong className="text-slate-800 font-medium">acolhedor e sofisticado</strong>, onde o conforto e a tecnologia se encontram para proporcionar uma experiência verdadeiramente humanizada.
          </p>

          <div className="space-y-6 max-w-sm mx-auto md:max-w-none md:mx-0">
            <div className="flex items-start gap-4">
              <IconBox icon={<Leaf size={24} />} className="flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-bold text-lg text-slate-900 mb-1">Atendimento Humanizado</h4>
                <p className="text-slate-500 text-sm md:text-base">Focado no seu bem-estar total, desde a recepção até o pós-tratamento.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <IconBox icon={<Microscope size={24} />} className="flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-bold text-lg text-slate-900 mb-1">Tecnologia de Ponta</h4>
                <p className="text-slate-500 text-sm md:text-base">Equipamentos modernos para diagnósticos precisos e tratamentos eficazes.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <Button
              variant="link"
              size="sm"
              onClick={() => window.location.href = '#contato'}
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Conheça nosso espaço
            </Button>
          </div>
        </motion.div>
      </div>
    </Section >
  );
};

export default About;