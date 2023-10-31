import { type NextPage } from "next";
import Head from "next/head";
import Page from "../components/global/Page";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Home: NextPage = () => (
  <Page>
    <Head>
      <title>404 | s18.dev</title>
    </Head>
    <div className="relative space-y-4 py-10 px-6 text-center sm:space-y-6 sm:py-16">
      <div className="mx-auto max-w-sm border border-white/50 p-8 text-left sm:text-xl sm:font-bold">
        <TypeAnimation
          sequence={[
            '<ErrorPage\n\xa0\xa0status={404}\n\xa0\xa0message="Page not found"\n/>',
          ]}
          className="type whitespace-pre-line"
        />
      </div>
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
