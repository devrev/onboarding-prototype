import useMobileScreen from "@/hooks/useMobileScreen";
import React from "react";
import { POSITION } from "@/constants";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import { useStore } from "@/mobx/providers";

const positionClass = {
  [POSITION.RIGHT]: "right-0 z-50",
  [POSITION.MIDDLE]: "right-[30rem] z-40",
};

const Pane = observer(({ children, isOpen, position = POSITION.RIGHT }) => {
  const store = useStore();
  const posClass = positionClass[position];
  const shadowChanges =
    store.configs.panes.numberOfPanesOpen === 2 ? "shadow-popover" : "";
  return (
    isOpen && (
      <div
        className={clsx(
          "fixed top-0 h-full transition-[max-width] shadow-modal duration-300 ease-in-out bg-base max-w-[30rem] sm-max:w-screen w-[30rem] overflow-y-scroll",
          posClass,
          position === POSITION.RIGHT && shadowChanges
        )}
      >
        {children}
      </div>
    )
  );
});

export default Pane;
