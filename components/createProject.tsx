"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { createClient } from "@/app/utils/supabase/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface IFormInput {
  projectName: string;
}
const CreateProject = () => {
  const [open, setOpen] = useState(false);
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
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"default"}>
          <Plus /> Создать
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Создайте новый проект</DialogTitle>
          <DialogDescription>
            Здесь вы можете написать название проекта или адрес, который будет
            отображаться в списке проектов.
          </DialogDescription>
        </DialogHeader>
        <form className="flex gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("projectName")}
            placeholder="Введите имя проекта"
          ></Input>
          <Button type="submit" size={"default"}>
            Создать
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProject;
