import { useHomeStyles } from "./Home.styles";
import rrtLogo from "assets/images/RRT_MAIN.svg";
import { Box, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { generalRoutes } from "constants/generalRoutes";
import { useTranslation } from "react-i18next";
import { Namespaces } from "i18n";

function HomeView() {
  const { t } = useTranslation(Namespaces.Home);
  const classes = useHomeStyles();

  return (
    <Box>
      <div className={classes.logoWrap}>
        <img src={rrtLogo} alt="rrt" />
      </div>
      <Typography variant="h1" component="h1" align="center">
        {t("title")}
      </Typography>
      <div className={classes.textWrap}>
        <Typography component="p" align="center" className={classes.text}>
          {t("description")}
        </Typography>
      </div>
      <div className={classes.buttonBox}>
        <Link to={generalRoutes.ABOUT}>
          <Button variant="contained" color="secondary">
            {t("buttons.about")}
          </Button>
        </Link>
      </div>
    </Box>
  );
}

export default HomeView;
