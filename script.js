var scissors = document.getElementById("scissors");
var paper = document.getElementById("paper");
var rock = document.getElementById("rock");
var lizard = document.getElementById("lizard");
var spock = document.getElementById("spock");
var circ = document.getElementsByClassName('circles');
var victory = 0;
var temp;
var points=localStorage.getItem('points');
if(!(points>0 || points<0 || points==0))
points=0;
localStorage.setItem('points',points);
var choose = 0;
var rules = document.getElementById("rules-board");
var cpu = document.getElementsByClassName('cpu-circle')[0];
document.getElementsByClassName('number')[0].innerHTML=localStorage.getItem('points');
var cpu_icons = { 0: "url(images/icon-scissors.svg)", 1: "url(images/icon-paper.svg)", 2: "url(images/icon-rock.svg)", 3: "url(images/icon-lizard.svg)", 4: "url(images/icon-spock.svg)" };

var topp;

var leftt;

var list = { 0: scissors, 1: paper, 2: rock, 3: lizard, 4: spock };

var colors = { 0: "hsl(39, 89%, 49%)", 1: "hsl(230, 89%, 62%)", 2: "hsl(349, 71%, 52%)", 3: "hsl(261, 73%, 60%)", 4: "hsl(189, 59%, 53%)" };
window.onload=rulesload;
function rulesload(){
document.getElementsByClassName('rules-container')[0].style.zIndex="3";
rules.style.top = "calc(50% - 170px)";
rules.style.opacity = "1";
}
document.getElementsByClassName("rules")[0].addEventListener("click", () => {
rulesload();
});
document.getElementById("btn").addEventListener("click", () => {
    document.getElementsByClassName('rules-container')[0].style.zIndex="-1";
    rules.style.top = "calc(50% - 220px)";
    rules.style.opacity = "0";
});
var z = window.matchMedia("(min-width: 631px)");
main(z);
z.addListener(main);
function main(z) {
    if (z.matches) {
        topp={0:"22px",1:"150px",2:"335px",3:"335px",4:"150px"};

leftt={0:"180px",1:"345px",2:"280px",3:"80px",4:"20px"};
        function sci() {
            scissors.style.transform = "translate(-400px,290.617px)";
            scissors.style.zIndex = "-5";
            scissors.style.opacity = "0";
        }
        function pap() {
            paper.style.transform = "translate(-400px,-290.617px)";
            paper.style.zIndex = "-5";
            paper.style.opacity = "0";
        }
        function roc() {
            rock.style.transform = "translate(146.213px,-450px)";
            rock.style.zIndex = "-5";
            rock.style.opacity = "0";
        }
        function liz() {
            lizard.style.transform = "translate(400px,0)";
            lizard.style.zIndex = "-5";
            lizard.style.opacity = "0";
        }
        function spo() {
            spock.style.transform = "translate(89.35px,275px)";
            spock.style.zIndex = "-5";
            spock.style.opacity = "0";
        }

        var funclist = { 0: sci, 1: pap, 2: roc, 3: liz, 4: spo };

        var shadowlist = { 0: "inset 0 6px 1px rgb(190, 190, 190), 0 6px 0 #c06d21", 1: "inset 0 6px 1px rgb(190, 190, 190), 0 6px 0 #2944c3", 2: "inset 0 6px 1px rgb(190, 190, 190), 0 6px 0 #9b1533", 3: "inset 0 6px 1px rgb(190, 190, 190), 0 6px 0 #6137a9", 4: "inset 0 6px 1px rgb(190, 190, 190), 0 6px 0 #2c8eac" };

        for (let x = 0; x < 5; x++) {
            list[x].addEventListener("click", () => {
                document.getElementsByClassName('play')[0].style.background = "none";
                for (let a = 0; a < 5; a++) {
                    if (a != x)
                        funclist[a]();
                }
                list[x].style.left = "-90px";
                list[x].style.top = "calc(40% - 70px)";
                list[x].style.width = "250px"
                list[x].style.height = "250px"
                list[x].style.borderRadius = "250px"
                list[x].style.border = "30px solid " + colors[x];
                list[x].style.zIndex = "-2"
                document.getElementsByClassName('icon')[x].style.zoom = "2";
                choose = x;
                cpu.style.zIndex = "1";
                cpu.style.opacity = "1";
                temp=list[x];

                var cpu_value = Math.floor(Math.random() * 5);
                var result;
                if (cpu_value == (choose + 1) % 5 || cpu_value == (choose + 3) % 5) { victory= 1; points++;
localStorage.setItem("points",points);
                result="YOU WIN";
                }
                else if (cpu_value == choose){
                 result="IT'S A DRAW"
                victory = undefined;
                }
                else {points--
                    result="YOU LOSE";
localStorage.setItem("points",points);
            victory=0;
                };
               var clock= setInterval(delay, 4000);
                function delay() {
                    cpu.style.background = cpu_icons[cpu_value];
                    cpu.style.backgroundRepeat = "no-repeat";
                    cpu.style.backgroundPosition = "center";
                    cpu.style.border = "30px solid " + colors[cpu_value];
                    cpu.style.backgroundSize = "52.5%";
                    cpu.style.backgroundColor = "#dcdcdc";
                    cpu.style.boxShadow = shadowlist[cpu_value];
                    document.getElementById("after-text").style.opacity = "1";
                    document.getElementById("after-text").style.zIndex = "1";
                    document.getElementsByClassName('result-board')[0].style.opacity="1";
                    document.getElementsByClassName('result-board')[0].style.zIndex="5";
                    document.getElementsByClassName('result-board')[0].getElementsByTagName('p')[0].innerHTML=result;
                    document.getElementsByClassName('number')[0].innerHTML = localStorage.getItem('points');
                    var wincirc=document.getElementsByClassName('win-gradient')[0];
                    if(victory==1){
                        wincirc.style.opacity="1";
                        wincirc.style.left="-240px";
                    }
                    else if(victory==0){
                        wincirc.style.opacity="1";
                        wincirc.style.left="240px";
                    }
                    document.getElementById('circ-1').style.width="550px";
                    document.getElementById('circ-1').style.height="550px";
                    document.getElementById('circ-2').style.width="450px";
                    document.getElementById('circ-2').style.height="450px";
                    document.getElementById('circ-3').style.width="350px";
                    document.getElementById('circ-3').style.height="350px";
                    clearInterval(clock);
                }

            });
        }
        document.getElementById('again').addEventListener('click',()=>{
            document.getElementsByClassName('play')[0].style.background="url(images/bg-pentagon.svg)";
            document.getElementsByClassName('play')[0].style.backgroundPosition="center";
            document.getElementsByClassName('play')[0].style.backgroundRepeat="no-repeat";
            for(let o=0;o<5;o++){
            list[o].style.transform = "none";
            list[o].style.zIndex = "1";
            list[o].style.opacity = "1";
            }
            temp.style.left=leftt[choose];
            temp.style.top=topp[choose];
            temp.style.border = "15px solid " + colors[choose];
            temp.style.width="140px";
            temp.style.height="140px";
            temp.style.borderRadius="140px";
            document.getElementsByClassName('icon')[choose].style.zoom = "1";
            document.getElementById('after-text').style.zIndex="-3";
            document.getElementById('after-text').style.opacity="0";
            document.getElementsByClassName('win-gradient')[0].style.zIndex="-3";
            document.getElementsByClassName('win-gradient')[0].style.opacity="0";
            document.getElementsByClassName('result-board')[0].style.zIndex="-3";
            document.getElementsByClassName('result-board')[0].style.opacity="0";
            cpu.style.zIndex="-3";
            cpu.style.opacity="0";
            cpu.style.background="hsl(237, 49%, 15%)";
            cpu.style.border="none";
            cpu.style.boxShadow="none";
        
        })
    }
    else {
        topp={0:"-50px",1:"50px",2:"180px",3:"180px",4:"50px"};

leftt={0:"75px",1:"200px",2:"170px",3:"0px",4:"-50px"};
        function sci() {
            scissors.style.transform = "translate(-400px,290.617px)";
            scissors.style.zIndex = "-5";
            scissors.style.opacity = "0";
        }
        function pap() {
            paper.style.transform = "translate(-400px,-290.617px)";
            paper.style.zIndex = "-5";
            paper.style.opacity = "0";
        }
        function roc() {
            rock.style.transform = "translate(30px,-92.33px)";
            rock.style.zIndex = "-5";
            rock.style.opacity = "0";
        }
        function liz() {
            lizard.style.transform = "translate(100px)";
            lizard.style.zIndex = "-5";
            lizard.style.opacity = "0";
        }
        function spo() {
            spock.style.transform = "translate(89.35px,275px)";
            spock.style.zIndex = "-5";
            spock.style.opacity = "0";
        }

        var funclist = { 0: sci, 1: pap, 2: roc, 3: liz, 4: spo };

        var shadowlist = { 0: "inset 0 6px 1px rgb(190, 190, 190), 0 6px 0 #c06d21", 1: "inset 0 6px 1px rgb(190, 190, 190), 0 6px 0 #2944c3", 2: "inset 0 6px 1px rgb(190, 190, 190), 0 6px 0 #9b1533", 3: "inset 0 6px 1px rgb(190, 190, 190), 0 6px 0 #6137a9", 4: "inset 0 6px 1px rgb(190, 190, 190), 0 6px 0 #2c8eac" };

        for (let x = 0; x < 5; x++) {
            list[x].addEventListener("click", () => {
                document.getElementsByClassName('play')[0].style.background = "none";
                for (let a = 0; a < 5; a++) {
                    if (a != x)
                        funclist[a]();
                }
                list[x].style.left = "-40px";
                list[x].style.top = "calc(40% - 70px)";
                list[x].style.width = "125px"
                list[x].style.height = "125px"
                list[x].style.borderRadius = "125px"
                list[x].style.border = "12px solid " + colors[x];
                list[x].style.zIndex = "-2"
                document.getElementsByClassName('icon')[x].style.zoom = "1";
                choose = x;
                cpu.style.zIndex = "1";
                cpu.style.opacity = "1";
                temp=list[x];

                var cpu_value = Math.floor(Math.random() * 5);
                var result;
                if (cpu_value == (choose + 1) % 5 || cpu_value == (choose + 3) % 5) { victory= 1; points++;
localStorage.setItem("points",points);
                result="YOU WIN";
                }
                else if (cpu_value == choose){
                 result="IT'S A DRAW"
                victory = undefined;
                }
                else {points--
                    result="YOU LOSE";
localStorage.setItem("points",points);
            victory=0;
                };
               var clock= setInterval(delay1, 3000);
                function delay1() {
                    cpu.style.background = cpu_icons[cpu_value];
                    cpu.style.backgroundRepeat = "no-repeat";
                    cpu.style.backgroundPosition = "center";
                    cpu.style.border = "12px solid " + colors[cpu_value];
                    cpu.style.backgroundSize = "52.5%";
                    cpu.style.backgroundColor = "#dcdcdc";
                    cpu.style.boxShadow = shadowlist[cpu_value];
                    document.getElementById("after-text").style.opacity = "1";
                    document.getElementById("after-text").style.zIndex = "1";
                    document.getElementsByClassName('result-board')[0].style.opacity="1";
                    document.getElementsByClassName('result-board')[0].style.zIndex="5";
                    document.getElementsByClassName('result-board')[0].getElementsByTagName('p')[0].innerHTML=result;
                    document.getElementsByClassName('number')[0].innerHTML = localStorage.getItem('points');
                    var wincirc=document.getElementsByClassName('win-gradient')[0];
                    if(victory==1){
                        wincirc.style.opacity="1";
                        wincirc.style.left="-115px";
                    }
                    else if(victory==0){
                        wincirc.style.opacity="1";
                        wincirc.style.left="74px";
                    }
                    document.getElementById('circ-1').style.width="275px";
                    document.getElementById('circ-1').style.height="275px";
                    document.getElementById('circ-2').style.width="225px";
                    document.getElementById('circ-2').style.height="225px";
                    document.getElementById('circ-3').style.width="175px";
                    document.getElementById('circ-3').style.height="175px";
                    clearInterval(clock);
                }

            });
        }
        document.getElementById('again').addEventListener('click',()=>{
            document.getElementsByClassName('win-gradient')[0].style.left="auto";
            document.getElementsByClassName('play')[0].style.background="url(images/bg-pentagon.svg)";
            document.getElementsByClassName('play')[0].style.backgroundPosition="center";
            document.getElementsByClassName('play')[0].style.backgroundRepeat="no-repeat";
            document.getElementsByClassName('play')[0].style.backgroundSize="contain";
            for(let o=0;o<5;o++){
            list[o].style.transform = "none";
            list[o].style.zIndex = "1";
            list[o].style.opacity = "1";
            }
            temp.style.left=leftt[choose];
            temp.style.top=topp[choose];
            temp.style.border = "10px solid " + colors[choose];
            temp.style.width="100px";
            temp.style.height="100px";
            temp.style.borderRadius="100px";
            document.getElementsByClassName('icon')[choose].style.zoom = "1";
            document.getElementById('after-text').style.zIndex="-3";
            document.getElementById('after-text').style.opacity="0";
            document.getElementsByClassName('win-gradient')[0].style.zIndex="-3";
            document.getElementsByClassName('win-gradient')[0].style.opacity="0";
            document.getElementsByClassName('result-board')[0].style.zIndex="-3";
            document.getElementsByClassName('result-board')[0].style.opacity="0";
            cpu.style.zIndex="-3";
            cpu.style.opacity="0";
            cpu.style.background="hsl(237, 49%, 15%)";
            cpu.style.border="none";
            cpu.style.boxShadow="none";
        
        })    

    }
}
localStorage.setItem('points',points);
