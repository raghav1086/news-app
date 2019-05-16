import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 180px;
  float: right;
  border-radius: 10px;
  margin-right: -200px;

  @media (max-width: 768px) {
    float: none;
    display: block;
    width: 100%;
  }
`

export default ({ src }) => <Image src={src} />

