console.log("Sup Mason");var actionFigure=[{name:"Buzz"},{name:"Woody"},{name:"Venom"},{name:"Mr. Mime"},{name:"Spiderman"}];_.initial(actionFigure),_.last(actionFigure),_.rest(actionFigure),_.rest(actionFigure,2),_.shuffle(actionFigure),_.sample(actionFigure),_.sample(actionFigure,2),_.size(actionFigure);var pets=[{name:"Tilly",age:6,species:"dog",legs:4},{name:"Rose",age:7,species:"dog",legs:4},{name:"Lime",age:4,species:"fish",legs:0},{name:"Disgusting",age:1,species:"palmetto bug",legs:6}];_.max(pets,function(a){return a.age}),_.min(pets,function(a){return a.legs}),_.indexBy(pets,"age"),_.pluck(pets,"species"),_.groupBy(pets,"species"),_.sortBy(pets,"legs");var uniformNumbers=[1,5,3,9,14,24,7,1,3,17];_.indexOf(uniformNumbers,7),_.lastIndexOf(uniformNumbers,1),_.uniq(uniformNumbers),_.without(uniformNumbers,1,3,17),_.countBy(uniformNumbers,function(a){return a%2==0?"even":"odd"}),_.range(10),_.range(3,33),_.range(3,33,5);