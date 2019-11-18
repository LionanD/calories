// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// https://learn.javascript.ru/introduction-browser-events
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
var db = []

export function addMeal(event) {
    event.preventDefault()

    var id = db.push({
        no: db.length + 1,
        meal: event.target.meal.value,
        calories: event.target.calories.value
    }) - 1;

    render(db[id])
}

function render({ no, meal, calories }) {
    var tr = document.createElement('tr')

    tr.innerHTML = `
        <td>${no}</td>
        <td>${meal}</td>
        <td>${calories}</td>
    `

    table.append(tr)
}
