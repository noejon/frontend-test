/* PUT YOUR CODE HERE */

/* TABLE GENERATTION PART */
const HEADERS = ['Player', 'Matches', 'Goals'];

const PLAYERS = [['Z. Zidane', '614', '126']];

function generateTable(headers, playersInfo){
    const table = createDomElement('table');
    const headerRow = generateHeaderRow(headers);
    attachToParent(table, headerRow);
    populateTable(table, playersInfo);
    return table;
}

function createDomElement(tag, text){
    const element = document.createElement(tag);
    if(text){
        element.innerText = text;
    }
    return element;
}

function generateHeaderRow(headers){
    const tr = createDomElement('tr');
    headers.map(header => attachToParent(tr, createDomElement('th', header)));
    return tr;
}

function generateRow(rowContent){
    const tr = createDomElement('tr');
    rowContent.map(column => attachToParent(tr, createDomElement('td', column)));
    return tr;
}

function populateTable(table, bodyContent){
    bodyContent.map(rowContent => attachToParent(table, generateRow(rowContent)));
}

function attachToParent(parentElement, childElement){
    parentElement.appendChild(childElement);
    return parentElement;
}

function getParentDiv(selector){
    return document.querySelector(selector);
}

const parentDiv = getParentDiv("#content-1 > div > div.module.json-module > div.module-border > div");
const tableToAdd = generateTable(HEADERS, PLAYERS);
attachToParent(parentDiv, tableToAdd);