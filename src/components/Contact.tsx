import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Contacto
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta? Estoy aquí para ayudarte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-neutral-900">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-sage-500 w-5 h-5" />
                  <span className="text-neutral-700">contacto@ejemplo.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-sage-500 w-5 h-5" />
                  <span className="text-neutral-700">+1 234 567 890</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-sage-500 w-5 h-5" />
                  <span className="text-neutral-700">Ciudad, País</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-neutral-900">Horario de atención</h3>
              <p className="text-neutral-700">
                Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                Sábados: 9:00 AM - 1:00 PM
              </p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-neutral-700">
                  Nombre
                </label>
                <Input id="name" placeholder="Tu nombre" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-neutral-700">
                  Email
                </label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm text-neutral-700">
                Asunto
              </label>
              <Input id="subject" placeholder="¿Sobre qué quieres hablar?" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-neutral-700">
                Mensaje
              </label>
              <Textarea
                id="message"
                placeholder="Escribe tu mensaje aquí..."
                className="min-h-[150px]"
              />
            </div>
            <Button className="w-full bg-sage-500 hover:bg-sage-600">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;