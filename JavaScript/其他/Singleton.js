//good
var mySingleton = (function(){
	var instance;
	function init(){
		function privateMethod(){
			console.log("I am private");
		}
		var privateVar = "I'm also private";
		var privateRandNum = Math.random();
		return {
			publicMethod: function(){
				console.log("The public can see me!");
			},
			publicProperty: "I am also public",
			getRandNum: function(){
				return privateRandNum;
			}
		}
	};
	return {
		getInstance:function(){
			if(!instance){
				instance = init();
			}
			return instance;
		}
	}
})();

//bad
var myBadSingleton = (function(){
	var instance;
	function init() {
		var privateRandNum = Math.random();
		return {
			getRandNum: function(){
				return privateRandNum;
			}
		};
	};
	return {
		getInstance:function(){
			instance = init();
			return instance;
		}
	}
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singleA.getRandNum()===singleB.getRandNum());
console.log(singleA.getRandNum(),singleB.getRandNum());

var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log(badSingleA.getRandNum()===badSingleB.getRandNum());
console.log(badSingleA.getRandNum(),badSingleB.getRandNum());
