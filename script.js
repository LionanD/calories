// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// https://learn.javascript.ru/introduction-browser-events
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
var db = []

export function addMeal(event) {
    event.preventDefault()

    db.push({
        meal: event.target.meal.value,
        calories: event.target.calories.value
    });

    render()
}

function render() {
    var tbody = document.createElement('tbody')
    tbody.id = 'tbd'

    db.forEach(function({ meal, calories }, index) {
        var tr = document.createElement('tr')
        
        tr.addEventListener('click', function(event) {
            removeMeal(event.target.parentNode)
        })

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${meal}</td>
            <td>${calories}</td>
        `

        tbody.append(tr)
    })

    tbd.replaceWith(tbody)
}

function removeMeal(node) {
    var id = node.querySelector('td').innerText - 1

    db = db.filter(function(el, index) {
        return index !== id
    })

    render()
}
