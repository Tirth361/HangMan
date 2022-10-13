export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}
export function cheakWin(correct, wrong, word) {
  let status = "win";
  console.log(correct)

  //  cheak for win
  const temp = word.split('');
  for(let i in temp){
    if (!correct.includes(temp[i])) {
      status = "";
    }
  }
  // cheak for loose
  if (wrong.length === 6){
    status = "lose";
  }
  console.log(status)
  return status;
}
