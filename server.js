const express = require('express'); 
const app = express();             

app.get('/product', async(req, res) => {
    let resData = {}
    await fetch('https://dummyjson.com/products').then((res) => res.json()).then(data => {
        resData = data?.products?.map(product => ({
            id: product.id,
            title: product.title,
            description: product.description,
            thumbnail: product.thumbnail
        }))
    });
    res.json(resData);
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});