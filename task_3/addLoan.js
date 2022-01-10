import { form } from './productForm.js'

const addLoan = function () {
  const addButton = document.querySelector('#add-btn')

  addButton.addEventListener('click', function () {
    const card = {
      id: '',
      title: '',
      placeholder: ' ',
      minAmount: ' ',
      maxAmount: ' ',
      minTerm: ' ',
      maxTerm: ' ',
      annualInterestRate: ' ',
    }

    form(card)
  })
}

export { addLoan }
