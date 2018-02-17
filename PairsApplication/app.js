function findPairs() {

    cleanUp();

    const inputNumber = document.getElementById('userNumber').value;
    let numbersElement = document.getElementById('numbers');

    let numbers = [];
    let pairs = [];

    //Filling up the array
    for (let i = 0; i < 10; i++) {
        numbers[i] = Math.round(Math.random() * 5);
        numbersElement.innerText = numbersElement.innerText + " " + numbers[i];
    }

    //Looking for pairs
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if ((numbers[i] + numbers[j + i]) == inputNumber) {
                pairs.push(numbers[i] + ':' + numbers[j + i])
            }
        }
    }

    //removing duplicates
    pairs = pairs.filter(function (pair, pos, self) {
        return self.indexOf(pair) == pos || self.indexOf(reversePair(pair)) == pos;
    });

    showPairs(pairs);
}

function reversePair(pair) {
    let parts = pair.split(':');
    return parts[1] + ':' + parts[0];
}

function showPairs(pairs){
    let ul = document.getElementById("pairList");
    for (let i = 0; i < pairs.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(pairs[i]));
        ul.appendChild(li);
    }
}

function cleanUp(){
    let ul = document.getElementById("pairList");
    let numbers = document.getElementById('numbers');
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
    numbers.innerText = '';
}


