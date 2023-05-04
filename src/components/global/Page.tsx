import { type ReactNode } from "react";
import Nav from "./Nav";

type PageProps = {
  children: ReactNode;
};

const Page = ({ children }: PageProps) => (
  <div className="relative flex flex-1 flex-col">
    <Nav />
    <main className="flex-1">{children}</main>
  </div>
);

export default Page;
