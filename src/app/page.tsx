"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to your portfolio home page
    router.push("/home");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Redirecting to portfolio...</p>
    </div>
  );
}
