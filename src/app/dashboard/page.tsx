"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getToken, removeToken } from "@/app/components/Buttons/saveButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for client-side to load
    const savedToken = getToken();
    console.log("Token from storage:", savedToken);

    if (!savedToken) {
      console.log("No token found, redirecting to login...");
      router.push("/");
      return;
    }

    setToken(savedToken);
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    removeToken();
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6">
          <CardContent>
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Your Bearer Token:</h2>
              <div className="bg-gray-100 p-4 rounded-md border border-gray-300 break-all">
                <code className="text-sm">{token}</code>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                This is your authentication token. Use it in API requests.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links:</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button onClick={() => router.push("/about")}>About</Button>
                <Button onClick={() => router.push("/education")}>
                  Education
                </Button>
                <Button onClick={() => router.push("/hobbies")}>Hobbies</Button>
                <Button onClick={() => router.push("/contact")}>Contact</Button>
              </div>
            </div>

            <div className="mt-6">
              <Button
                onClick={handleLogout}
                className="w-full bg-red-600 hover:bg-red-700"
              >
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
