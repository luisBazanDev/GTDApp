const ItemsRouter = require('express').Router();
const itemDB = require('../models/item');

ItemsRouter.post('/create', (req, res) => {
   let item = new itemDB()
   item.content = req.body.content;
   item.tags = req.body.tags;
   item.save((err, item) => {
      if (err) {
         res.send(err);
      }
      res.json(item);
   });
})

ItemsRouter.get('/', async(req, res) => {
   let items = await itemDB.find({});
   let itemList = []
   items.map(item => {
      itemList.push({
         id: item._id,
         content: item.content,
         tags: item.tags,
      })
   })
   res.json(itemList)
})

module.exports = ItemsRouter;