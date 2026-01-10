import HomeSectionLayout from '../layout/HomeSectionLayout';
import BlogPostCard from './BlogPostCard';
import BlogHero from './BlogHero';

interface BlogPost {
  title: string;
  description: string;
  author: string;
  date: string;
  readMoreLink: string;
  imageUrl: string;
}

interface FeaturedBlogPost {
  title: string;
  description: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  imageUrl: string;
  readMoreLink: string;
}

interface BlogPostsProps {
  featuredPost?: FeaturedBlogPost;
  posts: BlogPost[];
}

const BlogPosts = ({ featuredPost, posts }: BlogPostsProps) => {
  return (
    <HomeSectionLayout title="Blog posts">
      {/* Featured Blog Hero */}
      {featuredPost && <BlogHero {...featuredPost} />}

      {/* Blog Grid */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full lg:h-[600px] group/list">
        {posts.map((post, index) => (
          <div
            key={`${post.title}-${index}`}
            className={`
              transition-all duration-700 ease
              w-full h-[250px] lg:h-auto lg:w-auto
              flex-none lg:flex-1
              lg:hover:flex-[3]
              group/item
              min-w-0
            `}
          >
            <BlogPostCard
              title={post.title}
              description={post.description}
              author={post.author}
              date={post.date}
              readMoreLink={post.readMoreLink}
              imageUrl={post.imageUrl}
            />
          </div>
        ))}
      </div>
    </HomeSectionLayout>
  );
};

export default BlogPosts;
