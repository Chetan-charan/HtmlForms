// let btn = document.querySelector('.btn');
//     btn.setAttribute('disabled','true');

   
    // if(count>=2){
    //     button.setAttribute('disbaled','false');
    // }
    // let count = 0;
    // let x = document.querySelectorAll('input[type=checkbox]').onclick  = function start(){
    //     ++count;
    //     console.log(count);
    // };
    

function totable(){
    let fname = document.myform.fname.value;
    let lname = document.myform.lname.value;
    let address = document.myform.address.value;
    let country = document.myform.country.value;
    let state = document.myform.state.value;
    let pin = document.myform.pincode.value;

    let gender_select = document.querySelectorAll('input[name=gender]');
    let gender;
    gender_select.forEach(element => {
        if(element.checked){
            gender = element.value;
        }
    })
    
    let food = document.querySelectorAll('.food');
    let food_checked = [];
    let count = 0;
    food.forEach(element => {
        if(element.checked){
           food_checked.push(element.value);
           ++count;
        }
    });
    console.log(count);

    let index = 1;

    let table = document.querySelector(".table");
    let row = table.insertRow(index);
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    let c6 = row.insertCell(5);
    let c7 = row.insertCell(6);
    let c8 = row.insertCell(7);
    c1.innerHTML = fname;
    c2.innerHTML = lname;
    c3.innerHTML = gender;
    c4.innerHTML = address;
    c5.innerHTML = country;
    c6.innerHTML = state;
    c7.innerHTML = pin;
    c8.innerHTML = food_checked;
    index++;
    myform.reset();
  
  


}

