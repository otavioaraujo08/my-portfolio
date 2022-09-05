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
          className="imagem"
        />

        <Typography
          className="title"
          style={{ fontSize: '1.8rem'}}
        >
          Olá, eu sou
          <span className="titleName">
             Otávio Araujo
          </span>
        </Typography>

        <Typography className="subtitle" fontSize="1.3rem">
          Desenvolvedor Web
        </Typography>

        <a href="cv.pdf" download>
          <Button variant="contained" style={{ fontSize: '0.9rem'}}>Baixar CV</Button>
        </a>
      </Box>
    </Box>
  )
}
