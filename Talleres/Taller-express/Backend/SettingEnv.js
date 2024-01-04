import dotenv from 'dotenv'
dotenv.config();

export const port = process.env.PORT;
export const MongodbUriCLoud = process.env.MONGODB_URI_CLOUD;