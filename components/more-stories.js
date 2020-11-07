import PostPreview from './post-preview'
import styled from 'styled-components'

const MorePostsStyles = styled.section`
  h2 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 2rem;
    letter-spacing: -.04em;
    line-height: 1.2;
    @media only screen and (max-width: 768px) {
      font-size: 4.5rem;
    }
  }
  > div {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 5rem;
    margin-bottom: 8rem;
    @media only screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 4rem;
      row-gap: 8rem;
    } 
    @media only screen and (min-width: 1440px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 8rem;
    } 
  }
`
export default function MoreStories({ posts }) {
  return (
    <MorePostsStyles>
      <h2>
        More Stories
      </h2>
      <div>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </MorePostsStyles>
  )
}
