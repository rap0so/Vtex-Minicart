// TODO: test it
const formatPrice = (value: number) => (value / 100).toLocaleString('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

export default formatPrice;
