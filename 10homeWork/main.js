function generateBlocks() {
  document.body.innerHTML = ''
  for (let i = 0; i < 5; i++) {
    document.body.innerHTML += `<div class="blocks"></div>`
  }
  const blocksList = document.body.querySelectorAll(".blocks")
  for (let i = 0; i < 5; i++) {
    blocksList.forEach((element) => { element.innerHTML += `<div class="oneblock" style = "background-color:${getRandomColor()}"></div>` });
  }
}

function generateBlocksInterval() {
  document.body.innerHTML = ''
  setInterval (generateBlocks, 1000)
}

function getRandomColor() {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
