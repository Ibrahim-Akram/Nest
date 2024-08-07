import { GetServerSideProps } from 'next';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Props {
  posts: Post[];
  comments: Comment[];
}

const PostsCommentsPage = ({ posts, comments }: Props) => {
  return (
    <div>
      <h1>Posts and Comments</h1>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const [postsResponse, commentsResponse] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/comments'),
  ]);

  if (!postsResponse.ok || !commentsResponse.ok) {
    return {
      props: {
        posts: [],
        comments: [],
      },
    };
  }

  const posts: Post[] = await postsResponse.json();
  const comments: Comment[] = await commentsResponse.json();

  return {
    props: {
      posts,
      comments,
    },
  };
};

export default PostsCommentsPage;
