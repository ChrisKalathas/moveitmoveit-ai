import { Mastra } from '@mastra/core';
import { atlasAgent } from '@/agents/atlas';
import { connectorAgent } from '@/agents/connector';
import { medicAgent } from '@/agents/medic';

/**
 * Mastra Configuration
 * Multi-agent orchestration for MoveItMoveIt.ai
 */

export const mastra = new Mastra({
  agents: {
    atlas: atlasAgent,
    connector: connectorAgent,
    medic: medicAgent,
  },
});

// Export individual agents for direct access
export { atlasAgent, connectorAgent, medicAgent };

// Export types
export type MastraInstance = typeof mastra;
export type AgentType = 'atlas' | 'connector' | 'medic';
