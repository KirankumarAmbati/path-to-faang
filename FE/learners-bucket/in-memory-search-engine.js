class InMemorySearch {
    constructor() {
        this.documents = {}
    }

    addDocuments(namespace, ...docs) {
        if(!this.documents[namespace]) this.documents[namespace] = [];
        this.documents[namespace] = [...this.documents[namespace], ...docs];
        console.log({ docs: this.documents });
    }

    search(namespace, searchFn, sortOrder) {
        const filteredDocuments = this.documents[namespace].filter(searchFn);
        return filteredDocuments.sort((a, b) => {
            if(sortOrder.asc) {
                return a[sortOrder.key] - b[sortOrder.key];
            } else {
                return b[sortOrder.key] - a[sortOrder.key];
            }
        })
    }
};

const searchEngine = new InMemorySearch();

searchEngine.addDocuments(
    'Movies',
    { name: 'Avenger', rating: 8.5, year: 2017 },
    { name: 'Black Adam', rating: 8.7, year: 2022 },
    { name: 'Jhon Wick 4', rating: 8.2, year: 2023 },
    { name: 'Black Panther', rating: 9.0, year: 2022 }
);

console.log(searchEngine.search('Movies', (e) => e.rating > 8.0, { key: 'year', asc: true }));

// Output
/*
[
  {
    "name": "Black Panther",
    "rating": 9,
    "year": 2022
  },
  {
    "name": "Black Adam",
    "rating": 8.7,
    "year": 2022
  }
]
*/