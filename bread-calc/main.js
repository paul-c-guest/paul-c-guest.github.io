const flourBlock = document.getElementById('flour-block')

const addFlour = () => {
  const newLine = document.createElement('div')

  const flourInput = document.createElement('input')
  flourInput.classList.add('flour-entry-name')
  flourInput.setAttribute('placeholder', 'wholemeal')

  const amountInput = document.createElement('input')
  amountInput.classList.add('flour-entry-number')
  amountInput.setAttribute('placeholder', 'grams')
  amountInput.setAttribute('type', 'number')
  amountInput.setAttribute('min', 0)
  amountInput.setAttribute('step', 5)
  amountInput.setAttribute('value', 100)

  const hydrationInput = document.createElement('input')
  hydrationInput.classList.add('flour-entry-number')
  hydrationInput.setAttribute('placeholder', '%')
  hydrationInput.setAttribute('type', 'number')
  hydrationInput.setAttribute('value', 65)
  hydrationInput.setAttribute('min', 1)

  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'X'
  deleteButton.onclick = () => flourBlock.removeChild(newLine)

  newLine.appendChild(flourInput)
  newLine.appendChild(amountInput)
  newLine.appendChild(hydrationInput)
  newLine.appendChild(deleteButton)

  flourBlock.appendChild(newLine)
}

// create one initial line by default
addFlour()

document.getElementById('newline').onclick = (e) => addFlour()

const dryTotal = document.getElementById('dry-total')
const wetTotal = document.getElementById('wet-total')
const doughTotal = document.getElementById('dough-total')

const updateTotals = () => {
  const flours = flourBlock.getElementsByTagName('div')

  let dry = 0
  let wet = 0

  for (const flour of flours) {
    const thisDry = Number.parseInt(
      flour.getElementsByClassName('flour-entry-number')[0].value
    )
    const thisWet = Number.parseInt(
      flour.getElementsByClassName('flour-entry-number')[1].value
    )

    dry += thisDry
    wet += thisDry * thisWet * 0.01
  }

  dryTotal.innerHTML = dry + 'g'
  wetTotal.innerHTML = wet + 'ml'

  doughTotal.innerHTML = dry + wet + 'g'
}

updateTotals()

const nextthing = flourBlock
  .getElementsByTagName('div')[0]
  .getElementsByClassName('flour-entry-number')[0].value

// console.log(nextthing)
