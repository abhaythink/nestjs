import * as mongoose from 'mongoose';

/*
* Defining schema to map to Db
*/
export const PostSchema = new mongoose.Schema({
    name: String,
    description: String
});