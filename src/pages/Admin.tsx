import React from 'react';
import BlogManager from '@/components/BlogManager';
import { BlogPost } from '@/types/blog';

const Admin = () => {
  const handlePostCreated = (post: BlogPost) => {
    console.log('Post created:', post);
    // You can add toast notifications here
  };

  const handlePostUpdated = (post: BlogPost) => {
    console.log('Post updated:', post);
    // You can add toast notifications here
  };

  const handlePostDeleted = (id: string) => {
    console.log('Post deleted:', id);
    // You can add toast notifications here
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your blog posts and content
          </p>
        </div>
        
        <BlogManager
          onPostCreated={handlePostCreated}
          onPostUpdated={handlePostUpdated}
          onPostDeleted={handlePostDeleted}
        />
      </div>
    </div>
  );
};

export default Admin;
