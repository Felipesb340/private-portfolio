import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Tweet } from "@/components/layout/tweet";
import { SideColumn } from "@/components/layout/sidecolumn";
import { Divisor } from "@/components/layout/divisor";
import { Message } from "@/components/layout/message";

export default function LayoutDefault({ children }) {
  return (
    <>
      <div className="flex flex-row mx-52 ">
        <Sidebar />
        <div className="w-full">
          <Header />
          <Tweet />
          <Divisor />
          <Message />
        </div>
        <SideColumn />
      </div>
    </>
  );
}
