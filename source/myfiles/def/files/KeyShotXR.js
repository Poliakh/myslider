var q = !0, t = null, z = !1;

window.keyshotXR = function (W, v, G, X, pa, D, qa, ra, sa, ta, ua, K, L, Y, Z, va, $, wa, aa, xa, ba, ya, za, Aa, Ba, r) {
	function P(a, d, b) {
		a.removeEventListener ? a.removeEventListener(d, b, z) : a.detachEvent && (a.detachEvent("on" + d, a["e" + d + b]), a["e" + d + b] = t)
	}
	function m(a, d, b) {
		a.addEventListener ? a.addEventListener(d, b, z) : a.attachEvent && (a["e" + d + b] = b, a.attachEvent("on" + d, function () { a["e" + d + b]() }))
	}
	function ca() {
		var a = z; -1 != navigator.platform.toString().indexOf("Win") && -1 != navigator.appVersion.indexOf("MSIE") && (a = q); return a
	}
	function Ca() {
		var a = document.getElementById(W), d = a.requestFullScreen || a.webkitRequestFullScreen || a.mozRequestFullScreen || a.msRequestFullScreen; "undefined" != typeof d && d && d.call(a)
	}
	function Da(f) {
		a.na = z; f.pointerId in a.F && delete a.F[f.pointerId]; da(f)
	}
	function Ea(f) {
		a.na && (a.F[f.pointerId] = [f.pageX, f.pageY], ea(f))
	}
	function Fa(f) {
		a.na = q; a.F[f.pointerId] = [f.pageX, f.pageY]; fa(f)
	}
	function ga() {
		a.l ? (setTimeout(function () { a.u(z) }, 20), setTimeout(function () { a.u(q) }, 120)) : (setTimeout(function () { a.u(q) }, 20), setTimeout(function () { a.u(z) }, 120))
	}
	function H() {
		var a = { x: 0, y: 0 }, d = s;
		if (d.offsetParent) {
			do a.x += d.offsetLeft, a.y += d.offsetTop;
			while (d = d.offsetParent)
		} return a
	}
	function ha() {
		var f = c.g; c.g = 1; f != c.g && a.T(a.v() * f / c.g); p.setAttribute("width", B.width); a.l ? (p.removeAttribute("height"), p.style.width = "100%", p.style[M] = "scale ( " + c.n + " ) ", p.style.height = "auto", s.style["background-color"] = a.backgroundColor, document.body.style["background-color"] = a.backgroundColor) : (p.setAttribute("height", B.height), p.style[M] = "translate ( " + -B.width / 2 + "px," +
			-B.height / 2 + "px )  scale ( " + c.g + " )  translate ( " + 0.5 * C.width / c.g + "px," + 0.5 * C.height / c.g + "px )  translate ( " + c.j + "px," + c.k + "px )  scale ( " + c.n + " ) ", p.style["max-width"] = "", p.style.width = "", p.style.height = "", s.style["background-color"] = a.backgroundColor)
	}
	function N() {
		a.Ta(a.h.offsetWidth, a.h.offsetHeight)
	}
	function ia(a, d) {
		l.start.x = a; l.start.y = d; l.a.x = a; l.a.y = d; i.a.x = a; i.a.y = d
	}
	function ja(a, d) {
		l.b.x = a - l.a.x; l.b.y = d - l.a.y; l.n.x = a; l.n.y = d; l.a.x = a; l.a.y = d
	}
	function F(f) {
		f || (f = window.event); var d = 0; f.keyCode ? d = f.keyCode :
			f.which && (d = f.which); 1 == d ? j.d |= 1 : 1 < d && (j.d |= 2); a.wa(f); f.preventDefault ? f.preventDefault() : f.returnValue = z
	}
	function I(f) {
		f || (f = window.event); var d = H(); a.cursor.x = f.pageX - d.x + k.left; a.cursor.y = f.pageY - d.y + k.top; f.preventDefault ? f.preventDefault() : f.returnValue = z; 0 < j.d && (1 == j.d ? ja(f.pageX, f.pageY) : 2 == j.d ? (f = a.cursor.y - E.start.y, d = a.v(), a.T(c.t * Math.exp(f / 200)), f = a.v(), c.j += parseFloat(a.e * d - a.e * f), c.k += parseFloat(a.f * d - a.f * f)) : 3 == j.d && (d = a.cursor.x - E.start.x, f = a.cursor.y - E.start.y, c.j += parseFloat((d -
			c.m.x) / c.g), c.k += parseFloat((f - c.m.y) / c.g), c.m.x = d, c.m.y = f))
	}
	function O(f) {
		f || (f = window.event); var d = 0; f.keyCode ? d = f.keyCode : f.which && (d = f.which); 1 == d ? j.d &= -2 : 1 < d && (j.d &= -3); a.wa(f); f.preventDefault ? f.preventDefault() : f.returnValue = z
	}
	function Q(f) {
		a.$a && (f = f ? f : window.event, a.Ha(0 < (f.detail ? -1 * f.detail : f.wheelDelta / 40) ? 1 : -1), ka(f))
	}
	function fa(f) {
		f || (f = window.event); var d = la(), b = H(); a.cursor.x = d[0].pageX - b.x + k.left;
		a.cursor.y = d[0].pageY - b.y + k.top; if (1 == d.length && d[0]) if (j.start.x = d[0].pageX, j.start.y =
			d[0].pageY, j.a.x = d[0].pageX, j.a.y = d[0].pageY, a.qa = d[0].target, a.qa == a.r) j.d = 1, ia(d[0].pageX, d[0].pageY); else for (var e = a.qa; e && e != a.r;) {
				if (e.onclick) e.onclick();
				e = e.parentNode
			}
		if (2 == d.length && d[0] && d[1]) {
			j.d = 3; j.ba.x = d[0].pageX - b.x + k.left;
			j.ba.y = d[0].pageY - b.y + k.top; j.ca.x = d[1].pageX - b.x + k.left;
			j.ca.y = d[1].pageY - b.y + k.top;
			var e = d[0].pageX - d[1].pageX, g = d[0].pageY - d[1].pageY, i = (d[0].pageX - b.x + k.left + (d[1].pageX - b.x + k.left)) / 2, d = (d[0].pageY - b.y + k.top + (d[1].pageY - b.y + k.top)) / 2; c.pa = z;
			c.Ua = Math.sqrt(e * e + g * g);
			c.t = a.v();
			a.e = parseFloat(i - 0.5 * C.width);
			a.f = parseFloat(d - 0.5 * C.height);
			a.e *= parseFloat(a.R);
			a.f *= parseFloat(a.R);
			a.e -= parseFloat(c.j);
			a.f -= parseFloat(c.k);
			a.e /= parseFloat(c.t);
			a.f /= parseFloat(c.t)
		} f.preventDefault()
	}
	function ea(f) {
		f || (f = window.event); var b = la(), e = H(); a.cursor.x = b[0].pageX - e.x + k.left; a.cursor.y = b[0].pageY - e.y + k.top; 1 == b.length && b[0] && (j.a.x = b[0].pageX, j.a.y = b[0].pageY, 0 <= j.d && ja(j.a.x, j.a.y)); if (2 == b.length && b[0] && b[1]) {
			var h = a.v(), g = b[0].pageX - b[1].pageX, i = b[0].pageY - b[1].pageY;
			a.T(c.t / c.Ua * Math.sqrt(g * g + i * i)); g = a.v(); i = a.f * h - a.f * g; c.j += a.e * h - a.e * g; c.k += i; h = (a.cursor.x + b[1].pageX - e.x + k.left) / 2 - (j.ba.x + j.ca.x) / 2; b = (a.cursor.y + b[1].pageY - e.y + k.top) / 2 - (j.ba.y + j.ca.y) / 2; c.pa == z && (c.m.x = h, c.m.y = b, c.pa = q); c.j += (h - c.m.x) / c.g; c.k += (b - c.m.y) / c.g; c.m.x = h; c.m.y = b
		} f.preventDefault()
	}
	function la() {
		if (!ca()) return window.event.touches;
		var f = [];
		for (id in a.F) {
			var b = a.F[id], e = {};
			e.pageX = b[0];
			e.pageY = b[1];
			e.target = a.r;
			e.preventDefault = function () { };
			f.push(e)
		}
		return f
	}
	function da(f) {
		f.preventDefault();
		a.qa = t;
		j.d = 0;
		var b = (new Date).getTime(), e = b - (R || b + 1);
		clearTimeout(S);
		500 > e && 0 < e || (R = b, S = setTimeout(function () { clearTimeout(S) }, 500, [f]));
		R = b
	}
	function Ga(a) {
		a.preventDefault(); j.d = 0
	}
	function T() {
		Ha(T);
		a.W == a.Z && (1 == j.d ? 0.01 < i.L ? (i.b.x = 0.4 * (l.a.x - i.a.x), i.b.y = 0.4 * (l.a.y - i.a.y), i.a.x += i.b.x, i.a.y += i.b.y, a.ma(i.b.x, i.b.y)) : (a.ma(l.b.x, l.b.y), l.b.x = 0, l.b.y = 0) : 0.01 < i.L && (i.b.x *= i.L, i.b.y *= i.L, 0.055 > i.b.x * i.b.x + i.b.y * i.b.y && (i.b.x = 0, i.b.y = 0, l.b.x = 0, l.b.y = 0, l.a.x = i.a.x, l.a.y = i.a.y), (0 != i.b.x || 0 != i.b.y) &&
			a.ma(i.b.x, i.b.y)));
		a.Ca();
		var f = 0;
		if (-1 == a.ga) {
			for (var b = 1, b = 0; b < a.G.length; b++) {
				var c = a.B[b];
				if (0 == a.w[c] && a.G[b].complete) {
					a.D[c] = a.w[c];
					a.w[c] = -1; if (a.W == a.Z) {
						var h = a.G.length + a.Aa;
						h > e.q && (h = e.q);
						if (h -= f) for (var g = 0; g < h; g++) a.fa()
					} e.J = q;
					0 == b && a.Ca()
				} -1 != a.D[c] && f++
			}
			b = parseFloat(f / e.q);
			a.Sa(b);
			f == e.q && (a.ga = 0, a.Ra())
		}
	}
	function ma(a) {
		keycode = (a ? a : window.event).keyCode;
		switch (keycode) {
			case 13: ga(), ka(a)
		}
	}
	function ka(a) {
		a = a ? a : window.event; a.preventDefault() ? a.preventDefault() : a.returnValue = z
	}
	var A = "/", J = window.location.href, na = J.lastIndexOf("/"); 0 <= na && (A = J.substr(0, na + 1));
	var U = J = z;
	this.$a = Y != Z;
	this.na = z;
	this.F = [];
	this.ia = z;
	this.Ca = function () {
		if (e.J) {
			if (a.ia) return; e.J = z;
			var b = parseInt(e.K * e.c + e.I);
			if (-1 != a.D[b]) {
				var d = a.C[b];
				V.src != d && (a.ia = q, V.setAttribute("src", d));
				void 0 !== r && (b = a.ha[b], !b && void 0 == r[b] ? document.getElementById("xr_hotspot") && (d = document.getElementById("xr_hotspot"), document.body.removeChild(d)) : (document.getElementById("xr_hotspot") && (d = document.getElementById("xr_hotspot"),
					document.body.removeChild(d)), d = document.createElement("div"), d.innerHTML = r[b].text, d.id = "xr_hotspot", d.style.position = "absolute", d.style.left = r[b].position.x + "px", d.style.top = r[b].position.y + "px", d.style.color = "#000000", void 0 !== r[b].gb && (r[b].options.fontSize && (d.style.fontSize = r[b].options.fontSize), r[b].options.Ia && (d.style.color = r[b].options.Ia), r[b].options.bgColor && (d.style.backgroundColor = r[b].options.bgColor), r[b].options.link && (d.href = r[b].options.link), r[b].options.height && (d.style.height =
						r[b].options.height), r[b].options.width && (d.style.width = r[b].options.width), r[b].options.textAlign && (d.style.textAlign = r[b].options.textAlign)), document.body.appendChild(d)))
			}
		} if (c.n != c.a || c.j != c.xa || c.k != c.ya) c.a = c.n, c.xa = c.j, c.ya = c.k, ha()
	};
	this.cb = function (b) {
		for (var d = -1E3,
			c = b,
			h = parseFloat(parseInt(b % e.c)),
			g = parseFloat(parseInt(b / e.c)),
			h = h / e.c,
			h = h * 2 * Math.PI,
			g = g / e.i,
			g = g * Math.PI,
			b = Math.sin(h),
			h = Math.cos(h),
			g = Math.cos(g),
			i = Math.sqrt(b * b + h * h + g * g),
			b = b / i,
			h = h / i,
			g = g / i,
			i = 0; i < a.G.length; i++) {
			var j = a.B[i];
			if (-1 != a.D[j]) {
				var k = a.Ea[j].Ya, k = b * k.x + h * k.y + g * k.Za; d < k && (d = k, c = j)
			}
		} return c
	};
	this.fa = function () {
		if (a.oa < e.q) {
			var b = new Image, d = a.B[a.oa]; a.w[d] = 0; b.src = a.C[d]; a.G.push(b); var c = parseInt(d % e.c), h = parseInt(d / e.c), c = c / e.c, c = c * 2 * Math.PI, h = h / e.i, h = h * Math.PI, b = Math.sin(c), c = Math.cos(c), h = Math.cos(h), g = Math.sqrt(b * b + c * c + h * h); a.Ea[d] = { Ya: { x: b / g, y: c / g, Za: h / g } }; a.oa++
		}
	};
	this.Ga = function () {
		for (var b = e.ra,
			d = e.sa,
			c = 2,
			h = parseFloat(e.c / c),
			g = parseFloat(e.i / c),
			i = e.q,
			j = 0,
			k = 0,
			m = 0,
			n = 0,
			l = 0; a.P < i;) {
			var p = parseInt(b % e.c),
				s = parseInt(d % e.i),
				l = parseInt(s * e.c + p);
			a.C[l] || (a.B[a.P] = l,
				a.P++ ,
				a.C[l] = a.va(p, s),
				void 0 !== r && r[s + "_" + p] && (a.ha[l] = s + "_" + p));
			0 == j && (b += h, k++); 1 == j && (d += g, m++); n++;
			if (n >= c) if (n = 0, 0 == j) j = 1, k = 0; else if (1 == j && (b += h, k++ , k >= c / 2)) {
				c *= 2; b = e.ra; d = e.sa; h = parseFloat(e.c / c); g = parseFloat(e.i / c);
				if (1 > h && 1 > g) {
					for (b = 0; b < i; b++) d = parseInt(b % e.c),
						c = parseInt(b / e.c),
						l = parseInt(c * e.c + d),
						a.C[l] || (a.B[a.P] = l,
							a.P++ ,
							a.C[l] = a.va(d, c),
							void 0 !== r && r[c + "_" + d] && (a.ha[l] = c + "_" + d)); break
				} j = m = k = 0
			}
		}
	}
		; this.va = function (b, d) {
			return A + a.s + "/" + parseInt(d) + "_" + parseInt(b) + "." + xa
		};
	this.ma = function (b, d) {
		var b = b * (1 < e.c ? a.Wa : 0), d = d * (1 < e.i ? a.Xa : 0), c = Math.sqrt(b * b + d * d);
		if (1E-4 < c && (e.da += b, e.ea += d, e.z += c, 1 < e.z)) {
			var c = parseInt(e.z), h = Math.atan2(e.da, e.ea);
			e.z -= c;
			e.da = 0;
			e.ea = 0;
			0 > h && (h += 2 * Math.PI);
			h += Math.PI / 8;
			h = parseInt(h / (Math.PI / 4));
			0 > h && (h += 8);
			h %= 8;
			if (0 != w[h]) {
				if (Aa) var g = e.I, g = g - c * w[h];
				else g = e.I, g += c * w[h];
				if (e.Da) {
					for (; 0 > g;) g += e.c;
					for (; g >= e.c;) g -= e.c
				} else g >= e.c && (g = e.c - 1), 0 > g && (g = 0);
				e.I != g && (e.I = g, e.J = q)
			}
			if (0 != x[h]) {
				Ba ? (g = e.K, g -= c *
					x[h]) : (g = e.K, g += c * x[h]);
					 if (e.Fa) { 
						 for (; 0 > g;) g += e.i; for (; g >= e.i;) g -= e.i }
						  else g >= e.i && (g = e.i - 1), 0 > g && (g = 0); e.K != g && (e.K = g, e.J = q)
			}
		}
	};
	this.Va = function () {
		a.u(!a.l); a.l ? a.H.setAttribute("src", A + a.s + "/files/GoFullScreenIcon.png") : a.H.setAttribute("src", A + a.s + "/files/GoFixedSizeIcon.png")
	};
	this.u = function (b) {
		a.l = b; a.l ? (u.style.position = "relative", u.style.left = "0px", u.style.top = "0px", document.body.style.overflow = "") : (u.style.position = "absolute", b = H(), u.style.left = window.pageXOffset - b.x + k.left + "px", u.style.top =
			window.pageYOffset - b.y + k.top + "px", document.body.style.overflow = "hidden"); document.body.style.margin = "0"; document.body.style.padding = "0"; N()
	}; this.Ka = function () { var b = new Image; b.src = a.O.src; a.G[a.Y] = b; b = a.B[a.Y]; a.D[b] = a.w[b]; a.w[b] = -1; a.Y++; e.J = q; a.Y == e.q && (a.ga = 0, a.La()) }; var S, R = t; this.wa = function (b) {
		var d = H(); a.cursor.x = b.pageX - d.x + k.left; a.cursor.y = b.pageY - d.y + k.top; 1 == j.d ? ia(b.pageX, b.pageY) : 2 == j.d ? (E.start.x = a.cursor.x, E.start.y = a.cursor.y, c.t = a.v(), a.e = a.cursor.x - 0.5 * C.width, a.f = a.cursor.y -
			0.5 * C.height, a.e *= a.R, a.f *= a.R, a.e -= c.j, a.f -= c.k, a.e /= c.t, a.f /= c.t) : 3 == j.d && (E.start.x = a.cursor.x, E.start.y = a.cursor.y, c.m.x = 0, c.m.y = 0)
	}; this.Ha = function (b) { a.T(c.n * Math.exp(-b / 50)) }; this.v = function () { return c.n }; this.T = function (a) { a > c.ka / c.g && (a = c.ka / c.g); a < c.la / c.g && (a = c.la / c.g); c.n = a }; this.bb = function (a, b, c, e) { k.left = a; k.top = b; k.right = c; k.bottom = e; N() }; this.Ta = function (b, d) {
		a.l || (b = window.innerWidth, d = window.innerHeight); var c = b - k.left - k.right, e = d - k.top - k.bottom; C.width = c; C.height = e; s.style.width =
			c + "px"; a.l && window.innerHeight < B.height && (e = window.innerHeight); s.style.height = e + "px"; s.style.left = k.left + "px"; s.style.top = k.top + "px"; ha(); n.style.width = b + "px"; a.l && window.innerHeight < B.height && (d = window.innerHeight); n.style.height = d + "px"; a.h.style.height = d + "px"; n.Ba && n.Ba(b, d); aa && (a.N.style.height = window.innerHeight + "px", a.N.style.width = window.innerWidth + "px")
	}; this.U = function (a) { m(a, "mousedown", F); m(a, "mousemove", I); m(a, "mouseup", O) }; this.aa = function (a) {
		P(a, "mousedown", F); P(a, "mousemove", I); P(a,
			"mouseup", O)
	}; this.Ra = function () { a.p && (a.p.style.visibility = "hidden", a.aa(a.p), a.aa(a.Q), a.aa(a.o)) }; this.La = function () { a.A.style.visibility = "hidden"; a.aa(a.A) }; var Ha = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) { window.setTimeout(a, 10) }; this.ua = function () {
		a.p = document.createElement("div"); a.U(a.p); a.p.V = function () {
			this.parentNode && (this.style.left = "16px", this.style.top =
				"16px")
		}; b = "position:absolute;"; b += "left: 0px;"; b += "top:  0px;"; b += "width: 80px;"; b += "height: 80px;"; b += y + "transform-origin: 50% 50%;"; b += "visibility: inherit;"; a.p.setAttribute("style", b); a.Q = document.createElement("div"); a.U(a.Q); b = "position:absolute;"; b += "left: 0px;"; b += "top:  29px;"; b += "width: 80px;"; b += "height: 80px;"; b += y + "transform-origin: 50% 50%;"; b += "opacity: 1.0;"; b += "visibility: inherit;"; b += "border: 0px solid #000000;"; b += "color: #ffffff;"; b += "text-align: left;"; b += "white-space: nowrap;";
		b += "padding: 0px 0px 0px 0px;"; b += "overflow: hidden;"; a.Q.setAttribute("style", b); a.o = document.createElement("div"); a.U(a.o); a.o.$ = { Na: 0, Oa: 0, ja: 0, Pa: 1, Qa: 1, fb: 1 }; b = "position:absolute;"; b += "left: 0px;"; b += "top:  0px;"; b += "width: 80px;"; b += "height: 80px;"; b += y + "transform-origin: 50% 50%;"; b += "opacity: 1.0;"; b += "visibility: inherit;"; b += "border: 0px solid #000000;"; b += "color: #ffffff;"; b += "text-align: left;"; b += "white-space: nowrap;"; b += "padding: 0px 0px 0px 0px;"; b += "overflow: hidden;"; var c = ya; "" ==
			c && (c = "ks_logo.png"); a.o.setAttribute("style", b); a.o.innerHTML = '<img src="' + A + a.s + "/files/" + c + '"></img>'; a.p.appendChild(a.o); a.p.appendChild(a.Q); n.appendChild(a.p); a.u(a.l); setTimeout(function () { a.u(a.l) }, 10)
	}; this.Sa = function (b) { if (a.p) { a.Q.innerHTML = "<center>" + parseInt(100 * b) + "</center>"; a.o.$.ja += 2.1; b = ""; if (a.o.$) var d = a.o.$, b = b + ("translate ( " + d.Na + "px," + d.Oa + "px )  rotate ( " + d.ja + "deg )  scale ( " + d.Pa + "," + d.Qa + " )  "); a.o.style[M] = b + "scale ( 1.0,1.0 ) " } }; this.ta = function () { U = q; T() }; this.za = function () {
		m(window,
			"resize", N); za && m(n, "dblclick", Ca); if (ca()) if (m(window, "mousewheel", Q), m(window, "keydown", ma), /Tablet PC/i.test(navigator.userAgent) && window.ab) { var b = new MSGesture; b.target = a.h; a.h.Ja = b; a.h.Ja.pointerType = t; a.h.hb = []; m(a.h, "MSPointerDown", Fa); m(a.h, "MSPointerMove", Ea); m(a.h, "MSPointerUp", Da) } else m(n, "mousedown", F), m(p, "mousedown", F), m(n, "mousemove", I), m(p, "mousemove", I), m(document, "mouseup", O); else n.addEventListener && (m(document, "mouseup", O), m(n, "mousewheel", Q), m(document, "keydown", ma), m(n, "mousedown",
				F), m(p, "mousedown", F), m(n, "mousemove", I), m(n, "touchstart", fa), m(n, "touchmove", ea), m(n, "touchcancel", Ga), m(n, "touchend", da), m(n, "DOMMouseScroll", Q), m(window, "orientationchange", ga))
	}; if (document.createElement("canvas").getContext) {
		var a = this, u = a.h = t, s = t, V = t, n = t, p = t; a.l = $; a.s = v; a.eb = z; a.Z = z; a.W = aa; a.ib = 0; a.P = 0; a.Wa = parseFloat(ta); a.Xa = parseFloat(ua); a.Aa = 1; a.Y = 0; a.ga = -1; var k = { left: 0, top: 0, right: 0, bottom: 0 }, e = { I: 0, K: 0, c: 1, i: 1, ra: 0, sa: 0, z: 0, da: 0, ea: 0, J: z, q: 0, Da: q, Fa: z }; K || (K = 0); L || (L = 0); e.ra = K; e.sa =
			L; e.I = K; e.K = L; e.c = D; e.i = qa; e.Da = ra; e.Fa = sa; e.q = e.c * e.i; var B = { width: 0, height: 0 }; B.width = G; B.height = X; var y = "", M = "transform", C = { x: 640, y: 480 }, c = { n: 1, t: 1, a: -1, j: 0, k: 0, xa: -1, ya: -1, g: 1, la: 1, ka: 1, m: { x: 0, y: 0 }, pa: z }; c.la = parseFloat(Y); c.ka = parseFloat(Z); var l = { start: { x: 0, y: 0 }, a: { x: 0, y: 0 }, Ma: { x: 0, y: 0 }, n: { x: 0, y: 0 }, b: { x: 0, y: 0 } }, E = { start: { x: 0, y: 0 } }, j = { d: 0, start: { x: 0, y: 0 }, a: { x: 0, y: 0 }, Ma: { x: 0, y: 0 }, n: { x: 0, y: 0 }, b: { x: 0, y: 0 }, ba: { x: 0, y: 0 }, ca: { x: 0, y: 0 } }, i = { a: { x: 0, y: 0 }, b: { x: 0, y: 0 }, L: 0.96 }; i.L = va; a.cursor = { x: 0, y: 0 }; var w =
				[], x = []; w[0] = 0; x[0] = 1; w[1] = 1; x[1] = 1; w[2] = 1; x[2] = 0; w[3] = 1; x[3] = -1; w[4] = 0; x[4] = -1; w[5] = -1; x[5] = -1; w[6] = -1; x[6] = 0; w[7] = -1; x[7] = 1; a.e = 0; a.f = 0; a.oa = 0; a.G = []; a.B = []; a.w = []; a.D = []; a.Ea = []; for (v = 0; v < e.q; v++) a.w[v] = -1, a.D[v] = -1; a.C = []; a.ha = []; v = ["Webkit", "Moz", "0", "ms", "Ms"]; for (D = 0; D < v.length; D++) "undefined" != typeof document.documentElement.style[v[D] + "Transform"] && (y = "-" + v[D].toLowerCase() + "-", M = v[D] + "Transform"); var b = ""; a.h = document.getElementById(W); b = "width: " + G + "px;"; b += "height: " + X + "px;"; b += "max-width: 100%;";
		a.h.setAttribute("style", b); u = document.createElement("div"); u.setAttribute("id", "viewwindow"); b = "top:  0px;"; b += "left: 0px;"; b += "position: relative;"; u.setAttribute("style", b); a.h.appendChild(u); s = document.createElement("div"); s.setAttribute("id", "turntable"); b = "top:  0px;"; b += "left: 0px;"; b += "overflow: hidden;"; b += "position:absolute;"; b += y + "user-select: none;"; s.setAttribute("style", b); u.appendChild(s); p = document.createElement("img"); p.setAttribute("id", "backbuffer"); b = "top:  0px;"; b += "left: 0px;";
		b += "position:absolute;"; b += y + "user-select: none;"; p.setAttribute("style", b); s.appendChild(p); V = p; G = function () { a.ia = z }; p.addEventListener("load", G, z); p.addEventListener("error", G, z); n = document.createElement("div"); a.r = n; b = "top:  0px;"; b += "left: 0px;"; b += "width:  100px;"; b += "height: 100px;"; b += "overflow: hidden;"; b += "position:absolute;"; b += "z-index: 522;"; b += y + "user-select: none;"; n.setAttribute("style", b); u.appendChild(n); n.Ba = function (a, b) {
			var c = []; for (c.push(this); 0 < c.length;) {
				var e = c.pop(); e.V &&
					e.V(a, b); if (e.hasChildNodes()) for (var g = 0; g < e.childNodes.length; g++) c.push(e.childNodes[g])
			}
		}; this.A = document.createElement("div"); b = "position:absolute;"; b += "left: 0px;"; b += "top:  0px;"; b += "width: 256px;"; b += "height: 256px;"; b += "opacity: 0.0;"; b += y + "transform-origin: 50% 50%;"; b += "visibility: inherit;"; b += "display: none"; this.A.setAttribute("style", b); this.O = document.createElement("img"); this.O.setAttribute("width", 256); this.O.setAttribute("height", 256); this.O.onload = function () { a.Ka() }; a.U(this.A);
		this.A.appendChild(this.O); n.appendChild(this.A); this.backgroundColor = s.style.backgroundColor = pa; wa && (a.S = document.createElement("div"), b = "position:absolute;", b += "width: 38px;", b += "height: 32px;", b += y + "transform-origin: 50% 50%;", b += "visibility: inherit;", b += "cursor: pointer;", a.S.setAttribute("style", b), a.H = document.createElement("img"), a.l ? a.H.setAttribute("src", A + a.s + "/files/GoFullScreenIcon.png") : a.H.setAttribute("src", A + a.s + "/files/GoFixedSizeIcon.png"), a.H.setAttribute("style", "position: absolute;top: 0px;left: 0px;width: 38px;height: 32px;"),
			a.S.appendChild(a.H), a.S.V = function (a, b) { this.style.left = a - 38 + "px"; this.style.top = b - 32 + "px" }, a.S.onclick = function () { a.Va() }, a.r.appendChild(a.S)); if (a.W) {
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (J = q); a.M = document.createElement("div"); b = "position:absolute;"; b += "width: 92px;"; b += "height: 92px;"; b += y + "transform-origin: 50% 50%;"; b += "visibility: inherit;"; b += "cursor: pointer;"; a.M.setAttribute("style", b); a.X = document.createElement("img"); J ? a.X.setAttribute("src",
					A + a.s + "/files/xr_hand.gif") : a.X.setAttribute("src", A + a.s + "/files/xr_cursor.gif"); a.X.setAttribute("style", "position: absolute;top: 0px;left: 0px;width: 92px;height: 92px;"); a.M.appendChild(a.X); a.M.V = function (a, b) { this.style.left = 0.5 * a - 46 + "px"; this.style.top = 0.5 * b - 46 + "px" }; a.N = document.createElement("div"); b = "position:absolute;"; b += y + "transform-origin: 50% 50%;"; b += " width: " + window.innerWidth + "px;"; b += " height: " + window.innerHeight + "px;"; b += " background-color: #ccc;"; b += " opacity: .7"; a.N.setAttribute("style",
						b); a.r.appendChild(a.N); var oa = function () { a.M.style.visibility = "hidden"; a.N.style.visibility = "hidden"; ba && a.ua(); a.Z = q; for (var b = 0; b < a.Aa; b++) a.fa(); a.ta() }; a.r.onmousedown = function (a) { U || oa(); a.preventDefault() }; a.r.ontouchstart = function (a) { U || oa(); a.preventDefault() }; a.r.appendChild(a.M); a.za()
			} else a.W = q, a.Z = q, ba && a.ua(), a.za(), a.ta(); a.u($); a.R = 1 / c.g; a.T(a.R); this.Ga(); a.fa(); setTimeout(function () { T() }, 10); setTimeout(function () { N() }, 15)
	} else alert("Your browser must support HTML5 to show KeyShotXR")
};
