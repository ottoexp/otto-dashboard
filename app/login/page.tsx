"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const res = await signIn("credentials", {
      username: form.get("username"),
      password: form.get("password"),
      redirect: false,
    });
    if (res?.ok) {
      router.push("/");
    } else {
      setError("Invalid credentials");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80 p-8 border rounded-lg shadow">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <input name="username" placeholder="Username" className="border px-3 py-2 rounded" required />
        <input name="password" type="password" placeholder="Password" className="border px-3 py-2 rounded" required />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="bg-black text-white py-2 rounded hover:bg-gray-800">Sign In</button>
      </form>
    </div>
  );
}
