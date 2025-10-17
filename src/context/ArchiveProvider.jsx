import React, { useEffect, useState } from "react";
import { ArchiveListContext } from "./ArchiveContext";
import { getAllArchives, addArchive, deleteArchive } from "../db/shopDB";

export const ArchiveProvider = ({ children }) => {
  const [archiveProducts, setArchiveProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const archives = await getAllArchives();
      setArchiveProducts(archives ?? []);
    })();
  }, []);

  const onDelete = async (id) => {
    await deleteArchive(id);
    setArchiveProducts(archiveProducts.filter((item) => item.id !== id));
  };

  const onAddArchiveItem = async (item) => {
    item.hour = new Date().toLocaleTimeString();
    item.date = new Date().toLocaleDateString();
    console.log("onAddArchiveItem", item);
    const newIdArchive = await addArchive(item);
    setArchiveProducts([...archiveProducts, { id: newIdArchive, ...item }]);
  };

  return (
    <ArchiveListContext.Provider
      value={{ archiveProducts, onDelete, onAddArchiveItem }}
    >
      {children}
    </ArchiveListContext.Provider>
  );
};
