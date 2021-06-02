import { useMainLayoutStyles } from "./MainLayout.styles";
import Header from "components/Header/Header";
import { Box, Container, Divider } from "@material-ui/core";

type MainLayoutViewProps = {
  children: React.ReactNode;
};

function MainLayoutView(props: MainLayoutViewProps) {
  const { children } = props;
  const classes = useMainLayoutStyles();

  return (
    <Box>
      <Container maxWidth="lg">
        <Header />
        <Divider component="hr" />
        <main>
          <div className={classes.content}>{children}</div>
        </main>
      </Container>
    </Box>
  );
}

export default MainLayoutView;
