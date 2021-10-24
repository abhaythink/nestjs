import { Test, TestingModule } from '@nestjs/testing';
import { PostInterface } from './interfaces/posts-interface';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

describe('PostsController', () => {
  let controller: PostsController;

  /**
   * For Unit Testing, Mocking Providers to test functionality indepndently
   */
  const postsServiceMock = {
    create: jest.fn().mockImplementation((dto) => dto),
    update: jest.fn().mockImplementation((id, dto) => {
      return { id, ...dto };
    })
  };

  /**
   * Instatiating controllers, providers before testing
   */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostsService],
    })
      .overrideProvider(PostsService)
      .useValue(postsServiceMock)
      .compile();

    controller = module.get<PostsController>(PostsController);
  });

  /**
   * Verifying controller instantiation
   */
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  /**
   * Create post isolated test
   */
  it('should create a post with given data and return post', () => {
    const postDto: PostInterface = {
      name: 'first post',
      description: 'Added first post',
    };
    // will call overridden create method
    expect(controller.create(postDto)).toEqual(postDto);
  });

  /**
   * Update post isolated test
   */
  it('should update a post with given data for provided id and return post', () => {
    const postDto: PostInterface = {
      id: '123456',
      name: 'second post',
      description: 'Added first post',
    };
    // will call overridden update method
    expect(controller.update(postDto, postDto.id)).toEqual(postDto);
  });
});
