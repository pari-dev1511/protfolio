import { Box, Grid, Typography } from "@mui/material";
import React from "react";

type ServiceBoxProps = {
  img: string;
  description:string;
  name: string;
};

const ServiceBox: React.FC<ServiceBoxProps> = ({
  img,
  description,
  name,
}) => {
    console.log("fff", img );
    
  return (
    
    <Box  sx={{
        p: 2,
        borderRadius: 2,
        backgroundColor: "",
        cursor: "pointer",
        transition: "all 0.3s ease",
        // boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.15)"
        boxShadow: 2,
        // textAlign: "left",
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-5px)",
        },
      }}>
      <img src={img} alt="Web Design" />
      <Typography variant="h6" sx={{ mb: 1 , mt: 1}}>
        {name}
      </Typography>
      <Typography sx={{ fontSize: "14px" }}>{description}</Typography>
    </Box>
   
  );
};

export default ServiceBox;
