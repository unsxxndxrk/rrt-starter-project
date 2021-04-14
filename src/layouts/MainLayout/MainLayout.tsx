import { MainLayoutView } from "./MainLayoutView";

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout(props: MainLayoutProps) {
  const { children } = props;
  return <MainLayoutView children={children} />;
}

export { MainLayout };
