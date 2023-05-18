import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export  function CardMaterialUI() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/cursoReact.jpg"
        title="Curso de React"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ¡Aprende React!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          React es una librería de JavaScript muy utilizada hoy para el desarrollo web SPA.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir</Button>
        <Button size="small">Aprender más</Button>
      </CardActions>
    </Card>
  );
}


export  function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/avatar.jpg" />
      <Avatar alt="Travis Howard" src="/avatar2.png" />
      <Avatar alt="Cindy Baker" src="/avatar3.png" />
    </Stack>
  );
}