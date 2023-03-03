import Container from '@/components/container';
import { getAllSlugs, getPostBySlug } from 'lib/api';
import PostHeader from 'components/post-header';
import Image from 'next/legacy/image';
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from '@/components/two-column';
import PostBody from '@/components/post-body';
import ConvertBody from '@/components/convert-body';
import PostCategories from '@/components/post-categories';
import { ExtractText } from '@/lib/extract-text';
import Meta from '@/components/meta';
import { eyecatchLocal } from '@/lib/constants';
import { getPlaiceholder } from 'plaiceholder';

const Post = ({
    title,
    publish,
    content,
    eyecatch,
    categories,
    description,
}) => {
    return (
        <Container>
            <Meta
                pageTitle={title}
                pageDesc={description}
                pageImg={eyecatch.src}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}
            />
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
                        placeholder='blur'
                        blurDataURL={eyecatch.blurDataUrl}
                    />
                </figure>
                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>
                            <ConvertBody contentHTML={content} />
                        </PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar>
                        <PostCategories categories={categories} />
                    </TwoColumnSidebar>
                </TwoColumn>
            </article>
        </Container>
    );
}

export const getStaticPaths = async () => {
    const allSlugs = await getAllSlugs();

    return {
        paths: allSlugs.map(({slug}) => `/blog/${slug}`),
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const slug = context.params.slug;

    const post = await getPostBySlug(slug);

    const description = ExtractText(post.content);

    const eyecatch = post.eyecatch ?? eyecatchLocal;

    const { base64 } = await getPlaiceholder(eyecatch.url);
    eyecatch.blurDataUrl = base64;

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: eyecatch,
            categories: post.categories,
            description: description,
        },
    }
}

export default Post;