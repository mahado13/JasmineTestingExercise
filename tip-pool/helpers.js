//Jasmine Testing Exercises
//Date Oct 4th, 2022
//By:Mahad Osman
//References: SpringBoard Tip tool Solution


// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteButton(tr){
  let newDeleteTD = document.createElement('td');
  newDeleteTD.classList.add('deleteButton');
  newDeleteTD.innerHTML = 'X';

  newDeleteTD.addEventListener('click', function(e){
      let deleteStuff = e.target.cloest('tr');
      delete allServers[deleteStuff.id];
      deleteStuff.parentNode.removeChild(deleteStuff);
      upadteServerTable();
  })

  tr.append(newDeleteTD)

}