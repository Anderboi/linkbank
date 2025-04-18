import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/ui/header";

const Layout = ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {id: string};
}>) => {
  return (
    <div>
      <Header link={params.id}/>
      {children}
    </div>
  );
};

export default Layout;
