 
const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- Logged in user details ---', req.user);
    res.status(200).json([
        { 
            image: 'https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png',
            name: 'mobile', 
            price: 10000 
        },
        { 
            image: 'https://cdn.pixabay.com/photo/2024/01/21/20/09/ai-generated-8523907_640.png',
            name: 'tv', 
            price: 20000 
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45Sce8fEKukPRwyWHxnVAQ9XndzuGBz6-1Q&s',
            name: 'Car', 
            price: '2,00,00,000'
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUXDjGy8ctcMaPXMsED_E3O74OdhBvb6GfQ&s',
            name: 'Bike', 
            price: 400000 
        },
        {
            image:'https://www.jiomart.com/images/product/original/490005534/fortune-refined-soyabean-oil-1-l-product-images-o490005534-p490005534-0-202203151702.jpg?im=Resize=(360,360)',
            name:'Fortune Refined Soyabean Oil',
            proice:56
        },
        {
            image:'https://www.jiomart.com/images/product/original/492367966/surf-excel-easy-wash-detergent-powder-5-kg-product-images-o492367966-p590837659-0-202208111657.jpg?im=Resize=(360,360)',
            name:'Surf Excel Easy Wash Detergent Powder',
            proice:345
        },
        {
            image:'https://www.jiomart.com/images/product/original/490005200/7up-2-25-l-product-images-o490005200-p490005200-0-202210201751.jpg?im=Resize=(360,360)',
            name:'7Up',
            proice:100
        },
        {
            image:'https://www.jiomart.com/images/product/original/491349660/chakki-atta-10-kg-product-images-o491349660-p491349660-0-202206231932.jpg?im=Resize=(360,360)',
            name:'Chakki Atta',
            proice:346
        }
    ]);
});

module.exports = router;
