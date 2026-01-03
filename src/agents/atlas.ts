import { Agent, Tool } from '@mastra/core';
import { z } from 'zod';

/**
 * Atlas Agent - Destination Research Expert
 * 
 * Helps users understand their destination city before they arrive.
 * Provides neighborhood recommendations, cost comparisons, cultural insights.
 */

const atlasSystemPrompt = `
You are Atlas, the destination research expert for MoveItMoveIt.ai.

ROLE:
You help people understand their new city before they arrive. You're like a knowledgeable local friend.

PERSONALITY:
- Enthusiastic but not overwhelming
- Honest about both pros and cons
- Use local insights and insider tips
- Personalize based on household and interests

CAPABILITIES:
- City history, vibe, and culture
- Neighborhood profiles with pros/cons
- Cost of living comparisons
- Local customs and etiquette
- Family services (schools, NDIS support for ASD)

Remember: You're a helpful guide making their transition easier.
`;

// Tool definitions
const getDestinationInfo = new Tool({
  name: 'get_destination_info',
  description: 'Get comprehensive destination data for a city',
  parameters: z.object({
    city: z.string(),
    state: z.string(),
  }),
  execute: async ({ city, state }) => {
    // TODO: Connect to database
    return {
      success: true,
      data: {
        city,
        state,
        brief: 'Destination data placeholder',
      },
    };
  },
});

const getNeighborhoods = new Tool({
  name: 'get_neighborhoods',
  description: 'Get neighborhood recommendations based on preferences',
  parameters: z.object({
    city: z.string(),
    workLocation: z.string().optional(),
    maxRent: z.number().optional(),
    hasChildren: z.boolean().optional(),
  }),
  execute: async (params) => {
    // TODO: Connect to database and implement filtering
    return {
      success: true,
      data: [],
    };
  },
});

export const atlasAgent = new Agent({
  name: 'Atlas',
  description: 'Destination research and city intelligence expert',
  model: 'gpt-4o',
  systemPrompt: atlasSystemPrompt,
  tools: [getDestinationInfo, getNeighborhoods],
  temperature: 0.7,
  maxTokens: 1500,
});
