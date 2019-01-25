var halFunction = function(number){
  if (number){
    for(var i = 0; i <= number; i++){
      var iStr = i.toString();
      var iArray = iStr.split('');
      if(i !== 0 && i % 3 === 0){
        resultArray.push("I'm sorry Dave, I can't do that.")
      }
      else if(iArray.includes("1")){
        resultArray.push("Boop!");
      }
      else if(iArray.includes("0")){
        resultArray.push("Beep!");
      }
      else{
        resultArray.push(i)
      };
    };
  }
  else{
    alert("I'm sorry John, I can't do that.")
  };
};


$(function(){
  $("#artificialLifeForm").submit(function(event){
    resultArray = []
    $("#subtitle").show();
    $("#pacman").removeClass();
    event.preventDefault();
    var number = parseInt($("#number").val());
    var result = halFunction(number);
    $("#result").text(resultArray.join(", "));
  });
});
