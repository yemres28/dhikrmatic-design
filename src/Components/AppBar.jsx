import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container
        maxWidth="xl"
        sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
           ZIKIRMATIK 
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
