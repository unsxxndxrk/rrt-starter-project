import GeneralRoutes from "../../constants/generalRoutes";
import React from "react";
import { useHeaderLayoutStyles } from "./HeaderLayout.styles";
import { Link } from "react-router-dom";
import { Box, Grid } from "@material-ui/core";

const HeaderLayout = () => {
  const classes = useHeaderLayoutStyles();

  return (
    <Box className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
        className={classes.nav}
      >
        <Grid item>
          <Link to={GeneralRoutes.HOME}>Home</Link>
        </Grid>
        <Grid item>
          <Link to={GeneralRoutes.EXAMPLES}>Examples</Link>
        </Grid>
        <Grid item>
          <Link to={GeneralRoutes.ABOUT}>About</Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaderLayout;
