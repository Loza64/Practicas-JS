import datalist from './data.json' assert {type: 'json'};

let data = datalist;

let cardList = document.querySelector(".container-list");

const renderParagraft = (text) => {
  const textList = text.split('\n\n');
  return textList.map(item => `<p>${item}</p>`).join('\n');
};

const createItem = ({ _id, username, details }) => {
  const item = document.createElement("article");
  item.classList.add("item");
  item.dataset["id"] = _id;
  item.innerHTML = `
  <div class="head">
    <label>${username}</label>
  </div>
  <div class="body">
    ${renderParagraft(details)}
  </div>
  <div class="footer">
    <button class="btn btn-delete">ELiminar</button>
    <button class="btn btn-succes">Aceptar</button>
  </div>
  `
  return item;
}

const removeItem = (id, list) => {
  data = list.filter(item => item._id !== id)
}

const listItems = (list) => {
  list.forEach(item => {
    cardList.appendChild(createItem(item))
  })
}

window.addEventListener('load', listItems(data));

document.querySelectorAll("article").forEach((item) => {
  item.querySelector(".footer .btn-delete").addEventListener('click', (e) => {
    item.style.transform = "scale(0%)"
    setTimeout(() => {
      removeItem(item.dataset.id, data);
      item.style.display = "none";
    }, 900)
  })
})