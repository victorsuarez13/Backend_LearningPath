const express = require('express')
const router = express.Router();
const schema = require('../controller/driver')

// show data
router.get('/', async (req, res) => {
    const schemas = await schema.find();
    res.json(schemas);
});

router.post('/', async (req, res) => {
    let date = new Date();
    const state = 1;
    const { topic, title, description } = req.body;
    const view = new schema({ topic, title, description, date, state });
    await view.save();
    res.json('saved');
});

// update specific data by id
router.put('/:id', async (req, res) => {
    const { topic, title, description } = req.body;
    const view = { topic, title, description, date };
    await schema.findByIdAndUpdate(req.params.id, view);
    res.json('updated');
});

// delete specific data by id, logical delete
router.delete('/:id', async (req, res) => {
    await schema.findByIdAndUpdate(req.params.id, { $set: { 'state': '2' } })
    res.json('deleted');
});

router.get('/values/:id', async (req, res) => {
    values = await schema.findById(req.params.id);
    res.json(values);

});//generate number page
router.get('/param/:page', (req, res) => {
    var size = [];
    var data_params = [];
    let size_items;
    const perPage = 5;
    let page = req.params.page || 1;
    schema.find({
    }).skip((perPage * page) - perPage)
        .limit(perPage)
        .exec((err, topics) =>
            schema.count((err, count) => {
                if (err) return next(err);
                for (let i = 0; i < count; i++) {
                    if (topics[i].state != 2) {
                        data_params.push(topics[i])
                    }
                }
                len = Math.ceil(data_params.length / perPage)
                for (let i = 1; i <= len; i++) {
                    size.push(i);
                }
                res.json({ data_params, size });
            })
        )
})
module.exports = router;