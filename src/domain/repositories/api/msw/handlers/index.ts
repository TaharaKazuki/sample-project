import { authApis } from './auth';
import { userApis } from './user';

export const handlers = [...authApis, ...userApis];
