"use client";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <button type="submit" className="search-btn" onClick={reset}>
      <Link className="search-btn text-white" href="/">
      <X className="size-5"></X>
      </Link>
    </button>
  );
};

export default SearchFormReset;