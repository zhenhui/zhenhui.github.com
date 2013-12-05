for(var i = 0; i < 97; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u0').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u0'); });
else {
    document.getElementById('u0').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u0'); }, true);
    document.getElementById('u0').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u0'); }, true);
}

widgetIdToDragFunction['u0'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u0',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

}

}
u21.tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('案例.html');

}
});
gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u51'] = 'top';u25.tabIndex = 0;

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	SetPanelState('u5', 'pd0u5','swing','left',300,'swing','left',300);

}
});
gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u58'] = 'center';document.getElementById('u3_img').tabIndex = 0;

u3.style.cursor = 'pointer';
$axure.eventManager.click('u3', function(e) {

if (true) {

	SetPanelVisibility('u0','hidden','fade',100);

}
});
gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u64'] = 'top';u19.tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u81'] = 'center';u41.tabIndex = 0;

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
u71.tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u66'] = 'top';document.getElementById('u87_img').tabIndex = 0;

u87.style.cursor = 'pointer';
$axure.eventManager.click('u87', function(e) {

if (true) {

	SetPanelVisibility('u0','','none',500);

	SetPanelVisibility('u84','hidden','none',500);

}
});
gv_vAlignTable['u83'] = 'center';u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('杂志.html');

}
});
u43.tabIndex = 0;

u43.style.cursor = 'pointer';
$axure.eventManager.click('u43', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('案例.html');

}
});
document.getElementById('u28_img').tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	SetPanelState('u5', 'pd2u5','none','',500,'none','',500);

}
});
gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u90'] = 'center';u20.tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('家装.html');

}
});
gv_vAlignTable['u24'] = 'center';u54.tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

	SetPanelState('u5', 'pd0u5','none','',500,'none','',500);

}
});
gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u61'] = 'center';document.getElementById('u95_img').tabIndex = 0;

u95.style.cursor = 'pointer';
$axure.eventManager.click('u95', function(e) {

if (true) {

	SetPanelVisibility('u84','hidden','none',500);

}
});
gv_vAlignTable['u18'] = 'top';document.getElementById('u82_img').tabIndex = 0;

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if (true) {

	SetPanelVisibility('u84','','fade',100);

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u9'] = 'center';u42.tabIndex = 0;

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('家装.html');

}
});
u72.tabIndex = 0;

u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('家装.html');

}
});
gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u14'] = 'top';u73.tabIndex = 0;

u73.style.cursor = 'pointer';
$axure.eventManager.click('u73', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('案例.html');

}
});
u44.tabIndex = 0;

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('杂志.html');

}
});
u74.tabIndex = 0;

u74.style.cursor = 'pointer';
$axure.eventManager.click('u74', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('杂志.html');

}
});
gv_vAlignTable['u29'] = 'center';u59.tabIndex = 0;

u59.style.cursor = 'pointer';
$axure.eventManager.click('u59', function(e) {

if (true) {

	SetPanelState('u5', 'pd2u5','swing','right',300,'swing','right',300);

}
});
gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u92'] = 'center';