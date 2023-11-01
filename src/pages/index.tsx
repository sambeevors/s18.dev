import { type NextPage } from "next";
import { CldImage } from "next-cloudinary";
import Head from "next/head";
import { TypeAnimation } from "react-type-animation";
import Page from "../components/global/Page";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>s18.dev</title>
      </Head>
      <div className="relative">
        <div className="relative mx-auto flex min-h-screen-no-nav w-full flex-col items-center justify-center p-6">
          <div className="flex h-full min-h-viewport flex-col items-center justify-center gap-12 text-center lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:text-left">
            <CldImage
              alt="s18 logo"
              src="img/s18-logo-large"
              width={1920}
              height={1080}
              className="ml-auto block h-auto w-full max-w-[800px]"
              priority
            />
            <div className="flex flex-col space-y-4">
              <TypeAnimation
                className="type text-title lowercase before:content-['\00a0'] lg:before:content-none"
                sequence={[
                  "Designer",
                  1000,
                  "Developer",
                  1000,
                  "UX Pro",
                  1000,
                  "Marketer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
              <div className="flex flex-col">
                <span className="text-base font-bold sm:text-lg md:text-xl">
                  s18.dev
                </span>
                <span className="mx-auto mt-1 max-w-[70%] text-xs text-code-yellow sm:text-sm lg:mx-0 lg:max-w-full">
                  &gt; pushing the boundaries of digital since 2015
                </span>
                <Link
                  href="https://read.cv/s18"
                  className="mt-8 after:text-white/50 after:content-['();'] hover:underline focus-visible:underline focus-visible:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  read_cv
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;
