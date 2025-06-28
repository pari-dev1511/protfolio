import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { blogPosts, BlogPost } from "../data";

type BlogDetailProps = {
  open: boolean;
  handleClose: () => void;
  scroll: "paper" | "body";
  blogDetail: BlogPost | undefined;
};

const BlogDetail: React.FC<BlogDetailProps> = ({
  open,
  handleClose,
  scroll,
  blogDetail,
}) => {
  console.log("blogDetail_________1111", blogDetail);

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
  <Dialog
      open={open}
      onClose={handleClose}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">{blogDetail?.title}</DialogTitle>
      <DialogContent dividers={scroll === "paper"}>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {blogDetail?.description ||
            "No description available for this blog post."}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          component="a"
          href={blogDetail?.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live Project
        </Button>
      </DialogActions>
    </Dialog>
    
  );
};

export default BlogDetail;
