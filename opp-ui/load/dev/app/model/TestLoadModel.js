Ext.define('CCPerf.model.TestLoadModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: "loadTestId" },
        {name: "appUnderTest" },
        {name: "appUnderTestVersion" },
        {name: "comments"},
        {name: "description"},
        {name: "environment"},
        {name: "startTime", type: 'date', dateFormat: 'timestamp'},
        {name: "endTime", type: 'date', dateFormat: 'timestamp'},
        {name: "testName"},
        {name: "testSubName"},
        {name: "testTool"},
        {name: "testToolVersion"},
        {name: "vuserCount"},
        {name: "transactionName"},
        {name: "totalCallCount"},
        {name: "respAvg"},
        {name: "respMax"},
        {name: "respMin"},
        {name: "respMedian"},
        {name: "respPct75"},
        {name: "respPct90"},
        {name: "respStddev"},
        {name: "tpsMedian"},
        {name: "tpsMax"},
        {name: "totalBytesReceived"},
        {name: "totalBytesSent"},
        {name: 'totalBytes'},
        {name: 'totalCallCountTrend'},
        {name: 'respAvgTrend'},
        {name: 'respMedianTrend'},
        {name: 'respPct90Trend'},
        {name: 'tpsMedianTrend'},
        {name: 'tpsMaxTrend'},
        {name: 'totalBytesTrend'},
        {name: 'errorCount'}
     ]
});
