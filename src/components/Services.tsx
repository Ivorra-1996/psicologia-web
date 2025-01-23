import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, BookOpen } from "lucide-react";

const services = [
  {
    title: "Terapia Individual",
    description: "Sesiones personalizadas para ayudarte a superar desafíos y alcanzar tu mejor versión.",
    icon: Brain,
  },
  {
    title: "Capacitaciones",
    description: "Programas de formación para empresas y grupos enfocados en el desarrollo personal y profesional.",
    icon: Users,
  },
  {
    title: "Talleres",
    description: "Espacios de aprendizaje grupal donde compartimos herramientas para el crecimiento personal.",
    icon: BookOpen,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Mis Servicios
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Ofrezco diferentes modalidades de acompañamiento adaptadas a tus necesidades
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-sage-500" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;