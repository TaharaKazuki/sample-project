import type { SetupWorkerApi } from 'msw';

let worker: SetupWorkerApi | undefined;

export const startMsw = async () => {
  if (worker || process.env.NODE_ENV === 'test') return;
  const { browserWorker } = await import('./browser');
  worker = browserWorker;

  browserWorker.start({ onUnhandledRequest: 'bypass' });
};

export const stopMsw = async () => {
  if (!worker) return;
  worker.stop();
  worker = undefined;
};
