/*
	tmpsus
    test sus93 modules with ease.
    written with codemirror in windows 93
*/
(async function tmpsus() {
  	let argv = this.arg.arguments;
  	if (argv.length !== 1) {
      $log(`tmpsus - Test sus93 modules.
Usage: tmpsus (file)
Imports file into the app list temporarily.
Use to make sure sus93 modules will work properly.
File should be on the desktop.
To run the app after importing, just type the file name.`);
      return;
    }
	if (await localforage.getItem(`desktop/${argv[0]}`) === null) {
		$log(`Can't find ${argv[0]}!`);
        return;
	}
    le._apps[argv[0]] = {
        exec: async function() { eval(await localforage.getItem(`desktop/${argv[0]}`)).call(this); },
		terminal: true,
		cli: true
    };
	$log(`Set ${argv[0]} to run /a/desktop/${argv[0]}!`);
})
