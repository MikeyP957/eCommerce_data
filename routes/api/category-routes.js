const router = require('');
const { Catgory, Product} = require('');

// The `/api/cateogroies` endpoint

router.get('/', (req, res) => {
    // find all categories 
    //include its associated products
});
router.get('/:id', (req, res) => {
    // find one category by id
    // ^^ ``
});
router.post('/', (req, res) => {
    // create new category
});
router.put('/:id', (req, res) => {
    //  update a category by id
});
router.delete('/:id', (req, res) => {
    //delete a category by id
});
