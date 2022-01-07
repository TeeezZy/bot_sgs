require('dotenv').config();
import { ExtendedClient } from './structures/Client/Client';

export const client = new ExtendedClient();

client.start();
