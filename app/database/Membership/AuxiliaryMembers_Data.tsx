import type { VFC_Page, VFC_Data } from '~/customTypes/Page';

const AuxMembers_OfficerList: VFC_Data = {
  type: `list`,
  label: `Officers`,
  values: [
    {
      label: `President`,
      value: `Cathy Palmateer`,
    },
    {
      label: `Vice President`,
      value: `Tracy Kasik`,
    },
    {
      label: `Secretary`,
      value: `Bobbie Brubaker`,
    },
    {
      label: `Treasurer`,
      value: `Mary Lou Smith`,
    },
  ],
};

const AuxMembers_MembersList: VFC_Data = {
  type: `list`,
  label: `Members`,
  values: [
    {
      value: `Betty Barefoot`,
    },
    {
      value: `Patsy Bowser`,
    },
    {
      value: `Bobbi Brubaker`,
    },
    {
      value: `Minnie Clark`,
    },
    {
      value: `Nancy Dull`,
    },
    {
      value: `Carol Foor`,
    },
    {
      value: `Tracy Kasik`,
    },
    {
      value: `Jan May`,
    },
    {
      value: `Meghann Miller`,
    },
    {
      value: `Diane Otto`,
    },
    {
      value: `Cathy Palmateer`,
    },
    {
      value: `Cathy Wilson- Price`,
    },
    {
      value: `Mary Scott`,
    },
    {
      value: `Virginia Scott`,
    },
    {
      value: `Bonnie Strayer`,
    },
    {
      value: `Marie Wentz`,
    },
    {
      value: `Mary Lou Smith`,
    },
    {
      value: `Betty Whetstone`,
    },
  ],
};

export const AuxiliaryMembers_Data: VFC_Page = {
  elements: [
    {
      content: [AuxMembers_OfficerList],
    },
    {
      content: [AuxMembers_MembersList],
    },
  ],
};
