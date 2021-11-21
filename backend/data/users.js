import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jacko Yau',
        email: 'jacko@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'customer',
        email: 'customer@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users