import React from "react";

const Table = ({ data, headers }) => {
  return (
    <div className="flex items-start flex-2">
      <table>
        <tbody>
          <tr>
            <th>{headers[0]}</th>
          </tr>
          {data.map((dataItem) => (
            <tr key={dataItem[0]}>
              <td>{dataItem[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full h-full">
        <table className="min-w-full overflow-x-scroll block pr-20">
          <tbody>
            <tr>
              {headers.map(
                (header, idx) => idx > 0 && <th key={header}>{header}</th>
              )}
            </tr>
            {data.map((dataItem) => (
              <tr key={dataItem[1]}>
                {dataItem.map(
                  (item, idx) => idx > 0 && <td key={item}>{item}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
