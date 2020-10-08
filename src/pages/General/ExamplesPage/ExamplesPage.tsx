import { Box, Typography } from "@material-ui/core";
import React from "react";
import Counter from "./components/Counter/Counter";
import Form from "./components/Form/Form";
import { useExamplesPageStyles } from "./ExamplesPage.styles";
import { useTranslation } from "react-i18next";
import { Namespaces } from "../../../i18n";

const ExamplesPage = () => {
  const classes = useExamplesPageStyles();
  const { t } = useTranslation(Namespaces.Examples);

  return (
    <Box className={classes.root}>
      <div className={classes.example}>
        <Typography component="h2" variant="h2" align="center">
          {t("form.label")}
        </Typography>
        <div className={classes.exampleBox}>
          <Form />
        </div>
      </div>
      <div className={classes.example}>
        <Typography component="h2" variant="h2" align="center">
          {t("counter.label")}
        </Typography>
        <div className={classes.exampleBox}>
          <Counter />
        </div>
      </div>
    </Box>
  );
};

export default ExamplesPage;
