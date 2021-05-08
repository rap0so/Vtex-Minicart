const createFloatingImage = (afterAddItem?: Function) => {
  const currentProductImage = document.getElementById('image-main');
  if (!currentProductImage) {
    return afterAddItem?.();
  }

  const floatingImage = currentProductImage.cloneNode(true) as HTMLElement;
  floatingImage.setAttribute('id', '');
  floatingImage.className = 'float-image';

  document.body.appendChild(floatingImage);

  floatingImage.classList.add('floating');

  return setTimeout(() => {
    floatingImage.remove();
    afterAddItem?.();
  }, 4000);
};

export default createFloatingImage;
