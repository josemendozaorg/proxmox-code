/**
 * Database layer - TDD-compliant components only
 */

export { PrismaClient } from '@prisma/client';
export { DatabaseClient, dbClient } from './client';

// Only export tested repository base types
export type {
  BaseRepository,
  PaginationOptions,
  QueryOptions,
  FindManyOptions,
  FindManyResult
} from './repositories/index';
export {
  RepositoryError,
  NotFoundError,
  ValidationError,
  ConflictError,
  Validator
} from './repositories/index';