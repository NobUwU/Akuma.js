import {
  Constants,
} from '../../utils'
import {
  HeartbeatBase,
} from '../../@types'
const Heartbeat = (sequence: number): HeartbeatBase => {
  return {
    op: Constants.GATEWAY_OP_CODES.HEARTBEAT,
    d: sequence,
  }
}
export {
  Heartbeat,
}
