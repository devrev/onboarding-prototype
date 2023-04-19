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

const CreateTicketPane = observer(() => {
  const store = useStore();
  const [isOpen, setIsOpen] = useState(true);
  const type = store.configs.panes.createTicketPane.type

  return (
    store.configs.panes.createTicketPane.isOpen && (
      <Pane
        isOpen={isOpen}
        position={store.configs.panes.createTicketPane.position}
      >
        <div className="px-4 py-6">
          <div className="flex items-center justify-between">
            <WorkPill type={type} display={`New ${type}`} isCreate={true} />
            <div className="flex items-center text-gray-500">
              <p className="text-small font-medium">Reset</p>
              <MdOutlineClose className="text-h1 ml-4" />
            </div>
          </div>
          <div className="mt-6">
            <Input id="createTicketPane__title" text="Add Title" />
            <p className="text-small text-gray-700 mt-4 ml-2">
              We found 3 potential similar work items
            </p>
            <hr className="mt-3" />
          </div>
          <div className="mt-4">
            <Input id="createTicketPane__description" text="Add Description" />
            <AiOutlinePaperClip className="mt-2 text-h2 ml-1" />
            <hr className="mt-4" />
          </div>
          <div className="mt-4">
            <p
              className="text-tiny text-gray-500 mb-4"
              id="createTicketPane__part_selector"
            >
              Which part is this work item about?
            </p>
            <PartSelector id="part_selector" />
            <hr className="mt-4" />
          </div>
          <div className="mt-5" id="createTicketPane__attributes">
            <Attributes
              attrs={[
                {
                  name: "severity",
                  value: "medium",
                },
                {
                  name: "owner",
                  value: "Manan Sharma",
                },
              ]}
            />
            <hr className="mt-4" />
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="text-small text-gray-700 flex items-center">
              <AiOutlinePlus className="mr-1" />
              Link Issues
            </div>
            <Button id="createTicketPane__create_btn" type="action">
              Create
            </Button>
          </div>
        </div>
      </Pane>
    )
  );
});

export default CreateTicketPane;
