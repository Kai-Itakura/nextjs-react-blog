import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
});

export const getPostBySlug = async (slug) => {
    try {
        const post = await client.get({
            endpoint: 'blogs',
            queries: { filters: `slug[equals]${slug}` },
        });
        return post.contents[0];
    } catch (err) {
        console.log('~~ getPostBySlug ~~');
        console.log(err)
    }
}

export const getAllSlugs = async (limit = 100) => {
    try {
        const slug = await client.get({
            endpoint: 'blogs',
            queries: { fields: 'title,slug', orders: '-publishDate', limit: limit },
        })
        return slug.contents;
    } catch (err) {
        console.log('~~ getAllSlugs ~~');
        console.log(err);
    }
}

export const getAllPosts = async (limit = 100) => {
    try {
        const posts = await client.get({
            endpoint: 'blogs',
            queries: {
                fields: 'title,slug,eyecatch',
                orders: '-publishDate',
                limit: limit,
            },
        })
        return posts.contents;
    } catch (err) {
        console.log('~~ getAllPosts ~~');
        console.log(err);
    }
}