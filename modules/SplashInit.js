function splashLogo() {
  var frmSplash = kony.application.getCurrentForm();
  
  try {
    frmSplash.imgSunlife.animate(
    kony.ui.createAnimation(
    {"100":
    {"top": "40%", "stepConfig":
    {"timingFunction": kony.anim.EASE
    }
    }
    }
    ),
      {"delay": 0, "iterationCount": 1, "fillMode": kony.anim.FILL_MODE_FORWARDS, "duration": 1.1},
   	  {"animationEnd": function(){
       //LoginForm.show();
      }
      }
     );
  } catch (e) {
  }
}
