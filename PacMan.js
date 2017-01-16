
var map = {
  canvas : document.getElementById("map"),
  array : [],
  // template : [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],[0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0],[0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],[0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],[0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],[0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],[0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 5, 5, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 3, 3, 3, 3, 3, 3, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0],[4, 3, 3, 3, 3, 3, 1, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 1, 3, 3, 3, 3, 3, 4],[0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 3, 3, 3, 3, 3, 3, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0],[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],[0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],[0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0],[0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],[0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],[0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],[0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ],
  template : [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],[0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0],[0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0],[0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0],[0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],[0, 3, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 3, 0],[0, 3, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 3, 0],[0, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 0],[0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 5, 5, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 3, 3, 3, 3, 3, 3, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0],[4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4],[0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 3, 3, 3, 3, 3, 3, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0],[0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],[0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0],[0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0],[0, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 0],[0, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 0],[0, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 0],[0, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 0],[0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],[0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],[0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ],
  cw : 20,
  pathMapTemplate : [],
  pathMap : [],
  homeMap: [],
  pillLocs : [],
  pillMap : {
    update : function(){
      if (!game.DEBUG){
        for (var i = 0; i < map.pillLocs.length; i++){
          var y = map.pillLocs[i][0]*map.cw+map.cw/2;
          var x = map.pillLocs[i][1]*map.cw+map.cw/2;
          var size = map.cw/9 + 2 + Math.sin(game.time * 15);
          var ctx = scene.context;
          ctx.fillStyle = "white";
          ctx.beginPath();
          ctx.arc(x,y,size,0,Math.PI*2,true);
          ctx.closePath();
          ctx.fill();
        }
      }
    }
  },
  pillCount : 0,
  blink : false,
  init : function(){
    this.array = copyArray(this.template);
    this.makePillLocations();
    this.makePathMapTemplate();
    this.makeHomeMap();
    this.render();
  },
  makePillLocations : function(){
    this.pillLocs = [];
    this.pillCount = 0;
    for (var i = 0; i < this.array.length; i++){
      for (var k = 0; k < this.array[i].length; k++){
        if(this.array[i][k] == 1 || this.array[i][k] == 2){
          this.pillCount++;
          if(this.array[i][k] == 2) {
            this.pillLocs.push([i,k]);
          }
        }
      }
    }
  },
  makePathMapTemplate : function(){
    this.pathMapTemplate = copyArray(this.array);
    for (var r in this.pathMapTemplate){
      for (var c in this.pathMapTemplate[r]){
        var val;
        switch(this.pathMapTemplate[r][c]){
          case 1:
          case 2:
          case 3: val = null; break;
          case 0:
          case 4: val = 1000; break;
          case 5: val = 1001; break;
          default: break;
        }
        this.pathMapTemplate[r][c] = val;
      }
    }
  },
  makeHomeMap: function(){
    this.homeMap = copyArray(this.pathMapTemplate);
    this.makePath(14, 13, this.homeMap);
  },
  makePath : function (row, col, pathMap, n) {
    if ( row < 0 || row >= pathMap.length ||
         col < 0 || col >= pathMap.length ||
         pathMap[row][col] == 1000 ||
         (n > pathMap[row][col] && pathMap[row][col] !== null) ){
        return;
    }

    pathMap[row][col] = n = (n === undefined ? 0 : n);

    this.makePath(row, col-1, pathMap, n+1);
    this.makePath(row, col+1, pathMap, n+1);
    this.makePath(row-1, col, pathMap, n+1);
    this.makePath(row+1, col, pathMap, n+1);
  },
  render : function(){
	this.canvas.width = map.cw * this.array[0].length;
	this.canvas.height = map.cw * this.array.length;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  },
  drawWall : function (r,c, ctx) {
    if (this.getCell(r,c) == 4){ return; }

    var cornerCase = 0;
    if (this.getCell(r-1,c-1) === 0 ){ cornerCase += 1; }
    if (this.getCell(r-1,c  ) === 0 ){ cornerCase += 2; }
    if (this.getCell(r  ,c  ) === 0 ){ cornerCase += 4; }
    if (this.getCell(r  ,c-1) === 0 ){ cornerCase += 8; }

    var straightCase = 0;
    if (this.getCell(r-1,c  ) === 0 ){ straightCase += 1; }
    if (this.getCell(r  ,c+1) === 0 ){ straightCase += 2; }
    if (this.getCell(r+1,c  ) === 0 ){ straightCase += 4; }
    if (this.getCell(r  ,c-1) === 0 ){ straightCase += 8; }

    ctx.strokeStyle = this.blink ? "#CCCCCC" : "#0404e2";
    ctx.lineWidth = this.blink ? 2 : 3 ;
    ctx.beginPath();
    switch (cornerCase) {
      // down/right
      case 4: ctx.arc(c*map.cw+map.cw,r*map.cw+map.cw,map.cw/2,Math.PI,Math.PI*1.5); break;
      case 11: ctx.arc(c*map.cw,r*map.cw,map.cw/2,Math.PI,Math.PI*1.5); break;
      // up/right
      case 2: ctx.arc(c*map.cw+map.cw,r*map.cw-map.cw,map.cw/2,Math.PI*0.5,Math.PI); break;
      case 13: ctx.arc(c*map.cw,r*map.cw,map.cw/2,Math.PI*0.5,Math.PI); break;
      // down/left
      case 8: ctx.arc(c*map.cw-map.cw,r*map.cw+map.cw,map.cw/2,Math.PI*1.5,Math.PI*2); break;
      case 7: ctx.arc(c*map.cw,r*map.cw,map.cw/2,Math.PI*1.5,Math.PI*2); break;
      // up/left
      case 1: ctx.arc(c*map.cw-map.cw,r*map.cw-map.cw,map.cw/2,0,Math.PI*0.5); break;
      case 14: ctx.arc(c*map.cw,r*map.cw,map.cw/2,0,Math.PI*0.5); break;
      default: break;
    }
    switch(straightCase){
      case 11: case 14:
        ctx.moveTo(c*map.cw,r*map.cw+map.cw/2);
        ctx.lineTo(c*map.cw+map.cw,r*map.cw+map.cw/2);
        break;
      case 13: case 7:
        ctx.moveTo(c*map.cw+map.cw/2,r*map.cw);
        ctx.lineTo(c*map.cw+map.cw/2,r*map.cw+map.cw);
        break;
      case 10: if (map.array[r][c] === 0){
          ctx.moveTo(c*map.cw,r*map.cw+map.cw/2);
          ctx.lineTo(c*map.cw+map.cw,r*map.cw+map.cw/2);
        } break;
      case 5: if (map.array[r][c] === 0){
          ctx.moveTo(c*map.cw+map.cw/2,r*map.cw);
          ctx.lineTo(c*map.cw+map.cw/2,r*map.cw+map.cw);
        } break;
      default: break;
    }
    ctx.stroke();
  },
  drawWhiteWalls : function(){
    for (var i = 0; i < this.array.length; i++){
      for (var k = 0; k < this.array[i].length; k++){
        this.drawWall(i,k, game.scene.context);
      }
    }
  },
  coverDot : function (r,c){
    // get pixles
    var x = c*map.cw;
    var y = r*map.cw;

    var ctx = this.context;
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(x+map.cw/2,y+map.cw/2,map.cw/4,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
  },
  teleport : function (someone) {
    if (someone.cellCol == -2 || someone.cellCol == map.array[0].length+1){
      if (someone.cellCol == -2){
        someone.cellCol = map.array[0].length-1;
        someone.x = (someone.cellCol+2) * map.cw + (map.cw)/2;
      } else {
        someone.cellCol = 0;
        someone.x = (someone.cellCol-2) * map.cw + (map.cw)/2;
      }
    }
  },
  getCell : function (r,c) {
    if (c < 0 || c >= this.array[0].length){ return 0; }
    if (r < 0 || r >= this.array.length){ return 0; }
    if (this.array[r][c] == 5){ return 0; }
    return this.array[r][c];
  },
  canMove : function (direction, someone) {
    var colOff = 0;
    var rowOff = 0;
    switch (direction) {
      case "right": colOff = 1; break;
      case "left": colOff = -1; break;
      case "up": rowOff = -1; break;
      case "down": rowOff = 1; break;
      default: break;
    }
    if (this.array[someone.cellRow+rowOff][someone.cellCol+colOff] !== 0 &&
      this.array[someone.cellRow+rowOff][someone.cellCol+colOff] !== 5 ){
      return true;
    }
    return false;
  }
};
var info = {
  canvas : document.getElementById('info'),
  init : function () {
    this.canvas.width = map.cw * map.array[0].length;
    this.canvas.height = 50;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.context.font = "30px Arial";
    this.context.fillStyle = 'white';
    this.context.fillText("Score: ", 9, 30);
  },
  clearScore : function (){
    this.context.clearRect(99, 0, this.canvas.width/2, this.canvas.height);
  },
  clearLives : function (){
    this.context.clearRect(this.canvas.width-150, 0, 300, this.canvas.height);
  }
};
var scene = {
  canvas: document.getElementById("game"),
  components: [],
  ghosts: [],
  keys: [],
  start : function () {
    this.canvas.width = map.cw * map.array[0].length;
    this.canvas.height = (map.cw * map.array.length);
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    window.addEventListener('keydown', function(e){
      game.scene.keys = (game.scene.keys || []);
      game.scene.keys[e.keyCode] = true;

    });
    window.addEventListener('keyup', function(e){
      game.scene.keys[e.keyCode] = false;
    });
  },
  clear : function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};

function startGame (){
  game = new Game(scene, map, info);
  game.startIn(4200);
}

//===============================
//			     CLASSES
//===============================

function PacMan (row, col, game) {
  var _this = this;
  this.game = game;
  this.width = this.game.map.cw - 4;
  this.height = this.game.map.cw - 4;
  this.cellRow = row;
  this.cellCol = col;
  this.startRow = row;
  this.startCol = col;
  this.x = this.cellCol * this.game.map.cw;
  this.y = this.cellRow * this.game.map.cw + (this.game.map.cw)/2;
  this.startY = this.y;
  this.startX = this.x;
  this.direction = "left";
  this.rotation = Math.PI;
  this.mouthSize = 0.5;
  this.pop = false;
  this.deathInterval = null;
  this.lives = 2;
  this.speed = 6;
  this.step = this.speed;
  this.moving = false;
  this.chomping = false;
  (function(){
    _this.sounds.chomp.addEventListener('ended', function(){
      _this.chomping = false;
      if (_this.moving){
        _this.chomping = true;
        _this.sounds.chomp.play();
      }
    });

    for(var i in _this.sounds){
      _this.sounds[i].addEventListener('ended', function(){
        this.currentTime = 0;
      });
    }

  }());
}
PacMan.prototype.sounds = {
  "chomp"       : null,
  "death"       : null,
  "eatfruit"    : null,
  "eatghost"    : null,
  "extrapac"    : null
};
PacMan.prototype.sounds.chomp        = document.getElementById("chomp");
PacMan.prototype.sounds.death        = document.getElementById("death");
PacMan.prototype.sounds.eatfruit     = document.getElementById("eatfruit");
PacMan.prototype.sounds.eatghost     = document.getElementById("eatghost");
PacMan.prototype.sounds.extrapac     = document.getElementById("extrapac");
PacMan.prototype.init = function(){
  this.width = this.height;
  this.cellCol = this.startCol;
  this.cellRow = this.startRow;
  this.x = this.cellCol * this.game.map.cw;
  this.y = this.cellRow * this.game.map.cw + (this.game.map.cw)/2;
  this.startX = this.x;
  this.startY = this.y;
  this.step = this.speed;
  this.direction = "left";
  this.rotation = Math.PI;
  this.mouthSize = 0.5;
  this.pop = false;
  this.moving = false;
  this.chomping = false;
};
PacMan.prototype.update = function(){
  if (this.game.on){
    if (!this.game.loss){
      this.checkCollisoin();

      if (this.step == this.speed){
        if(this.direction !== ""){
          this.scoreCell();
          this.game.map.coverDot(this.cellRow, this.cellCol);
          for (var i = 0; i < this.game.map.pillLocs.length; i++){
            if (this.game.map.pillLocs[i][0] == this.cellRow && this.game.map.pillLocs[i][1] == this.cellCol){
              this.game.map.pillLocs.splice(i, 1);
            }
          }
        }

        this.moving = true;
        switch (this.direction) {
          case "right": if (this.game.map.canMove("right", this)){
              this.cellCol++;
              this.game.map.teleport(this);
            } else { this.direction = ""; } break;
          case "left": if (this.game.map.canMove("left", this)){
              this.cellCol--;
              this.game.map.teleport(this);
            } else { this.direction = ""; } break;
          case "up":
            if (this.game.map.canMove("up", this)){ this.cellRow--; }
            else { this.direction = ""; } break;
          case "down":
            if (this.game.map.canMove("down", this)){ this.cellRow++;}
            else { this.direction = ""; } break;
          default: this.moving = false; break;
        }

        if (!this.chomping && this.moving) {
          this.chomping = true;
          this.sounds.chomp.play();
        } else if (this.chomping && !this.moving){
          this.chomping = false;
          this.sounds.chomp.pause();
          this.sounds.chomp.currentTime = 0;
        }

        // set current position
        this.startX = this.x;
        this.startY = this.y;
      } else {
        // update current postino based off next cell
        var x = this.cellCol * this.game.map.cw + (this.game.map.cw)/2;
        var y = this.cellRow * this.game.map.cw + (this.game.map.cw)/2;
        this.x = this.startX + (x - this.startX)*(this.step/(this.speed-1));
        this.y = this.startY + (y - this.startY)*(this.step/(this.speed-1));
      }

      // stop waka wakaing when stopped
      if (this.direction !== ""){ this.mouthSize = Math.sin(this.game.time * 50); }
      else { this.mouthSize = 0.6; }
    }

    // set rotation

    switch (this.direction) {
      case "right": this.rotation = 0; break;
      case "down": this.rotation = Math.PI/2; break;
      case "left": this.rotation = Math.PI; break;
      case "up": this.rotation = Math.PI * 1.5; break;
      default: break;
    }

    this.step = this.step == this.speed? 0 : this.step+1;
  }
  this.draw();
};
PacMan.prototype.draw = function(){
  var ctx = this.game.scene.context;
  if (!this.pop){
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.width,this.mouthSize+this.rotation,((Math.PI*2)-this.mouthSize)+this.rotation);
    // ctx.lineTo(this.x,this.y);
    switch (this.direction) {
      case "up":
        ctx.lineTo(this.x,this.y+7);
        break;
      case "right":
        ctx.lineTo(this.x-7,this.y);
        break;
      case "down":
        ctx.lineTo(this.x,this.y-7);
        break;
      case "left":
        ctx.lineTo(this.x+7,this.y);
        break;
      default:
      ctx.lineTo(this.x,this.y);
    }
    ctx.closePath();
    ctx.fill();
  } else {
    ctx.strokeStyle = "silver";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.width,0,Math.PI*2);
    ctx.stroke();
  }
};
PacMan.prototype.checkCollisoin = function(){
  if (!this.game.loss){
    for (var i in this.game.scene.ghosts){
      if (this.game.scene.ghosts[i].action == "follow" || this.game.scene.ghosts[i].action == "flee"){
        var x1 = this.game.pacMan.x;
        var y1 = this.game.pacMan.y;
        var x2 = this.game.scene.ghosts[i].x;
        var y2 = this.game.scene.ghosts[i].y;
        var distance = Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) );

        if (distance <= this.game.pacMan.width) {
          if (this.game.scene.ghosts[i].action == "follow"){
            this.game.loss = true;
            this.die();
          } else {
            this.game.score += 200;
            this.game.scene.ghosts[i].respawn();
            this.sounds.eatghost.play();
          }
        }
      }
    }
  }
};
PacMan.prototype.die = function(){
    var _this = this;
    _this.moving = false;
    setTimeout(function(){
      this.game.drawGhosts = false;
      _this.sounds.death.play();
      _this.sounds.chomp.pause();
      _this.sounds.chomp.currentTime = 0;
      var pops = 0;
      _this.direction = "up";
      _this.mouthSize = 0;
      _this.deathInterval = setInterval(function(){
        if (_this.mouthSize < Math.PI - 0.1){
          _this.mouthSize += 0.1;
        } else {
          _this.mouthSize = Math.PI;
          clearInterval(_this.deathInterval);
          _this.pop = true;
          _this.width = 0;
          _this.deathInterval = setInterval(function(){
            _this.width += 4;
            if (_this.width > this.game.map.cw - 4){
              _this.width = 0;
              pops++;
            }
            if (pops == 2){
              clearInterval(_this.deathInterval);
              // this.game.nextRound()
              this.game.on = false;
              setTimeout(this.game.nextRound(), 1000);
            }
          }, 35);
        }
      }, 30);
    }, 400);
  };
PacMan.prototype.scoreCell = function(){
  // if cell is small pill
  if(this.game.map.array[this.cellRow][this.cellCol] == 1){
    this.game.map.array[this.cellRow][this.cellCol] = 3;
    this.game.score += 10;
    this.game.map.pillCount--;
  }
  // if cell is big pill
  if(this.game.map.array[this.cellRow][this.cellCol] == 2){
    this.game.map.array[this.cellRow][this.cellCol] = 3;
    this.game.score += 50;
    this.game.map.pillCount--;

    // following ghosts flee
    clearTimeout(this.fleeTimeout);
    clearTimeout(this.blinkTimeout);
    for (var i in this.game.scene.ghosts){
        this.game.scene.ghosts[i].flee();
    }
    // fleeing ghosts blink in 7 sec
    this.fleeTimeout = setTimeout(function(){
      for (var i in this.game.scene.ghosts){
        if (this.game.scene.ghosts[i].action == "flee"){
          this.game.scene.ghosts[i].blink = true;
        }
      }
    }, 3 * 1000);
    // fleeing ghosts folow in 10 sec
    this.fleeTimeout = setTimeout(function(){
      for (var i in this.game.scene.ghosts){
        if (this.game.scene.ghosts[i].action == "flee"){
          this.game.scene.ghosts[i].follow();
        }
      }
    }, 5 * 1000);
  }
  // if this.game won
  if (this.game.map.pillCount === 0){ this.game.nextLevel(); }
};
PacMan.prototype.newGame = function(){
  this.lives = 2;
  this.init();
};

function Ghost (color, cellX, cellY, direction, action, game) {
  this.color = color;
  this.game = game;
  this.width = this.game.map.cw-5;
  this.height = this.game.map.cw-3;
  this.cellRow = cellY;
  this.cellCol = cellX;
  this.startRow = cellY;
  this.startCol = cellX;
  this.x = cellY * this.game.map.cw + (this.game.map.cw)/2;
  this.y = cellY * this.game.map.cw + (this.game.map.cw)/2;
  this.startX = this.x;
  this.startY = this.y;
  this.direction = direction;
  this.action = action;
  this.blink = false;
  this.speed = 9;
  this.defaultSpeed = this.speed;
  this.step = this.speed-1;
}
Ghost.prototype.init = function(){
  this.cellRow = this.startRow;
  this.cellCol = this.startCol;
  if (this.color == "red"){
    this.x = this.startCol * this.game.map.cw + (this.game.map.cw);
    this.action = "follow";
    this.direction = "left";
  } else {
    this.x = this.startCol * this.game.map.cw + (this.game.map.cw)/2;
    this.action = "bounce";
    this.x += this.game.map.cw/2;
    if (this.color == "pink"){
      this.direction = "up";
    } else {
      this.direction = "down";
    }
  }
  this.y = this.startRow * this.game.map.cw + (this.game.map.cw)/2;
  this.startX = this.x;
  this.startY = this.y;
  this.speed = this.defaultSpeed;
  this.step = this.speed-1;
  this.blink = false;
};
Ghost.prototype.isHome = function(){
  return this.cellRow == 14 && this.cellCol == 13;
};
Ghost.prototype.draw = function(){
  var ctx = this.game.scene.context;
  // color
  if (this.action == "flee"){
    if (this.blink && Math.sin(this.game.time*20) < 0){
      ctx.fillStyle = "white";
    }
    else { ctx.fillStyle = "blue"; }
  }
  else { ctx.fillStyle = this.color; }
  // body
  if (this.action != "home"){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.width,Math.PI,Math.PI*2);
    if (Math.sin(this.game.time * 25) < 0){
      ctx.lineTo(this.x+this.width,this.y+this.height);
      ctx.lineTo(this.x+this.width-1,this.y+this.height);
      ctx.lineTo(this.x+((this.width/2)+2),this.y+this.height-5);
      ctx.lineTo(this.x+5,this.y+this.height);
      ctx.lineTo(this.x+2,this.y+this.height);
      ctx.lineTo(this.x+2,this.y+this.height-5);
      ctx.lineTo(this.x-2,this.y+this.height-5);
      ctx.lineTo(this.x-2,this.y+this.height);
      ctx.lineTo(this.x-5,this.y+this.height);
      ctx.lineTo(this.x-((this.width/2)+2),this.y+this.height-5);
      ctx.lineTo(this.x-this.width+1,this.y+this.height);
      ctx.lineTo(this.x-this.width,this.y+this.height);
    }
    else {
      ctx.lineTo(this.x+this.width,this.y+this.height-4);
      ctx.lineTo(this.x+((this.width/2)+4),this.y+this.height);
      ctx.lineTo(this.x+((this.width/2)+2 ),this.y+this.height);
      ctx.lineTo(this.x+6,this.y+this.height-5);
      ctx.lineTo(this.x+1,this.y+this.height);
      ctx.lineTo(this.x,this.y+this.height);
      ctx.lineTo(this.x-6,this.y+this.height-5);
      ctx.lineTo(this.x-((this.width/2)+2),this.y+this.height);
      ctx.lineTo(this.x-((this.width/2)+4),this.y+this.height);
      ctx.lineTo(this.x-this.width,this.y+this.height-3);
    }
    ctx.closePath();
    ctx.fill();
  }
  // eye offset
  var xOff = 0, yOff = 0;
  switch (this.direction){
    case "down": xOff = 0; yOff = 3; break;
    case "up": xOff = 0; yOff = -3; break;
    case "left": xOff = -2; yOff = 1; break;
    case "right": xOff = 2; yOff = 1; break;
    default: break;
  }
  // eyes
  if (this.action != "flee"){
    // left
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x-6+xOff,this.y-3+yOff,this.width/4,0,Math.PI*2);
    ctx.arc(this.x-6+xOff,this.y-5+yOff,this.width/4,Math.PI*2,0);
    ctx.closePath();
    ctx.fill();
    // right
    ctx.beginPath();
    ctx.arc(this.x+6+xOff,this.y-3+yOff,this.width/4,0,Math.PI*2);
    ctx.arc(this.x+6+xOff,this.y-5+yOff,this.width/4,Math.PI*2,0);
    ctx.closePath();
    ctx.fill();
    // pupils
    ctx.fillStyle = "DarkBlue";
    ctx.beginPath();
    ctx.arc(this.x-6+(xOff*2),this.y-4+(yOff*2),this.width/7,0,Math.PI*2);
    ctx.arc(this.x+6+(xOff*2),this.y-4+(yOff*2),this.width/7,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
  }
  // fleeing
  else {
    // eyes
    if (this.blink && Math.sin(this.game.time*20) < 0){
      ctx.strokeStyle = "red";
      ctx.fillStyle = "red";
    } else {
      ctx.fillStyle = "white";
      ctx.strokeStyle = "white";
    }
    ctx.fillRect(this.x-(this.width/2), this.y-6, this.width/3.5, this.width/3.5);
    ctx.fillRect(this.x+(this.width/4), this.y-6, this.width/3.5, this.width/3.5);
    // mouth
    ctx.lineWidth = 2;
    ctx.beginPath();
    var gap = this.width/5;
    ctx.moveTo(this.x-gap*3, this.y+7);
    ctx.lineTo(this.x-gap*2, this.y+4);
    ctx.lineTo(this.x-gap, this.y+7);
    ctx.lineTo(this.x, this.y+4);
    ctx.lineTo(this.x+gap, this.y+7);
    ctx.lineTo(this.x+gap*2, this.y+4);
    ctx.lineTo(this.x+gap*3, this.y+7);
    ctx.stroke();
  }
};
Ghost.prototype.update = function(){
  if (this.game.on){
    if (!this.game.loss){
      if (this.step == this.speed){
        if (this.action == "home" && this.isHome()){
          this.follow();
        }
        this.direction = this.route();
        switch (this.direction) {
          case "right": this.cellCol++; this.game.map.teleport(this); break;
          case "left": this.cellCol--; this.game.map.teleport(this); break;
          case "up": this.cellRow--; break;
          case "down": this.cellRow++; break;
          default: break;
        }

        // set current position
        this.startX = this.x;
        this.startY = this.y;
      } else {
        var xOffset = this.game.map.cw/2;
        var yOffset = this.game.map.cw/2;
        if (this.action == "bounce"){ xOffset += this.game.map.cw/2; }

        // update current position based off next cell
        var x = this.cellCol * this.game.map.cw + xOffset;
        var y = this.cellRow * this.game.map.cw + yOffset;
        this.x = this.startX + (x - this.startX)*(this.step/(this.speed-1));
        this.y = this.startY + (y - this.startY)*(this.step/(this.speed-1));
      }
    }
    this.step = this.step >= this.speed? 0 : this.step+1;
  }
  if (this.game.drawGhosts) { this.draw(); }
};
Ghost.prototype.route = function(){
  switch (this.action) {
    case "bounce":
    if (this.direction == "up" && !this.game.map.canMove("up", this)){ return "down"; }
    if (this.direction == "down" && !this.game.map.canMove("down", this)){ return "up"; }
    break;
    case "follow":
    case "flee":
    this.makePathMap();
    return this.pickDirection(this.game.map.pathMap);
    case "home":
    return this.pickDirection(this.game.map.homeMap);
    default: break;
  }
  return this.direction;
};
Ghost.prototype.makePathMap = function(){
  // coppy pathMapTemplate
  this.game.map.pathMap = copyArray(this.game.map.pathMapTemplate);
  // target PacMan
  var targetRow = this.game.pacMan.cellRow, targetCol = this.game.pacMan.cellCol;
  // change target for ghosts
  if (this.action == "follow"){
    switch (this.color) {
      case "pink":
      switch (this.game.pacMan.direction) {
        case "up": targetRow -= 2; targetCol -= 2; break;
        case "right": targetCol += 2; break;
        case "down": targetRow += 2; break;
        case "left": targetCol += 2; break;
        default: break;
      }
      break;
      case "orange":
      var x1 = this.game.pacMan.x;
      var y1 = this.game.pacMan.y;
      var x2 = this.x;
      var y2 = this.y;
      var distance = Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) );
      if (distance < 175){
        targetRow = this.game.map.array.length-2;
        targetCol = 1;
      }
      break;
      case "cyan":
      // draw line through
      break;
      default: break;
    }
  }
  // make path
  this.game.map.makePath(targetRow, targetCol, this.game.map.pathMap);
};
Ghost.prototype.pickDirection = function(pathMap){
  var row = this.cellRow;
  var col = this.cellCol;
  var dir = this.direction;
  var home = this.action == "home" ? true : false;
  var best, ret;
  if (this.action == "follow" || this.action == "home") {
    best = 1000;
    if (pathMap[row-1][col] < best && (dir != "down" || home)){
      ret = "up"; best = pathMap[row-1][col];
    }
    if (pathMap[row][col+1] < best && (dir != "left" || home)){
      ret =  "right"; best = pathMap[row][col+1];
    }
    if (pathMap[row+1][col] < best && (dir != "up" || home)){
      ret =  "down"; best = pathMap[row+1][col];
    }
    if (pathMap[row][col-1] < best && (dir != "right" || home)){
      ret =  "left"; best = pathMap[row][col-1];
    }
  }
  else if (this.action == "flee") {
    best = 0;
    if (pathMap[row-1][col] < 1000 && pathMap[row-1][col] > best && dir != "down"){
      ret = "up"; best = pathMap[row-1][col];
    }
    if (pathMap[row][col+1] < 1000 && pathMap[row][col+1] > best && dir != "left"){
      ret =  "right"; best = pathMap[row][col+1];
    }
    if (pathMap[row+1][col] < 1000 && pathMap[row+1][col] > best && dir != "up"){
      ret =  "down"; best = pathMap[row+1][col];
    }
    if (pathMap[row][col-1] < 1000 && pathMap[row][col-1] > best && dir != "right" ){
      ret =  "left"; best = pathMap[row][col-1];
    }
  }
  return ret;
};
Ghost.prototype.flee = function(){
  this.blink = false;
  if (this.action == "follow"){
    this.action = "flee";
    var progress = this.speed / this.step;
    this.speed = 11;
    this.step =  Math.round(this.speed / progress);
    switch (this.direction) {
      case "up": this.direction = "down"; break;
      case "down": this.direction = "up"; break;
      case "left": this.direction = "right"; break;
      case "right": this.direction = "left"; break;
      default: console.log("error in run away");
    }
  }
};
Ghost.prototype.follow = function(){
  this.action = "follow";
  var progress = this.speed / this.step;
  this.speed = this.defaultSpeed;
  this.step = Math.round(this.speed / progress);
};
Ghost.prototype.respawn = function(){
    var progress = this.speed / this.step;
    this.speed = 4;
    this.step =  Math.round(this.speed / progress);
    this.action = "home";
  };

function Game (scene, map, info){
  var _this = this;
  this.scene = scene;
  this.map = map;
  this.info = info;
  this.pacMan = null;
  this.score = 0;
  this.time = 0;
  this.on = false;
  this.paused = false;
  this.loss = false;
  this.DEBUG = false;
  this.drawGhosts = true;
  this.spanedPink = false;
  this.spanedCyan = false;
  this.spanedOrange = false;
  this.drawMap = function(){
    var cw = this.map.cw;
    for (var i = 0; i < this.map.array.length; i++){
      for (var k = 0; k < this.map.array[i].length; k++){
        this.map.drawWall(i,k, this.map.context);

        // get pixles
        var x = k*cw;
        var y = i*cw;

        var ctx = this.map.context;
        ctx.fillStyle = "white";
        if(this.map.array[i][k] == 1 && !this.DEBUG) {
          var size = cw/10;
          ctx.beginPath();
          ctx.arc(x+cw/2,y+cw/2,size,0,Math.PI*2,true);
          ctx.closePath();
          ctx.fill();
        } else if (this.map.array[i][k] == 5){
          ctx.fillRect(x, y+cw/2-1, cw, cw/6);
        }
      }
    }
  };
  this.updateGameArea = function(){
    if (this.paused){ return; }

    _this.time += 1/60;
    _this.scene.clear();

    // key presses
    if (_this.scene.keys){
      if (_this.scene.keys[37]){
        if (_this.map.canMove("left", _this.pacMan)){ _this.pacMan.direction = "left"; }
      } else if (_this.scene.keys[39]){
        if (_this.map.canMove("right", _this.pacMan)){ _this.pacMan.direction = "right"; }
      } else if (_this.scene.keys[38]){
        if (_this.map.canMove("up", _this.pacMan)){ _this.pacMan.direction = "up"; }
      } else if (_this.scene.keys[40]){
        if (_this.map.canMove("down", _this.pacMan)){ _this.pacMan.direction = "down"; }
      }

      if (_this.over){
        if (_this.scene.keys[89]){
          _this.newGame();
        } else if (_this.scene.keys[78]){
          console.log("go to menu");
        }
      }
    }

    // update everything
    for (var c = _this.scene.components.length-1; c >= 0; c--){ _this.scene.components[c].update(); }
    for (var g = _this.scene.ghosts.length-1; g >= 0; g--){ _this.scene.ghosts[g].update(); }

    // blink map
    if (_this.map.blink){ _this.map.drawWhiteWalls(); }

    _this.drawScore();
    _this.drawMessage();
    _this.spawnGhost();

    // path finding debug
    if (_this.DEBUG){
      // console.log(_this.map.pathMap);
      var ctx = _this.scene.context;
      ctx.fillStyle = 'teal';
      ctx.font = "10px Arial";

      for (var i in _this.map.pathMap){
        for (var k in _this.map.pathMap[i]){
          var y = (i * _this.map.cw)+_this.map.cw/2+3;
          var x = (k * _this.map.cw)+_this.map.cw/5+3;
          if (_this.map.pathMap[i][k] !== 1000 ){
            ctx.fillText(_this.map.pathMap[i][k]+"",x,y);
          }
        }
      }
    }
  };
  (function(){
    _this.init();
    window.addEventListener('keyup', function(e){
      if (e.keyCode == 80){
        this.paused = !this.paused;
        if (this.paused){
          for (var i in _this.pacMan.sounds){
            _this.pacMan.sounds[i].pause();
          }
          var centerX = _this.scene.canvas.width / 2;
          var centerY = _this.scene.canvas.height / 2;
          var x = centerX - 150;
          var y = centerY - 160;
          var ctx = _this.scene.context;
          ctx.globalAlpha = 0.75;
          ctx.fillStyle = 'black';
          ctx.fillRect(x, y, 300, 200);

          ctx.globalAlpha = 1;
          ctx.fillStyle = 'white';
          ctx.font = "60px Arial";
          ctx.fillText("Paused", x + 45, y + 80);
          ctx.font = "30px Arial";
          ctx.fillText("Press P to resume", x + 25, y + 150);
        } else {
          for (var k in _this.pacMan.sounds){
            if (_this.pacMan.sounds[k].currentTime > 0){
              _this.pacMan.sounds[k].play();
            }
          }
        }
      }
    });
  }());
}
Game.prototype.sounds = {
  "beginning"   : null,
  "intermission": null
};
Game.prototype.sounds.beginning    = document.getElementById("beginning");
Game.prototype.sounds.intermission = document.getElementById("intermission");
Game.prototype.init = function(){
  // Play intro
  this.sounds.beginning.play();
  // Map
  this.map.init();
  this.drawMap();
  this.scene.components.push(this.map.pillMap);
  // Pac-Man
  this.pacMan = new PacMan(23, 14, this);
  this.scene.components.push(this.pacMan);
  // Info
  this.info.init();
  this.drawLives();
  // Ghosts
  this.scene.ghosts.push(new Ghost("red", 13, 11, "left", "follow", this));
  this.scene.ghosts.push(new Ghost("pink", 13, 14, "down", "bounce", this));
  this.scene.ghosts.push(new Ghost("cyan", 11, 14, "up", "bounce", this));
  this.scene.ghosts.push(new Ghost("orange", 15, 14, "up", "bounce", this));
  for (var i in this.scene.ghosts){ this.scene.ghosts[i].init(); }
  // Scene
  this.scene.start();
  this.interval = setInterval(this.updateGameArea, 20);
};
Game.prototype.startIn = function(timeout){
  var _this = this;
  setTimeout(function(){_this.on = true;}, timeout);
};
Game.prototype.nextRound = function(){
  if (this.pacMan.lives-- > 0){
    this.drawLives();
    this.resetLevel();
    this.startIn(1000);
  } else {
    this.over = true;
  }
};
Game.prototype.drawMessage = function(){
  // print ready / game over
  var ctx = scene.context;
  ctx.font = "20px Bold Arial";
  if (!this.on && this.pacMan.lives > 0 && this.map.pillCount > 0){
    ctx.fillStyle = 'yellow';
    ctx.fillText("READY!",243,356);
  } else if (!this.on && this.pacMan.lives < 0){
    ctx.fillStyle = 'red';
    ctx.fillText("GAME OVER",220,235);
    ctx.fillStyle = 'white';
    ctx.fillText("New Game? Y / N",205,356);
  }
};
Game.prototype.drawLives = function(){
  this.info.clearLives();
  var y = 20;
  var x = (this.map.array[0].length * this.map.cw) + 5;
  for (var i = 0; i < this.pacMan.lives; i++){
    var ctx = info.context;
    x -= (this.pacMan.height*2) + 5;
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(x,y,this.pacMan.height,Math.PI+0.5,Math.PI-0.5);
    ctx.lineTo(x+5,y);
    ctx.closePath();
    ctx.fill();
  }
};
Game.prototype.drawScore = function(){
  this.info.clearScore();
  var y = 30;
  var x = 100;
  var ctx = this.info.context;
  ctx.font = "30px Arial";
  ctx.fillStyle = 'white';
  ctx.fillText(this.score,x,y);
};
Game.prototype.spawnGhost = function(){
  if (!this.spanedPink && Math.round(this.time) == 2){
    this.spanedPink = true;
    scene.ghosts[1].action = "follow";
  }
  if (!this.spanedCyan && Math.round(this.time) == 10){
    this.spanedCyan = true;
    scene.ghosts[2].action = "follow";
  }
  if (!this.spanedOrange && Math.round(this.time) == 20){
    this.spanedOrange = true;
    scene.ghosts[3].action = "follow";
  }
};
Game.prototype.resetLevel = function(){
  this.pacMan.init();
  for (var i in scene.ghosts){ scene.ghosts[i].init(); }
  this.drawGhosts = true;
  this.loss = false;
  this.time = 0;
  this.spanedPink = false;
  this.spanedCyan = false;
  this.spanedOrange = false;
};
Game.prototype.nextLevel = function(){
  var _this = this;
  _this.on = false;
  for (var i in _this.pacMan.sounds){
	_this.pacMan.sounds[i].pause();
	_this.pacMan.sounds[i].currentTime = 0;
  }
  setTimeout(function(){ _this.drawGhosts = false;  }, 500);
  setTimeout(function(){ _this.map.blink = true;    }, 850);
  setTimeout(function(){ _this.map.blink = false;   }, 950);
  setTimeout(function(){ _this.map.blink = true;    }, 1050);
  setTimeout(function(){ _this.map.blink = false;   }, 1150);
  setTimeout(function(){
    _this.map.blink = false;
    _this.drawGhosts = true;
    _this.resetMap();
  }, 1600);
};
Game.prototype.newGame = function(){
  this.score = 0;
  this.resetMap();
  this.pacMan.newGame();
  this.over = false;
};
Game.prototype.resetMap = function(){
  this.map.init();
  this.drawMap();
  this.pacMan.init();
  this.resetLevel();
  this.startIn(1000);
};

//===============================
// 			      HELPER
//===============================

function copyArray(arr){
  var copy = [];
  for (var i in arr){ copy[i] = arr[i].slice(0); }
  return copy;
}
