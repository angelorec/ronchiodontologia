import React from 'react';
import { Sparkles, Instagram, MessageCircle } from 'lucide-react';
import IconBox from './ui/IconBox';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-gold text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 mb-8">
              <IconBox icon={<Sparkles size={20} />} variant="white" size="sm" className="text-rose-gold flex-shrink-0" />
              <span className="text-xl font-bold tracking-tight">RONCHI <span className="font-light">ODONTO</span></span>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-6 max-w-xs mx-auto sm:mx-0">
              Cuidando do seu sorriso com dedicação, ética e o toque de sofisticação que você merece. Sua saúde e autoestima são nossa prioridade.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h5 className="font-bold mb-8 uppercase text-[10px] tracking-widest text-white/70">Navegação</h5>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#inicio" className="transition-all hover:translate-x-1 inline-block hover:text-white/80">Home</a></li>
              <li><a href="#sobre" className="transition-all hover:translate-x-1 inline-block hover:text-white/80">Sobre</a></li>
              <li><a href="#galeria" className="transition-all hover:translate-x-1 inline-block hover:text-white/80">Galeria</a></li>
              <li><a href="#contato" className="transition-all hover:translate-x-1 inline-block hover:text-white/80">Contato</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h5 className="font-bold mb-8 uppercase text-[10px] tracking-widest text-white/70">Tratamentos</h5>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="transition-all hover:translate-x-1 inline-block hover:text-white/80">Clínica Geral</a></li>
              <li><a href="#" className="transition-all hover:translate-x-1 inline-block hover:text-white/80">Harmonização Facial</a></li>
              <li><a href="#" className="transition-all hover:translate-x-1 inline-block hover:text-white/80">Lentes de Contato</a></li>
              <li><a href="#" className="transition-all hover:translate-x-1 inline-block hover:text-white/80">Clareamento Dental</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <h5 className="font-bold mb-8 uppercase text-[10px] tracking-widest text-white/70">Social</h5>
            <div className="flex gap-4">
              {[
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/drajaquelineronchi/" },
                { icon: <MessageCircle size={20} />, href: "https://api.whatsapp.com/send?phone=5549999695208&text=Olá,%20gostaria%20de%20agendar%20uma%20consulta!&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnpgzpm_sei_G949glz02hOfBhz0BdRb-GvNJr9snirXS7YV-urfW3DJxFTls_aem_a_-VIPg_4aJKLufBJPhHfA" }
              ].map((item, idx) => (
                <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="transition-all transform hover:-translate-y-1">
                  <IconBox icon={item.icon} variant="white" size="md" className="bg-transparent border border-white/30 hover:bg-white hover:text-rose-gold flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-[10px] text-white/70 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2024 Ronchi Odontologia. Todos os direitos reservados.</p>
          <p>Design by <span className="font-bold text-white">ExpertDesign</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;