import React from "react";
import { Box, Typography } from "@mui/material";

type ResumeCardProps = {
    title: string;
    year: string;
    company: string;
    description: string;
};

const ResumeCard: React.FC<ResumeCardProps> = ({title, year, company, description}) => {
  return (
    <Box
      sx={{
        boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.15)",
        p: 2,
        mb: 3,
        ml: 3,
        borderLeft: "2px solid #1976d2",
        position: "relative",
        
        "&::before": {
          content: '""',
          display: "inline-block",
          position: "absolute",
          top: 20,
          left: -35,
          width: 10,
          height: 10,
          border: "2px solid #1976d2",
          borderRadius: "50%",
          backgroundColor: "#2b2a2a",
          zIndex: 2, // corrected typo "Zindex" to "zIndex"
        },
        "&::after": {
          content: '""',
          display: "inline-block",
          position: "absolute",
          top: 26,
          left: -23,
          width: 23,
          height: 2,
          backgroundColor: "#1976d2",
          zIndex: 2,
        },
      }}
    >
      <Typography component="p" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography sx={{ fontSize: "12px", color: "#1976d2" }}>
          {year}
        </Typography>
        <Box sx={{ border: "1px solid #fff", height: "12px" }} />
        <Typography sx={{ fontSize: "12px" }}>
          {company}
        </Typography>
      </Box>

      <Typography sx={{ fontSize: "14px" }}>
       {description}
      </Typography>
    </Box>
  );
};

export default ResumeCard;
