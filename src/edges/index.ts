import type { Edge, EdgeTypes } from '@xyflow/react';

export const initialEdges: Edge[] = [
  { id: 'mevn->organization', source: 'mevn', target: 'organization', animated: true },
  { id: 'mevn->business', source: 'mevn', target: 'business', animated: true },
  { id: 'organization->iteration', source: 'organization', target: 'iteration', animated: true },
  { id: 'organization->company_regulation', source: 'organization', target: 'company_regulation', animated: true },
  { id: 'business->machinery', source: 'business', target: 'machinery', animated: true },
  { id: 'business->reuse', source: 'business', target: 'reuse', animated: true },
  { id: 'business->oikura', source: 'business', target: 'oikura', animated: true },


  { id: 'iteration->kickoff_1', source: 'iteration', target: 'kickoff_1', animated: true },
  { id: 'kickoff_1->kickoff_2', source: 'kickoff_1', target: 'kickoff_2', animated: true },
  { id: 'kickoff_2->kickoff_3', source: 'kickoff_2', target: 'kickoff_3', animated: true },
  { id: 'kickoff_3->kickoff_4', source: 'kickoff_3', target: 'kickoff_4', animated: true },
  { id: 'kickoff_4->kickoff_5', source: 'kickoff_4', target: 'kickoff_5', animated: true },
  { id: 'kickoff_5->kickoff_6', source: 'kickoff_5', target: 'kickoff_6', animated: true },
  { id: 'kickoff_6->kickoff_7', source: 'kickoff_6', target: 'kickoff_7', animated: true },
  { id: 'kickoff_7->kickoff_8', source: 'kickoff_7', target: 'kickoff_8', animated: true },
  { id: 'kickoff_8->kickoff_9', source: 'kickoff_8', target: 'kickoff_9', animated: true },
  { id: 'kickoff_9->kickoff_10', source: 'kickoff_9', target: 'kickoff_10', animated: true },
  { id: 'reuse->reuse_business_flow', source: 'reuse', target: 'reuse_business_flow', animated: true },
  { id: 'reuse->reuse_projects', source: 'reuse', target: 'reuse_projects', animated: true },

  { id: 'reuse_projects->autocall', source: 'reuse_projects', target: 'autocall', animated: true },
  { id: 'reuse_projects->osm', source: 'reuse_projects', target: 'osm', animated: true },
  { id: 'reuse_projects->mmt', source: 'reuse_projects', target: 'mmt', animated: true },
];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
