var Monichrome = function() {
	var MonitisUrl = "http://www.monitis.com/api?apikey=23G3JB3995UOS78B3329UTB152&output=json&version=2&action=testsLastValues&locationIds=1,10";
	return {
		Init : function () {
			Monichrome.UpdateMonitors();
		},
		UpdateMonitors : function () {	
			var data = chrome.extension.getBackgroundPage().MonitisPoller.GetMonitorData();
			var items = [];
			$.each(data, function(key, location) {
				$.each(location, function(key, monitors) {
					$.each(monitors, function (key, monitor) {
						if (monitor.id) {
							items.push('<tr><td>' + monitor.status + '</td><td>' + monitor.tag + '</td><td>' + monitor.name  + '</td></tr>');
						}
					});
				});
			});
			var html = items.join('');
			$('#monitor_data').html(html);
			
			var options = {
				additionalFilterTriggers: [$('#quickfind')]
			};
			$('#monitors').tableFilter(options);
			
			//$.uiTableFilter($('#monitors'), "0042");
			
			//setTimeout("Monichrome.UpdateMonitors()", 1000)
		}
	};
}();

$(function () {
	Monichrome.Init();
});