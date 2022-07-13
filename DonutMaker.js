class DonutMaker {

  constructor(numDonuts, numAutoclickers, autoclickercost, numMultipliers, multipliercost, numMultiplierCount, numAutoClickerCount,AutoclickerActivated) {
    this.numDonuts = numDonuts;
    this.numAutoclickers = numAutoclickers;
    this.autoclickercost = autoclickercost;
    this.numMultipliers = numMultipliers;
    this.multipliercost = multipliercost;
    this.numMultiplierCount = numMultiplierCount;
    this.numAutoClickerCount = numAutoClickerCount;
    this.addAutoclickerActivated = AutoclickerActivated;

  }
  addDonut() {
   
    if(this.numMultipliers >=1){
    this.numDonuts += Math.pow(1.2, this.numMultiplierCount);
    }
    else if(this.numAutoclickers >= 1){
      this.numDonuts += Math.pow(1.10,this.numAutoClickerCount);

    }
    this.numDonuts += 1;

  }
  
  addAutoclicker() {
  

    for (let i = 0; i < this.numAutoClickerCount; i++) {
    
    }
    if (this.numDonuts >= this.autoclickercost) {
      this.numDonuts -= this.autoclickercost ;
      this.numAutoclickers += 1;
    }
    if(this.addAutoclicker >= 1){
      this.autoclickercost += Math.pow(1.2,this.autoclickercost);
      setInterval(this.numAutoClickerCount, 1000);
    }
    let autoclickercost =100;
    // if (this)
    }



  addMultipliers() {
    if (this.numDonuts >=this.multipliercost) {
      this.numDonuts -= this.multipliercost ;
      this.numMultipliers += 1;
    }
    if (this.multipliercost >= 1){
      this.multipliercost += Math.round(1.10,this.multipliercost);
    }
    if(this.numDonuts < 0){
      alert(this.multipliercost.addDonut + 'not enough whips');

    }

  }

  increaseMultiplierCost(){
    let currentMultipliercost = (this.multipliercost * (this.addMultipliers *1.2));
    if(this.numDonuts >= currentMultipliercost){
      this.numDonuts -= currentMultipliercost;
      this.numMultipliers++;
    }
  }
  increaseAutoclikerCost(){
    let currentAutoclickerCost = (this.autoclickercost * (this.addAutoclicker  * 1.10));
     if(this.numDonuts >= currentAutoclickerCost){
      this.numDonuts -= currentAutoclickerCost;
      this.numAutoclickers++;
     }
  }
  addMultiplierCount() {
    for (let i = 0; i < this.numAutoclickerCount; i++) {
    }
    if (this.numMultipliers > 0) {
      this.numDonuts +=  this.numMultiplierCount * 1.2 ;
      setInterval(this.numDonut , 1000);
    }
  }
  addAutoClickerCount() {
    if (this.addAutoclicker) {
      this.addAutoclicker += Math.round(this.numAutoClickerCount * 2.0);
      setInterval(this.numDonuts, 500);

    }
  }
  activateAutoClickers(){
    this.addAutoclickerActivated = true;
  }




  // let buttons = document.getElementsByTagName('button')
  //     for(let i = 0; i< buttons.addDonut; i++) {
  //         buttons[i].addEventListener('.click');
  //     }





}
export default DonutMaker;

