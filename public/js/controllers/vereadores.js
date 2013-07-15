'use strict';

angular.module('poaComoVamos').controller('VereadoresCtrl', ['$scope', 'vereadores', function ($scope, vereadores) {

    $scope.percentualPresenca = function (presencasDuranteMandato) {
      var numeroSecoesDuranteMandato = 10;
      return (presencasDuranteMandato / numeroSecoesDuranteMandato) * 100;
    };
    
    var shuffle = function(array) {
      var newArray = array.slice();
      var i = newArray.length, j, temp;
    
      while ( --i )
      {
        j = Math.floor( Math.random() * (i - 1) );
        temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
      }
      return newArray;
    };

    $scope.vereadores = shuffle(vereadores);
//    $scope.vereadores = [{ nome: 'Airto Ferronato', email: 'ferronato@camarapoa.rs.gov.br', partido: 'PAB', foto: 'http://www.camarapoa.rs.gov.br/frames/veread/fotos/airtoferronato2.jpg', presencaUltimaSessao: true,  presencasDuranteMandato: 5 },
                      //{ nome: 'Alceu Brasinha', email: 'brasinha@camarapoa.rs.gov.br',  partido: 'PTB', foto: 'http://www.camarapoa.rs.gov.br/frames/veread/fotos/brasinha.jpg',        presencaUltimaSessao: false, presencasDuranteMandato: 2 },
                      //{ nome: 'Bernardino Vendruscolo', email: '', partido: 'PSD', foto: 'http://www.camarapoa.rs.gov.br/frames/veread/fotos/bernardino.jpg', presencaUltimaSessao: true, presencasDuranteMandato: 8 }];
     
}]);
