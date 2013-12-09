for(var i = 0; i < 238; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u207'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u161'] = 'top';gv_vAlignTable['u128'] = 'top';u222.tabIndex = 0;

u222.style.cursor = 'pointer';
$axure.eventManager.click('u222', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('案例.html');

}
});
gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u235'] = 'center';gv_vAlignTable['u138'] = 'center';gv_vAlignTable['u144'] = 'center';gv_vAlignTable['u65'] = 'center';
u236.style.cursor = 'pointer';
$axure.eventManager.click('u236', function(e) {

if (true) {

	SetPanelVisibility('u233','hidden','fade',100);

}
});
gv_vAlignTable['u189'] = 'top';gv_vAlignTable['u6'] = 'center';u205.tabIndex = 0;

u205.style.cursor = 'pointer';
$axure.eventManager.click('u205', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u37_img').tabIndex = 0;
HookHover('u37', false);

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','swing','left',200,'swing','left',200);

}
});

$axure.eventManager.mouseover('u62', function(e) {
if (!IsTrueMouseOver('u62',e)) return;
if (true) {

	SetPanelVisibility('u63','','fade',100);

}
});
gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u21'] = 'top';
$axure.eventManager.blur('u8', function(e) {

if ((GetWidgetValueLength('u8')) != ('0')) {

SetWidgetFormText('u3', '请输入');

}
else
if ((GetWidgetValueLength('u8')) == ('0')) {

	SetPanelVisibility('u4','hidden','none',100);

}
});
gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u176'] = 'center';u208.tabIndex = 0;

u208.style.cursor = 'pointer';
$axure.eventManager.click('u208', function(e) {

if (true) {

	SetPanelState('u154', 'pd2u154','swing','right',300,'swing','right',300);

}
});
gv_vAlignTable['u208'] = 'top';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u146'] = 'center';gv_vAlignTable['u187'] = 'top';u170.tabIndex = 0;

u170.style.cursor = 'pointer';
$axure.eventManager.click('u170', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('案例.html');

}
});
u220.tabIndex = 0;

u220.style.cursor = 'pointer';
$axure.eventManager.click('u220', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u231'] = 'center';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u16'] = 'top';u203.tabIndex = 0;

u203.style.cursor = 'pointer';
$axure.eventManager.click('u203', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('个人页面_1.html');

	SetPanelState('u154', 'pd0u154','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u125', function(e) {
if (!IsTrueMouseOver('u125',e)) return;
if (true) {

	SetPanelVisibility('u150','hidden','fade',100);

}
});
gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u41'] = 'top';
$axure.eventManager.mouseover('u149', function(e) {
if (!IsTrueMouseOver('u149',e)) return;
if (true) {

	SetPanelVisibility('u150','','fade',100);

}
});
gv_vAlignTable['u210'] = 'center';u223.tabIndex = 0;

u223.style.cursor = 'pointer';
$axure.eventManager.click('u223', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('杂志.html');

}
});
gv_vAlignTable['u32'] = 'top';u174.tabIndex = 0;

u174.style.cursor = 'pointer';
$axure.eventManager.click('u174', function(e) {

if (true) {

	SetPanelState('u154', 'pd0u154','swing','left',300,'swing','left',300);

}
});
gv_vAlignTable['u174'] = 'top';gv_vAlignTable['u51'] = 'center';
$axure.eventManager.focus('u10', function(e) {

if ((GetWidgetText('u10')) == ('请输入')) {

SetWidgetFormText('u10', '');

}
});

$axure.eventManager.blur('u10', function(e) {

if ((GetWidgetValueLength('u10')) == ('0')) {

SetWidgetFormText('u10', '请输入');

}
else
if ((GetWidgetValueLength('u10')) != ('0')) {

SetGlobalVariableValue('text', GetFocusedWidgetText());

SetWidgetFormText('u15', '' + (GetGlobalVariableValue('text')) + '');

	SetPanelVisibility('u11','','fade',100);

}
});
gv_vAlignTable['u226'] = 'center';u153.tabIndex = 0;

u153.style.cursor = 'pointer';
$axure.eventManager.click('u153', function(e) {

if (true) {

	SetPanelVisibility('u233','','fade',100);

}
});
gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u101'] = 'top';u95.tabIndex = 0;

u95.style.cursor = 'pointer';
$axure.eventManager.click('u95', function(e) {

if (true) {

	SetPanelVisibility('u233','','fade',100);

}
});
gv_vAlignTable['u180'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u213'] = 'top';
$axure.eventManager.mouseover('u33', function(e) {
if (!IsTrueMouseOver('u33',e)) return;
if (true) {

	SetPanelVisibility('u63','hidden','fade',100);

}
});
gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u198'] = 'top';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u43'] = 'top';u169.tabIndex = 0;

u169.style.cursor = 'pointer';
$axure.eventManager.click('u169', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('家装.html');

}
});
u171.tabIndex = 0;

u171.style.cursor = 'pointer';
$axure.eventManager.click('u171', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('杂志.html');

}
});
u168.tabIndex = 0;

u168.style.cursor = 'pointer';
$axure.eventManager.click('u168', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u109'] = 'center';
$axure.eventManager.mouseover('u67', function(e) {
if (!IsTrueMouseOver('u67',e)) return;
if (true) {

	SetPanelVisibility('u92','hidden','fade',100);

}
});
u192.tabIndex = 0;

u192.style.cursor = 'pointer';
$axure.eventManager.click('u192', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('案例.html');

}
});
gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u195'] = 'center';gv_vAlignTable['u228'] = 'center';u124.tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

	SetPanelVisibility('u233','','fade',100);

}
});
gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u134'] = 'center';document.getElementById('u177_img').tabIndex = 0;

u177.style.cursor = 'pointer';
$axure.eventManager.click('u177', function(e) {

if (true) {

	SetPanelState('u154', 'pd2u154','none','',500,'none','',500);

}
});
gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u185'] = 'top';gv_vAlignTable['u217'] = 'top';gv_vAlignTable['u167'] = 'top';
$axure.eventManager.mouseover('u91', function(e) {
if (!IsTrueMouseOver('u91',e)) return;
if (true) {

	SetPanelVisibility('u92','','fade',100);

}
});
gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u219'] = 'top';gv_vAlignTable['u140'] = 'center';gv_vAlignTable['u117'] = 'center';u190.tabIndex = 0;

u190.style.cursor = 'pointer';
$axure.eventManager.click('u190', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u136'] = 'center';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u142'] = 'center';gv_vAlignTable['u173'] = 'center';gv_vAlignTable['u129'] = 'top';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u183'] = 'top';
u237.style.cursor = 'pointer';
$axure.eventManager.click('u237', function(e) {

if (true) {

	SetPanelVisibility('u233','hidden','fade',100);

}
});
gv_vAlignTable['u111'] = 'center';u66.tabIndex = 0;

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	SetPanelVisibility('u233','','fade',100);

}
});
gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u178'] = 'center';
$axure.eventManager.mouseover('u96', function(e) {
if (!IsTrueMouseOver('u96',e)) return;
if (true) {

	SetPanelVisibility('u121','hidden','fade',100);

}
});

$axure.eventManager.blur('u15', function(e) {

if ((GetWidgetValueLength('u15')) != ('0')) {

SetWidgetFormText('u10', '请输入');

}
else
if ((GetWidgetValueLength('u15')) == ('0')) {

	SetPanelVisibility('u11','hidden','none',100);

}
});
gv_vAlignTable['u49'] = 'center';
$axure.eventManager.mouseover('u120', function(e) {
if (!IsTrueMouseOver('u120',e)) return;
if (true) {

	SetPanelVisibility('u121','','fade',100);

}
});
gv_vAlignTable['u163'] = 'top';gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u1'] = 'top';u191.tabIndex = 0;

u191.style.cursor = 'pointer';
$axure.eventManager.click('u191', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('家装.html');

}
});
u193.tabIndex = 0;

u193.style.cursor = 'pointer';
$axure.eventManager.click('u193', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('杂志.html');

}
});
gv_vAlignTable['u165'] = 'top';gv_vAlignTable['u130'] = 'top';gv_vAlignTable['u200'] = 'top';gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u215'] = 'top';u2.tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','swing','right',200,'swing','right',200);

}
});
gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u152'] = 'center';u232.tabIndex = 0;

u232.style.cursor = 'pointer';
$axure.eventManager.click('u232', function(e) {

if (true) {

	SetPanelVisibility('u233','','fade',100);

}
});
gv_vAlignTable['u107'] = 'center';u221.tabIndex = 0;

u221.style.cursor = 'pointer';
$axure.eventManager.click('u221', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('家装.html');

}
});
gv_vAlignTable['u69'] = 'center';
$axure.eventManager.focus('u3', function(e) {

if ((GetWidgetText('u3')) == ('请输入')) {

SetWidgetFormText('u3', '');

}
});

$axure.eventManager.blur('u3', function(e) {

if ((GetWidgetValueLength('u3')) == ('0')) {

SetWidgetFormText('u3', '请输入');

}
else
if ((GetWidgetValueLength('u3')) != ('0')) {

SetGlobalVariableValue('text', GetFocusedWidgetText());

SetWidgetFormText('u8', '' + (GetGlobalVariableValue('text')) + '');

	SetPanelVisibility('u4','','fade',100);

}
});
gv_vAlignTable['u132'] = 'center';