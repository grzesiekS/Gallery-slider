{
  const getImages = document.querySelectorAll('.image');
  const getLeftButton = document.querySelector('.button.left');
  const getRightButton = document.querySelector('.button.right');

  getImages[0].classList.add('active');

  for(let i = 1; i < getImages.length; i++) {
    getImages[i].classList.add('right');
  }

  getLeftButton.addEventListener('click', event => {
    event.preventDefault();

    const getActiveImage = document.querySelector('.image.active');
    let index = 0;
    
    for(let i = 0; i < getImages.length; i++) {
      if(getImages[i] === getActiveImage) index = i;
    }

    if(index > 0) {
      getActiveImage.classList.remove('active');
      getActiveImage.classList.add('right')

      getImages[index-1].classList.remove('left')
      getImages[index-1].classList.add('active')
    }
  });

  getRightButton.addEventListener('click', event => {
    event.preventDefault();

    const getActiveImage = document.querySelector('.image.active');
    let index = 0;
    
    for(let i = 0; i < getImages.length; i++) {
      if(getImages[i] === getActiveImage) index = i;
    }

    if(index < getImages.length - 1) {
      getActiveImage.classList.remove('active');
      getActiveImage.classList.add('left')

      getImages[index+1].classList.remove('right')
      getImages[index+1].classList.add('active')
    }
  });
  
}