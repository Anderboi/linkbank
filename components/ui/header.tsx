"use client";

import React from "react";
import { Button } from "./button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./breadcrumb";

const Header = ({ link }: { link: string }) => {
  const route = useRouter();

  return (
    <nav className="flex items-center p-4 gap-8">
      <Button variant={"ghost"} size={"icon"} onClick={() => route.back()}>
        <ChevronLeft />
      </Button>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={link}>{link}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
};

export default Header;
