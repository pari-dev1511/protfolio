import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, FormHelperText } from "@mui/material";

type ContactFormProps = {};

const ContactForm: React.FC<ContactFormProps> = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  // Handle form input changes
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Data:", form);
    setIsSubmitted(true);

    if (form.name && form.email) {
      console.log("Form Data:", form);
      // Optional: reset form or show success message
    }
  };
  return (
    <Box
      component="form"
      sx={{
        maxWidth: 500,
        mx: "auto",
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: "background.paper",
      }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <TextField
        id="name"
        label="Full Name"
        variant="standard"
        name="name"
        fullWidth
        value={form.name}
        onChange={handleChange}
        required
        error={isSubmitted && !form.name}
        helperText={isSubmitted && !form.name ? "Name is required" : ""}
      />

      <TextField
        id="email"
        label="Email"
        variant="standard"
        name="email"
        fullWidth
        required
        value={form.email}
        onChange={handleChange}
        error={
          isSubmitted &&
          (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        }
        helperText={
          isSubmitted && !form.email
            ? "Email is required"
            : isSubmitted && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
            ? "Enter a valid email"
            : ""
        }
      />
      <TextField
        id="subject"
        label="Subject"
        variant="standard"
        name="subject"
        fullWidth
        value={form.subject}
        onChange={handleChange}
      />

      <TextField
        label="Message"
        name="message"
        variant="standard"
        fullWidth
        multiline
        minRows={4}
        value={form.message}
        onChange={handleChange}
      />

      <Button type="submit" variant="contained" size="large" sx={{ mt: 1 }}>
        Send Message
      </Button>
    </Box>
  );
};

export default ContactForm;
