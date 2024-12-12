//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

const bike =[ {
    'nome' : '390 Duke',
    'peso' : '165',

},
{
    'nome' : '790 Duke',
    'peso' : '169',
},
{
    'nome' : '1290 Duke',
    'peso' : '191',
}
]

let lightestBike = bike[0];

for (let i = 0; i < bike.length; i++) 
{ if (bike[i].peso < lightestBike.peso) {
        lightestBike = bike[i];}
}
console.log(lightestBike);

    



