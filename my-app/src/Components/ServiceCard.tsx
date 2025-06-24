import { Box, Grid, Typography } from "@mui/material";
import React from "react";

type ServiceCardProps = {
  img: string;
  description:string;
  name: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  img,
  description,
  name,
}) => {
    console.log("fff", img );
    
  return (
    
    <Box   sx={{
        p: 2,
        borderRadius: 2,
        backgroundColor: "#434343",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: 2,
        textAlign: "center",
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-5px)",
        },
      }}>
      <img src={img} alt="Web Design" />
      <Typography variant="h6" sx={{ mb: 1 }}>
        {name}
      </Typography>
      <Typography sx={{ fontSize: "14px" }}>{description}</Typography>
    </Box>
   
  );
};

export default ServiceCard;
