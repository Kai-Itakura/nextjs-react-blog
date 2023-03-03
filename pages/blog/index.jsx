import Container from "@/components/container";
import Meta from "@/components/meta";
import Posts from "@/components/posts";
import { getAllPosts } from "@/lib/api";
import { eyecatchLocal } from "@/lib/constants";
import Hero from "components/hero";
import { getPlaiceholder } from "plaiceholder";

const Blog = ({ posts }) => {
    return (
        <Container>
            <Meta pageTitle='ブログ' pageDesc='ブログ記事の一覧' />
            <Hero
                title='Blog'
                subtitle='Recent posts'
            />
            <Posts posts={posts} />
        </Container>
    )
}

export const getStaticProps = async () => {
    const posts = await getAllPosts();

    for (const post of posts) {
        if (!post.hasOwnProperty('eyecatch')) {
            post.eyecatch = eyecatchLocal;
        }
        const { base64 } = await getPlaiceholder(post.eyecatch.url);
        post.eyecatch.blurDataURL = base64;
    }

    return {
        props: {
            posts: posts,
        },
    }
}

export default Blog;