import {
  EventEmitter,
} from 'events'
import {
  BaseClientInterface,
  ClientOptionsInterface,
} from 'src/@types'
class BaseClient extends EventEmitter implements BaseClientInterface {
  private options: ClientOptionsInterface
  private token: string
  constructor(token: string, options: ClientOptionsInterface) {
    super()
    this.options = options
    this.token = token
  }
  public getClientOptions(): ClientOptionsInterface {
    return this.options
  }
  public getToken(): string {
    return this.token
  }
  public destroy(): void {
    null
  }
}
export {
  BaseClient,
}
