import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"please enter product decription"],  
    },
    price:{
        type:Number,
        required:[true,"please enter prduct price"],
        maxLength:[7,"price cannot exceed 7 digits"]
    },
    ratings:{
        type:Number,
        default:0
    },
    image:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"please enter product category"],
    },
    stock:{
        type:Number,
        required:[true,"please enter product stock"],
        maxLength:[5,"price cannot exceed 5 digits"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true

            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    created:{
        type:Date,
        default:Date.now
    }
})

export default mongoose.model("Product",productSchema);