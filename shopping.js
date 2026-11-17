let stocks = [
{ Die: "Frazzetto extremely glasses", price: 1.00, category: "human, Frazzetto", img : "itemImage/glasses.jpg", clicks: 0},
{ Die : "Frazzetto skin (unethically sourced)", price: 900.00, category: "human, Frazzetto", img : "itemImage/skin.png", clicks: 0},
{ Die : "Frazzetto right eyeball", price: 8.00, category: "human, Frazzetto", img : "itemImage/FeyeR.png", clicks: 0},
{ Die : "Frazzetto teeth (good condition)", price: 1.00, category: "human, Frazzetto", img : "itemImage/fTeeth.png", clicks: 0},
{ Die : "Frazzetto left eyeball", price: 102.00, category: "human, Frazzetto", img : "itemImage/FeyeL.png", clicks: 0},
{ Die : "Frazzetto bubble tea ", price: 6.50, category: "disease, food, Frazzetto,", img : "itemImage/fBoba.png", clicks: 0},
{ Die : "We're playing Magic after school today", price: 0.50, category: "chud", img : "itemImage/magic.png", clicks: 0},
{ Die : "lmaooooo wth ", price: 30.90, category: "chud, Frazzetto", img : "itemImage/lmaoWth.png", clicks: 0},
{ Die : "Ella Sock (Shoe not included)", price: 7.00, category: "clothes", img : "itemImage/socks.png", clicks: 0},
{ Die : "Whalen missing hair", price: 0.01, category: "human, chud, clothes, Whalen", img : "itemImage/wMissingHair.png", clicks: 0},
{ Die : "Whalen bald patch", price: -20.99, category: "human, chud, clothes, Whalen", img : "itemImage/wbaldPatch.png", clicks: 0},
{ Die : "Whalen address from eva", price: 50.00, category: "chud", img : "itemImage/whouse.jpg", clicks: 0},
{ Die : "Poopyshoes ella", price: 200.00, category: "clothes", img : "itemImage/ellashoe.jpg", clicks: 0},
{ Die : "Ella J adoption", price: 12.26, category: "human", img : "itemImage/ella.png", clicks: 0},
{ Die : "Mia L adoption", price: 100.04, category: "human", img : "itemImage/mia.png", clicks: 0},
{ Die : "Eva's Dog Pheobe", price: 89.00, category: "human, food", img : "itemImage/evadog.jpg", clicks: 0},
{ Die : "fermented black beans", price: 0.00, category: "human, food", img : "itemImage/elio.png", clicks: 0},
{ Die : "Oliver (white cat) pelt", price: 18000.00, category: "clothes", img : "itemImage/oliver.png", clicks: 0},
{ Die : "Virulent Entity", price: 10.06, category: "chud, disease, human, food", img : "itemImage/entity.png", clicks: 0},
{ Die : "Toxoplasmosis", price: 4.89, category: "food", img : "itemImage/toxoplasmosis.jpg", clicks: 0},
{ Die : "Litterbox nerds cluster", price: 28.88, category: "food", img : "itemImage/litterboxNerds.jpg", clicks: 0},
{ Die : "Used sanitary paper", price: 67.00, category: "clothes, food", img : "itemImage/usedtp.jpg", clicks: 0},
{ Die : "Joann chocolate (lightly used)", price: 380.41, category: "food", img : "itemImage/joannChoco.jpg", clicks: 0},
{ Die : "Cooking Tree", price: 100000000.00, category: "food", img : "itemImage/cookingtree.png", clicks: 0},
]
let cart = {
    // item : {Die : "Item Name", amount: "Amount", price: 0},
}
let total = 0


stocks.forEach(function(item){
    const main = document.getElementById("main")
    const thign = document.createElement('a')
    thign.classList.add('card');
    thign.dataset.item= `${item.Die}`

    thign.innerHTML=`<img src=${item.img} class="itemImage">
        <p class="itemName">${item.Die} °•*➜$${item.price.toFixed(2)}</p>`

    main.appendChild(thign);
})   


const modal = document.getElementById("modal")

//click to get card
let cards = document.getElementsByClassName("card")
if (cards) {
    Array.from(cards).forEach(function(card1){
        let x = stocks.find(({Die}) => Die === card1.dataset.item)
        if (!(card1.dataset.item)){
            return
        }

        let Die = x.Die
        let price = x.price
        let category = x.category
        let img = x.img

        card1.addEventListener("click", function(){
            modal.style.display = "flex";
            const card = document.createElement("div")
            card.classList.add("buyCard")
            card.id = "buyCard"
            //making the card ot the thing
            card.innerHTML =   `
                <button type="button" class="close-btn" id = "close-btn">&times;</button>
                <h1 class = title>Product Information</h1>

                <div class="organize">
                    <div class="info">
                        <h2 class = itemname>${Die}</h2>
                        <h3 class = sub> Categories: ${category} </h3>
                        <h3 class = sub> Price : $${price}</h3>
                        <h3 class = sub> Cart:</h3>
                        <div class="addCart">
                            <img src="design/addcart.png" class="bg">
                            <button class= editcartbutton id = plusbtn>&plus;</button>
                            <button class= editcartbutton id = minusbtn>&minus;</button>
                            <h3 class = sub id = numero></h3>
                        </div>
                    </div>
                    <div class="display">
                        <img src="${img}" class="displayimg">
                    </div>
                </div>`
            modal.appendChild(card); 
            //close bn
            const xbtn = document.getElementById("close-btn")
            xbtn.addEventListener("click", function() {
                modal.style.display = "none";
                card.remove();
            });

            //functional butn
            const plusbtn = document.getElementById("plusbtn")
            plusbtn.addEventListener("click", ()=>{
                adcat(cart, card1.dataset.item);
            })
            const minusbtn = document.getElementById("minusbtn")
            minusbtn.addEventListener("click", ()=>{
                remoivcat(cart, card1.dataset.item)
            });

            //linkign thr cart
            let numero = document.getElementById("numero")
            if (cart[card1.dataset.item])  {
                numero.innerHTML = cart[card1.dataset.item].amount
            }else
            {
                numero.innerHTML = `0`
                
            }
            
        })
    })  
}



function  adcat(cart, item){
    const itemFound = stocks.find(({Die}) => Die === item)
    if (itemFound){console.log(itemFound.Die)} else {return "Nothing Added";}
    
    let title = itemFound.Die
    cart[title]? cart[title].amount +=1: cart[title]= {Die : itemFound.Die, amount: 1, price: itemFound.price}
    //cart.push({Die : itemFound.Die, amount: 1, price: itemFound.price})
    // Object.entries(cart).forEach(([key, element]) => {
    //     console.log(element)
    // })   
    console.log(cart)
    let numero = document.getElementById("numero")
    if (cart[title].amount < 1)  {
        numero.innerHTML = `0`
        
    }else
    {
        numero.innerHTML = cart[title].amount
    }
}

function  remoivcat(cart, item){
    const itemFound = stocks.find(({Die}) => Die === item)
    if (itemFound){console.log(itemFound.Die)} else {return "This item does not exist;";}
    let Die = itemFound.Die

    //html updates
    let numero = document.getElementById("numero")
    if (cart[Die].amount < 1){
        numero.innerHTML = `0`
        cart = cart.filter((item)=> item != Die)
        console.log(cart)
        return
    }
    cart[Die] ? cart[Die].amount -=1 : null;
    numero.innerHTML = cart[Die].amount
    
    //cart.push({Die : itemFound.Die, amount: 1, price: itemFound.price})
    // Object.entries(cart).forEach(([key, element]) => {
    //     console.log(element)
    // })  
    
    
}