import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ContactCard({ item, deleteContact }) {
  return (
    <Card
      style={{
        margin: "30px",
      }}
      sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.lastname}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.number}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteContact(item.id)} size="small">
          Delete
        </Button>
        <Link to={`/edit/${item.id}`}>
          <Button size="small">Edit</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
