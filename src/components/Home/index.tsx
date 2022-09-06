import { Box, Typography, Button } from "@mui/material"
import './index.css'

export const Home = () => {
  return (
    <Box className="root">
      <Box display="flex" alignItems="center" flexDirection="column">
        <img
          src="https://avatars.githubusercontent.com/u/51797012?v=4"
          alt="Otávio Araujo"
          loading="lazy"
          className="image"
        />

        <Typography
          className="title"
        >
          Olá, eu sou
          <span className="titleName">
             Otávio Araujo
          </span>
        </Typography>

        <Typography className="subtitle">
          Desenvolvedor Web
        </Typography>

        <a href="cv.pdf" download>
          <Button variant="contained" style={{ fontSize: '0.9rem'}}>Baixar CV</Button>
        </a>
      </Box>
    </Box>
  )
}
