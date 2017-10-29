console.log('js');


var myApp = angular.module('myApp', []);

myApp.controller('LauraController', function(){  //creating controller
    console.log('laura controller is a thing');
    var laura = this;
    laura.photos = pictures.data;
    laura.hideShow = hideShow;

    //setting up objects for .data
 
   function hideShow(lphotos) {
      console.log(lphotos);
      lphotos.showText = !lphotos.showText;
      if(lphotos.showText) {
        lphotos.views++;
      }
    } //click function for picture to show descrpition
      
    
  });
