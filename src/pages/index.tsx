import Head from "next/head";
import { Home as Page } from "../components/pages/Home";

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>With Linaria</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Page />
  </div>
);

export default Home;
