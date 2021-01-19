export interface WebsocketShardInterface {
  connect(): void
  destroy(): void
}
export interface WSInterface {
  connection: WebSocket | null
  sessionId: string | null
  sequence: number | null
  heartbeat: typeof setInterval | null
}
export interface WebsocketManagerInterface {
  
}
