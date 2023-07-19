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
  hydrationInput.setAttribute('placeholder', 'wet%')
  hydrationInput.setAttribute('type', 'number')

  const flourTitle = document.createElement('span')
  flourTitle.innerHTML = 'Flour:'

  const amountTitle = document.createElement('span')
  amountTitle.innerHTML = 'Amount:'

  const hydrationTitle = document.createElement('span')
  hydrationTitle.innerHTML = 'Hydration:'

  newLine.appendChild(flourTitle)
  newLine.appendChild(flourInput)

  newLine.appendChild(amountTitle)
  newLine.appendChild(amountInput)

  newLine.appendChild(hydrationTitle)
  newLine.appendChild(hydrationInput)

  flourBlock.appendChild(newLine)
}

// create one initial line by default
addFlour()

document.getElementById('newline').onclick = (e) => addFlour()
