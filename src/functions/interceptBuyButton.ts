import parseHrefToQueryString from '@/helpers/parseHrefToQueryString';
import createFloatingImage from '@/helpers/createFloatingImage';

// TODO: test this component after launch
const interceptBuyButton = (openCart: Function, afterAddItem: Function) => {
  const isProductPage = window.skuJson;
  if (!isProductPage) return;

  const buyButton = window.document.querySelector('.buy-button');
  if (!buyButton) return;

  const buttonWrapper = window.document.querySelector('.product-buy');
  if (!buttonWrapper) return;

  buttonWrapper.addEventListener('click', async (event) => {
    // TODO: extract this logic
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();

    const { href: hrefBuyButton } = buyButton as HTMLAnchorElement;

    const isBuyButtonValidated = hrefBuyButton.includes('sku');
    if (!isBuyButtonValidated) return;

    const { qty: quantity, sc, sku: id } = parseHrefToQueryString(hrefBuyButton);

    const size = document.querySelector('#espec_1_opcao_0 > option:checked')?.getAttribute('value');
    const color = document
      .querySelector(".sku-selector[data-dimension='Cor']:checked")
      ?.getAttribute('specification');
    const addToCartOptions = {
      quantity: Number(quantity),
      seller: '1',
      size: String(size),
      color: String(color),
      id: Number(id),
    };

    document.body.style.pointerEvents = 'none';
    openCart();

    try {
      await window.vtexjs.checkout.addToCart([addToCartOptions], null, sc);
      const itemId = addToCartOptions.id.toString();
      window?.localStorage.setItem(itemId, JSON.stringify(addToCartOptions));

      createFloatingImage(() => {
        document.body.style.pointerEvents = 'all';
      });

      setTimeout(() => {
        afterAddItem();
      }, 1000);
    } catch (errorMessage) {
      // TODO: pass it to michael + show error at minicart
      // eslint-disable-next-line
      window.alert("Não foi possível adicionar este produto");
    }
  });
};

export default interceptBuyButton;
