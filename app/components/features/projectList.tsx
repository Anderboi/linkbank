import React from "react";
import Link from "next/link";

const projects = [
  {
    name: "Путилково",
    link: "/first?name=Путилково",
  },
  {
    name: "Раздоры",
    link: "/second?name=Раздоры",
  },
];

const ProjectList = () => {
  return (
    <section className="flex flex-col gap-4">
      {projects.map((project, index) => (
        <Link key={index} href={project.link}>
          <div className="p-4 border border-border rounded-lg bg-zinc-200">
            <h2 className="">{project.name}</h2>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ProjectList;
