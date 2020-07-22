 var play=false;
var life;
var fruitnumber=['apple', 'banana', 'cherries', 'watermelon', 'peach', 'grapes', 'mango', 'orange', 'pear'];
var time;
var score;
 $(document).ready(function(){
    $("#setreset").click(function(){
        if(play==true){
            location.reload();
        }
        else{
            play=true;
            $("#setreset").html("Reset Game");
            $("#endgame").hide();
            $("#life").show();
            life=3;
            score=0;
            $("#scorevalue").html(score);
            displaylife();
            action();
        }
    });

    $("#fruit").mouseover(function(){
        score++;
        $("#scorevalue").html(score);
        clearInterval(time);
        $("#audio")[0].play();
        $("#fruit").hide("explode", 500);
        setTimeout(action,500);
    });

    function displaylife(){
        $("#life").empty();
        for(i=0;i<life;i++){
            $("#life").append('<img src="images/heart.png" class="lifecss">');
        }
    };

    function randomfruit(){
        $(".fruitdisplay").attr('src', 'images/'+ fruitnumber[Math.round(8*Math.random())] +'.png');
        $("#fruit").css({"top": -50, "left": 25+Math.round(500*Math.random())});
    };
    function action(){
        $("#fruit").show();
        randomfruit();
        step=20+Math.round(50*Math.random());
        time=setInterval(function(){
            $("#fruit").css({"top": $("#fruit").position().top+ step});
            if($("#fruit").position().top> $("#display").height()){
                stopaction();
                life--;
                if(life>0){
                    displaylife();
                    action();
                }
                else{
                    play=false;
                    $("#life").hide();
                    $("#scorevaluee").html(score);
                    $("#endgame").show();
                    $("#setreset").html("Start Game");
                }
            }
        },100);
    };

    function stopaction(){
        clearInterval(time);
        $("#fruit").hide();
    };
 });