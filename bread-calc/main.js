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

  const hydrationInput = document.createElement('input')
  hydrationInput.classList.add('flour-entry-number')
  hydrationInput.setAttribute('placeholder', '%')
  hydrationInput.setAttribute('type', 'number')

  newLine.appendChild(flourInput)
  newLine.appendChild(amountInput)
  newLine.appendChild(hydrationInput)

  flourBlock.appendChild(newLine)
}

// create one initial line by default
addFlour()

document.getElementById('newline').onclick = (e) => addFlour()
