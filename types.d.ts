interface Post {
    title: string;
    date: string;
    content: string;
    featuredImage: {
        node: {
            mediaItemUrl: string;
        };
    };
    excerpt: string;
    slug: string;
}
