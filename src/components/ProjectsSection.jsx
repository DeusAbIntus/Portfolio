import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
    imageURL: "/projects-images/project1.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    demoURL: "https://project1-demo.com",
    repoURL: "https://github.com",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2",
    imageURL: "/projects-images/project2.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    demoURL: "https://project2-demo.com",
    repoURL: "https://github.com",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of Project 3",
    imageURL: "/projects-images/project3.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    demoURL: "https://project3-demo.com",
    repoURL: "https://github.com",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"></span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some if my recent projects. Each project was carefully
          crafted to demonstrate my skills and passion for web development. I
          invite you to explore these projects and see the impact they have
          made.
        </p>

        <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.imageURL}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoURL}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.repoURL}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
