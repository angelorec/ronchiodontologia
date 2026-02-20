import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from './ui/Section';

const Testimonials: React.FC = () => {
  return (
    <Section id="depoimentos" background="light" className="!pt-0 pb-10 md:pb-16">
      <div className="bg-white rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-24 relative shadow-2xl shadow-slate-200/60 overflow-hidden isolate">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-[60px] md:blur-[100px] -mr-32 -mt-32 md:-mr-48 md:-mt-48 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-rose-gold/5 rounded-full blur-[60px] md:blur-[100px] -ml-32 -mb-32 md:-ml-48 md:-mb-48 -z-10"></div>

        <MessageSquareQuote className="absolute top-6 left-6 md:top-12 md:left-12 text-primary/10 w-16 md:w-[120px] h-16 md:h-[120px]" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-rose-gold font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase block mb-4">Feedback</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 leading-tight">O que dizem nossos <br /><span className="text-primary italic">pacientes</span></h2>
            <p className="text-slate-500 text-base md:text-lg max-w-md mx-auto md:mx-0">Histórias reais de quem transformou não apenas o sorriso, mas a confiança e o bem-estar.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 md:gap-6 bg-slate-50 px-6 md:px-10 py-5 md:py-7 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm"
          >
            <span className="text-4xl md:text-6xl font-black text-slate-900">5.0</span>
            <div>
              <div className="flex text-amber-400 gap-0.5 md:gap-1 mb-1 md:mb-2">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={22} fill="currentColor" className="w-4 h-4 md:w-5 md:h-5" />)}
              </div>
              <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">Média no Google</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {[
            {
              text: "Atendimento impecável! A Dra. Jaqueline é extremamente cuidadosa e detalhista. Minha harmonização ficou muito natural, exatamente como eu queria. Recomendo!",
              initials: "MS",
              name: "Mariana Silva",
              delay: 0
            },
            {
              text: "Clínica linda e acolhedora. Me senti muito segura durante todo o tratamento. A equipe é fantástica e o ambiente transmite muita paz. O resultado superou minhas expectativas.",
              initials: "FC",
              name: "Fernanda Costa",
              highlight: true,
              delay: 0
            },
            {
              text: "O melhor consultório de odontologia que já fui. Pontualidade, limpeza e um carinho enorme com o paciente em cada detalhe. Profissionais de altíssimo nível.",
              initials: "RO",
              name: "Ricardo Oliveira",
              delay: 0
            }
          ].map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: t.delay }}
              whileHover={{ y: -5 }}
              className={`group p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] transition-all duration-500 relative ${t.highlight
                ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/40 md:scale-105 z-20 border-2 border-slate-700'
                : 'bg-white text-slate-800 border-2 border-slate-200 shadow-xl shadow-slate-200/40'
                }`}
            >
              <div className={`flex gap-1 mb-6 md:mb-8 ${t.highlight ? 'text-amber-400' : 'text-primary'}`}>
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" className="w-3.5 h-3.5 md:w-4 md:h-4" />)}
              </div>
              <p className={`italic mb-8 md:mb-10 text-base md:text-lg leading-relaxed ${t.highlight ? 'text-slate-300' : 'text-slate-600'}`}>"{t.text}"</p>
              <div className="flex items-center gap-4 border-t pt-6 md:pt-8 border-current/10">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-xs md:text-sm ${t.highlight ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                  {t.initials}
                </div>
                <div>
                  <div className={`font-bold text-sm md:text-base ${t.highlight ? 'text-white' : 'text-slate-900'}`}>{t.name}</div>
                  <div className={`text-[8px] md:text-[10px] uppercase tracking-widest ${t.highlight ? 'text-slate-500' : 'text-slate-400'}`}>Paciente Verificado</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;