import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Tweet } from "@/components/layout/tweet";
import { SideColumn } from "@/components/sidecolumn";

export default function LayoutDefault({ children }) {
  return (
    <>
      <div className="flex flex-row ">
        <Sidebar />
        <div className="w-full">
          <Header />
          <Tweet />
        </div>
        <SideColumn />
      </div>
    </>
  );
}
