function generateBlocks() {
    document.body.innerHTML =
    `<div style = "width:250px; height:50px"><div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div></div>
    
    <div style = "width:250px; height:50px"><div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div></div>
    
    <div style = "width:250px; height:50px"><div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div></div>
    
    <div style = "width:250px; height:50px"><div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div></div>
    
    <div style = "width:250px; height:50px"><div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div>
    <div style = "background-color:${getRandomColor()}; width:50px; height:50px; float: left"></div></div>`

}

function generateBlocksInterval() {
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
