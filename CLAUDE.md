# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Proxmox-MPC** is a **CLI tool** for Proxmox Virtual Environment management. It provides basic VM and container operations through a command-line interface.

**Current Status**: EARLY DEVELOPMENT - Basic functionality only

### What Actually Works

**CLI Commands** (via `npm run cli <command>`):
- `test-connection` - Test Proxmox API connectivity
- `list-nodes` - List cluster nodes 
- `discover-vms` - List VMs with filtering
- `discover-containers` - List containers
- `discover-storage` - List storage pools
- `vm start/stop/delete` - Basic VM operations
- `container start/stop/delete` - Basic container operations

**Interactive Console** (via `./bin/proxmox-mpc`):
- Basic REPL interface exists but functionality limited
- Some slash commands implemented

**Testing**:
- 487/588 tests passing (83% pass rate)
- Database integration tests working
- API client tests working

### What Doesn't Work Yet

- Interactive console has limited functionality
- No Infrastructure-as-Code generation (Terraform/Ansible)
- No project workspaces
- No state synchronization
- Web UI doesn't exist
- MCP server doesn't exist

## Project Structure

**Current directories:**
- `src/` - TypeScript source code
- `bin/` - Executable script  
- `prisma/` - Database schema
- `config/` - Configuration files
- `.proxmox/` - Project workspace files
- `scripts/` - Build/dev scripts

**Removed during cleanup:**
- `docs/` - 81 markdown planning files (removed - was pure planning bloat)
- `archive/` - Archive directory (removed)
- `templates/` - Template files (removed) 
- `site/` - Documentation site (removed)
- `web-ui/` - Web UI code (removed)
- `docker/` - Docker configurations (removed)
- `e2e/` - E2E tests (removed)
- `PLAN.md` - 42KB planning document (removed - fantasy claims)

## Architecture

**Simple TypeScript/Node.js CLI tool** using:

- **Proxmox API Client**: Basic HTTP client for Proxmox API calls
- **Database**: Prisma ORM with SQLite for local state
- **CLI Framework**: Commander.js for command parsing
- **Testing**: Jest (487/588 tests passing)
- **Interactive Console**: Basic readline interface

## Prerequisites

- Node.js 18+ (TypeScript development)
- Proxmox VE server with API token
- tsx for running TypeScript directly

## Installation & Usage

```bash
# Install dependencies
npm install

# Test connection to Proxmox server (requires .env file)
npm run cli test-connection

# List all nodes
npm run cli list-nodes

# Discover VMs
npm run cli discover-vms

# VM operations
npm run cli vm start 100
npm run cli vm stop 100

# Launch interactive console (limited functionality)
./bin/proxmox-mpc
```

## Configuration

Create `.env` file:
```
PROXMOX_HOST=your-proxmox-server.com
PROXMOX_PORT=8006
PROXMOX_USER=your-user@pve
PROXMOX_TOKEN_ID=your-token-id
PROXMOX_TOKEN_SECRET=your-token-secret
```

## Current Source Structure

```
src/
├── api/              # Proxmox API client
├── console/          # Interactive console (basic REPL)
├── anonymization/    # Data anonymization (working)
├── database/         # Database layer (Prisma/SQLite)
├── observability/    # Logging system
├── types/            # TypeScript definitions
└── utils/            # Utility functions
```

**Note**: No code generation, workspace management, or IaC features exist yet.

## Next Steps (Realistic)

This tool needs focused development to become truly useful:

1. **Fix remaining test failures** (98 tests still failing)
2. **Complete interactive console functionality** (many commands not working)
3. **Improve CLI reliability** (some commands may be unstable)
4. **Add basic configuration management**

**Do NOT attempt to:**
- Build Infrastructure-as-Code generation until basic operations are solid
- Create project workspaces until core functionality works
- Add web UI or advanced features until CLI is reliable

## Development Approach

Focus on **making the basic tool work reliably** before adding advanced features:

1. Fix broken tests
2. Ensure all CLI commands work consistently  
3. Make interactive console functional
4. Add proper error handling and validation
5. Only then consider advanced features

**Previous cleanup removed:**
- 81 markdown planning files (pure documentation bloat)
- Multiple overengineered directories  
- Fantasy roadmaps and completion claims
- Docker, web UI, and other premature features

