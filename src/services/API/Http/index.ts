import 'isomorphic-unfetch'
import { stringify } from 'query-string'

const BaseUrl = `${process.env.NEXT_PUBLIC_API_URL}/api`
export const Http = {
  Request: async <A>(methodType: string, url: string, params?: any, payload?: any): Promise<A> => {
    return new Promise((resolve, reject) => {
      const query = params
        ? `?${stringify({
            ...params,
            api_key: process.env.NEXT_PUBLIC_API_KEY
          })}`
        : ''

      fetch(`${BaseUrl}${url}${query}`, {
        body: JSON.stringify(payload),
        cache: 'no-cache',
        headers: {
          'content-type': 'application/json'
        },
        method: `${methodType}`
      })
        .then(async response => {
          if (response.status === 200) {
            return response.json().then(resolve)
          }
          return reject(response)
        })
        .catch(e => {
          reject(e)
        })
    })
  }
}
