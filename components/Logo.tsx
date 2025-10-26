"use client";

import { SquareStack } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <SquareStack />
      <span className="text-2xl font-bold">Convertly</span>
    </Link>
  );
};

export default Logo;
