"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zilla_Slab } from "next/font/google";
const zilla = Zilla_Slab({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function CodeText({
  text,
  showButton,
}: {
  text: string;
  showButton?: boolean;
}) {
  const titleTypeSpeed = 100;
  const cursorBlinkSpeed = 500;
  const numBlinks = 12;

  const [showCursor, setShowCursor] = useState(true);
  const [titleWordIdx, setTitleWordIdx] = useState(0);
  const [blinkCount, setBlinkCount] = useState(0);
  const [showButtonLocal, setShowButtonLocal] = useState(false);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      if (titleWordIdx < text.length) {
        setTitleWordIdx(titleWordIdx + 1);
      } else {
        setShowButtonLocal(true);
      }
    }, titleTypeSpeed);

    const cursorInterval = setInterval(() => {
      if (blinkCount < numBlinks) {
        setShowCursor(!showCursor);
        setBlinkCount(blinkCount + 1);
      } else {
        setShowCursor(false);
      }
    }, cursorBlinkSpeed);
    return () => {
      clearInterval(titleInterval);
      clearInterval(cursorInterval);
    };
  }, [blinkCount, showCursor, text.length, titleWordIdx]);

  return (
    <div className="max-w-4xl absolute top-52 sm:top-64 mx-10">
      <div className={zilla.className}>
        <h1 className="text-5xl sm:text-6xl lg:text-8xl text-white">
          {text.slice(0, titleWordIdx)}
          {showCursor && <span>&#9647;</span>}
        </h1>
        {showButton && showButtonLocal && (
          <Link href="/about">
            <Button size="xl" className="mt-12 text-lg animate-in">
              Learn More
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
