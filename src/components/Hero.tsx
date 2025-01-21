import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-8 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-semibold text-neutral-900 leading-tight">
              Encuentra tu camino hacia el{" "}
              <span className="text-sage-500">bienestar emocional</span>
            </h1>
            <p className="text-xl text-neutral-600">
              Te acompaño en tu proceso de crecimiento personal y desarrollo profesional
              a través de la psicología y capacitaciones especializadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-sage-500 hover:bg-sage-600 text-lg px-8 py-6 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Agenda tu primera sesión
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6">
                Conoce mis servicios
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/Profesional-psicologia.png"
              alt="Profesional de psicología"
              className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;