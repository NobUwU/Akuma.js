/* eslint-disable camelcase */
export interface ClientInterface extends BaseClientInterface {
  connect(): void
}
export interface BaseClientInterface {
  destroy(): void
  getClientOptions(): ClientOptionsInterface
  getToken(): string
}
export interface ClientOptionsInterface {
  restRequestTimeout?: number
  restRetryLimit?: number
  ws?: {
    large_threshold?: number
    compress?: boolean
    presence?: {
      status?: "online" | "idle" | "invisible" | "dnd" | "offline"
      afk?: boolean
    }
  }
}
