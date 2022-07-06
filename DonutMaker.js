 class DonutMaker{



   
   
    constructor(numDonuts,numAutoclickers){
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
       
    }
    addDonut(){
      this.numDonuts += 1;
      
    }
    addAutoclicker(){ 

        let autoclickercost = 100;   

        for(let i = 0;i  < this.numAutoclickers; i++){
            autoclickercost += autoclickercost* .10;
        }

    if(this.numDonuts >=100){
        this.numDonuts -= autoclickercost;
        this.numAutoclickers +=1; 
       }

    }
   
  
    Multipliers(){

    }




    // let buttons = document.getElementsByTagName('button')
    //     for(let i = 0; i< buttons.addDonut; i++) {
    //         buttons[i].addEventListener('.click');
    //     }
    

    


}
 export default DonutMaker;
 
