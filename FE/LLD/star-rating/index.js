function Star(ele, noOfStars) {
    this.noOfStars = noOfStars;
    this.noOfStarsSelected = 0;
    this.ele = document.querySelector(ele);

    this.init();
}

Star.prototype.init = function() {
    const starsContainer = document.createElement('div');

    for(let i=0; i<this.noOfStars; i++) {
        const star = document.createElement('span');
        star.classList.add('fa');
        star.classList.add('fa-star-o');
        star.classList.add('star');
        star.dataset.starId = i+1;

        starsContainer.appendChild(star);
    }

    starsContainer.addEventListener('mouseover', this.mouseOver.bind(this));
    starsContainer.addEventListener('mouseout', this.mouseOut.bind(this));
    starsContainer.addEventListener('click', this.click.bind(this));

    this.starsContainer = starsContainer;
    this.ele.appendChild(starsContainer);
}

Star.prototype.mouseOver = function (e) {
    if(e.target.tagName === 'SPAN') {
        const noOfStarsHovered = e.target.dataset.starId;

        for(let i=0; i < noOfStarsHovered; i++) {
            this.starsContainer.children[i].classList.remove('fa-star-o');
            this.starsContainer.children[i].classList.add('fa-star');
        }
    }
}

Star.prototype.mouseOut = function (e) {
    if(e.target.tagName === 'SPAN') {
        for(let i=0; i < this.noOfStars; i++) {
            if(i < this.noOfStarsSelected) {
                this.starsContainer.children[i].classList.remove('fa-star-o');
                this.starsContainer.children[i].classList.add('fa-star');
            } else {
                this.starsContainer.children[i].classList.remove('fa-star');
                this.starsContainer.children[i].classList.add('fa-star-o');
            }
        }
    }
}


Star.prototype.click = function (e) {
    if(e.target.tagName === 'SPAN') {
        const noOfStarsSelected = e.target.dataset.starId;
        this.noOfStarsSelected = noOfStarsSelected;

        for(let i=0; i < noOfStarsSelected; i++) {
            this.starsContainer.children[i].classList.remove('fa-star-o');
            this.starsContainer.children[i].classList.add('fa-star');
        }
    }
}

