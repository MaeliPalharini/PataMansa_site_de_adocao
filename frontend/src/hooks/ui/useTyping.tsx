"use client";
import React, {useState, useEffect, JSX} from "react";
import {motion} from "framer-motion";
import parse from "html-react-parser";

type TypewriterProps = {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenPhrases?: number;
  loop?: boolean;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
};

export default function Typewriter({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 50,
  delayBetweenPhrases = 1200,
  loop = true,
  className = "text-4xl font-bold text-white",
  tag = "h1",
}: TypewriterProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const Tag = tag;

  const rawText = phrases[phraseIndex].replace(/<[^>]*>/g, "");

  useEffect(() => {
    if (!loop && phraseIndex >= phrases.length) return;

    if (!isDeleting && charIndex === rawText.length) {
      const timeout = setTimeout(
        () => setIsDeleting(true),
        delayBetweenPhrases
      );
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (loop ? (prev + 1) % phrases.length : prev + 1));
      return;
    }

    const timeout = setTimeout(
      () => {
        setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    phraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    delayBetweenPhrases,
    loop,
    rawText.length,
  ]);

  function buildPartialHTML(fullHTML: string, length: number) {
    const match = fullHTML.match(/^(.*?<span[^>]*>)(.*?)(<\/span>.*)?$/);

    if (!match) {
      return fullHTML.slice(0, length);
    }

    const beforeSpan = match[1];
    const spanText = match[2];
    const afterSpan = match[3] || "";

    const beforeTextLength = beforeSpan.replace(/<[^>]*>/g, "").length;

    if (length <= beforeTextLength) {
      return fullHTML.replace(/<[^>]*>/g, "").slice(0, length);
    }

    const spanVisibleLength = length - beforeTextLength;
    const visibleSpanText = spanText.slice(0, spanVisibleLength);

    return beforeSpan + visibleSpanText + afterSpan;
  }

  const partialHTML = buildPartialHTML(phrases[phraseIndex], charIndex);

  return (
    <Tag
      className={className}
      style={{
        whiteSpace: "normal",
        display: "inline",
      }}
    >
      <span>{parse(partialHTML)}</span>

      <motion.span
        style={{marginLeft: 2}}
        animate={{opacity: [1, 0, 1]}}
        transition={{duration: 1, repeat: Infinity, ease: "easeInOut"}}
        aria-hidden="true"
      >
        |
      </motion.span>
    </Tag>
  );
}
