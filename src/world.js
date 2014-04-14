function World(rand) {
  'use strict';
    this.width = 4;
    this.height = 4;
    this.cells = [{value: 2, x: rand(), y: rand()},
                  {value: 2, x: rand(), y: rand()}
                  ];
    console.log(this.cells);
    /*this.cells = [[0,0,0,0],[0,0,0,0],[0,2,2,2],[1,2,3,4]];
    console.log(this.cells);
    this.cells[rand()%4][rand()%4] = 2;
    this.cells[rand()%4][rand()%4] = 2;*/
}
