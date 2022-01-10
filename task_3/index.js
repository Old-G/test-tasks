import { addLoan } from './addLoan.js'
import { showCardList } from './cardList.js'

document.addEventListener('DOMContentLoaded', function () {
  async function cardList() {
    const response = await fetch('../task_2/loanProducts.json')
    const data = await response.json()
    return data
  }

  async function showCard() {
    const data = await cardList()
    return showCardList(data)
  }

  showCard()
  addLoan()
})
