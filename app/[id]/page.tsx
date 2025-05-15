import React from "react";
import LinkButton from "../../components/ui/linkButton";
import { createClient } from "../utils/supabase/client";

// Базовые ссылки по умолчанию
const defaultLinks = [
  { name: "Техническое задание", baseurl: "" },
  { name: "Проект PDF", baseurl: "" },
  { name: "Информация по объекту", baseurl: "" },
  { name: "Модель SketchUp", baseurl: "" },
  { name: "Комплектация", baseurl: "" },
  { name: "График поставок", baseurl: "" },
  { name: "Авторский контроль", baseurl: "" },
];

export const revalidate = 0;
const ProjectPage = async ({
  params,
}: {
  params: Promise<{ id: number; name: string }>;
}) => {
  const { id, name } = await params;

  const supabase = createClient();

  const { data, error } = await supabase
    .from("links")
    .select("*")
    .eq("project_id", id);

  // Создаем объект с ссылками из Supabase для быстрого доступа
  const supabaseLinks = data?.reduce((acc, { name, link }) => {
    acc[name] = link;
    return acc;
  }, {} as Record<string, string>);

  // Объединяем ссылки: берем из Supabase если есть, иначе из дефолтных
  const mergedLinks = defaultLinks.map((item) => ({
    ...item,
    baseurl: supabaseLinks?.[item.name] || item.baseurl,
  }));

  return (
    <section className="/p-4 pt-4 my-auto h-full">
      <article>
        <ol className="flex flex-col gap-4">
          {mergedLinks.map((link, index) => (
            <LinkButton
              key={index}
              project_id={id}
              name={link.name}
              baseurl={link.baseurl}
            />
          ))}
        </ol>
      </article>
    </section>
  );
};

export default ProjectPage;
