import { Box, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { generalRoutes } from "constants/generalRoutes";
import { useNotFoundStyles } from "./NotFound.styles";
import { useTranslation } from "react-i18next";
import { Namespaces } from "i18n";

function NotFoundView() {
  const classes = useNotFoundStyles();
  const { t } = useTranslation(Namespaces.NotFound);

  return (
    <Box className={classes.root}>
      <div>
        <Typography variant="h1" component="h1">
          {t("text")}
        </Typography>
        <div className={classes.code}>{t("code")}</div>
        <Link to={generalRoutes.HOME}>
          <Button variant="contained" color="secondary">
            {t("buttons.home")}
          </Button>
        </Link>
      </div>
    </Box>
  );
}

export default NotFoundView;
