import { readFile } from "fs/promises";
import path from "path";

export async function getJson(fileName) {
  const filePath = path.join(process.cwd(), "public", fileName);
  const fileContents = await readFile(filePath, "utf8");
  return JSON.parse(fileContents);
}
