const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const db = mongoose.connection.db;
    // Find and show the product first
    const products = await db.collection('products').find({ name: /345gn/i }).toArray();
    console.log('Found products:', JSON.stringify(products.map(p => ({ id: p._id, name: p.name })), null, 2));
    
    if (products.length > 0) {
      const result = await db.collection('products').deleteOne({ name: /345gn/i });
      console.log('Deleted:', result.deletedCount, 'product(s)');
    } else {
      // Try to delete any test/demo products
      const all = await db.collection('products').find({}).toArray();
      console.log('All products in DB:', JSON.stringify(all.map(p => ({ id: p._id, name: p.name })), null, 2));
    }
    mongoose.disconnect();
  })
  .catch(e => console.error(e));
