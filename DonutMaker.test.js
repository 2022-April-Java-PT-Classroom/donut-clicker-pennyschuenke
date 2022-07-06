import DonutMaker from "./DonutMaker";

describe("DonutMaker", () => {

  test(" does it add a donut and return that value", () => {
    const underTest = new DonutMaker(0);
    underTest.addDonut();
    expect(underTest.numDonuts).toEqual(1);
  });

  test(" does it add an autoclicker with 100 donuts", () => {
    const underTest = new DonutMaker(100,0);
    underTest.addAutoclicker();
    expect(underTest.numDonuts).toEqual(0);
    expect(underTest.numAutoclickers).toEqual(1);
  });

  test("should not allow autoclicker purchase with 99 donuts", () => {
    const underTest = new DonutMaker(99,0);
    underTest.addAutoclicker();
    expect(underTest.numDonuts).toEqual(99);
    expect(underTest.numAutoclickers).toEqual(0);
  });

  test("should increase the cost of an autoclicker by 10%",() => {
     const underTest = new DonutMaker(110,1,0);
     underTest.addAutoclicker();
     expect(underTest.numDonuts).toEqual(0)
     expect(underTest.numAutoclickers).toEqual(2);
  });

  test("should increase the cost of each extra autoclicker by 10%",()=>{
    const underTest = new DonutMaker(121,2,0);
    underTest.addAutoclicker();
    expect(underTest.numDonuts).toEqual(0);
    expect(underTest.numAutoclickers).toEqual(3);
  });

  

  


});
