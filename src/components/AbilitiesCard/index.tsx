import { ICardConfig } from "../../interfaces/ICardConfig";
import { Box, Card, Typography } from '@mui/material'
import './abilitiesCard.css';

interface ICard {
  item: ICardConfig
}

export const AbilitiesCard = (props: ICard) => {
  const { item } = props;
  const { title, description, icon: IconComponent } = item;

  return (
    <Card className="card">
      <IconComponent
        className="cardIcon"
      />

      <Box className="cardInformations">
        <Typography className="cardTitle">
          {title}
        </Typography>

        <Typography className="cardDescription">
          {description}
        </Typography>
      </Box>
    </Card>
  );
}
