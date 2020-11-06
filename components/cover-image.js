import { Image } from 'react-datocms'
import Link from 'next/link'
import styled from 'styled-components'

const ImageStyles = styled(Image)`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  transition: all .2s ease-in-out;
  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`

const ImageWrapperStyles = styled.div`
  margin: 0;
`

export default function CoverImage({ title, responsiveImage, slug }) {
  const image = (
    <ImageStyles
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
    />
  )
  return (
    <ImageWrapperStyles>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </ImageWrapperStyles>
  )
}
