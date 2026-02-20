import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Button from './ui/Button';
import BackgroundAnimation from './ui/BackgroundAnimation';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <BackgroundAnimation />
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuClbnRUd19B1ybDJUxQMBZQntu0MkNCG6-F8el3yWXGZ2kVr37SUBZFIXREIYaXUI5NSaThdB49FfV-VdaC2KBdDbWxLShhF5MGMrSKHhhLmru1thzmnfnP8pR0zuHzz6Klv6ZpyQrpQWhaIzBJh9qWVxRYiYxdWX3E1vmx4KQn1aSEv_wFpOJnZJPOomTDQCAEtsC-UQcyais8OHee-GzMM0OYU9nxjCRAGL1beIkIY3qN_v-Fj8OhaWxNlipMDGf0zX3vxRTze-0"
          alt="Modern dental clinic facade"
          className="w-full h-full object-cover filter blur-[2px] opacity-20 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-light/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-light"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left max-w-2xl mx-auto md:mx-0"
        >
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 text-primary font-semibold text-[10px] md:text-xs uppercase tracking-widest mb-6 md:mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Excelência & Cuidado
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-8 leading-[1.1] text-slate-900 tracking-tight">
            Seu sorriso em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-gold italic font-serif pr-2">
              boas mãos
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
            Especialistas em odontologia clínica e harmonização orofacial para realçar sua melhor versão com naturalidade e sofisticação.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 justify-center md:justify-start">
            <Button
              onClick={() => window.location.href = '#contato'}
              icon={<MessageCircle size={20} />}
              className="w-full sm:w-auto"
            >
              Agendar Avaliação
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5549999695208&text=Olá,%20gostaria%20de%20agendar%20uma%20consulta!&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnpgzpm_sei_G949glz02hOfBhz0BdRb-GvNJr9snirXS7YV-urfW3DJxFTls_aem_a_-VIPg_4aJKLufBJPhHfA', '_blank')}
              icon={<MessageCircle size={20} className="text-primary" />}
              className="w-full sm:w-auto"
            >
              Whatsapp
            </Button>
          </div>
        </motion.div>

        <div className="hidden md:block relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;