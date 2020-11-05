import styled from 'styled-components'

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img
        src={picture.url}
        className="w-16 h-16 rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
