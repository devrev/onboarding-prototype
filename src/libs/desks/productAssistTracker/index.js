import React, { useState } from "react";
import Filters from "@/libs/components/Filters";
import { useStore } from "@/mobx/providers";
import { observer } from "mobx-react-lite";
import Button from "@/libs/atoms/button";
import SaveAction from "@/libs/molecules/SaveAction";
import { BiListPlus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { TbTilde, TbArrowNarrowRight, TbSquareLetterT } from "react-icons/tb";
import { FiShare2 } from "react-icons/fi";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { DESKS, PRODUCT_ASSIST_TRACKER } from "@/constants";
import clsx from "clsx";
import ProductAssistTrackerIssueDesk from "./productAssistTrackerIssue.js";
import dayjs from "dayjs";

export const ProductAssistTrackerIconMap = {
  [PRODUCT_ASSIST_TRACKER.AWAITING_PRODUCT]: HiOutlineChevronDoubleUp,
  [PRODUCT_ASSIST_TRACKER.AWAITING_DEVELOPMENT]: TbTilde,
  [PRODUCT_ASSIST_TRACKER.DEVELOPMENT]: TbArrowNarrowRight,
};

const ProductAssistTrackerButton = ({ type, value, className, onClick, ...props }) => {
  const Icon = ProductAssistTrackerIconMap[value];
  return (
    <Button
      type={type}
      onClick={onClick}
      className={clsx("flex-1", className)}
      {...props}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center text-default capitalize">
          <Icon className="text-h1 mr-1" />
          {value}
        </div>
      </div>
    </Button>
  );
};

const ProductAssistTrackerDesk = observer(() => {
  const store = useStore();
  const isOpen = store.configs.desks.deskOpen === DESKS.PRODUCT_ASSIST_TRACKER_DESK;
  const isFilterSaved = store.configs.actions.isFilterSaved;

  const [productAssistTracker, PetproductAssistTracker] = useState(PRODUCT_ASSIST_TRACKER.AWAITING_PRODUCT);

  const getNNLButtonType = (value) => {
    return productAssistTracker === value ? "lifted" : "lifted_disabled";
  };
  const issues = store.data.lists.issues;

  return (
    isOpen && (
      <div className="h-screen overflow-hidden relative">
        <div className="py-5 px-page-gutter flex w-full justify-between">
          <div className="flex w-full">
            <h2 className="text-gray-600" id="build_app_heading">
              Support /
            </h2>
            <h2 className="ml-1 capitalize">{productAssistTracker}</h2>
          </div>
          <div className="flex shrink-0 gap-3">
            <div className="flex relative">
              <button className="focus:outline-none whitespace-nowrap disabled:bg-opacity-30 bg-button-primary text-color-highlight shadow-pill disabled:text-color-disabled font-medium border-0 border-transparent hover:bg-button-primary-hovered hover:shadow-pill-hovered focus-visible:ring-1 focus-visible:ring-white-50 focus-visible:ring-offset-2 focus-visible:ring-offset-black-90 h-8 min-w-8 px-2 text-default sm-max:px-4 sm-max:py-3 sm-max:h-10 rounded-lg" id="action__save_vista">
                <span class="flex items-center justify-center">
                  {isFilterSaved
                    ? <><FiShare2 className="w-5 h-5" /><span class="ml-1.5">Share</span></>
                    : <><BiListPlus className="w-5 h-5" /><span class="ml-1.5">Save as</span></>
                  }
                </span>
              </button>
              <SaveAction />
            </div>
            <button className="focus:outline-none whitespace-nowrap disabled:bg-opacity-30 bg-[#7f45fc] text-white shadow-pill disabled:text-color-disabled font-medium border-0 border-transparent hover:bg-[#7f45fc]/90 hover:shadow-pill-hovered focus-visible:ring-1 focus-visible:ring-white-50 focus-visible:ring-offset-2 focus-visible:ring-offset-black-90 h-8 min-w-8 px-2 text-default sm-max:px-4 sm-max:py-3 sm-max:h-10 sm-max:hidden px-3 flex items-center rounded-lg">
              <span class="flex items-center justify-center">
                <TbSquareLetterT className="w-5 h-5" />
                <span class="ml-1.5">Actions</span>
              </span>
            </button>
            <button className="focus:outline-none whitespace-nowrap disabled:bg-opacity-30 text-white disabled:text-color-disabled bg-button-brand disabled:bg-button-brand-disabled font-medium border-0 border-transparent hover:bg-button-brand-hovered focus:bg-button-brand-hovered focus-visible:ring-1 focus-visible:ring-white-50 focus-visible:ring-offset-2 focus-visible:ring-offset-black-90 h-8 min-w-8 px-2 text-default sm-max:px-4 sm-max:py-3 sm-max:h-10 px-3 rounded-lg">
              <span class="flex items-center justify-center">
                <BsPlusLg className="w-5 h-5" />
                <span class="ml-1.5">Ticket</span>
              </span>
            </button>
          </div>
        </div>
        <div className="flex items-center w-full px-page-gutter">
          <ProductAssistTrackerButton
            type={getNNLButtonType(PRODUCT_ASSIST_TRACKER.AWAITING_PRODUCT)}
            value={PRODUCT_ASSIST_TRACKER.AWAITING_PRODUCT}
            onClick={() => PetproductAssistTracker(PRODUCT_ASSIST_TRACKER.AWAITING_PRODUCT)}
            date={dayjs()}
            id="productAssistTracker-1__button"
          />
          <ProductAssistTrackerButton
            type={getNNLButtonType(PRODUCT_ASSIST_TRACKER.AWAITING_DEVELOPMENT)}
            value={PRODUCT_ASSIST_TRACKER.AWAITING_DEVELOPMENT}
            className="mx-5"
            onClick={() => PetproductAssistTracker(PRODUCT_ASSIST_TRACKER.AWAITING_DEVELOPMENT)}
            date={dayjs().add(1, "week")}
            id="productAssistTracker-2__button"
          />
          <ProductAssistTrackerButton
            type={getNNLButtonType(PRODUCT_ASSIST_TRACKER.DEVELOPMENT)}
            value={PRODUCT_ASSIST_TRACKER.DEVELOPMENT}
            onClick={() => PetproductAssistTracker(PRODUCT_ASSIST_TRACKER.DEVELOPMENT)}
            id="backlog__button"
          />
        </div>
        <div className="px-page-gutter mt-5">
          <Filters
            showSelf={true}
            filters={[{ name: "Created date", value: "Last 30 days" }, { name: "Stage", value: productAssistTracker }]}
            sort={[{ name: "Sort" }, { name: "Group" }, { name: "Customize" }]}
          />
        </div>
        <div className="mt-6 h-full">
          <ProductAssistTrackerIssueDesk issues={issues} />
        </div>
      </div>
    )
  );
});

export default ProductAssistTrackerDesk;
