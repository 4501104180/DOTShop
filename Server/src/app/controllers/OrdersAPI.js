
// models
const Order = require('../models/Order');

class OrdersAPI {
    // [POST] /orders
    async insertOrder(req, res) {
        try {
            const order = new Order({
                customerId: req.user._id,
                ...req.body
            });
            await order.save();
            res.json({
                statusText: 'success',
                message: 'Order successfully!'
            })
        } catch (error) {
            console.log(error);
        }
    };
};

module.exports = new OrdersAPI;