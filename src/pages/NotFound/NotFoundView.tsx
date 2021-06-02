import { Box, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { generalRoutes } from "constants/generalRoutes";
import { useNotFoundStyles } from "./NotFound.styles";

function NotFoundView() {
  const classes = useNotFoundStyles();

  return (
    <Box className={classes.root}>
      <div>
        <Typography variant="h1" component="h1">
          Page not found
        </Typography>
        <div className={classes.code}>404</div>

        <Link to={generalRoutes.HOME}>
          <Button variant="contained" color="secondary">
            Home
          </Button>
        </Link>
      </div>
    </Box>
  );
}

export default NotFoundView;
