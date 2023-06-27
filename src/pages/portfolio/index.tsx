import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Page from "../../components/global/Page";

const Portfolio: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Portfolio | s18.dev</title>
      </Head>
      <div className="relative">
        <div className="relative mx-auto h-[calc(100dvh-6rem)] w-full p-6">
          <div className="flex h-full flex-col items-center justify-center space-y-4">
            <TypeAnimation
              className="mb-8 text-4xl lowercase before:text-white/50 before:content-['<'] after:text-white/50 after:content-['>'] sm:text-5xl xl:text-[3.5vw]"
              sequence={["Portfolio", 1000]}
              speed={50}
              cursor={false}
            />
            <span className="text-base">
              switch(<span className="text-white/50">project</span>):
            </span>
            <ul className="text-center sm:flex sm:space-x-3 sm:text-left">
              <li className="text-[#FFC967] before:text-white/50 before:content-['‘'] after:text-white/50 after:content-['’'] sm:after:content-['’_&&']">
                <Link href="/portfolio" className="hover:underline">
                  static dress
                </Link>
              </li>
              <li className="text-[#FFC967] before:text-white/50 before:content-['‘'] after:text-white/50 after:content-['’'] sm:after:content-['’_&&']">
                <Link href="/portfolio" className="hover:underline">
                  yours truly
                </Link>
              </li>
              <li className="text-[#FFC967] before:text-white/50 before:content-['‘'] after:text-white/50 after:content-['’']">
                <Link href="/portfolio" className="hover:underline">
                  pupil slicer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Portfolio;
