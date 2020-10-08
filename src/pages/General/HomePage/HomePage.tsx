import React from "react";
import { useHomePageStyles } from "./HomePage.styles";
import rrtLogo from "assets/images/RRT_MAIN.svg";
import { Box, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import generalRoutes from "constants/generalRoutes";
import { useSecondaryButtonStyles } from "styles/SecondaryButton";
import { useTranslation } from "react-i18next";
import { Namespaces } from "i18n";

const HomePage = () => {
  const classes = useHomePageStyles();
  const secondaryButtonStyles = useSecondaryButtonStyles();

  const { t } = useTranslation(Namespaces.Home);

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
          <Button variant="contained" className={secondaryButtonStyles.root}>
            {t("buttons.about")}
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default HomePage;
