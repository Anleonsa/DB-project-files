import { BACK } from '../globalVariables/Data'

export const PUT = async ({ resource, body }) => {
  const token = window.localStorage.getItem('token')
  const bearer = token ?? ''

  const data = {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': bearer
    }
  }
  const url = BACK.BASE_URL + resource
  try {
    const response = await fetch(url, data)
    const jsn = response.json()
    return jsn
  } catch (error) {
    console.log(error)
  }
}
