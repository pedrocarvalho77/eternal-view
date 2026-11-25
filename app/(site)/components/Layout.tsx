import React from "react";

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <main className="py-12 sm:py-20">
      {children}
    </main>
  );
}
