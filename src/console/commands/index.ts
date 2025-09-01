/**
 * TDD-Compliant Command Registry
 * Only includes tested components following TDD principles
 */

// Export base command types
export { BaseCommand, ICommand, executeCommand } from './base-command';
export { StandardizedCommandRegistry } from './command-registry';

// Export tested commands
export { NaturalLanguageProcessor } from './natural-language';
export { ClaudeCodeIntegration } from './claude-code-integration';
