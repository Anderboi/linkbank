"use client";

import Link from "next/link";
import React, { useState } from "react";

interface LinkButtonType {
  link?: string;
  name: string;
}
const LinkButton: React.FC<LinkButtonType> = ({ link, name }) => {
  const [url, setUrl] = useState("");
  const [savedUrl, setSavedUrl] = useState("");
  const [isEditing, setIsEditing] = useState(true);

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
    <div className="border border-gray-700 bg-gray-800 p-4 rounded-2xl flex flex-col">
      {isEditing ? (
        <>
          <div>{name}</div>
          <div className="flex border border-gray-400 rounded-md">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Введите URL (example.com)"
              className="px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSave}
              disabled={!url.trim()}
              className={`px-4 py-2 rounded-r-sm text-white ${
                !url.trim()
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Сохранить
            </button>
          </div>
        </>
      ) : (
        <>
          <Link href={savedUrl} rel="noopener noreferrer" target="_blank">
            {name}
          </Link>

          <button
            onClick={handleEdit}
            className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
          >
            Изменить
          </button>
        </>
      )}
    </div>
  );
};

export default LinkButton;
