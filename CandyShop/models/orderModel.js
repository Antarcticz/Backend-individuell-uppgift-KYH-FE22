const Order = require('../schemas/orderSchema');

exports.postOrder = async (req, res) => {
    
        const { userId, orderRows } = req.body;

        
        if(!userId || !orderRows ) {
            return res.status(400).json({ message: 'You need to enter all fields' })
        }
    
        const order = await Order.create({ userId, orderRows })
        
        if(!order) {
            return res.status(500).json({ message: 'Something went wrong when posting the candy' })
        }
        res.status(201).json(order)
    
    }

    exports.getOrders = async (req, res) => {
        
        const orders = await Order.find({ userId: req.userId })

        res.status(200).json(orders)
}