const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema(
    {
        course_code: { type: String, required: true },
        course_name: { type: String, required: true },
        section: { type: String, required: true },
        semester: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('student', Course)