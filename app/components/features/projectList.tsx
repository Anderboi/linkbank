import Link from "next/link";
import React from "react";

const projects = [
  {
    name: "first",
    link: "/first",
  },
  {
    name: "second",
    link: "/second",
  },
];

const ProjectList = () => {
  return (
    <div className="w-full">
      <h1>Проекты</h1>
      <section className="flex flex-col gap-2">
        {projects.map((project, index) => (
          <Link key={index} href={project.link}>
            <div className="p-4 border border-border rounded-lg">
              <h3>{project.name}</h3>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default ProjectList;
