import { generalRoutes } from "constants/generalRoutes";
import { useHeaderStyles } from "./Header.styles";
import { Link } from "react-router-dom";
import { Box, Grid } from "@material-ui/core";
import { Namespaces } from "i18n";
import { useTranslation } from "react-i18next";
import LanguageChanger from "components/LanguageChanger/LanguageChanger";

function Header() {
  const classes = useHeaderStyles();
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
          <Link to={generalRoutes.HOME}>{t("navigation.home")}</Link>
        </Grid>
        <Grid item>
          <Link to={generalRoutes.EXAMPLES}>{t("navigation.examples")}</Link>
        </Grid>
        <Grid item>
          <Link to={generalRoutes.ABOUT}>{t("navigation.about")}</Link>
        </Grid>
      </Grid>
      <LanguageChanger />
    </Box>
  );
}

export default Header;
