let all = document.getElementById(`all`);
let add = document.getElementById(`add`);
let min = document.getElementById(`min`);


const arr = ["Asadbek1", "Asadbek2","Asadbek3","Asadbek4","Asadbek5"];

for(let i = 0; i < arr.length; i++){22
  all.innerHTML += `
  <div>${arr[i]}</div>
  `
}



function add1() {
  arr.unshift(`Asadbek7`);
  console.log(arr);
  // all = arr;
}

function add2() {
  arr.push(`Asadbek11`); 
  console.log(arr);

}

function min1() {
  arr.shift()
  console.log(arr);

}

function min2() {
  arr.pop()
  console.log(arr);

}
// console.log(arr);
// arr.push(`Asadbek3`);
// console.log(arr);


// arr.pop();
// console.log(arr);



// arr.shift();
// console.log(arr);

// arr.push(`Asadbek7`);
// console.log(arr);

