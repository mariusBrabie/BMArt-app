import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import { generateToken } from '../utils/generateToken.js'

// auth user & get token
// POST /api/users/login
// public route
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    throw new Error('Adresa de email sau parola incorecta!')
  }
})

// register new user
// POST /api/users
// public route
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Toate campurile sunt obligatorii!')
  }

  const user = await User.findOne({ email })
  if (user) {
    res.status(400)
    throw new Error(
      'Aceasta adresa de email exista deja. Incearca sa te conectezi sau inregistreaza-te cu o adresa noua de email!'
    )
  }

  const newUser = await User.create({
    name,
    email,
    password
  })

  if (newUser) {
    res.status(201)
    res.json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      token: generateToken(newUser._id)
    })
  } else {
    res.status(400)
    throw new Error('Datele introduse sunt invalide!')
  }
})

// get user porfile
// GET /api/users/profile
// private route
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(404)
    throw new Error('Datele utilizatorului nu pot fi afisate!')
  }
})

// update user porfile
// PUT /api/users/profile
// private route
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) user.password = req.body.password

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      token: generateToken(updatedUser._id)
    })
  } else {
    res.status(404)
    throw new Error('Profilul nu poate fi modificat!')
  }
})
