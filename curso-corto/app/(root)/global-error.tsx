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
    <html>
      <body>
        <h2> Something blablablbla </h2>
        <button onClick={() => reset()}>try again</button>
      </body>
    </html>
  );
}
