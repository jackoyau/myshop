import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc   Auth user & get token
// @route  POST /api/users/login
// @access Public
const authUser = asyncHandler(async(req,res) => {
    const { email, password } = req.body

    // const user = await User.findOne({ email: email})
    const user = await User.findOne({ email }) //simplify expression

    //matchPassWord is the method from userModel.js for bcrypt, 
    //which is async, so we need await here
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401) // 401 = unauthorized
        throw new Error('Invalid email or password')
    }

})

export { authUser }