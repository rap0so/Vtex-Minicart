export namespace NOrderFormItems {
  export interface AdditionalInfo {
    brandName: string;
    brandId: string;
    offeringInfo?: unknown;
    offeringType?: unknown;
    offeringTypeId?: unknown;
  }

  export interface ProductCategories {
    [key: string]: string;
  }

  export interface RootObject {
    additionalInfo: AdditionalInfo;
    assemblies: unknown[];
    attachmentOfferings: unknown[];
    attachments: unknown[];
    availability: string;
    bundleItems: unknown[];
    components: unknown[];
    detailUrl: string;
    ean: string;
    id: string;
    imageUrl: string;
    isGift: boolean;
    listPrice: number;
    manualPrice?: unknown;
    manualPriceAppliedBy?: unknown;
    manufacturerCode?: unknown;
    measurementUnit: string;
    modalType?: unknown;
    name: string;
    offerings: unknown[];
    parentAssemblyBinding?: unknown;
    parentItemIndex?: unknown;
    preSaleDate?: unknown;
    price: number;
    priceTags: unknown[];
    priceValidUntil: string;
    productCategories: ProductCategories;
    productCategoryIds: string;
    productId: string;
    productRefId: string;
    quantity: number;
    refId: string;
    rewardValue: number;
    seller: string;
    sellerChain: string[];
    sellingPrice: number;
    skuName: string;
    tax: number;
    uniqueId: string;
    color: string;
    size: string;
    unitMultiplier: number;
  }
}
