import { Briefcase, Code, Network, Server, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-stack developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I'm a passionate full-stack developer with a love for creating
              innovative software applications. With experience in both frontend
              and backend technologies, I enjoy building seamless user
              experiences and robust server-side solutions. I thrive on learning
              new technologies and continuously improving my skills to stay at
              the forefront of the ever-evolving tech landscape.
            </p>

            <p className="text-muted-foreground">
              Beyond coding, you can either find me in the gym pushing my
              limits, on hikes getting in touch with nature or meeting and
              engaging with like-minded individuals. As a lifelong learner, both
              in software development and in life in general, I'm always excited
              to connect with fellow enthusiasts and collaborate on exciting
              projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>

              <a
                href="src\assets\documents\resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h1 className="font-semibold text-lg">
                    Full-stack development
                  </h1>
                  <p className="text-muted-foreground">
                    Creating responsive and user-friendly web applications using
                    modern technologies like React, Tailwind, and Node.js.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h1 className="font-semibold text-lg">
                    Backend application development
                  </h1>
                  <p className="text-muted-foreground">
                    Building server-side backend systems, with Node.js, Express,
                    and Postgres, that are scalable, efficient and reliably
                    power dynamic web applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h1 className="font-semibold text-lg">
                    Project Planning & Collaboration
                  </h1>
                  <p className="text-muted-foreground">
                    Experienced in project planning, version control (Git), and
                    collaborative development workflows to ensure successful
                    project delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
