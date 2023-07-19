const flourBlock = document.getElementById('flour-block')

const html =
  'Flour: <input class="flour-name" placeholder="wholemeal"> Amount: <input class="flour-amount" type="number" placeholder="grams" />'

const addFlour = () => {
  const newLine = document.createElement('div')
  newLine.innerHTML = html
  flourBlock.appendChild(newLine)
}

document.getElementById('newline').onclick = (e) => addFlour()

// create one initial line by default
addFlour()
