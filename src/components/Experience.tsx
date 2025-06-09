
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Seaversity",
      period: "June 2024 - Present",
      location: "Remote",
      description: [
        "Develop and maintain the LMS education tool using Laravel, Vue, and Next.js, ensuring seamless user experience and performance.",
        "Collaborate with the development team to implement new features, improve existing functionalities, and resolve bugs.",
        "Assist in the integration of back-end and front-end components, ensuring the system is scalable and efficient."
      ],
      technologies: ["Laravel", "Vue.js", "Next.js", "JavaScript"]
    },
    {
      title: "Full Stack Web Developer",
      company: "Tawselato",
      period: "Apr 2021 - Jul 2022",
      location: "Remote",
      description: [
        "Develop and maintain the logistics platform using Django for the back-end, React for the front-end, and Tailwind CSS for responsive and modern design.",
        "Implement features for tracking order payments, managing order locations, and ensuring smooth user interactions.",
        "Collaborate with the team to optimize system performance, enhance functionality, and integrate new services for better user experience."
      ],
      technologies: ["Django", "React", "Tailwind CSS", "Python"]
    },
    {
      title: "Data Analyst",
      company: "Sagility",
      period: "Apr 2021 - Dec 2021",
      location: "Remote",
      description: [
        "Collect, clean, and analyze large datasets to identify trends, patterns, and insights that support decision-making.",
        "Develop and maintain reports and dashboards using tools like Excel, SQL, or data visualization software to present findings clearly to stakeholders.",
        "Work closely with cross-functional teams to understand business needs, provide data-driven recommendations, and improve processes through data analysis."
      ],
      technologies: ["SQL", "Excel", "Data Visualization", "Statistical Analysis"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Professional Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                      <div className="text-lg font-semibold text-foreground">{exp.company}</div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
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

export default Experience;
