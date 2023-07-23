import fs from "fs";
import path from "path";
const filePath = path.join(
   process.cwd(),
   "data",
   "products.json"
);
const data = fs.readFileSync(filePath);
export default function allData() {
    
    return   JSON.parse(data);
    
}