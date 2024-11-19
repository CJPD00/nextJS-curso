"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { diggest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <>
      <h2 className="text-3xl"> Something blablablbla </h2>
      <button onClick={() => reset()}>try again</button>
    </>
  );
}
