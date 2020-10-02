import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useAboutPageStyles } from "./AboutPage.styles";

const AboutPage = () => {
  const classes = useAboutPageStyles();
  return (
    <Box>
      <Typography component="h1" variant="h1">
        About
      </Typography>
      <Typography component="p" className={classes.p}>
        A starter project for developing user interfaces with <b>React</b>,
        <b>Redux</b> and <b>TypeScript</b>. Includes a set of basic commonly
        used modules such as: ESLint, Material UI, Formik, Lodash and others
        (see package.json). The project contains several ready-made basic
        solutions for a quick start (you can see them in the Examples section).
      </Typography>
      <a
        href="https://github.com/unsxxndxrk/rrt-starter-project"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.a}
      >
        GitHub repository
      </a>
    </Box>
  );
};

export default AboutPage;
