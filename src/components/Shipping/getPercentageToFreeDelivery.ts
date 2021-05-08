export const FREE_SHIPPING_VALUE = 24999;
const BASE_PERCENTAGE = 100;

const getPercentageToFreeDelivery = (totalCartValue: number) => {
  const percentValue = (totalCartValue * BASE_PERCENTAGE) / FREE_SHIPPING_VALUE;
  return percentValue >= BASE_PERCENTAGE ? BASE_PERCENTAGE : percentValue;
};

export default getPercentageToFreeDelivery;
