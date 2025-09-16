import React, { useState, useEffect } from "react";

const useTypewriter = (words: string[], speed = 100, delay = 2000) => {
  const [index, setIndex] = useState(0); // current word
  const [subIndex, setSubIndex] = useState(0); // current letter
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (index === words.length) setIndex(0); // loop words

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
      if (forward && subIndex === words[index].length) {
        setForward(false);
        setTimeout(() => {}, delay); // wait before deleting
      } else if (!forward && subIndex === 0) {
        setForward(true);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, forward ? speed : speed / 2);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index, words, speed, delay]);

  return words[index].substring(0, subIndex);
};
interface TypingEffectProps {
  words?: string[];
}

const TypingEffect = ({words}: TypingEffectProps) => {
  const text = useTypewriter(
    words || ["a Developer", "a Designer", "a Creator"],
    120,
    1500
  );

  return <h1 className="text-2xl font-bold font-[mono] text-purple-500">{text}|</h1>;
};

export default TypingEffect;
