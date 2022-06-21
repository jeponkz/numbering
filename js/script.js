let date = new Date()
let dayToday = date.getDate()
let day = document.querySelector('#day')
let startNumber = document.querySelector('#startNumber')
let endNumber = document.querySelector('#endNumber')
let form = document.querySelector('.form')
let clearBtn = document.querySelector('.clear-btn')
let numberTable = document.querySelector('.number-table')
let printBtn = document.querySelector('.print-btn')
clearForm()


form.addEventListener('submit', function(e) {
  e.preventDefault()
  let output = ''
  for (let i = startNumber.value; i <= endNumber.value; i++) {
    if ( i < 10) {
      output += '<div class="number-cell">' + day.value + '0' + i + '</div>' 

    } else {
      output += '<div class="number-cell">' + day.value + '' + i + '</div>' 
    }
    numberTable.innerHTML = output
  }

  printBtn.style.display = 'inline-block'
  
})

printBtn.addEventListener('click', function(e) {
  window.print()
})

clearBtn.addEventListener('click', function(e) {
  clearForm()
})

function init() {
  clearForm ()
}

function clearForm () {
  day.value = dayToday
  startNumber.value = 1
  endNumber.value = 100
  numberTable.innerHTML = ''
  printBtn.style.display = 'none'
}