import React from "react";
import Link from "next/link";
import { createClient } from "@/app/utils/supabase/client";

// const projects = [
//   {
//     name: "Путилково",
//     link: "/first?name=Путилково",
//   },
//   {
//     name: "Раздоры",
//     link: "/second?name=Раздоры",
//   },
// ];

const ProjectList = async () => {
  const supabase = createClient();

  const { data: projects, error } = await supabase.from("projects").select("*");

  return (
    <section className="flex flex-col gap-4">
      {projects &&
        projects.map((project, index) => (
          <Link key={index} href={`${project.id}?name=${project.name}`}>
            <div className="p-4 border border-border rounded-lg bg-zinc-200">
              <h3 className="">{project.name}</h3>
            </div>
          </Link>
        ))}
    </section>
  );
};

export default ProjectList;
