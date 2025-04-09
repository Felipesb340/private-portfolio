import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";


export default function LayoutDefault({ children }) {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <div className="w-full" >
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}
