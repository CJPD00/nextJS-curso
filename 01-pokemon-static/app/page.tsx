"use client";
import { Button, Link } from "@nextui-org/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-large text-primary">Hello</h1>
    <Link
      isExternal
      href="/about"
      color="secondary"
      showAnchorIcon
      as={NextLink}
    >
      About
    </Link>
    </div>
  );
}
