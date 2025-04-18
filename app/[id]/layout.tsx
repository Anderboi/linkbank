import React from "react";
import Header from "@/components/ui/header";
import ProjectTitle from "@/components/ui/projectTitle";

const Layout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { id: string };
}>) => {
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
