import { form } from './productForm.js'

const cardList = document.getElementById('card-list')

const showCardList = function (array) {
  for (let i = 0; i < array.length; i++) {
    const data = array[i]

    const div = document.createElement('div')
    div.classList.add('main-container-leftbar__card')
    div.id = data.id
    div.innerHTML = `
      <div class="main-container-leftbar__card-title" id="card-title">${data.title}</div>
      <div class="main-container-leftbar__card-block">
        <div>
          <div class="main-container-leftbar__card-date">Min Amount</div>
          <div class="main-container-leftbar__card-title" id="card-minAmount">${data.minAmount}</div>
        </div>
        <div>
          <div class="main-container-leftbar__card-date">Max Amount</div>
          <div class="main-container-leftbar__card-title" id="card-maxAmount">${data.maxAmount}</div>
        </div>
      </div>
      <div class="main-container-leftbar__card-block">
        <div>
          <div class="main-container-leftbar__card-date">Min Term</div>
          <div class="main-container-leftbar__card-title" id="card-minTerm">${data.minTerm}</div>  
        </div>
        <div>
          <div class="main-container-leftbar__card-date">Max Term</div>
          <div class="main-container-leftbar__card-title" id="card-maxTerm">${data.maxTerm}</div>
        </div>
      </div>
      <div class="main-container-leftbar__card-annual">
        <div class="main-container-leftbar__card-date">Annual Interest Rate</div>
        <div class="main-container-leftbar__card-title" id="card-annualInterestRate">${data.annualInterestRate}</div>
      </div>
    `

    if (div.id === '1') {
      div.classList.add('active')
      form(data)
    }

    cardList.appendChild(div)
  }

  cardList.addEventListener('click', (e) => {
    const currentCard = array.find((data) => {
      return data.id === e.target.parentNode.id
    })

    let el = document.querySelector('.active')
    const currentEl = document.getElementById(e.target.parentNode.id)

    if (el) {
      el.classList.remove('active')
    }

    currentEl.classList.add('active')

    form(currentCard)
  })
}
export { showCardList }
