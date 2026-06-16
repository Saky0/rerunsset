import { useEffect, useState } from "react";

// Simple typewriter effect with erase and type cycles
export function useTypewriter(words: readonly string[], speed = 70, pause = 1200) {
  const [index, setIndex] = useState(0); // word index
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) {
      return;
    }

    const current = words[index % words.length];
    const isDoneTyping = display === current;
    const isDoneDeleting = display === "";
    const delay = deleting ? speed / 2 : isDoneTyping ? pause : speed;

    const step = () => {
      if (!deleting) {
        if (!isDoneTyping) {
          setDisplay(current.slice(0, display.length + 1));
          return;
        }

        setDeleting(true);
        return;
      }

      if (!isDoneDeleting) {
        setDisplay(current.slice(0, display.length - 1));
        return;
      }

      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    };

    const id = window.setTimeout(step, delay);
    return () => window.clearTimeout(id);
  }, [display, deleting, index, words, speed, pause]);

  return display;
}
