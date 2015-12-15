function p() {return "b: " + M.b +"; h: " + M.h + "; Ans: " + M.A() +"; Msg: " + M.msg() + "\nCorrect?: " + (M.A()===document.getElementById('userAns').value);}

var M = {
  Q: function () {return graphsByFreqArr[M.b][0]}
  , A: function () {return graphToCMUPhonDict[M.Q()]}
  , msg: function() {
    if (this.h) {
      return 'The correct answer was: ' + this.A();
    } else {
      return '----------';
    }
  }
  , b: 0
  , h: false
};

var A = {
  userAnswers: function(userAns, M) {
    var correct = (userAns === M.A());
    if (M.h) {if (correct){M.h = false}else{M.h = true}}
    else {if (correct){M.b +=1} else {M.h = true}} 
    return M;
  }
}; 

function enter() {
  var userAnswer = document.getElementById('userAns').value;
  M = A.userAnswers(userAnswer, M);
  updateDOM();
}

function attachOnEnter() {
  document.getElementById('userAns').addEventListener("keydown", function(e) {
      if (!e) { var e = window.event; }
//      e.preventDefault(); // sometimes useful
      // Enter is pressed
      if (e.keyCode == 13) { M = A.userAnswers(e.target.value, M); updateDOM();}
  }, false);
};

function updateDOM() {
  document.getElementById('prompt').textContent = M.Q();
  document.getElementById('msg').textContent = M.msg();
  document.getElementById('userAns').value = "";
//  attachOnEnter();
};

function myOnLoad() {
  updateDOM();
};

window.onload = myOnLoad;

