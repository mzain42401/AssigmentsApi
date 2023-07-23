import dataById from "../../../../services/dataById"



export default function handler(req, res) {
if(req.method==="GET"){
  const {productsId}=req.query
      const products= dataById(productsId)
      return res.status(200).json(products)
}
    
  
   return res.status(404).send()


}
