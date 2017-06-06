

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
        "2017-5-31": {"time":  "20:38"},
        "2017-6-1": {"time":  "20:39"},
        "2017-6-2": {"time":  "20:40"},
        "2017-6-3": {"time":  "20:41"},
        "2017-6-4": {"time":  "20:42"},
        "2017-6-5": {"time":  "20:43"},
        "2017-6-6": {"time":  "20:44"},
        "2017-6-7": {"time":  "20:45"},
        "2017-6-8": {"time":  "20:46"}

    };

    var today = new Date();
    var today_str = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
    $("#message").text(hours[today_str].time);
    $("#message").css({"opacity" : 0.1});

});


function onTrackedVideoFrame(currentTime, duration){

    if(currentTime >= 5 && currentTime<duration ){
        $("#message").css({"opacity" : 1});

    }
    else {
        $("#message").css({"opacity" : 0});
    }


}