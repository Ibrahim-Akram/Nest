import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    console.error('Failed to fetch posts:', response.statusText);
    return [];
  }
  return response.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom>
        Posts
      </Typography>
      <Grid container spacing={4}>
        {posts.length === 0 ? (
          <Typography variant="h6">No posts available</Typography>
        ) : (
          posts.map((post: any) => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
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
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}
