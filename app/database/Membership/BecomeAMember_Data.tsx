import type { VFC_Page } from '~/customTypes/Page';

export const BecomeAMember_Data: VFC_Page = {
  elements: [
    {
      content: [
        {
          type: `paragraph`,
          value: `If you are interested in becoming a member <a href='https://www.emailmeform.com/builder/form/Ofq04UZ9Laj'>click here to apply online</a> or download the pdf application <a href='/public/Application-for-membership.pdf'>here</a>.`,
          RichText: true,
        },
      ],
    },
    {
      content: [
        {
          type: `paragraph`,
          value: `Additional Information Required For Membership: Background Check Forms Below`,
        },
        {
          type: `paragraph`,
          value: `PA Child Abuse History Clearance`,
          link: `https://www.compass.state.pa.us/cwis/public/home`,
          target: `_blank`,
        },
        {
          type: `paragraph`,
          value: `The Pennsylvania Criminal History Clearance`,
          link: `https://epatch.state.pa.us/Home.jsp`,
          target: `_blank`,
        },
      ],
    },
  ],
};
