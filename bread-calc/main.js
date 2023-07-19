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
