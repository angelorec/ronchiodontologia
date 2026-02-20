import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import InfiniteCarousel from './ui/InfiniteCarousel';

const Gallery: React.FC = () => {
  const transformationImages = [
    "https://i.imgur.com/Uh6UeSc.jpeg",
    "https://i.imgur.com/H5evkhv.jpeg",
    "https://i.imgur.com/Bk3dZ89.jpeg",
    "https://i.imgur.com/tBuLvOA.jpeg",
    "https://i.imgur.com/P8acpfi.jpeg",
    "https://i.imgur.com/WwBERKn.jpeg",
    "https://i.imgur.com/0UoVTk9.jpeg",
    "https://i.imgur.com/uw8eDYz.jpeg",
    "https://i.imgur.com/rSdyESZ.jpeg",
    "https://i.imgur.com/gU9vJsS.jpeg"
  ];

  return (
    <Section id="galeria" background="light" className="bg-background-soft !py-16 overflow-visible">
      <div className="flex flex-col items-center justify-center mb-10 relative z-10 px-6">
        <SectionHeader
          center
          category="Excelência Clínica"
          title={<>Transformações de <span className="text-primary italic">Alta Performance</span></>}
          subtitle="Uma curadoria de resultados que unem saúde, estética e harmonia facial com precisão absoluta."
          className="mb-0 max-w-3xl"
        />
      </div>

      <div className="relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-gold/5 rounded-full blur-3xl pointer-events-none"></div>

        <InfiniteCarousel images={transformationImages} />
      </div>

      <div className="mt-12 flex items-center justify-center gap-4 text-slate-400 text-sm font-medium">
        <Sparkles size={16} className="text-rose-gold animate-pulse" />
        <span>Arraste ou aguarde para visualizar a galeria completa</span>
        <Sparkles size={16} className="text-rose-gold animate-pulse" />
      </div>
    </Section>
  );
};

export default Gallery;