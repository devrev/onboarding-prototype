import React from "react";

const Table = ({ data, headers }) => {
  return (
    <div className="flex items-start flex-2 mr-20">
      <table>
        <tbody>
          <tr>
            <th>
              <div className="flex items-center ml-14 mr-4">
                <div className="w-4 h-4 border rounded-sm mr-2"></div>
                {headers[0]}
              </div>
            </th>
          </tr>
          {data.map((dataItem) => (
            <tr key={dataItem[0]}>
              <td>
                <div className="flex items-center ml-12 mr-4">
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
