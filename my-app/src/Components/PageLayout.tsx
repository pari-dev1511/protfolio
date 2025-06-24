import { Box, Container } from '@mui/material'
import React from 'react'
import Main from './Main'

type ContantProps = {
  Contant: any;
  name: string;
}

const PageLayout: React.FC<ContantProps> = ({Contant, name}) => {
  return (
   <Container maxWidth="lg">
      <Box
        component="section"
        sx={{
          backgroundColor: "#fff",
          borderRadius: 4,
          overflow: "hidden",
          mt: 5,
        }}
      >
        <Main name={name} />
        <Box sx={{ background: "#2b2a2a", p: 5 }}>
        {Contant}
        </Box>

      </Box>
    </Container>
  )
}

export default PageLayout
