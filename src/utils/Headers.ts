import * as meta from '../Meta.json'
const BasicHeaders: JSON = JSON.parse(
  JSON.stringify(
    {
      'user_agent': `Neat Discord Bot (Akuma.js v${meta.version}, https://github.com/NobUwU/Akuma.js)`,
      'accept': "*/*",
      'accept-language': 'en-US;q=0.8',
      'accept-encoding': "gzip, deflate",
      'content-type': "application/json",
      'dnt': 1,
    },
  ),
)
const HeadersWithAuth = (apiKey: string): JSON => {
  return JSON.parse(
    JSON.stringify(
      {
        'user_agent': `Neat Discord Bot (Akuma.js v${meta.version}, https://github.com/NobUwU/Akuma.js)`,
        'accept': "*/*",
        'accept-language': 'en-US;q=0.8',
        'accept-encoding': "gzip, deflate",
        'content-type': "application/json",
        'dnt': 1,
        'Authorization': `Bot ${apiKey}`,
      },
    ),
  )
}
export {
  BasicHeaders,
  HeadersWithAuth,
}
