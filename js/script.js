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
      getActiveImage.classList.add('slideRightReverse')
      getActiveImage.classList.add('right')

      getImages[index-1].classList.add('slideLeftReverse')

      window.setTimeout(() => {
        getImages[index-1].classList.remove('left')
        getImages[index-1].classList.add('active')

        getActiveImage.classList.remove('slideRightReverse')
        getImages[index-1].classList.remove('slideLeftReverse')
      },1000)
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
      getActiveImage.classList.add('slideLeft')
      getActiveImage.classList.add('left')

      getImages[index+1].classList.add('slideRight')

      window.setTimeout(() => {
        getImages[index+1].classList.remove('right')
        getImages[index+1].classList.add('active')

        getActiveImage.classList.remove('slideLeft')
        getImages[index+1].classList.remove('slideRight')
      },1000)
      
    }
  });
  
}