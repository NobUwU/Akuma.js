import Axios from 'axios'
import { Error } from '../errors'
import {
  APIRequestClassInterface,
  APIRequestOptionsInterface,
} from '../@types'
import {
  Endpoints,
  HeadersWithAuth,
  BasicHeaders,
} from '../utils'
class APIRequest implements APIRequestClassInterface {
  private options: APIRequestOptionsInterface
  private malformedRequest: boolean
  private fullPath: string
  private headers: JSON
  constructor(options: APIRequestOptionsInterface) {
    this.options = options
    
    // Checks if request is malformed if not assigns fullPath and headers
    if (
      !this.options
      || !this.options.method
      || !this.options.path
    ) {
      this.malformedRequest = true
    } else {
      this.fullPath = Endpoints.URLS.CLIENT 
        + (
          this.options.versioned
            ? Endpoints.URLS.API
            : "/api"
        ) 
        + this.options.path 
      this.headers = {
        ...this.options.token
          ? HeadersWithAuth(this.options.token)
          : BasicHeaders,
        ... this.options.headers,
      }
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public create(): Promise<JSON | any> {
    return new Promise((resolve, reject) => {
      if (this.malformedRequest) throw new Error(`Malformed_Request`)
      Axios({
        method: this.options.method,
        url: this.fullPath,
        headers: this.headers,
        data: this.options.body,
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  public getOptions(): APIRequestOptionsInterface {
    return this.options
  }
}
// Function to create request with lessish code
function createRequest(options: APIRequestOptionsInterface): APIRequestClassInterface {
  return new APIRequest(options)
}
export {
  APIRequest,
  createRequest,
}
