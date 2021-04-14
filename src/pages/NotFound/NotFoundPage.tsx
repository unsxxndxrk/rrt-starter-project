import { Box, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { generalRoutes } from "constants/generalRoutes";
import { useSecondaryButtonStyles } from "styles/SecondaryButton";
import { useNotFoundPageStyles } from "./NotFoundPage.styles";

const NotFoundPage = () => {
  const classes = useNotFoundPageStyles();
  const secondaryButtonStyles = useSecondaryButtonStyles();

  return (
    <Box className={classes.root}>
      <div>
        <Typography variant="h1" component="h1">
          Page not found
        </Typography>
        <div className={classes.code}>404</div>

        <Link to={generalRoutes.HOME}>
          <Button variant="contained" className={secondaryButtonStyles.root}>
            Home
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default NotFoundPage;
