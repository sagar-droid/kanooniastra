"use server";
import { revalidatePath } from "next/cache";
import { connectToDb } from "../../utils/connectToDb";
import { Post, User } from "../../utils/models";
import { signIn, signOut } from "../../utils/auth";
import bcrypt from "bcryptjs";
export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = await Post({
      title,
      desc,
      slug,
      userId,
      createdAt: Date.now(),
    });
    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
  }

  console.log("Adding post", {
    title,
    desc,
    slug,
    userId,
    createdAt: Date.now(),
  });
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("saved to db");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
  }
};

export const handleGithubLogin = async () => {
  "use server";

  await signIn("github");
};

export const handleGithubLogout = async () => {
  try {
    await signOut({
      redirect: false,
      callbackUrl: "http://localhost:3000",
    });
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
