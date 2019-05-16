//**
// This file supposed to pick
// values from process.env
//*************************
const Config = {
  API_URL: process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/src/service/news.json'
}

export default Config
