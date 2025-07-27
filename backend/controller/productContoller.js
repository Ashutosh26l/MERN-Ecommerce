import Product from '../models/productModel.js';

//creating products
export const createProducts=async(req,res)=>{
  //  console.log(req.body);
  
  const product= await Product.create(req.body)
  res.status(201).json({
    success:true,
    product
  })
}

//getting all products
export const getAllProducts=async(req,res)=>{
  const products=await Product.find()
  res.status(200).json({
    success:true,
    products
  })
}

//update products
export const updateProduct=async(req,res)=>{
  const product =await Product.findById(req.params.id)
  console.log(product);
  
}
// export const getSingleProduct=(req, res) => {
//   res.status(200).json({
//     message: "Single Product",
//   });
// };