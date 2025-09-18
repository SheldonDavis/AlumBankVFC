import type { VFC_Page } from '~/customTypes/Page';

export const ContactUs_Data: VFC_Page = {
  elements: [
    {
      content: [
        {
          type: `list`,
          value: `Alum Bank Community Fire Company<br>P.O. Box 46<br>6738 King St Clair Road<br>Alum Bank, PA 15521<br><strong>Phone:</strong> 814-839-2490<br><strong>Fax:</strong> 814-839-2076<br><strong>Email:</strong> <a href='mailto:alumbankvfc@yahoo.com'>alumbankvfc@yahoo.com</a>`,
          values: [
            {
              value: `Alum Bank Community Fire Company<br>P.O. Box 46<br>6738 King St Clair Road<br>Alum Bank, PA 15521`,
              RichText: true,
            },
            {
              label: `Phone`,
              value: `814-839-2490`,
            },
            {
              label: `Fax`,
              value: `814-839-2076`,
            },
            {
              label: `Email`,
              value: `<a href='mailto:alumbankvfc@yahoo.com'>alumbankvfc@yahoo.com</a>`,
              RichText: true,
            },
          ],
        },
      ],
    },
  ],
};
