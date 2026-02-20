import React from 'react';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import IconBox from './ui/IconBox';
import Input from './ui/Input';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    service: 'Odontologia Geral',
    message: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL || 'https://formspree.io/f/xkovjlqr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', service: 'Odontologia Geral', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Section id="contato" className="pt-10 md:pt-16">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <SectionHeader
        center
        category="Contato"
        title="Agende sua visita"
        subtitle="Preencha o formulário abaixo e entraremos em contato o mais breve possível para agendar sua avaliação."
        className="max-w-3xl mx-auto"
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
        {/* Formulário */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/80 border-[3px] border-primary/25 flex flex-col justify-center h-full hover:shadow-primary/5 transition-all duration-300"
        >
          <h4 className="text-2xl font-bold mb-8 text-slate-900 border-b border-slate-100 pb-4">Agendamento</h4>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Nome Completo"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Como podemos te chamar?"
              required
            />

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Telefone (WhatsApp)"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(00) 00000-0000"
                required
              />
              <Input
                label="Serviço de Interesse"
                type="select"
                name="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                options={["Odontologia Geral", "Harmonização Facial", "Lentes de Contato", "Clareamento", "Outros"]}
              />
            </div>

            <Input
              label="Mensagem"
              type="textarea"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              placeholder="Conte-nos brevemente o que você busca"
              required
            />

            <Button
              className="w-full py-5 text-lg"
              type="submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Enviando...' :
                status === 'success' ? 'Solicitação Enviada!' :
                  status === 'error' ? 'Erro ao enviar. Tente novamente.' :
                    'Enviar'}
            </Button>

            {status === 'success' && (
              <p className="text-center text-green-600 font-medium animate-pulse">
                Obrigado! Entraremos em contato em breve.
              </p>
            )}
          </form>
        </motion.div>

        {/* Informações de Contato */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/80 border-[3px] border-primary/25 h-full flex flex-col hover:shadow-primary/5 transition-all duration-300"
        >
          <h4 className="text-2xl font-bold mb-8 text-slate-900 border-b border-slate-100 pb-4">Fale Conosco</h4>

          <div className="space-y-10 my-auto">
            {[
              {
                icon: <MapPin size={24} />,
                title: "Localização",
                content: <p className="text-slate-600">R. Manoel Thiago de Castro, 332 - Centro<br />Lages - SC, 88501-020</p>
              },
              {
                icon: <Clock size={24} />,
                title: "Expediente",
                content: <p className="text-slate-600">Seg. a Sex: 08:00 - 19:00<br />Sábado: 08:00 - 12:00</p>
              },
              {
                icon: <Phone size={24} />,
                title: "Telefone",
                content: <p className="text-primary font-bold text-2xl tracking-tight">(49) 3222-3000</p>
              },
              {
                icon: <MessageCircle size={24} />,
                title: "WhatsApp",
                content: (
                  <div className="mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open('https://api.whatsapp.com/send?phone=5549999695208&text=Olá,%20gostaria%20de%20agendar%20uma%20consulta!&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnpgzpm_sei_G949glz02hOfBhz0BdRb-GvNJr9snirXS7YV-urfW3DJxFTls_aem_a_-VIPg_4aJKLufBJPhHfA', '_blank')}
                      className="border-primary text-primary hover:bg-primary/5 transition-colors"
                    >
                      Agendar por WhatsApp
                    </Button>
                  </div>
                )
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-rose-gold font-bold text-xs uppercase tracking-widest mb-1">{item.title}</p>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mapa Full Width */}
      <div className="h-80 md:h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-slate-200 relative group bg-slate-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.7816024845437!2d-50.32766392376999!3d-27.816562082875146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e0192e21245087%3A0xc3f588d3e260c283!2sR.%20Manoel%20Thiago%20de%20Castro%2C%20332%20-%20Centro%2C%20Lages%20-%20SC%2C%2088501-020!5e0!3m2!1spt-BR!2sbr!4v1707842600000!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale group-hover:grayscale-0 transition-all duration-700"
        ></iframe>
        <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:bg-transparent transition-colors duration-700"></div>
        <div className="absolute bottom-6 left-6 right-6 flex justify-center">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=R.+Manoel+Thiago+de+Castro,+332+-+Centro,+Lages+-+SC,+88501-020"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/95 backdrop-blur-md text-slate-800 px-8 py-4 rounded-full text-sm font-bold shadow-xl hover:bg-white transition-all transform hover:-translate-y-1 hover:scale-105 border border-slate-100"
          >
            Como Chegar
          </a>
        </div>
      </div>
    </Section >
  );
};

export default Contact;