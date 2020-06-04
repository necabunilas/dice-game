
function randomGen(){

    var randNum = Math.random();
    randNum = Math.floor(randNum * 6) + 1;
    return randNum;

}

function main(){

  var firstNum = randomGen();
  var secondNum = randomGen();
  var file1 = "images/dice"+firstNum+".png";
  var file2 = "images/dice"+secondNum+".png";

  document.querySelectorAll("img")[0].setAttribute("src", file1);
  document.querySelectorAll("img")[1].setAttribute("src", file2);

  if (firstNum > secondNum)
    document.querySelector("h1").textContent = "Player 1 Wins!";
  else if (firstNum < secondNum)
    document.querySelector("h1").textContent = "Player 2 Wins!";
  else
    document.querySelector("h1").textContent = "Draw!";
}

main();
