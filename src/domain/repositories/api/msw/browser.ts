import { setupWorker } from 'msw';

import { handlers } from './handlers';

export const browserWorker = setupWorker(...handlers);
