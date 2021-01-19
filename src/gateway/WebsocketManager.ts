import {
  EventEmitter,
} from "events"
import {
  ClientInterface,
  WebsocketManagerInterface,
} from "src/@types"
class WebsocketManager extends EventEmitter implements WebsocketManagerInterface {
  private client: ClientInterface
  constructor(client: ClientInterface) {
    super()
    this.client = client
  }
}
export {
  WebsocketManager,
}
