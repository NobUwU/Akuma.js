/* eslint-disable camelcase */
export interface HeartbeatBase {
  op: number
  d: number
}
export interface IdentifyBase {
  op: number
  d: {
    token: string
    properties: {
      $os: string
      $browser: string
      $device: string
    }
    compress?: boolean
    large_threshold?: number
    shard?: Array<number>
    presence?: {
      activities?: [{
        name: string
        type: 0 | 1 | 2 | 3 | 4 | 5
        application_id?: number
        state?: string
        details?: string
        timestamps?: {
          start?: number
          end?: number
        }
        emoji?: {
          name: string
          id?: number
          animated?: boolean
        }
        party?: {
          id?: string
          size?: [number, number]
        }
        assets?: {
          large_image?: string
          large_text?: string
          small_image?: string
          small_text?: string
        }
        secrets?: {
          join?: string
          spectate?: string
          match?: string
        }
      }]
      status: "online" | "idle" | "invisible" | "dnd" | "offline"
      since?: number
      afk: boolean
    }
    intents: number
  }
}
/*
Activity Types
ID - NAME - FORMAT - EXAMPLE
0 - Game        - Playing {name}      - "Playing Rocket League"
1 - Streaming   - Streaming {name}    - "Streaming Rocket League"
2 - Listening   - Listening {name}    - "Listening to Spotify"
4 - Custom      - {emoji} {name}      - ":smiley: I am cool"
5 - Competing   - Competing in {name} - "Competing in Arena World Champions"

Useful Resource
https://discord.com/developers/docs/topics/gateway#activity-object-activity-types
https://discord.com/developers/docs/topics/gateway#activity-object
https://discord.com/developers/docs/topics/gateway#update-status
https://discord.com/developers/docs/topics/gateway#identify
*/
export interface ResumeBase {
  op: number
  d: {
    token: string
    session_id: string
    seq: number
  }
}
