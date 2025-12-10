import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Prototyping",
    category: "Mobile Design",
    image:
      "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0MTIzMjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "https://www.figma.com/design/DlrXZPNcVlOeuIfY7prqb5/DreamHIgh?node-id=0-1&m=dev&t=xa3Mmqu10HiBYp6X-1"
  },
  {
    title: "Healthcare Dashboard",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1677469684112-5dfb3aa4d3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY0MTQ0NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "https://github.com/adrianevasco-netizen/Dream-High"
  },
  {
    title: "Digital Design",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1611648694931-1aeda329f9da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NDA2NjkxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "https://your-website.com"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600">
            A selection of our recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm mb-3">
                  {project.category}
                </span>

                <h3 className="text-xl text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-center text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="mr-2">Visit Site</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
