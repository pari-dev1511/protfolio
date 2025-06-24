import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ResumeCard from "../Components/ResumeCard";
import SkillBar from "../Components/SkillBar";
import PageLayout from "../Components/PageLayout";
import SectionTitle from "../Components/SectionTitle";

const Resume: React.FC<any> = () => {
  const EducationData = [
    {
      title : "Specialization Course",
      year : "2010",
      company : "Apple Inc.",
      description : "Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.",
    },
    {
      title : "Specialization Course",
      year : "2010",
      company : "Apple Inc.",
      description : "Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.",
    },
  ];

   const ExperienceData = [
    {
      title : "Specialization Course",
      year : "2010",
      company : "Apple Inc.",
      description : "Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.",
    },
    {
      title : "Specialization Course",
      year : "2010",
      company : "Apple Inc.",
      description : "Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.",
    },
  ];

  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "HTML", level: 0 },
    { name: "CSS", level: 8 },
    { name: "JavaScript", level: 7 },
    { name: "React", level: 8 },
    { name: "Node.js", level: 7 },
  ];

  const leftSkill = skills.slice(0, 5);
  const rightSkill = skills.slice(5);

  return (
    <PageLayout name="Resume" Contant={
    <> 
    {/* Education & Experience */}
    <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Education
              </Typography>
              <Box sx={{ borderLeft: "2px solid #e0e0e0", pt: 2, pb: "0.2px" }}>
                {EducationData.map((education, index ) => (
                  <ResumeCard
                  key={index}
                    title={education.title}
                    year={education.year}
                    company={education.company}
                    description={education.description}
                  />
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Experience
              </Typography>
              <Box sx={{ borderLeft: "2px solid #e0e0e0", pt: 2, pb: "0.2px" }}>
                {ExperienceData.map((education, index ) => (
                  <ResumeCard
                     key={index}
                    title={education.title}
                    year={education.year}
                    company={education.company}
                    description={education.description}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        {/* Skill Section */}  
       <SectionTitle text="My" highlight="Skills" mb={3} mt={5} color="#1976d2"/>  
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              {leftSkill.map((skill) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  level={skill.level}
                />
              ))}
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              {rightSkill.map((skill) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  level={skill.level}
                />
              ))}
            </Grid>
          </Grid>
          </>
          } 
          />
  );
};
export default Resume;
