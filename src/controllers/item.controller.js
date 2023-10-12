import Item from "../models/item.model"
const addItem=async (req, res) => {
    try {
      const { name, quantity, price, category } = req.body;
      const newItem = new Item({ name, quantity, price, category });
      await newItem.save();
      res.status(201).json({newItem});
    } catch (error) {
      res.status(500).json({ error: 'Could not add the item.' });
    }
  }

  const editItem=async (req, res) => {
    try {
      const itemId = req.params.id;
      const { name, quantity, price, category } = req.body;
      const updatedItem = await Item.findByIdAndUpdate(itemId, {
        name,
        quantity,
        price,
        category,
      });
      res.json({updatedItem});
    } catch (error) {
      res.status(500).json({ error: 'Could not edit the item.' });
    }
  }

  const deleteItem=async (req, res) => {
    try {
      const itemId = req.params.id;
      await Item.findByIdAndDelete(itemId);
      res.json({ message: 'Item deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Could not delete the item.' });
    }
  }

  const getAllItems=async (req, res) => {
    try {
      const items = await Item.find();
      res.json({items});
    } catch (error) {
      res.status(500).json({ error: 'Could not fetch items.' });
    }
  }
  export  {addItem,editItem,deleteItem,getAllItems};