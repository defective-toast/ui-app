"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Toolbar() {
  const router = useRouter();

  return (
    <div>
      <Link href="/page1">page 1 with link</Link>
      <button onClick={() => router.push("/page1")}>Go to page 1</button>
      <button onClick={() => router.push("/page2")}>Go to page 2</button>
    </div>
  );
}
