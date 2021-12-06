var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "186",
        "ok": "186",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "509",
        "ok": "509",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7575",
        "ok": "7575",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "797",
        "ok": "797",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "756",
        "ok": "756",
        "ko": "-"
    },
    "percentiles1": {
        "total": "562",
        "ok": "562",
        "ko": "-"
    },
    "percentiles2": {
        "total": "601",
        "ok": "601",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1623",
        "ok": "1623",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3631",
        "ok": "3631",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 160,
    "percentage": 86
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 26,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.889",
        "ok": "6.889",
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
        "total": "186",
        "ok": "186",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "509",
        "ok": "509",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7575",
        "ok": "7575",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "797",
        "ok": "797",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "756",
        "ok": "756",
        "ko": "-"
    },
    "percentiles1": {
        "total": "562",
        "ok": "562",
        "ko": "-"
    },
    "percentiles2": {
        "total": "601",
        "ok": "601",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1623",
        "ok": "1623",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3631",
        "ok": "3631",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 160,
    "percentage": 86
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 26,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.889",
        "ok": "6.889",
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
