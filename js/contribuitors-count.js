define('contribuitors-count', function () {
    var nodesSameClass = document.getElementsByClassName("contributor");
    var numContributors = nodesSameClass.length;
    document.getElementById("count").innerHTML = "Contributors Count: " + "<span class='badge'>" +
        numContributors + "</span>";
});
