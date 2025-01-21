import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Cómo manejar la ansiedad en el día a día",
    excerpt: "Descubre técnicas prácticas y efectivas para gestionar la ansiedad y mantener el equilibrio emocional.",
    date: "15 Mar 2024",
    category: "Salud Mental",
  },
  {
    title: "La importancia del autocuidado",
    excerpt: "Aprende por qué el autocuidado es fundamental para tu bienestar emocional y cómo incorporarlo en tu rutina.",
    date: "10 Mar 2024",
    category: "Bienestar",
  },
  {
    title: "Construyendo relaciones saludables",
    excerpt: "Explora las claves para desarrollar y mantener relaciones interpersonales satisfactorias.",
    date: "5 Mar 2024",
    category: "Relaciones",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Blog
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Artículos y recursos sobre psicología, desarrollo personal y bienestar emocional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-sm text-sage-600 mb-2">{post.date}</div>
                <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                <Button variant="ghost" className="text-sage-600 hover:text-sage-700 p-0 flex items-center gap-2">
                  Leer más <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-sage-500 hover:bg-sage-600">
            Ver todos los artículos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;