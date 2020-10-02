import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useMainLayoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: "30px 0",
    },
  }),
);

export { useMainLayoutStyles };
