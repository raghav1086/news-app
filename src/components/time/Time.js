import React from 'react'
import styled from 'styled-components'

const TimeTag = styled.time`
  color: #666;
  font-size: 12px;
  margin-left: 10px;

  ::before {
    content: '\0000a0\\002022\0000a0';
    margin-right: .1rem;
    font-size: 9px;
  }
`

const getTime = (time) => {
  return new Date(time).getHours() + ' hours ago.'
}

export default ({ time }) => {
  return <TimeTag> { getTime(time) } </TimeTag>
}
