import { ArrowRight, Briefcase } from "lucide-react";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-teal-50 to-blue-100 overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1640963269654-3fe248c5fba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQxMjU5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Abstract Shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-teal-400 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6">
            Building Digital Experiences That Matter
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">
            We're a team of creative professionals dedicated to bringing your ideas to life with innovative design and cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 shadow-lg">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-teal-600 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-lg">
              <Briefcase className="w-5 h-5" />
              Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}