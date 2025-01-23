import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Sobre Mí
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Dedicada a ayudar a las personas a alcanzar su máximo potencial a través de la psicología
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-neutral-700 leading-relaxed">
              Con más de 5 años de experiencia en el campo de la psicología, me especializo en
              terapia individual y capacitaciones grupales. Mi enfoque se centra en crear un
              espacio seguro y acogedor donde cada persona pueda explorar su mundo interior
              y desarrollar herramientas para su crecimiento personal.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Heart className="text-sage-500 w-6 h-6" />
                <span className="text-neutral-700">Empatía y comprensión en cada sesión</span>
              </div>
              <div className="flex items-center gap-3">
                <Brain className="text-sage-500 w-6 h-6" />
                <span className="text-neutral-700">Enfoque basado en evidencia científica</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-sage-500 w-6 h-6" />
                <span className="text-neutral-700">Experiencia en terapia individual y grupal</span>
              </div>
            </div>
          </div>
          <Card className="bg-white border-none">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-neutral-900">Formación Académica</h3>
                <ul className="space-y-3">
                  <li className="text-neutral-700">
                    • Maestría en Psicología Clínica - Universidad Nacional
                  </li>
                  <li className="text-neutral-700">
                    • Especialización en Terapia Cognitivo-Conductual
                  </li>
                  <li className="text-neutral-700">
                    • Certificación en Mindfulness y Bienestar Emocional
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;