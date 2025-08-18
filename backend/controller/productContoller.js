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
  let product =await Product.findById(req.params.id)
  console.log(product);
  if(!product){
    return res.status(500).json({
      success:false,
      message:"Product not found"
    })
  }
  product= await Product.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true
  })
  res.status(200).json({
    success:true,
    product
  })
}
// export const getSingleProduct=(req, res) => {
//   res.status(200).json({
//     message: "Single Product",
//   });
// };