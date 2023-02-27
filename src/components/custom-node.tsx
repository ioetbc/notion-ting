import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import CollapsibleDemo from './collapsible';

const handleStyle = { left: 10 };

function TextUpdaterNode() {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} isConnectable={true} />
      <div style={{ padding: '8px', border: '1px solid black', borderRadius: '4px'}}>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
        <CollapsibleDemo />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={true}
      />
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={true} />
    </div>
  );
}

export default TextUpdaterNode;