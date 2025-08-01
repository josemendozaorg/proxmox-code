/**
 * Help Command
 * Displays available commands and usage information
 */

import { ConsoleSession } from '../repl';

export class HelpCommand {
  async execute(args: string[], session: ConsoleSession): Promise<void> {
    if (args.length > 0) {
      await this.showSpecificHelp(args[0], session);
    } else {
      await this.showGeneralHelp(session);
    }
  }

  private async showGeneralHelp(session: ConsoleSession): Promise<void> {
    console.log('\n📚 Proxmox-MPC Interactive Console Help\n');
    
    console.log('🔧 Core Slash Commands:');
    console.log('  /help                 Show this help message');
    console.log('  /init                 Initialize new project workspace');
    console.log('  /status               Show project and server status');
    console.log('  /sync                 Sync infrastructure state');
    console.log('  /test                 Validate generated IaC without deployment');
    console.log('  /apply                Deploy changes to server (future)');
    console.log('  /exit                 Exit the console\n');
    
    console.log('🏗️  Resource Commands (Future):');
    console.log('  create vm --name <name>         Generate VM configuration');
    console.log('  create container --name <name>  Generate container configuration');
    console.log('  update vm <id> --cores <n>      Modify VM configuration');
    console.log('  delete vm <id>                  Remove VM configuration');
    console.log('  list vms [filters]              Show VMs');
    console.log('  describe vm <id>                Show detailed VM info\n');
    
    console.log('⌨️  Navigation & Shortcuts:');
    console.log('  help, exit, quit              Alternative commands');
    console.log('  Ctrl+C                        Exit console');
    console.log('  Up/Down arrows               Command history');
    console.log('  Tab                          Auto-completion (future)\n');
    
    if (!session.workspace) {
      console.log('💡 Getting Started:');
      console.log('  1. Use /init to create a new project workspace');
      console.log('  2. Configure your Proxmox server connection');
      console.log('  3. Use /sync to import existing infrastructure');
      console.log('  4. Start managing resources with create/update/delete commands\n');
    } else {
      console.log('📁 Current Workspace:');
      console.log(`  Project: ${session.workspace.name}`);
      console.log(`  Server: ${session.workspace.config.host}:${session.workspace.config.port}`);
      console.log(`  Node: ${session.workspace.config.node}\n`);
    }
    
    console.log('📖 For detailed help on a specific command, use: /help <command>');
    console.log('🌐 Documentation: See VISION.md and PLAN.md in the project root\n');
  }

  private async showSpecificHelp(command: string, session: ConsoleSession): Promise<void> {
    switch (command) {
      case 'init':
        console.log('\n/init - Initialize Project Workspace\n');
        console.log('Creates a new Proxmox infrastructure project in the current directory.');
        console.log('This command will:');
        console.log('  • Create .proxmox/ directory with configuration');
        console.log('  • Set up local SQLite database');
        console.log('  • Create terraform/ and ansible/ directories');
        console.log('  • Create tests/ directory for infrastructure validation');
        console.log('  • Guide you through server connection setup\n');
        console.log('Usage: /init');
        console.log('Example: /init\n');
        break;
        
      case 'status':
        console.log('\n/status - Show Project Status\n');
        console.log('Displays current project and server information including:');
        console.log('  • Project workspace status');
        console.log('  • Proxmox server connectivity');
        console.log('  • Resource counts (VMs, containers, etc.)');
        console.log('  • Last synchronization time');
        console.log('  • Configuration drift status (future)\n');
        console.log('Usage: /status');
        console.log('Example: /status\n');
        break;
        
      case 'sync':
        console.log('\n/sync - Synchronize Infrastructure State\n');
        console.log('Bidirectional synchronization between:');
        console.log('  • Proxmox server (actual infrastructure)');
        console.log('  • Local database (cached state)');
        console.log('  • Terraform files (desired configuration)');
        console.log('  • Ansible playbooks (configuration management)\n');
        console.log('This command will:');
        console.log('  • Import existing VMs and containers');
        console.log('  • Generate Terraform resource configurations');
        console.log('  • Create Ansible inventory and playbooks');
        console.log('  • Update local database with current state\n');
        console.log('Usage: /sync');
        console.log('Example: /sync\n');
        break;
        
      case 'test':
        console.log('\n/test - Validate Infrastructure-as-Code\n');
        console.log('Comprehensive validation of generated configurations without deployment:');
        console.log('  • Phase 1: Validate workspace structure');
        console.log('  • Phase 2: Validate Terraform configurations');
        console.log('  • Phase 3: Validate Ansible configurations');
        console.log('  • Phase 4: Run terraform plan (dry-run)');
        console.log('  • Phase 5: Validate Ansible syntax\n');
        console.log('This command ensures:');
        console.log('  • All required files and directories exist');
        console.log('  • Terraform HCL syntax is valid');
        console.log('  • Ansible YAML syntax is correct');
        console.log('  • Infrastructure changes can be previewed safely\n');
        console.log('Usage: /test');
        console.log('Example: /test\n');
        break;
        
      default:
        console.log(`\n❌ No specific help available for: ${command}`);
        console.log('Use /help to see all available commands\n');
    }
  }
}