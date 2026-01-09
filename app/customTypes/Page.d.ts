type VFC_Page={
  elements:VFC_Block[];
}

type VFC_Block={
  content:VFC_Data[]
}

type VFC_Data={
  type:`title`|`t`|`paragraph`|`p`|`image`|`i`|`list`|`l`| null;
  RichText?:boolean;
  value?:string;
  values?:VFC_List[];
  label?:string;
  link?:string;
  target?:`_blank`|`_self`|`_parent`|`_top`;
  alt?:string;
  css?:string;
}

type VFC_List={
  value:string;
  label?:string;
  link?:string;
  target?:`_blank`|`_self`|`_parent`|`_top`;
  RichText?:boolean;
}


export type { VFC_Page, VFC_Block, VFC_Data, VFC_List };