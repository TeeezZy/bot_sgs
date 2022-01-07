import {
  ChatInputApplicationCommandData,
  CommandInteraction,
  CommandInteractionOptionResolver,
  GuildMember,
  PermissionResolvable
} from 'discord.js';
import { ExtendedClient } from '../structures/Client/Client';

export interface IExtendedInteraction extends CommandInteraction {
  member: GuildMember;
}

interface IRunOptions {
  client: ExtendedClient;
  interaction: IExtendedInteraction;
  args: CommandInteractionOptionResolver;
}

type TRunFunction = (options: IRunOptions) => any;

export type CommandType = {
  userPermissions?: PermissionResolvable[];
  cooldown?: number; // not implemented yet
  run: TRunFunction;
} & ChatInputApplicationCommandData;
