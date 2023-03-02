import Container from '@/components/container';
import { getPostBySlug } from 'lib/api';
import PostHeader from 'components/post-header';

const Schedule = ({
    title,
    publish,
    content,
    eyecatch,
    categories,
}) => {
    return (
        <Container>
            <article>
                <PostHeader title={title} subtitle='Blog Article' publish={publish} />
            </article>
        </Container>
    );
}

export const getStaticProps = async () => {
    const slug = 'schedule';

    const post = await getPostBySlug(slug);

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,
        },
    }
}

export default Schedule;