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
        <div className="relative mx-auto flex min-h-screen-no-nav w-full flex-col items-center justify-center p-6">
          <div className="flex h-full min-h-viewport flex-col items-center justify-center space-y-4">
            <TypeAnimation
              className="mb-8 text-title lowercase before:text-white/50 before:content-['<'] after:text-white/50 after:content-['>']"
              sequence={["Portfolio", 1000]}
              speed={50}
              cursor={false}
            />
            <span className="text-base">
              switch(<span className="text-white/50">project</span>):
            </span>
            <ul className="text-center sm:flex sm:space-x-3 sm:text-left">
              <li className="text-code-yellow before:text-white/50 before:content-['‘'] after:text-white/50 after:content-['’'] sm:after:content-['’_&&']">
                <Link href="/portfolio" className="hover:underline">
                  static dress
                </Link>
              </li>
              <li className="text-code-yellow before:text-white/50 before:content-['‘'] after:text-white/50 after:content-['’'] sm:after:content-['’_&&']">
                <Link href="/portfolio" className="hover:underline">
                  yours truly
                </Link>
              </li>
              <li className="text-code-yellow before:text-white/50 before:content-['‘'] after:text-white/50 after:content-['’']">
                <Link href="/portfolio" className="hover:underline">
                  pupil slicer
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex min-h-viewport w-full flex-col py-8 lg:py-14">
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl">static dress</h2>
              <span className="text-sm text-white/50 lg:text-base">
                design && website && marketing
              </span>
            </div>
            <span className="mb-4">Client: Static Dress</span>
            <p className="mb-6 max-w-md">
              one stop shop for Static Dress for tour dates, merch, photo
              archives secrets
            </p>
            <div className="mb-6 grid w-full max-w-lg grid-cols-3 grid-rows-3 gap-3">
              <div className="aspect-square bg-white/20"></div>
              <div className="aspect-square bg-white/20"></div>
              <div className="aspect-square bg-white/20"></div>
              <div className="aspect-square bg-white/20"></div>
              <div className="aspect-square bg-white/20"></div>
              <div className="aspect-square bg-white/20"></div>
              <div className="aspect-square bg-white/20"></div>
              <div className="aspect-square bg-white/20"></div>
              <div className="aspect-square bg-white/20"></div>
            </div>
            <a
              href="https://staticdress.com"
              className="mt-8 after:text-white/50 after:content-['();'] hover:underline focus-visible:underline focus-visible:outline-none"
            >
              visit_site
            </a>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Portfolio;
