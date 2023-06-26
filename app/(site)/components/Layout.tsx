
import React from "react";

export default async function Layout ({ children }: { children: React.ReactNode }) {

  return (
    <main className="py-20">
      {children}
    </main>

  );
};