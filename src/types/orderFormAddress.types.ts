export namespace NOrderFormAddress {
  export interface Address {
    addressType: string;
    receiverName: string;
    addressId: string;
    isDisposable: boolean;
    postalCode: string;
    city: string;
    state: string;
    country: string;
    street: string;
    number: string;
    neighborhood: string;
    complement?: unknown;
    reference?: unknown;
    geoCoordinates: unknown[];
  }

  export interface DeliveryId {
    courierId: string;
    warehouseId: string;
    dockId: string;
    courierName: string;
    quantity: number;
    kitItemDetails: unknown[];
  }

  export interface PickupStoreInfo {
    isPickupStore: boolean;
    friendlyName?: unknown;
    address?: unknown;
    additionalInfo?: unknown;
    dockId?: unknown;
  }

  export interface Sla {
    id: string;
    deliveryChannel: string;
    name: string;
    deliveryIds: DeliveryId[];
    shippingEstimate: string;
    shippingEstimateDate?: unknown;
    lockTTL?: unknown;
    availableDeliveryWindows: unknown[];
    deliveryWindow?: unknown;
    price: number;
    listPrice: number;
    tax: number;
    pickupStoreInfo: PickupStoreInfo;
    pickupPointId?: unknown;
    pickupDistance: number;
    polygonName?: unknown;
    transitTime: string;
  }

  export interface DeliveryChannel {
    id: string;
  }

  export interface LogisticsInfo {
    itemIndex: number;
    selectedSla: string;
    selectedDeliveryChannel: string;
    addressId: string;
    slas: Sla[];
    shipsTo: string[];
    itemId: string;
    deliveryChannels: DeliveryChannel[];
  }

  export interface SelectedAddress {
    addressType: string;
    receiverName: string;
    addressId: string;
    isDisposable: boolean;
    postalCode: string;
    city: string;
    state: string;
    country: string;
    street: string;
    number: string;
    neighborhood: string;
    complement?: unknown;
    reference?: unknown;
    geoCoordinates: unknown[];
  }

  export interface AvailableAddress {
    addressType: string;
    receiverName: string;
    addressId: string;
    isDisposable: boolean;
    postalCode: string;
    city: string;
    state: string;
    country: string;
    street: string;
    number: string;
    neighborhood: string;
    complement?: unknown;
    reference?: unknown;
    geoCoordinates: unknown[];
  }

  export interface RootObject {
    address: Address;
    logisticsInfo: LogisticsInfo[];
    selectedAddresses: SelectedAddress[];
    availableAddresses: AvailableAddress[];
    pickupPoints: unknown[];
  }
}
