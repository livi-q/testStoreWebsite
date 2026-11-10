let stocks = [
{ Die: "Frazzetto glasses", price: 1.00, category: "human, Frazzetto", img : "itemImage/glasses.jpg", clicks: 0},
{ Die : "Frazzetto skin", price: 900.00, category: "human, Frazzetto", img : "itemImage/#.png", clicks: 0},
{ Die : "Frazzetto right eyeball", price: 8.00, category: "human, Frazzetto", img : "itemImage/FeyeR.png", clicks: 0},
{ Die : "Frazzetto left eyeball", price: 102.00, category: "human, Frazzetto", img : "itemImage/FeyeL.png", clicks: 0},
{ Die : "Frazzetto teeth", price: 1.00, category: "human, Frazzetto", img : "itemImage/fTeeth.jpg", clicks: 0},
{ Die : "Frazzetto bubble tea", price: 6.50, category: "food, Frazzetto", img : "itemImage/fBoba.png", clicks: 0},
{ Die : "We're playing Magic after school today", price: 0.50, category: "chud", img : "itemImage/magic.png", clicks: 0},
{ Die : "lmaooooo wth", price: 30.90, category: "chud", img : "itemImage/lmaoWth.jgn", clicks: 0},
{ Die : "Sock", price: 7.00, category: "clothes", img : "itemImage/socks.jpg", clicks: 0},
{ Die : "Whalen missing hair", price: 0.01, category: "human, chud, clothes, Whalen", img : "itemImage/wMissingHair.jpg", clicks: 0},
{ Die : "Whalen bald patch", price: -20.00, category: "human, chud, clothes, Whalen", img : "itemImage/wbaldPatch.jpg", clicks: 0},
{ Die : "Whalen address from eva", price: 50.00, category: "chud", img : "itemImage/whouse.jpg", clicks: 0},
{ Die : "Poopyshoes", price: 200.00, category: "clothes", img : "itemImage/ellashoe.jpg", clicks: 0},
{ Die : "Ella", price: 12.26, category: "human", img : "itemImage/#.jpg", clicks: 0},
{ Die : "Mia", price: 1.04, category: "human", img : "itemImage/#.jpg", clicks: 0},
{ Die : "Eva's Dog Skinwalker", price: 8900.00, category: "human, food", img : "itemImage/#.jpg", clicks: 0},
{ Die : "My brown cat ellie", price: 0.00, category: "human, food", img : "itemImage/#.jpg", clicks: 0},
{ Die : "Oliver (white cat) pelt", price: 18000.00, category: "clothes", img : "itemImage/#.jpg", clicks: 0},
{ Die : "Toxoplasmosis", price: 4.00, category: "food", img : "itemImage/toxoplasmosis.jpg", clicks: 0},
{ Die : "Litterbox nerds cluster", price: 27.00, category: "food", img : "itemImage/#.jpg", clicks: 0},
{ Die : "Used toilet paper", price: 67.00, category: "clothes, food", img : "itemImage/litterboxNerds.jpg", clicks: 0},
{ Die : "Joann chocolate (lightly used)", price: 300.00, category: "food", img : "itemImage/joannChoco.jpg", clicks: 0},
{ Die : "Cooking Tree", price: 100000000.00, category: "food", img : "itemImage/cookingtree.png", clicks: 0},
]

stocks.forEach(function(item){
        const main = document.getElementById("main")
        const thign = document.createElement('div')
        thign.classList.add('card');
        thign.dataset.item= `${item.Die}`

        thign.innerHTML=`<img src=${item.img} class="itemImage">
            <p class="itemName">${item.Die} -- ${item.price}</p>`

        main.appendChild(thign);
    })   