"use client";

import React, { useState } from "react";
import Link from "next/link";
import { createClient } from "@/app/utils/supabase/client";
import { EllipsisVertical } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LinkButtonType {
  id?: number;
  baseurl?: string;
  user_id?: string;
  name: string;
}
const LinkButton: React.FC<LinkButtonType> = ({ name, baseurl }) => {
  const [url, setUrl] = useState("");
  const [savedUrl, setSavedUrl] = useState(baseurl);
  const [isEditing, setIsEditing] = useState(true);

  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const supabase = createClient();

  const handleSave = () => {
    if (url.trim()) {
      setSavedUrl(url.startsWith("http") ? url : `https://${url}`);
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div
      className={`flex items-center border border-zinc-300 //bg-gray-800 /p-4 rounded-2xl ${
        savedUrl && "bg-zinc-200 border-none "
      }`}
    >
      {!baseurl && isEditing ? (
        <>
          <div className="p-4 w-full">
            <div>{name}</div>
            <div className="flex gap-4 //border border-gray-400 rounded-md">
              <Input
                type="text"
                value={url}
                className="w-full bg-white shadow-none"
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Введите URL (example.com)"
                // className="px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                onClick={handleSave}
                disabled={!url.trim()}
                className={`px-4 py-2 rounded-r-sm text-white ${
                  !url.trim()
                    ? "bg-zinc-500 cursor-not-allowed"
                    : "//bg-blue-500 //hover:bg-blue-600"
                }`}
              >
                Сохранить
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <Link
            href={savedUrl || ""}
            className="flex p-4 justify-between items-center w-full"
            rel="noopener noreferrer"
            target="_blank"
          >
            {name}
          </Link>
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={handleEdit}
            className="mr-4 text-gray-600 hover:text-gray-800"
          >
            <EllipsisVertical />
          </Button>
        </>
      )}
    </div>
  );
};

export default LinkButton;
