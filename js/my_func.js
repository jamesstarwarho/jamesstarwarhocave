// 17 goals
function Goals() {
    let goals = ["No Poverty", "Zero Hunger", "Good Health and Well-being", "Quality Education", "Gender Equality",
        "Clean Water and Sanitation", "Affordable and Clean Energy", "Decent Work and Economic Growth",
        "Industry, Innovation, and Infrastructure", "Reduced Inequalities", "Sustainable Cities and Communities",
        "Responsible Consumption and Production", "Climate Action", "Life Below Water", "Life on Land",
        "Peace, Justice, and Strong Institutions", "Partnerships for the Goals"];
    return goals;
}

function createProgressMenu() {
    //<li><a href="https://unstats.un.org/sdgs/report/2023/">Progress Report(2023)</a></li>
    let list = "";
    for (let i = 2023; i >= 2016; i--) {
        var element = "<li><a href='https://unstats.un.org/sdgs/report/" + i + "/'" + " target='_blank'" + ">Progress Report(" + i + ")</a></li>";
        list += element;
    }

    document.getElementById("progress-menu").innerHTML = list;
}

function createGoalsMenu() {
    //<li><a href="service1.html">1.No Poverty</a></li>
    let goals = Goals();
    items = "";
    for (let i = 0; i < goals.length; i++) {
        var element = "<li><a href='./GoalPages/goal" + (i + 1) + ".html'>" + (i + 1) + "." + goals[i] + "</a></li>";
        items += element;
    }

    document.getElementById("goals-menu").innerHTML = items;
}


//Generate multiple icon items through a loop to simplify the HTML content.
function createIconItems() {
    goals = Goals();
    let blocks = "";
    for (let i = 0; i < goals.length; i++) {
        //padStart(2, '0'): Pad a string with '0' until it reaches the length 2, e.g. "3" -> "03"
        let img1 = "Goal_" + (i + 1) + "/E_WEB_" + (i + 1).toString().padStart(2, '0') + ".png";
        let img2 = "Goal_" + (i + 1) + "/E_GIF_" + (i + 1).toString().padStart(2, '0') + ".gif";
        var element =
            "<div class='col-md-4 col-sm-6 col-xs-6'>"
            + "  <a class='content-box' href='./GoalPages/goal" + (i + 1) + ".html'>"
            + "    <div class='content-box-image'>"
            + "       <div class='goal-icon'>"
            + "          <img src='assets/images/goals/" + img1 + "'>"
            + "          <img src='assets/images/goals/" + img2 + "' class='img-top'>"
            + "       </div>"
            + "    </div>"
            + "    <h3 class='content-box-title font-serif'>" + goals[i] + "</h3>"
            + "  </a>"
            + "</div>";
        blocks += element;
    }

    document.getElementById("goal-blocks").innerHTML = blocks;
}

function setThemeColor(index) {
    const colors = ["#e5243b", "#dda83a", "#4c9f38", "#c5192d", "#ff3a21"
        , "#26bde2", "#fcc30b", "#a21942", "#fd6925", "#dd1367"
        , "#fd9d24", "#bf8b2e", "#3f7e44", "#0a97d9", "#56c02b"
        , "#00689d", "#19486a"];
    document.querySelector("#home").style.backgroundColor = colors[index];
    document.querySelector("#subSection").style.backgroundColor = colors[index];
    document.querySelector("#info").style.backgroundColor = colors[index];
    document.querySelector("#footer").style.backgroundColor = colors[index];
    document.querySelector("#sdg-nav").style.backgroundColor = colors[index];
}