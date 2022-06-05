import dotenv from "dotenv";

dotenv.config({ path: "./backend/.env" });

export const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // Options for cookies
  const options = {
    expiresIn: new Date(
      Date.now() + process.env.JWT_EXPIRE + 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
    options,
  });
};
