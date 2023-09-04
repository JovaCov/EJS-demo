const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'must provid name'],
        trim: true,
        maxlength: [20, 'name can not be more then 20 character'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task', taskSchema)
