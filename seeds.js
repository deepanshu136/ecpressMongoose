const Product=require('./models/product.js');

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO ERROR!!!!");
    console.log(err);
  });

//   const p=new Product({
//     name:'Grape fruit',
//     price:500,
//     category:'fruit'
//   })
//   p.save().then(p=>{
//     console.log(p);
//   })
//   .catch(err=>{
//     console.log(err);
//   })

let seedProducts=[
    {
        name:'Grape Fruit',
        price:500,
        category:'fruit'
    },
    {
        name:'Apple',
        price:5000,  
        category:'fruit'
    },
    {
        name:'Capcicum',
        price:100,
        category:'vegetables'
    },
    {
        name:'Mushroom',
        price:400,
        category:'vegetables'
    },
    {
        name:'Milk',
        price:50,
        category:'dairy'
    },
    {
        name:'Paneer',
        price:150,
        category:'dairy'
    }
]
Product.insertMany(seedProducts)
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})