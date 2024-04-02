const size = 4;

const VOWELS = "AEIOU";

const CONSONANTS = "BCDFGHJKLMNPQRSTVWXYZ";

const table = document.getElementById("gameTable");

async function buildTable(vowelChance) {
    let tableContent = "";

    for (let i = 0; i < size; i++) {
        tableContent += `<tr>`;
        for (let j = 0; j < size; j++) {
            tableContent += `<td>`;

            tableContent += await randomChar(vowelChance);

            tableContent += `</td>`;
        }
        tableContent += `</tr>`;
    }

    table.innerHTML = tableContent;
}

async function randomChar(vowelChance) {
    let randf = Math.random();
    if (randf < vowelChance) {
        vowelIndex = Math.floor(Math.random() * VOWELS.length);
        return VOWELS.charAt(vowelIndex);
    } else {
        consIndex = Math.floor(Math.random() * CONSONANTS.length);
        return CONSONANTS.charAt(consIndex);
    }
}

buildTable(0.25);

