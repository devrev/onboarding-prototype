import useMobileScreen from "@/hooks/useMobileScreen";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";

const TableCheckBox = ({
  onClick,
  isParent = false,
  allowSelect,
  isSelectAll,
}) => {
  return (
    <div
      onClick={() => isParent && onClick()}
      className={clsx(
        "w-4 h-4 border rounded-sm mr-2 flex items-center justify-center text-white",
        isSelectAll && allowSelect && "bg-accent"
      )}
    >
      {isSelectAll && allowSelect && <BsCheck className="text-default" />}
    </div>
  );
};

const Table = observer(({ data, headers, len, allowSelect = false }) => {
  const isMobile = useMobileScreen();
  const [activeRow, setActiveRow] = useState(-1);
  const [isSelectAll, setIsSelectAll] = useState(false);
  return (
    <div
      className="flex items-start flex-2 mr-20"
      onMouseLeave={() => setActiveRow(-1)}
    >
      <table>
        <tbody>
          <tr>
            <th>
              <div
                className={clsx(
                  "flex items-center mr-4",
                  isMobile ? "ml-3" : "ml-14"
                )}
              >
                <TableCheckBox
                  isParent={true}
                  onClick={() => setIsSelectAll(!isSelectAll)}
                  allowSelect={allowSelect}
                  isSelectAll={isSelectAll}
                />
                {headers[0]}
              </div>
            </th>
          </tr>
          {data.map((dataItem, index) => (
            <tr
              key={dataItem[0]}
              className={clsx(activeRow === index && "bg-menu-hovered")}
              onMouseOver={() => setActiveRow(index)}
            >
              <td>
                <div
                  className={clsx(
                    "flex items-center mr-4",
                    isMobile ? "ml-1" : "ml-12"
                  )}
                >
                  <TableCheckBox
                    allowSelect={allowSelect}
                    isSelectAll={isSelectAll}
                  />
                  {dataItem[0]}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-full h-full">
        <table className="min-w-full overflow-x-scroll block pr-20">
          <tbody>
            <tr>
              {headers.map(
                (header, idx) =>
                  idx > 0 && (
                    <th className="secondary-header" key={header}>
                      {header}
                    </th>
                  )
              )}
            </tr>
            {data.map((dataItem, index) => (
              <tr
                key={dataItem[1]}
                className={clsx(activeRow === index && "bg-menu-hovered")}
                onMouseOver={() => setActiveRow(index)}
              >
                {/* eslint-disable-next-line react/jsx-key */}
                {dataItem.map((item, idx) => idx > 0 && <td>{item}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default Table;
