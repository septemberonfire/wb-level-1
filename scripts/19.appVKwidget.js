import localStorageRemains from "./20.localStorageRemains.js";
// для корректной работы нужно установить расширение в браузер 'CORS Unblock'
let postsLocalStore = "";

const main = () => {
  // ВК отправляет только 20 постов, поэтому создаём переменную totalPostCounter, которая будет отвечать за offset в дальнейшем
  let totalPostCounter = 0;
  let postListHTMLString = "";
  const postContainer = document.querySelector(".posts_body");
  
  localStorage.setItem('posts', postsLocalStore)

  const appVKwidget = async () => {
    const token =
      "2889755d2889755d2889755d3c2b9f4dee228892889755d4dc31a0173a86c1718d03001";
    const url = `https://api.vk.com/method/wall.get?domain=apiclub&offset=${totalPostCounter}&access_token=${token}&v=5.154`;

    let response = await fetch(url);

    const data = await response.json();

    totalPostCounter += data.response.items.length;

    data.response.items.forEach((el) => {
      // В данных, которые летят с ВК, скорее всего какие-то проблемы, потому что дата приходит некорректная.
      // Умножаю на 1000 для корректного отображения даты по совету одного из стажёров ^_^
      const postDate = new Date(el.date * 1000);
      const postHTML = `
    <div class="post_item">
        <div class="post_header">
          <p>ВКонтакте API</p>
          <p>${postDate.toLocaleString()}</p>
        </div>
        <div class="post_body">
          <p class="post_text">
            ${el.text}
          </p>
        </div>
        <div class="post_footer">
        <div class="post_footer-likes">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        class="post_like-icon"
        >
        <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.03396 2.05857C2.26589 2.75224 1.76684 3.83284 1.99493 5.42928C2.22332 7.02783 3.26494 8.68522 4.80436 10.3478C6.25865 11.9184 8.10962 13.4437 9.99996 14.874C11.8903 13.4437 13.7413 11.9184 15.1956 10.3478C16.735 8.68521 17.7766 7.02783 18.005 5.4293C18.233 3.83285 17.734 2.75224 16.9659 2.05856C16.1766 1.34572 15.055 1 14 1C12.1319 1 11.0923 2.08479 10.5177 2.68443C10.4581 2.7466 10.4035 2.80356 10.3535 2.85355C10.1582 3.04882 9.84166 3.04882 9.6464 2.85355C9.59641 2.80356 9.54182 2.7466 9.48224 2.68443C8.90757 2.08479 7.86797 1 5.99995 1C4.94495 1 3.82325 1.34573 3.03396 2.05857ZM2.36371 1.31643C3.37369 0.404274 4.75202 0 5.99995 0C8.07123 0 9.34539 1.11257 9.99996 1.77862C10.6545 1.11257 11.9287 0 14 0C15.2479 0 16.6262 0.404275 17.6362 1.31644C18.6674 2.24776 19.2668 3.66715 18.9949 5.5707C18.7233 7.47217 17.5149 9.31479 15.9294 11.0272C14.3355 12.7486 12.3064 14.3952 10.3 15.9C10.1222 16.0333 9.87773 16.0333 9.69995 15.9C7.69353 14.3952 5.66443 12.7485 4.0706 11.0272C2.48503 9.31478 1.27665 7.47217 1.00498 5.57072C0.733012 3.66716 1.33249 2.24776 2.36371 1.31643Z"
        fill="black"
        />
        </svg>
        <p class="post_like-counter">${el.likes.count}</p>
        </div>
        <div class="post_footer-comments">
        <img width="50" height="50" src="https://img.icons8.com/ios/50/speech-bubble--v1.png" alt="speech-bubble--v1" class="post_comment-icon"/>
        <p class="post_footer-commentsCounter">${el.comments.count}</p>
        </div>
        </div>
        </div>
        `;

      postListHTMLString += postHTML;
      postsLocalStore += 'a'
      localStorage.setItem(`posts`, postsLocalStore)
    });
    postContainer.innerHTML = postListHTMLString;
  };

  appVKwidget();

  // Когда скролл доходит до конца, вызываем функцию получения постов с ВК и отрисовки их на странице
  window.addEventListener("scroll", () => {
    if (
      postContainer.offsetHeight - window.scrollY < 890 &&
      postContainer.offsetHeight - window.scrollY > 885
    ) {
      localStorageRemains();
      return appVKwidget();
    }
  });

};

main();

