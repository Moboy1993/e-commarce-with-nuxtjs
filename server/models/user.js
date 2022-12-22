const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: Number,
    address: String
});

UserSchema.pre('save', function (next) {
    let user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        })
    } else {
        return next();
    }
})
UserSchema.methods.comparePasswprd = function(password,next){
    let user = this;
    return bcrypt.compareSync(password,user.password)
}
module.exports = mongoose.model("User", UserSchema);