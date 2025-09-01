/**
 * Repository base types and utilities
 * Only includes tested components following TDD principles
 */

// Export base repository interfaces and types
export type { 
  BaseRepository, 
  PaginationOptions, 
  QueryOptions,
  FindManyOptions,
  FindManyResult
} from './base-repository';
export {
  RepositoryError,
  NotFoundError,
  ValidationError,
  ConflictError,
  Validator
} from './base-repository';