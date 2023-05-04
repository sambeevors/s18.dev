import { motion } from "framer-motion";
import { type NextPage } from "next";
import { CldImage } from "next-cloudinary";
import Head from "next/head";
import { useEffect, useState } from "react";
import Page from "../components/global/Page";
import Spinner from "../components/icons/Spinner";
import detectPowerSavingMode from "../util/detectPowerSavingMode";

const Home: NextPage = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    detectPowerSavingMode().then((isPowerSavingMode) => {
      if (isPowerSavingMode) setUseFallback(true);
    });
  }, []);

  return (
    <Page>
      <Head>
        <title>s18.dev</title>
      </Head>
      <div className="relative">
        {useFallback ? (
          <CldImage
            alt="s18 logo"
            src="img/s18-logo-large"
            width={1920}
            height={1080}
            className="mx-auto block h-[calc(100dvh-6rem)] w-full max-w-4xl bg-black object-contain"
          />
        ) : (
          <>
            <motion.video
              preload="auto"
              autoPlay
              loop
              muted
              playsInline
              className="mx-auto block h-[calc(100dvh-6rem)] w-full max-w-4xl bg-black object-contain"
              onPlay={() => {
                setVideoLoaded(true);
              }}
              onError={() => {
                setUseFallback(true);
              }}
              onCanPlay={(e) => {
                e.currentTarget.play();
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: videoLoaded ? 1 : 0 }}
              transition={{ duration: 1 }}
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
          </>
        )}
      </div>
    </Page>
  );
};

export default Home;
