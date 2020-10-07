import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useExamplesPageStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: "50px",
    },
    example: {
      marginBottom: "30px",
      "&:last-child": {
        marginBottom: "0",
      },
    },
    exampleBox: {
      paddingTop: "30px",
    },
  }),
);

export { useExamplesPageStyles };
