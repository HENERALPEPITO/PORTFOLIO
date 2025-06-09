
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-bold text-primary-foreground">
              CS
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Computer Science Student
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about integrating artificial intelligence into innovative software solutions. 
            Skilled at addressing complex challenges through creative problem-solving.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
