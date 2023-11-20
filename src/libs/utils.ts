import clsx, { ClassValue } from "clsx";
import { RefObject } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export function _ref(ref: RefObject<HTMLElement>) {
  return ref.current as HTMLElement;
}
