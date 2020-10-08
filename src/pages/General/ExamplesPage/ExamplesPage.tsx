import { Box, Typography } from "@material-ui/core";
import React from "react";
import Counter from "./components/Counter/Counter";
import Form from "./components/Form/Form";
import { useExamplesPageStyles } from "./ExamplesPage.styles";

const ExamplesPage = () => {
  const classes = useExamplesPageStyles();
  return (
    <Box className={classes.root}>
      <div className={classes.example}>
        <Typography component="h2" variant="h2" align="center">
          Form validation with Formik
        </Typography>
        <div className={classes.exampleBox}>
          <Form />
        </div>
      </div>
      <div className={classes.example}>
        <Typography component="h2" variant="h2" align="center">
          Counter state with Redux
        </Typography>
        <div className={classes.exampleBox}>
          <Counter />
        </div>
      </div>
    </Box>
  );
};

export default ExamplesPage;
