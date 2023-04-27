import React from "react";
import Switch from "react-switch";

const Toggle = ({ checked, setChecked }) => {
  const handleChange = (isChecked) => {
    setChecked(isChecked);
  };

  return (
    <div id="toggle-btn" className="flex items-center justify-center">
      <Switch
        checked={checked}
        onChange={handleChange}
        className="react-switch"
        onColor="#33f"
        checkedIcon={false}
        checkedHandleIcon={false}
        uncheckedHandleIcon={false}
        uncheckedIcon={false}
        height={15}
        width={24}
        handleDiameter={13}
      />
    </div>
  );
};

export default Toggle;
