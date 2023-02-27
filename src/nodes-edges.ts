const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

export const nodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'input' },
    position,
  },
  {
    id: '2',
    data: { label: 'node 2' },
    position,
  },
  {
    id: '2a',
    data: { label: 'node 2a' },
    position,
  },
  {
    id: '2b',
    data: { label: 'node 2b' },
    position,
  },
  {
    id: '2c',
    data: { label: 'node 2c' },
    position,
  },
  {
    id: '2d',
    data: { label: 'node 2d' },
    position,
  },
  {
    id: '3',
    data: { label: 'node 3' },
    position,
  },
  {
    id: '4',
    data: { label: 'node 4' },
    position,
  },
  {
    id: '5',
    data: { label: 'node 5' },
    position,
  },
  {
    id: '6',
    type: 'output',
    data: { label: 'output' },
    position,
  },
  { id: '7', type: 'output', data: { label: 'output' }, position },
];

export const edges = [
  { id: '1', source: '1', target: '2', type: edgeType, animated: true },
  { id: '2', source: '1', target: '3', type: edgeType, animated: true },
  { id: '3', source: '2', target: '2a', type: edgeType, animated: true },
  { id: '4', source: '2', target: '2b', type: edgeType, animated: true },
  { id: '5', source: '2', target: '2c', type: edgeType, animated: true },
  { id: '6', source: '2c', target: '2d', type: edgeType, animated: true },
  { id: '7', source: '4', target: '5', type: edgeType, animated: true },
  { id: '8', source: '5', target: '6', type: edgeType, animated: true },
  { id: '9', source: '5', target: '7', type: edgeType, animated: true },
];