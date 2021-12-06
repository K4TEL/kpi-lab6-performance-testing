var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "524",
        "ok": "524",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3548",
        "ok": "3548",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "775",
        "ok": "775",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "552",
        "ok": "552",
        "ko": "-"
    },
    "percentiles1": {
        "total": "575",
        "ok": "575",
        "ko": "-"
    },
    "percentiles2": {
        "total": "619",
        "ok": "619",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1572",
        "ok": "1572",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2786",
        "ok": "2786",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 34,
    "percentage": 85
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.714",
        "ok": "5.714",
        "ko": "-"
    }
},
contents: {
"req_get-airline-by--7de2b": {
        type: "REQUEST",
        name: "GET airline by id request",
path: "GET airline by id request",
pathFormatted: "req_get-airline-by--7de2b",
stats: {
    "name": "GET airline by id request",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "524",
        "ok": "524",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3548",
        "ok": "3548",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "775",
        "ok": "775",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "552",
        "ok": "552",
        "ko": "-"
    },
    "percentiles1": {
        "total": "575",
        "ok": "575",
        "ko": "-"
    },
    "percentiles2": {
        "total": "619",
        "ok": "619",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1572",
        "ok": "1572",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2786",
        "ok": "2786",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 34,
    "percentage": 85
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.714",
        "ok": "5.714",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
