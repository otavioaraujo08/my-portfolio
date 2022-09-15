import { Box, Typography, Button } from '@mui/material'
import TechAbilities from './abilitesConfig';
import { AbilitiesCard } from '../../components/AbilitiesCard';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useEffect, useState } from 'react';

import './abilities.css';

export const Abilities = () => {
  const [current, setCurrent] = useState(0);

  const abilities = TechAbilities.map((ability) => (
    <AbilitiesCard item={ability} />
  ))

  const next = () => {
    setCurrent(current === abilities.length - 1 ? 0 : current + 1);
  }

  const prev = () => {
    setCurrent(current === 0 ? abilities.length - 1 : current - 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === abilities.length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearInterval(interval);
  });

  return(
    <Box className='box'>
      <Typography className="abilities">Habilidades</Typography>


      <Box className='gallery'>
        <Button className='button-left' onClick={prev}>
          <FaArrowCircleLeft size="2.5rem" />
        </Button>

        <Box className="cards">
          {abilities[current]}
        </Box>

        <Button className='button-right' onClick={next}>
          <FaArrowCircleRight size="2.5rem" />
        </Button>
      </Box>

    </Box>
  )
}
