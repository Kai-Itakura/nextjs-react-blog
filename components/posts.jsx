import Image from 'next/legacy/image';
import Link from 'next/link';
import classes from 'styles/posts.module.scss';

const Posts = ({ posts }) => {
    return (
        <div className={classes.gridContainer}>
            {posts.map(({ title, slug, eyecatch }) => (
                <article className={classes.post} key={slug}>
                    <Link href={`/blog/${slug}`}>
                        <figure>
                            <Image
                                src={eyecatch.url}
                                alt=''
                                layout='fill'
                                objectFit='cover'
                                width={eyecatch.width}
                                height={eyecatch.height}
                                sizes='(min-width: 1152px) 576px, 50vw'
                                placeholder='blur'
                                blurDataURL={eyecatch.blurDataURL}
                            />
                        </figure>
                        <h2>{title}</h2>
                    </Link>
                </article>
            ))}
        </div>
    );
}

export default Posts;