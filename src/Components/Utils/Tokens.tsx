import { Auth } from 'aws-amplify'
import { Buffer } from 'buffer'

export const getJwtToken = async () => {
  try {
    const session = await Auth.currentSession()
    // console.log(session)
    return session
  } catch (err) {
    throw err
  }
}

//Decode JWT ID Token
export const verifyToken = async (jwtIdToken: string) => {
  try {
    if (jwtIdToken !== undefined) {
      const secret = JSON.parse(
        Buffer.from(jwtIdToken.split('.')[1], 'base64').toString(),
      )
      return secret
    }
  } catch (err) {
    throw err
  }
}
