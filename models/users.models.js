const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    LastName: {
        type: String
    },
    FristName: {
        type: String
    },
    EmailAddress: {
        type: String
    },
    EmailNews: {
        type: Boolean
    },
    PhoneNumber: {
        type: String
    },
    EduInfo: {
        type: String
    },
    FullAdress: {
        type: String
    },
    AdressCity: {
        type: String
    },
    AdressState: {
        type: String
    },
    AdressZip: {
        type: String
    },
    ScienseCheck: {
        type: String
    },
    ScienseYear: {
        type: String
    },
    Academic: {
        type: Boolean
    },
    AcademicInfo: {
        type: String
    },
    UserData: {
        type: String
    },
    password: {
        type: String,
        require: true
    },
    UserBalance: {
        type: Number,
        default: 0
    },
    UserStatus: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('User', userSchema)