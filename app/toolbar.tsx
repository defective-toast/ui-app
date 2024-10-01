"use client";

import { Button } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Toolbar() {
  const router = useRouter();

  return (
    <div>
      <Button component={Link} href="/">
        Go Home
      </Button>
      <Button component={Link} href="/page1">
        Go to page 1
      </Button>
      <Button component={Link} href="/page2">
        Go to page 2
      </Button>
    </div>
  );
}
