const OrderModel = require('../models/order');
const OrderDetailModel = require('../models/order-detail');
const ProductModel = require('../models/product');
const CategoryModel = require('../models/category');

function getOrderDetailsByOrderId(req, res) {
    const { orderId } = req.params;

    OrderModel.find({ OrderID: orderId }).then((order) => {
        // simple way to mutate data (no longer a mongoose model)
        const data = JSON.parse(JSON.stringify(order));

        OrderDetailModel.find({ OrderID: orderId }).then((details) => {
            data[0].OrderDetails = [];
            details.forEach(detail => data[0].OrderDetails.push(detail));
            res.json(data);
        }).catch(err => res.json(`Err: ${err}`));
    }).catch(err => res.json(`Err: ${err}`));
}

module.exports = {
    getOrderDetailsByOrderId
};
