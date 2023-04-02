/*
File: app.js
Author: Béres Délia
Copyright: 2023, Béres Délia
Group: Szoft I-E-1
Date: 2023-04-02
Github: https://github.com/deliaberes/
Licenc: GNU GPL
*/

const table = document.querySelector("#tableId");


const data = [
    {id: 1, name: "cassic", wheel: 28, application: "offroad", cost: 557900},
    {id: 2, name: "Alboin 900", wheel: 28, application: "trekking", cost: 519900},
    {id: 3, name: "Asgard", wheel: 29, application: "technikás utak", cost: 519900},
    {id: 4, name: "Ruga", wheel: 29, application: "hegyi", cost: 372900},
    {id: 5, name: "Reptila", wheel: 28, application: "városi", cost: 308900},
    {id: 6, name: "Sirmium", wheel: 29, application: "hegyi", cost: 264900}
];

data.forEach((ertek) => {
    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    let tdName = document.createElement('td');
    let tdWheel = document.createElement('td');
    let tdApplication = document.createElement('td');
    let tdCost = document.createElement('td');
    tdId.textContent = ertek.id;
    tdName.textContent = ertek.name;
    tdWheel.textContent = ertek.wheel;
    tdApplication.textContent = ertek.application;
    tdCost.textContent = ertek.cost;
    tableId.append(tr);
	tr.append(tdId);
    tr.append(tdName);
    tr.append(tdWheel);
    tr.append(tdApplication);
    tr.append(tdCost)

});

