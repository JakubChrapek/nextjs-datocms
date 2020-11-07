import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import styled from 'styled-components'

const ImageStyles = styled.div`
  margin-bottom: 2rem;
  @media only screen and (min-width: 768px) {
    margin-bottom: 4rem
  }
`

const PostDetailsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  margin-bottom: 5rem;
  @media only screen and (min-width: 768px) {
    margin-bottom: 7rem;
    gap: 2rem;
  }
  h3 {
    font-size: 2.25rem;
    margin-bottom: 1rem;
    line-height: 1.2;
    padding-right: 1rem;
    font-weight: bold;
    @media only screen and (min-width: 768px) {
      font-size: 2.75rem;
    }
  }
`
const DataStyles = styled.div`
  margin-bottom: 1rem;
  font-size: 1.125rem;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`

const ExcerptStyles = styled.div`
  p {
    font-size: 1.125rem;
    line-height: 1.625;
    margin-bottom: 1rem;
  }
`

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <ImageStyles>
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
          slug={slug}
        />
      </ImageStyles>
      <PostDetailsStyles>
        <div>
          <h3>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <DataStyles>
            <Date dateString={date} />
          </DataStyles>
        </div>
        <ExcerptStyles>
          <p>{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </ExcerptStyles>
      </PostDetailsStyles>
    </section>
  )
}
