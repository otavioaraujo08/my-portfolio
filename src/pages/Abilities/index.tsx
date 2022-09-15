import { Box, Typography } from '@mui/material'
import TechAbilities from './abilitesConfig';
import { AbilitiesCard } from '../../components/AbilitiesCard';

import './abilities.css';

export const Abilities = () => {
  return(
    <Box className='box'>
      <Typography className="abilities">Habilidades</Typography>

      <Box className="cards">
        {TechAbilities.map(item => (
          <AbilitiesCard item={item} />
        ))}
      </Box>
    </Box>
  )
}
