import { useState, useRef } from "react";
import { cn } from "../libs/utils";

export default function Flashcard({
  front,
  back,
  className = "",
}: {
  front: string;
  back: string;
  className?: string;
}) {
  const card = useRef<HTMLDivElement>(null);
  const [context, setContext] = useState({
    text: front,
    background: "transparent",
  });

  function flip() {
    context.text == front
      ? setContext({ text: back, background: "rgb(63 50 187)" })
      : setContext({ text: front, background: "transparent" });
    card.current
      ? (card.current.style.backgroundColor = context.background)
      : "";
  }

  return (
    <>
      <div
        ref={card}
        id="test"
        className={cn(
          "m-5 w-[300px] flex justify-center items-center h-[300px] p-5 border-4 cursor-pointer hover:translate-y-1 transition-all",
          className
        )}
        onClick={flip}
      >
        {context.text}
      </div>
    </>
  );
}
