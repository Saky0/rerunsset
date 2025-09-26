import { useEffect, useRef, useState } from "react";

// Simple typewriter effect with erase and type cycles
export function useTypewriter(words: readonly string[], speed = 70, pause = 1200) {
  const [index, setIndex] = useState(0); // word index
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const current = words[index % words.length];
    const isDoneTyping = display === current;
    const isDoneDeleting = display === "";

    const step = () => {
      if (!deleting) {
        // typing
        if (!isDoneTyping) {
          setDisplay(current.slice(0, display.length + 1));
          return;
        }
        // pause then start deleting
        timer.current = window.setTimeout(() => setDeleting(true), pause);
        return;
      }
      // deleting
      if (!isDoneDeleting) {
        setDisplay(current.slice(0, display.length - 1));
        return;
      }
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    };

    const id = window.setTimeout(step, deleting ? speed / 2 : speed) as unknown as number;
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [display, deleting, index, words, speed, pause]);

  return display;
}
