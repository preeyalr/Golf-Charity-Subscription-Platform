import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
    role: role || "user",
  });

  const token = generateToken(user);

  // 🍪 set cookie after register too
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  res.status(201).json({
    _id: user._id,
    role: user.role,
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = generateToken(user);

    // 🍪 SET COOKIE HERE
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // ⚠️ true in production
      sameSite: "lax",
    });

    res.status(200).json({
      _id: user._id,
      role: user.role,
    });

  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
export const logout = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0), // expire immediately
  });

  res.status(200).json({ message: "Logged out successfully" });
};