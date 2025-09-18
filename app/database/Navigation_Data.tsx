import type { VFC_Data } from '~/customTypes/Page';

const NavigationItem_Home: VFC_Data = {
  type: `t`,
  label: `Home`,
  link: `/`,
};

const NavigationItem_WhoWeAre: VFC_Data = {
  type: 'l',
  label: 'Who We Are',
  values: [
    //* Example sub-navigation items
    //* {
    //*     value:string;
    //*     link?:string;
    //*     target?:`_blank`|`_self`|`_parent`|`_top`;
    //* }
    {
      value: `About Us`,
      link: `/who-we-are/about-us`,
    },
    {
      value: `History`,
      link: `/who-we-are/history`,
    },
    {
      value: `Apparatus`,
      link: `/who-we-are/apparatus`,
    },
    {
      value: `Knox Box Info`,
      link: `/who-we-are/knox-box`,
    },
  ],
  link: `/who-we-are/about-us`,
};

const NavigationItem_Membership: VFC_Data = {
  type: `l`,
  label: `Membership`,
  values: [
    //* Example sub-navigation items
    //* {
    //*     value:string;
    //*     link?:string;
    //*     target?:`_blank`|`_self`|`_parent`|`_top`;
    //* }
    {
      value: `Officers`,
      link: `/membership/officers`,
    },
    {
      value: `Members`,
      link: `/membership/members`,
    },
    {
      value: `Auxiliary Members`,
      link: `/membership/auxiliary-members`,
    },
    {
      value: `Becoming a Member`,
      link: `/membership/become-a-member`,
    },
  ],
  link: `/membership/become-a-member`,
};

const NavigationItem_Activities: VFC_Data = {
  type: `l`,
  label: `Activities`,
  values: [
    //* Example sub-navigation items
    //* {
    //*     value:string;
    //*     link?:string;
    //*     target?:`_blank`|`_self`|`_parent`|`_top`;
    //* }
    {
      value: `Auctions`,
      link: `/activities/auctions`,
    },
    {
      value: `Car Show`,
      link: `/activities/car-show`,
    },
  ],
  link: `/activities/auctions`,
};

const NavigationItem_ContactsRentals: VFC_Data = {
  type: `l`,
  label: `Contact & Rentals`,
  values: [
    //* Example sub-navigation items
    //* {
    //*     value:string;
    //*     link?:string;
    //*     target?:`_blank`|`_self`|`_parent`|`_top`;
    //* }
    {
      value: `Contact Us`,
      link: `/contacts-rentals/contact-us`,
    },
    {
      value: `Fire Hall Rentals`,
      link: `/contacts-rentals/fire-hall-rentals`,
    },
  ],
  link: `/contacts-rentals/contact-us`,
};

export const Navigation_Data: VFC_Data[] = [
  NavigationItem_Home,
  NavigationItem_WhoWeAre,
  NavigationItem_Membership,
  NavigationItem_Activities,
  NavigationItem_ContactsRentals,
];
