import type { VFC_Page, VFC_List } from '~/customTypes/Page';

const MemberList: VFC_List[] = [
  { value: `Beaner, George` },
  { value: `Beutman, Michael` },
  { value: `Blackburn, Orville "Butch"` },
  { value: `Blackburn, Travis` },
  { value: `Brunnet, Kevin` },
  { value: `Brunnet, William` },
  { value: `Clark, Brian` },
  { value: `Davis, Kelly` },
  { value: `Davis, Kevin` },
  { value: `Davis, Koty` },
  { value: `Dull, Adam` },
  { value: `Dull, Tyler` },
  { value: `Fleegle, Mark` },
  { value: `Gohn, Michael` },
  { value: `Greenwald, Briam` },
  { value: `Harbaugh, Brad` },
  { value: `Hillegass, William` },
  { value: `Hoffman, Cory` },
  { value: `Imler, Dawn` },
  { value: `Lemerise, Joseph` },
  { value: `Leppert, Gerald "Jerry"` },
  { value: `Martin, Troy` },
  { value: `McClain, Timothy` },
  { value: `Mickey, Ryan` },
  { value: `Miller, Ryan` },
  { value: `Moore, Zachary` },
  { value: `Ritchey, Damien` },
  { value: `Sharp, Bradlee` },
  { value: `Styer, Brian` },
  { value: `Styer, Bryson` },
  { value: `Styer, Danny` },
  { value: `Tirpak, Anthony` },
  { value: `Vitovich, Bryce` },
  { value: `Vitovich, Doug` },
  { value: `Webb, David` },
  { value: `Yothers, Josiah` },
  { value: `Yothers, Thadeus` },
];

export const Members_Data: VFC_Page = {
  elements: [
    {
      content: [{ type: `list`, values: MemberList }],
    },
  ],
};
