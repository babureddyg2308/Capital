 

// const ensureAuthenticated = require('../Middlewares/Auth');

// const router = require('express').Router();

// router.get('/', ensureAuthenticated, (req, res) => {
//     console.log('---- Logged in user details ---', req.user);
//     res.status(200).json([
//         { name: 'mobile', price: 10000 },
//         { name: 'tv', price: 20000 }
//     ]);
// });

// module.exports = router;


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
            name: 'tv', 
            price: 20000 
        },
        {
            name: 'tv', 
            price: 20000 
        }
    ]);
});

module.exports = router;
