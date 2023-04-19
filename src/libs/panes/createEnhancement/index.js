import Pane from "@/libs/atoms/pane";
import WorkPill from "@/libs/molecules/workPill";
import Input from "@/libs/atoms/input";
import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlinePaperClip, AiOutlinePlus } from "react-icons/ai";
import PartSelector from "@/libs/components/PartSelector";
import Attributes from "@/libs/components/Attributes";
import Button from "@/libs/atoms/button";
import { observer } from "mobx-react-lite";
import { useStore } from "@/mobx/providers";
import Links from "@/libs/components/Links";

const CreateEnhPane = observer(() => {
  const store = useStore();
  const data = store.data.panes.enhancement;
  const isOpen = true;

  return (
    true && (
      <Pane
        isOpen={isOpen}
        position={store.configs.panes.createEnhancementPane.position}
      >
        <div className="px-4 py-6">
          <div className="flex items-center justify-between">
            <WorkPill
              type="enh"
              display="New Enhancement"
              isCreate={true}
              useBg={false}
            />
            <div className="flex items-center text-gray-500">
              <p className="text-small font-medium">Reset</p>
              <MdOutlineClose className="text-h1 ml-4" />
            </div>
          </div>
          <div className="mt-6">
            <Input id="createEnhPane__title" text="Add Title" />
            <hr className="mt-3" />
          </div>
          <div className="mt-4">
            <Input id="createEnhPane__description" text="Add Description" />
            <AiOutlinePaperClip className="mt-2 text-h2 ml-1" />
            <hr className="mt-4" />
          </div>
          <div className="mt-4">
            <p
              className="text-tiny text-gray-500 mb-4"
              id="createEnhPane__part_selector"
            >
              Select Part
            </p>
            <PartSelector id="part_selector" />
            <hr className="mt-4" />
          </div>
          <div className="mt-5" id="createEnhPane__attributes">
            <Attributes
              attrs={[
                {
                  name: "owner",
                  value: "Susan John",
                },
              ]}
            />
            <hr className="mt-4" />
          </div>
          <div>
            <div className="mt-5">
              <Links
                headers={["docs", "issues", "tickets"]}
                links={data.links}
                type="enh"
                start="tickets"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 float-right">
            <Button id="createEnhPane__create_btn" type="action">
              Create
            </Button>
          </div>
        </div>
      </Pane>
    )
  );
});

export default CreateEnhPane;
