import { connectToDatabase } from "../../../util/mongodb";
const {ObjectId} = require('mongodb');

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const { id } = req.query;

  const movie = await db
    .collection("movies")
    .findOne({_id:ObjectId(`${id}`)});

  res.json(movie);
};
