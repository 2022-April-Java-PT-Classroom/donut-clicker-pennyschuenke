import DonutMaker from "./DonutMaker";

describe("DonutMaker", () => {

  test(" does it add a donut and return that value", () => {
    const underTest = new DonutMaker(0);
    underTest.addDonut();
    expect(underTest.numDonuts).toEqual(1);
  });

  test(" does it add an autoclicker with 100 donuts", () => {
    const underTest = new DonutMaker(100, 0, 100);
    underTest.addAutoclicker();
    expect(underTest.numDonuts).toEqual(0);
    expect(underTest.numAutoclickers).toEqual(1);
  });

  test("should not allow autoclicker purchase with 99 donuts", () => {
    const underTest = new DonutMaker(99, 0);
    underTest.addAutoclicker();
    expect(underTest.numDonuts).toEqual(99);
    expect(underTest.numAutoclickers).toEqual(0);
  });


  test("should increase the cost of each extra autoclicker by 10%", () => {
    const underTest = new DonutMaker(300, 1, 100, 0, 10,);
    underTest.addAutoclicker(1);
    underTest.addAutoclicker(1);
    expect(underTest.numDonuts).toEqual(100);
    expect(underTest.numAutoclickers).toEqual(3);
  });

  test(" does it activate autoclicker and return that value", () => {
    const underTest = new DonutMaker(10, 1, 0, 1);
    underTest.addDonut();
    underTest.addAutoclicker(1);
    expect(underTest.numDonuts).toEqual(11);
  });

  test(" does it add a multiplier with 10 donuts", () => {
    const underTest = new DonutMaker(10, 0, 0, 0, 10);
    underTest.addMultipliers();
    expect(underTest.numDonuts).toEqual(0);
    expect(underTest.numMultipliers).toEqual(1);
  });

  test(" does it add a multiplier with 21 donuts", () => {
    const underTest = new DonutMaker(21, 0, 0, 1, 11);
    underTest.addMultipliers();
    expect(underTest.numDonuts).toEqual(10);
    expect(underTest.numMultipliers).toEqual(2);
  });

    test("increase click value by 1.2 with a donut multiplier", () => {
      const underTest = new DonutMaker(10, 0, 0,1);
      underTest.addDonut();
      expect(underTest.numDonuts).toEqual(11);
  });

  test("increase click value by 1.44 with a second donut multiplier", () => {
    const underTest = new DonutMaker(10, 0, 2, 0);
    underTest.addDonut();
    expect(underTest.numDonuts).toEqual(11);
  });



});
