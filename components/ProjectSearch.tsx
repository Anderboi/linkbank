"use client";

import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

interface Project {
  id: string;
  name: string;
}

export default function ProjectSearch({
  initialProjects,
}: {
  initialProjects: Project[];
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout>();
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchTimeout) clearTimeout(searchTimeout);

    setSearchTimeout(
      setTimeout(() => {
        if (searchQuery) {
          const filtered = initialProjects.filter((project) =>
            project.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setFilteredProjects(filtered);
        } else {
          setFilteredProjects(initialProjects);
        }
      }, 300)
    );

    return () => {
      if (searchTimeout) clearTimeout(searchTimeout);
    };
  }, [searchQuery, initialProjects]);

  return (
    <div className="space-y-4 w-full">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск проекта..."
          className="pl-8"
        />
      </div>

      <div className="flex flex-col gap-4">
        {filteredProjects.map((project) => (
          <a
            key={project.id}
            href={`${project.id}?name=${project.name}`}
            className="p-4 border border-border rounded-lg bg-zinc-200 hover:bg-zinc-300 transition-colors"
          >
            <h3>{project.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
