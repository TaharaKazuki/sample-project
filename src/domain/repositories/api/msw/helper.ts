import { compose, context } from 'msw';

type ErrorResolverArgs = {
  status?: number;
  errorMessage?: string;
};

export const errorResolver = ({
  status = 500,
  errorMessage = 'Internal Server Error',
}: ErrorResolverArgs) =>
  compose(context.delay(500), context.status(status), context.json({ errorMessage }));
