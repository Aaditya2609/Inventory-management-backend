import Sale from "../models/sale.model"

const addSale= async (req, res) => {
    try {
      const { description,amount } = req.body;
      const newSale = new Sale({ description, amount });
      await newSale.save();

      res.status(201).json({newSale});
    } catch (error) {
      res.status(500).json({ error: 'Could not add the sale.' });
    }
  }

 const getAllSales= async (req, res) => {
  try {
    const sales = await Sale.find().populate({
      path: 'description.item',
      model: 'Item',
      select: 'name price', // Specify the fields you want to populate
    });

    res.json({sales});
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch sales.' });
  }
}

 

  export {addSale,getAllSales}