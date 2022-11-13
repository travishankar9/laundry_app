import NavBar from "./components/navbar";
import { useEffect, useState } from "react";
import "./App.css";
import Machine from "./components/machine";
import { getMachines, updateMachine } from "./api/machines.js";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { v4 } from "uuid";

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    loadMachines();
  }, []);

  const loadMachines = async () => {
    const load = await getMachines();
    setData(load.data);
  };
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <Grid container spacing={2} justifyContent="space-evenly">
          {data.map((machine) => {
            const { building, floor, isAvailable, machineType, _id } = machine;
            return (
              <Machine
                building={building}
                floor={floor}
                isAvailable={isAvailable}
                machineType={machineType}
                updateMachine={updateMachine}
                id={_id}
                key={v4()}
              ></Machine>
            );
          })}
          {/* <Grid item>Hello</Grid>
          <Grid item>Hello 2</Grid> */}
        </Grid>
      </Container>
    </>
  );
}

export default App;
