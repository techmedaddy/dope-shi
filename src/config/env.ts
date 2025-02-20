import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT || 37849,
  NODE_ENV: process.env.NODE_ENV || "development",
};
