import { TParseHrefToQueryString, TParseHrefToQueryStringResult } from './types';

const parseHrefToQueryString: TParseHrefToQueryString = (href: string) => {
  const queryString = href.split(/\?/)[1];

  const parsedQueryString = queryString.split(/&/).reduce((accumulator, currentString) => {
    const [key, value] = currentString.split(/=/);
    return {
      [key]: value,
      ...accumulator,
    };
  }, {});

  return parsedQueryString as TParseHrefToQueryStringResult;
};

export default parseHrefToQueryString;
