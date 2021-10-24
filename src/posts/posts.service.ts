import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostInterface } from './interfaces/posts-interface';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel('Post') private readonly postModel: Model<PostInterface>,
  ) {}

  // Retrive all posts
  async findAll(): Promise<PostInterface[]> {
    return await this.postModel.find();
  }

  // Retrive post by id
  async findOne(id): Promise<PostInterface> {
    return await this.postModel.findById({ _id: id });
  }

  // Create new post
  async create(post): Promise<PostInterface> {
    return await this.postModel.create(post);
  }

  // Update existing post or create new one if not found
  async update(id, post): Promise<PostInterface> {
    return await this.postModel.findByIdAndUpdate(id, post, { new: true });
  }

  // Delete post by id
  async delete(id): Promise<PostInterface> {
    return await this.postModel.findByIdAndRemove({ _id: id });
  }
  
}
