import React from "react";
import { createClient } from "@/app/utils/supabase/client";
import ProjectSearch from "./ProjectSearch";

const ProjectList = async () => {
  const supabase = createClient();

  const { data: projects, error } = await supabase.from("projects").select("*");

  if (!projects) return <div>Проекты не найдены.</div>;

  return <ProjectSearch initialProjects={projects} />;
};

export default ProjectList;
