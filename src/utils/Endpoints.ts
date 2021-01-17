/**
 * MID = Message ID
 * UID = User ID
 * CID = Channel ID
 * GID = Guild ID
 * EID = Emoji ID
 * IID = Integration ID
 * RID = Role ID
 * TID = Target User ID
 * HID = Webhook ID
 * UDIS = User Discriminator
 * R   = Reaction
 */
import { Constants } from './'
const Endpoints = {
  URLS: {
    API: `/api/v${Constants.REST_VERSION}`,
    CDN: "https://cdn.discordapp.com",
    CLIENT: "https://discord.com",
    HOST: "discord.com",
  },
  CHANNEL: {
    BASE:                                        "/channels",
    SINGLE:                             (CID): string => `/channels/${CID}`,
    BULK_DELETE:                        (CID): string => `/channels/${CID}/messages/bulk-delete`,
    CALL_RING:                          (CID): string => `/channels/${CID}/call/ring`,
    CROSSPOST:                     (CID, MID): string => `/channels/${CID}/messages/${MID}/crosspost`,
    FOLLOW:                             (CID): string => `/channels/${CID}/followers`,
    INVITES:                            (CID): string => `/channels/${CID}/invites`,
    MESSAGE_REACTION:           (CID, MID, R): string => `/channels/${CID}/messages/${MID}/reactions/${R}`,
    MESSAGE_REACTION_USER: (CID, MID, R, UID): string => `/channels/${CID}/messages/${MID}/reactions/${R}/${UID}`,
    MESSAGE_REACTIONS:             (CID, MID): string => `/channels/${CID}/messages/${MID}/reactions`,
    MESSAGE:                       (CID, MID): string => `/channels/${CID}/messages/${MID}`,
    MESSAGES:                           (CID): string => `/channels/${CID}/messages`,
    MESSAGES_SEARCH:                    (CID): string => `/channels/${CID}/messages/search`,
    PERMISSION:                    (CID, OID): string => `/channels/${CID}/permissions/${OID}`,
    PERMISSIONS:                        (CID): string => `/channels/${CID}/permissions`,
    PIN:                           (CID, MID): string => `/channels/${CID}/pins/${MID}`,
    PINS:                               (CID): string => `/channels/${CID}/pins`,
    RECIPIENT:                     (GID, UID): string => `/channels/${GID}/recipients/${UID}`,
    TYPING:                             (CID): string => `/channels/${CID}/typing`,
    WEBHOOKS:                           (CID): string => `/channels/${CID}/webhooks`,
  },
  GATEWAY: {
    BASE: "/gateway",
    BOT:  "/gateway/bot",
  },
  GUILD: {
    BASE:                           "/guilds",
    SINGLE:                (GID): string => `/guilds/${GID}`,
    AUDIT_LOGS:            (GID): string => `/guilds/${GID}/audit-logs`,
    BAN:              (GID, UID): string => `/guilds/${GID}/ban/${UID}`,
    BANS:                  (GID): string => `/guilds/${GID}/bans`,
    CHANNELS:              (GID): string => `/guilds/${GID}/channels`,
    EMBED:                 (GID): string => `/guilds/${GID}/embed`,
    EMOJI:            (GID, EID): string => `/guilds/${GID}/emojis/${EID}`,
    EMOJIS:                (GID): string => `/guilds/${GID}/emojis`,
    INTEGRATION:      (GID, IID): string => `/guilds/${GID}/integrations/${IID}`,
    INTEGRATION_SYNC: (GID, IID): string => `/guilds/${GID}/integrations/${IID}/sync`,
    INTEGRATIONS:          (GID): string => `/guilds/${GID}/integrations`,
    INVITES:               (GID): string => `/guilds/${GID}/invites`,
    VANITY_URL:            (GID): string => `/guilds/${GID}/vanity-url`,
    MEMBER:           (GID, UID): string => `/guilds/${GID}/members/${UID}`,
    MEMBER_NICKNAME:  (GID, UID): string => `/guilds/${GID}/members/${UID}/nick`,
    MEMBER_ROLE: (GID, UID, RID): string => `/guilds/${GID}/members/${UID}/roles/${RID}`,
    MEMBERS:               (GID): string => `/guilds/${GID}/members`,
    MEMBERS_SEARCH:        (GID): string => `/guilds/${GID}/members/search`,
    MESSAGES_SEARCH:       (GID): string => `/guilds/${GID}/messages/search`,
    PREVIEW:               (GID): string => `/guilds/${GID}/preview`,
    PRUNE:                 (GID): string => `/guilds/${GID}/prune`,
    ROLE:             (GID, RID): string => `/guilds/${GID}/roles/${RID}`,
    ROLES:                 (GID): string => `/guilds/${GID}/roles`,
    VOICE_REGIONS:         (GID): string => `/guilds/${GID}/regions`,
    WEBHOOKS:              (GID): string => `/guilds/${GID}/webhooks`,
    WIDGET:                (GID): string => `/guilds/${GID}/widget`,
  },
  INVITE:     (INVID): string => `/invite/${INVID}`,
  OAUTH2_APP: (APPID): string => `/oauth2/applications/${APPID}`,
  USER: {
    BASE:                                        "/users",
    SINGLE:                             (UID): string => `/users/${UID}`,
    BILLING:                            (UID): string => `/users/${UID}/billing`,
    BILLING_PAYMENTS:                   (UID): string => `/users/${UID}/billing/payments`,
    BILLING_PREMIUM_SUBSCRIPTION:       (UID): string => `/users/${UID}/billing/premium-subscription`,
    CHANNELS:                           (UID): string => `/users/${UID}/channels`,
    CONNECTIONS:                        (UID): string => `/users/${UID}/connections`,
    CONNECTION_PLATFORM:  (UID, PLATFORM, ID): string => `/users/${UID}/connections/${PLATFORM}/${ID}`,
    GUILD:                         (UID, GID): string => `/users/${UID}/guilds/${GID}`,
    GUILDS:                             (UID): string => `/users/${UID}/guilds`,
    MFA_CODES:                          (UID): string => `/users/${UID}/mfa/codes`,
    MFA_TOTP_DISABLE:                   (UID): string => `/users/${UID}/mfa/totp/disable`,
    MFA_TOTP_ENABLE:                    (UID): string => `/users/${UID}/mfa/totp/enable`,
    NOTE:                          (UID, TID): string => `/users/${UID}/note/${TID}`,
    PROFILE:                            (UID): string => `/users/${UID}/profile`,
    RELATIONSHIP:                (UID, RELID): string => `/users/${UID}/relationships/${RELID}`,
    SETTINGS:                           (UID): string => `/users/${UID}/settings`,
  },
  VOICE_REGIONS: "/voice/regions",
  WEBHOOK: {
    BASE:               (HID): string => `/webhooks/${HID}`,
    SLACK:              (HID): string => `/webhooks/${HID}/slack`,
    TOKEN:       (HID, TOKEN): string => `webooks/${HID}/${TOKEN}`,
    TOKEN_SLACK: (UID, TOKEN): string => `/users/${UID}/${TOKEN}/slack`,
  },
  CDN: {
    CHANNEL_ICON:              (CID, CICON): string => `/channel-icons/${CID}/${CICON}`,
    CUSTOM_EMOJI:                     (EID): string => `/emojis/${EID}`,
    DEFAULT_USER_AVATAR:             (UDIS): string => `/embed/avatars/${UDIS}`,
    GUILD_BANNER:            (GID, GBANNER): string => `/banners/${GID}/${GBANNER}`,
    GUILD_DISCOVERY_SPLASH: (GID, GDSPLASH): string => `/discovery-splashes/${GID}/${GDSPLASH}`,
    GUILD_ICON:                (GID, GICON): string => `/icons/${GID}/${GICON}`,
    GUILD_SPLASH:            (GID, GSPLASH): string => `/splashes/${GID}/${GSPLASH}`,
    USER_AVATAR:             (UID, UAVATAR): string => `/avatars/${UID}/${UAVATAR}`,
  },
  CLIENT: {
    MESSAGE_LINK: (GID, CID, MID): string => `/channels/${GID}/${CID}/${MID}`,
  },
}
export {
  Endpoints,
}
