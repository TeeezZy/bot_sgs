import { Event } from '../structures/Event/Event';

export default new Event('ready', () => {
  console.log(`Bot is online`);
});
