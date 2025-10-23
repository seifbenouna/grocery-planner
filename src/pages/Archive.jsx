import React from "react";
import { Card } from "../components/Card";
import { ArchiveListContext } from "../context/ArchiveContext";
import { useContext } from "react";

const Archive = () => {
  const { archiveProducts, onDelete } = useContext(ArchiveListContext);

  return (
    <div className="itemlist">
      {archiveProducts.map((item) => (
        <Card key={item.id} item={item} onDelete={onDelete}>
          <p>
            {item.hour}
            <br />
            {item.date}
          </p>
        </Card>
      ))}
    </div>
  );
};
export default Archive;
