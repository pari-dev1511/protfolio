import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Main = ({ name }: { name: any }) => {
 

  return (
    
      <Typography variant="h3" sx={{
        height: "150px",
        backgroundColor: "#1976d2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
       
        px: { xs: 2.5 }, // 20px on small screens
      }}>
        {name}
      </Typography>
    
  );
};

export default Main;
