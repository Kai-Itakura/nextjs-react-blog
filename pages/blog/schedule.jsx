import Container from '@/components/container';
import { getPostBySlug } from 'lib/api';
import PostHeader from 'components/post-header';
import Image from 'next/legacy/image';

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
                <figure>
                    <Image
                        src={eyecatch.url}
                        alt=''
                        layout='responsive'
                        width={eyecatch.width}
                        height={eyecatch.height}
                        sizes='(min-width: 1152px) 1152px, 100vw'
                        property
                    />
                </figure>
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