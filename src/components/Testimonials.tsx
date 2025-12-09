import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with this team was an absolute pleasure. They took our vision and transformed it into a beautiful, functional product that exceeded all expectations. Their attention to detail and commitment to excellence is unmatched.",
    author: "Jovan Agustin",
    position: "CEO, TechStart Inc.",
    company: "TechStart"
  },
  {
    quote: "The level of professionalism and expertise they brought to our project was outstanding. They delivered on time, stayed within budget, and the final result has been instrumental in growing our business.",
    author: "Rod Vincent Rivas",
    position: "CEO, Takoyaki",
    company: "Takoyaki"
  },
  {
    quote: "Their creative approach and technical skills helped us reimagine our entire digital presence. We've seen a 150% increase in user engagement since launching the new platform. Highly recommend!",
    author: "Ian Magbanua",
    position: "Director of Marketing, GrowthLab",
    company: "GrowthLab"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by businesses around the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-teal-600" />
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-900 mb-1">
                  {testimonial.author}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}