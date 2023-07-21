const NAN_STRING = '~~'
const FLOUR_STEP = 5
const DEFAULT_HYDRATION = 70

const flourBlock = document.getElementById('flour-block')

const dryTotal = document.getElementById('dry-total')
const wetTotal = document.getElementById('wet-total')
const hydrationTotal = document.getElementById('hydration-total')
const doughTotal = document.getElementById('dough-total')

const updateTotals = () => {
  const flours = flourBlock.getElementsByTagName('tr')

  let dry = 0
  let wet = 0

  for (const flour of flours) {
    // skip other rows e.g. headings and button
    if (!flour.classList.contains('flour-row')) {
      continue
    }

    // destructure first and second results
    const [amountInputEl, hydrInputEl] =
      flour.getElementsByClassName('flour-entry-number')

    const thisDry = parseInt(amountInputEl.value)
    const thisHydration = parseInt(hydrInputEl.value)

    dry += thisDry

    // wet is a percentage of dry
    wet += thisDry * thisHydration * 0.01

    // visually highlight inputs when invalid
    amountInputEl.setAttribute(
      'style',
      thisDry ? 'background-color: none' : 'background-color: #f003'
    )

    hydrInputEl.setAttribute(
      'style',
      thisHydration ? 'background-color: none' : 'background-color: #f003'
    )
  }

  // calculate hydration before rounding wet & dry values
  let hydration = Math.round((wet / dry) * 100)

  // remove messy decimal information
  dry = Math.round(dry)
  wet = Math.round(wet)

  // correct for any division by zero
  if (isNaN(hydration)) {
    hydration = 0
  }

  // determine if dry and wet are valid numbers
  const valid = !isNaN(dry) && !isNaN(wet)

  // update the html elements
  dryTotal.innerHTML = valid ? dry + 'g' : NAN_STRING
  wetTotal.innerHTML = valid ? wet + 'ml' : NAN_STRING
  hydrationTotal.innerHTML = valid ? hydration + '%' : NAN_STRING
  doughTotal.innerHTML = valid ? dry + wet + 'g' : NAN_STRING
}

const addFlour = () => {
  const newLine = document.createElement('tr')
  newLine.classList.add('flour-row')

  const flourInput = document.createElement('input')
  flourInput.classList.add('flour-entry-name')
  flourInput.setAttribute('placeholder', 'wheat, rye, spelt...')

  const amountInput = document.createElement('input')
  amountInput.classList.add('flour-entry-number')
  amountInput.setAttribute('placeholder', 'grams')
  amountInput.setAttribute('type', 'number')
  amountInput.setAttribute('min', FLOUR_STEP)
  amountInput.setAttribute('step', FLOUR_STEP)
  amountInput.setAttribute('value', 100)
  amountInput.oninput = updateTotals
  amountInput.onwheel = (e) => {
    // e.preventDefault()
    const val = parseInt(amountInput.value)
    amountInput.setAttribute(
      'value',
      e.deltaY < 0 ? val + FLOUR_STEP : val - FLOUR_STEP
    )
    if (parseInt(amountInput.value) < FLOUR_STEP) {
      amountInput.setAttribute('value', FLOUR_STEP)
    }
    updateTotals()
  }

  const hydrationInput = document.createElement('input')
  hydrationInput.classList.add('flour-entry-number')
  hydrationInput.setAttribute('placeholder', '%')
  hydrationInput.setAttribute('type', 'number')
  hydrationInput.setAttribute('value', DEFAULT_HYDRATION)
  hydrationInput.setAttribute('min', 1)
  hydrationInput.oninput = updateTotals
  hydrationInput.onwheel = (e) => {
    // e.preventDefault()
    const val = parseInt(hydrationInput.value)
    hydrationInput.setAttribute('value', e.deltaY < 0 ? val + 1 : val - 1)
    updateTotals()
  }

  const deleteButton = document.createElement('button')
  deleteButton.classList.add('flour-delete-button')
  deleteButton.innerHTML = 'X'
  deleteButton.onclick = () => {
    flourBlock.removeChild(newLine)
    updateTotals()
  }

  newLine.appendChild(getElementInTableCell(flourInput))
  newLine.appendChild(getElementInTableCell(amountInput))
  newLine.appendChild(getElementInTableCell(hydrationInput))
  newLine.appendChild(getElementInTableCell(deleteButton))

  // insert newline at second to last position in flour block
  const position = flourBlock.children[0].children.length - 1
  const buttonRow = flourBlock.children[0].children[position]

  flourBlock.children[0].insertBefore(newLine, buttonRow)
}

const getElementInTableCell = (el) => {
  const cell = document.createElement('td')
  cell.appendChild(el)
  return cell
}

// create one initial line by default
addFlour()
updateTotals()

document.getElementById('newline-button').onclick = (e) => {
  addFlour()
  updateTotals()
}
