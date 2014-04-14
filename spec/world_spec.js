function fakeRand(values){

  return function() {
      return values.shift();
  }
}

describe("the world", function() {

  var world;

  beforeEach(function() {
      world = new World(fakeRand([1, 2, 3, 4]));
  });

  it("should be created with 16 cells", function() {
      expect(world.width).toEqual(4);
      expect(world.height).toEqual(4);
      /* expect(world.cells[0].length).toEqual(4);
      expect(world.cells[1].length).toEqual(4);
      expect(world.cells[2].length).toEqual(4);
      expect(world.cells[3].length).toEqual(4); */
  });


  it("should have exactly two tiles set to 2", function() {
    expect(world.cells.length).toEqual(2);
    expect(world.cells[0].value).toEqual(2);
    expect(world.cells[1].value).toEqual(2);

    // expect(world.cells[1][2]).toEqual(2);
  });

  it("should 'randomly' positioned the cells", function() {
    expect(world.cells[0].x).toEqual(1);
    expect(world.cells[0].y).toEqual(2);
    expect(world.cells[1].x).toEqual(3);
    expect(world.cells[1].y).toEqual(4);


  });

  it("should be possible to create a cell", function() {

  });

});
