import {ExStartGui} from "./ExStartGui";
import {AnimationCon} from "../../public/index";
import {StartGui} from "../../public/index";
import {WeatherState} from "../../public/index";
import {SceneManager} from "../../public/index";
import {ExGameSceneCon} from "../../Scene/GameScene/ExGameSceneCon";
import {EventCon} from "../../other/EventCon";
import {ModuleName} from "../../public/enum/ModuleName";
import {GlobalManager} from "../../public/manager/GlobalManager";
import {AssetsManager} from "../../public";
export class ExStartGuiCon extends StartGui{

    /**
     * 游戏业务基础数据
     */


    private static instance: ExStartGuiCon;

    public static get ins(): ExStartGuiCon {
        if (!this.instance) {
            this.instance = new ExStartGuiCon();
        }
        return this.instance;
    }

    constructor(){
        super()
        this.scene=ExStartGui.ins.guiObject.sceneChild;
        this.parent=ExStartGui.ins.guiObject;
        this.gameSceneObject=ExGameSceneCon.ins;
    }

    public addEvent(){

        localStorage.weatherState=WeatherState.RAIN_DAY;

        document.body.appendChild(this.scene.viewNode)
        this.doEvents["viewPlay"]=document.getElementById("button_play").addEventListener("click",this.onClick_startBtn.bind(this))


        this.doEvents["SUNNY_DAY"]=document.getElementById("SUNNY_DAY").addEventListener("click",(e)=>{
            localStorage.weatherState=WeatherState.SUNNY_DAY;
            console.log("当前dom")
            document.querySelectorAll(".weather-config li")["forEach"]((list)=>{
                list.setAttribute("class","")
            })
            e["path"][0].setAttribute("class","we-active")
        })

        this.doEvents["RAIN_DAY"]=document.getElementById("RAIN_DAY").addEventListener("click",(e)=>{
            localStorage.weatherState=WeatherState.RAIN_DAY;
            document.querySelectorAll(".weather-config li")["forEach"]((list)=>{
                list.setAttribute("class","")
            })
            e["path"][0].setAttribute("class","we-active")
        })

        this.doEvents["AFTERNOON_DAY"]=document.getElementById("AFTERNOON_DAY").addEventListener("click",(e)=>{
            localStorage.weatherState=WeatherState.AFTERNOON_DAY;
            document.querySelectorAll(".weather-config li")["forEach"]((list)=>{
                list.setAttribute("class","")
            })
            e["path"][0].setAttribute("class","we-active")
        })

        this.doEvents["NIGHT_DAY"]=document.getElementById("NIGHT_DAY").addEventListener("click",(e)=>{
            localStorage.weatherState=WeatherState.NIGHT_DAY;
            document.querySelectorAll(".weather-config li")["forEach"]((list)=>{
                list.setAttribute("class","")
            })
            e["path"][0].setAttribute("class","we-active")
        })

        document.getElementById("GAME_BG").style.backgroundImage="url("+AssetsManager.ins.resourceObject["images"]["gameScene"]["b1"].src+")"
        document.getElementById("LOGO").style.backgroundImage="url("+AssetsManager.ins.resourceObject["images"]["gameScene"]["logo"].src+")"

        this.doEvents["MAP_LIST"]==document.getElementById("MAP_LIST").addEventListener("change",(e)=>{
          document.getElementById("MAP_LIST")["value"];
         var _map=eval('(' + (document.getElementById("MAP_LIST")["value"]) + ')');
          console.log(_map);
          localStorage.map=_map.map;
         // localStorage.car={x:2,y:0,z:0};
          localStorage.car_x=parseInt(_map.carposition.x);
          localStorage.car_y=parseInt(_map.carposition.y);
          localStorage.car_z=parseInt(_map.carposition.z);
          if(_map.map=="1"){
            document.getElementById("GAME_BG").style.backgroundImage="url("+AssetsManager.ins.resourceObject["images"]["gameScene"]["b1"].src+")"
          }

          if(_map.map=="2"){
            document.getElementById("GAME_BG").style.backgroundImage="url("+AssetsManager.ins.resourceObject["images"]["gameScene"]["b2"].src+")"
          }
          console.log(_map.carposition)
          
          console.log(localStorage)
        })


        document.getElementById("RAIN_DAY").style.backgroundImage="url("+AssetsManager.ins.resourceObject["images"]["gameScene"]["rain"].src+")"
        document.getElementById("SUNNY_DAY").style.backgroundImage="url("+AssetsManager.ins.resourceObject["images"]["gameScene"]["sun"].src+")"
        document.getElementById("AFTERNOON_DAY").style.backgroundImage="url("+AssetsManager.ins.resourceObject["images"]["gameScene"]["after"].src+")"
        document.getElementById("NIGHT_DAY").style.backgroundImage="url("+AssetsManager.ins.resourceObject["images"]["gameScene"]["night"].src+")"

    }


    

    protected onClick_startBtn() {
        super.onClick_startBtn()
        this.removeEvent()
    }


    public removeEvent(){
        super.removeEvent()
        if(document.getElementById("startNode")){
            try {
                document.body.removeChild(this.scene.viewNode)
            }catch (e) {
                console.log(e)
            }
        }
    }
}