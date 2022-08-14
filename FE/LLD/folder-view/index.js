const data = [{
    name: 'folder-view',
    children: [],
}, {
    name: 'js-questions',
    children: [{
        name: 'folder-view.js',
    }, {
        name: 'hasOwnProperty.js'
    }, {
        name: 'inner-folder',
        children: [{
            name: 'innermost',
            children: []
        }, {
            name: 'file-1.ts'
        },{
            name: 'file-2.ts'
        }]
    }]
}, {
    name: 'progress-bar',
    children: [{
        name: 'index.html',
    }, {
        name: 'index.js'
    }, {
        name: 'styles.css'
    }]
}, {
    name: 'package.json'
}];

const root = document.getElementById('folder-view');
function render(nodes, parent) {
    nodes.forEach(node => {
        const dir = document.createElement('div');
        dir.innerHTML = `<i class='fa ${node.hasOwnProperty('children') 
            ? 'fa-folder-o'
            : 'fa-file-o'
        }' aria-hidden='true'></i><span>${node.name}</span>`;
        dir.style.marginLeft = '10px';
        parent.appendChild(dir);
        
        if(node.hasOwnProperty('children')) {
            render(node.children, dir);
        }
    });
}

render(data, root);