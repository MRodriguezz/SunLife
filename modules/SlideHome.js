
function slideLogin(fromOne){
  var pForm = kony.application.getCurrentForm();
  try {
    pForm[fromOne].animate(
    kony.ui.createAnimation(
    {"100":
    {"left":"0%",";stepConfig":
    {"timingFunction":kony.anim.EASE
    }
    }
    } 
    ),
    {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,
     "duration":0.3},
    {"animationEnd" : function(){
    }
    });
  } catch (e) {
  }
}
