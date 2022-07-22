
express = require("express");
productsModel = require("../models/product");

const app = express();

app.get("/product", async (request, response) => {
  const product = await productsModel.find({});
  try 
  {
    response.send(product);
  } 
  catch (error) 
  {
    response.status(500).send(error);
  }
});

app.post("/product", async (request, response) => {
    const product = new productsModel(request.body);
    try 
    {
      await product.save();
      response.send(product);
    }
     catch (error) 
     {
      response.status(500).send(error);
    }
  });

  app.delete("/product/:id", async(request, response) =>{
    try
    {
        product = await productsModel.findByIdAndDelete(request.params.id);
        if(!product)
        { 
            response.status(404).send("There is no such batch");
        }
    }
    catch(error)
    {
        response.status(500).send(error);
    }
  })
  

  app.patch("/product/:id", async(request, response)=>{
    try
    {
        await productsModel.findByIdAndUpdate(request.params.id, request.body);
        await productsModel.save();
    }
    catch(err)
    {
      response.status(500).send(err);
    }
  })

module.exports = app;

