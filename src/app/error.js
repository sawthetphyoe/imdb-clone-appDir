"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1 className="font-medium text-xl mb-4">Something went wrong!</h1>
      <button
        className="transition duration-200 border-2 px-4 py-2 rounded-md border-amber-600 text-amber-600
        hover:bg-amber-600 hover:text-gray-700"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}
