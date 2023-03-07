import React from "react";
import { BsEmojiWink, BsTypeStrikethrough, BsCodeSlash } from "react-icons/bs";
import {
  AiOutlinePaperClip,
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineLink,
  AiOutlineUnorderedList,
  AiOutlineOrderedList,
  AiOutlineSend,
} from "react-icons/ai";
import Button from "@/libs/atoms/button";

const TextBox = () => {
  const icons = [
    BsEmojiWink,
    AiOutlinePaperClip,
    AiOutlineBold,
    AiOutlineItalic,
    BsTypeStrikethrough,
    AiOutlineLink,
    BsCodeSlash,
    AiOutlineUnorderedList,
    AiOutlineOrderedList,
  ];
  return (
    <div className="w-full min-h-20 border rounded-lg py-2 px-2">
      <div
        id="textBox__textarea"
        className="min-h-[2.5rem] text-default break-all"
      ></div>
      <div className="flex items-center justify-between">
        <div className="text-h2 flex items-center text-gray-600">
          {icons.map((Icon, idx) => (
            <div
              key={idx}
              className="text-h2 p-1 mr-1 rounded-md hover:bg-menu-hovered"
            >
              <Icon />
            </div>
          ))}
        </div>
        <div>
          <Button id="textBox__send-btn" type="primary">
            <AiOutlineSend />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
