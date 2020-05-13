function timeToString(time) {
    var datetime = new Date(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
    var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
    var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}

function getParamByUrl() {
    var localUrl = document.location.href;
    var index = localUrl.indexOf("?");
    if (index == -1) {
        return;
    }
    var subUrl = localUrl.substring(index + 1);
    var subArr = subUrl.split("&");
    var paramArr = new Object();
    for (var i in subArr) {
        var sub = subArr[i].split("=");
        paramArr[sub[0]] = sub[1];
    }
    return paramArr;
}

function createPage(pageTotal, pageNum, pageId) {
    $("ul li.data-table").remove();
    var index = 1;
    var end;
    var string = "";
    if (pageNum != 1) {
        string = "<li class=\"data-table\" onclick=\"gotoStart()\">\n" +
            "             <a href=\"#\" aria-label=\"Previous\">\n" +
            "                 <span aria-hidden=\"true\">&laquo;</span>\n" +
            "             </a>\n" +
            "         </li>";
    } else {
        string = "<li class=\"data-table\" style=\"visibility: hidden\">\n" +
            "             <a href=\"#\" aria-label=\"Previous\">\n" +
            "                 <span aria-hidden=\"true\">&laquo;</span>\n" +
            "             </a>\n" +
            "         </li>";
    }

    if (pageNum < 4) {
        index = 1;
    } else if (pageNum + 1 == pageTotal) {
        index = pageNum - 3;
    } else if (pageNum == pageTotal) {
        index = pageNum - 4;
    } else {
        index = pageNum - 2;
    }
    if (pageTotal >= index + 4) {
        end = index + 4;
    } else {
        end = pageTotal;
    }
    for (; index <= end; index++) {
        if (index == pageNum) {
            string += "<li class=\"data-table active\"><a href=\"#\">" + index + "</a></li>";
        } else {
            string += "<li class='data-table'><a href=\"#\" onclick=\"changePage(this)\">" + index + "</a></li>";
        }
    }
    if (pageNum != pageTotal && pageTotal != 0) {
        string += "<li class=\"data-table\" onclick=\"gotoEnd(this)\">\n" +
            "          <a href=\"#\" aria-label=\"Next\">\n" +
            "              <span style=\"display: none\" id=\"getPageTotal\">" + pageTotal + "</span>\n" +
            "              <span aria-hidden=\"true\">&raquo;</span>\n" +
            "          </a>\n" +
            "      </li>";
    } else {
        string += "<li class=\"data-table\" style=\"visibility: hidden\">\n" +
            "          <a href=\"#\" aria-label=\"Next\">\n" +
            "              <span aria-hidden=\"true\">&raquo;</span>\n" +
            "          </a>\n" +
            "      </li>";
    }
    $(pageId).append(string);
}


