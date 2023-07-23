import allData from "../../../../services/allData";



export default function handler(req, res) {

   if (req.method==="GET") {
      
      const products= allData()
      return res.status(200).json(products)
   }
   return res.status(404).send()


}
