import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'bma',
    email: 'bma@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'dutsi',
    email: 'dutsin@example.com',
    password: bcrypt.hashSync('123456', 10)
  }
]

export default users
