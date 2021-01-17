/* eslint-disable camelcase */
import { Constants } from '../../utils'
import { ResumeBase } from '../../@types'
const Resume = (token: string, sessionId: string, sequence: number): ResumeBase => {
  return {
    op: Constants.GATEWAY_OP_CODES.RESUME,
    d: {
      token,
      session_id: sessionId,
      seq: sequence,
    },
  }
}
export {
  Resume,
}
