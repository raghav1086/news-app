import React from 'react'
import styled from 'styled-components'
import Image from '../image/Image'
import Time from '../time/Time'

const Board = styled.div`
  border: 1px solid #dadce0;
  border-radius: 8px;
  margin: 0.5em 0;
  padding: 20px;
  text-align: left;
`
const NewsWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  padding-right: 200px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0;
  }
`
const NewsTitle = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin: 15px 0 5px 0;

  & > a {
    color: #000;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
const SubNewsTitle = styled.article`
  padding-left: 25px;
  margin-top: 5px;

  & > a {
    color: #000;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  & + div {
    margin-left: 25px;
  }

  ::before {
    background: #333;
    border-radius: 2px;
    position: absolute;
    top: 8px;
    left: 10px;
    content: '';
    width: 4px;
    height: 4px;
  }
`
const NewsInfo = styled.div`
  font-size: 12px;
  margin-bottom: 10px;

  & > a {
    color: #666;
    text-decoration: none;
  }
`
const renderNewsItems = (news) => {
  return news.map((news, index) => {
    return (
      <NewsWrapper key={index}>
        { index === 0 ? <div>
          <Image src={news.urlToImage} />
          <NewsTitle><a href={news.url}>{ news.title }</a></NewsTitle>
        </div> : <SubNewsTitle><a href={news.url}>{ news.title }</a></SubNewsTitle>
        }
        <NewsInfo><a href={news.url}>{ news.source.name }</a> <Time time={news.publishedAt} /></NewsInfo>
      </NewsWrapper>
    )
  })
}

export default ({ news }) => {
  return <Board> { renderNewsItems(news) } </Board>
}
