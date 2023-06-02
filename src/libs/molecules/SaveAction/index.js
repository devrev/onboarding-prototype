import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/mobx/providers";

const SaveAction = observer(() => {
  const store = useStore();
  const isOpen = store.configs.actions.isSaveActionOpen;

  return (
    isOpen && (
      <div className="absolute top-full left-0 z-40 bg-overlay shadow-popover rounded-lg p-2">
        <div className="min-w-60 p-2 overflow-x-hidden text-color-highlight">
          <div className="flex-1 hover:bg-area-hovered rounded-lg mt-2">
            <div className="rounded-lg border focus-within:border-input-focused border-input bg-input false flex w-full">
              <div id="action__save_title" className="font-sans text-color-highlight block bg-transparent w-full text-default sm:text-default focus:outline-none focus:ring-0 disabled:cursor-not-allowed rounded-lg border-none py-1.5 px-2">Add title</div>
            </div>
          </div>
          <div className="flex-1 hover:bg-area-hovered rounded-lg mt-2">
            <div className="rounded-lg border focus-within:border-input-focused border-input bg-input false flex w-full">
              <input id="action__save_description" placeholder="Add description" className="font-sans text-color-highlight block bg-transparent w-full text-default sm:text-default focus:outline-none focus:ring-0 disabled:cursor-not-allowed rounded-lg border-none py-1.5 px-2" />
            </div>
          </div>
          <div className="flex flex-row justify-end items-center pt-2 w-full">
            <button id="action__save_bt" className="focus:outline-none whitespace-nowrap disabled:bg-opacity-30 bg-button-primary text-color-highlight shadow-pill disabled:text-color-disabled font-medium border-0 border-transparent hover:bg-button-primary-hovered hover:shadow-pill-hovered focus-visible:ring-1 focus-visible:ring-white-50 focus-visible:ring-offset-2 focus-visible:ring-offset-black-90 h-8 min-w-8 px-2 text-default sm-max:px-4 sm-max:py-3 sm-max:h-10 rounded-lg">
              <span className="flex items-center justify-center">
                Save
              </span>
            </button>
          </div>
        </div>
      </div>
    )
  );
});

export default SaveAction;
