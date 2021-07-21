const readline=require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


  const words=["reactuer",'capsule','oclock','webforce3','arnaque'];

  const randomNum=Math.floor(Math.random()*words.length);

const randomWord=words[randomNum];






const guessedLetters=[];

const wordInfoArr=[]

for(let i=0;i<randomWord.length;i++){
    wordInfoArr.push({letter:randomWord[i],code:'*'})
}


const findLetters=(lettersArr,guessedLetter)=>{
    for(let i=0;i<lettersArr.length;i++){
        //console.log(randomWord.includes(guessedLetters[i]))
    
        const isLetterIncluded=randomWord.includes(guessedLetters[i]);

        console.log("check if letter included");
        console.log(isLetterIncluded)
    
        if(isLetterIncluded){
            for(let i=0;i<wordInfoArr.length;i++){
               
                if(wordInfoArr[i].letter==guessedLetter){
                    wordInfoArr[i].code=guessedLetter
                }
            }
        }
    }

    console.log("get new letters array");
    console.log(wordInfoArr)
}


const checkWord=(wordInfoArr)=>{

    
    let noStars=0
    for(let i=0;i<wordInfoArr.length;i++){
        if(wordInfoArr[i].code=='*'){
            noStars++
        }
    }

    if(noStars==0){
        return true;
    }

    else{
        return false;
    }
}



let attempts=0;

console.log("get chosen word");
console.log(randomWord)


   const findWord=()=>{
    rl.question('choisi une lettre par hasard', (letter) => {
    
       console.log('get letter');
       console.log(letter)
        
        guessedLetters.push(letter);

        findLetters(guessedLetters,letter)

        attempts++;

        const checkIfWon=checkWord(wordInfoArr);

        if(checkIfWon){
            console.log("feliciations, vous avez gagné");
            rl.close()
        }

        for(let i=0;i<wordInfoArr.length;i++){
            console.log(wordInfoArr[i].code)
        }

        if(attempts==12){

            console.log("vous avez epuisé vos tentatives")
            rl.close()
        }

      
        findWord()
        
      });
   }

   findWord()


    



 
  