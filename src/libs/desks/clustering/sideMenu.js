import { observer } from "mobx-react-lite";
import React from "react";

const ClusteringSideMenuTab = ({ item }) => {
  return (
    <div className="flex p-2 items-center hover:bg-menu-hovered rounded-md cursor-pointer">
      <div className="flex items-center">
        <p className="ml-1 min-w-[10rem]">{item.name}</p>
      </div>
      <p className="text-small bg-menu-selected px-2.5 py-1 rounded-full ml-14">
        {item.count}
      </p>
    </div>
  );
};

const ClusteringSideMenu = observer(({ data }) => {
  return (
    <div className="p-2">
      {data.map((dataItem) => {
        return <ClusteringSideMenuTab key={dataItem.name} item={dataItem} />;
      })}
    </div>
  );
});

export default ClusteringSideMenu;
