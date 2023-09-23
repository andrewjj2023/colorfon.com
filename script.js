/* eslint-env browser */
/* eslint
   semi: ["error", "always"],
   indent: [2, "tab"],
   no-tabs: 0,
   no-multiple-empty-lines: ["error", {"max": 2, "maxEOF": 1}],
   one-var: ["error", "always"] */
/* global REDIPS */

/* enable strict mode */
'use strict';

// create redips container
let redips = {};


// redips initialization
redips.init = function () {
	let num = 0,			// number of successfully placed elements
		rd = REDIPS.drag;	// reference to the REDIPS.drag lib
	// set reference to message HTML elements
	redips.msg = document.getElementById('message');
	// initialization
	rd.init();
	// set hover color
	rd.hover.colorTd = 'black';
	
	
	rd.mark.exceptionClass.xa = 'xa_cell';
	rd.mark.exceptionClass.xar = 'xar_cell';
	rd.mark.exceptionClass.xai = 'xai_cell';	
	rd.mark.exceptionClass.xau = 'xau_cell';
	rd.mark.exceptionClass.xe = 'xe_cell';
	rd.mark.exceptionClass.xer = 'xer_cell';	
	rd.mark.exceptionClass.xei = 'xei_cell';
	rd.mark.exceptionClass.xi = 'xi_cell';
	rd.mark.exceptionClass.xee = 'xee_cell';	
	rd.mark.exceptionClass.xiu = 'xiu_cell';
	rd.mark.exceptionClass.xod = 'xod_cell';
	rd.mark.exceptionClass.xor = 'xor_cell';
	rd.mark.exceptionClass.xou = 'xou_cell';	
	rd.mark.exceptionClass.xoi = 'xoi_cell';
	rd.mark.exceptionClass.xir = 'xir_cell';	
	rd.mark.exceptionClass.xirr = 'xirr_cell';
	rd.mark.exceptionClass.xoo = 'xoo_cell';	
	rd.mark.exceptionClass.xuh = 'xuh_cell';
	
	rd.mark.exceptionClass.bbb = 'bbb_cell';
	rd.mark.exceptionClass.cchh = 'chch_cell';
	rd.mark.exceptionClass.ddd = 'ddd_cell';
	rd.mark.exceptionClass.fff = 'fff_cell';
	rd.mark.exceptionClass.ggg = 'ggg_cell';
	rd.mark.exceptionClass.hhh = 'hhh_cell';
	rd.mark.exceptionClass.jjj = 'jjj_cell';
	rd.mark.exceptionClass.jhjh = 'jh_cell';
	rd.mark.exceptionClass.kkk = 'kkk_cell';
	rd.mark.exceptionClass.lll = 'lll_cell';
	rd.mark.exceptionClass.mmm = 'mmm_cell';
	rd.mark.exceptionClass.nnn = 'nnn_cell';
	rd.mark.exceptionClass.ngng = 'ngng_cell';
	rd.mark.exceptionClass.ppp = 'ppp_cell';
	rd.mark.exceptionClass.rrr = 'rrr_cell';
	rd.mark.exceptionClass.sss = 'sss_cell';
	rd.mark.exceptionClass.shsh = 'shsh_cell';
	rd.mark.exceptionClass.ttt = 'ttt_cell';
	rd.mark.exceptionClass.thth = 'thth_cell';
	rd.mark.exceptionClass.th5 = 'th5_cell';
	rd.mark.exceptionClass.vvv = 'vvv_cell';
	rd.mark.exceptionClass.www = 'www_cell';
	rd.mark.exceptionClass.yyy = 'yyy_cell';
	rd.mark.exceptionClass.zzz = 'zzz_cell';
	
	
	
	// event handler called after DIV element is dropped to TD
	rd.event.dropped = function (targetCell) {
		let	divClass = rd.mark.exceptionClass, // shorter notation for DIV exception class
			text;
			

		
			{	
			// make DIV unmovable
			rd.enableDrag(false, rd.obj);
			// increase counter
			num++;
			// prepare message
			if (num < 1) {
				text = 'score  '   + num;
			}
			else {
                   text = 'Well done!<a href="ACCENTS/reflex.htm"><img src="../X SYMS/next 0.jpg"></a>'			}
			// display message
			redips.msg.innerHTML = text;
		}
	};
};


// add onload event listener
if (window.addEventListener) {
	window.addEventListener('load', redips.init, false);
}
else if (window.attachEvent) {
	window.attachEvent('onload', redips.init);
}
