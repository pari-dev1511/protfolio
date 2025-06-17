import {
  Box,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
  const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#1a90ff",
      ...theme.applyStyles("dark", {
        backgroundColor: "#308fe8",
      }),
    },
  }));

  return (
    <Box>
      <Typography fontSize={"16px"}>{skill}</Typography>
      <StyledLinearProgress
        variant="determinate"
        value={level}
        sx={{ mb: 3 }}
      />
    </Box>
  );
};

export default SkillBar;
