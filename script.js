/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;
let telja=0;


/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  
  alert('Velkominn í leikinn. Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er. Ýttu á ok til að byrja');
  
    play();
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  let started= new Date();
 let rett=0;
 

 while(telja<GAMES_TO_PLAY){
  
  let input=ask();
 
  console.log(input);//debugger
 
  if (input==true){
    rett++; 
    
  }

  telja++;
}
  
  console.log(telja); //debugger
  let stopp= new Date();
  let timi= (stopp-started)/1000;
  let medal= (rett/10)*timi;
  alert(`Þú svaraðir ${rett} af 10 dæmum rétt á ${timi.toFixed(2)} sekúndum. Meðalrétt svör á sekúndu eru ${medal.toFixed(2)} `);

}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {

 let tala1= randomNumber(1,100);
 let tala2= randomNumber(1,100);
 let tala3= randomNumber(1,10);
 let tala4= randomNumber(1,10);
 let tala5= randomNumber(2,10);
 let tala6= tala5*randomNumber(2,10);

 let dæmi= randomNumber(1,4);
 let svar;

  switch(dæmi){
    case 1:
      svar = tala1 + tala2; 
      console.log(svar); //debugger
      answ=prompt(`Hvað er  ${tala1}  +  ${tala2} ` );
      break;
    case 2:
      svar= tala1 - tala2;
      console.log(svar); //debugger
      answ=prompt(`Hvað er  ${tala1}  -  ${tala2} ` );
      break;
    case 3:
      svar= tala3 * tala4;
      answ=prompt( `Hvað er  ${tala3}   *  ${tala4}  ? `);

    case 4:
      svar= tala5 / tala6;
      answ=prompt(`Hvað er  ${tala5}  /  ${ tala6}  ? `);
      
  }
  let parsedInput=parseGuess(answ);
  console.log(answ);
 
  if (parseInt(answ)===svar)
      return true;
  else if (answ===null){   //ef ýtt er á cancel þá fer maður úr 
      alert(`Hætt í leik`);
      return null;
    }
  else return false;

}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function parseGuess(answ){
  let parsed = parseInt(answ,10);

  if (isNaN(parsed)){
    return null;
  }
  return parsed;
} 
// Byrjar leik
start();

