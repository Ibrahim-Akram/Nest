import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

async function getPost(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    console.error('Failed to fetch post:', response.statusText);
    return null;
  }
  return response.json();
}

async function getComments(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  if (!response.ok) {
    console.error('Failed to fetch comments:', response.statusText);
    return [];
  }
  return response.json();
}

export default async function PostDetailPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  const comments = await getComments(params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {post.body}
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Comments
      </Typography>
      <Grid container spacing={4}>
        {comments.length === 0 ? (
          <Typography variant="h6">No comments available</Typography>
        ) : (
          comments.map((comment: any) => (
            <Grid item key={comment.id} xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {comment.name} ({comment.email})
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {comment.body}
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
