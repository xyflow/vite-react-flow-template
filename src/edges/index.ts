import { type Edge, type EdgeTypes } from "reactflow";
const edgeType = 'smoothstep';

export const initialEdges = [
    {
      id: 'float-machine-1-edge',
      source: 'float-machine-1',
      type: edgeType,
      target: 'float-tank-1',
    },
    {
      id: 'float-machine-2-edge',
      source: 'float-machine-2',
      type: edgeType,
      target: 'float-tank-1',
    },
    {
      id: 'float-tank-1-edge',
      source: 'float-tank-1',
      type: edgeType,
      target: 'float-tank-2',
    },
    {
      id: 'float-tank-2-edge',
      source: 'float-tank-2',
      type: edgeType,
      target: 'float-tank-3',
    },
    {
      id: 'float-tank-3-edge',
      source: 'float-tank-3',
      type: edgeType,
      target: 'float-tank-4',
    },
    {
      id: 'float-tank-4-edge',
      source: 'float-tank-4',
      type: edgeType,
      target: 'float-tank-5',
    },
    {
      id: 'float-tank-5-edge',
      source: 'float-tank-5',
      type: edgeType,
      target: 'float-tank-6',
    },
       {
      id: 'float-tank-5-to-4-edge',
      source: 'float-tank-5',
      // type: edgeType,
      target: 'float-tank-4',
    },
    {
      id: 'float-tank-6-to-5-edge',
      source: 'float-tank-6',
      type: edgeType,
      target: 'float-tank-5',
    },
    {
      id: 'float-tank-8-to-7-edge',
      source: 'float-tank-8',
      type: edgeType,
      target: 'float-tank-7',
    },
    {
      id: 'float-tank-9-to-7-edge',
      source: 'float-tank-9',
      type: edgeType,
      target: 'float-tank-7',
    },
    {
      id: 'float-tank-2-to-9-edge',
      source: 'float-tank-2',
      type: 'default',
      target: 'float-tank-9',
    },
    {
      id: 'float-tank-1-to-8-edge',
      source: 'float-tank-1',
      type: 'default',
      target: 'float-tank-8',
    },
    {
      id: 'float-tank-10-to-9-edge',
      source: 'float-tank-10',
      type: edgeType,
      target: 'float-tank-9',
    },
    {
      id: 'float-tank-3-to-10-edge',
      source: 'float-tank-3',
      type: 'default',
      target: 'float-tank-10',
    },
    {
      id: 'float-tank-3-to-1-2-sump',
      source: 'float-tank-3',
      type: 'default',
      target: 'float-sump-2',
    }
  ] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!\
} satisfies EdgeTypes;
