import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

type FilterTabsProps = {
  categories: string[];
  selected: number | string;
  handleCategoryChange: (event: React.SyntheticEvent, newValue: number) => void;
};

const FilterTabs: React.FC<FilterTabsProps> = ({
  categories,
  selected,
  handleCategoryChange,
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={selected}
        onChange={handleCategoryChange}
        centered={categories.length <= 4}
        variant={categories.length > 4 ? "scrollable" : "standard"}
        scrollButtons="auto"
        sx={{
          "& .MuiTab-root": {
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "16px", // default font color
          },
          "& .Mui-selected": {
            color: "#1976d2", // selected font color
          },
        }}
      >
        <Tab label="All" value="All" />
        {categories.map((category, index) => (
          <Tab key={index} label={category} value={category} />
        ))}
      </Tabs>
    </Box>
  );
};

export default FilterTabs;

