import { type NextPage } from "next";
import { CldImage } from "next-cloudinary";
import Head from "next/head";
import { TypeAnimation } from "react-type-animation";
import Page from "../components/global/Page";

const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>s18.dev</title>
      </Head>
      <div className="relative">
        <div className="relative mx-auto h-[calc(100dvh-6rem)] w-full p-6">
          <div className="flex h-full flex-col items-center justify-center gap-12 text-center lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:text-left">
            <CldImage
              alt="s18 logo"
              src="img/s18-logo-large"
              width={1920}
              height={1080}
              className="ml-auto block h-auto w-full max-w-[800px]"
            />
            <div className="flex flex-col space-y-4">
              <TypeAnimation
                className="type text-4xl lowercase sm:text-5xl xl:text-[3.5vw]"
                sequence={[
                  "Designer",
                  1000,
                  "Developer",
                  1000,
                  "Consultant",
                  1000,
                  "Entrepreneur",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
              <span className="text-base sm:text-lg md:text-xl">s18.dev</span>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;
