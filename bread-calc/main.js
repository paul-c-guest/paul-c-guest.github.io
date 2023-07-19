const flourBlock = document.getElementById('flour-block')

const addFlour = () => {
  const newLine = document.createElement('div')

  const flourInput = document.createElement('input')
  flourInput.classList.add('flour-name')
  flourInput.setAttribute('placeholder', 'wholemeal')

  const amountInput = document.createElement('input')
  amountInput.classList.add('flour-amount')
  amountInput.setAttribute('placeholder', 'grams')
  amountInput.setAttribute('type', 'number')

  const flourTitle = document.createElement('span')
  flourTitle.innerHTML = 'Flour: '

  const amountTitle = document.createElement('span')
  amountTitle.innerHTML = 'Amount: '

  newLine.appendChild(flourTitle)
  newLine.appendChild(flourInput)
  newLine.appendChild(amountTitle)
  newLine.appendChild(amountInput)

  flourBlock.appendChild(newLine)
}

// create one initial line by default
addFlour()

document.getElementById('newline').onclick = (e) => addFlour()
