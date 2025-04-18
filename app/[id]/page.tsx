import React from "react";
import LinkButton from "../components/ui/linkButton";

const links = {
  brief: {
    link: "https://disk.yandex.ru/d/5sU-hJmjPnPtDA",
  },

  pdf: { link: "" },
};
export const revalidate = 0;
const ProjectPage = async ({ params }: { params: Promise<{ id: string, name:string }> }) => {
  const { id, name } = await params;

  return (
    <section className="/p-4 pt-4 my-auto h-full">
      {/* <h1>
        Проект <br />
        {id}
      </h1> */}
      <article>
        <ol className="flex flex-col gap-4">
          <LinkButton
            name="Техническое задание"
            baseurl="https://disk.yandex.ru/d/5sU-hJmjPnPtDA"
          />
          <LinkButton name="Проект PDF" />
          <LinkButton name="Информация по объекту" />
          <LinkButton name="Модель SketchUp" />
          <LinkButton name="Комплектация" />
          <LinkButton name="График поставок" />
          <LinkButton name="Авторский контроль" />
        </ol>
      </article>
    </section>
  );
};

export default ProjectPage;
