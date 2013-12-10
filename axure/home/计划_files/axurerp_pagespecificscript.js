for(var i = 0; i < 235; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

$axure.eventManager.mouseover('u122', function(e) {
if (!IsTrueMouseOver('u122',e)) return;
if (true) {

	SetPanelVisibility('u147','hidden','fade',100);

}
});
gv_vAlignTable['u207'] = 'center';gv_vAlignTable['u79'] = 'center';
$axure.eventManager.focus('u4', function(e) {

if ((GetWidgetText('u4')) == ('请输入')) {

SetWidgetFormText('u4', '');

}
});

$axure.eventManager.blur('u4', function(e) {

if ((GetWidgetValueLength('u4')) == ('0')) {

SetWidgetFormText('u4', '请输入');

}
else
if ((GetWidgetValueLength('u4')) != ('0')) {

SetGlobalVariableValue('text', GetFocusedWidgetText());

SetWidgetFormText('u9', '' + (GetGlobalVariableValue('text')) + '');

	SetPanelVisibility('u5','','fade',100);

}
});
gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u225'] = 'center';gv_vAlignTable['u186'] = 'top';gv_vAlignTable['u48'] = 'center';
$axure.eventManager.focus('u27', function(e) {

if (true) {

	SetPanelVisibility('u28','','none',500);

	var obj1 = document.getElementById("u29");
    obj1.focus();

}
});
gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u192'] = 'center';gv_vAlignTable['u110'] = 'center';u189.tabIndex = 0;

u189.style.cursor = 'pointer';
$axure.eventManager.click('u189', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('案例.html');

}
});
u205.tabIndex = 0;

u205.style.cursor = 'pointer';
$axure.eventManager.click('u205', function(e) {

if (true) {

	SetPanelState('u151', 'pd2u151','swing','right',300,'swing','right',300);

}
});
gv_vAlignTable['u205'] = 'top';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u184'] = 'top';
$axure.eventManager.mouseover('u30', function(e) {
if (!IsTrueMouseOver('u30',e)) return;
if (true) {

	SetPanelVisibility('u60','hidden','fade',100);

}
});
gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u133'] = 'center';
$axure.eventManager.mouseover('u88', function(e) {
if (!IsTrueMouseOver('u88',e)) return;
if (true) {

	SetPanelVisibility('u89','','fade',100);

}
});
gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u164'] = 'top';
$axure.eventManager.mouseover('u146', function(e) {
if (!IsTrueMouseOver('u146',e)) return;
if (true) {

	SetPanelVisibility('u147','','fade',100);

}
});
u187.tabIndex = 0;

u187.style.cursor = 'pointer';
$axure.eventManager.click('u187', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u170'] = 'center';u220.tabIndex = 0;

u220.style.cursor = 'pointer';
$axure.eventManager.click('u220', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('杂志.html');

}
});
gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u125'] = 'top';u202.tabIndex = 0;

u202.style.cursor = 'pointer';
$axure.eventManager.click('u202', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u210'] = 'top';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u173'] = 'center';document.getElementById('u174_img').tabIndex = 0;

u174.style.cursor = 'pointer';
$axure.eventManager.click('u174', function(e) {

if (true) {

	SetPanelState('u151', 'pd2u151','none','',500,'none','',500);

}
});
gv_vAlignTable['u216'] = 'top';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u195'] = 'top';gv_vAlignTable['u180'] = 'top';u92.tabIndex = 0;

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

	SetPanelVisibility('u230','','fade',100);

}
});
gv_vAlignTable['u46'] = 'center';document.getElementById('u34_img').tabIndex = 0;
HookHover('u34', false);

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','swing','left',200,'swing','left',200);

}
});
gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u214'] = 'top';gv_vAlignTable['u127'] = 'top';gv_vAlignTable['u160'] = 'top';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u106'] = 'center';u168.tabIndex = 0;

u168.style.cursor = 'pointer';
$axure.eventManager.click('u168', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('杂志.html');

}
});
gv_vAlignTable['u212'] = 'top';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u155'] = 'center';gv_vAlignTable['u38'] = 'top';u121.tabIndex = 0;

u121.style.cursor = 'pointer';
$axure.eventManager.click('u121', function(e) {

if (true) {

	SetPanelVisibility('u230','','fade',100);

}
});
gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u31'] = 'top';
$axure.eventManager.blur('u9', function(e) {

if ((GetWidgetValueLength('u9')) != ('0')) {

SetWidgetFormText('u4', '请输入');

}
else
if ((GetWidgetValueLength('u9')) == ('0')) {

	SetPanelVisibility('u5','hidden','none',100);

}
});
u171.tabIndex = 0;

u171.style.cursor = 'pointer';
$axure.eventManager.click('u171', function(e) {

if (true) {

	SetPanelState('u151', 'pd0u151','swing','left',300,'swing','left',300);

}
});
gv_vAlignTable['u171'] = 'top';gv_vAlignTable['u228'] = 'center';gv_vAlignTable['u97'] = 'top';u63.tabIndex = 0;

u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if (true) {

	SetPanelVisibility('u230','','fade',100);

}
});
gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u177'] = 'center';
$axure.eventManager.mouseover('u64', function(e) {
if (!IsTrueMouseOver('u64',e)) return;
if (true) {

	SetPanelVisibility('u89','hidden','fade',100);

}
});
gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u26'] = 'top';u217.tabIndex = 0;

u217.style.cursor = 'pointer';
$axure.eventManager.click('u217', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
u167.tabIndex = 0;

u167.style.cursor = 'pointer';
$axure.eventManager.click('u167', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('案例.html');

}
});
gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u19'] = 'top';u219.tabIndex = 0;

u219.style.cursor = 'pointer';
$axure.eventManager.click('u219', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('案例.html');

}
});
u188.tabIndex = 0;

u188.style.cursor = 'pointer';
$axure.eventManager.click('u188', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('家装.html');

}
});
gv_vAlignTable['u162'] = 'top';gv_vAlignTable['u204'] = 'center';
$axure.eventManager.mouseover('u117', function(e) {
if (!IsTrueMouseOver('u117',e)) return;
if (true) {

	SetPanelVisibility('u118','','fade',100);

}
});
u190.tabIndex = 0;

u190.style.cursor = 'pointer';
$axure.eventManager.click('u190', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('杂志.html');

}
});
gv_vAlignTable['u68'] = 'top';
$axure.eventManager.blur('u29', function(e) {

if ((GetWidgetValueLength('u29')) == ('0')) {

	SetPanelVisibility('u28','hidden','fade',100);

}
else
if ((GetWidgetValueLength('u29')) != ('0')) {

}
});
gv_vAlignTable['u141'] = 'center';
u234.style.cursor = 'pointer';
$axure.eventManager.click('u234', function(e) {

if (true) {

	SetPanelVisibility('u230','hidden','fade',100);

}
});
gv_vAlignTable['u175'] = 'center';u150.tabIndex = 0;

u150.style.cursor = 'pointer';
$axure.eventManager.click('u150', function(e) {

if (true) {

	SetPanelVisibility('u230','','fade',100);

}
});
gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u182'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u153'] = 'center';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u83'] = 'center';u229.tabIndex = 0;

u229.style.cursor = 'pointer';
$axure.eventManager.click('u229', function(e) {

if (true) {

	SetPanelVisibility('u230','','fade',100);

}
});
gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u120'] = 'center';
u233.style.cursor = 'pointer';
$axure.eventManager.click('u233', function(e) {

if (true) {

	SetPanelVisibility('u230','hidden','fade',100);

}
});
gv_vAlignTable['u1'] = 'top';
$axure.eventManager.mouseover('u93', function(e) {
if (!IsTrueMouseOver('u93',e)) return;
if (true) {

	SetPanelVisibility('u118','hidden','fade',100);

}
});
gv_vAlignTable['u223'] = 'center';u165.tabIndex = 0;

u165.style.cursor = 'pointer';
$axure.eventManager.click('u165', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
u200.tabIndex = 0;

u200.style.cursor = 'pointer';
$axure.eventManager.click('u200', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('个人页面_1.html');

	SetPanelState('u151', 'pd0u151','none','',500,'none','',500);

}
});
gv_vAlignTable['u199'] = 'top';
$axure.eventManager.mouseover('u59', function(e) {
if (!IsTrueMouseOver('u59',e)) return;
if (true) {

	SetPanelVisibility('u60','','fade',100);

}
});
gv_vAlignTable['u137'] = 'center';u2.tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','swing','right',200,'swing','right',200);

}
});
gv_vAlignTable['u158'] = 'top';gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u232'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u197'] = 'top';u218.tabIndex = 0;

u218.style.cursor = 'pointer';
$axure.eventManager.click('u218', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('家装.html');

}
});
gv_vAlignTable['u114'] = 'center';u166.tabIndex = 0;

u166.style.cursor = 'pointer';
$axure.eventManager.click('u166', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('家装.html');

}
});
gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u126'] = 'top';