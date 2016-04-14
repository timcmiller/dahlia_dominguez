module.exports = function(app) {
  app.controller('PortfolioController', ['$scope', '$http', function($scope, $http) {

    $scope.graphicDesigns = [];
    $scope.artPieces = [];

    $scope.getAllGraphicDesigns = function() {
      $scope.graphicDesigns = [
        {url: 'http://i.imgur.com/RUcl7T8.jpg', alt: 'Aristocrats'},
        {url: 'http://i.imgur.com/hO5yfJ9.jpg', alt: 'John Scofield'},
        {url: 'http://i.imgur.com/aI4j6bE.jpg', alt: 'Craftchegga'},
        {url: 'http://i.imgur.com/MCmIYPr.jpg', alt: 'Spring Fest'},
        {url: 'http://i.imgur.com/DLe5tEA.jpg', alt: 'Star Wars Cosplay'},
        {url: 'http://i.imgur.com/bxNsoLG.jpg', alt: 'Grizfolk Poster'},
        {url: 'http://i.imgur.com/SSBGV5P.jpg', alt: 'Mark Dresser'},
        {url: 'http://i.imgur.com/g355XAo.jpg', alt: 'Village Squares'},
        {url: 'http://i.imgur.com/HzBG43D.jpg', alt: 'Face'},
        {url: 'http://i.imgur.com/GLyok8h.jpg', alt: 'Tree'},
        {url: 'http://i.imgur.com/8pOdrHa.jpg', alt: 'Stevie Wonder Tribute'},
        {url: 'http://i.imgur.com/DRpMFJA.jpg', alt: 'Menu'},
        {url: 'http://i.imgur.com/AvNNETt.jpg', alt: 'Ackbar'},
        {url: 'http://i.imgur.com/LGd23RV.jpg', alt: 'The Cantina'},
        {url: 'http://i.imgur.com/Yon75bn.jpg', alt: 'Soiree at Sea'},
        {url: 'http://i.imgur.com/qRYeXHN.jpg', alt: 'Website'},
        {url: 'http://i.imgur.com/BLbi11D.jpg', alt: 'Christmas Cards 1'},
        {url: 'http://i.imgur.com/OvrW3AF.jpg', alt: 'Christmas Cards 2'},
        {url: 'http://i.imgur.com/cRH52UE.jpg', alt: 'The Cantina 2'},
        {url: 'http://i.imgur.com/GhplZZd.jpg', alt: 'Person'},
        {url: 'http://i.imgur.com/zSicWs5.jpg', alt: 'Skull'}
      ];
    };

    $scope.getAllArtPieces = function() {
      $scope.artPieces = [
      {url: 'http://i.imgur.com/dADOU7D.jpg', alt: 'Bob Dylan'},
      {url: 'http://i.imgur.com/6XHwc3v.jpg', alt: 'Fish Head'},
      {url: 'http://i.imgur.com/oz53Pfs.jpg', alt: 'Wire Head'},
      {url: 'http://i.imgur.com/TVvmE5W.jpg', alt: 'Wire Eye'},
      {url: 'http://i.imgur.com/be3iF23.jpg', alt: 'Eye Photo'},
      {url: 'http://i.imgur.com/ovAThgR.jpg', alt: 'Wedding Art 1'},
      {url: 'http://i.imgur.com/vfXdn53.jpg', alt: 'Wedding Art 2'},
      {url: 'http://i.imgur.com/dvhanrP.jpg', alt: 'Wedding Art 3'},
      {url: 'http://i.imgur.com/ftXcNxN.jpg', alt: 'Skull Drawing'}
      ];
    };

  }]);
};
