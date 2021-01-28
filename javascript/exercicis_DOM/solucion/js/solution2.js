
let productList = [];
const productInput = document.querySelector("#ex12");
const addBtn = document.querySelector("#ex12-add-button");
const showBtn = document.querySelector("#ex12-show-button")
const shoppingList = document.querySelector("#shopping-list");
productInput.addEventListener('keyup',()=>{
    productInput.value ? addBtn.disabled = false : addBtn.disabled = true;
});
//jquery syntax, requiered if we want to control bootstraps's component
// we hide the component
$("#successful-alert").hide();
addBtn.addEventListener('click', ()=>{
    productList.push(productInput.value);
    //let's show the alert to inform the user that product has been added
    $('#successful-alert').show(700);
    //the message goes away after 2 seg
    setTimeout(()=>{
        $('#successful-alert').hide(600)
    },2000)
    if(showBtn.disabled){
        showBtn.disabled = false;
    }
    productInput.value = "";

});

showBtn.addEventListener('click', ()=>{
    productList.forEach(product =>{
        const item = `<li>${product}</li>`;
        shoppingList.insertAdjacentHTML('beforeend', item);
    });
    addBtn.disabled = true;
    showBtn.disabled = true;
    productList.length = 0;
})



let productList1 = [];
const productInput1 = document.querySelector("#ex12-1");
const addBtn1 = document.querySelector("#ex12-1-add-button");
const showBtn1 = document.querySelector("#ex12-1-show-button")
const shoppingList1 = document.querySelector("#shopping-list-1");
const orderBtn = document.querySelector("#ex12-1-order-button");
productInput1.addEventListener('keyup',()=>{
    productInput1.value ? addBtn1.disabled = false : addBtn1.disabled = true;
});

$("#successful-alert-1").hide();
addBtn1.addEventListener('click', ()=>{
    productList1.push(productInput1.value);
    //let's show the alert to inform the user that product has been added
    $('#successful-alert-1').show(700);
    //the message goes away after 2 seg
    setTimeout(()=>{
        $('#successful-alert-1').hide(600)
    },2000)
    if(showBtn1.disabled){
        showBtn1.disabled = false;
    }
    productInput1.value = "";

});

showBtn1.addEventListener('click', ()=>{
    productList1.forEach(product =>{
        const item = `<li>${product}</li>`;
        shoppingList1.insertAdjacentHTML('beforeend', item);
    });
    addBtn1.disabled = true;
    showBtn1.disabled = true;
    productList1.length = 0;
    orderBtn.disabled = false;
});

orderBtn.addEventListener("click", ()=>{
    let itemList = shoppingList1.outerText.split("\n");
    let sortedList = itemList.sort();
    //let's clear the list using a while loop
    while(shoppingList1.firstChild){
        shoppingList1.removeChild(shoppingList1.lastChild);
    }
    sortedList.forEach(product =>{
        const item = `<li>${product}</li>`;
        shoppingList1.insertAdjacentHTML('beforeend', item);
    });
    orderBtn.disabled = true;
});



let productList2 = [
    {
        Meat:[]
    },
    {
        Fruit_Vegetable:[]
    },
    {
        Dairy:[]
    },
    {
        Bakery:[]
    }

];
const productInput2 = document.querySelector("#ex12-2");
const addBtn2 = document.querySelector("#ex12-2-add-button");
const showBtn2 = document.querySelector("#ex12-2-show-button")
const shoppingList2 = document.querySelector("#shopping-list-2");
const orderBtn2 = document.querySelector("#ex12-2-order-button");
const shoppingSection = document.querySelector("#input-shopping-section");
$("#successful-alert-2").hide();

function addProduct(section, product){
    switch(section){
        case "Meat":
            productList2[0].Meat.push(product);
            break;
        case "Fruit_Vegetable":
            productList2[1].Fruit_Vegetable.push(product);
            break;
        case "Dairy":
            productList2[2].Dairy.push(product);
            break;
        case "Backry":
            productList2[3].Bakery.push(product);
            break;
        default:
            console.log("Opsss.. something went wrong...");
        
    }
}


productInput2.addEventListener('keyup',()=>{
    productInput2.value ? addBtn2.disabled = false : addBtn2.disabled = true;
});

addBtn2.addEventListener('click', ()=>{
    //let's show the alert to inform the user that product has been added
    addProduct(shoppingSection.value, productInput2.value);
    $('#successful-alert-2').show(700);
    //the message goes away after 2 seg
    setTimeout(()=>{
        $('#successful-alert-2').hide(600)
    },2000)
    if(showBtn2.disabled){
        showBtn2.disabled = false;
    }
    productInput2.value = "";

});

showBtn2.addEventListener('click', ()=>{
    //let's empty the list from the DOM
    shoppingList2.innerHTML = "";
    //let's rebuild the list
    productList2.forEach(section =>{
		for (const [sectionName, subList] of Object.entries(section)){
                const sectionTitle = `<h4>${sectionName}:</h4>`;
                shoppingList2.insertAdjacentHTML('beforeend', sectionTitle);
			if(subList.length > 0){
                subList.forEach(product =>{
                    const item = `<li>${product}</li>`;
                    shoppingList2.insertAdjacentHTML('beforeend', item);
                })
			}else{
                const emptyList = `<li>Empty list</li>`;
                shoppingList2.insertAdjacentHTML('beforeend', emptyList);
			}	
		}
    });
    orderBtn2.disabled = false;
});

orderBtn2.addEventListener("click", ()=>{
    //remove all the children elements
    shoppingList2.innerHTML = "";
    productList2.forEach(section =>{
        for(const [sectionName, subList] of Object.entries(section)){
            const sectionTitle = `<h4>${sectionName}</h4>`;
            shoppingList2.insertAdjacentHTML('beforeend', sectionTitle);
            if(subList.length > 0){
                subList.sort().forEach(product =>{
                    const item = `<li>${product}</li>`;
                    shoppingList2.insertAdjacentHTML('beforeend', item);
                })
            }else{
                const emptyList = `<li>Empty list</li>`;
                shoppingList2.insertAdjacentHTML('beforeend', emptyList);
            }
        }
    })

});