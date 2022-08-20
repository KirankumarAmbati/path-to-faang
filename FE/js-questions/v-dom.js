class Node {
    constructor(tag) {
        this.tag = tag;
        this.innerHTML = '';
        this.children = [];
    }

    appendChild(child) {
        this.children.push(child);
    }
}

class VDocument extends Node{
    constructor() {
        super('html');
    }

    createElement(ele) {
        return new Node(ele);
    }

    render() {
        let output = '';

        function renderHTML(dom, depth = 0) {
            output += `${"    ".repeat(depth)}<${dom.tag}>\n`;
            if(dom.innerHTML) output += `${"    ".repeat(depth + 1)}${dom.innerHTML}\n`;
            if(dom.children) {
                for(let child of dom.children) {
                    renderHTML(child, depth + 1);
                }
            }
            output += `${"    ".repeat(depth)}</${dom.tag}>\n`;
        }

        renderHTML(this)
        return output;
    }
}


const vDocument = new VDocument();
const body = vDocument.createElement("body");
const div = vDocument.createElement("div");

div.innerHTML = "Hello, I am a div!";
body.appendChild(div);
vDocument.appendChild(body);

const html = vDocument.render();
console.log(html);

{/* <html>
	<body>
		<div>
			Hello, I am a div!
		</div>
	</body>
</html> */}
