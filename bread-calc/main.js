const flourBlock = document.getElementById('flour-block')

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

  dry = Math.round(dry)
  wet = Math.round(wet)

  dryTotal.innerHTML = dry + 'g'
  wetTotal.innerHTML = wet + 'ml'

  doughTotal.innerHTML = dry + wet + 'g'
}

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
  amountInput.onchange = updateTotals

  const hydrationInput = document.createElement('input')
  hydrationInput.classList.add('flour-entry-number')
  hydrationInput.setAttribute('placeholder', '%')
  hydrationInput.setAttribute('type', 'number')
  hydrationInput.setAttribute('value', 65)
  hydrationInput.setAttribute('min', 1)
  hydrationInput.onchange = updateTotals

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
updateTotals()

document.getElementById('newline').onclick = (e) => {
  addFlour()
  updateTotals()
}
