import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface PostCardProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {body}
      </Typography>
    </CardContent>
  </Card>
);

export default PostCard;
