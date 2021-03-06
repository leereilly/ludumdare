
class CSanitize {
	constructor() {
	}
	
	makeSlug( str ) {
		str = str.toLowerCase();
		str = str.replace(/%[a-f0-9]{2}/g,'-');
		str = str.replace(/[^a-z0-9]/g,'-');
		str = str.replace(/-+/g,'-');
		str = str.replace(/^-|-$/g,'');
		return str;
	}

	makeClean( str ) {
		str = str.toLowerCase();
		str = str.replace(/%[a-f0-9]{2}/g,'-');		// % codes = -
		str = str.replace(/[^a-z0-9\/#]/g,'-');		// non a-z, 0-9, #, or / with -
		str = str.replace(/-+/g,'-');				// multiple -'s to a single -
		str = str.replace(/\/+/g,'/');				// multiple /'s to a single /
//		str = str.replace(/^-|-$/g,'');				// Prefix and suffix -'s with nothing
		return str;
	}
	
	trimSlashes( str ) {
		return str.replace(/^\/|\/$/g,'');
	}
	
	validateMail( mail ) {
		// http://stackoverflow.com/a/9204568/5678759
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
	}
	
	getHTTPVars() {
		var ret = {};
		
		if (location.search) {
		    var parts = location.search.substring(1).split('&');
		
		    for (var i = 0; i < parts.length; i++) {
		        var nv = parts[i].split('=');
		        if (!nv[0]) continue;
		        ret[nv[0]] = nv[1] || true;
		    }
		}
		
		return ret;
	}
};

// Singleton
let Sanitize = new CSanitize();
export default Sanitize;
