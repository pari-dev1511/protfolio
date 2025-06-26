import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import FilterTabs from "../Components/FilterTabs";
import { GalleryItem } from "../data";

type GalleryGridProps = {
  items: GalleryItem[];
  onImageClick: (item: GalleryItem) => void;
};

const GalleryGrid: React.FC<GalleryGridProps> = ({ items, onImageClick }) => {
  return (
    <>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        {items.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card
              key={index}
              sx={{ height: "100%", cursor: "pointer",}}
              onClick={() => onImageClick(item)}
              data-active= "true"
              
            >
              <CardActions
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  height="auto"
                  width="100%"
                  image={item.imageUrl}
                  alt={item.title}
                />
                <CardContent
                  sx={{
                    "&:last-child": {
                      pb: 2,
                      pt: 2,
                      m: 0,
                    },
                  }}
                >
                  <Typography variant="subtitle1" align="center">
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GalleryGrid;
