(function() {
	'use strict';
	var $asm = {};
	ss.initAssembly($asm, 'Test');
	////////////////////////////////////////////////////////////////////////////////
	// Program
	var $Program = function() {
	};
	$Program.__typeName = 'Program';
	$Program.$main = function() {
		//Window.AttachEvent("onload", OnLoaded);
		$Program.$onLoaded();
	};
	$Program.$onLoaded = function() {
		//Console.Clear();
		console.assert(false, '3 is not > 4');
		for (var t = 0; t < 3; t++) {
			console.count('times counted');
		}
		console.debug('this is a debug message');
		console.dir(document.getElementById('mybut'));
		console.dirxml(document.getElementById('mybut'));
		//console.Exception("Exception");
		console.group('group with 3 items');
		console.debug('hello 1');
		console.debug('hello 2');
		console.debug('hello 3');
		console.groupEnd();
		console.groupCollapsed('group collapsed with 3 items');
		console.debug('hello 1');
		console.debug('hello 2');
		console.debug('hello 3');
		console.groupEnd();
		console.log('this is a log message');
		console.info('this is an info');
		console.warn('this is a warning');
		console.error('this is an error');
		console.profile();
		console.profileEnd();
		console.trace('trace');
		console.time('time');
		console.timeEnd('time end');
		console.timeStamp('timestamp');
		//console.Table(Document.GetElementById("mybut"));
	};
	global.Program = $Program;
	ss.initClass($Program, $asm, {});
	$Program.$main();
})();
