/* eslint-disable camelcase */
import { Constants } from '../../utils'
import { IdentifyBase } from '../../@types'
const Identify = (token: string, status: "online" | "idle" | "invisible" | "dnd" | "offline", intents: number): IdentifyBase => {
  return {
    op: Constants.GATEWAY_OP_CODES.IDENTIFY,
    d: {
      token: token,
      properties: {
        $os: process.platform,
        $browser: "akuma",
        $device: "akuma",
      },
      compress: true,
      large_threshold: 250,
      shard: [0,1],
      presence: {
        status: status,
        afk: false,
      },
      intents: intents,
    },
  }
}
export {
  Identify,
}
