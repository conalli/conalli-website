import { RefObject } from "react";

export const scrollHandler = <T extends HTMLElement>(ref: RefObject<T>): void => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};
