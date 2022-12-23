import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const img = require('../../media/skincare.png')

export default function ProductCard({ name, price, type, sensitive, skintype}) {

    const getPrice = () => {
        return price['$numberDecimal']
    }

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={img}
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {name}
          </Typography>
          <Typography gutterBottom variant="h8" component="div">
          {`Price: ${getPrice()}`}
          </Typography>
          <Typography gutterBottom variant="h10" component="div">
          {`Type: ${type}`}
          </Typography>
          <Typography gutterBottom variant="h10" component="div">
          {`For Sensitive Skin: ${sensitive}`}
          </Typography>
          <Typography gutterBottom variant="h10" component="div">
          {`Suitable for Skintype: ${skintype}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}