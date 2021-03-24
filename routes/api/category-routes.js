const router = require('express').Router();
const { Category, Product} = require('../../models');

// The `/api/cateogroies` endpoint

router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll({
            include: [{ model: Product}]
        });

        res.status(200).json(categoryData)
    } catch (err) {
        res.status(500).json(err);
    }
     
    //include its associated products
});
router.get('/:id', async (req, res) => {

    try{
        const categoryData = await Category.findByPk(req.params.id, {
            include: [{ model: Product }]
        })
        if(!categoryData) {
            res.status(404).json({ message: 'No location found with this id. '});
            return;
        }

        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
    
});
router.post('/', async (req, res) => {
    // create new category
    try{
        const categoryData = await Category.create(req.body);
        res.status(200).json(categoryData);
    } catch(err) {
        res.status(400).json(err);
    }
});
router.put('/:id', async (req, res) => {
    //  update a category by id
    try{
        const categoryData = await Category.update(
            {
                category_name: req.body.category_name,
            },
            {
                where: {
                    id: req.params.id,
                },
            },
        );

        if(!categoryData) {
            res.status(404).json({message: 'There is no category with this id.'})
        }

        res.status(200).json(res)
    } catch (err) {
        res.status(500).json(err);
    }

});
router.delete('/:id', async (req, res) => {
    try{
        const categoryData = await Category.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!categoryData){
            res.status(404).json({message: 'No category found with that id.'})
        }
        res.status(200).json(categoryData);

    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
