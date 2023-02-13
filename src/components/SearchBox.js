"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch("");
  };
  return (
    <div>
      <form
        className="flex max-w-7xl mx-auto px-4 sm:px-8 justify-between items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search keywords ..."
          className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="text-amber-600 disabled:text-gray-400"
          disabled={!search}
        >
          Search
        </button>
      </form>
    </div>
  );
}
