import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { fetchNews } from '../../actions/actionCreator'
import Service from '../../service/Service'
import dataOps from '../../filter/dataOps'
import Title from '../title/Title'
import Board from '../board/Board'

const Section = styled.section`
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  width: 60%;

  @media (max-width: 768px) {
    width: 98%;
  }
`

class NewsSection extends Component {
  async componentDidMount() {
    try {
      await Service.fetchNewsData().then(data => {
        this.props.fetchNews(dataOps.getSortedData(data))
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <Section>
        <Title />
        <Board news={this.props.news} />
      </Section>
    )
  }
}

const mapStateToProps = state => {
  return {
    news: state.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchNews
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsSection)
