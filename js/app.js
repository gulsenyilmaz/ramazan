var message = $("#message");
var overlay  = $('.overlay h1');
var animationStart = false;


$( function() {

    $("#bgvid").on("timeupdate", function(event){
        onTrackedVideoFrame(this.currentTime, this.duration);
    });

    // $.getJSON( "{{HOURS_JSON}}" , function( result ){
    //     var today = new Date();
    //     var today_str = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
    //     $("#message").text(result[today_str].time);
    //     $("#message").css({"opacity" : 0});
    // });

    var hours = {
        "2017-6-7": {"time":  "20:42"},
        "2017-6-8": {"time":  "20:42"},
        "2017-6-9": {"time":  "20:43"},
        "2017-6-10": {"time":  "20:43"},
        "2017-6-11": {"time":  "20:44"},
        "2017-6-12": {"time":  "20:44"},
        "2017-6-13": {"time":  "20:45"},
        "2017-6-14": {"time":  "20:45"},
        "2017-6-15": {"time":  "20:46"},
        "2017-6-16": {"time":  "20:46"},
        "2017-6-17": {"time":  "20:46"},
        "2017-6-18": {"time":  "20:47"},
        "2017-6-19": {"time":  "20:47"},
        "2017-6-20": {"time":  "20:47"},
        "2017-6-21": {"time":  "20:48"},
        "2017-6-22": {"time":  "20:48"},
        "2017-6-23": {"time":  "20:48"},
        "2017-6-24": {"time":  "20:48"},
        "2017-6-25": {"time":  "20:48"},
        "2017-6-26": {"time":  "20:48"},
        "2017-6-27": {"time":  "20:48"},
        "2017-6-28": {"time":  "20:48"},
        "2017-6-29": {"time":  "20:48"},
        "2017-6-30": {"time":  "20:48"}
    };

    var today = new Date();
    var today_str = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
    // var message = $("#message");
    message.text(hours[today_str].time);
    // overlay.css({"opacity" : 1});
    // overlay.css({"color": "#FFC72C"});
    overlay.css({
                    '-webkit-transform': 'translate3d(0px,-500px, 0px)'
                    , '-moz-transform': 'translate3d(0px,-500px, 0px)'
                    , 'transform': 'translate3d(0px,-500px, 0px)'
                });


});


function onTrackedVideoFrame(currentTime, duration){

    if(currentTime >= 5 && currentTime < duration-.7 ){
        // overlay.css({"opacity" : 1});
        // overlay.css({"color": "#FFC72C"});
        if(!animationStart) {
            animationStart = true;
            overlay.css({
                '-webkit-transform': 'translate3d(0px,0px, 0px)'
                , '-moz-transform': 'translate3d(0px,0px, 0px)'
                , 'transform': 'translate3d(0px,0px, 0px)'
            });
            overlay.css("transition", "all 1s linear");
            overlay.css("-webkit-transition", "all 1s linear");
            overlay.css("-moz-transition", "all 1s linear");
            overlay.css("-o-transition", "all 1s linear");

        }

    }
    else {
        animationStart = false;
        // overlay.css({"opacity" : 0});
        // overlay.css({"color": "#FFC72C"});
        overlay.css({
                    '-webkit-transform': 'translate3d(0px,-500px, 0px)'
                    , '-moz-transform': 'translate3d(0px,-500px, 0px)'
                    , 'transform': 'translate3d(0px,-500px, 0px)'
                });
        overlay.css("-webkit-transition", "none");
        overlay.css("-moz-transition", "none");
        overlay.css("-o-transition", "none");
        overlay.css("transition", "none");
    }
}