import { type NextPage } from "next";
import Head from "next/head";
import Page from "../components/global/Page";
import Link from "next/link";

const Home: NextPage = () => (
  <Page>
    <Head>
      <title>404 | s18.dev</title>
    </Head>
    <div className="relative space-y-4 py-10 px-6 text-center sm:space-y-6 sm:py-16">
      <p className="sm:text-xl sm:font-bold">404: Page not found</p>
      <Link
        href="/"
        className="inline-block hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black focus-visible:outline-none"
      >
        Back to homepage
      </Link>
    </div>
  </Page>
);

export default Home;
