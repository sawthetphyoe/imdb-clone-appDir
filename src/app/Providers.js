"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class"
      disableTransitionOnChange
    >
      <div className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200 text-gray-700 min-h-screen select-none ">
        {children}
      </div>
    </ThemeProvider>
  );
}
