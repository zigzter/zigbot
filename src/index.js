import tmi from 'tmi.js';
import { permissionCheck } from './helpers.js';

const options = {
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: 'zigzter',
    password: process.env.BOT_PASS,
  },
  channels: ['zigzter'],
};

const client = new tmi.Client(options);

client.connect().catch(console.error);

client.on('message', async (channel, user, message, self) => {
  if (self) return;
  const command = message.toLowerCase().split(' ')[0];
  const targetUser = message.toLowerCase().split(' ')[1];
  if (
    command === '!so' &&
    (await permissionCheck({ user, client, level: 'vip' }))
  ) {
    client.say(channel, `Go checkout ${targetUser} at twitch.tv/${targetUser}`);
  }
});
