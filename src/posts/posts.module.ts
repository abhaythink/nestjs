import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostSchema } from './schemas/post.schema';

@Module({
  /*
  * Injecting Post Schema at module level as required within UserModule
  */
  imports: [MongooseModule.forFeature([{name : 'Post', schema : PostSchema}])],
  controllers: [PostsController],
  providers: [PostsService], // Providers refers to services, repositories
})

export class PostsModule {}
