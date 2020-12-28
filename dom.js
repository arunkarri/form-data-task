//Details Array to be stored in the array

let tableData = [];
// create container
let container = createElement('div');
setAttribute(container, 'class', 'container');
append(container);

//header
let header = createElement('h4');
setAttribute(header, 'class', 'center');
header.innerText = 'Complete the below form';
appendChild(container, header);

//Row
let row = createElement('div');
setAttribute(row, 'class', 'row');
appendChild(container, row);

//col1
let col1 = createElement('div');
setAttribute(col1, 'class', 'col-lg-4 col-md-4 col-sm-3 d-none d-sm-block');
appendChild(row, col1);

//col2
let col2 = createElement('div');
setAttribute(col2, 'class', 'col-lg-4 col-md-4 col-sm-6 col-xs-12');
appendChild(row, col2);

//form
let form = createElement('form');
setAttribute(form, 'id', 'my-form');
appendChild(col2, form);

//First Name
let fName = createElement('div');
setAttribute(fName, 'class', 'form-group');
appendChild(form, fName);

let fNameLabel = createElement('label');
setAttribute(fNameLabel, 'for', 'fName');
fNameLabel.innerText = 'First Name';
appendChild(fName, fNameLabel);

let fNameInput = createElement('input');
setAttribute(fNameInput, 'type', 'text');
setAttribute(fNameInput, 'class', 'form-control');
setAttribute(fNameInput, 'id', 'fName');
setAttribute(fNameInput, 'aria-describedby', 'fName');
setAttribute(fNameInput, 'placeholder', 'Enter First Name');
appendChild(fName, fNameInput);

//Last Name
let lName = createElement('div');
setAttribute(lName, 'class', 'form-group');
appendChild(form, lName);

let lNameLabel = createElement('label');
setAttribute(lNameLabel, 'for', 'lName');
lNameLabel.innerText = 'Last Name';
appendChild(lName, lNameLabel);

let lNameInput = createElement('input');
setAttribute(lNameInput, 'type', 'text');
setAttribute(lNameInput, 'class', 'form-control');
setAttribute(lNameInput, 'id', 'lName');
setAttribute(lNameInput, 'aria-describedby', 'lName');
setAttribute(lNameInput, 'placeholder', 'Enter Last Name');
appendChild(lName, lNameInput);

//Address
let addr = createElement('div');
setAttribute(addr, 'class', 'form-group');
appendChild(form, addr);

let addrLabel = createElement('label');
setAttribute(addrLabel, 'for', 'addr');
addrLabel.innerText = 'Address';
appendChild(addr, addrLabel);

let addrInput = createElement('input');
setAttribute(addrInput, 'type', 'text');
setAttribute(addrInput, 'class', 'form-control');
setAttribute(addrInput, 'id', 'addr');
setAttribute(addrInput, 'aria-describedby', 'addr');
setAttribute(addrInput, 'placeholder', 'Enter Address');
appendChild(addr, addrInput);

//Pincode
let pin = createElement('div');
setAttribute(pin, 'class', 'form-group');
appendChild(form, pin);

let pinLabel = createElement('label');
setAttribute(pinLabel, 'for', 'pincode');
pinLabel.innerText = 'Pincode';
appendChild(pin, pinLabel);

let pinInput = createElement('input');
setAttribute(pinInput, 'type', 'number');
setAttribute(pinInput, 'class', 'form-control');
setAttribute(pinInput, 'id', 'pincode');
setAttribute(pinInput, 'aria-describedby', 'pincode');
setAttribute(pinInput, 'placeholder', 'Enter Pincode');
appendChild(pin, pinInput);

//Gender
let genderArray = ['Male', 'Female'];
let genderGrp = createElement('div');
setAttribute(genderGrp, 'class', 'form-group');
appendChild(form, genderGrp);

let genderLabel = createElement('label');
setAttribute(genderLabel, 'for', 'gender');
genderLabel.innerText = 'Gender';
appendChild(genderGrp, genderLabel);

for (let i = 0; i < genderArray.length; i++) {
  let radioDiv = createElement('div');
  setAttribute(radioDiv, 'class', 'custom-control custom-radio');

  let radioInput = createElement('input');
  setAttribute(radioInput, 'type', 'radio');
  setAttribute(radioInput, 'id', `customRadio${i + 1}`);
  setAttribute(radioInput, 'value', genderArray[i]);
  setAttribute(radioInput, 'name', 'customRadio');
  setAttribute(radioInput, 'class', 'custom-control-input');
  appendChild(radioDiv, radioInput);

  let radioLabel = createElement('label');
  setAttribute(radioLabel, 'class', 'custom-control-label');
  setAttribute(radioLabel, 'for', `customRadio${i + 1}`);
  radioLabel.innerText = genderArray[i];
  appendChild(radioDiv, radioLabel);
  appendChild(genderGrp, radioDiv);
}

//State
let state = createElement('div');
setAttribute(state, 'class', 'form-group');
appendChild(form, state);

let stateLabel = createElement('label');
setAttribute(stateLabel, 'for', 'state');
stateLabel.innerText = 'State';
appendChild(state, stateLabel);

let stateInput = createElement('input');
setAttribute(stateInput, 'type', 'text');
setAttribute(stateInput, 'class', 'form-control');
setAttribute(stateInput, 'id', 'state');
setAttribute(stateInput, 'aria-describedby', 'state');
setAttribute(stateInput, 'placeholder', 'Enter State');
appendChild(state, stateInput);

//Country
let country = createElement('div');
setAttribute(country, 'class', 'form-group');
appendChild(form, country);

let countryLabel = createElement('label');
setAttribute(countryLabel, 'for', 'country');
countryLabel.innerText = 'Country';
appendChild(country, countryLabel);

let countryInput = createElement('input');
setAttribute(countryInput, 'type', 'text');
setAttribute(countryInput, 'class', 'form-control');
setAttribute(countryInput, 'id', 'country');
setAttribute(countryInput, 'aria-describedby', 'country');
setAttribute(countryInput, 'placeholder', 'Enter Country');
appendChild(country, countryInput);

//Choice of Food
let foodArray = ['Fruit and Vegetables', 'Veg Thali', 'Non-Veg Thali', 'Sea Food', 'Fast Food'];
let foodDetails = [];
let errorString = '';
let foodGrp = createElement('div');
setAttribute(foodGrp, 'class', 'form-group');
appendChild(form, foodGrp);

let foodLabel = createElement('label');
setAttribute(foodLabel, 'for', 'choice');
foodLabel.innerText = 'Choice of Food';
appendChild(foodGrp, foodLabel);

for (let i = 0; i < foodArray.length; i++) {
  let checkDiv = createElement('div');
  setAttribute(checkDiv, 'class', 'form-check');

  let checkInput = createElement('input');
  setAttribute(checkInput, 'type', 'checkbox');
  setAttribute(checkInput, 'id', `defaultCheck${i + 1}`);
  setAttribute(checkInput, 'class', 'form-check-input');
  setAttribute(checkInput, 'onclick', `addFoodData(${i + 1})`);
  appendChild(checkDiv, checkInput);

  let checkLabel = createElement('label');
  setAttribute(checkLabel, 'class', 'form-check-label');
  setAttribute(checkLabel, 'for', `defaultCheck${i + 1}`);
  checkLabel.innerText = foodArray[i];
  appendChild(checkDiv, checkLabel);
  appendChild(foodGrp, checkDiv);
}

let errorMsg = createElement('small');
setAttribute(errorMsg, 'class', 'error');
appendChild(foodGrp, errorMsg);

// form error message

let formError = createElement('small');
setAttribute(formError, 'class', 'error');
appendChild(form, formError);

//submit button
let submit = createElement('button');
setAttribute(submit, 'type', 'submit');
setAttribute(submit, 'class', 'btn btn-primary');
setAttribute(submit, 'onclick', 'submitform(event)');
submit.innerText = 'Submit';
appendChild(form, submit);

//col3
let col3 = createElement('div');
setAttribute(col3, 'class', 'col-lg-4 col-md-4 col-sm-3 d-none d-sm-block');
appendChild(row, col3);

// Build Table
let mainDiv = createElement('div');
setAttribute(mainDiv, 'class', 'container');
append(mainDiv);

let table = createElement('table');
setAttribute(table, 'class', 'table');
appendChild(mainDiv, table);

let thead = createElement('thead');
appendChild(table, thead);

let tr = createElement('tr');
appendChild(thead, tr);

let th1 = createElement('th');
setAttribute(th1, 'scope', 'col');
setAttribute(th1, 'colspan', '2');
th1.innerText = 'Your Details';
appendChild(tr, th1);

let tbody = createElement('tbody');
appendChild(table, tbody);

// Load Data to Table
function buildTbodyUI() {
  tbody.innerHTML = '';
  for (let i = 0; i < tableData.length; i++) {
    let dataTr = createElement('tr');
    let dataTd1 = createElement('td');
    dataTd1.innerText = tableData[i].label;
    let dataTd2 = createElement('td');
    dataTd2.innerText = tableData[i].value;

    appendChild(dataTr, dataTd1);
    appendChild(dataTr, dataTd2);
    appendChild(tbody, dataTr);
  }
}

function submitform(event) {
  event.preventDefault();
  let firstName = document.querySelector('#fName').value;
  let lastName = document.querySelector('#lName').value;
  let addrValue = document.querySelector('#addr').value;
  let pincodeValue = document.querySelector('#pincode').value;
  let genderRadio = document.querySelector('input[name="customRadio"]:checked');
  let genderValue;
  if (genderRadio != null) {
    genderValue = genderRadio.value;
  }

  let stateValue = document.querySelector('#state').value;
  let countryValue = document.querySelector('#country').value;

  formError.innerText = 'Fill all the details and make sure that there are no errors !!';
  if (firstName === '' || lastName === '' || addrValue === '' || pincodeValue === '' || genderValue === undefined || stateValue === '' || countryValue === '' || foodDetails.length < 2) {
    formError.innerText = 'Fill all the details and make sure that there are no errors !!';
  } else {
    formError.innerText = '';

    let json1 = { label: 'First Name', value: firstName };
    let json2 = { label: 'Last Name', value: lastName };
    let json3 = { label: 'Address', value: addrValue };
    let json4 = { label: 'Pin Code', value: pincodeValue };
    let json5 = { label: 'Gender', value: genderValue };
    let json6 = { label: 'State', value: stateValue };
    let json7 = { label: 'Country', value: countryValue };
    let json8 = { label: 'Food Preferences', value: foodDetails.join(', ') };
    tableData= [];
    tableData.push(json1,json2,json3,json4,json5,json6,json7,json8);
    buildTbodyUI();
  }
}

function addFoodData(i) {
  let foodItem = foodArray[i - 1];
  let checked = document.getElementById(`defaultCheck${i}`).checked;

  if (checked && foodDetails.indexOf(foodItem) === -1) {
    foodDetails.push(foodItem);
  }
  if (!checked && foodDetails.indexOf(foodItem) !== -1) {
    foodDetails.splice(foodDetails.indexOf(foodItem), 1);
  }

  if (foodDetails.length < 2) {
    errorString = 'Atleast 2 items should be selected';
  } else {
    errorString = '';
  }
  errorMsg.innerText = errorString;
}
