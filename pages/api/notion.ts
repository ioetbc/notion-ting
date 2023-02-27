import { Client } from "@notionhq/client";

export default async function handler(req: any, res: any) {
  try {
const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const response = await notion.search({
    filter: {
      value: 'page',
      property: 'object'
    },
    sort: {
      direction: 'ascending',
      timestamp: 'last_edited_time'
    },
  })
  const notionData = response.results.map((page: any) => ({
    id: page.id,
    title: page?.properties?.title?.title[0].plain_text
  }))
  console.log(notionData)

    res.status(200).send({ notionData })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}