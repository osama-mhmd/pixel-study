import { useState, useRef } from "react";
import { cn, _ref } from "../libs/utils";

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
  const [context, setContext] = useState(front);

  function flip() {
    // _ref(card).style.transform = "rotateY(180deg)";
    context == front
      ? (setContext(back),
        (_ref(card).style.backgroundColor = "rgb(63 50 187)"))
      : (setContext(front), (_ref(card).style.backgroundColor = "transparent"));
    // setTimeout(() => {
    //   setContext(back);
    // }, 400);
  }

  return (
    <>
      <div
        ref={card}
        id="test"
        className={cn(
          "m-5 w-[300px] rounded-lg flex justify-center items-center h-[300px] p-5 border-4 cursor-pointer hover:translate-y-1 transition-all",
          className
        )}
        onClick={flip}
      >
        {context}
      </div>
    </>
  );
}
