import type { VFC_Page, VFC_List } from '~/customTypes/Page';

const AdminOfficers: VFC_List[] = [
  {
    label: `President`,
    value: `Travis Blackburn`,
  },
  {
    label: `Vice President`,
    value: `Douglas Vitovich`,
  },
  {
    label: `Treasurer `,
    value: `Kelly Davis`,
  },
  {
    label: `Secretary`,
    value: `Dawn Imler`,
  },
  {
    label: `Chaplain`,
    value: `Pastor Kevin Davis`,
  },
];
const FireLaneOfficers: VFC_List[] = [
  {
    label: `Chief`,
    value: `Thad Yothers`,
  },
  {
    label: `Deputy Chief`,
    value: `Ryan Mickey`,
  },
  {
    label: `1st Assistant Chief`,
    value: `Bradlee Sharp`,
  },
  {
    label: `2nd Assistant Chief`,
    value: `Jerry Leppert`,
  },
  {
    label: `3rd Assistant Chief`,
    value: `David Webb`,
  },
  {
    label: `Safety Officer`,
    value: `Kelly Davis`,
  },
  {
    label: `Chief Engineer`,
    value: `Butch Blackburn`,
  },
  {
    label: `1st Assistant Engineer`,
    value: `Bryce Vitovich`,
  },
  {
    label: `2nd Assistant Engineer`,
    value: `Brian Greenwald`,
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
          label: `2025 Fire Line Officers`,
          values: FireLaneOfficers,
        },
      ],
    },
  ],
};
