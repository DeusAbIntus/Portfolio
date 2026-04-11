import {
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle,
  Circle,
} from "lucide-react";

const statusConfig = {
  completed: {
    icon: <CheckCircle size={16} className="text-green-500" />,
    label: "Completed",
  },
  "in-progress": {
    icon: <Circle size={16} className="text-yellow-400" />,
    label: "In Progress",
  },
  planned: {
    icon: <Circle size={16} className="text-gray-400" />,
    label: "Planned",
  },
};

const projects = [
  {
    id: 1,
    title: "AI Gym Planner (PERN + OpenRouter)",
    description:
      "Full-stack AI workout planner that generates personalized training programs from user inputs. Built with a PERN stack, Neon Auth, and OpenRouter AI, with deployed frontend and backend.",
    imageURL: "/project-images/AI-gym-planner-cropped.png",
    tags: ["TypeScript", "React", "Node.js", "Prisma", "OpenAI", "Neon"],
    demoURL: "https://ai-gym-planner-deployment.vercel.app/",
    repoURL: "https://github.com/DeusAbIntus/AI-Gym--Planner---Deployment.git",
    status: "in-progress",
  },
  {
    id: 2,
    title: "BookNotes — Book Review Blog",
    description:
      "A book review blog application that lets users create, edit, delete, and filter reviews. Built with React and Tailwind on the frontend, Express API backend, and PostgreSQL database, with deployed services and RESTful architecture.",
    imageURL: "/project-images/personal-book-blog-cropped.png",
    tags: [
      "PostgreSQL",
      "React",
      "Express",
      "Tailwind",
      "REST API",
      "Full Stack",
    ],
    demoURL: "https://personal-book-blog-deployment.vercel.app/",
    repoURL:
      "https://github.com/DeusAbIntus/Personal-Book-Blog---Deployment.git",
    status: "completed",
  },
  {
    id: 3,
    title: "Keepy Notes – Digital sticky note app",
    description:
      "A full-stack note-taking application with CRUD functionality, backed by a PostgreSQL database. Users can create and delete notes with persistent storage. Built with a React frontend, Node.js API, and deployed using Vercel with a hosted Neon database.",
    imageURL: "/project-images/keeper-app.png",
    tags: ["Javascript", "Node.js", "React", "Express", "PostgreSQL"],
    demoURL: "https://keeper-app-deployment.vercel.app/",
    repoURL: "https://github.com/DeusAbIntus/Keeper-App---Deployment.git",
    status: "completed",
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
              className="relative group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
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
                      className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>

                    <a
                      href={project.repoURL}
                      className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Github size={20} />
                      <span>Repo</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    {statusConfig[project.status].icon}
                    <span className="text-xs text-muted-foreground">
                      {statusConfig[project.status].label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/DeusAbIntus"
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
