import { Box, Typography } from "@material-ui/core";
import { useExamplesStyles } from "./Examples.styles";
import { useTranslation } from "react-i18next";
import { Namespaces } from "i18n";
import Counter from "./components/Counter/Counter";
import Form from "./components/Form/Form";
import MainLayout from "layouts/MainLayout/MainLayout";

function ExamplesView() {
  const classes = useExamplesStyles();
  const { t } = useTranslation(Namespaces.Examples);

  return (
    <MainLayout>
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
    </MainLayout>
  );
}

export default ExamplesView;
