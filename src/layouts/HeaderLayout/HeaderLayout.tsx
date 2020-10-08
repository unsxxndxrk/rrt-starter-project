import GeneralRoutes from "../../constants/generalRoutes";
import React from "react";
import { useHeaderLayoutStyles } from "./HeaderLayout.styles";
import { Link } from "react-router-dom";
import { Box, Grid } from "@material-ui/core";
import { Namespaces } from "../../i18n";
import { useTranslation } from "react-i18next";
import LanguageChanger from "./components/LanguageChanger/LanguageChanger";

const HeaderLayout = () => {
  const classes = useHeaderLayoutStyles();
  const { t } = useTranslation(Namespaces.Common);

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
          <Link to={GeneralRoutes.HOME}>{t("navigation.home")}</Link>
        </Grid>
        <Grid item>
          <Link to={GeneralRoutes.EXAMPLES}>{t("navigation.examples")}</Link>
        </Grid>
        <Grid item>
          <Link to={GeneralRoutes.ABOUT}>{t("navigation.about")}</Link>
        </Grid>
      </Grid>
      <LanguageChanger />
    </Box>
  );
};

export default HeaderLayout;
