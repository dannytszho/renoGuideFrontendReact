import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { Amplify } from 'aws-amplify'

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:66cb9424-f5ab-49cc-beee-cc28ffe5a296',
    region: 'us-east-1',
    userPoolId: 'us-east-1_SX3VazAiM',
    userPoolWebClientId: '2caidilhb8lbvfhdqis93v4mpg',
    mandatorySignIn: true,
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
