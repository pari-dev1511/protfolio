import React, { useState } from "react";
import PageLayout from "../Components/PageLayout";
import SectionTitle from "../Components/SectionTitle";
import BlogList from "../Components/BlogList";
import { blogPosts, BlogPost } from "../data";
import BlogDetail from "../Components/BlogDetail";

const Blog: React.FC<any> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [blogDetail, setBlogDetail] = useState<BlogPost>();
  const [scroll, setScroll] = useState<any>("paper");
  const handleClickOpen = (blog: BlogPost) => {
    setBlogDetail(blog);
    setOpen(true);
    setScroll(scroll);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <PageLayout
      name="Blog"
      Contant={
        <>
          <SectionTitle
            text="My"
            highlight="Blog"
            mb={3}
            mt={0}
            color="#1976d2"
          />
          <BlogList handleClickOpen={handleClickOpen} />
          <BlogDetail
            open={open}
            handleClose={handleClose}
            scroll={scroll}
            blogDetail={blogDetail}
          />
        </>
      }
    />
  );
};

export default Blog;
