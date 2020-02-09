/* PUT YOUR CODE HERE */

/* JSON */
const PLAYERS_JSON_PATH = './data/players.json';
const STATS_JSON_PATH = './data/stats.json';
const HEADERS = ['Player', 'Matches', 'Goals'];

async function fetchJSON(filepath){
    try {
        const response = await fetch(filepath);
        const jsonResponse = await response.json();
        return jsonResponse;
    } catch(error) {
       console.log(`Following error occured while trying to retrieve the json data: ${error.toString()}`) 
    }
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

function generateTable(headers, playersInfo){
    const table = createDomElement('table');
    const headerRow = generateHeaderRow(headers);
    attachToParent(table, headerRow);
    populateTable(table, playersInfo);
    return table;
}

function attachToParent(parentElement, childElement){
    parentElement.appendChild(childElement);
    return parentElement;
}

function getParentDiv(selector){
    return document.querySelector(selector);
}

/**
 * Given an array, retrieves the first element of the array having it's root key matching the given keyname
 * @param {*} array 
 * @param {*} keyName 
 */
function getDataFromKeyName(array, keyName){
    const keyNameObject = array.find(function(object){
        return Object.keys(object)[0] === keyName;
    });
    if(keyNameObject){
        return keyNameObject[keyName];
    } else return [];
}
 
// Here we could use destructing to make the code look better, but at the time of writing this is not
// supported by the edge browser, and it is a requirement that the code runs on all recent browsers.
// So for simplicity sake we will duplicate the id here, making it the object key and an element of the object
function arrayToHash(array, key){
    return array.reduce(function(accumulator, value){
        accumulator[value[key]] = value;
        return accumulator;
    }, {})
}

function generateDisplayData(players, stats){
    const playersHash = arrayToHash(players, "id");
    const statsHash = arrayToHash(stats, "id");

    const displayData = [];

    Object.keys(players).forEach(function(playerId){
        const playerStat = statsHash[playerId];
        if(playerStat){
            displayData.push([playersHash[playerId]['short_name'], playerStat['matches'], playerStat['goals']]);
        }
    });

    return displayData;
}

window.onload = function(){
    Promise.all([fetchJSON(PLAYERS_JSON_PATH), fetchJSON(STATS_JSON_PATH)]).then(function(data){
        // As Promise.all does not always return the data in the same order we first need to parse the data
        const players = getDataFromKeyName(data, 'players');
        const stats = getDataFromKeyName(data, 'player_stats');

        // We then generate the data to be displayed
        const displayData = generateDisplayData(players, stats);

        // We can then generate the table on the dom
        const parentDiv = getParentDiv("#content-1 > div > div.module.json-module > div.module-border > div");
        const tableToAdd = generateTable(HEADERS, displayData);
        attachToParent(parentDiv, tableToAdd);
    });
};