import fs from "fs";
import path from "path";
const filePath = path.join(
   process.cwd(),
   "data",
   "products.json"
);
const data = fs.readFileSync(filePath);
const myData= JSON.parse(data);
export default function dataById(id) {
    
    return   myData.find((products)=>{
return products.id === Number(id)
    })
}