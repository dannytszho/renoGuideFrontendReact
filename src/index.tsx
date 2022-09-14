import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
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
let myAppConfig = {
  aws_appsync_graphqlEndpoint:
    'https://xqzcqaxy2fbdxn66hummpfo3o4.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS', // You have configured Auth with Amazon Cognito User Pool ID and Web Client Id
}
Amplify.configure(myAppConfig)

const client = new ApolloClient({
  uri: 'https://xqzcqaxy2fbdxn66hummpfo3o4.appsync-api.us-east-1.amazonaws.com/graphql',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
