var myComp = app.project.activeItem;

// app.project.activeItem.name

//alert(myComp.width);

var len_layers = app.project.activeItem.layers.length;

var i = len_layers;
var x_row = 0;
var y_row = 0;

var _H = app.project.activeItem.layer(1).source.height;
var _W = app.project.activeItem.layer(1).source.width;

while (i > 0) {
    var myLayer = app.project.activeItem.layer(i)

    var myAnchor = myLayer.transform.anchorPoint;
    var myPosition = myLayer.transform.position;

    myAnchor.setValue([0,0,0]);
    myPosition.setValue([x_row, y_row,0]);
    
    x_row = x_row+_W;
        if(x_row+_W>myComp.width){
            x_row = 0;
            y_row = y_row + _H;
            }
    
    i--;
}

