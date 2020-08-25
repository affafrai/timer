'use strict'
const args = process.argv;


let newArray = args.slice(2);

for (let i = 0; i < newArray.length; i++){
  
  let time = parseInt(newArray[i]);
  if (time > 0){
    setTimeout(() => {
      console.log(time)
    process.stdout.write('\x07');
    }, time);
  }
}
