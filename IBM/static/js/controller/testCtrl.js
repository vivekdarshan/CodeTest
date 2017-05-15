/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'use strict';    
    angular.module("testApp").controller("testCtrl", ["$scope","$window","$location","testService","$rootScope", function ($scope ,$window,$location,testService,$rootScope){
       
    	
    	
    	$scope.populateSampleData=function(){
			var myPromise = testService.promiseToHaveData();
			myPromise.then(function(resolve){
				console.log(resolve);
				if(resolve.employees){
				
					var temp=[];
					console.log(resolve.employees);
					angular.forEach(resolve.employees,function(value,index){
						var tempObj ={
								name:value.name,
								role:value.role,								
						};
						
						if(value.team)
							{

							 var team="";
								for(var i=0;i<value.team.length;i++)
								{
									team+=value.team[i].name+",";
								}
								tempObj.team=team;
								temp.unshift(tempObj);

							  for(var i=0;i<value.team.length;i++)
								  {
								  temp.unshift(value.team[i]);
								  team+=value.team[i].name+",";
								  }

							}

					});
					$scope.employees=temp;
					console.log(temp);
				}
			        }, function(reject){
			        
		    });

		};
        
		$scope.populateSampleData();
        }]);

})();








