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
    this.numDonuts += 1;
    if(this.numMultipliers >=1){
    this.numDonuts += Math.pow(1.2, this.numMultiplierCount);
    }
    else if(this.numAutoclickers >= 1){
      this.numDonuts += Math.pow(.10,this.numAutoClickerCount);

    }




  }
  addAutoclicker() {

    // for (let i = 0; i < this.numAutoclickers; i++) {
    // }
    if (this.numDonuts >= 100) {
      this.numDonuts -= this.autoclickercost;
      this.numAutoclickers += 1;
    }
    }



  addMultipliers() {
    if (this.numDonuts >= 10) {
      this.numDonuts -= this.multipliercost ;
      this.numMultipliers += 1;
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
    let currentAutoclickerCost = (this.autoclickercost * (this.addAutoclicker  *.10));
     if(this.numDonuts >= currentAutoclickerCost){
      this.numDonuts -= currentAutoclickerCost;
      this.numAutoclickers++;
     }
  }
  addMultiplierCount() {
    if (this.numMultipliers > 0) {
      this.numDonuts += Math.pow(1.2, this.numMultiplierCount);
      setInterval(this.numDonut, 1000);
    }
  }
  addAutoClickerCount() {
    if (this.addAutoclicker) {
      this.addAutoclicker += Math.pow(.10, this.numAutoClickerCount);
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

