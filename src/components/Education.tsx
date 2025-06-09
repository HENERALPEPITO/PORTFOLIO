
import { Award, Calendar, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of the Philippines Visayas",
      period: "2021 - Present",
      achievements: [
        "Honor Roll 2021-2022",
        "College Scholar Second Semester (2023-2024)",
        "University Scholar First Semester (2024-2025)"
      ],
      type: "university"
    },
    {
      degree: "Science Technology Engineering and Mathematics",
      institution: "St. Anthony's College",
      period: "2019-2022",
      achievements: [
        "High Honors First and Second Semester (2019-2020)",
        "High Honors First and Second Semester (2021-2022)"
      ],
      type: "senior-high"
    },
    {
      degree: "Junior High School",
      institution: "Dao Catholic High School",
      period: "2017-2019",
      achievements: [
        "High Honors",
        "Salutatorian"
      ],
      type: "junior-high"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "university":
        return <GraduationCap className="text-primary" size={24} />;
      case "senior-high":
        return <Award className="text-secondary" size={24} />;
      default:
        return <Award className="text-muted-foreground" size={24} />;
    }
  };

  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {getIcon(edu.type)}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-primary mb-2">{edu.degree}</CardTitle>
                      <div className="text-lg font-semibold text-foreground mb-2">{edu.institution}</div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar size={16} />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground mb-3">Achievements & Honors:</h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
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

export default Education;
