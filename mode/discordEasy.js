function getCdnUrl() {
  return "https://cdn.discordapp.com/";
}

function getMediaUrl() {
  return "https://media.discordapp.net/";
}

function getAvatarNone(boolAvatar) {
  let _avatarError;
  if (boolAvatar) {
    _avatarError = true;
  } else {
    _avatarError = false;
  }
  return _avatarError;
}

function getBannerNone(boolBanner) {
  let _bannerError;
  if (boolBanner) {
    _bannerError = true;
  } else {
    _bannerError = false;
  }
  return _bannerError;
}

function getIconNone(boolIcon) {
  let _iconError;
  if (boolIcon) {
    _iconError = true;
  } else {
    _iconError = false;
  }
  return _iconError;
}

function getAvatar(strAvatar, userId, discriminator, size) {
  let _strA;
  let _format;
  let _size = "?size=" + size
  if (strAvatar) {
    if (strAvatar.includes("a_")) {
      _format = ".gif"
    } else {
      _format = ".png"
    }
    _strA = "avatars/" + userId + "/" + strAvatar + _format + _size
  } else {
    _strA = "embed/avatars/" + discriminator + ".png" + _size
  }
  return _strA;
}

function getBanner(strBanner, userId, size) {
  let _strB;
  let _format;
  let _size = "?size=" + size
  if (strBanner) {
    if (strBanner.includes("a_")) {
      _format = ".gif"
    } else {
      _format = ".png"
    }
    _strB = "banners/" + userId + "/" + strBanner + _format + _size
  }
  return _strB;
}

function getEmoji(emojiId, boolAnim, size, boolean) {
  let _strE;
  let _format;
  let _size;
  if (boolAnim == true) {
    _format = ".gif"
  } else {
    _format = ".png"
  }
  if (boolean == true) {
    _size = "?size=" + size
  } else {
    _size = "?v=1"
  }
  return "emojis/" + emojiId + _format + _size;
}

function getIcon(strIcon, guildId, size) {
  let _strG;
  let _format;
  let _size = "?size=" + size
  if (strIcon) {
    if (strIcon.includes("a_")) {
      _format = ".gif"
    } else {
      _format = ".png"
    }
    _strG = "icons/" + guildId + "/" + strIcon + _format + _size
  }
  return _strG;
  }
