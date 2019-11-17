// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
var db = []

export function addMeal(event) {
    event.preventDefault()

    var id = db.push({
        meal: event.target.meal.value, 
        calories: event.target.calories.value
    })

    render(id, db[id - 1])
}

function render(id, { meal, calories }) {
    var tr = document.createElement('tr')

    tr.innerHTML = `
        <td>${id}</td>
        <td>${meal}</td>
        <td>${calories}</td>
    `

    table.append(tr)
}