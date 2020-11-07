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
console.log(possibleTimes);

$(document).ready(function(){
    console.log("Document ready");

    init();

    function init () {
        renderPlanner();
        colorCode();

    };

    function renderPlanner() {
        console.log("Initializing planner");
        console.log(moment().format('H'));
        console.log(typeof(moment().format('H')));

    };

    function colorCode() {

    };

});