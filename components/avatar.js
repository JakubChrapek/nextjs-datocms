import styled from 'styled-components'

const AvatarStyles = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
    margin-right: 1rem;
  }
  span {
    font-size: 1.25rem;
    font-weight: 600;
  }
`

export default function Avatar({ name, picture }) {
  return (
    <AvatarStyles>
      <img
        src={picture.url}
        alt={name}
      />
      <span>{name}</span>
    </AvatarStyles>
  )
}
