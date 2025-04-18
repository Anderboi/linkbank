"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { createClient } from "@/app/utils/supabase/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface IFormInput {
  projectName: string;
}
const CreateProject = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const supabase = createClient();
  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    const { data, error } = await supabase
      .from("projects")
      .insert({ name: formData.projectName })
      .select();

    router.refresh();
    reset();
  };

  return (
    <form className="flex gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("projectName")}
        placeholder="Введите имя проекта"
      ></Input>

      <Button type="submit" size={"icon"}>
        <Plus />
      </Button>
    </form>
  );
};

export default CreateProject;
