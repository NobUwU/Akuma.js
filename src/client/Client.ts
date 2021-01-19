import {
  ClientInterface,
  ClientOptionsInterface,
} from 'src/@types'
import {
  Error,
} from '../errors'
import {
  BaseClient,
} from './Base'
class Client extends BaseClient implements ClientInterface {
  constructor(token: string, options: ClientOptionsInterface) {
    super(token, options)
  }
  public connect(): void {
    null
  }
}
export {
  Client,
}
