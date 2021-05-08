export type TParseHrefToQueryStringResult = {
  qty: string;
  sc: string;
  sku: string;
  size: string;
  color: string;
};

export type TParseHrefToQueryString = (href: string) => TParseHrefToQueryStringResult;
