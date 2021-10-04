import db from "../db/connection.js";
import Post from "../models/post.js";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  // posts data that we want inserted into database
  const posts = [
    {
      name: "mike",
      status: "i'm driving",
      imgURL: "https://picsum.photos/200/300",
    },

    {
      name: "Matt",
      status: "i'm driving next",
      imgURL: "https://picsum.photos/200/300",
    },
    {
      name: "Mirian",
      status: "i'm driving third",
      imgURL: "https://picsum.photos/200/300",
    },
    {
      name: "Dylan",
      status: "i'm driving last",
      imgURL: "https://picsum.photos/200/300",
    },
  ];

  // insert posts into database
  await Post.insertMany(posts);
  console.log("Created posts!");

  // close database connection. done.
  db.close();
};

insertData();
