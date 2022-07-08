import DonutMaker from "./DonutMaker";
import { displayStats } from "./util";
// import index from "./index.html";

renderPage();

function renderPage() {
    donutfunk();
    activateAutoClickers(); 
}



function donutfunk(){
   

const createDonut = new DonutMaker(0, 0, false, 0,10, 0, 0);
const createBtn = document.querySelector('#whips');
const createBtn1 = document.querySelector('#Glove');
const createBtn2 = document.querySelector('#Crush');
const points = document.querySelector('#points');
const  ac = document.querySelector('#ac');
const  ac1 = document.querySelector('#ac1');


displayStats(createBtn, createDonut);
updateCounts();

// createBtn.innerText = 'whips'
// createBtn1.innerText = 'Gloves'
// createBtn2.innerText = 'Crush'
// createBtn.appendChild(whips);
// createBtn1.appendChild(Gloves);
// createBtn2.appendChild(Crush);
  


createBtn.addEventListener('click', () => {
    createDonut.addDonut();
    updateCounts();
    console.log("hi");
});
createBtn1.addEventListener('click',()=>{
    createDonut.addMultipliers();
    createDonut.increaseMultiplierCost(); 
    updateCounts();
})
createBtn2.addEventListener('click',()=>{
    createDonut.addAutoclicker();
    updateCounts();
})

 setInterval(()=>{
    if(createDonut.activateAutoClickers == true){
        // console.log('firing');
        createDonut.addDonut();
    }
 },1000);

function updateCounts() {
    points.innerText = createDonut.numDonuts;
    ac1.innerText = createDonut.numMultipliers;
    ac.innerText = createDonut.numAutoclickers;

}
}
