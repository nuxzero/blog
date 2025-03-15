import Header from "./header";

type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="mt-8">{children}</div>
    </div>
  );
};

export default Container;
