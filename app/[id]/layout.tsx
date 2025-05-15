import React from "react";
import Header from "@/components/ui/header";
import ProjectTitle from "@/components/ui/projectTitle";

type Params = Promise<{ id: string }>;

type LayoutProps = {
  children: React.ReactNode;
  params: Params;
};

const Layout = async ({ children, params }: LayoutProps) => {
  const { id } = await params;
  return (
    <>
      <Header link={id} />
      <section className="p-4">
        <ProjectTitle />
        {children}
      </section>
    </>
  );
};

export default Layout;
