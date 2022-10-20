import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Amplify } from 'aws-amplify'

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:0992d967-5f56-4aa6-9939-a006bc436c79',
    region: 'us-east-1',
    userPoolId: 'us-east-1_qjcyB4dVz',
    userPoolWebClientId: '66j4cecrdqo88msh76dqret64',
    mandatorySignIn: true,
    oauth: {
      domain: 'omybuddha.auth.us-east-1.amazoncognito.com',
      scope: ['openid', 'email', 'profile'],
      redirectSignIn: `${window.location.origin}/`,
      redirectSignOut: `${window.location.origin}/`,
      responseType: 'code',
    },
  },
  Storage: {
    AWSS3: {
      bucket: 'aws-trails-trailsimagebucket',
      region: 'us-east-1',
    },
  },
})

let myAppConfig = {
  aws_appsync_graphqlEndpoint:
    'https://i6sxccn55jc4nhyw5p4cg3eh4a.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
}
Amplify.configure(myAppConfig)

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
