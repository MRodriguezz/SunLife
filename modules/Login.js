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
/*La funcion login me sirve para validar los campos de Username y Password para
poder continuar, de lo contrario mostrara un alert en ccual le dara un mensaje al
usuario diciendole que no puede continuar ya que su Username y Password son invalidos*/ 
function Login() {
  var pForm = kony.application.getCurrentForm();
  
  var userName = pForm.TextUserName.text; 
  var password = pForm.TextPass.text; 
  
  if (userName=="prueba" && password=="prueba") {
    PrincipalContainer.show();
  } else {
    alert("Your User Name and Password is Fail");
  }
}