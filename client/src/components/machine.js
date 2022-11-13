import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";
import { ClassNames } from "@emotion/react";
import { useState } from "react";

const useStyles = makeStyles({
  cardContainer: {
    margin: 10,
  },
  cardContent: {
    backgroundColor: "#edede9",
    justifyContent: "center",
    padding: 20,
  },
});

export default function Machine({
  floor,
  machineType,
  isAvailable,
  building,
  updateMachine,
  id,
}) {
  const classes = useStyles();
  const [available, setAvailable] = useState(isAvailable);
  const machineColour = available ? "#faedcd" : "#f08080";
  const handleSubmit = async () => {
    await updateMachine(id);
    setAvailable(!available);
  };
  return (
    <Card className={classes.cardContainer} sx={{ minWidth: 120 }}>
      <CardContent
        style={{ backgroundColor: machineColour }}
        className={classes.cardContent}
      >
        <Typography sx={{ fontSize: 18 }} color="text.secondary">
          {building} Hall
        </Typography>
        <Typography variant="h5" component="div">
          {machineType == "Washer" ? "Washing Machine" : "Dryer"}
        </Typography>
        <Typography color="text.secondary">Floor: {floor}</Typography>
      </CardContent>

      <CardActions
        className={classes.cardContent}
        style={{ backgroundColor: machineColour, paddingBottom: 10 }}
      >
        <Button
          variant="contained"
          onClick={handleSubmit}
          // disabled={available ? false : true}
        >
          {available ? "Machine is Available" : "Machine is Being Used"}
        </Button>
      </CardActions>
    </Card>
  );
}
