var Monichrome = function() {
	return {
		Init : function () {
			Monichrome.UpdateMonitors();
		},
		UpdateMonitors : function () {	
			var data = chrome.extension.getBackgroundPage().MonitisPoller.GetMonitorData();
			var items = [];
			$.each(data, function(key, monitorData) {
				var monitor = monitorData.monitor;
				items.push('<tr><td>' + monitor.status + '</td><td>' + monitor.tag + '</td><td>' + monitor.name  + '</td></tr>');
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