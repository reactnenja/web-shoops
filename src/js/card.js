const cardSource = [
  {
    img: [
      "src/img/home/card-img-1.png",
      "src/img/home/card-img-2.png",
      "src/img/home/card-img-3.png",
      "src/img/home/card-img-4.png",
    ],
    price: 44.5,
    price_2: 50.5,
    p_text: [
      "Г/Ц Блинчики с мясом вес, Россия",
      "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
      "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
      "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
      "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
      "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    ],
    starts: [
      "src/img/icons/heart.svg",
      "src/img/icons/start.svg",
      "src/img/icons/starts-2.svg",
    ],
    percentage: "-50%",
  },
];
const news = [
  {
    img: [
      "src/img/home/news-img-1.png",
      "src/img/home/news-img-2.png",
      "src/img/home/news-img-3.png",
    ],
    date: "05.03.2021",
    h3: [
      "Режим использования масок и перчаток на территории магазинов",
      "Весеннее настроение для каждой",
      "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
    ],
    p: [
      `Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.`,
      `8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.`,
      `Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!`,
    ],
    button: "Подробнее",
  },
];
const cardGroup = document.querySelector(".cards");
const cardCards = document.querySelector(".card__new");
const cardOptions = document.querySelector(".card__opt");
const cardStatiy = document.querySelector(".statiy__news");
function displayProducts(cardSource) {
  let str = ``;

  cardSource.forEach((product) => {
    str += `
    <div class="card">
                  <div class="card__header">
                    <img src="${product.img[0]}" alt="product_cards" />
                    <div class="likes">
                      <img src="${product.starts[0]}" alt="product_cards" />
                    </div>
                    <div class="actions">
                      <span>${product.percentage}</span>
                    </div>
                  </div>
                  <div class="card__body">
                    <div class="card__body-content">
                      <div class="content-left">
                        <h3 class="content__price">${product.price}0₽</h3>
                        <span class="content__text">С картой</span>
                      </div>
                      <div class="content-right">
                        <h3 class="content__price">${product.price_2}0₽</h3>
                        <span class="content__text">Обычная</span>
                      </div>
                    </div>
                    <p class="card__body-p">
                      ${product.p_text[0]}
                    </p>
                    <div class="starts">
                      <img src="src/img/icons/start.svg" alt="starts" />
                      <img src="src/img/icons/start.svg" alt="starts" />
                      <img src="src/img/icons/start.svg" alt="starts" />
                      <img src="src/img/icons/start.svg" alt="starts" />
                      <img src="src/img/icons/start.svg" alt="starts" />
                    </div>
                    <button>В корзину</button>
                  </div>
                </div>

                <div class="card">
                  <div class="card__header">
                    <img src="${product.img[1]}" alt="products__cards" />
                    <div class="likes">
                      <img src="${product.starts[0]}" alt="products__cards" />
                    </div>
                    <div class="actions">
                      <span>${product.percentage}</span>
                    </div>
                  </div>
                  <div class="card__body">
                    <div class="card__body-content">
                      <div class="content-left">
                        <h3 class="content__price">${product.price}0₽</h3>
                        <span class="content__text">С картой</span>
                      </div>
                      <div class="content-right">
                        <h3 class="content__price">${product.price_2}0₽</h3>
                        <span class="content__text">Обычная</span>
                      </div>
                    </div>
                    <p class="card__body-p">
                      ${product.p_text[1]}
                    </p>
                    <div class="starts">
                      <img src="src/img/icons/start.svg" alt="starts" />
                      <img src="src/img/icons/start.svg" alt="starts" />
                      <img src="src/img/icons/start.svg" alt="starts" />
                      <img src="src/img/icons/start.svg" alt="starts" />
                      <img src="src/img/icons/start.svg" alt="starts" />
                    </div>
                    <button>В корзину</button>
                  </div>
                </div>
                <div class="card">
                  <div class="card__header">
                    <img src="${product.img[2]}" alt="products__cards" />
                    <div class="likes">
                      <img src="${product.starts[0]}" alt="products__cards" />
                    </div>
                    <div class="actions">
                      <span>${product.percentage}</span>
                    </div>
                  </div>
                  <div class="card__body">
                    <div class="card__body-content">
                      <div class="content-left">
                        <h3 class="content__price">${product.price}0₽</h3>
                        <span class="content__text">С картой</span>
                      </div>
                      <div class="content-right">
                        <h3 class="content__price">${product.price_2}0₽</h3>
                        <span class="content__text">Обычная</span>
                      </div>
                    </div>
                    <p class="card__body-p">
                      ${product.p_text[2]}
                    </p>
                    <div class="starts">
                      <img src="src/img/icons/start.svg" alt="starts" />
                      <img src="src/img/icons/start.svg" alt="starts" />
                      <img src="src/img/icons/start.svg" alt="starts" />
                      <img src="src/img/icons/start.svg" alt="starts" />
                      <img src="src/img/icons/start.svg" alt="starts" />
                    </div>
                    <button>В корзину</button>
                  </div>
                </div>

                <div class="card">
                  <div class="card__header">
                    <img src="${product.img[2]}" alt="cards" />
                    <div class="likes">
                      <img src="" alt="" />
                    </div>
                    <div class="actions">
                      <span>${product.percentage}</span>
                    </div>
                  </div>
                  <div class="card__body">
                    <div class="card__body-content">
                      <div class="content-left">
                        <h3 class="content__price">${product.price}0₽</h3>
                        <span class="content__text">С картой</span>
                      </div>
                      <div class="content-right">
                        <h3 class="content__price">${product.price_2}0₽</h3>
                        <span class="content__text">Обычная</span>
                      </div>
                    </div>
                    <p class="card__body-p">
                      ${product.p_text[2]}
                    </p>
                    <div class="starts">
                      <img src="src/img/icons/start.svg" alt="starts" />
                      <img src="src/img/icons/start.svg" alt="starts" />
                      <img src="src/img/icons/start.svg" alt="starts" />
                      <img src="src/img/icons/start.svg" alt="starts" />
                      <img src="src/img/icons/start.svg" alt="starts" />
                    </div>
                    <button>В корзину</button>
                  </div>
                </div>
      `;
  });

  cardGroup.innerHTML = str;
  cardCards.innerHTML = str;
  cardOptions.innerHTML = str;
}

displayProducts(cardSource);

function cardNews(news) {
  let span = ``;

  news.forEach((items) => {
    span += `
    <div class="statiy__card">
    <div class="statiy__card-head">
      <img src="${items.img[0]}" alt="card__news-img" />
    </div>
    <div class="statiy__card-body">
      <span>${items.date}</span>
      <h3 class="statiy__news-h3">${items.h3[0]}</h3>
      <p class="statiy__news-text">${items.p[0]}</p>
      <button class="statiy__more-btn">${items.button}</button>
    </div>
  </div>
  <div class="statiy__card">
    <div class="statiy__card-head">
      <img src="${items.img[1]}" alt="card__news-img" />
    </div>
    <div class="statiy__card-body">
      <span>${items.date}</span>
      <h3 class="statiy__news-h3">${items.h3[1]}</h3>
      <p class="statiy__news-text mt">${items.p[1]}</p>
    
      <button class="statiy__more-btn ">${items.button}</button>
    </div>
  </div>
  <div class="statiy__card">
    <div class="statiy__card-head">
      <img src="${items.img[2]}" alt="card__news-img" />
    </div>
    <div class="statiy__card-body">
      <span>${items.date}</span>
      <h3 class="statiy__news-h3">${items.h3[2]}</h3>
      <p class="statiy__news-text mb">${items.p[2]}</p>
      <button class="statiy__more-btn">${items.button}</button>
    </div>
  </div>        
        `;
  });

  cardStatiy.innerHTML = span;
}

cardNews(news);
