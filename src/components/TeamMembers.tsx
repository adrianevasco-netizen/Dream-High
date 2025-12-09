import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import jumarieImage from "figma:asset/e529263ed3350961100b4e8bc6378496b534cab9.png";
import adrianImage from "figma:asset/6d76ceccc0ef85a274fb0992cb459b8584a51391.png";
import jeraldImage from "figma:asset/75865a8e3e0546472b44e0a7a0257214303a990a.png";
import jasonImage from "figma:asset/0806d7afef86d43074bdf8ec52ab63117bcd459e.png";

const teamMembers = [
  {
    name: "Adrian Evasco",
    position: "Lead Developer",
    bio: "Digital design specialist specializing in scalable web applications. Turning complex problems into elegant solutions.",
    image: adrianImage
  },
  {
    name: "Jumarie Hilasgue",
    position: "Creative Director",
    bio: "Leading creative vision with 2 years in UI/UX design. Passionate about crafting intuitive user experiences.",
    image: jumarieImage
  },
  {
    name: "Jerald Antonio",
    position: "Product Strategist",
    bio: "Bridging business goals with user needs. Expert in product development and market research.",
    image: jeraldImage
  },
  {
    name: "Jason Nabablit",
    position: "Brand Designer",
    bio: "Creating memorable brand identities and visual systems. Bringing stories to life through design.",
    image: jasonImage
  }
];

export function TeamMembers() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600">
            The talented people behind our success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover rounded-full"
                />
              </div>
              
              <h3 className="text-xl text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-teal-600 mb-3">
                {member.position}
              </p>
              <p className="text-gray-600 mb-4">
                {member.bio}
              </p>
              
              <div className="flex gap-3">
                <a 
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-100 hover:text-teal-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-100 hover:text-teal-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-100 hover:text-teal-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-100 hover:text-teal-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}