import Charity from "../models/Charity.js";

export const getCharities = async (req, res) => {
  const { search } = req.query;

  let query = {};

  if (search) {
    query.name = { $regex: search, $options: "i" };
  }

  const charities = await Charity.find(query);
  res.json(charities);
};

export const getFeatured = async (req, res) => {
  const charities = await Charity.find({ isFeatured: true });
  res.json(charities);
};