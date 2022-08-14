function Accordion(ele, data) {
    this.ele = document.querySelector(ele);
    this.data = data;

    this.init();
}

Accordion.prototype.init = function () {
    const accordionContainerFragment = document.createDocumentFragment();

    this.data.forEach((el, index) => {
        const accordionItem = document.createElement('div');

        const title = document.createElement('h1');
        title.textContent = el.title;
        title.classList.add('title');
        title.dataset.item = index + 1;
        
        const content = document.createElement('p');
        content.textContent = el.content;
        content.classList.add('content');
        content.classList.add('inactive');
        content.dataset.item = index + 1;

        accordionItem.appendChild(title);
        accordionItem.appendChild(content);

        accordionContainerFragment.appendChild(accordionItem);
    });

    this.ele.appendChild(accordionContainerFragment);
    this.ele.addEventListener('click', this.click.bind(this));
}

Accordion.prototype.click = function(e) {
    if(e.target.tagName === "H1") {
        const contentContainer = e.target.nextSibling;

        if ([...contentContainer.classList].includes('active')) {
            contentContainer.classList.remove('active');
            contentContainer.classList.add('inactive');
        } else {
            contentContainer.classList.remove('inactive');
            contentContainer.classList.add('active');
        }
    }
}