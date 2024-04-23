import { Position, type Node, type NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";
const style = { width: 75 }
export const initialNodes = [
  {
    id: 'float-machine-1',
    sourcePosition: Position.Right,
    type: 'float-machine-1',
    data: { label: 'float-machine-1' },
    position: { x: 0, y: 0 },
    style,
  },
  {
    id: 'float-machine-2',
    sourcePosition: Position.Right,
    type: 'float-machine-2',
    data: { label: 'float-machine-2' },
    position: { x: 0, y: 150 },
    style,
  },
  {
    id: 'float-tank-1',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    type: 'float-tank-1',
    data: { label: 'float-tank-1' },
    position: { x: 150, y: 75 },
    style,
  },
  {
    id: 'float-tank-2',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    type: 'float-tank-2',
    data: { label: 'float-tank-2' },
    position: { x: 300, y: 75},
    style,
  },
  {
    id: 'float-tank-3',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    type: 'float-tank-3',
    data: { label: 'float-tank-3' },
    position: { x: 450, y: 75 },
    style,
  }
  ,
  {
    id: 'float-tank-4',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    type: 'float-tank-4',
    data: { label: 'float-tank-4' },
    position: { x: 600, y: 75 },
    style,
  }
  ,
  {
    id: 'float-tank-5',
    sourcePosition: Position.Right,
    selectable: true,
    targetPosition: Position.Left,
    type: 'float-tank-5',
    data: { label: 'float-tank-5' },
    position: { x: 750, y: 75 },
    style,
  }
  ,
  {
    id: 'float-tank-6',
    targetPosition: Position.Left,
    sourcePosition: Position.Top,
    type: 'float-tank-6',
    data: { label: 'float-tank-6' },
    position: { x: 900, y: 75 },
    style,
  },
  {
    id: 'float-tank-7',
    targetPosition: Position.Bottom,
    sourcePosition: Position.Bottom,
    type: 'float-tank-7',
    data: { label: 'float-tank-7' },
    position: { x: 150, y: 200 },
    style,
  },
  {
    id: 'float-tank-8',
    type: 'float-tank-8',
    data: { label: 'float-tank-8' },
    position: { x: 300, y: 200 },
    style,
  },
  {
    id: 'float-tank-9',
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom,
    type: 'float-tank-9',
    data: { label: 'float-tank-9' },
    position: { x: 450, y: 200 },
    style,
  },
  {
    id: 'float-tank-10',
    type: 'float-tank-10',
    data: { label: 'float-tank-10' },
    position: { x: 600, y: 200 },
    style,
  },
  {
    id: 'float-sump-1',
    sourcePosition: Position.Bottom,
    targetPosition: Position.Bottom,
    type: 'float-sump-1',
    data: { label: 'float-sump-1' },
    position: { x: 800, y: 200 },
    style,
  },
  {
    id: 'float-sump-2',
    type: 'float-sump-2',
    sourcePosition: Position.Top,
    targetPosition: Position.Top,
    data: { label: 'float-sump-2' },
    position: { x: 800, y: 250 },
    style,
  }
] satisfies Node[];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
