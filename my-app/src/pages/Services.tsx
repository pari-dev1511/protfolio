import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import PageLayout from "../Components/PageLayout";
import SectionTitle from "../Components/SectionTitle";
import ServicePhoto1 from "../assets/images/services/1.png";
import ServiceCard from "../Components/ServiceCard";
import ServiceBox from "../Components/ServiceBox";

const Services: React.FC<any> = () => {
  const ServicesData = [
    {
      img: ServicePhoto1,
      title: "VS Code",
      description:
        "Beautiful responsive websites tailored for your business or portfolio.",
    },
    {
      img: ServicePhoto1,
      title: "Chrome Dev Tools",
      description:
        "Intuitive and clean interface designs focused on user experience.",
    },
    {
      img: ServicePhoto1,
      title: "Postman",
      description:
        "Fast and scalable applications using React, TypeScript, and more.",
    },
    {
      title: "Git & GitHub",
      description:
        "Secure and powerful server-side logic with Node.js and Express.",
      img: ServicePhoto1,
    }
  ];


   const ServicesLongData = [
    {
      img: ServicePhoto1,
      title: "1. Website Design & Development",
      description:
        "Pixel-perfect implementation of UI/UX designs, Responsive layout for mobile, tablet, and desktop, HTML5, CSS3, JavaScript-based development.",
    },
    {
      img: ServicePhoto1,
      title: "2. Single Page Application (SPA) Development",
      description:
        "Build dynamic web apps using React, Vue, or Angular. Smooth client-side routing and fast performance.State management (e.g., Redux, Context API).",
    },
    {
      img: ServicePhoto1,
      title: "3. Component-Based UI Development",
      description:
        "Build reusable, scalable UI components. Use of modern UI frameworks like Material-UI, Tailwind CSS, Bootstrap.",
    },
    {
      title: "4. UI/UX Implementation",
      description:
        "Convert Figma, Adobe XD, or Sketch designs into code.Ensure design consistency, accessibility, and usability.",
      img: ServicePhoto1,
    },
      {
      img: ServicePhoto1,
      title: "5. Frontend Testing",
      description:
        "Write unit and integration tests using Jest, React Testing Library, or Cypress.Ensure cross-browser compatibility and bug-free releases.",
    },
      {
      img: ServicePhoto1,
      title: "6. Performance Optimization",
      description:
        "Lazy loading, code splitting, and image optimization. Improve Core Web Vitals and Lighthouse scores.",
    },
     {
      img: ServicePhoto1,
      title: "7.Website Maintenance & Updates",
      description:
        "Regular UI fixes, content updates, and feature additions. Version upgrades for frontend frameworks/libraries.",
    },
    {
      img: ServicePhoto1,
      title: "8. Responsive & Mobile-First Development",
      description:
        "Build fluid layouts for all screen sizes. Use CSS Grid, Flexbox, and media queries.",
    },
     {
      img: ServicePhoto1,
      title: "9. Integration with Backend / APIs",
      description:
        "Connect with REST APIs or GraphQL endpoints. Handle authentication, data fetching, and error handling.",
    },
     {
      img: ServicePhoto1,
      title: "10. Deployment & Hosting",
      description:
        "Deploy frontend apps on platforms like Vercel, Netlify, or Firebase. Setup domain, CDN, and SEO tags.",
    },
    {
      img: ServicePhoto1,
      title: "11. E-commerce Frontend Development",
      description:
        "Build product listing, cart, checkout pages. Integrate with payment gateways and APIs.",
    },
  ];
  return (
    <PageLayout
      name="Services"
      Contant={
        <>
         <SectionTitle
            text="My"
            highlight="Services"
            mb={3}
            mt={0}
            color="#1976d2"
          />
          <Grid container spacing={2}>
            {ServicesLongData.map((data, index) => (
              <Grid size={{ xs: 12, md: 6 }}>
                <ServiceBox
                  key={index}
                  img={data.img}
                  name={data.title}
                  description={data.description}
                />
              </Grid>
            ))}
          </Grid>
         
             <SectionTitle
            text="Development"
            highlight="Tools"
            mb={3}
            mt={4}
            color="#1976d2"
          />
          <Grid container spacing={2}>
            {ServicesData.map((data, index) => (
              <Grid size={{ xs: 12, md: 3 }}>
                <ServiceCard
                  key={index}
                  img={data.img}
                  name={data.title}
                  description={data.description}
                />
              </Grid>
            ))}
          </Grid>

         
        </>
      }
    />
  );
};

export default Services;
