import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

import { blogPosts } from "../data";

type BlogListProps = {
    handleClickOpen: (blog: any) => void;
};

const BlogList: React.FC<BlogListProps> = ({handleClickOpen}) => {
  return (
    <>
      <Grid container spacing={2}>
        {blogPosts.map((blog, index: any) => (
          <Grid size={{ xs: 12, md: 6 }}>
            <Card key={index}>
              <CardActionArea onClick={() => handleClickOpen(blog)}>
                <CardMedia
                  component="img"
                  height="180"
                  image={blog.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {blog.excerpt}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BlogList;
