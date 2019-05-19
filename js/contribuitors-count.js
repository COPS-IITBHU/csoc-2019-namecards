define('contribuitors-count', function () {
    var nodesSameClass = document.getElementsByClassName("contributor");
    var numContributors = nodesSameClass.length - 1;
    document.getElementById("count").innerHTML = "Contributors Count: " + "<span class='badge'>" +
        numContributors + "</span>";
});
