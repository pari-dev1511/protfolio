import {
  Avatar,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import PageLayout from "../Components/PageLayout";
import SectionTitle from "../Components/SectionTitle";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import Stack from "@mui/material/Stack";
import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { green, pink } from "@mui/material/colors";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import ContactForm from "../Components/ContactForm";

const Contact: React.FC<any> = () => {
  // Reusable contact items
  const contactItems = [
    {
      label: "Mail me",
      icon: <EmailIcon />,
      href: "mailto:test@gmail.com",
      text: "test@gmail.com",
    },
    {
      label: "Call me",
      icon: <WorkIcon />,
      href: "tel:+0123123456789",
      text: "+0123123456789",
    },
  ];

  // Reusable secondary text style
  const secondaryTextSx = {
    fontSize: "15px",
    fontWeight: "normal",
    letterSpacing: 0,
    color: "#9e9e9e",
  };


  // Reusable social media data
  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/in/your-profile",
      target: "_blank",
    },
    {
      icon: <EmailIcon />,
      href: "mailto:youremail@example.com",
    },
    {
      icon: <FacebookIcon />,
      href: "https://www.facebook.com/your-page",
      target: "_blank",
    },
  ];

  // Common avatar styling
  const avatarSx = {
    boxShadow: 3,
    bgcolor: "#535353",
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      boxShadow: 6,
      transform: "translateY(-3px)",
    },
  };
  return (
    <PageLayout
      name="Contact"
      Contant={
        <>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <SectionTitle
                text="Get in"
                highlight="Touch"
                mb={3}
                mt={5}
                color="#1976d2"
              />
              <Typography variant="body1" sx={{ mb: 2 }}>
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </Typography>
              <List sx={{ width: "100%", maxWidth: 360 }}>
                {contactItems.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar>{item.icon}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="body1">{item.label}</Typography>
                      }
                      secondary={
                        <Typography
                          component="a"
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={secondaryTextSx}
                        >
                          {item.text}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
              <Stack direction="row" spacing={2} sx={{ pt: 0 , p : 2 }}>
                {socialLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    target={item.target}
                    underline="none"
                  >
                    <Avatar sx={avatarSx}>{item.icon}</Avatar>
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
         <ContactForm />

              
            </Grid>
          </Grid>
        </>
      }
    />
  );
};

export default Contact;
