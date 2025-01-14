"use client"; // Mark this as a Client Component

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for App Router

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /products
    router.push("/products");
  }, [router]);

  return (
    <div className="loader-container">
      <h1>Loading...</h1>
      {/* Add a custom loader here */}
    </div>
  );
}
