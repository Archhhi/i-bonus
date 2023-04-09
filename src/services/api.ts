export default class Api {
  static async createToken() {
    const response = await fetch(`${process.env.REACT_APP_API_INIT_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        AccessKey: `${process.env.REACT_APP_ACCESS_KEY}`
      },
      body: JSON.stringify({
        idClient: `${process.env.REACT_APP_CLIENT_ID}`,
        accessToken: '',
        paramName: 'device',
        paramValue: `${process.env.REACT_APP_DEVICE_ID}`,
        latitude: 0,
        longitude: 0,
        sourceQuery: 0
      })
    })

    return await response.json()
  }

  static async getClientData(accessToken: string) {
    const response = await fetch(
      `${process.env.REACT_APP_API_BONUS_URL}/${accessToken}`,
      {
        headers: {
          AccessKey: `${process.env.REACT_APP_ACCESS_KEY}`
        }
      }
    )

    return await response.json()
  }
}
