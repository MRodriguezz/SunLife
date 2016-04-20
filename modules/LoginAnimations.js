/**********************************************************************************
* Name app: frmFallTop
* 
**********************************************************************************/
function fallingcredentials() {
  frmFallTop["imgKony"].animate(
    kony.ui.createAnimation({
      "100": {
        "centerY": "93%",
        "width": "60dp",
        "height": "20dp",
        "stepConfig": {
          "timingFunction": kony.anim.EASIN_IN_OUT
        }
      }
    }), {
      "fillMode": kony.anim.FILL_MODE_FORWARDS,
      "duration": 1
    }, {
      "animationEnd": function() {
        frmFallTop.imgKony.src = "konylogomini.png";
        frmFallTop["imgKony"].animate(
          kony.ui.createAnimation({
            "100": {
              //este es el valor anteriror, antes de ser modificado 65%
              "centerX": "60%",
              "stepConfig": {
                "timingFunction": kony.anim.LINEAR
              }
            }
          }), {
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
          }, {
            "animationEnd": function() {
              frmFallTop["lblPoweredBy"].animate(
                kony.ui.createAnimation({
                  "100": {
                    "centerX": "42.5%",
                    "opacity": "1",
                    "stepConfig": {
                    }
                  }
                }), {
                  "fillMode": kony.anim.FILL_MODE_FORWARDS,
                  "duration": 0.5
                }, {
                  "animationEnd": function() {
                    frmFallTop["lblPoweredBy"].isVisible = true;
                  }
                });
            }
          });
        frmFallTop["btnLogin"].animate(
          kony.ui.createAnimation({
            "100": {
              "top": "415dp",
              "stepConfig": {
                "timingFunction": kony.anim.EASIN_IN_OUT
              }
            },
            "50": {
              "top": "422dp",
              "stepConfig": {
                "timingFunction": kony.anim.LINEAR
              }
            }
          }), {
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
          }, {
            "animationEnd": function() {
            }
          });
        frmFallTop["txtPassword"].animate(
          kony.ui.createAnimation({
            "100": {
              "top": "268dp",
              "stepConfig": {
                "timingFunction": kony.anim.EASIN_IN_OUT
              }
            },
            "50": {
              "top": "272dp",
              "stepConfig": {
                "timingFunction": kony.anim.LINEAR
              }
            }
          }), {
            "delay": 0.1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
          }, {
            "animationEnd": function() {
            }
          });
        frmFallTop["txtUsername"].animate(
          kony.ui.createAnimation({
            "100": {
              "top": "216dp",
              "stepConfig": {
                "timingFunction": kony.anim.EASIN_IN_OUT
              }
            },
            "50": {
              "top": "220dp",
              "stepConfig": {
                "timingFunction": kony.anim.LINEAR
              }
            }
          }), {
            "delay": 0.2,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
          }, {
            "animationEnd": function() {
            }
          });
        frmFallTop["lblRemme"].animate(
          kony.ui.createAnimation({
            "100": {
              "top": "342dp",
              "stepConfig": {
                "timingFunction": kony.anim.EASIN_IN_OUT
              }
            },
            "50": {
              "top": "350dp",
              "stepConfig": {
                "timingFunction": kony.anim.LINEAR
              }
            }
          }), {
            "delay": 0.1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
          }, {
            "animationEnd": function() {
            }
          });
        frmFallTop["lblRemme"].animate(
          kony.ui.createAnimation({
            "100": {
              "top": "337dp",
              "stepConfig": {
                "timingFunction": kony.anim.EASIN_IN_OUT
              }
            },
            "50": {
              "top": "340dp",
              "stepConfig": {
                "timingFunction": kony.anim.LINEAR
              }
            }
          }), {
            "delay": 0.1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
          }, {
            "animationEnd": function() {
            }
          });
        frmFallTop["imgLock"].animate(
          kony.ui.createAnimation({
            "100": {
              "top": "15%",
              "stepConfig": {
                "timingFunction": kony.anim.EASIN_IN_OUT
              }
            },
            "50": {
              "top": "18%",
              "stepConfig": {
                "timingFunction": kony.anim.LINEAR
              }
            }
          }), {
            "delay": 0.3,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
          }, {
            "animationEnd": function(){
            }
          });
      }
    });
}
/**********************************************************************************
* Name app: frmLoginParalax
*
**********************************************************************************/
/*La Funcion preshowlogin3, me sirve para poderle dar una opacidad a mi form
flxFooter, que se encunetra dentro del mi form flxInit, para que el usuario no
pueda visualizarlo en el form principal el cual estara oculto. A este se le asigna
una propiedad de opacidad con un valor de 0, el cual se mantendra oculto hasta que
se haga el llamado de la trancision la cual va ser que se muestre al usuario.

Tambien se encuentra el nombre de mi imagen la cual se lla imgSunLife, a la cual se
le esta dando una propiedad y se le asigna un valor top de 40%, lo que hace este valor
es darle un efecto a la imagen haciendo que esta suba y y cuando llegue al porcentaje 
que le asignamos en pantalla se detendra. Dandole una opacidad de 1, para que el usuario
la pueda visualizar y poder ver el efecto que se le asigna.*/
function preshowlogin3(){
    frmLoginParalax.flxFooter.opacity = 0;
    frmLoginParalax.imgSunlife.top="40%";
	frmLoginParalax.imgSunlife.opacity = 1;
}
/*La Funcion opacitylogin3, es la que me sirve para poder mostrar el form de mi
Footer oculto, este form cuenta con una animacion, dicha animacion lo que
hace es que cuando carga la vista principal o el form de inicio de mi app despues
de cierto tiempo que se le asigna, cargaran los datos de mi form Footer, el cual se
se mostrara al usuario.*/
function opactitylogin3(){
   frmLoginParalax["flxFooter"].animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASIN_IN_OUT
                },
                "opacity": 1
            }
        }), {
            "delay": 1,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": function() { 
            }
        });
  frmLoginParalax["flxLogin"].animate(
    kony.ui.createAnimation({
      "100": {
        "top": "44%",
        "stepConfig": {
          "timingFunction": kony.anim.EASIN_IN_OUT
        }
      }
    }), 
    {"delay": 1,
     "iterationCount": 1,
     "fillMode": kony.anim.FILL_MODE_FORWARDS,
     "duration": 1}, 
    {"animationEnd": function(){}
    });
  frmLoginParalax["imgSunlife"].animate(
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
/*La propiedad zIndex se le asigna un valor de 3, este valor es la posicion en
donde se encuentra ubicado el form Footer*/
  frmLoginParalax.flxFooter.zIndex="3";
/*Aca se encuentra las propiedades que se le asignan a las animaciones que contiene
form principal o de inicio, el cual solo contiene el background, el degreed y el logo
los cuales apareceran primero, para luego mostrar la siguiente vista o el form que
contiene los demas datos.*/
  frmLoginParalax["flxInit"].animate(
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

        frmLoginParalax["flxInit"].animate(
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

              frmLoginParalax["flxInit"].animate(
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
                    frmLoginParalax["flxInit"].animate(
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
                          frmLoginParalax["flxInit"].animate(
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
                                frmLoginParalax["flxInit"].animate(
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
                                      frmLoginParalax["flxInit"].animate(
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
/*Dentro de la funcion chasebgresize, se encuentra mi imagen de fondo la que 
se encuentra ubicada dentro de mi form masterContainer*/
function chasebgresize(){
  frmLoginParalax["imgBGresize"].animate(
    kony.ui.createAnimation(
      {"100":
       {"stepConfig":
        {"timingFunction":kony.anim.EASIN_IN_OUT},
        "bottom":"35%","left":"0%","right":"0%","top":"0%"}}),
    {"fillMode":kony.anim.FILL_MODE_FORWARDS,
     "duration":1,
     "delay":1},
    {"animationEnd" : function(){
    }
    });
}
/*Dentro de la funcion animateLogin3Up, esta ubicado el form flxLogin el cual
se encuentra oculto para el usuario, pero cuando uno se posiciona dentro del form
masterContainer este se le asigna una animacion la cual consiste en hacer que el 
form de login se desoculte subiendo a un cierto porcentaje de la pantalla quedando
visible para el usuario.*/
function animatelogin3Up(){
  frmLoginParalax["flxLogin"].animate(
    kony.ui.createAnimation({
      "100": {
        "stepConfig": {
          "timingFunction": kony.anim.EASIN_IN_OUT
        },
        "opacity": 1
      }
    }), {
      "delay": 0,
      "iterationCount": 1,
      "fillMode": kony.anim.FILL_MODE_FORWARDS,
      "duration": 1
    }, {
      "animationEnd": function(){
        animatelogin3Up()
      }
    });
  frmLogin["flxLogin"].animate(
    kony.ui.createAnimation({
      "100": {
        "top": "185dp",
        "stepConfig": {
          "timingFunction": kony.anim.EASIN_IN_OUT
        }
      }
    }), {
      "delay": 0,
      "iterationCount": 1,
      "fillMode": kony.anim.FILL_MODE_FORWARDS,
      "duration": 1
    }, {
      "animationEnd": function() {}
    });
}
/**********************************************************************************
* Name app: frmLoginCRM
* 
**********************************************************************************/
/*La funcion animateCRM, se manda a llamar por medio de una accion a la cual se le 
asigna en un postShow, este manda a llamar la funcion desde un code sniped, para hacer
la animacion que se requiere en el splash y login.

Tambien se encuentra lo que es el frmLoginCRM, es el nombre que tiene mi form principal 
y dentro de los corchetes se le asigna los parametros de los cuales son los nombres de 
los flex containers. labels botones, imagenes, etc.

Aca tambien aparecen lo que son todas las propiedades que son medidas, tamaños, posiciones
y tiempos los cuales se les asigna ciertos porcentajes, pixeles o dp, los cuales son los que
hacen que los objetos lleguen a determinadas posiciones que se le asginan a cada una de las 
propiedes para que se puedan mostrar en pantalla, haciendo haci su efecto o trancision 
correspondiente*/
function animateCRM() {
  frmLoginCRM["lblEmpower"].animate(
    kony.ui.createAnimation({
      "100": {
        "opacity": 0,
        "stepConfig": {
          "timingFunction": kony.anim.EASIN_OUT
        }
      },
      "0": {
        "opacity": 1,
        "stepConfig": {
          "timingFunction": kony.anim.EASIN_OUT
        }
      }
    }), {
      "delay": 0.1,
      "fillMode": kony.anim.FILL_MODE_FORWARDS,
      "duration": 0.8
    }, {
      "animationEnd": function() {
        frmLoginCRM["imgKony"].animate(
          kony.ui.createAnimation({
            "100": {
              "centerY": "93%",
              "width": "65dp",
              "height": "20dp",
              "stepConfig": {
                "timingFunction": kony.anim.EASIN_IN_OUT
              }
            }
          }), {
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1.2
          }, {
            "animationEnd": function() {
              frmLoginCRM["imgKony"].animate(
                kony.ui.createAnimation({
                  "100": {
                    "centerX": "61%",
                    "stepConfig": {
                      "timingFunction": kony.anim.LINEAR
                    }
                  }
                }), {
                  "fillMode": kony.anim.FILL_MODE_FORWARDS,
                  "duration": 0.5
                }, {
                  "animationEnd": function() {
                    frmLoginCRM["lblPoweredBy"].animate(
                      kony.ui.createAnimation({
                        "100": {
                          "opacity": 1,
                          "width":"75dp",
                          "stepConfig": {
                          }
                        }
                      }), {
                        "fillMode": kony.anim.FILL_MODE_FORWARDS,
                        "duration": 0.5
                      }, {
                        "animationEnd": function() {
                          frmLoginCRM["lblPoweredBy"].isVisible = true
                        }
                      });
                  }
                });
              frmLoginCRM["btnLogin"].animate(
                kony.ui.createAnimation({
                  "100": {
                    "top": "228dp",
                    "stepConfig": {
                      "timingFunction": kony.anim.EASIN_IN_OUT
                    }
                  },
                  "50": {
                    "top": "258dp",
                    "stepConfig": {
                      "timingFunction": kony.anim.LINEAR
                    }
                  }
                }), {
                  "fillMode": kony.anim.FILL_MODE_FORWARDS,
                  "duration": 1
                }, {
                  "animationEnd": function() {
                  }
                });
              frmLoginCRM["tbxPassword"].animate(
                kony.ui.createAnimation({
                  "100": {
                    "top": "158dp",
                    "stepConfig": {
                      "timingFunction": kony.anim.EASIN_IN_OUT
                    }
                  },
                  "50": {
                    "top": "188dp",
                    "stepConfig": {
                      "timingFunction": kony.anim.LINEAR
                    }
                  }
                }), {
                  "delay": 0.1,
                  "fillMode": kony.anim.FILL_MODE_FORWARDS,
                  "duration": 1
                }, {
                  "animationEnd": function() {
                  }
                });
              frmLoginCRM["tbxUser"].animate(
                kony.ui.createAnimation({
                  "100": {
                    "top": "112dp",
                    "stepConfig": {
                      "timingFunction": kony.anim.EASIN_IN_OUT
                    }
                  },
                  "50": {
                    "top": "142dp",
                    "stepConfig": {
                      "timingFunction": kony.anim.LINEAR
                    }
                  }
                }), {
                  "delay": 0.2,
                  "fillMode": kony.anim.FILL_MODE_FORWARDS,
                  "duration": 1
                }, {
                  "animationEnd": function() {
                  }
                });
              frmLoginCRM["lblKonyCRM"].animate(
                kony.ui.createAnimation({
                  "100": {
                    "top": "74dp",
                    "stepConfig": {
                      "timingFunction": kony.anim.EASIN_IN_OUT
                    }
                  },
                  "50": {
                    "top": "104dp",
                    "stepConfig": {
                      "timingFunction": kony.anim.LINEAR
                    }
                  }
                }), {
                  "delay": 0.3,
                  "fillMode": kony.anim.FILL_MODE_FORWARDS,
                  "duration": 1
                }, {
                  "animationEnd": function() {
                  }
                });
            }
          });
      }
    });
}
/**********************************************************************************************
* Name: flyingLogo
*
***********************************************************************************************/
/*
La funcion flyingLogo, se manda a llamar por medio de una accion a la cual se le 
asigna en un preShow, aca se manda a llamar el form frmLoginFly, desde un code sniped, 
agregandole los parametros que se encuentran dentro de el, y asignandole las propiedades
las cuales son las que me sirven para poder hacer que la animacion de slash y login pueda
mostrarse. 
*/
function flyingLogo(){
/*
Tambien se encuentra thisForm, lo que hace este es generalizar y tomar todo los objetos que 
que se encuentran dentro de mi contenedor frmLoginFly, estos aparecen dentro de "[]", y dentro
de ellos aparece el onjeto al que se va entrar y tambien se encuentran todas las propiedades
que son medidas, tamaños, posiciones y tiempos los cuales se les asigna ciertos porcentajes, 
pixeles o dp, los cuales son los que hacen que los objetos lleguen a determinadas posiciones que 
se le asginan a cada una de las propiedes para que se puedan mostrar en pantalla, haciendo asi su 
efecto o transicion correspondiente.
*/
  thisForm = kony.application.getCurrentForm();
    thisForm['imgShadow'].opacity=0.5;
  
    thisForm['imgLogo'].animate(
      kony.ui.createAnimation({100:{top:"215dp","stepConfig":{}}}),
      {fillMode:kony.anim.FILL_MODE_FORWARDS,duration:2},
      {animationEnd: function() {
        
        thisForm['imgShadow'].animate(
          kony.ui.createAnimation({100:{opacity:0,"stepConfig":{}}}),
          {delay:0.8,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.3},
          {animationEnd: function() {
          } 
          });
        thisForm['imgLogo'].animate(
          kony.ui.createAnimation({100:{top:"15dp","stepConfig":{}}}),
          {delay:0.8,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.3},
          {animationEnd: function() {
            
            thisForm['imgLogo'].animate(
              kony.ui.createAnimation({100:{left:"15dp","stepConfig":{}}}),
              {fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.2},
              {animationEnd: function() {
              } 
              });
            
            thisForm['flxIntro'].animate(
              kony.ui.createAnimation({100:{opacity:1,"stepConfig":{}}}),
              {delay:0.1,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.55},
              {animationEnd: function() {
              } 
              });
            thisForm['flxLogin'].animate(
              kony.ui.createAnimation({100:{opacity:1,"stepConfig":{}}}),
              {delay:0.2,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.55},
              {animationEnd: function() {
              } 
              });
            thisForm['flxButtom'].animate(
              kony.ui.createAnimation({100:{opacity:1,"stepConfig":{}}}),
              {delay:0.3,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.55},
              {animationEnd: function() {
              } 
              });
            thisForm['flxForgot'].animate(
              kony.ui.createAnimation({100:{opacity:1,"stepConfig":{}}}),
              {delay:0.4,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.55},
              {animationEnd: function() {
              } 
              });
            thisForm['flxFooter'].animate(
              kony.ui.createAnimation({100:{opacity:1,"stepConfig":{}}}),
              {delay:0.5,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.55},
              {animationEnd: function() {
              } 
              });
          } 
          });
      } 
      });
}
/**********************************************************************************************
* Name    : animateBanners
* Purpose : Slides form background images.
***********************************************************************************************/
/*Aca se declara una variable global la cual se le da el nombre de arofflex y dentro de esta
se crea un array y dentro del array se agregan los elementos que son los flex o contenedores
los que contienen las imagenes que vamos a mostrar en pantalla.

Tambien se hace el uso de otra variable global la cual se le da el nombre de imageindex, con un
valor de cero, este valor es el numero de la posicion en la que se va encontrar la imagen posicionada.
*/
var arofflex = ["flxImg1","flxImg2","flxImg3","flxImg4","flxImg5"];
var imageindex=0;
/*La funcion animateBanners, es la que me sirve para poder mandar a llamar el codigo desde un postShow,
el cual mando a llamar la funcion desde un code snipped.*/
function animateBanners(){
/*El nombre de mi frmMovieStyleImage, es el nombre del form principal en el cual se encuentran todos los
objetos que son los que se visualizan para el usuario.

Aca tambien se encuentra lo que son las animaciones los tiempos y las medidas en las que los objetos estaran
haciendo la animacion.*/
  frmMovieStyleImage[arofflex[imageindex]].animate(
    kony.ui.createAnimation(
      {"100":
       {"left":"-20%",
        "stepConfig":
        {"timingFunction":kony.anim.EASIN_IN_OUT}}}),
    {"delay":0,
     "iterationCount":1,
     "fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":6.5},
    {"animationEnd" : function(){
    frmMovieStyleImage[arofflex[imageindex]].animate(
  kony.ui.createAnimation(
    {"100":
     {"stepConfig":
      {"timingFunction":kony.anim.EASIN_IN_OUT},
      "opacity":0}}),
      {"delay":0,
       "iterationCount":1,
       "fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":2.5},
      {"animationEnd" : function()
/*Aca se mandan a llamar las variables globales que se declararon al principio del codigo, a la 
variable imageindex se le agrega un contador que ira sumando un numero, el cual cada ves que entre 
dentro del if se incrementara de uno en uno hasta llegar a la imagen principal de nuevo.*/
       {imageindex++;if(imageindex==5){imageindex=0;rollBackFlexes();}animateBanners();
       }
      });
    }
    });
 }
function rollBackFlexes(){
  kony.print("nothing");
}


   


























  
  