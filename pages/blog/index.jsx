import Container from "@/components/container";
import Meta from "@/components/meta";
import Hero from "components/hero";

const Blog = () => {
    return (
        <Container>
            <Meta pageTitle='ブログ' pageDesc='ブログ記事の一覧' />
            <Hero
                title='Blog'
                subtitle='Recent posts'
            />
        </Container>
    )
}

export default Blog;