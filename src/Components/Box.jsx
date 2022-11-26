import * as React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Button } from "@mui/material";
import {useState} from "react"
export default function BoxSx() {
    const [counter, setCounter] = useState(0)
  return (
    <Container
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        mt: "5%",
      }}
    >
      <Box
        sx={{
          width: 400,
          height: 400,
        }}
      >
        <Box
          sx={{
            marginTop: "30%",
            height: "50px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            fontSize: "3em",
            fontWeight: "bolder",
            color: "black",
          }}
        >
          {counter}
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "50px",
            marginTop: "25%",
            alignItems: "center",
            justifyContent: "space-around",
            display: "inline-flex",
          }}
        >
          <Button
          onClick={()=>setCounter(counter+1)}
            sx={{
              "&:hover": {
                backgroundColor: "#cccccc",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <ControlPointIcon fontSize="large" sx={{color:"black"}}/>
          </Button>
          <Button
          onClick={()=>setCounter(counter-counter)}
            sx={{
              "&:hover": {
                backgroundColor: "#cccccc",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <RestartAltIcon fontSize="large" sx={{color:"black"}}/>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
