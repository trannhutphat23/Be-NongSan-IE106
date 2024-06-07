const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VouchersSchema = new Schema(
    {
        name: String,
        conditionText: String,
        conditionValue: Number,
        percent: Number,
        quantity: Number,
        date: Date,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Vouchers', VouchersSchema);