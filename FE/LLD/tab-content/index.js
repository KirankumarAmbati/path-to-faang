function Tabs(ele, data) {
    this.ele = document.querySelector(ele);
    this.data = data;

    this.init();
}

Tabs.prototype.init = function () {
    const tabsContainer = document.createElement('ul');
    tabsContainer.classList.add('tab-container');

    this.data.forEach((item, index) => {
        const tabItem = document.createElement('li');
        tabItem.textContent = item.title;
        tabItem.classList.add('tab-item');
        tabItem.dataset.item = index;

        tabsContainer.appendChild(tabItem);
    });

    const contentArea = document.createElement('p');
    contentArea.classList.add('content');
    contentArea.textContent = "----- Content goes here -----"

    this.contentArea = contentArea;

    this.ele.appendChild(tabsContainer);
    this.ele.appendChild(contentArea);
    this.ele.addEventListener('click', this.click.bind(this));
}

Tabs.prototype.click = function(e) {
    if(e.target.tagName === 'LI') {
        const ele = this.data[e.target.dataset.item]
        this.contentArea.textContent = ele.content;
    }
}