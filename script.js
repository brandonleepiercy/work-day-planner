var possibleTimes = [{time:"5 am", value:"5"},
    {time:"6 am", value:"6"},
    {time:"7 am", value:"7"},
    {time:"8 am", value:"8"},
    {time:"9 am", value:"9"},
    {time:"10 am", value:"10"},
    {time:"11 am", value:"11"},
    {time:"12 pm", value:"12"},
    {time:"1 pm", value:"13"},
    {time:"2 pm", value:"14"},
    {time:"3 pm", value:"15"},
    {time:"4 pm", value:"16"},
    {time:"5 pm", value:"17"},
    {time:"6 pm", value:"18"},
    {time:"7 pm", value:"19"},
    {time:"8 pm", value:"20"},
    {time:"9 pm", value:"21"},
    {time:"10 pm", value:"22"},
    {time:"11 pm", value:"23"}];
var currentTime = moment().format('H');
var existingEventsArray = [];

console.log("Current hour: "+currentTime);

$(document).ready(function(){
    console.log("Document ready");

    init();

    function init () {
        renderPlanner();
        colorCode();
        renderPreviousEvents();

    };

    function renderPlanner() {
        console.log("Initializing planner");
        for (i=0; i<possibleTimes.length; i++) {
            var newTimeRow = $("<div>").addClass("row time-block").attr('id', possibleTimes[i].value);
            var newTimeLabel = $("<div>").addClass("col-sm-1 time-label hour").attr('id', possibleTimes[i].value).text(possibleTimes[i].time);
            var newTaskInput = $("<input>").addClass("col-sm-10 task-input").attr('id', possibleTimes[i].value + 'input').attr('placeholder', "...");
            var newTaskButton = $("<button>").addClass("col-sm-1 task-button saveBtn").attr('id', possibleTimes[i].value).text("Save");
            $("#timeblock-container").append(newTimeRow);
            (newTimeRow).append(newTimeLabel);
            (newTimeRow).append(newTaskInput);
            (newTimeRow).append(newTaskButton);    
        };
        console.log("Planner layout printed to page");

    };

    function colorCode() {
        console.log("Color coding based off: " + currentTime + ":00 as current time setting" );
        $(".task-input").each(function(){
            if (parseInt($(this).attr("id"))>parseInt(currentTime)) {
                $(this).addClass("future");
            } if (parseInt($(this).attr("id"))==parseInt(currentTime)) {
                $(this).addClass("present");
            } if (parseInt($(this).attr("id"))<parseInt(currentTime)) {
                $(this).addClass("past");
            };
        });
        console.log("Color coding complete");
    };

    function renderPreviousEvents() {
        var prevEvents = JSON.parse(localStorage.getItem("Events"));
        var prevEventsArray = []
        console.log(prevEvents);
        console.log(prevEventsArray);
        if(prevEvents==null) {
            return;
        } else {
            prevEventsArray=prevEvents;
            console.log(prevEventsArray);
            existingEventsArray=existingEventsArray.concat(prevEventsArray);
            console.log(existingEventsArray);
            for(i=0;i<existingEventsArray.length;i++){
                var toEdit = document.getElementById(existingEventsArray[i].time+"input");
                console.log(toEdit);
                toEdit.value=existingEventsArray[i].task;

            };
        };
    };

    $(".task-button").on("click", function(event){
        event.preventDefault();

        console.log("Button clicked, grabbing the response correlated to the button clicked");
        var responseValue = ($(this).parent().children()[1]).value;
        console.log("Recorded value: "+responseValue);

        console.log("Storing task and time inside of an object");
        var newEvent = {
            time: $(this).attr("id"),
            task: responseValue,
        };
        console.log(newEvent);
        console.log(existingEventsArray);
        existingEventsArray.push(newEvent);
        console.log(existingEventsArray);
        localStorage.setItem("Events" , JSON.stringify(existingEventsArray));
        console.log("Items consoldiated into the events array and stored locally.");
    });

    

});