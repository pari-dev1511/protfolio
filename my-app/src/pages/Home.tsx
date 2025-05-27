import { Box, Button, Container, Grid, Icon, Link, ListItemText, Stack, Typography } from "@mui/material";
import React from "react";
import userImges from "../assets/images/avatar.jpg";
import FacebookIcon from "../assets/images/facebook.svg";
import InstaIcon from "../assets/images/instagram.svg";
import MailIcon from "../assets/images/mail.svg";
import TwitterIcon from "../assets/images/twitter.svg";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Home: React.FC<any> = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Box
        component="section"
        sx={{
          p: 0,
          backgroundColor: "#2b2a2a",
          borderRadius: 4,
          color: "#dddddd",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            color: "#dddddd",
            backgroundColor: "#1976d2",
            position: "relative",
            p: 7,
            pb: 0,
            mb: 7,
          }}
        >
          <Grid container spacing={4}>
            <Grid size={4}>
              <Box
                sx={{
                  maxWidth: "280px",
                  mb: "-20px",
                  border: "3px solid #fff",
                  backgroundColor: "#fff",
                  boxShadow: "0px 3px 8px 0px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={userImges}
                  alt="User"
                  style={{ width: "100%", height: "auto" }}
                ></img>
              </Box>
            </Grid>

            <Grid
              size={8}
              sx={{
                textAlign: "center",
                color: "#dddddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 7
              }}
            >
              <Box>
                <Typography variant="h2">Alex Smith</Typography>
                <Typography variant="h6" gutterBottom>
                  front-End-Developer
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ justifyContent: "center", mt: 4 }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#2b2a2a",
                      padding: "10px",
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={FacebookIcon}
                      alt="Facebook"
                      style={{ filter: "invert(1)", width: 24, height: 24 }}
                    />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#2b2a2a",
                      padding: "10px",
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={InstaIcon}
                      alt="Instagram"
                      style={{ filter: "invert(1)", width: 24, height: 24 }}
                    />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#2b2a2a",
                      padding: "10px",
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={MailIcon}
                      alt="Mail"
                      style={{ filter: "invert(1)", width: 24, height: 24 }}
                    />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#2b2a2a",
                      padding: "10px",
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={TwitterIcon}
                      alt="Twitter"
                      style={{ filter: "invert(1)", width: 24, height: 24 }}
                    />
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
          color: "#dddddd",
           p: 7,
           pt: 2,
          }}
        >
          <Grid container spacing={2}>
  <Grid size={{ xs: 12, md: 6 }}>
    <Box>
      <Typography variant="h5">About <span style={{ color: '#1976d2' }}>Me</span></Typography>
      <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
       Hello! I’m Alex Smith. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.
        </Typography>
        <Button variant="contained">Download Resume</Button>
    </Box>
  </Grid>
  <Grid size={{ xs: 12, md: 6 }}>

<List sx={{ width: '100%', maxWidth: 360 }}>
  {[
    ['Age', '29'],
    ['Residence', 'USA'],
    ['Address', 'Los Angeles, USA'],
    ['Phone', '+0123 123 456 789']
  ].map(([label, value]) => (
    <ListItem key={label} disableGutters>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Typography variant="body1">{label}</Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: '15px',
            fontWeight: 'normal',
            letterSpacing: 0,
            color: '#9e9e9e',
          }}
        >
          {value}
        </Typography>
      </Box>
    </ListItem>
  ))}

  {/* Email (separately handled since it's a <Link>) */}
  <ListItem disableGutters>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1">e-mail</Typography>
      <Link
        href="mailto:email@example.com"
        underline="none"
        sx={{
          fontSize: '15px',
          fontWeight: 'normal',
          letterSpacing: 0,
          color: '#9e9e9e',
        }}
      >
        email@example.com
      </Link>
    </Box>
  </ListItem>
</List>

    
  </Grid>
  </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
