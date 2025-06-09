
const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-6xl font-bold text-muted-foreground">👨‍💻</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Computer Science student with a keen interest in integrating artificial 
                intelligence into innovative software solutions. My passion lies in exploring 
                advanced technologies and contributing to the creation of scalable, efficient systems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I excel at addressing complex challenges through creative problem-solving and 
                am adaptable in roles as a team leader, collaborator, or independent contributor. 
                My experience spans full-stack development, data analysis, and machine learning.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
