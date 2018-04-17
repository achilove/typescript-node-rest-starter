import { AuthToken } from './auth-token';
import { Profile } from './profile';

export type UserType = {

  email: string,
  username: string,
  password?: string,
  role: string,

  active?: boolean,

  passwordResetToken?: string,
  passwordResetExpires?: Date,

  activationToken?: string,
  activationExpires?: Date,

  tokens?: Array<AuthToken>,

  profile?: Profile
};