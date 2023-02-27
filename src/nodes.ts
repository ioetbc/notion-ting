import { Client } from "@notionhq/client";
import { Node } from "reactflow";
import {NotionData} from './utils/notion-data'

export const Nodes = () => {

  // const transform = NotionData.results.map((block: any, index: number) => ({
  //   id: block.id,
  //   data: { label: block?.child_page?.title || block?.link_to_page?.page_id || 'No title' },
  //   position: { x: 100 * index, y: 100 * index },
  // }));

  const parents = NotionData.results.filter((block: any) => block?.parent?.workspace).map((parent, index) => ({
    id: parent.id,
    data: { label: `${parent.icon?.emoji} ${parent?.properties?.title?.title[0].plain_text}` },
    position: { x: 100 * index, y: 100 * index },
  }))

  const children = NotionData.results.filter((block: any) => block?.parent?.page_id).map((child, index) => ({
    id: child.id,
    data: { label: `${child.icon?.emoji} ${child?.properties?.title?.title[0].plain_text}` },
    position: { x: 100 * index, y: 100 * index },
    parentNode: child?.parent?.page_id,
    extent: 'parent',
  }))

  console.log('children', children)

  return parents
  // return [
  //   {
  //     id: '230f8409-8a3e-4ca4-99b0-5fc5ec5cb8cf',
  //     data: { label: 'What do I want from rubberducker' },
  //     position: { x: 400, y: 100 },
  //   },
  //   {
  //     id: 'b9e7fb2c-c0e5-451b-b5c5-21a5ffdbb17f',
  //     data: { label: 'website, pwa, desktop app or mobile app'},
  //     position: { x: 100, y: 300 },
  //   },
  //   { id: 'cbcaa818-01a7-4339-b9d4-fd40f23db7a8',
  //     data: { label: 'next steps' },
  //     position: { x: 200, y: 500 },
  //   },
  //   { id: '19e0900b-0a32-4726-a8e7-441fe03d9c1b',
  //     data: { label: 'Stock cubes' },
  //     position: { x: 300, y: 700 },
  //   },
  // ]

  // return [
  //   { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
  //   {
  //     id: 'node-2',
  //     type: 'output',
  //     targetPosition: 'top',
  //     position: { x: 0, y: 200 },
  //     data: { label: 'node 2' },
  //   },
  //   {
  //     id: 'node-3',
  //     type: 'output',
  //     targetPosition: 'top',
  //     position: { x: 200, y: 200 },
  //     data: { label: 'node 3' },
  //   },
  // ] as Node[];
}


