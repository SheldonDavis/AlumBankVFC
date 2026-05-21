import type { VFC_Page, VFC_List } from '~/customTypes/Page';

const AdminOfficers: VFC_List[] = [
  {
    label: `President`,
    value: `Gerald Leppert`,
  },
  {
    label: `Vice President`,
    value: `Douglas Vitovich`,
  },
  {
    label: `Treasurer `,
    value: `Dawn Imler`,
  },
  {
    label: `Secretary`,
    value: `Tyler Dull`,
  },
  {
    label: `Chaplain`,
    value: `Pastor Kevin Davis`,
  },
];
const FireLineOfficers: VFC_List[] = [
  {
    label: `Chief`,
    value: `Ryan Mickey`,
  },
  {
    label: `Deputy Chief`,
    value: `Bradlee Sharp`,
  },
  {
    label: `1st Assistant Chief`,
    value: `Brad Harbaugh`,
  },
  {
    label: `2nd Assistant Chief`,
    value: `Travis Blackburn`,
  },
  {
    label: `3rd Assistant Chief`,
    value: `Brian Greenwald`,
  },
  {
    label: `Safety Officer`,
    value: `Gerald Lappert`,
  },
  {
    label: `Safety Officer 2`,
    value: `George Beaner`,
  },
  {
    label: `Chief Engineer`,
    value: `Butch Blackburn`,
  },
  {
    label: `1st Assistant Engineer`,
    value: `Kelly Davis`,
  },
  {
    label: `2nd Assistant Engineer`,
    value: `Thad Yothers`,
  },
];

export const Officers_Data: VFC_Page = {
  elements: [
    {
      content: [
        {
          type: `list`,
          label: `Administrative Officers`,
          values: AdminOfficers,
        },
      ],
    },
    {
      content: [
        {
          type: `list`,
          label: `2026 Fire Line Officers`,
          values: FireLineOfficers,
        },
      ],
    },
  ],
};
