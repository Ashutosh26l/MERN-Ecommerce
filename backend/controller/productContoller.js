import Product from '../models/productModel.js';

//creating products
export const createProducts=async(req,res)=>{
  console.log(req.body);
  
  //await Product.create(req,body)
}
export const getAllProducts=(req,res)=>{
  res.status(200).json({
    message:"All Products"
  })
}
// export const getSingleProduct=(req, res) => {
//   res.status(200).json({
//     message: "Single Product",
//   });
// };