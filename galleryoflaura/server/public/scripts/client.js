console.log('js');


var myApp = angular.module('myApp', []);

myApp.controller('LauraController', function(){  //creating controller
    console.log('laura controller is a thing');
    var laura = this;
    laura.photos = pictures.data;
    laura.hideShow = hideShow;
    laura.like = like;
    laura.addComment = addComment;

    //setting up objects for .data
  
    function hideShow(lphotos) {
      console.log(lphotos);
      lphotos.showText = !lphotos.showText;
      if(lphotos.showText) {
        lphotos.views++;
      }
    } //click function for picture to show descrpition
  
    function addComment(lphotos, newcomment) {
        lphotos.comments.push(newcomment);
        lphotos.newComment = '';
    }  //add comment to comments array
  
    function like(lphotos) {
        lphotos.likes++;
    } //increment photo like
  });
