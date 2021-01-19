import {
  Identify,
  Heartbeat,
  Resume,
} from './payloads'
import {
  Constants,
  Endpoints,
} from '../utils'
import {
  Error,
} from '../errors'
import {
  EventEmitter,
} from 'events'
import { 
  inflateSync,
} from 'zlib'
import {
  ClientOptionsInterface,
  WebsocketShardInterface,
  WSInterface,
} from '../@types'
import ws from 'ws'
class WebsocketShard extends EventEmitter implements WebsocketShardInterface {
  private clientOptions: ClientOptionsInterface
  private ws: WSInterface
  constructor(clientOptions: ClientOptionsInterface) {
    super()
    this.clientOptions = clientOptions
  }
  public connect(): void {
    null
  }
  public destroy(): void {
    null
  }
}
export {
  WebsocketShard,
}
