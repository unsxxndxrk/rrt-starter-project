import { Box, Typography } from "@material-ui/core";
import { Namespaces } from "i18n";
import { useAboutStyles } from "./About.styles";
import { useTranslation } from "react-i18next";

function AboutView() {
  const classes = useAboutStyles();
  const { t } = useTranslation(Namespaces.About);

  return (
    <Box>
      <Typography component="h1" variant="h1">
        {t("label")}
      </Typography>
      <Typography
        component="p"
        className={classes.p}
        data-i18n="[html]content.body"
      >
        {t("description")}
      </Typography>
      <a
        href="https://github.com/unsxxndxrk/rrt-starter-project"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.a}
      >
        {t("repository")}
      </a>
    </Box>
  );
}

export default AboutView;
