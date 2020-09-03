/* eslint-disable no-fallthrough */
import got from 'got';

export const permissionCheck = async ({ user, client, level }) => {
  let allow = false;
  const mods = await client.mods('zigzter');
  const vips = await client.vips('zigzter');
  switch (level) {
    case 'vip':
      if (
        vips.includes(user.username) ||
        mods.includes(user.username) ||
        user.username === 'zigzter'
      ) {
        allow = true;
      }
    case 'mod':
      if (mods.includes(user.username) || user.username === 'zigzter') {
        allow = true;
      }
    default:
  }
  return allow;
};

export const getCurrentlyPlaying = () => {
  // do stuff
};
