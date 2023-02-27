import {
  ZodiosBodyByPath,
  ZodiosErrorByPath,
  ZodiosPathsByMethod,
  ZodiosResponseByPath,
} from '@zodios/core/lib/zodios.types';
import { ResponseResolver, rest, RestContext, RestRequest } from 'msw';

import { API_ENDPOINT } from '../../../const/url';
import { apiClient } from '../../client';

type Api = ReturnType<typeof apiClient>['api'];
type STATUS_CODE = 400 | 401 | 402 | 403; // TODO 振る舞いの数だけ増やす
export function restGet<Path extends ZodiosPathsByMethod<Api, 'get'>>(
  path: Path,
  resolver: ResponseResolver<
    RestRequest,
    RestContext,
    Awaited<
      ZodiosResponseByPath<Api, 'get', Path> | ZodiosErrorByPath<Api, 'get', Path, STATUS_CODE>
    >
  >
) {
  return rest.get(`${API_ENDPOINT}${path}`, resolver);
}
export function restPost<Path extends ZodiosPathsByMethod<Api, 'post'>>(
  path: Path,
  resolver: ResponseResolver<
    RestRequest<ZodiosBodyByPath<Api, 'post', Path>>,
    RestContext,
    Awaited<
      ZodiosResponseByPath<Api, 'post', Path> | ZodiosErrorByPath<Api, 'post', Path, STATUS_CODE>
    >
  >
) {
  return rest.post(`${API_ENDPOINT}${path}`, resolver);
}
export function restPut<Path extends ZodiosPathsByMethod<Api, 'put'>>(
  path: Path,
  resolver: ResponseResolver<
    RestRequest<ZodiosBodyByPath<Api, 'put', Path>>,
    RestContext,
    Awaited<
      ZodiosResponseByPath<Api, 'put', Path> | ZodiosErrorByPath<Api, 'put', Path, STATUS_CODE>
    >
  >
) {
  return rest.put(`${API_ENDPOINT}${path}`, resolver);
}
export function restDelete<Path extends ZodiosPathsByMethod<Api, 'delete'>>(
  path: Path,
  resolver: ResponseResolver<
    RestRequest<ZodiosBodyByPath<Api, 'delete', Path>>,
    RestContext,
    Awaited<
      | ZodiosResponseByPath<Api, 'delete', Path>
      | ZodiosErrorByPath<Api, 'delete', Path, STATUS_CODE>
    >
  >
) {
  return rest.delete(`${API_ENDPOINT}${path}`, resolver);
}
