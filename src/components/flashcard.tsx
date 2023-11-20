import { useState, useRef } from "react";

export default function Flashcard({
  front,
  back,
  className,
}: {
  front: string;
  back: string;
}) {
  const card = useRef<HTMLDivElement>(null);
  const [context, setContext] = useState({
    text: front,
    background: "transparent",
  });

  function flip() {
    card.current
      ? (card.current.style.backgroundColor = context.background)
      : "";
    context.text == front
      ? setContext({ text: back, background: "rgb(63 50 187)" })
      : setContext({ text: front, background: "transparent" });
  }

  return (
    <>
      <div
        ref={card}
        id="test"
        className="m-5 w-[300px] flex justify-center items-center 
        h-[300px] p-5 border-4 cursor-pointer hover:translate-y-1 transition-all"
        onClick={flip}
      >
        {context.text}
      </div>
    </>
  );
}
