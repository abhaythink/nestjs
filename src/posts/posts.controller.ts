import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostInterface } from './interfaces/posts-interface';
import { PostsService } from './posts.service';
@Controller('posts')
export class PostsController {

    constructor(private postsService : PostsService) {}

    /*
    * Get All Posts end point, returns empty array for no records
    */
    @Get()
    findAll():Promise<PostInterface[]>{
        return this.postsService.findAll();
    }

    /*
    * Get Single Post end point, returns empty response for no record found
    */
    @Get(':id')
    findOne(@Param('id') id) : Promise<PostInterface>{
        return this.postsService.findOne(id);
    }

    /*
    * Create Post end point, returns created post as response 
    */
    @Post()
    create(@Body() createPostDto : CreatePostDto) : Promise<PostInterface> {
        return this.postsService.create(createPostDto);
    }

    /*
    * Updated Post end point, returns updated post as response 
    */
    @Put(':id')
    update(@Body() updatePostDto : CreatePostDto, @Param('id') id) : Promise<PostInterface> {
        return this.postsService.update(id, updatePostDto);
    }

    /*
    * Deleted Post end point, returns deleted post as response 
    */
    @Delete(':id')
    delete(@Param('id') id) : Promise<PostInterface> {
        return this.postsService.delete(id);
    }

}
