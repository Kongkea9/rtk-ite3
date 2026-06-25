import { useGetPostsQuery } from '@/app/services/api';
import React from 'react';


const Posts: React.FC = () => {
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Posts;