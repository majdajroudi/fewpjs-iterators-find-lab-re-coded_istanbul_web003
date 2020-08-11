const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
  if (arr.find(game => game.result === "W") !== undefined){
  return arr.find(game => game.result === "W").year}
  else{
    return undefined
  }
}