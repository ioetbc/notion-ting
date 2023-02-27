import { useEffect, useMemo } from "react";

import ReactFlow, { Background, BackgroundVariant, Controls, MiniMap, Position } from "reactflow";
import useStore from "../src/store";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import TextUpdaterNode from "src/components/custom-node";
import { Client } from "@notionhq/client";


const nodeTypes = { textUpdater: TextUpdaterNode };

// export async function getStaticProps() {
  // const notion = new Client({ auth: process.env.NOTION_API_KEY });

  // const response = await notion.search({
  //   filter: {
  //     value: 'page',
  //     property: 'object'
  //   },
  //   sort: {
  //     direction: 'ascending',
  //     timestamp: 'last_edited_time'
  //   },
  // })
  // const notionData = response.results.map((page: any) => ({
  //   id: page.id,
  //   title: page?.properties?.title?.title[0].plain_text
  // }))
  // console.log(notionData)
  // return { props: {notionData} };
// }

export default function Index() {
  // The store is defined in src/store.ts
  const {
    liveblocks: { enterRoom, leaveRoom, isStorageLoading },
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore();

  const roomId = useOverrideRoomId("nextjs-flow-chart");

  // Enter the Liveblocks room on load
  useEffect(() => {
    enterRoom(roomId);
    return () => leaveRoom(roomId);
  }, [enterRoom, leaveRoom]);

  if (isStorageLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <img src="https://liveblocks.io/loading.svg" alt="Loading" />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <ReactFlow
      nodes={nodes}
//         nodes={[
//   { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
//   {
//     id: 'node-2',
//     type: 'output',
//     targetPosition: Position.Top,
//     position: { x: 0, y: 200 },
//     data: { label: 'node 2' },
//   },
//   {
//     id: 'node-3',
//     type: 'output',
//  targetPosition: Position.Top,
//     position: { x: 200, y: 200 },
//     data: { label: 'node 3' },
//   },
// ]}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
      >
        <MiniMap pannable zoomable />
        <Controls />
        <Background variant={BackgroundVariant.Cross} />
      </ReactFlow>
    </div>
  );
}
/**
 * This function is used when deploying an example on liveblocks.io.
 * You can ignore it completely if you run the example locally.
 */
function useOverrideRoomId(roomId: string) {
  const { query } = useRouter();
  const overrideRoomId = useMemo(() => {
    return query?.roomId ? `${roomId}-${query.roomId}` : roomId;
  }, [query, roomId]);

  return overrideRoomId;
}
