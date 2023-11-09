const asyncDataPagination = async () => {
  async function getData() {
    const url =
      "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true";

    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async function main() {
    const tableData = await getData();
    let currentPage = 1;
    let rows = 50;
    const tableHeaderList = document.querySelectorAll('.col-head')
    const fname = document.querySelector(".fname");
    const lname = document.querySelector(".lname");
    const tel = document.querySelector(".tel");
    const address = document.querySelector(".address");
    const city = document.querySelector(".city");
    const state = document.querySelector(".state");
    const zip = document.querySelector(".zip");

    function displayList(arrData, rowPerPage, page) {
      const tableBody = document.querySelector(".table_body");
      let tableBodyHTMLString = "";
      page--;

      const start = rowPerPage * page;
      const end = start + rowPerPage;
      const paginatedData = arrData.slice(start, end);

      const drawPaginatedData = () => {
        paginatedData.forEach((el) => {
          const rowHTML = `
            <div class="table_row">
            <p class="col">${el.fname}</p>
            <p class="col">${el.lname}</p>
            <p class="col">${el.tel}</p>
            <p class="col">${el.address}</p>
            <p class="col">${el.city}</p>
            <p class="col">${el.state}</p>
            <p class="col">${el.zip}</p>
            </div>
            `;
          tableBodyHTMLString += rowHTML;
        });
        tableBody.innerHTML = tableBodyHTMLString;
      };

      drawPaginatedData();

      fname.addEventListener("click", () => {
        tableBody.innerHTML = '';
        tableBodyHTMLString = ''
        if (!fname.classList.contains('descending') && !fname.classList.contains('ascending')) {
          fname.classList.add('descending')
          paginatedData.sort((a, b) => (a.fname < b.fname ? 1 : -1));
          drawPaginatedData();
        }
        else if (fname.classList.contains('descending')) {
          fname.classList.remove('descending')
          fname.classList.add('ascending')
          paginatedData.sort((a, b) => (a.fname > b.fname ? 1 : -1));
          drawPaginatedData();
        }
        else if (fname.classList.contains('ascending')) {
          fname.classList.remove('ascending')
          fname.classList.add('descending')
          paginatedData.sort((a, b) => (a.fname < b.fname ? 1 : -1));
          drawPaginatedData();
        }
      });

      lname.addEventListener("click", () => {
        tableBody.innerHTML = '';
        tableBodyHTMLString = ''
        if (!lname.classList.contains('descending') && !lname.classList.contains('ascending')) {
          lname.classList.add('descending')
          paginatedData.sort((a, b) => (a.lname < b.lname ? 1 : -1));
          drawPaginatedData();
        }
        else if (lname.classList.contains('descending')) {
          lname.classList.remove('descending')
          lname.classList.add('ascending')
          paginatedData.sort((a, b) => (a.lname > b.lname ? 1 : -1));
          drawPaginatedData();
        }
        else if (lname.classList.contains('ascending')) {
          lname.classList.remove('ascending')
          lname.classList.add('descending')
          paginatedData.sort((a, b) => (a.lname < b.lname ? 1 : -1));
          drawPaginatedData();
        }
      });

      tel.addEventListener("click", () => {
        tableBody.innerHTML = '';
        tableBodyHTMLString = ''
        if (!tel.classList.contains('descending') && !tel.classList.contains('ascending')) {
          tel.classList.add('descending')
          paginatedData.sort((a, b) => (a.tel < b.tel ? 1 : -1));
          drawPaginatedData();
        }
        else if (tel.classList.contains('descending')) {
          tel.classList.remove('descending')
          tel.classList.add('ascending')
          paginatedData.sort((a, b) => (a.tel > b.tel ? 1 : -1));
          drawPaginatedData();
        }
        else if (tel.classList.contains('ascending')) {
          tel.classList.remove('ascending')
          tel.classList.add('descending')
          paginatedData.sort((a, b) => (a.tel < b.tel ? 1 : -1));
          drawPaginatedData();
        }
      });

      address.addEventListener("click", () => {
        tableBody.innerHTML = '';
        tableBodyHTMLString = ''
        if (!address.classList.contains('descending') && !address.classList.contains('ascending')) {
          address.classList.add('descending')
          paginatedData.sort((a, b) => (a.address < b.address ? 1 : -1));
          drawPaginatedData();
        }
        else if (address.classList.contains('descending')) {
          address.classList.remove('descending')
          address.classList.add('ascending')
          paginatedData.sort((a, b) => (a.address > b.address ? 1 : -1));
          drawPaginatedData();
        }
        else if (address.classList.contains('ascending')) {
          address.classList.remove('ascending')
          address.classList.add('descending')
          paginatedData.sort((a, b) => (a.address < b.address ? 1 : -1));
          drawPaginatedData();
        }
      });

      city.addEventListener("click", () => {
        tableBody.innerHTML = '';
        tableBodyHTMLString = ''
        if (!city.classList.contains('descending') && !city.classList.contains('ascending')) {
          city.classList.add('descending')
          paginatedData.sort((a, b) => (a.city < b.city ? 1 : -1));
          drawPaginatedData();
        }
        else if (city.classList.contains('descending')) {
          city.classList.remove('descending')
          city.classList.add('ascending')
          paginatedData.sort((a, b) => (a.city > b.city ? 1 : -1));
          drawPaginatedData();
        }
        else if (city.classList.contains('ascending')) {
          city.classList.remove('ascending')
          city.classList.add('descending')
          paginatedData.sort((a, b) => (a.city < b.city ? 1 : -1));
          drawPaginatedData();
        }
      });

      state.addEventListener("click", () => {
        tableBody.innerHTML = '';
        tableBodyHTMLString = ''
        if (!state.classList.contains('descending') && !state.classList.contains('ascending')) {
          state.classList.add('descending')
          paginatedData.sort((a, b) => (a.state < b.state ? 1 : -1));
          drawPaginatedData();
        }
        else if (state.classList.contains('descending')) {
          state.classList.remove('descending')
          state.classList.add('ascending')
          paginatedData.sort((a, b) => (a.state > b.state ? 1 : -1));
          drawPaginatedData();
        }
        else if (state.classList.contains('ascending')) {
          state.classList.remove('ascending')
          state.classList.add('descending')
          paginatedData.sort((a, b) => (a.state < b.state ? 1 : -1));
          drawPaginatedData();
        }
      });

      zip.addEventListener("click", () => {
        tableBody.innerHTML = '';
        tableBodyHTMLString = ''
        if (!zip.classList.contains('descending') && !zip.classList.contains('ascending')) {
          zip.classList.add('descending')
          paginatedData.sort((a, b) => (a.zip < b.zip ? 1 : -1));
          drawPaginatedData();
        }
        else if (zip.classList.contains('descending')) {
          zip.classList.remove('descending')
          zip.classList.add('ascending')
          paginatedData.sort((a, b) => (a.zip > b.zip ? 1 : -1));
          drawPaginatedData();
        }
        else if (zip.classList.contains('ascending')) {
          remove.classList.remove('ascending')
          zip.classList.add('descending')
          paginatedData.sort((a, b) => (a.zip < b.zip ? 1 : -1));
          drawPaginatedData();
        }
      });
    }

    function displayPagination(arrData, rowPerPage) {
      const paginationBody = document.querySelector(".pagination");
      const pagesCount = Math.ceil(arrData.length / rowPerPage);
      const ulEl = document.createElement("div");
      ulEl.classList.add("pagination_list");

      for (let i = 0; i < pagesCount; i++) {
        const liEl = displayPaginationBtn(i + 1);
        ulEl.appendChild(liEl);
      }
      paginationBody.appendChild(ulEl);
    }

    function displayPaginationBtn(page) {
      const liEl = document.createElement("p");
      liEl.classList.add("pagination_item");
      liEl.textContent = page;

      if (currentPage == page) liEl.classList.add("pagination_item-active");

      liEl.addEventListener("click", () => {
        currentPage = page;
        displayList(tableData, rows, currentPage);
        tableHeaderList.forEach((el) => {
          el.classList.remove('descending')
          el.classList.remove('ascending')
        })

        let currentItemLi = document.querySelector(".pagination_item-active");
        currentItemLi.classList.remove("pagination_item-active");

        liEl.classList.add("pagination_item-active");
      });

      return liEl;
    }

    displayList(tableData, rows, currentPage);
    displayPagination(tableData, rows);
  }

  main();
};

asyncDataPagination();
