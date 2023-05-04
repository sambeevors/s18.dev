import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/global/Nav";
import Page from "../components/global/Page";

const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>s18.dev</title>
      </Head>
      <div>
        <video
          autoPlay
          loop
          muted
          className="mx-auto block h-[calc(100dvh-6rem)] w-full max-w-4xl bg-black object-contain"
        >
          <source
            src="https://res.cloudinary.com/s18/video/upload/q_100,vc_h265/v1683199711/video/s18-logo-animated.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </Page>
  );
};

export default Home;
