{
  const getImages = document.querySelectorAll('.image');
  const getLeftButton = document.querySelector('.button.left');
  const getRightButton = document.querySelector('.button.right');

  const handleLeftSlide = () => {
    const getActiveImage = document.querySelector('.image.active');
    let index = 0;
    
    for(let i = 0; i < getImages.length; i++) {
      if(getImages[i] === getActiveImage) index = i;
    }

    if(index > 0) {
      getImages[index-1].classList.remove('left');

      const getLeftImages = document.querySelectorAll('.image.left');
      const getRightImages = document.querySelectorAll('.image.right');

      getActiveImage.classList.remove('active');
      getActiveImage.classList.add('slideRightReverse');

      getImages[index-1].classList.add('slideLeftReverse');
      

      for(let left of getLeftImages) {
        left.classList.add('slideOffLeftReverse');
      }

      for(let right of getRightImages) {
        right.classList.add('slideOffRightReverse');
      }

      window.setTimeout(() => {
        getImages[index-1].classList.add('active');
        getActiveImage.classList.add('right');

        for(let left of getLeftImages) {
          left.classList.remove('slideOffLeftReverse');
        }

        for(let right of getRightImages) {
          right.classList.remove('slideOffRightReverse');
        }

        getActiveImage.classList.remove('slideRightReverse');
        getImages[index-1].classList.remove('slideLeftReverse');
      },1000);

    }
  };

  const handleRightSlide = () => {
    const getActiveImage = document.querySelector('.image.active');

    let index = 0;
    
    for(let i = 0; i < getImages.length; i++) {
      if(getImages[i] === getActiveImage) index = i;
    }

    if(index < getImages.length - 1) {
      getImages[index+1].classList.remove('right');

      const getLeftImages = document.querySelectorAll('.image.left');
      const getRightImages = document.querySelectorAll('.image.right');

      getActiveImage.classList.remove('active');
      getActiveImage.classList.add('slideLeft');

      for(let left of getLeftImages) {
        left.classList.add('slideOffLeft');
      }

      for(let right of getRightImages) {
        right.classList.add('slideOffRight');
      }

      getActiveImage.classList.add('left');

      getImages[index+1].classList.add('slideRight');

      window.setTimeout(() => {
        getImages[index+1].classList.add('active');
        
        for(let left of getLeftImages) {
          left.classList.remove('slideOffLeft');
        }

        for(let right of getRightImages) {
          right.classList.remove('slideOffRight');
        }

        getActiveImage.classList.remove('slideLeft');
        getImages[index+1].classList.remove('slideRight');
      },1000)
      
    }
  };

  getImages[0].classList.add('active');

  for(let i = 1; i < getImages.length; i++) {
    getImages[i].classList.add('right');
  }

  getLeftButton.addEventListener('click', event => {
    event.preventDefault();

    handleLeftSlide();

  });

  getRightButton.addEventListener('click', event => {
    event.preventDefault();
    
    handleRightSlide();
    
  });
  
}