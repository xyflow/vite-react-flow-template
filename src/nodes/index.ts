import { Position, type Node, type NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";

export const initialNodes = [
  {
    id: 'horizontal-1',
    sourcePosition: Position.Right,
    type: 'input',
    data: { label: 'Input' },
    position: { x: 0, y: 80 },
  },
  {
    id: 'horizontal-2',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: 'A Node' },
    position: { x: 250, y: 0 },
  },
  {
    id: 'horizontal-3',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: 'Node 3' },
    position: { x: 250, y: 160 },
  },
  {
    id: 'horizontal-4',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: 'Node 4' },
    position: { x: 500, y: 0 },
  },
  {
    id: 'horizontal-5',
    sourcePosition: Position.Left,
    targetPosition: Position.Bottom,
    data: { label: 'Node 5' },
    position: { x: 500, y: 100 },
  },
  {
    id: 'horizontal-6',
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
    data: { label: 'Node 6' },
    position: { x: 500, y: 230 },
  },
  {
    id: 'horizontal-7',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: 'Node 7' },
    position: { x: 750, y: 50 },
  },
  {
    id: 'horizontal-8',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: 'Node 8' },
    position: { x: 750, y: 300 },
  },
] satisfies Node[];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
