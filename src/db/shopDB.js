import Dexie from "dexie";

export const shopDB = new Dexie("ShopDB");
shopDB.version(3).stores({
  products: "++id,name,price",
  archive: "++id,name,price,hour,date",
  amounts: "key,value",
});

export const addProduct = async (product) => {
  return await shopDB.products.add(product);
};
export const deleteProduct = async (id) => {
  return await shopDB.products.delete(id);
};
export const getAllProducts = async () => {
  return await shopDB.products.toArray();
};
export const getProductsCount = async () => {
  return await shopDB.products.count();
};
export const getAmountDB = async () => {
  const result = await shopDB.amounts.get("amount");
  return result ? result.value : 0;
};
export const setAmountDB = async (value) => {
  await shopDB.amounts.put({ key: "amount", value });
};

export const addArchive = async (archive) => {
  return await shopDB.archive.add(archive);
};
export const deleteArchive = async (id) => {
  return await shopDB.archive.delete(id);
};
export const getAllArchives = async () => {
  return await shopDB.archive.toArray();
};
export const getArchiveCount = async () => {
  return await shopDB.archive.count();
};
