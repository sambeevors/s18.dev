import { type NextPage } from "next";
import Head from "next/head";
import Page from "../components/global/Page";
import { useState } from "react";
import { motion } from "framer-motion";
import Spinner from "../components/icons/Spinner";

const Home: NextPage = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <Page>
      <Head>
        <title>s18.dev</title>
      </Head>
      <div className="relative">
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="mx-auto block h-[calc(100dvh-6rem)] w-full max-w-4xl bg-black object-contain"
          onPlay={() => {
            setVideoLoaded(true);
          }}
          onError={() => {
            // We rely on the poster image to show if the video fails to load.
            setVideoLoaded(true);
          }}
          onCanPlay={(e) => {
            e.currentTarget.play();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 1 }}
          poster="https://res.cloudinary.com/s18/image/upload/v1683207149/img/s18-logo-large.png"
        >
          <source
            src="https://res.cloudinary.com/s18/video/upload/q_100,vc_h265/v1683199711/video/s18-logo-animated.mp4"
            type="video/mp4"
          />
        </motion.video>
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 0 : 1 }}
          transition={{ delay: 0.5 }}
          aria-hidden="true"
        >
          <Spinner className="h-10 w-10 animate-spin text-white" />
        </motion.div>
      </div>
    </Page>
  );
};

export default Home;
