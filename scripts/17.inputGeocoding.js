export default () => {
  const input = document.querySelector(".geocoding_input");
  const suggestList = document.querySelector(".geocoding_suggestList");
  const url =
    "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  const token = "c1c2f68a96a36959ec7049f21bf9ebf5e13e9847";
  let query;

  const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback(...args);
      }, wait);
    };
  };

  const callBackFun = async () => {
    query = input.value;
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify({ query: query }),
    };
    fetch(url, options)
      .then((response) => response.text())
      .then((result) => {
        const resData = JSON.parse(result);
        let suggestAllHTMLString = ''
        resData.suggestions.forEach((el) => {
          const suggestItemHTML = `
          <div class="suggest-item">
          <p>${el.value}</p>
          </div>
          `;
          suggestAllHTMLString += `${suggestItemHTML}`
          suggestList.innerHTML = `${suggestAllHTMLString}`
        });
        if (!resData.suggestions.length) {
          suggestList.innerHTML = ''
        }
      })
      .catch((error) => console.log("error", error));
  };

  const debounceTest = debounce(callBackFun, 1000);
  input.addEventListener("input", debounceTest);
};
