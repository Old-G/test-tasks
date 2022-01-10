import { showCardList } from './cardList.js'

const productForm = document.querySelector('#product-form')

const form = function (card) {
  productForm.id = card.id

  productForm.innerHTML = `
        <h1 class="main-container-updateblock-title">
          <span>${
            card.id ? 'Редактирование:' : 'Создание'
          }</span> <span id="update-title">${
    card.id ? card.title : ' продукта'
  }</span>
        </h1>
        <div class="main-container-updateblock-form-product">
          <div class="main-container-updateblock-form-product__label">
            Product Name
          </div>
          <input
            class="main-container-updateblock-form-product__input"
            id="title"
            name="title"
            type="text"
            placeholder="${card.title}"
            value="${card.title}"
          />
        </div>
        <div class="main-container-updateblock-form-amount">
          <div class="main-container-updateblock-form-amount-wrapper">
            <div
              class="
                main-container-updateblock-form-amount-wrapper__label
              "
            >
              Min Amount
            </div>
            <input
             class="
              main-container-updateblock-form-amount-wrapper__input
              "
              id="minAmount"
              name="minAmount"
              type="text"
              placeholder="${card.minAmount}"
              value="${card.minAmount}"
            />
          </div>
          <div class="main-container-updateblock-form-amount-wrapper">
            <div
              class="
                main-container-updateblock-form-amount-wrapper__label
              "
            >
              Max Amount
            </div>
            <input
              class="
                main-container-updateblock-form-amount-wrapper__input
              "
              id="maxAmount"
              name="maxAmount"
              type="text"
              placeholder="${card.maxAmount}"
              value="${card.maxAmount}"
            />
          </div>
        </div>
        <div class="main-container-updateblock-form-term">
          <div class="main-container-updateblock-form-term-wrapper">
            <div
              class="main-container-updateblock-form-term-wrapper__label"
            >
              Min Term
            </div>
            <input
              class="main-container-updateblock-form-term-wrapper__input"
              id="minTerm"
              name="minTerm"
              type="text"
              placeholder="${card.minTerm}"
              value="${card.minTerm}"
            />
          </div>
          <div class="main-container-updateblock-form-term-wrapper">
            <div
              class="main-container-updateblock-form-term-wrapper__label"
            >
              Max Term
            </div>
            <input
              class="main-container-updateblock-form-term-wrapper__input"
              id="maxTerm"
              name="maxTerm"
              type="text"
              placeholder="${card.maxTerm}"
              value="${card.maxTerm}"
            />
          </div>
        </div>
        <div>
          <div class="main-container-updateblock-form-annual">
            <div class="main-container-updateblock-form-annual__label">
              Annual Interest Rate
            </div>
            <input
              class="main-container-updateblock-form-annual__input"
              id="annualInterestRate"
              name="annualInterestRate"
              type="text"
              placeholder="${card.annualInterestRate}"
              value="${card.annualInterestRate}"
            />
          </div>
        </div>
        ${
          !card.id
            ? `
        <button
          class="main-container-updateblock-form__btn"
          data-action="create"
        >
          Создать
        </button>
        `
            : `
        <button
          class="main-container-updateblock-form__btn"
          data-action="update"
          data-id=${card.id}
        >
          Сохранить
        </button>
        <button
          class='main-container-updateblock-form__btn'
          data-action='delete'
          data-id=${card.id}
        >
          Удалить
        </button> 
        `
        }
        
      `

  const currentCard = document.getElementById(`${card.id}`)

  productForm.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target.dataset.action === 'create') {
      const title = document.getElementById('title').value
      const minAmount = document.getElementById('minAmount').value
      const maxAmount = document.getElementById('maxAmount').value
      const minTerm = document.getElementById('minTerm').value
      const maxTerm = document.getElementById('maxTerm').value
      const annualInterestRate =
        document.getElementById('annualInterestRate').value

      const card = {
        id: Math.random().toString(36).substr(2, 9),
        title,
        minAmount,
        maxAmount,
        minTerm,
        maxTerm,
        annualInterestRate,
      }

      async function cardList() {
        const response = await fetch('../task_2/loanProducts.json')
        const data = await response.json()
        data.push(card)
        console.log(data)
        return data
      }

      async function showCard() {
        const data = await cardList()
        return showCardList(data)
      }

      showCard()

      console.log('card created')
    } else if (e.target.dataset.action === 'update') {
      if (card.id === productForm.id) {
        currentCard.children[0].innerHTML = productForm.title.value
        currentCard.children[1].children[0].children[1].innerHTML =
          productForm.minAmount.value
        currentCard.children[1].children[1].children[1].innerHTML =
          productForm.maxAmount.value
        currentCard.children[2].children[0].children[1].innerHTML =
          productForm.minTerm.value
        currentCard.children[2].children[1].children[1].innerHTML =
          productForm.maxTerm.value
        currentCard.children[3].children[1].innerHTML =
          productForm.annualInterestRate.value
      }

      if (card.id === productForm.id) {
        card.title = currentCard.children[0].innerHTML
        card.minAmount =
          currentCard.children[1].children[0].children[1].innerHTML
        card.maxAmount =
          currentCard.children[1].children[1].children[1].innerHTML
        card.minTerm = currentCard.children[2].children[0].children[1].innerHTML
        card.maxTerm = currentCard.children[2].children[1].children[1].innerHTML
        card.annualInterestRate = currentCard.children[3].children[1].innerHTML
      }

      console.log('card updated')
    } else if (e.target.dataset.action === 'delete') {
      document.getElementById(`${card.id}`).remove()
      console.log('card deleted')
    }
  })
}

export { form }
