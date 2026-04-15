import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="flex justify-center opacity-0 animate-fade-in">
            <div className="relative w-40 h-40 md:w-52 md:h-52">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-blue-500 blur-xl opacity-60 animate-pulse"></div>

              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/40"></div>

              {/* Image */}
              <img
                src="/images/cv-img.jpg"
                alt="Nitish Mulye"
                className="relative w-full h-full object-cover rounded-full border-4 border-background shadow-lg"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Nitish
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Mulye
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences using modern technologies. As a
            full-stack developer, I create interfaces that are both beautiful
            and functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
