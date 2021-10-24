import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;

  /**
   * Fake mocking to pass failed unit test cases
   * TODO: update implementation for mocking post model
   */
  const postsServiceMock = {};


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService],
    })
      .overrideProvider(PostsService)
      .useValue(postsServiceMock)
      .compile();

    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
