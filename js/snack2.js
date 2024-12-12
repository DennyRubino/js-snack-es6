//Snack2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squad = [
    {
        'Nome' : 'Milan',
        'Punti' : '0',
        'Falli' : '0'
    },
    {
        'Nome' : 'Juve',
        'Punti' : '0',
        'Falli' : '0'
    },
    {
        'Nome' : 'Atalanta',
        'Punti' : '0',
        'Falli' : '0'
    },
]
for (let i = 0; i < squad.length; i++)
    { if (squad[i].Punti === '0' && squad[i].Falli === '0'  ){
        squad[i].Punti = Math.floor(Math.random() * 11).toString();
        squad[i].Falli = Math.floor(Math.random() * 11).toString();}

}
for (let i = 0; i < squad.length; i++) {
    console.log( `Squadra: ${squad[i].Nome}, Punti; ${squad[i].Punti}`);
}
