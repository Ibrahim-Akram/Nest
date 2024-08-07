import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  posts: Post[];
}

const HomePage = ({ posts }: Props) => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom>
        Posts
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Link href={`/posts/${post.id}`} passHref>
              <Card sx={{ cursor: 'pointer', height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {post.body}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!response.ok) {
    return {
      props: {
        posts: [],
      },
    };
  }

  const posts: Post[] = await response.json();

  return {
    props: {
      posts,
    },
  };
};

export default HomePage;
