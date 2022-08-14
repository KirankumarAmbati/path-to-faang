function TypeAhead(el) {
    this.el = document.querySelector(el);
    this.init();
}

TypeAhead.prototype.init = function() {
    const typeaheadContainer = document.createElement('div');
    typeaheadContainer.classList.add('typeahead-container')

    const inputField = document.createElement('input');
    inputField.type = "text";
    inputField.placeholder = "Enter text to search";
    inputField.classList.add('input-field');

    const debouncedOnChangeHandler = debouncify(this.onChangeHandler, 500);
    inputField.addEventListener('input', debouncedOnChangeHandler.bind(this));


    const suggestionsContainer = document.createElement('ul');
    suggestionsContainer.classList.add("suggestions-container")
    suggestionsContainer.addEventListener('click', this.onSuggestionSelect.bind(this));

    typeaheadContainer.appendChild(inputField);
    typeaheadContainer.appendChild(suggestionsContainer);

    this.inputField = inputField;
    this.suggestionsContainer = suggestionsContainer;

    this.el.appendChild(typeaheadContainer);
}

TypeAhead.prototype.onChangeHandler = async function(e) {
    const searchTerm = e.target.value;
    this.suggestionsContainer.innerHTML = '';

    if(searchTerm === '') {
        return;
    }

    const suggestions = await fetchData(searchTerm);

    const suggestionsFragment = document.createDocumentFragment();

    suggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('li');
        suggestionItem.textContent = suggestion;
        suggestionsFragment.appendChild(suggestionItem);
    });

    // suggestions.forEach(suggestion => {
    //     const suggestionItem = document.createElement('li');

    //     const boldText = document.createElement('strong');
    //     boldText.textContent = suggestion.slice(0, searchTerm.length);

    //     const normalText = document.createElement('span');
    //     normalText.textContent = suggestion.slice(searchTerm.length);

    //     suggestionItem.appendChild(boldText);
    //     suggestionItem.appendChild(normalText);

    //     suggestionsFragment.appendChild(suggestionItem);
    // });

    this.suggestionsContainer.appendChild(suggestionsFragment);
}

TypeAhead.prototype.onSuggestionSelect = function(e) {
    if(e.target.tagName = 'LI') {
        this.inputField.value = e.target.textContent;
        this.suggestionsContainer.innerHTML = '';
    }
}



// Fruits
const ITEMS = [
    'Apple',
    'Banana',
    'Orange',
    'Beetroot',
    'Carrot',
    'Cucumber',
    'Cauli Flower',
]

//API Util
async function fetchData(val) {
    await sleep(500);
    return ITEMS.filter(item => item.toLowerCase().startsWith(val.toLowerCase()));
}

// Sleep utility
function sleep(delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

// Debounce util
function debouncify(fn, delay = 500) {
    let timeout;

    return function(...args) {
        if(timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}


