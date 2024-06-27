
const boxes = document.querySelectorAll('.cell');
const reset = document.querySelector('button');



let icon = 'X';

boxes.forEach( (el) => { el.addEventListener('click', 
  () => {
      if ( !el.innerHTML ) {
          el.innerHTML = `<h1>${icon}</h1>`;
          if ( icon === 'X' ){
            icon = 'O';
          }
          else {
            icon = 'X'; 
          }

          checkForWinner();
      }
  });
});

const resetBoard = () => {
  boxes.forEach(
      (el) => {
          el.innerHTML = '';
      }
  )
  resetHighlight();
  icon = 'X';
  winCode = null;
}

reset.addEventListener('click', resetBoard)



const wins =[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]]

  function checkForWinner(){
    let Xs = [];
    let Os = [];

    boxes.forEach(
      (box) => {
        
          if ( box.textContent ) {
              if ( box.textContent == 'X' ) {
                Xs.push(parseInt(box.id));
              }    
              if ( box.textContent == 'O' ) {
                Os.push(parseInt(box.id));   
              }    
          }         
      }
    );


    if ( Xs.length >= 3 && compareToWinningArrays(Xs) ) {
      alert("x won");
    } else if 
      ( Os.length >= 3 && compareToWinningArrays(Os) ) {
      alert("o won");
    } else if 
      ( Xs.length + Os.length === 9 ) {
      alert("draw");
    }
  }

  const compareToWinningArrays = (playerArray) => {
    let final = false;
    wins.forEach(
        (combo) => {
            let outcome = true;
            for(let i = 0; i < 3; i++) {
                if ( playerArray.indexOf(combo[i]) == -1 )
                    return outcome = false;
            }
            if ( outcome ) {
                winCode = combo;
                return final = true;
            }
        } 
    )
    if ( final ) return true;
}