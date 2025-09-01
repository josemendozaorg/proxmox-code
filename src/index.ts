/**
 * Main entry point for Proxmox-MPC application
 */

import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Export types
export type {
  ProxmoxConfig,
  ProxmoxNode,
  ProxmoxVM,
  ProxmoxContainer,
  NodeInfo,
  VMInfo,
  ContainerInfo,
  StorageInfo,
  TaskInfo,
  VMConfig,
  ContainerConfig,
  VMCreateConfig,
  ContainerCreateConfig,
  VMCreationResult,
  ContainerCreationResult,
  VMDeleteOptions,
  ContainerDeleteOptions,
  ProxmoxResponse,
  ConnectionResult,
  VersionInfo,
  StorageContent
} from './types';

// Export API components
export {
  ProxmoxClient
} from './api';

// Export database components
export {
  PrismaClient,
  DatabaseClient,
  dbClient
} from './database';