/**
 * Simple configuration loader for CLI commands
 */

import dotenv from 'dotenv';

dotenv.config();

export interface ProxmoxConfig {
  host: string;
  port: number;
  username: string;
  password?: string;
  token_id?: string;
  token_secret?: string;
  node: string;
  verify_ssl: boolean;
}

export function loadProxmoxConfig(): ProxmoxConfig {
  const config: ProxmoxConfig = {
    host: process.env.PROXMOX_HOST || 'localhost',
    port: parseInt(process.env.PROXMOX_PORT || '8006'),
    username: process.env.PROXMOX_USERNAME || 'root@pam',
    password: process.env.PROXMOX_PASSWORD,
    token_id: process.env.PROXMOX_TOKEN_ID,
    token_secret: process.env.PROXMOX_TOKEN_SECRET,
    node: process.env.PROXMOX_NODE || 'pve',
    verify_ssl: process.env.NODE_ENV !== 'development'
  };

  return config;
}

export function validateConfig(config: ProxmoxConfig): string[] {
  const errors: string[] = [];

  if (!config.host) {
    errors.push('PROXMOX_HOST is required');
  }

  if (!config.username) {
    errors.push('PROXMOX_USERNAME is required');
  }

  if (!config.password && (!config.token_id || !config.token_secret)) {
    errors.push('Either PROXMOX_PASSWORD or both PROXMOX_TOKEN_ID and PROXMOX_TOKEN_SECRET are required');
  }

  return errors;
}

export function sanitizeConfig(config: ProxmoxConfig): Record<string, any> {
  return {
    host: config.host,
    port: config.port,
    username: config.username,
    node: config.node,
    verify_ssl: config.verify_ssl,
    has_password: !!config.password,
    has_token: !!(config.token_id && config.token_secret)
  };
}