import Head from "next/head";
import FooterLayout from "../footer";
import HeaderLayout from "../header";

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>study</title>
        <link rel="icon" type="image/svg+xml" href={"/favicon-0.svg"} />
      </Head>
      <HeaderLayout />
      <main>{children}</main>
      <FooterLayout />
    </>
  );
};

export default PrimaryLayout;
