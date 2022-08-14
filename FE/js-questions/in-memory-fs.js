// getRootDirectory – Returns the root directory and all its nested childs.

function FileSystem() {
    let root = {};
    let currentDir = root;
    let currentDirPath = 'root';

    function mkdir(dir) {
        if (!dir) {
            throw new Error('Please provide the directory name to create!')
        }

        if(Object.keys(currentDir).includes(dir)) {
            throw new Error(`Directory: ${dir} already exists in the current directory!`)
        }
        
        currentDir[dir] = {}
    }

    function cd(path) {
        // if(!Object.keys(currentDir).includes(dir)) {
        //     throw new Error(`Directory: ${dir} doesnt exist in the current directory!`)
        // }
        
        if(path === '..') {
            currentDir = root;
            return;
        }

        const paths = path.split('-');

        currentDir = root;

        paths.forEach(path => {
            currentDir = currentDir[path];
        });

        currentDirPath = path;
    }

    function addFile(name) {
        if(!currentDir.files) {
            currentDir.files = [];
        }

        currentDir.files.push(name);
    }

    function deleteFile(name) {
        currentDir.files = currentDir.files.filter(file => file !== name);
    }

    function deleteDirectory(dir) {
        if(!Object.keys(currentDir).includes(dir)) {
            throw new Error(`Directory: ${dir} doesnt exist in the current directory!`)
        }

        delete currentDir[dir];
    }

    function getRootDirectory() {
        return root;
    }

    function ls() {
        return currentDir;
    }

    function pwd() {
        return currentDirPath;
    }

    return {
        mkdir,
        cd,
        addFile,
        deleteFile,
        deleteDirectory,
        getRootDirectory,
        ls,
        pwd,
    }
}

const dir = new FileSystem();
dir.mkdir('prashant');
dir.cd('prashant');
dir.addFile('index.html');
dir.addFile('app.js');
dir.cd('..');
dir.mkdir('practice');
dir.cd('practice');
dir.addFile('index.html');
dir.addFile('app.js');
dir.mkdir('build');
dir.cd('practice-build');
dir.addFile('a.png');
dir.addFile('b.jpg');
dir.deleteFile('a.png');
dir.cd('..');
dir.deleteDirectory('prashant');
console.log(JSON.stringify(dir.getRootDirectory()));