"use client";

import { useEffect, useState } from "react";
import { apiFetch, ApiError } from "@/lib/api-client";

export default function TestPage() {
  const [result, setResult] = useState<string>("loading...");

  useEffect(() => {
    apiFetch("/tenants/current")
      .then((data) => setResult(JSON.stringify(data, null, 2)))
      .catch((err) => setResult(err instanceof ApiError ? `Error ${err.status}: ${err.message}` : "Unknown error"));
  }, []);

  return <pre className="p-4">{result}</pre>;
}