import Container from '@/components/container';
import { getPostBySlug } from 'lib/api'

const Schedule = ({
    title,
    publish,
    content,
    eyecatch,
    categories,
}) => {
    return (
        <Container>
            <h1>{title}</h1>
        </Container>
    );
}

export const getStaticProps = async () => {
    const slug = 'schedule';

    const post = await getPostBySlug(slug);

    return {
        props:{
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,
        },
    }
}

export default Schedule;