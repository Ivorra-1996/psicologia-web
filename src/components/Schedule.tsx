import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

const Schedule = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">
              Comienza tu viaje hacia el bienestar
            </h2>
            <p className="text-lg text-neutral-600">
              Da el primer paso hacia tu transformación personal. Agenda una sesión y
              descubre cómo puedo ayudarte a alcanzar tus objetivos.
            </p>
            <div className="space-y-4">
              <Button className="w-full md:w-auto bg-sage-500 hover:bg-sage-600 text-lg px-8 py-6 flex items-center gap-2 justify-center">
                <Calendar className="w-5 h-5" />
                Agenda tu primera sesión
              </Button>
              <Button variant="outline" className="w-full md:w-auto text-lg px-8 py-6 flex items-center gap-2 justify-center">
                <Clock className="w-5 h-5" />
                Ver horarios disponibles
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/espacio-terapia.jpg"
              alt="Espacio de terapia"
              className="rounded-lg shadow-md w-full object-cover aspect-square"
            />
            <img
              src="/inspiracion-crecimiento.jpg"
              alt="Inspiración y crecimiento"
              className="rounded-lg shadow-md w-full object-cover aspect-square mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;