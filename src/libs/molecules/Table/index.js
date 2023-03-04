import useMobileScreen from "@/hooks/useMobileScreen";
import clsx from "clsx";
import React from "react";

const Table = ({ data, headers }) => {
  const isMobile = useMobileScreen();
  return (
    <div className="flex items-start flex-2 mr-20">
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
                <div className="w-4 h-4 border rounded-sm mr-2"></div>
                {headers[0]}
              </div>
            </th>
          </tr>
          {data.map((dataItem) => (
            <tr key={dataItem[0]}>
              <td>
                <div
                  className={clsx(
                    "flex items-center mr-4",
                    isMobile ? "ml-1" : "ml-12"
                  )}
                >
                  <div className="w-4 h-4 border rounded-sm mr-2"></div>
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
              <tr key={dataItem[1]}>
                {/* eslint-disable-next-line react/jsx-key */}
                {dataItem.map((item, idx) => idx > 0 && <td>{item}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
