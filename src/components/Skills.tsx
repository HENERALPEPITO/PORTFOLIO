
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "Tailwind CSS", "React", "React Native", "Vue", "Flutter"],
      icon: "🎨"
    },
    {
      title: "Backend Development",
      skills: ["Django", "Laravel", "Firebase", "Supabase", "SQL", "MongoDB"],
      icon: "⚙️"
    },
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "R", "C#", "JavaScript"],
      icon: "💻"
    },
    {
      title: "AI & Data Science",
      skills: ["Machine Learning", "Deep Learning", "Statistical Analysis", "Data Visualization"],
      icon: "🤖"
    },
    {
      title: "Game Development",
      skills: ["Unity", "C# for Unity", "Game Design", "3D Modeling"],
      icon: "🎮"
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS", "Git", "Docker", "CI/CD", "RESTful APIs"],
      icon: "☁️"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Technical Skills
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-lg text-primary">{category.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-muted text-foreground rounded-md text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
