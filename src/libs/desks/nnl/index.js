import React, { useState } from "react";
import Filters from "@/libs/components/Filters";
import { useStore } from "@/mobx/providers";
import { observer } from "mobx-react-lite";
import NowDesk from "./now";
import Button from "@/libs/atoms/button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TbTilde } from "react-icons/tb";
import { BsPlay } from "react-icons/bs";
import { NNL } from "@/constants";
import clsx from "clsx";
import NextDesk from "./next";

export const NNLIconMap = {
  [NNL.NOW]: BsPlay,
  [NNL.NEXT]: MdKeyboardDoubleArrowRight,
  [NNL.LATER]: TbTilde,
};

const NNLDesksMap = {
  [NNL.NOW]: NowDesk,
  [NNL.NEXT]: NextDesk,
  [NNL.LATER]: NextDesk,
};

const NNLButton = ({ type, value, className, onClick }) => {
  const Icon = NNLIconMap[value];
  return (
    <Button type={type} onClick={onClick} className={clsx("flex-1", className)}>
      <div className="flex items-center text-default capitalize">
        <Icon className="text-h1 mr-1" />
        {value}
      </div>
    </Button>
  );
};

const NNLDesk = observer(() => {
  const store = useStore();
  const isOpen = true;

  const [sprint, setSprint] = useState(NNL.NOW);

  const getNNLButtonType = (value) => {
    return sprint === value ? "lifted" : "lifted_disabled";
  };

  const DeskToRender = NNLDesksMap[sprint];

  return (
    isOpen && (
      <div className="h-screen overflow-hidden relative">
        <div className="py-5 px-page-gutter flex">
          <h2 className="text-gray-600" id="build_app_heading">
            Build /
          </h2>
          <h2 className="ml-1 capitalize">{sprint}</h2>
        </div>
        <div className="flex items-center w-full px-page-gutter">
          <NNLButton
            type={getNNLButtonType(NNL.NOW)}
            value={NNL.NOW}
            onClick={() => setSprint(NNL.NOW)}
          />
          <NNLButton
            type={getNNLButtonType(NNL.NEXT)}
            value={NNL.NEXT}
            className="mx-5"
            onClick={() => setSprint(NNL.NEXT)}
          />
          <NNLButton
            type={getNNLButtonType(NNL.LATER)}
            value={NNL.LATER}
            onClick={() => setSprint(NNL.LATER)}
          />
        </div>
        <div className="px-page-gutter mt-5">
          <Filters
            showSelf={true}
            filters={[
              { name: "Stage", value: "In Review" },
              { name: "Date", value: "Yesterday" },
            ]}
            sort={[{ name: "Sort" }, { name: "Group" }, { name: "Customize" }]}
          />
        </div>
        <div className="mt-6 h-full">
          <DeskToRender />
        </div>
      </div>
    )
  );
});

export default NNLDesk;
