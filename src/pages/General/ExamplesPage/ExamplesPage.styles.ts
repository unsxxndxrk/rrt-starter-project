import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useExamplesPageStyles = makeStyles((theme: Theme) =>
  createStyles({
    example: {
      marginBottom: "30px",
      "&:last-child": {
        marginBottom: "0",
      },
    },
    exampleBox: {
      paddingTop: "20px",
    },
  }),
);

export { useExamplesPageStyles };
