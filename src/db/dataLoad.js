import { getProductsCount, getArchiveCount, getAllArchives } from "./shopDB";

export async function dashboardLoader() {
  const [whichlistCount, archiveCounter] = await Promise.all([
    getProductsCount(),
    getArchiveCount(),
  ]);
  return {
    whichlistCount: whichlistCount ?? 0,
    archiveCounter: archiveCounter ?? 0,
  };
}

export async function archiveLoader() {
  const archives = await getAllArchives();
  return archives ?? [];
}
