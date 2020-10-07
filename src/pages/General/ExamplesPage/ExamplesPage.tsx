import { Box, Typography } from "@material-ui/core";
import React from "react";
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
    </Box>
  );
};

export default ExamplesPage;
