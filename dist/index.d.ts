#!/usr/bin/env node
/**
 * dsfr-data MCP Server
 *
 * Exposes dsfr-data skills to AI tools via the Model Context Protocol.
 * Skills are fetched dynamically from the production server on startup,
 * so the MCP always serves the latest specifications.
 *
 * Two modes:
 *   stdio (default)  - for Claude Desktop, Claude Code, Cursor, etc.
 *   http  (--http)   - for Claude.ai web connectors and remote clients
 *
 * Usage:
 *   npx dsfr-data-mcp                                  # stdio, default URL
 *   npx dsfr-data-mcp --url https://my-domain.com      # stdio, custom URL
 *   npx dsfr-data-mcp --http                            # HTTP on port 3001
 *   npx dsfr-data-mcp --http --port 8080                # HTTP on custom port
 *   npx dsfr-data-mcp --http --skills-file ./skills.json # HTTP, local file
 */
export {};
