import { Typography } from "@mui/material";
import React from "react";

type SectionTitleProps = {
  mb?: number;
  mt?: number;
  text?: string;
  highlight?: string;
  color?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  mb,
  mt,
  text,
  highlight,
  color,
}) => {
  return (
    <Typography variant="h5" sx={{ mb, mt }}>
      {text} {highlight && <span style={{ color }}>{highlight}</span>}
    </Typography>
  );
};

export default SectionTitle;
