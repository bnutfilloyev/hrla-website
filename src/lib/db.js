import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const DATA_SOURCE_ID = process.env.NOTION_DATABASE_ID;

const STATUS_TO_NOTION = {
  'New': 'Yangi',
  'In Progress': "Ko'rib chiqilmoqda",
  'Done': 'Tasdiqlangan',
  'Rejected': 'Rad etilgan',
};

const STATUS_FROM_NOTION = {
  'Yangi': 'New',
  "Ko'rib chiqilmoqda": 'In Progress',
  'Tasdiqlangan': 'Done',
  'Rad etilgan': 'Rejected',
};

export async function getLeads() {
  const response = await notion.dataSources.query({
    data_source_id: DATA_SOURCE_ID,
    sorts: [{ timestamp: 'created_time', direction: 'descending' }],
  });

  return response.results.map(page => ({
    id: page.id,
    name: page.properties['Ism']?.title?.[0]?.plain_text || '',
    phone: page.properties['Telefon']?.phone_number || '',
    company: page.properties['Kompaniya']?.rich_text?.[0]?.plain_text || '',
    status: STATUS_FROM_NOTION[page.properties['Status']?.select?.name] || 'New',
    createdAt: page.created_time,
  }));
}

export async function createLead(name, phone, company) {
  const response = await notion.pages.create({
    parent: { data_source_id: DATA_SOURCE_ID },
    properties: {
      'Ism': { title: [{ text: { content: name } }] },
      'Telefon': { phone_number: phone },
      'Kompaniya': { rich_text: [{ text: { content: company || '' } }] },
      'Status': { select: { name: 'Yangi' } },
    },
  });
  return response.id;
}

export async function updateLeadStatus(id, status) {
  await notion.pages.update({
    page_id: id,
    properties: {
      'Status': { select: { name: STATUS_TO_NOTION[status] || 'Yangi' } },
    },
  });
  return true;
}
