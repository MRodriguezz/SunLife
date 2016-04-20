/*function splashLogo() {
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
       frmLogin.show();
      }
      }
     );
  } catch (e) {
  }
}*/
 /*frmSplash["imgSunlife"].animate(
    kony.ui.createAnimation({
      "100": {
        "top": "2%",
        "stepConfig": {
          "timingFunction": kony.anim.EASIN_IN_OUT
        }
      }
    }), {
      "delay": 1,
      "iterationCount": 1,
      "fillMode": kony.anim.FILL_MODE_FORWARDS,
      "duration": 1
    }, {
      "animationEnd": function() {}
    })
}
function onstartinitialchase(){
  frmSplash.flxFooter.zIndex="3";
  frmSplash["flxInit"].animate(
    kony.ui.createAnimation({
      "100": {
        "stepConfig": {
          "timingFunction": kony.anim.EASIN_IN_OUT
        },
        "opacity": 0.9
      }
    }), {
      "delay": 1,
      "iterationCount": 1,
      "fillMode": kony.anim.FILL_MODE_FORWARDS,
      "duration": 0.1
    }, {
      "animationEnd": function() {

        frmSplash["flxInit"].animate(
          kony.ui.createAnimation({
            "100": {
              "stepConfig": {
                "timingFunction": kony.anim.EASIN_IN_OUT
              },
              "opacity": 0.8
            }
          }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.1
          }, {
            "animationEnd": function() {

              frmSplash["flxInit"].animate(
                kony.ui.createAnimation({
                  "100": {
                    "stepConfig": {
                      "timingFunction": kony.anim.EASIN_IN_OUT
                    },
                    "opacity": 0.67
                  }
                }), {
                  "delay": 0,
                  "iterationCount": 1,
                  "fillMode": kony.anim.FILL_MODE_FORWARDS,
                  "duration": 0.1
                }, {
                  "animationEnd": function() {
                    frmSplash.skin=skinBgChaseBG1;
                    frmSplash["flxInit"].animate(
                      kony.ui.createAnimation({
                        "100": {
                          "stepConfig": {
                            "timingFunction": kony.anim.EASIN_IN_OUT
                          },
                          "opacity": 0.50
                        }
                      }), {
                        "delay": 0,
                        "iterationCount": 1,
                        "fillMode": kony.anim.FILL_MODE_FORWARDS,
                        "duration": 0.1
                      }, {
                        "animationEnd": function() {
                          frmSplash["flxInit"].animate(
                            kony.ui.createAnimation({
                              "100": {
                                "stepConfig": {
                                  "timingFunction": kony.anim.EASIN_IN_OUT
                                },
                                "opacity": 0.35
                              }
                            }), {
                              "delay": 0,
                              "iterationCount": 1,
                              "fillMode": kony.anim.FILL_MODE_FORWARDS,
                              "duration": 0.1
                            }, {
                              "animationEnd": function() {
                                frmSplash["flxInit"].animate(
                                  kony.ui.createAnimation({
                                    "100": {
                                      "stepConfig": {
                                        "timingFunction": kony.anim.EASIN_IN_OUT
                                      },
                                      "opacity": 0.2
                                    }
                                  }), {
                                    "delay": 0,
                                    "iterationCount": 1,
                                    "fillMode": kony.anim.FILL_MODE_FORWARDS,
                                    "duration": 0.1
                                  }, {
                                    "animationEnd": function() {
                                      frmSplash["flxInit"].animate(
                                        kony.ui.createAnimation({
                                          "100": {
                                            "stepConfig": {
                                              "timingFunction": kony.anim.EASIN_IN_OUT
                                            },
                                            "opacity": 0.0
                                          }
                                        }), {
                                          "delay": 0,
                                          "iterationCount": 1,
                                          "fillMode": kony.anim.FILL_MODE_FORWARDS,
                                          "duration": 0.1
                                        }, {
                                          "animationEnd": function() {
                                          }
                                        });
                                    }
                                  });
                              }
                            });
                        }
                      });
                  }
                });
            }
          });
      }
    });
}
frmSplash["imgSunlife"].animate(
  kony.ui.createAnimation({
    "100": {
      "top": "44dp",
      "stepConfig": {
        "timingFunction": kony.anim.EASIN_IN_OUT
      }
    }
  }), 
  {"delay": 0,
   "iterationCount": 1,
   "fillMode": kony.anim.FILL_MODE_FORWARDS,
   "duration": 1
  }, 
  {"animationEnd": function() {
    frmLogin.show();
  }
  });
}
*/