import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  noStore();
  try {
    connectToDb();
    const posts = await Post.find();
    console.log(posts);
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  noStore();
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    console.log(post);
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  noStore();
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};