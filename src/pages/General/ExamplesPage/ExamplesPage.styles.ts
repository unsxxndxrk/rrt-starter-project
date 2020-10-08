import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useExamplesPageStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: "50px",
    },
    example: {
      background: "#ececec",
      borderRadius: "10px",
      padding: "50px 0",
      marginBottom: "80px",
      transition: "all .3s ease",

      "&:hover": {
        boxShadow: "0 0 20px rgba(0, 0, 0, .15)",
      },
    },
    exampleBox: {
      paddingTop: "30px",
    },
  }),
);

export { useExamplesPageStyles };
