import type { NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { AppNode } from './types';

export const initialNodes: AppNode[] = [
  { id: 'mevn', type: 'input', position: { x: 0, y: 0 }, data: { label: 'MEVN' } },
  
  {
    id: 'organization',
    position: { x: -200, y: 100 },
    data: { label: 'Organization' },
  },
  { id: 'business', position: { x: 100, y: 100 }, data: { label: 'Business' } },
  
  { id: 'iteration', position: { x: -400, y: 200 }, data: { label: 'Iteration' } },
  { id: 'company_regulation', position: { x: -150, y: 200 }, data: { label: 'Company Regulation' } },
  { id: 'machinery', position: { x: 50, y: 200 }, data: { label: 'Machinery' } },
  { id: 'reuse', position: { x: 250, y: 200 }, data: { label: 'Reuse' } },
  { id: 'oikura', position: { x: 450, y: 200 }, data: { label: 'Oikura' } },
  
  { id: 'kickoff_1', position: { x: -400, y: 300 }, data: { label: 'KICKOFF I' } },
  { id: 'kickoff_2', position: { x: -400, y: 350 }, data: { label: 'KICKOFF II' } },
  { id: 'kickoff_3', position: { x: -400, y: 400 }, data: { label: 'KICKOFF III' } },
  { id: 'kickoff_4', position: { x: -400, y: 450 }, data: { label: 'KICKOFF IV' } },
  { id: 'kickoff_5', position: { x: -400, y: 500 }, data: { label: 'KICKOFF V' } },
  { id: 'kickoff_6', position: { x: -400, y: 550 }, data: { label: 'KICKOFF VI' } },
  { id: 'kickoff_7', position: { x: -400, y: 600 }, data: { label: 'KICKOFF VII' } },
  { id: 'kickoff_8', position: { x: -400, y: 650 }, data: { label: 'KICKOFF VIII' } },
  { id: 'kickoff_9', position: { x: -400, y: 700 }, data: { label: 'KICKOFF IX' } },
  { id: 'kickoff_10', position: { x: -400, y: 750 }, data: { label: 'KICKOFF X' } },

  { id: 'reuse_business_flow', position: { x: 150, y: 300 }, data: { label: 'Business Flow' } },
  { id: 'reuse_projects', position: { x: 350, y: 300 }, data: { label: 'Projects' } },

  { id: 'osm', position: { x: 350, y: 400 }, data: { label: 'OSM' } },
  { id: 'mmt', position: { x: 510, y: 400 }, data: { label: 'MMT' } },
  { id: 'ratool', position: { x: 350, y: 450 }, data: { label: 'RATOOL' } },
  { id: 'cmt', position: { x: 510, y: 450 }, data: { label: 'CMT' } },
  { id: 'fs_daily_report', position: { x: 350, y: 500 }, data: { label: 'FS Daily Report' } },
  { id: 'autocall', position: { x: 190, y: 400 }, data: { label: 'Autocall' } },
  { id: 'm_anken', position: { x: 190, y: 450 }, data: { label: 'M-Anken' } },
];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
