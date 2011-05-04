var Settings = function () {
  var DefaultTimeout = 60000;
  return {
    GetPollingTimeout : function() {
      return localStorage["Monichrome.PollingTimeout"] || DefaultTimeout;
    },
    SetPollingTimeout : function(timeout) {
      localStorage["Monichrome.PollingTimeout"] = timeout;
    },
    GetFilterFunction : function() {
      return localStorage["Monichrome.FilterFunction"] || 
        "function(monitor, loc) { return monitor.tag === 'IDM';}";
    },
	SetFilterFunction : function(filterFunc) {
		localStorage["Monichrome.FilterFunction"] = filterFunc;
	},
	GetApiKey : function() {
		return localStorage["Monichrome.MonitisApiKey"] || "";
	},
	SetApiKey : function(apiKey) {
		localStorage["Monichrome.MonitisApiKey"] = apiKey;
	}
  };
}();