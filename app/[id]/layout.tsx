import React from "react";
import Header from "@/components/ui/header";
import ProjectTitle from "@/components/ui/projectTitle";

const Layout = ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { id: string };
}>) => {
  return (
    <>
      <Header link={params.id} />
      <section className="p-4">
        <ProjectTitle />
        {/* <h1>
          Проект <br />
          {params.id}
        </h1> */}

        {children}
      </section>
    </>
  );
};

export default Layout;
