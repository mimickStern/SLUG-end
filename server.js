import  express  from "express";
import data from './data.js';

const app = express();

//get all products
app.get('/api/products', (req,res) => {
    res.send(data.products);
})

// get a single product
app.get('/api/products/:slug', (req, res) => {
    const product = data.products.find((x) => x.slug === req.params.slug);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
});

app.get('/api/product/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
} );



//listening on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server runnig on http://localhost:${port}`);
  })
