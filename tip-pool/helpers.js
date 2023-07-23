
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

// delete button and event listener for removing server from allServers and td
function appendDeleteBtn(tr) {
  let deleteBtn = document.createElement('td');
  deleteBtn.className = 'deleteBtn';
  deleteBtn.innerText = 'X';

  deleteBtn.addEventListener('click', removeTr);

  tr.append(deleteBtn);
}

function removeTr(e) {
  let item = e.target.closest('tr');
  
  delete allServers[item.id];

  item.parentNode.removeChild(item);
  updateServerTable();
}
