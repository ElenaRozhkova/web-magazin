
'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://headless-wordpress-roschkowa.atwebpages.com/wp-json/wp/v2/posts?_embed');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="post-list">
            {posts.map(post => (
                <div key={post.id} className="post">
                    <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    {post._embedded && post._embedded['wp:featuredmedia'] && (
                        <img
                            src={post._embedded['wp:featuredmedia'][0].source_url}
                            alt={post.title.rendered}
                        />
                    )}
                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                </div>
            ))}
        </div>
    );
};

export default PostList;
