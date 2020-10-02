import React from "react";
import { useMainLayoutStyles } from "./MainLayout.styles";
import Header from "../HeaderLayout/HeaderLayout";
import { Box, Container, Divider } from "@material-ui/core";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = (props: MainLayoutProps) => {
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
};

export default MainLayout;
