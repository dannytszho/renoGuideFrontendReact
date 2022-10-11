import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Amplify } from 'aws-amplify'

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:ff825463-5417-4a57-bef3-4d2104465b9a',
    region: 'us-east-1',
    userPoolId: 'us-east-1_a1OZNpG9P',
    userPoolWebClientId: '71dtciuu7kljmut6a6o2ap0hu3',
    mandatorySignIn: true,
    oauth: {
      domain: 'omybuddha.auth.us-east-1.amazoncognito.com',
      scope: ['openid', 'email', 'profile'],
      redirectSignIn: 'http://localhost:3000/',
      redirectSignOut: 'http://localhost:3000/',
      responseType: 'code',
    },
  },
})

let myAppConfig = {
  aws_appsync_graphqlEndpoint:
    'https://y2x573pnyzbavljkini2poysdi.appsync-api.us-east-1.amazonaws.com/graphql',
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
