!(function(j) {
	'use strict';
	function i() {}
	var q = function(n, r) {
			return function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				return n(r.apply(null, e));
			};
		},
		$ = function(e) {
			return function() {
				return e;
			};
		},
		W = function(e) {
			return e;
		};
	function d(r) {
		for (var o = [], e = 1; e < arguments.length; e++) o[e - 1] = arguments[e];
		return function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			var n = o.concat(e);
			return r.apply(null, n);
		};
	}
	function c(n) {
		return function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			return !n.apply(null, e);
		};
	}
	function e() {
		return u;
	}
	var t,
		s = $(!1),
		a = $(!0),
		u =
			((t = {
				fold: function(e, t) {
					return e();
				},
				is: s,
				isSome: s,
				isNone: a,
				getOr: o,
				getOrThunk: r,
				getOrDie: function(e) {
					throw new Error(e || 'error: getOrDie called on none.');
				},
				getOrNull: $(null),
				getOrUndefined: $(undefined),
				or: o,
				orThunk: r,
				map: e,
				each: i,
				bind: e,
				exists: s,
				forall: a,
				filter: e,
				equals: n,
				equals_: n,
				toArray: function() {
					return [];
				},
				toString: $('none()')
			}),
			Object.freeze && Object.freeze(t),
			t);
	function n(e) {
		return e.isNone();
	}
	function r(e) {
		return e();
	}
	function o(e) {
		return e;
	}
	function l(t) {
		return function(e) {
			return (
				(function(e) {
					if (null === e) return 'null';
					var t = typeof e;
					return 'object' == t &&
						(Array.prototype.isPrototypeOf(e) ||
							(e.constructor && 'Array' === e.constructor.name))
						? 'array'
						: 'object' == t &&
						  (String.prototype.isPrototypeOf(e) ||
								(e.constructor && 'String' === e.constructor.name))
						? 'string'
						: t;
				})(e) === t
			);
		};
	}
	function f(e, t) {
		return V.call(e, t);
	}
	function h(e, t) {
		return -1 < f(e, t);
	}
	function C(e, t) {
		for (var n = 0, r = e.length; n < r; n++) {
			if (t(e[n], n)) return !0;
		}
		return !1;
	}
	function m(e, t, n) {
		return (
			(function(e, t) {
				for (var n = e.length - 1; 0 <= n; n--) {
					t(e[n], n);
				}
			})(e, function(e) {
				n = t(n, e);
			}),
			n
		);
	}
	function y(e, t, n) {
		return (
			F(e, function(e) {
				n = t(n, e);
			}),
			n
		);
	}
	function g(e, t) {
		for (var n = 0, r = e.length; n < r; n++) {
			var o = e[n];
			if (t(o, n)) return R.some(o);
		}
		return R.none();
	}
	function p(e, t) {
		for (var n = 0, r = e.length; n < r; n++) {
			if (t(e[n], n)) return R.some(n);
		}
		return R.none();
	}
	function v(e, t) {
		return (function(e) {
			for (var t = [], n = 0, r = e.length; n < r; ++n) {
				if (!D(e[n]))
					throw new Error(
						'Arr.flatten item ' + n + ' was not an array, input: ' + e
					);
				I.apply(t, e[n]);
			}
			return t;
		})(X(e, t));
	}
	function b(e, t) {
		for (var n = 0, r = e.length; n < r; ++n) {
			if (!0 !== t(e[n], n)) return !1;
		}
		return !0;
	}
	function w(e) {
		var t = L.call(e, 0);
		return t.reverse(), t;
	}
	function x(e, t) {
		return U(e, function(e) {
			return !h(t, e);
		});
	}
	function z(e) {
		return 0 === e.length ? R.none() : R.some(e[0]);
	}
	function E(e) {
		return 0 === e.length ? R.none() : R.some(e[e.length - 1]);
	}
	function N(e, t) {
		for (var n = Z(e), r = 0, o = n.length; r < o; r++) {
			var i = n[r];
			t(e[i], i);
		}
	}
	function S(e, n) {
		return Q(e, function(e, t) {
			return { k: t, v: n(e, t) };
		});
	}
	function k(n) {
		return function(e, t) {
			n[t] = e;
		};
	}
	function T(e, t) {
		var n = {},
			r = {};
		return (
			(function(e, n, r, o) {
				N(e, function(e, t) {
					(n(e, t) ? r : o)(e, t);
				});
			})(e, t, k(n), k(r)),
			{ t: n, f: r }
		);
	}
	function A(e, t) {
		return ee(e, t) ? R.from(e[t]) : R.none();
	}
	var M = function(n) {
			function e() {
				return o;
			}
			function t(e) {
				return e(n);
			}
			var r = $(n),
				o = {
					fold: function(e, t) {
						return t(n);
					},
					is: function(e) {
						return n === e;
					},
					isSome: a,
					isNone: s,
					getOr: r,
					getOrThunk: r,
					getOrDie: r,
					getOrNull: r,
					getOrUndefined: r,
					or: e,
					orThunk: e,
					map: function(e) {
						return M(e(n));
					},
					each: function(e) {
						e(n);
					},
					bind: t,
					exists: t,
					forall: t,
					filter: function(e) {
						return e(n) ? o : u;
					},
					toArray: function() {
						return [n];
					},
					toString: function() {
						return 'some(' + n + ')';
					},
					equals: function(e) {
						return e.is(n);
					},
					equals_: function(e, t) {
						return e.fold(s, function(e) {
							return t(n, e);
						});
					}
				};
			return o;
		},
		R = {
			some: M,
			none: e,
			from: function(e) {
				return null === e || e === undefined ? u : M(e);
			}
		},
		K = l('string'),
		_ = l('object'),
		D = l('array'),
		O = l('null'),
		H = l('boolean'),
		B = l('function'),
		P = l('number'),
		L = Array.prototype.slice,
		V = Array.prototype.indexOf,
		I = Array.prototype.push,
		X = function(e, t) {
			for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
				var i = e[o];
				r[o] = t(i, o);
			}
			return r;
		},
		F = function(e, t) {
			for (var n = 0, r = e.length; n < r; n++) {
				t(e[n], n);
			}
		},
		Y = function(e, t) {
			for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
				var a = e[o];
				(t(a, o) ? n : r).push(a);
			}
			return { pass: n, fail: r };
		},
		U = function(e, t) {
			for (var n = [], r = 0, o = e.length; r < o; r++) {
				var i = e[r];
				t(i, r) && n.push(i);
			}
			return n;
		},
		G = B(Array.from)
			? Array.from
			: function(e) {
					return L.call(e);
			  },
		Z = Object.keys,
		J = Object.hasOwnProperty,
		Q = function(e, r) {
			var o = {};
			return (
				N(e, function(e, t) {
					var n = r(e, t);
					o[n.k] = n.v;
				}),
				o
			);
		},
		ee = function(e, t) {
			return J.call(e, t);
		},
		te = function() {
			return (te =
				Object.assign ||
				function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++)
						for (var o in (t = arguments[n]))
							Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
					return e;
				}).apply(this, arguments);
		};
	function ne(e, t) {
		var n = (function(e, t) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (r.test(t)) return r;
			}
			return undefined;
		})(e, t);
		if (!n) return { major: 0, minor: 0 };
		function r(e) {
			return Number(t.replace(n, '$' + e));
		}
		return ct(r(1), r(2));
	}
	function re(e, t) {
		return function() {
			return t === e;
		};
	}
	function oe(e, t) {
		return function() {
			return t === e;
		};
	}
	function ie(e, t) {
		var n = String(t).toLowerCase();
		return g(e, function(e) {
			return e.search(n);
		});
	}
	function ae(e, t) {
		return -1 !== e.indexOf(t);
	}
	function ue(e, t) {
		return (function(e, t, n) {
			return (
				'' === t || (!(e.length < t.length) && e.substr(n, n + t.length) === t)
			);
		})(e, t, 0);
	}
	function ce(e) {
		return e.replace(/^\s+|\s+$/g, '');
	}
	function se(e) {
		return e.replace(/\s+$/g, '');
	}
	function le(t) {
		return function(e) {
			return ae(e, t);
		};
	}
	function fe() {
		return St.get();
	}
	function de() {
		for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
		return function() {
			for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
			if (t.length !== n.length)
				throw new Error(
					'Wrong number of arguments to struct. Expected "[' +
						t.length +
						']", got ' +
						n.length +
						' arguments'
				);
			var r = {};
			return (
				F(t, function(e, t) {
					r[e] = $(n[t]);
				}),
				r
			);
		};
	}
	function he(e, t, n) {
		return 0 != (e.compareDocumentPosition(t) & n);
	}
	function me(e, t) {
		var n = e.dom();
		if (n.nodeType !== _t) return !1;
		var r = n;
		if (r.matches !== undefined) return r.matches(t);
		if (r.msMatchesSelector !== undefined) return r.msMatchesSelector(t);
		if (r.webkitMatchesSelector !== undefined)
			return r.webkitMatchesSelector(t);
		if (r.mozMatchesSelector !== undefined) return r.mozMatchesSelector(t);
		throw new Error('Browser lacks native selectors');
	}
	function ge(e) {
		return (
			(e.nodeType !== _t && e.nodeType !== Dt) || 0 === e.childElementCount
		);
	}
	function pe(e, t) {
		return e.dom() === t.dom();
	}
	function ve(e) {
		return it.fromDom(e.dom().ownerDocument);
	}
	function ye(e) {
		return it.fromDom(e.dom().ownerDocument.defaultView);
	}
	function be(e) {
		return R.from(e.dom().parentNode).map(it.fromDom);
	}
	function Ce(e) {
		return R.from(e.dom().previousSibling).map(it.fromDom);
	}
	function we(e) {
		return R.from(e.dom().nextSibling).map(it.fromDom);
	}
	function xe(e) {
		return w(kt(e, Ce));
	}
	function ze(e) {
		return kt(e, we);
	}
	function Ee(e) {
		return X(e.dom().childNodes, it.fromDom);
	}
	function Ne(e, t) {
		var n = e.dom().childNodes;
		return R.from(n[t]).map(it.fromDom);
	}
	function Se(e) {
		return Ne(e, 0);
	}
	function ke(e) {
		return Ne(e, e.dom().childNodes.length - 1);
	}
	function Te(t, n) {
		be(t).each(function(e) {
			e.dom().insertBefore(n.dom(), t.dom());
		});
	}
	function Ae(e, t) {
		we(e).fold(
			function() {
				be(e).each(function(e) {
					Ht(e, t);
				});
			},
			function(e) {
				Te(e, t);
			}
		);
	}
	function Me(t, n) {
		Se(t).fold(
			function() {
				Ht(t, n);
			},
			function(e) {
				t.dom().insertBefore(n.dom(), e.dom());
			}
		);
	}
	function Re(t, e) {
		F(e, function(e) {
			Ht(t, e);
		});
	}
	function _e(e) {
		(e.dom().textContent = ''),
			F(Ee(e), function(e) {
				Bt(e);
			});
	}
	function De(e) {
		var t = Ee(e);
		0 < t.length &&
			(function(t, e) {
				F(e, function(e) {
					Te(t, e);
				});
			})(e, t),
			Bt(e);
	}
	function Oe(e) {
		return e.dom().nodeName.toLowerCase();
	}
	function He(t) {
		return function(e) {
			return (
				(function(e) {
					return e.dom().nodeType;
				})(e) === t
			);
		};
	}
	function Be(e) {
		var t = Lt(e) ? e.dom().parentNode : e.dom();
		return t !== undefined && null !== t && t.ownerDocument.body.contains(t);
	}
	function Pe(e, t) {
		return e !== undefined ? e : t !== undefined ? t : 0;
	}
	function Le(e) {
		var t = e !== undefined ? e.dom() : j.document,
			n = t.body.scrollLeft || t.documentElement.scrollLeft,
			r = t.body.scrollTop || t.documentElement.scrollTop;
		return It(n, r);
	}
	function Ve(e, t, n) {
		(n !== undefined ? n.dom() : j.document).defaultView.scrollTo(e, t);
	}
	function Ie(e, t) {
		Ut && B(e.dom().scrollIntoViewIfNeeded)
			? e.dom().scrollIntoViewIfNeeded(!1)
			: e.dom().scrollIntoView(t);
	}
	function Fe(e, t, n, r) {
		return {
			x: $(e),
			y: $(t),
			width: $(n),
			height: $(r),
			right: $(e + n),
			bottom: $(t + r)
		};
	}
	function Ue(t) {
		return function(e) {
			return !!e && e.nodeType === t;
		};
	}
	function je(e) {
		var n = e.map(function(e) {
			return e.toLowerCase();
		});
		return function(e) {
			if (e && e.nodeName) {
				var t = e.nodeName.toLowerCase();
				return h(n, t);
			}
			return !1;
		};
	}
	function qe(t) {
		return function(e) {
			if (qt(e)) {
				if (e.contentEditable === t) return !0;
				if (e.getAttribute('data-mce-contenteditable') === t) return !0;
			}
			return !1;
		};
	}
	function $e(e) {
		return e.style !== undefined && B(e.style.getPropertyValue);
	}
	function We(e, t, n) {
		if (!(K(n) || H(n) || P(n)))
			throw (j.console.error(
				'Invalid call to Attr.set. Key ',
				t,
				':: Value ',
				n,
				':: Element ',
				e
			),
			new Error('Attribute value was not simple'));
		e.setAttribute(t, n + '');
	}
	function Ke(e, t) {
		var n = e.dom();
		N(t, function(e, t) {
			We(n, t, e);
		});
	}
	function Xe(e, t) {
		var n = e.dom().getAttribute(t);
		return null === n ? undefined : n;
	}
	function Ye(e, t) {
		e.dom().removeAttribute(t);
	}
	function Ge(e, t) {
		var n = e.dom(),
			r = j.window.getComputedStyle(n).getPropertyValue(t),
			o = '' !== r || Be(e) ? r : tn(n, t);
		return null === o ? undefined : o;
	}
	function Ze(e, t) {
		var n = e.dom(),
			r = tn(n, t);
		return R.from(r).filter(function(e) {
			return 0 < e.length;
		});
	}
	function Je(e) {
		return g(e, Pt);
	}
	function Qe(e, t) {
		return e.children && h(e.children, t);
	}
	var et,
		tt,
		nt,
		rt,
		ot = function(e) {
			if (null === e || e === undefined)
				throw new Error('Node cannot be null or undefined');
			return { dom: $(e) };
		},
		it = {
			fromHtml: function(e, t) {
				var n = (t || j.document).createElement('div');
				if (((n.innerHTML = e), !n.hasChildNodes() || 1 < n.childNodes.length))
					throw (j.console.error('HTML does not have a single root node', e),
					new Error('HTML must have a single root node'));
				return ot(n.childNodes[0]);
			},
			fromTag: function(e, t) {
				var n = (t || j.document).createElement(e);
				return ot(n);
			},
			fromText: function(e, t) {
				var n = (t || j.document).createTextNode(e);
				return ot(n);
			},
			fromDom: ot,
			fromPoint: function(e, t, n) {
				var r = e.dom();
				return R.from(r.elementFromPoint(t, n)).map(ot);
			}
		},
		at = function(e) {
			function t() {
				return n;
			}
			var n = e;
			return {
				get: t,
				set: function(e) {
					n = e;
				},
				clone: function() {
					return at(t());
				}
			};
		},
		ut = function() {
			return ct(0, 0);
		},
		ct = function(e, t) {
			return { major: e, minor: t };
		},
		st = {
			nu: ct,
			detect: function(e, t) {
				var n = String(t).toLowerCase();
				return 0 === e.length ? ut() : ne(e, n);
			},
			unknown: ut
		},
		lt = 'Firefox',
		ft = function(e) {
			var t = e.current;
			return {
				current: t,
				version: e.version,
				isEdge: re('Edge', t),
				isChrome: re('Chrome', t),
				isIE: re('IE', t),
				isOpera: re('Opera', t),
				isFirefox: re(lt, t),
				isSafari: re('Safari', t)
			};
		},
		dt = {
			unknown: function() {
				return ft({ current: undefined, version: st.unknown() });
			},
			nu: ft,
			edge: $('Edge'),
			chrome: $('Chrome'),
			ie: $('IE'),
			opera: $('Opera'),
			firefox: $(lt),
			safari: $('Safari')
		},
		ht = 'Windows',
		mt = 'Android',
		gt = 'Solaris',
		pt = 'FreeBSD',
		vt = 'ChromeOS',
		yt = function(e) {
			var t = e.current;
			return {
				current: t,
				version: e.version,
				isWindows: oe(ht, t),
				isiOS: oe('iOS', t),
				isAndroid: oe(mt, t),
				isOSX: oe('OSX', t),
				isLinux: oe('Linux', t),
				isSolaris: oe(gt, t),
				isFreeBSD: oe(pt, t),
				isChromeOS: oe(vt, t)
			};
		},
		bt = {
			unknown: function() {
				return yt({ current: undefined, version: st.unknown() });
			},
			nu: yt,
			windows: $(ht),
			ios: $('iOS'),
			android: $(mt),
			linux: $('Linux'),
			osx: $('OSX'),
			solaris: $(gt),
			freebsd: $(pt),
			chromeos: $(vt)
		},
		Ct = function(e, n) {
			return ie(e, n).map(function(e) {
				var t = st.detect(e.versionRegexes, n);
				return { current: e.name, version: t };
			});
		},
		wt = function(e, n) {
			return ie(e, n).map(function(e) {
				var t = st.detect(e.versionRegexes, n);
				return { current: e.name, version: t };
			});
		},
		xt = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
		zt = [
			{
				name: 'Edge',
				versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
				search: function(e) {
					return (
						ae(e, 'edge/') &&
						ae(e, 'chrome') &&
						ae(e, 'safari') &&
						ae(e, 'applewebkit')
					);
				}
			},
			{
				name: 'Chrome',
				versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, xt],
				search: function(e) {
					return ae(e, 'chrome') && !ae(e, 'chromeframe');
				}
			},
			{
				name: 'IE',
				versionRegexes: [
					/.*?msie\ ?([0-9]+)\.([0-9]+).*/,
					/.*?rv:([0-9]+)\.([0-9]+).*/
				],
				search: function(e) {
					return ae(e, 'msie') || ae(e, 'trident');
				}
			},
			{
				name: 'Opera',
				versionRegexes: [xt, /.*?opera\/([0-9]+)\.([0-9]+).*/],
				search: le('opera')
			},
			{
				name: 'Firefox',
				versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
				search: le('firefox')
			},
			{
				name: 'Safari',
				versionRegexes: [xt, /.*?cpu os ([0-9]+)_([0-9]+).*/],
				search: function(e) {
					return (ae(e, 'safari') || ae(e, 'mobile/')) && ae(e, 'applewebkit');
				}
			}
		],
		Et = [
			{
				name: 'Windows',
				search: le('win'),
				versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
			},
			{
				name: 'iOS',
				search: function(e) {
					return ae(e, 'iphone') || ae(e, 'ipad');
				},
				versionRegexes: [
					/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
					/.*cpu os ([0-9]+)_([0-9]+).*/,
					/.*cpu iphone os ([0-9]+)_([0-9]+).*/
				]
			},
			{
				name: 'Android',
				search: le('android'),
				versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
			},
			{
				name: 'OSX',
				search: le('mac os x'),
				versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
			},
			{ name: 'Linux', search: le('linux'), versionRegexes: [] },
			{ name: 'Solaris', search: le('sunos'), versionRegexes: [] },
			{ name: 'FreeBSD', search: le('freebsd'), versionRegexes: [] },
			{
				name: 'ChromeOS',
				search: le('cros'),
				versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
			}
		],
		Nt = { browsers: $(zt), oses: $(Et) },
		St = at(
			(function(e, t) {
				var n = Nt.browsers(),
					r = Nt.oses(),
					o = Ct(n, e).fold(dt.unknown, dt.nu),
					i = wt(r, e).fold(bt.unknown, bt.nu);
				return {
					browser: o,
					os: i,
					deviceType: (function(e, t, n, r) {
						var o = e.isiOS() && !0 === /ipad/i.test(n),
							i = e.isiOS() && !o,
							a = e.isiOS() || e.isAndroid(),
							u = a || r('(pointer:coarse)'),
							c = o || (!i && a && r('(min-device-width:768px)')),
							s = i || (a && !c),
							l = t.isSafari() && e.isiOS() && !1 === /safari/i.test(n),
							f = !s && !c && !l;
						return {
							isiPad: $(o),
							isiPhone: $(i),
							isTablet: $(c),
							isPhone: $(s),
							isTouch: $(u),
							isAndroid: e.isAndroid,
							isiOS: e.isiOS,
							isWebView: $(l),
							isDesktop: $(f)
						};
					})(i, o, e, t)
				};
			})(j.navigator.userAgent, function(e) {
				return j.window.matchMedia(e).matches;
			})
		),
		kt = function(e, t) {
			for (
				var n = [],
					r = function(e) {
						return n.push(e), t(e);
					},
					o = t(e);
				(o = o.bind(r)).isSome();

			);
			return n;
		},
		Tt = function(e, t) {
			return he(e, t, j.Node.DOCUMENT_POSITION_CONTAINED_BY);
		},
		At =
			(j.Node.ATTRIBUTE_NODE,
			j.Node.CDATA_SECTION_NODE,
			j.Node.COMMENT_NODE,
			j.Node.DOCUMENT_NODE),
		Mt =
			(j.Node.DOCUMENT_TYPE_NODE,
			j.Node.DOCUMENT_FRAGMENT_NODE,
			j.Node.ELEMENT_NODE),
		Rt = j.Node.TEXT_NODE,
		_t =
			(j.Node.PROCESSING_INSTRUCTION_NODE,
			j.Node.ENTITY_REFERENCE_NODE,
			j.Node.ENTITY_NODE,
			j.Node.NOTATION_NODE,
			Mt),
		Dt = At,
		Ot = fe().browser.isIE()
			? function(e, t) {
					return Tt(e.dom(), t.dom());
			  }
			: function(e, t) {
					var n = e.dom(),
						r = t.dom();
					return n !== r && n.contains(r);
			  },
		Ht =
			(de('element', 'offset'),
			function(e, t) {
				e.dom().appendChild(t.dom());
			}),
		Bt = function(e) {
			var t = e.dom();
			null !== t.parentNode && t.parentNode.removeChild(t);
		},
		Pt =
			('undefined' != typeof j.window ? j.window : Function('return this;')(),
			He(Mt)),
		Lt = He(Rt),
		Vt = function(n, r) {
			return {
				left: $(n),
				top: $(r),
				translate: function(e, t) {
					return Vt(n + e, r + t);
				}
			};
		},
		It = Vt,
		Ft = function(e) {
			var t = e.dom(),
				n = t.ownerDocument.body;
			return n === t
				? It(n.offsetLeft, n.offsetTop)
				: Be(e)
				? (function(e) {
						var t = e.getBoundingClientRect();
						return It(t.left, t.top);
				  })(t)
				: It(0, 0);
		},
		Ut = fe().browser.isSafari(),
		jt = function(e) {
			var r = e === undefined ? j.window : e,
				t = r.document,
				o = Le(it.fromDom(t));
			return (function(e) {
				var t = e === undefined ? j.window : e;
				return R.from(t.visualViewport);
			})(r).fold(
				function() {
					var e = r.document.documentElement,
						t = e.clientWidth,
						n = e.clientHeight;
					return Fe(o.left(), o.top(), t, n);
				},
				function(e) {
					return Fe(
						Math.max(e.pageLeft, o.left()),
						Math.max(e.pageTop, o.top()),
						e.width,
						e.height
					);
				}
			);
		},
		qt = Ue(1),
		$t = je(['textarea', 'input']),
		Wt = Ue(3),
		Kt = Ue(8),
		Xt = Ue(9),
		Yt = Ue(11),
		Gt = je(['br']),
		Zt = qe('true'),
		Jt = qe('false'),
		Qt = {
			isText: Wt,
			isElement: qt,
			isComment: Kt,
			isDocument: Xt,
			isDocumentFragment: Yt,
			isBr: Gt,
			isContentEditableTrue: Zt,
			isContentEditableFalse: Jt,
			isRestrictedNode: function(e) {
				return !!e && !Object.getPrototypeOf(e);
			},
			matchNodeNames: je,
			hasPropValue: function(t, n) {
				return function(e) {
					return qt(e) && e[t] === n;
				};
			},
			hasAttribute: function(t, e) {
				return function(e) {
					return qt(e) && e.hasAttribute(t);
				};
			},
			hasAttributeValue: function(t, n) {
				return function(e) {
					return qt(e) && e.getAttribute(t) === n;
				};
			},
			matchStyleValues: function(r, e) {
				var o = e.toLowerCase().split(' ');
				return function(e) {
					var t;
					if (qt(e))
						for (t = 0; t < o.length; t++) {
							var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
							if ((n ? n.getPropertyValue(r) : null) === o[t]) return !0;
						}
					return !1;
				};
			},
			isBogus: function(e) {
				return qt(e) && e.hasAttribute('data-mce-bogus');
			},
			isBogusAll: function(e) {
				return qt(e) && 'all' === e.getAttribute('data-mce-bogus');
			},
			isTable: function(e) {
				return qt(e) && 'TABLE' === e.tagName;
			},
			isTextareaOrInput: $t
		},
		en = function(e, t, n) {
			We(e.dom(), t, n);
		},
		tn = function(e, t) {
			return $e(e) ? e.style.getPropertyValue(t) : '';
		},
		nn = fe().browser,
		rn = {
			getPos: function(e, t, n) {
				var r,
					o,
					i = 0,
					a = 0,
					u = e.ownerDocument;
				if (((n = n || e), t)) {
					if (
						n === e &&
						t.getBoundingClientRect &&
						'static' === Ge(it.fromDom(e), 'position')
					)
						return {
							x: (i =
								(o = t.getBoundingClientRect()).left +
								(u.documentElement.scrollLeft || e.scrollLeft) -
								u.documentElement.clientLeft),
							y: (a =
								o.top +
								(u.documentElement.scrollTop || e.scrollTop) -
								u.documentElement.clientTop)
						};
					for (r = t; r && r !== n && r.nodeType && !Qe(r, n); )
						(i += r.offsetLeft || 0),
							(a += r.offsetTop || 0),
							(r = r.offsetParent);
					for (r = t.parentNode; r && r !== n && r.nodeType && !Qe(r, n); )
						(i -= r.scrollLeft || 0),
							(a -= r.scrollTop || 0),
							(r = r.parentNode);
					a += (function(e) {
						return nn.isFirefox() && 'table' === Oe(e)
							? Je(Ee(e))
									.filter(function(e) {
										return 'caption' === Oe(e);
									})
									.bind(function(o) {
										return Je(ze(o)).map(function(e) {
											var t = e.dom().offsetTop,
												n = o.dom().offsetTop,
												r = o.dom().offsetHeight;
											return t <= n ? -r : 0;
										});
									})
									.getOr(0)
							: 0;
					})(it.fromDom(t));
				}
				return { x: i, y: a };
			}
		},
		on = {},
		an = { exports: on };
	(et = undefined),
		(tt = on),
		(nt = an),
		(rt = undefined),
		(function(e) {
			'object' == typeof tt && void 0 !== nt
				? (nt.exports = e())
				: 'function' == typeof et && et.amd
				? et([], e)
				: (('undefined' != typeof window
						? window
						: 'undefined' != typeof global
						? global
						: 'undefined' != typeof self
						? self
						: this
				  ).EphoxContactWrapper = e());
		})(function() {
			return (function l(i, a, u) {
				function c(t, e) {
					if (!a[t]) {
						if (!i[t]) {
							var n = 'function' == typeof rt && rt;
							if (!e && n) return n(t, !0);
							if (s) return s(t, !0);
							var r = new Error("Cannot find module '" + t + "'");
							throw ((r.code = 'MODULE_NOT_FOUND'), r);
						}
						var o = (a[t] = { exports: {} });
						i[t][0].call(
							o.exports,
							function(e) {
								return c(i[t][1][e] || e);
							},
							o,
							o.exports,
							l,
							i,
							a,
							u
						);
					}
					return a[t].exports;
				}
				for (var s = 'function' == typeof rt && rt, e = 0; e < u.length; e++)
					c(u[e]);
				return c;
			})(
				{
					1: [
						function(e, t, n) {
							var r,
								o,
								i = (t.exports = {});
							function a() {
								throw new Error('setTimeout has not been defined');
							}
							function u() {
								throw new Error('clearTimeout has not been defined');
							}
							function c(e) {
								if (r === setTimeout) return setTimeout(e, 0);
								if ((r === a || !r) && setTimeout)
									return (r = setTimeout), setTimeout(e, 0);
								try {
									return r(e, 0);
								} catch (t) {
									try {
										return r.call(null, e, 0);
									} catch (t) {
										return r.call(this, e, 0);
									}
								}
							}
							!(function() {
								try {
									r = 'function' == typeof setTimeout ? setTimeout : a;
								} catch (e) {
									r = a;
								}
								try {
									o = 'function' == typeof clearTimeout ? clearTimeout : u;
								} catch (e) {
									o = u;
								}
							})();
							var s,
								l = [],
								f = !1,
								d = -1;
							function h() {
								f &&
									s &&
									((f = !1),
									s.length ? (l = s.concat(l)) : (d = -1),
									l.length && m());
							}
							function m() {
								if (!f) {
									var e = c(h);
									f = !0;
									for (var t = l.length; t; ) {
										for (s = l, l = []; ++d < t; ) s && s[d].run();
										(d = -1), (t = l.length);
									}
									(s = null),
										(f = !1),
										(function n(e) {
											if (o === clearTimeout) return clearTimeout(e);
											if ((o === u || !o) && clearTimeout)
												return (o = clearTimeout), clearTimeout(e);
											try {
												return o(e);
											} catch (t) {
												try {
													return o.call(null, e);
												} catch (t) {
													return o.call(this, e);
												}
											}
										})(e);
								}
							}
							function g(e, t) {
								(this.fun = e), (this.array = t);
							}
							function p() {}
							(i.nextTick = function(e) {
								var t = new Array(arguments.length - 1);
								if (1 < arguments.length)
									for (var n = 1; n < arguments.length; n++)
										t[n - 1] = arguments[n];
								l.push(new g(e, t)), 1 !== l.length || f || c(m);
							}),
								(g.prototype.run = function() {
									this.fun.apply(null, this.array);
								}),
								(i.title = 'browser'),
								(i.browser = !0),
								(i.env = {}),
								(i.argv = []),
								(i.version = ''),
								(i.versions = {}),
								(i.on = p),
								(i.addListener = p),
								(i.once = p),
								(i.off = p),
								(i.removeListener = p),
								(i.removeAllListeners = p),
								(i.emit = p),
								(i.prependListener = p),
								(i.prependOnceListener = p),
								(i.listeners = function(e) {
									return [];
								}),
								(i.binding = function(e) {
									throw new Error('process.binding is not supported');
								}),
								(i.cwd = function() {
									return '/';
								}),
								(i.chdir = function(e) {
									throw new Error('process.chdir is not supported');
								}),
								(i.umask = function() {
									return 0;
								});
						},
						{}
					],
					2: [
						function(e, f, t) {
							(function(t) {
								function r() {}
								function i(e) {
									if ('object' != typeof this)
										throw new TypeError('Promises must be constructed via new');
									if ('function' != typeof e)
										throw new TypeError('not a function');
									(this._state = 0),
										(this._handled = !1),
										(this._value = undefined),
										(this._deferreds = []),
										l(e, this);
								}
								function o(r, o) {
									for (; 3 === r._state; ) r = r._value;
									0 !== r._state
										? ((r._handled = !0),
										  i._immediateFn(function() {
												var e = 1 === r._state ? o.onFulfilled : o.onRejected;
												if (null !== e) {
													var t;
													try {
														t = e(r._value);
													} catch (n) {
														return void u(o.promise, n);
													}
													a(o.promise, t);
												} else (1 === r._state ? a : u)(o.promise, r._value);
										  }))
										: r._deferreds.push(o);
								}
								function a(e, t) {
									try {
										if (t === e)
											throw new TypeError(
												'A promise cannot be resolved with itself.'
											);
										if (t && ('object' == typeof t || 'function' == typeof t)) {
											var n = t.then;
											if (t instanceof i)
												return (e._state = 3), (e._value = t), void c(e);
											if ('function' == typeof n)
												return void l(
													(function r(e, t) {
														return function() {
															e.apply(t, arguments);
														};
													})(n, t),
													e
												);
										}
										(e._state = 1), (e._value = t), c(e);
									} catch (o) {
										u(e, o);
									}
								}
								function u(e, t) {
									(e._state = 2), (e._value = t), c(e);
								}
								function c(e) {
									2 === e._state &&
										0 === e._deferreds.length &&
										i._immediateFn(function() {
											e._handled || i._unhandledRejectionFn(e._value);
										});
									for (var t = 0, n = e._deferreds.length; t < n; t++)
										o(e, e._deferreds[t]);
									e._deferreds = null;
								}
								function s(e, t, n) {
									(this.onFulfilled = 'function' == typeof e ? e : null),
										(this.onRejected = 'function' == typeof t ? t : null),
										(this.promise = n);
								}
								function l(e, t) {
									var n = !1;
									try {
										e(
											function(e) {
												n || ((n = !0), a(t, e));
											},
											function(e) {
												n || ((n = !0), u(t, e));
											}
										);
									} catch (r) {
										if (n) return;
										(n = !0), u(t, r);
									}
								}
								var e, n;
								(e = this),
									(n = setTimeout),
									(i.prototype['catch'] = function(e) {
										return this.then(null, e);
									}),
									(i.prototype.then = function(e, t) {
										var n = new this.constructor(r);
										return o(this, new s(e, t, n)), n;
									}),
									(i.all = function(e) {
										var c = Array.prototype.slice.call(e);
										return new i(function(o, i) {
											if (0 === c.length) return o([]);
											var a = c.length;
											function u(t, e) {
												try {
													if (
														e &&
														('object' == typeof e || 'function' == typeof e)
													) {
														var n = e.then;
														if ('function' == typeof n)
															return void n.call(
																e,
																function(e) {
																	u(t, e);
																},
																i
															);
													}
													(c[t] = e), 0 == --a && o(c);
												} catch (r) {
													i(r);
												}
											}
											for (var e = 0; e < c.length; e++) u(e, c[e]);
										});
									}),
									(i.resolve = function(t) {
										return t && 'object' == typeof t && t.constructor === i
											? t
											: new i(function(e) {
													e(t);
											  });
									}),
									(i.reject = function(n) {
										return new i(function(e, t) {
											t(n);
										});
									}),
									(i.race = function(o) {
										return new i(function(e, t) {
											for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t);
										});
									}),
									(i._immediateFn =
										'function' == typeof t
											? function(e) {
													t(e);
											  }
											: function(e) {
													n(e, 0);
											  }),
									(i._unhandledRejectionFn = function(e) {
										'undefined' != typeof console &&
											console &&
											console.warn('Possible Unhandled Promise Rejection:', e);
									}),
									(i._setImmediateFn = function(e) {
										i._immediateFn = e;
									}),
									(i._setUnhandledRejectionFn = function(e) {
										i._unhandledRejectionFn = e;
									}),
									void 0 !== f && f.exports
										? (f.exports = i)
										: e.Promise || (e.Promise = i);
							}.call(this, e('timers').setImmediate));
						},
						{ timers: 3 }
					],
					3: [
						function(c, e, s) {
							(function(e, t) {
								var r = c('process/browser.js').nextTick,
									n = Function.prototype.apply,
									o = Array.prototype.slice,
									i = {},
									a = 0;
								function u(e, t) {
									(this._id = e), (this._clearFn = t);
								}
								(s.setTimeout = function() {
									return new u(
										n.call(setTimeout, window, arguments),
										clearTimeout
									);
								}),
									(s.setInterval = function() {
										return new u(
											n.call(setInterval, window, arguments),
											clearInterval
										);
									}),
									(s.clearTimeout = s.clearInterval = function(e) {
										e.close();
									}),
									(u.prototype.unref = u.prototype.ref = function() {}),
									(u.prototype.close = function() {
										this._clearFn.call(window, this._id);
									}),
									(s.enroll = function(e, t) {
										clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
									}),
									(s.unenroll = function(e) {
										clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
									}),
									(s._unrefActive = s.active = function(e) {
										clearTimeout(e._idleTimeoutId);
										var t = e._idleTimeout;
										0 <= t &&
											(e._idleTimeoutId = setTimeout(function() {
												e._onTimeout && e._onTimeout();
											}, t));
									}),
									(s.setImmediate =
										'function' == typeof e
											? e
											: function(e) {
													var t = a++,
														n = !(arguments.length < 2) && o.call(arguments, 1);
													return (
														(i[t] = !0),
														r(function() {
															i[t] &&
																(n ? e.apply(null, n) : e.call(null),
																s.clearImmediate(t));
														}),
														t
													);
											  }),
									(s.clearImmediate =
										'function' == typeof t
											? t
											: function(e) {
													delete i[e];
											  });
							}.call(
								this,
								c('timers').setImmediate,
								c('timers').clearImmediate
							));
						},
						{ 'process/browser.js': 1, timers: 3 }
					],
					4: [
						function(e, t, n) {
							var r = e('promise-polyfill'),
								o =
									'undefined' != typeof window
										? window
										: Function('return this;')();
							t.exports = { boltExport: o.Promise || r };
						},
						{ 'promise-polyfill': 2 }
					]
				},
				{},
				[4]
			)(4);
		});
	function un(e) {
		j.setTimeout(function() {
			throw e;
		}, 0);
	}
	function cn(i, e) {
		return e(function(n) {
			var r = [],
				o = 0;
			0 === i.length
				? n([])
				: F(i, function(e, t) {
						e.get(
							(function(t) {
								return function(e) {
									(r[t] = e), ++o >= i.length && n(r);
								};
							})(t)
						);
				  });
		});
	}
	var sn,
		ln,
		fn,
		dn = an.exports.boltExport,
		hn = function(e) {
			var n = R.none(),
				t = [],
				r = function(e) {
					o() ? a(e) : t.push(e);
				},
				o = function() {
					return n.isSome();
				},
				i = function(e) {
					F(e, a);
				},
				a = function(t) {
					n.each(function(e) {
						j.setTimeout(function() {
							t(e);
						}, 0);
					});
				};
			return (
				e(function(e) {
					(n = R.some(e)), i(t), (t = []);
				}),
				{
					get: r,
					map: function(n) {
						return hn(function(t) {
							r(function(e) {
								t(n(e));
							});
						});
					},
					isReady: o
				}
			);
		},
		mn = {
			nu: hn,
			pure: function(t) {
				return hn(function(e) {
					e(t);
				});
			}
		},
		gn = function(n) {
			function e(e) {
				n().then(e, un);
			}
			return {
				map: function(e) {
					return gn(function() {
						return n().then(e);
					});
				},
				bind: function(t) {
					return gn(function() {
						return n().then(function(e) {
							return t(e).toPromise();
						});
					});
				},
				anonBind: function(e) {
					return gn(function() {
						return n().then(function() {
							return e.toPromise();
						});
					});
				},
				toLazy: function() {
					return mn.nu(e);
				},
				toCached: function() {
					var e = null;
					return gn(function() {
						return null === e && (e = n()), e;
					});
				},
				toPromise: n,
				get: e
			};
		},
		pn = {
			nu: function(e) {
				return gn(function() {
					return new dn(e);
				});
			},
			pure: function(e) {
				return gn(function() {
					return dn.resolve(e);
				});
			}
		},
		vn = function(e) {
			return cn(e, pn.nu);
		},
		yn = function(n) {
			return {
				is: function(e) {
					return n === e;
				},
				isValue: a,
				isError: s,
				getOr: $(n),
				getOrThunk: $(n),
				getOrDie: $(n),
				or: function(e) {
					return yn(n);
				},
				orThunk: function(e) {
					return yn(n);
				},
				fold: function(e, t) {
					return t(n);
				},
				map: function(e) {
					return yn(e(n));
				},
				mapError: function(e) {
					return yn(n);
				},
				each: function(e) {
					e(n);
				},
				bind: function(e) {
					return e(n);
				},
				exists: function(e) {
					return e(n);
				},
				forall: function(e) {
					return e(n);
				},
				toOption: function() {
					return R.some(n);
				}
			};
		},
		bn = function(n) {
			return {
				is: s,
				isValue: s,
				isError: a,
				getOr: W,
				getOrThunk: function(e) {
					return e();
				},
				getOrDie: function() {
					return (function(e) {
						return function() {
							throw new Error(e);
						};
					})(String(n))();
				},
				or: function(e) {
					return e;
				},
				orThunk: function(e) {
					return e();
				},
				fold: function(e, t) {
					return e(n);
				},
				map: function(e) {
					return bn(n);
				},
				mapError: function(e) {
					return bn(e(n));
				},
				each: i,
				bind: function(e) {
					return bn(n);
				},
				exists: s,
				forall: a,
				toOption: R.none
			};
		},
		Cn = {
			value: yn,
			error: bn,
			fromOption: function(e, t) {
				return e.fold(function() {
					return bn(t);
				}, yn);
			}
		},
		wn = window.Promise
			? window.Promise
			: ((sn =
					Array.isArray ||
					function(e) {
						return '[object Array]' === Object.prototype.toString.call(e);
					}),
			  (ln =
					zn.immediateFn ||
					('function' == typeof j.setImmediate && j.setImmediate) ||
					function(e) {
						j.setTimeout(e, 1);
					}),
			  (zn.prototype['catch'] = function(e) {
					return this.then(null, e);
			  }),
			  (zn.prototype.then = function(n, r) {
					var o = this;
					return new zn(function(e, t) {
						En.call(o, new Tn(n, r, e, t));
					});
			  }),
			  (zn.all = function() {
					var c = Array.prototype.slice.call(
						1 === arguments.length && sn(arguments[0])
							? arguments[0]
							: arguments
					);
					return new zn(function(o, i) {
						if (0 === c.length) return o([]);
						var a = c.length;
						function u(t, e) {
							try {
								if (e && ('object' == typeof e || 'function' == typeof e)) {
									var n = e.then;
									if ('function' == typeof n)
										return void n.call(
											e,
											function(e) {
												u(t, e);
											},
											i
										);
								}
								(c[t] = e), 0 == --a && o(c);
							} catch (r) {
								i(r);
							}
						}
						for (var e = 0; e < c.length; e++) u(e, c[e]);
					});
			  }),
			  (zn.resolve = function(t) {
					return t && 'object' == typeof t && t.constructor === zn
						? t
						: new zn(function(e) {
								e(t);
						  });
			  }),
			  (zn.reject = function(n) {
					return new zn(function(e, t) {
						t(n);
					});
			  }),
			  (zn.race = function(o) {
					return new zn(function(e, t) {
						for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t);
					});
			  }),
			  zn);
	function xn(e, t) {
		return function() {
			e.apply(t, arguments);
		};
	}
	function zn(e) {
		if ('object' != typeof this)
			throw new TypeError('Promises must be constructed via new');
		if ('function' != typeof e) throw new TypeError('not a function');
		(this._state = null),
			(this._value = null),
			(this._deferreds = []),
			An(e, xn(Nn, this), xn(Sn, this));
	}
	function En(r) {
		var o = this;
		null !== this._state
			? ln(function() {
					var e = o._state ? r.onFulfilled : r.onRejected;
					if (null !== e) {
						var t;
						try {
							t = e(o._value);
						} catch (n) {
							return void r.reject(n);
						}
						r.resolve(t);
					} else (o._state ? r.resolve : r.reject)(o._value);
			  })
			: this._deferreds.push(r);
	}
	function Nn(e) {
		try {
			if (e === this)
				throw new TypeError('A promise cannot be resolved with itself.');
			if (e && ('object' == typeof e || 'function' == typeof e)) {
				var t = e.then;
				if ('function' == typeof t)
					return void An(xn(t, e), xn(Nn, this), xn(Sn, this));
			}
			(this._state = !0), (this._value = e), kn.call(this);
		} catch (n) {
			Sn.call(this, n);
		}
	}
	function Sn(e) {
		(this._state = !1), (this._value = e), kn.call(this);
	}
	function kn() {
		for (var e = 0, t = this._deferreds.length; e < t; e++)
			En.call(this, this._deferreds[e]);
		this._deferreds = null;
	}
	function Tn(e, t, n, r) {
		(this.onFulfilled = 'function' == typeof e ? e : null),
			(this.onRejected = 'function' == typeof t ? t : null),
			(this.resolve = n),
			(this.reject = r);
	}
	function An(e, t, n) {
		var r = !1;
		try {
			e(
				function(e) {
					r || ((r = !0), t(e));
				},
				function(e) {
					r || ((r = !0), n(e));
				}
			);
		} catch (o) {
			if (r) return;
			(r = !0), n(o);
		}
	}
	function Mn(e, t) {
		return 'number' != typeof t && (t = 0), j.setTimeout(e, t);
	}
	function Rn(e, t) {
		return 'number' != typeof t && (t = 1), j.setInterval(e, t);
	}
	function _n(n, r) {
		var o, e;
		return (
			((e = function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				j.clearTimeout(o),
					(o = Mn(function() {
						n.apply(this, e);
					}, r));
			}).stop = function() {
				j.clearTimeout(o);
			}),
			e
		);
	}
	function Dn(e, t, n) {
		var r, o;
		if (!e) return 0;
		if (((n = n || e), e.length !== undefined)) {
			for (r = 0, o = e.length; r < o; r++)
				if (!1 === t.call(n, e[r], r, e)) return 0;
		} else
			for (r in e)
				if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) return 0;
		return 1;
	}
	function On(e, t, n) {
		var r, o;
		for (r = 0, o = e.length; r < o; r++) if (t.call(n, e[r], r, e)) return r;
		return -1;
	}
	function Hn(e) {
		return null === e || e === undefined ? '' : ('' + e).replace(Yn, '');
	}
	function Bn(e, t) {
		return t
			? !('array' !== t || !Xn.isArray(e)) || typeof e === t
			: e !== undefined;
	}
	var Pn = {
			requestAnimationFrame: function(e, t) {
				fn
					? fn.then(e)
					: (fn = new wn(function(e) {
							!(function(e, t) {
								var n,
									r = j.window.requestAnimationFrame,
									o = ['ms', 'moz', 'webkit'];
								for (n = 0; n < o.length && !r; n++)
									r = j.window[o[n] + 'RequestAnimationFrame'];
								(r =
									r ||
									function(e) {
										j.window.setTimeout(e, 0);
									})(e, t);
							})(e, (t = t || j.document.body));
					  }).then(e));
			},
			setTimeout: Mn,
			setInterval: Rn,
			setEditorTimeout: function(e, t, n) {
				return Mn(function() {
					e.removed || t();
				}, n);
			},
			setEditorInterval: function(e, t, n) {
				var r;
				return (r = Rn(function() {
					e.removed ? j.clearInterval(r) : t();
				}, n));
			},
			debounce: _n,
			throttle: _n,
			clearInterval: function(e) {
				return j.clearInterval(e);
			},
			clearTimeout: function(e) {
				return j.clearTimeout(e);
			}
		},
		Ln = j.navigator.userAgent,
		Vn = fe(),
		In = Vn.browser,
		Fn = Vn.os,
		Un = Vn.deviceType,
		jn = /WebKit/.test(Ln) && !In.isEdge(),
		qn =
			'FormData' in j.window &&
			'FileReader' in j.window &&
			'URL' in j.window &&
			!!j.URL.createObjectURL,
		$n = -1 !== Ln.indexOf('Windows Phone'),
		Wn = {
			opera: In.isOpera(),
			webkit: jn,
			ie: !(!In.isIE() && !In.isEdge()) && In.version.major,
			gecko: In.isFirefox(),
			mac: Fn.isOSX() || Fn.isiOS(),
			iOS: Un.isiPad() || Un.isiPhone(),
			android: Fn.isAndroid(),
			contentEditable: !0,
			transparentSrc:
				'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
			caretAfter: !0,
			range: j.window.getSelection && 'Range' in j.window,
			documentMode: In.isIE() ? j.document.documentMode || 7 : 10,
			fileApi: qn,
			ceFalse: !0,
			cacheSuffix: null,
			container: null,
			experimentalShadowDom: !1,
			canHaveCSP: !In.isIE(),
			desktop: Un.isDesktop(),
			windowsPhone: $n,
			browser: {
				current: In.current,
				version: In.version,
				isChrome: In.isChrome,
				isEdge: In.isEdge,
				isFirefox: In.isFirefox,
				isIE: In.isIE,
				isOpera: In.isOpera,
				isSafari: In.isSafari
			},
			os: {
				current: Fn.current,
				version: Fn.version,
				isAndroid: Fn.isAndroid,
				isChromeOS: Fn.isChromeOS,
				isFreeBSD: Fn.isFreeBSD,
				isiOS: Fn.isiOS,
				isLinux: Fn.isLinux,
				isOSX: Fn.isOSX,
				isSolaris: Fn.isSolaris,
				isWindows: Fn.isWindows
			},
			deviceType: {
				isDesktop: Un.isDesktop,
				isiPad: Un.isiPad,
				isiPhone: Un.isiPhone,
				isPhone: Un.isPhone,
				isTablet: Un.isTablet,
				isTouch: Un.isTouch,
				isWebView: Un.isWebView
			}
		},
		Kn = Array.isArray,
		Xn = {
			isArray: Kn,
			toArray: function(e) {
				var t,
					n,
					r = e;
				if (!Kn(e)) for (r = [], t = 0, n = e.length; t < n; t++) r[t] = e[t];
				return r;
			},
			each: Dn,
			map: function(n, r) {
				var o = [];
				return (
					Dn(n, function(e, t) {
						o.push(r(e, t, n));
					}),
					o
				);
			},
			filter: function(n, r) {
				var o = [];
				return (
					Dn(n, function(e, t) {
						(r && !r(e, t, n)) || o.push(e);
					}),
					o
				);
			},
			indexOf: function(e, t) {
				var n, r;
				if (e) for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
				return -1;
			},
			reduce: function(e, t, n, r) {
				var o = 0;
				for (arguments.length < 3 && (n = e[0]); o < e.length; o++)
					n = t.call(r, n, e[o], o);
				return n;
			},
			findIndex: On,
			find: function(e, t, n) {
				var r = On(e, t, n);
				return -1 !== r ? e[r] : undefined;
			},
			last: function(e) {
				return e[e.length - 1];
			}
		},
		Yn = /^\s*|\s*$/g,
		Gn = function(e, n, r, o) {
			(o = o || this),
				e &&
					(r && (e = e[r]),
					Xn.each(e, function(e, t) {
						if (!1 === n.call(o, e, t, r)) return !1;
						Gn(e, n, r, o);
					}));
		},
		Zn = {
			trim: Hn,
			isArray: Xn.isArray,
			is: Bn,
			toArray: Xn.toArray,
			makeMap: function(e, t, n) {
				var r;
				for (
					t = t || ',',
						'string' == typeof (e = e || []) && (e = e.split(t)),
						n = n || {},
						r = e.length;
					r--;

				)
					n[e[r]] = {};
				return n;
			},
			each: Xn.each,
			map: Xn.map,
			grep: Xn.filter,
			inArray: Xn.indexOf,
			hasOwn: function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			},
			extend: function(e, t) {
				for (var n, r, o, i = [], a = 2; a < arguments.length; a++)
					i[a - 2] = arguments[a];
				var u,
					c = arguments;
				for (n = 1, r = c.length; n < r; n++)
					for (o in (t = c[n]))
						t.hasOwnProperty(o) && (u = t[o]) !== undefined && (e[o] = u);
				return e;
			},
			create: function(e, t, n) {
				var r,
					o,
					i,
					a,
					u,
					c = this,
					s = 0;
				if (
					((e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e)),
					(i = e[3].match(/(^|\.)(\w+)$/i)[2]),
					!(o = c.createNS(e[3].replace(/\.\w+$/, ''), n))[i])
				) {
					if ('static' === e[2])
						return (
							(o[i] = t),
							void (this.onCreate && this.onCreate(e[2], e[3], o[i]))
						);
					t[i] || ((t[i] = function() {}), (s = 1)),
						(o[i] = t[i]),
						c.extend(o[i].prototype, t),
						e[5] &&
							((r = c.resolve(e[5]).prototype),
							(a = e[5].match(/\.(\w+)$/i)[1]),
							(u = o[i]),
							(o[i] = s
								? function() {
										return r[a].apply(this, arguments);
								  }
								: function() {
										return (this.parent = r[a]), u.apply(this, arguments);
								  }),
							(o[i].prototype[i] = o[i]),
							c.each(r, function(e, t) {
								o[i].prototype[t] = r[t];
							}),
							c.each(t, function(e, t) {
								r[t]
									? (o[i].prototype[t] = function() {
											return (this.parent = r[t]), e.apply(this, arguments);
									  })
									: t !== i && (o[i].prototype[t] = e);
							})),
						c.each(t['static'], function(e, t) {
							o[i][t] = e;
						});
				}
			},
			walk: Gn,
			createNS: function(e, t) {
				var n, r;
				for (t = t || j.window, e = e.split('.'), n = 0; n < e.length; n++)
					t[(r = e[n])] || (t[r] = {}), (t = t[r]);
				return t;
			},
			resolve: function(e, t) {
				var n, r;
				for (
					t = t || j.window, n = 0, r = (e = e.split('.')).length;
					n < r && (t = t[e[n]]);
					n++
				);
				return t;
			},
			explode: function(e, t) {
				return !e || Bn(e, 'array') ? e : Xn.map(e.split(t || ','), Hn);
			},
			_addCacheSuffix: function(e) {
				var t = Wn.cacheSuffix;
				return t && (e += (-1 === e.indexOf('?') ? '?' : '&') + t), e;
			}
		};
	function Jn(t) {
		var n;
		return function(e) {
			return (n =
				n ||
				(function(e, t) {
					for (var n = {}, r = 0, o = e.length; r < o; r++) {
						var i = e[r];
						n[String(i)] = t(i, r);
					}
					return n;
				})(t, $(!0))).hasOwnProperty(Oe(e));
		};
	}
	function Qn(e) {
		return Pt(e) && !ar(e);
	}
	function er(e) {
		return Pt(e) && 'br' === Oe(e);
	}
	function tr(e) {
		return (
			e &&
			'SPAN' === e.tagName &&
			'bookmark' === e.getAttribute('data-mce-type')
		);
	}
	var nr,
		rr,
		or,
		ir = Jn(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
		ar = Jn([
			'article',
			'aside',
			'details',
			'div',
			'dt',
			'figcaption',
			'footer',
			'form',
			'fieldset',
			'header',
			'hgroup',
			'html',
			'main',
			'nav',
			'section',
			'summary',
			'body',
			'p',
			'dl',
			'multicol',
			'dd',
			'figure',
			'address',
			'center',
			'blockquote',
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
			'listing',
			'xmp',
			'pre',
			'plaintext',
			'menu',
			'dir',
			'ul',
			'ol',
			'li',
			'hr',
			'table',
			'tbody',
			'thead',
			'tfoot',
			'th',
			'tr',
			'td',
			'caption'
		]),
		ur = Jn([
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
			'p',
			'div',
			'address',
			'pre',
			'form',
			'blockquote',
			'center',
			'dir',
			'fieldset',
			'header',
			'footer',
			'article',
			'section',
			'hgroup',
			'aside',
			'nav',
			'figure'
		]),
		cr = Jn(['ul', 'ol', 'dl']),
		sr = Jn(['li', 'dd', 'dt']),
		lr = Jn([
			'area',
			'base',
			'basefont',
			'br',
			'col',
			'frame',
			'hr',
			'img',
			'input',
			'isindex',
			'link',
			'meta',
			'param',
			'embed',
			'source',
			'wbr',
			'track'
		]),
		fr = Jn(['thead', 'tbody', 'tfoot']),
		dr = Jn(['td', 'th']),
		hr = Jn(['pre', 'script', 'textarea', 'style']),
		mr = function(e, t) {
			var n,
				r = t.childNodes;
			if (!Qt.isElement(t) || !tr(t)) {
				for (n = r.length - 1; 0 <= n; n--) mr(e, r[n]);
				if (!1 === Qt.isDocument(t)) {
					if (Qt.isText(t) && 0 < t.nodeValue.length) {
						var o = Zn.trim(t.nodeValue).length;
						if (e.isBlock(t.parentNode) || 0 < o) return;
						if (
							0 === o &&
							(function(e) {
								var t =
										e.previousSibling && 'SPAN' === e.previousSibling.nodeName,
									n = e.nextSibling && 'SPAN' === e.nextSibling.nodeName;
								return t && n;
							})(t)
						)
							return;
					} else if (
						Qt.isElement(t) &&
						(1 === (r = t.childNodes).length &&
							tr(r[0]) &&
							t.parentNode.insertBefore(r[0], t),
						r.length || lr(it.fromDom(t)))
					)
						return;
					e.remove(t);
				}
				return t;
			}
		},
		gr = { trimNode: mr },
		pr = Zn.makeMap,
		vr = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
		yr = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
		br = /[<>&\"\']/g,
		Cr = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
		wr = {
			128: '\u20ac',
			130: '\u201a',
			131: '\u0192',
			132: '\u201e',
			133: '\u2026',
			134: '\u2020',
			135: '\u2021',
			136: '\u02c6',
			137: '\u2030',
			138: '\u0160',
			139: '\u2039',
			140: '\u0152',
			142: '\u017d',
			145: '\u2018',
			146: '\u2019',
			147: '\u201c',
			148: '\u201d',
			149: '\u2022',
			150: '\u2013',
			151: '\u2014',
			152: '\u02dc',
			153: '\u2122',
			154: '\u0161',
			155: '\u203a',
			156: '\u0153',
			158: '\u017e',
			159: '\u0178'
		};
	(rr = {
		'"': '&quot;',
		"'": '&#39;',
		'<': '&lt;',
		'>': '&gt;',
		'&': '&amp;',
		'`': '&#96;'
	}),
		(or = {
			'&lt;': '<',
			'&gt;': '>',
			'&amp;': '&',
			'&quot;': '"',
			'&apos;': "'"
		});
	function xr(e, t) {
		var n,
			r,
			o,
			i = {};
		if (e) {
			for (e = e.split(','), t = t || 10, n = 0; n < e.length; n += 2)
				(r = String.fromCharCode(parseInt(e[n], t))),
					rr[r] || ((o = '&' + e[n + 1] + ';'), (i[r] = o), (i[o] = r));
			return i;
		}
	}
	nr = xr(
		'50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro',
		32
	);
	function zr(e, t) {
		return e.replace(t ? vr : yr, function(e) {
			return rr[e] || e;
		});
	}
	function Er(e, t) {
		return e.replace(t ? vr : yr, function(e) {
			return 1 < e.length
				? '&#' +
						(1024 * (e.charCodeAt(0) - 55296) +
							(e.charCodeAt(1) - 56320) +
							65536) +
						';'
				: rr[e] || '&#' + e.charCodeAt(0) + ';';
		});
	}
	function Nr(e, t, n) {
		return (
			(n = n || nr),
			e.replace(t ? vr : yr, function(e) {
				return rr[e] || n[e] || e;
			})
		);
	}
	var Sr = {
			encodeRaw: zr,
			encodeAllRaw: function(e) {
				return ('' + e).replace(br, function(e) {
					return rr[e] || e;
				});
			},
			encodeNumeric: Er,
			encodeNamed: Nr,
			getEncodeFunc: function(e, t) {
				var n = xr(t) || nr,
					r = pr(e.replace(/\+/g, ','));
				return r.named && r.numeric
					? function(e, t) {
							return e.replace(t ? vr : yr, function(e) {
								return rr[e] !== undefined
									? rr[e]
									: n[e] !== undefined
									? n[e]
									: 1 < e.length
									? '&#' +
									  (1024 * (e.charCodeAt(0) - 55296) +
											(e.charCodeAt(1) - 56320) +
											65536) +
									  ';'
									: '&#' + e.charCodeAt(0) + ';';
							});
					  }
					: r.named
					? t
						? function(e, t) {
								return Nr(e, t, n);
						  }
						: Nr
					: r.numeric
					? Er
					: zr;
			},
			decode: function(e) {
				return e.replace(Cr, function(e, t) {
					return t
						? 65535 <
						  (t =
								'x' === t.charAt(0).toLowerCase()
									? parseInt(t.substr(1), 16)
									: parseInt(t, 10))
							? ((t -= 65536),
							  String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
							: wr[t] || String.fromCharCode(t)
						: or[e] ||
								nr[e] ||
								(function(e) {
									var t;
									return (
										((t = it.fromTag('div').dom()).innerHTML = e),
										t.textContent || t.innerText || e
									);
								})(e);
				});
			}
		},
		kr = {},
		Tr = {},
		Ar = Zn.makeMap,
		Mr = Zn.each,
		Rr = Zn.extend,
		_r = Zn.explode,
		Dr = Zn.inArray,
		Or = function(e, t) {
			return (e = Zn.trim(e)) ? e.split(t || ' ') : [];
		},
		Hr = function(e) {
			function t(e, t, n) {
				function r(e, t) {
					var n,
						r,
						o = {};
					for (n = 0, r = e.length; n < r; n++) o[e[n]] = t || {};
					return o;
				}
				var o, i, a;
				for (
					t = t || '',
						'string' == typeof (n = n || []) && (n = Or(n)),
						o = (e = Or(e)).length;
					o--;

				)
					(a = {
						attributes: r((i = Or([u, t].join(' ')))),
						attributesOrder: i,
						children: r(n, Tr)
					}),
						(s[e[o]] = a);
			}
			function n(e, t) {
				var n, r, o, i;
				for (n = (e = Or(e)).length, t = Or(t); n--; )
					for (r = s[e[n]], o = 0, i = t.length; o < i; o++)
						(r.attributes[t[o]] = {}), r.attributesOrder.push(t[o]);
			}
			var u,
				r,
				o,
				i,
				a,
				c,
				s = {};
			return kr[e]
				? kr[e]
				: ((u = 'id accesskey class dir lang style tabindex title role'),
				  (r =
						'address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul'),
				  (o =
						'a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment'),
				  'html4' !== e &&
						((u +=
							' contenteditable contextmenu draggable dropzone hidden spellcheck translate'),
						(r +=
							' article aside details dialog figure main header footer hgroup section nav'),
						(o +=
							' audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen')),
				  'html5-strict' !== e &&
						((u += ' xml:lang'),
						(o = [o, (c = 'acronym applet basefont big font strike tt')].join(
							' '
						)),
						Mr(Or(c), function(e) {
							t(e, '', o);
						}),
						(r = [r, (a = 'center dir isindex noframes')].join(' ')),
						(i = [r, o].join(' ')),
						Mr(Or(a), function(e) {
							t(e, '', i);
						})),
				  (i = i || [r, o].join(' ')),
				  t('html', 'manifest', 'head body'),
				  t('head', '', 'base command link meta noscript script style title'),
				  t('title hr noscript br'),
				  t('base', 'href target'),
				  t('link', 'href rel media hreflang type sizes hreflang'),
				  t('meta', 'name http-equiv content charset'),
				  t('style', 'media type scoped'),
				  t('script', 'src async defer type charset'),
				  t(
						'body',
						'onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload',
						i
				  ),
				  t('address dt dd div caption', '', i),
				  t(
						'h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn',
						'',
						o
				  ),
				  t('blockquote', 'cite', i),
				  t('ol', 'reversed start type', 'li'),
				  t('ul', '', 'li'),
				  t('li', 'value', i),
				  t('dl', '', 'dt dd'),
				  t('a', 'href target rel media hreflang type', o),
				  t('q', 'cite', o),
				  t('ins del', 'cite datetime', i),
				  t('img', 'src sizes srcset alt usemap ismap width height'),
				  t('iframe', 'src name width height', i),
				  t('embed', 'src type width height'),
				  t(
						'object',
						'data type typemustmatch name usemap form width height',
						[i, 'param'].join(' ')
				  ),
				  t('param', 'name value'),
				  t('map', 'name', [i, 'area'].join(' ')),
				  t('area', 'alt coords shape href target rel media hreflang type'),
				  t(
						'table',
						'border',
						'caption colgroup thead tfoot tbody tr' +
							('html4' === e ? ' col' : '')
				  ),
				  t('colgroup', 'span', 'col'),
				  t('col', 'span'),
				  t('tbody thead tfoot', '', 'tr'),
				  t('tr', '', 'td th'),
				  t('td', 'colspan rowspan headers', i),
				  t('th', 'colspan rowspan headers scope abbr', i),
				  t(
						'form',
						'accept-charset action autocomplete enctype method name novalidate target',
						i
				  ),
				  t('fieldset', 'disabled form name', [i, 'legend'].join(' ')),
				  t('label', 'form for', o),
				  t(
						'input',
						'accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width'
				  ),
				  t(
						'button',
						'disabled form formaction formenctype formmethod formnovalidate formtarget name type value',
						'html4' === e ? i : o
				  ),
				  t(
						'select',
						'disabled form multiple name required size',
						'option optgroup'
				  ),
				  t('optgroup', 'disabled label', 'option'),
				  t('option', 'disabled label selected value'),
				  t(
						'textarea',
						'cols dirname disabled form maxlength name readonly required rows wrap'
				  ),
				  t('menu', 'type label', [i, 'li'].join(' ')),
				  t('noscript', '', i),
				  'html4' !== e &&
						(t('wbr'),
						t('ruby', '', [o, 'rt rp'].join(' ')),
						t('figcaption', '', i),
						t('mark rt rp summary bdi', '', o),
						t('canvas', 'width height', i),
						t(
							'video',
							'src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered',
							[i, 'track source'].join(' ')
						),
						t(
							'audio',
							'src crossorigin preload autoplay mediagroup loop muted controls buffered volume',
							[i, 'track source'].join(' ')
						),
						t('picture', '', 'img source'),
						t('source', 'src srcset type media sizes'),
						t('track', 'kind src srclang label default'),
						t('datalist', '', [o, 'option'].join(' ')),
						t('article section nav aside main header footer', '', i),
						t('hgroup', '', 'h1 h2 h3 h4 h5 h6'),
						t('figure', '', [i, 'figcaption'].join(' ')),
						t('time', 'datetime', o),
						t('dialog', 'open', i),
						t('command', 'type label icon disabled checked radiogroup command'),
						t('output', 'for form name', o),
						t('progress', 'value max', o),
						t('meter', 'value min max low high optimum', o),
						t('details', 'open', [i, 'summary'].join(' ')),
						t('keygen', 'autofocus challenge disabled form keytype name')),
				  'html5-strict' !== e &&
						(n('script', 'language xml:space'),
						n('style', 'xml:space'),
						n(
							'object',
							'declare classid code codebase codetype archive standby align border hspace vspace'
						),
						n('embed', 'align name hspace vspace'),
						n('param', 'valuetype type'),
						n('a', 'charset name rev shape coords'),
						n('br', 'clear'),
						n(
							'applet',
							'codebase archive code object alt name width height align hspace vspace'
						),
						n('img', 'name longdesc align border hspace vspace'),
						n(
							'iframe',
							'longdesc frameborder marginwidth marginheight scrolling align'
						),
						n('font basefont', 'size color face'),
						n('input', 'usemap align'),
						n('select'),
						n('textarea'),
						n('h1 h2 h3 h4 h5 h6 div p legend caption', 'align'),
						n('ul', 'type compact'),
						n('li', 'type'),
						n('ol dl menu dir', 'compact'),
						n('pre', 'width xml:space'),
						n('hr', 'align noshade size width'),
						n('isindex', 'prompt'),
						n(
							'table',
							'summary width frame rules cellspacing cellpadding align bgcolor'
						),
						n('col', 'width align char charoff valign'),
						n('colgroup', 'width align char charoff valign'),
						n('thead', 'align char charoff valign'),
						n('tr', 'align char charoff valign bgcolor'),
						n(
							'th',
							'axis align char charoff valign nowrap bgcolor width height'
						),
						n('form', 'accept'),
						n(
							'td',
							'abbr axis scope align char charoff valign nowrap bgcolor width height'
						),
						n('tfoot', 'align char charoff valign'),
						n('tbody', 'align char charoff valign'),
						n('area', 'nohref'),
						n('body', 'background bgcolor text link vlink alink')),
				  'html4' !== e &&
						(n('input button select textarea', 'autofocus'),
						n('input textarea', 'placeholder'),
						n('a', 'download'),
						n('link script img', 'crossorigin'),
						n('img', 'loading'),
						n('iframe', 'sandbox seamless allowfullscreen loading')),
				  Mr(Or('a form meter progress dfn'), function(e) {
						s[e] && delete s[e].children[e];
				  }),
				  delete s.caption.children.table,
				  delete s.script,
				  (kr[e] = s));
		},
		Br = function(e, n) {
			var r;
			return (
				e &&
					((r = {}),
					'string' == typeof e && (e = { '*': e }),
					Mr(e, function(e, t) {
						r[t] = r[t.toUpperCase()] =
							'map' === n ? Ar(e, /[, ]/) : _r(e, /[, ]/);
					})),
				r
			);
		};
	function Pr(i) {
		function e(e, t, n) {
			var r = i[e];
			return (
				r
					? (r = Ar(r, /[, ]/, Ar(r.toUpperCase(), /[, ]/)))
					: (r = kr[e]) ||
					  ((r = Ar(t, ' ', Ar(t.toUpperCase(), ' '))),
					  (r = Rr(r, n)),
					  (kr[e] = r)),
				r
			);
		}
		var t,
			n,
			r,
			o,
			a,
			u,
			c,
			s,
			l,
			f,
			d,
			h,
			m,
			z = {},
			g = {},
			E = [],
			p = {},
			v = {};
		(r = Hr((i = i || {}).schema)),
			!1 === i.verify_html && (i.valid_elements = '*[*]'),
			(t = Br(i.valid_styles)),
			(n = Br(i.invalid_styles, 'map')),
			(s = Br(i.valid_classes, 'map')),
			(o = e(
				'whitespace_elements',
				'pre script noscript style textarea video audio iframe object code'
			)),
			(a = e(
				'self_closing_elements',
				'colgroup dd dt li option p td tfoot th thead tr'
			)),
			(u = e(
				'short_ended_elements',
				'area base basefont br col frame hr img input isindex link meta param embed source wbr track'
			)),
			(c = e(
				'boolean_attributes',
				'checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls'
			)),
			(f = e(
				'non_empty_elements',
				'td th iframe video audio object script pre code',
				u
			)),
			(d = e('move_caret_before_on_enter_elements', 'table', f)),
			(h = e(
				'text_block_elements',
				'h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure'
			)),
			(l = e(
				'block_elements',
				'hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary',
				h
			)),
			(m = e(
				'text_inline_elements',
				'span strong b em i font strike u var cite dfn code mark q sup sub samp'
			)),
			Mr(
				(
					i.special ||
					'script noscript noframes noembed title style textarea xmp'
				).split(' '),
				function(e) {
					v[e] = new RegExp('</' + e + '[^>]*>', 'gi');
				}
			);
		function N(e) {
			return new RegExp('^' + e.replace(/([?+*])/g, '.$1') + '$');
		}
		function y(e) {
			var t,
				n,
				r,
				o,
				i,
				a,
				u,
				c,
				s,
				l,
				f,
				d,
				h,
				m,
				g,
				p,
				v,
				y,
				b,
				C = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,
				w = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
				x = /[*?+]/;
			if (e)
				for (
					e = Or(e, ','),
						z['@'] && ((p = z['@'].attributes), (v = z['@'].attributesOrder)),
						t = 0,
						n = e.length;
					t < n;
					t++
				)
					if ((i = C.exec(e[t]))) {
						if (
							((m = i[1]),
							(s = i[2]),
							(g = i[3]),
							(c = i[5]),
							(a = { attributes: (d = {}), attributesOrder: (h = []) }),
							'#' === m && (a.paddEmpty = !0),
							'-' === m && (a.removeEmpty = !0),
							'!' === i[4] && (a.removeEmptyAttrs = !0),
							p)
						) {
							for (y in p) d[y] = p[y];
							h.push.apply(h, v);
						}
						if (c)
							for (r = 0, o = (c = Or(c, '|')).length; r < o; r++)
								if ((i = w.exec(c[r]))) {
									if (
										((u = {}),
										(f = i[1]),
										(l = i[2].replace(/[\\:]:/g, ':')),
										(m = i[3]),
										(b = i[4]),
										'!' === f &&
											((a.attributesRequired = a.attributesRequired || []),
											a.attributesRequired.push(l),
											(u.required = !0)),
										'-' === f)
									) {
										delete d[l], h.splice(Dr(h, l), 1);
										continue;
									}
									m &&
										('=' === m &&
											((a.attributesDefault = a.attributesDefault || []),
											a.attributesDefault.push({ name: l, value: b }),
											(u.defaultValue = b)),
										':' === m &&
											((a.attributesForced = a.attributesForced || []),
											a.attributesForced.push({ name: l, value: b }),
											(u.forcedValue = b)),
										'<' === m && (u.validValues = Ar(b, '?'))),
										x.test(l)
											? ((a.attributePatterns = a.attributePatterns || []),
											  (u.pattern = N(l)),
											  a.attributePatterns.push(u))
											: (d[l] || h.push(l), (d[l] = u));
								}
						p || '@' !== s || ((p = d), (v = h)),
							g && ((a.outputName = s), (z[g] = a)),
							x.test(s) ? ((a.pattern = N(s)), E.push(a)) : (z[s] = a);
					}
		}
		function b(e) {
			(z = {}),
				(E = []),
				y(e),
				Mr(r, function(e, t) {
					g[t] = e.children;
				});
		}
		function C(e) {
			var a = /^(~)?(.+)$/;
			e &&
				((kr.text_block_elements = kr.block_elements = null),
				Mr(Or(e, ','), function(e) {
					var t = a.exec(e),
						n = '~' === t[1],
						r = n ? 'span' : 'div',
						o = t[2];
					if (
						((g[o] = g[r]),
						(p[o] = r),
						n || ((l[o.toUpperCase()] = {}), (l[o] = {})),
						!z[o])
					) {
						var i = z[r];
						delete (i = Rr({}, i)).removeEmptyAttrs,
							delete i.removeEmpty,
							(z[o] = i);
					}
					Mr(g, function(e, t) {
						e[r] && ((g[t] = e = Rr({}, g[t])), (e[o] = e[r]));
					});
				}));
		}
		function w(e) {
			var o = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
			(kr[i.schema] = null),
				e &&
					Mr(Or(e, ','), function(e) {
						var t,
							n,
							r = o.exec(e);
						r &&
							((n = r[1]),
							(t = n ? g[r[2]] : (g[r[2]] = { '#comment': {} })),
							(t = g[r[2]]),
							Mr(Or(r[3], '|'), function(e) {
								'-' === n ? delete t[e] : (t[e] = {});
							}));
					});
		}
		function x(e) {
			var t,
				n = z[e];
			if (n) return n;
			for (t = E.length; t--; ) if ((n = E[t]).pattern.test(e)) return n;
		}
		i.valid_elements
			? b(i.valid_elements)
			: (Mr(r, function(e, t) {
					(z[t] = {
						attributes: e.attributes,
						attributesOrder: e.attributesOrder
					}),
						(g[t] = e.children);
			  }),
			  'html5' !== i.schema &&
					Mr(Or('strong/b em/i'), function(e) {
						(e = Or(e, '/')), (z[e[1]].outputName = e[0]);
					}),
			  Mr(
					Or(
						'ol ul sub sup blockquote span font a table tbody tr strong em b i'
					),
					function(e) {
						z[e] && (z[e].removeEmpty = !0);
					}
			  ),
			  Mr(Or('p h1 h2 h3 h4 h5 h6 th td pre div address caption li'), function(
					e
			  ) {
					z[e].paddEmpty = !0;
			  }),
			  Mr(Or('span'), function(e) {
					z[e].removeEmptyAttrs = !0;
			  })),
			C(i.custom_elements),
			w(i.valid_children),
			y(i.extended_valid_elements),
			w('+ol[ul|ol],+ul[ul|ol]'),
			Mr(
				{
					dd: 'dl',
					dt: 'dl',
					li: 'ul ol',
					td: 'tr',
					th: 'tr',
					tr: 'tbody thead tfoot',
					tbody: 'table',
					thead: 'table',
					tfoot: 'table',
					legend: 'fieldset',
					area: 'map',
					param: 'video audio object'
				},
				function(e, t) {
					z[t] && (z[t].parentsRequired = Or(e));
				}
			),
			i.invalid_elements &&
				Mr(_r(i.invalid_elements), function(e) {
					z[e] && delete z[e];
				}),
			x('span') || y('span[!data-mce-type|*]');
		return {
			children: g,
			elements: z,
			getValidStyles: function() {
				return t;
			},
			getValidClasses: function() {
				return s;
			},
			getBlockElements: function() {
				return l;
			},
			getInvalidStyles: function() {
				return n;
			},
			getShortEndedElements: function() {
				return u;
			},
			getTextBlockElements: function() {
				return h;
			},
			getTextInlineElements: function() {
				return m;
			},
			getBoolAttrs: function() {
				return c;
			},
			getElementRule: x,
			getSelfClosingElements: function() {
				return a;
			},
			getNonEmptyElements: function() {
				return f;
			},
			getMoveCaretBeforeOnEnterElements: function() {
				return d;
			},
			getWhiteSpaceElements: function() {
				return o;
			},
			getSpecialElements: function() {
				return v;
			},
			isValidChild: function(e, t) {
				var n = g[e.toLowerCase()];
				return !(!n || !n[t.toLowerCase()]);
			},
			isValid: function(e, t) {
				var n,
					r,
					o = x(e);
				if (o) {
					if (!t) return !0;
					if (o.attributes[t]) return !0;
					if ((n = o.attributePatterns))
						for (r = n.length; r--; ) if (n[r].pattern.test(e)) return !0;
				}
				return !1;
			},
			getCustomElements: function() {
				return p;
			},
			addValidElements: y,
			setValidElements: b,
			addCustomElements: C,
			addValidChildren: w
		};
	}
	function Lr(e, t, n, r) {
		function o(e) {
			return 1 < (e = parseInt(e, 10).toString(16)).length ? e : '0' + e;
		}
		return '#' + o(t) + o(n) + o(r);
	}
	function Vr(e, t, n, r) {
		e.addEventListener
			? e.addEventListener(t, n, r || !1)
			: e.attachEvent && e.attachEvent('on' + t, n);
	}
	function Ir(e, t, n, r) {
		e.removeEventListener
			? e.removeEventListener(t, n, r || !1)
			: e.detachEvent && e.detachEvent('on' + t, n);
	}
	function Fr(e, t) {
		var n,
			r = t || {};
		for (n in e) Kr[n] || (r[n] = e[n]);
		if (
			(r.target || (r.target = r.srcElement || j.document),
			Wn.experimentalShadowDom &&
				(r.target = (function(e, t) {
					if (e.composedPath) {
						var n = e.composedPath();
						if (n && 0 < n.length) return n[0];
					}
					return t;
				})(e, r.target)),
			e && Wr.test(e.type) && e.pageX === undefined && e.clientX !== undefined)
		) {
			var o = r.target.ownerDocument || j.document,
				i = o.documentElement,
				a = o.body;
			(r.pageX =
				e.clientX +
				((i && i.scrollLeft) || (a && a.scrollLeft) || 0) -
				((i && i.clientLeft) || (a && a.clientLeft) || 0)),
				(r.pageY =
					e.clientY +
					((i && i.scrollTop) || (a && a.scrollTop) || 0) -
					((i && i.clientTop) || (a && a.clientTop) || 0));
		}
		return (
			(r.preventDefault = function() {
				(r.isDefaultPrevented = Yr),
					e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
			}),
			(r.stopPropagation = function() {
				(r.isPropagationStopped = Yr),
					e &&
						(e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0));
			}),
			!(r.stopImmediatePropagation = function() {
				(r.isImmediatePropagationStopped = Yr), r.stopPropagation();
			}) ===
				(function(e) {
					return e.isDefaultPrevented === Yr || e.isDefaultPrevented === Xr;
				})(r) &&
				((r.isDefaultPrevented = Xr),
				(r.isPropagationStopped = Xr),
				(r.isImmediatePropagationStopped = Xr)),
			'undefined' == typeof r.metaKey && (r.metaKey = !1),
			r
		);
	}
	function Ur(e, t, n) {
		var r = e.document,
			o = { type: 'ready' };
		if (n.domLoaded) t(o);
		else {
			var i = function() {
				Ir(e, 'DOMContentLoaded', i),
					Ir(e, 'load', i),
					n.domLoaded || ((n.domLoaded = !0), t(o));
			};
			'complete' === r.readyState || ('interactive' === r.readyState && r.body)
				? i()
				: Vr(e, 'DOMContentLoaded', i),
				Vr(e, 'load', i);
		}
	}
	var jr = '\ufeff',
		qr = '\xa0',
		$r = function(b, e) {
			var C,
				t,
				s,
				l,
				w = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
				x = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
				z = /\s*([^:]+):\s*([^;]+);?/g,
				E = /\s+$/,
				N = {},
				S = jr;
			for (
				b = b || {},
					e && ((s = e.getValidStyles()), (l = e.getInvalidStyles())),
					t = ('\\" \\\' \\; \\: ; : ' + S).split(' '),
					C = 0;
				C < t.length;
				C++
			)
				(N[t[C]] = S + C), (N[S + C] = t[C]);
			return {
				toHex: function(e) {
					return e.replace(w, Lr);
				},
				parse: function(e) {
					function t(e, t, n) {
						var r, o, i, a;
						if (
							(r = p[e + '-top' + t]) &&
							(o = p[e + '-right' + t]) &&
							(i = p[e + '-bottom' + t]) &&
							(a = p[e + '-left' + t])
						) {
							var u = [r, o, i, a];
							for (C = u.length - 1; C-- && u[C] === u[C + 1]; );
							(-1 < C && n) ||
								((p[e + t] = -1 === C ? u[0] : u.join(' ')),
								delete p[e + '-top' + t],
								delete p[e + '-right' + t],
								delete p[e + '-bottom' + t],
								delete p[e + '-left' + t]);
						}
					}
					function n(e) {
						var t,
							n = p[e];
						if (n) {
							for (t = (n = n.split(' ')).length; t--; )
								if (n[t] !== n[0]) return !1;
							return (p[e] = n[0]), !0;
						}
					}
					function r(e) {
						return (f = !0), N[e];
					}
					function u(e, t) {
						return (
							f &&
								(e = e.replace(/\uFEFF[0-9]/g, function(e) {
									return N[e];
								})),
							t || (e = e.replace(/\\([\'\";:])/g, '$1')),
							e
						);
					}
					function o(e) {
						return String.fromCharCode(parseInt(e.slice(1), 16));
					}
					function i(e) {
						return e.replace(/\\[0-9a-f]+/gi, o);
					}
					function a(e, t, n, r, o, i) {
						if ((o = o || i))
							return "'" + (o = u(o)).replace(/\'/g, "\\'") + "'";
						if (((t = u(t || n || r)), !b.allow_script_urls)) {
							var a = t.replace(/[\s\r\n]+/g, '');
							if (/(java|vb)script:/i.test(a)) return '';
							if (!b.allow_svg_data_urls && /^data:image\/svg/i.test(a))
								return '';
						}
						return (
							v && (t = v.call(y, t, 'style')),
							"url('" + t.replace(/\'/g, "\\'") + "')"
						);
					}
					var c,
						s,
						l,
						f,
						d,
						h,
						m,
						g,
						p = {},
						v = b.url_converter,
						y = b.url_converter_scope || this;
					if (e) {
						for (
							e = (e = e.replace(/[\u0000-\u001F]/g, ''))
								.replace(/\\[\"\';:\uFEFF]/g, r)
								.replace(/\"[^\"]+\"|\'[^\']+\'/g, function(e) {
									return e.replace(/[;:]/g, r);
								});
							(c = z.exec(e));

						)
							if (
								((z.lastIndex = c.index + c[0].length),
								(s = c[1].replace(E, '').toLowerCase()),
								(l = c[2].replace(E, '')),
								s && l)
							) {
								if (
									((s = i(s)),
									(l = i(l)),
									-1 !== s.indexOf(S) || -1 !== s.indexOf('"'))
								)
									continue;
								if (
									!b.allow_script_urls &&
									('behavior' === s || /expression\s*\(|\/\*|\*\//.test(l))
								)
									continue;
								'font-weight' === s && '700' === l
									? (l = 'bold')
									: ('color' !== s && 'background-color' !== s) ||
									  (l = l.toLowerCase()),
									(l = (l = l.replace(w, Lr)).replace(x, a)),
									(p[s] = f ? u(l, !0) : l);
							}
						t('border', '', !0),
							t('border', '-width'),
							t('border', '-color'),
							t('border', '-style'),
							t('padding', ''),
							t('margin', ''),
							(d = 'border'),
							(m = 'border-style'),
							(g = 'border-color'),
							n((h = 'border-width')) &&
								n(m) &&
								n(g) &&
								((p[d] = p[h] + ' ' + p[m] + ' ' + p[g]),
								delete p[h],
								delete p[m],
								delete p[g]),
							'medium none' === p.border && delete p.border,
							'none' === p['border-image'] && delete p['border-image'];
					}
					return p;
				},
				serialize: function(i, e) {
					function t(e) {
						var t, n, r, o;
						if ((t = s[e]))
							for (n = 0, r = t.length; n < r; n++)
								(e = t[n]),
									(o = i[e]) &&
										(c += (0 < c.length ? ' ' : '') + e + ': ' + o + ';');
					}
					var n,
						r,
						o,
						a,
						u,
						c = '';
					if (e && s) t('*'), t(e);
					else
						for (n in i)
							!(r = i[n]) ||
								(l &&
									((o = n),
									(a = e),
									(u = void 0),
									((u = l['*']) && u[o]) || ((u = l[a]) && u[o]))) ||
								(c += (0 < c.length ? ' ' : '') + n + ': ' + r + ';');
					return c;
				}
			};
		},
		Wr = /^(?:mouse|contextmenu)|click/,
		Kr = {
			keyLocation: 1,
			layerX: 1,
			layerY: 1,
			returnValue: 1,
			webkitMovementX: 1,
			webkitMovementY: 1,
			keyIdentifier: 1,
			mozPressure: 1
		},
		Xr = function() {
			return !1;
		},
		Yr = function() {
			return !0;
		},
		Gr =
			((Zr.prototype.bind = function(e, t, n, r) {
				function o(e) {
					d.executeHandlers(Fr(e || h.event), i);
				}
				var i,
					a,
					u,
					c,
					s,
					l,
					f,
					d = this,
					h = j.window;
				if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
					e[d.expando]
						? (i = e[d.expando])
						: ((i = d.count++), (e[d.expando] = i), (d.events[i] = {})),
						(r = r || e);
					var m = t.split(' ');
					for (u = m.length; u--; )
						(l = o),
							(s = f = !1),
							'DOMContentLoaded' === (c = m[u]) && (c = 'ready'),
							d.domLoaded && 'ready' === c && 'complete' === e.readyState
								? n.call(r, Fr({ type: c }))
								: (d.hasMouseEnterLeave ||
										((s = d.mouseEnterLeave[c]) &&
											(l = function(e) {
												var t, n;
												if (
													((t = e.currentTarget),
													(n = e.relatedTarget) && t.contains)
												)
													n = t.contains(n);
												else for (; n && n !== t; ) n = n.parentNode;
												n ||
													(((e = Fr(e || h.event)).type =
														'mouseout' === e.type
															? 'mouseleave'
															: 'mouseenter'),
													(e.target = t),
													d.executeHandlers(e, i));
											})),
								  d.hasFocusIn ||
										('focusin' !== c && 'focusout' !== c) ||
										((f = !0),
										(s = 'focusin' === c ? 'focus' : 'blur'),
										(l = function(e) {
											((e = Fr(e || h.event)).type =
												'focus' === e.type ? 'focusin' : 'focusout'),
												d.executeHandlers(e, i);
										})),
								  (a = d.events[i][c])
										? 'ready' === c && d.domLoaded
											? n(Fr({ type: c }))
											: a.push({ func: n, scope: r })
										: ((d.events[i][c] = a = [{ func: n, scope: r }]),
										  (a.fakeName = s),
										  (a.capture = f),
										  (a.nativeHandler = l),
										  'ready' === c ? Ur(e, l, d) : Vr(e, s || c, l, f)));
					return (e = a = 0), n;
				}
			}),
			(Zr.prototype.unbind = function(e, t, n) {
				var r, o, i, a, u, c;
				if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
				if ((r = e[this.expando])) {
					if (((c = this.events[r]), t)) {
						var s = t.split(' ');
						for (i = s.length; i--; )
							if ((o = c[(u = s[i])])) {
								if (n)
									for (a = o.length; a--; )
										if (o[a].func === n) {
											var l = o.nativeHandler,
												f = o.fakeName,
												d = o.capture;
											((o = o
												.slice(0, a)
												.concat(o.slice(a + 1))).nativeHandler = l),
												(o.fakeName = f),
												(o.capture = d),
												(c[u] = o);
										}
								(n && 0 !== o.length) ||
									(delete c[u],
									Ir(e, o.fakeName || u, o.nativeHandler, o.capture));
							}
					} else {
						for (u in c)
							(o = c[u]), Ir(e, o.fakeName || u, o.nativeHandler, o.capture);
						c = {};
					}
					for (u in c) return this;
					delete this.events[r];
					try {
						delete e[this.expando];
					} catch (h) {
						e[this.expando] = null;
					}
				}
				return this;
			}),
			(Zr.prototype.fire = function(e, t, n) {
				var r;
				if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
				var o = Fr(null, n);
				for (
					o.type = t, o.target = e;
					(r = e[this.expando]) && this.executeHandlers(o, r),
						(e =
							e.parentNode ||
							e.ownerDocument ||
							e.defaultView ||
							e.parentWindow) && !o.isPropagationStopped();

				);
				return this;
			}),
			(Zr.prototype.clean = function(e) {
				var t, n;
				if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
				if (
					(e[this.expando] && this.unbind(e),
					e.getElementsByTagName || (e = e.document),
					e && e.getElementsByTagName)
				)
					for (
						this.unbind(e), t = (n = e.getElementsByTagName('*')).length;
						t--;

					)
						(e = n[t])[this.expando] && this.unbind(e);
				return this;
			}),
			(Zr.prototype.destroy = function() {
				this.events = {};
			}),
			(Zr.prototype.cancel = function(e) {
				return e && (e.preventDefault(), e.stopImmediatePropagation()), !1;
			}),
			(Zr.prototype.executeHandlers = function(e, t) {
				var n,
					r,
					o,
					i,
					a = this.events[t];
				if ((n = a && a[e.type]))
					for (r = 0, o = n.length; r < o; r++)
						if (
							((i = n[r]) &&
								!1 === i.func.call(i.scope, e) &&
								e.preventDefault(),
							e.isImmediatePropagationStopped())
						)
							return;
			}),
			(Zr.Event = new Zr()),
			Zr);
	function Zr() {
		(this.domLoaded = !1),
			(this.events = {}),
			(this.count = 1),
			(this.expando = 'mce-data-' + (+new Date()).toString(32)),
			(this.hasMouseEnterLeave = 'onmouseenter' in j.document.documentElement),
			(this.hasFocusIn = 'onfocusin' in j.document.documentElement),
			(this.count = 1);
	}
	function Jr(e, t, n) {
		var r = '0x' + t - 65536;
		return r != r || n
			? t
			: r < 0
			? String.fromCharCode(65536 + r)
			: String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
	}
	var Qr,
		eo,
		to,
		no,
		ro,
		oo,
		io,
		ao,
		uo,
		co,
		so,
		lo,
		fo,
		ho,
		mo,
		go,
		po,
		vo,
		yo = 'sizzle' + -new Date(),
		bo = j.window.document,
		Co = 0,
		wo = 0,
		xo = Qo(),
		zo = Qo(),
		Eo = Qo(),
		No = function(e, t) {
			return e === t && (so = !0), 0;
		},
		So = typeof undefined,
		ko = {}.hasOwnProperty,
		To = [],
		Ao = To.pop,
		Mo = To.push,
		Ro = To.push,
		_o = To.slice,
		Do =
			To.indexOf ||
			function(e) {
				for (var t = 0, n = this.length; t < n; t++)
					if (this[t] === e) return t;
				return -1;
			},
		Oo = '[\\x20\\t\\r\\n\\f]',
		Ho = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
		Bo =
			'\\[' +
			Oo +
			'*(' +
			Ho +
			')(?:' +
			Oo +
			'*([*^$|!~]?=)' +
			Oo +
			'*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
			Ho +
			'))|)' +
			Oo +
			'*\\]',
		Po =
			':(' +
			Ho +
			')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
			Bo +
			')*)|.*)\\)|)',
		Lo = new RegExp('^' + Oo + '+|((?:^|[^\\\\])(?:\\\\.)*)' + Oo + '+$', 'g'),
		Vo = new RegExp('^' + Oo + '*,' + Oo + '*'),
		Io = new RegExp('^' + Oo + '*([>+~]|' + Oo + ')' + Oo + '*'),
		Fo = new RegExp('=' + Oo + '*([^\\]\'"]*?)' + Oo + '*\\]', 'g'),
		Uo = new RegExp(Po),
		jo = new RegExp('^' + Ho + '$'),
		qo = {
			ID: new RegExp('^#(' + Ho + ')'),
			CLASS: new RegExp('^\\.(' + Ho + ')'),
			TAG: new RegExp('^(' + Ho + '|[*])'),
			ATTR: new RegExp('^' + Bo),
			PSEUDO: new RegExp('^' + Po),
			CHILD: new RegExp(
				'^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
					Oo +
					'*(even|odd|(([+-]|)(\\d*)n|)' +
					Oo +
					'*(?:([+-]|)' +
					Oo +
					'*(\\d+)|))' +
					Oo +
					'*\\)|)',
				'i'
			),
			bool: new RegExp(
				'^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$',
				'i'
			),
			needsContext: new RegExp(
				'^' +
					Oo +
					'*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
					Oo +
					'*((?:-\\d)?\\d*)' +
					Oo +
					'*\\)|)(?=[^-]|$)',
				'i'
			)
		},
		$o = /^(?:input|select|textarea|button)$/i,
		Wo = /^h\d$/i,
		Ko = /^[^{]+\{\s*\[native \w/,
		Xo = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		Yo = /[+~]/,
		Go = /'|\\/g,
		Zo = new RegExp('\\\\([\\da-f]{1,6}' + Oo + '?|(' + Oo + ')|.)', 'ig');
	try {
		Ro.apply((To = _o.call(bo.childNodes)), bo.childNodes),
			To[bo.childNodes.length].nodeType;
	} catch (HN) {
		Ro = {
			apply: To.length
				? function(e, t) {
						Mo.apply(e, _o.call(t));
				  }
				: function(e, t) {
						for (var n = e.length, r = 0; (e[n++] = t[r++]); );
						e.length = n - 1;
				  }
		};
	}
	var Jo = function(e, t, n, r) {
		var o, i, a, u, c, s, l, f, d, h;
		if (
			((t ? t.ownerDocument || t : bo) !== fo && lo(t),
			(n = n || []),
			!e || 'string' != typeof e)
		)
			return n;
		if (1 !== (u = (t = t || fo).nodeType) && 9 !== u) return [];
		if (mo && !r) {
			if ((o = Xo.exec(e)))
				if ((a = o[1])) {
					if (9 === u) {
						if (!(i = t.getElementById(a)) || !i.parentNode) return n;
						if (i.id === a) return n.push(i), n;
					} else if (
						t.ownerDocument &&
						(i = t.ownerDocument.getElementById(a)) &&
						vo(t, i) &&
						i.id === a
					)
						return n.push(i), n;
				} else {
					if (o[2]) return Ro.apply(n, t.getElementsByTagName(e)), n;
					if ((a = o[3]) && eo.getElementsByClassName)
						return Ro.apply(n, t.getElementsByClassName(a)), n;
				}
			if (eo.qsa && (!go || !go.test(e))) {
				if (
					((f = l = yo),
					(d = t),
					(h = 9 === u && e),
					1 === u && 'object' !== t.nodeName.toLowerCase())
				) {
					for (
						s = oo(e),
							(l = t.getAttribute('id'))
								? (f = l.replace(Go, '\\$&'))
								: t.setAttribute('id', f),
							f = "[id='" + f + "'] ",
							c = s.length;
						c--;

					)
						s[c] = f + ui(s[c]);
					(d = (Yo.test(e) && ii(t.parentNode)) || t), (h = s.join(','));
				}
				if (h)
					try {
						return Ro.apply(n, d.querySelectorAll(h)), n;
					} catch (m) {
					} finally {
						l || t.removeAttribute('id');
					}
			}
		}
		return ao(e.replace(Lo, '$1'), t, n, r);
	};
	function Qo() {
		var n = [];
		return function r(e, t) {
			return (
				n.push(e + ' ') > to.cacheLength && delete r[n.shift()],
				(r[e + ' '] = t)
			);
		};
	}
	function ei(e) {
		return (e[yo] = !0), e;
	}
	function ti(e, t) {
		var n = t && e,
			r =
				n &&
				1 === e.nodeType &&
				1 === t.nodeType &&
				(~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
		if (r) return r;
		if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
		return e ? 1 : -1;
	}
	function ni(t) {
		return function(e) {
			return 'input' === e.nodeName.toLowerCase() && e.type === t;
		};
	}
	function ri(n) {
		return function(e) {
			var t = e.nodeName.toLowerCase();
			return ('input' === t || 'button' === t) && e.type === n;
		};
	}
	function oi(a) {
		return ei(function(i) {
			return (
				(i = +i),
				ei(function(e, t) {
					for (var n, r = a([], e.length, i), o = r.length; o--; )
						e[(n = r[o])] && (e[n] = !(t[n] = e[n]));
				})
			);
		});
	}
	function ii(e) {
		return e && typeof e.getElementsByTagName != So && e;
	}
	for (Qr in ((eo = Jo.support = {}),
	(ro = Jo.isXML = function(e) {
		var t = e && (e.ownerDocument || e).documentElement;
		return !!t && 'HTML' !== t.nodeName;
	}),
	(lo = Jo.setDocument = function(e) {
		var t,
			c = e ? e.ownerDocument || e : bo,
			n = c.defaultView;
		return c !== fo && 9 === c.nodeType && c.documentElement
			? ((ho = (fo = c).documentElement),
			  (mo = !ro(c)),
			  n &&
					n !==
						(function r(e) {
							try {
								return e.top;
							} catch (t) {}
							return null;
						})(n) &&
					(n.addEventListener
						? n.addEventListener(
								'unload',
								function() {
									lo();
								},
								!1
						  )
						: n.attachEvent &&
						  n.attachEvent('onunload', function() {
								lo();
						  })),
			  (eo.attributes = !0),
			  (eo.getElementsByTagName = !0),
			  (eo.getElementsByClassName = Ko.test(c.getElementsByClassName)),
			  (eo.getById = !0),
			  (to.find.ID = function(e, t) {
					if (typeof t.getElementById != So && mo) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : [];
					}
			  }),
			  (to.filter.ID = function(e) {
					var t = e.replace(Zo, Jr);
					return function(e) {
						return e.getAttribute('id') === t;
					};
			  }),
			  (to.find.TAG = eo.getElementsByTagName
					? function(e, t) {
							if (typeof t.getElementsByTagName != So)
								return t.getElementsByTagName(e);
					  }
					: function(e, t) {
							var n,
								r = [],
								o = 0,
								i = t.getElementsByTagName(e);
							if ('*' !== e) return i;
							for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
							return r;
					  }),
			  (to.find.CLASS =
					eo.getElementsByClassName &&
					function(e, t) {
						if (mo) return t.getElementsByClassName(e);
					}),
			  (po = []),
			  (go = []),
			  (eo.disconnectedMatch = !0),
			  (go = go.length && new RegExp(go.join('|'))),
			  (po = po.length && new RegExp(po.join('|'))),
			  (t = Ko.test(ho.compareDocumentPosition)),
			  (vo =
					t || Ko.test(ho.contains)
						? function(e, t) {
								var n = 9 === e.nodeType ? e.documentElement : e,
									r = t && t.parentNode;
								return (
									e === r ||
									!(
										!r ||
										1 !== r.nodeType ||
										!(n.contains
											? n.contains(r)
											: e.compareDocumentPosition &&
											  16 & e.compareDocumentPosition(r))
									)
								);
						  }
						: function(e, t) {
								if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
								return !1;
						  }),
			  (No = t
					? function(e, t) {
							if (e === t) return (so = !0), 0;
							var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
							return (
								n ||
								(1 &
									(n =
										(e.ownerDocument || e) === (t.ownerDocument || t)
											? e.compareDocumentPosition(t)
											: 1) ||
								(!eo.sortDetached && t.compareDocumentPosition(e) === n)
									? e === c || (e.ownerDocument === bo && vo(bo, e))
										? -1
										: t === c || (t.ownerDocument === bo && vo(bo, t))
										? 1
										: co
										? Do.call(co, e) - Do.call(co, t)
										: 0
									: 4 & n
									? -1
									: 1)
							);
					  }
					: function(e, t) {
							if (e === t) return (so = !0), 0;
							var n,
								r = 0,
								o = e.parentNode,
								i = t.parentNode,
								a = [e],
								u = [t];
							if (!o || !i)
								return e === c
									? -1
									: t === c
									? 1
									: o
									? -1
									: i
									? 1
									: co
									? Do.call(co, e) - Do.call(co, t)
									: 0;
							if (o === i) return ti(e, t);
							for (n = e; (n = n.parentNode); ) a.unshift(n);
							for (n = t; (n = n.parentNode); ) u.unshift(n);
							for (; a[r] === u[r]; ) r++;
							return r
								? ti(a[r], u[r])
								: a[r] === bo
								? -1
								: u[r] === bo
								? 1
								: 0;
					  }),
			  c)
			: fo;
	}),
	(Jo.matches = function(e, t) {
		return Jo(e, null, null, t);
	}),
	(Jo.matchesSelector = function(e, t) {
		if (
			((e.ownerDocument || e) !== fo && lo(e),
			(t = t.replace(Fo, "='$1']")),
			eo.matchesSelector && mo && (!po || !po.test(t)) && (!go || !go.test(t)))
		)
			try {
				var n = (void 0).call(e, t);
				if (
					n ||
					eo.disconnectedMatch ||
					(e.document && 11 !== e.document.nodeType)
				)
					return n;
			} catch (HN) {}
		return 0 < Jo(t, fo, null, [e]).length;
	}),
	(Jo.contains = function(e, t) {
		return (e.ownerDocument || e) !== fo && lo(e), vo(e, t);
	}),
	(Jo.attr = function(e, t) {
		(e.ownerDocument || e) !== fo && lo(e);
		var n = to.attrHandle[t.toLowerCase()],
			r =
				n && ko.call(to.attrHandle, t.toLowerCase()) ? n(e, t, !mo) : undefined;
		return r !== undefined
			? r
			: eo.attributes || !mo
			? e.getAttribute(t)
			: (r = e.getAttributeNode(t)) && r.specified
			? r.value
			: null;
	}),
	(Jo.error = function(e) {
		throw new Error('Syntax error, unrecognized expression: ' + e);
	}),
	(Jo.uniqueSort = function(e) {
		var t,
			n = [],
			r = 0,
			o = 0;
		if (
			((so = !eo.detectDuplicates),
			(co = !eo.sortStable && e.slice(0)),
			e.sort(No),
			so)
		) {
			for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
			for (; r--; ) e.splice(n[r], 1);
		}
		return (co = null), e;
	}),
	(no = Jo.getText = function(e) {
		var t,
			n = '',
			r = 0,
			o = e.nodeType;
		if (o) {
			if (1 === o || 9 === o || 11 === o) {
				if ('string' == typeof e.textContent) return e.textContent;
				for (e = e.firstChild; e; e = e.nextSibling) n += no(e);
			} else if (3 === o || 4 === o) return e.nodeValue;
		} else for (; (t = e[r++]); ) n += no(t);
		return n;
	}),
	((to = Jo.selectors = {
		cacheLength: 50,
		createPseudo: ei,
		match: qo,
		attrHandle: {},
		find: {},
		relative: {
			'>': { dir: 'parentNode', first: !0 },
			' ': { dir: 'parentNode' },
			'+': { dir: 'previousSibling', first: !0 },
			'~': { dir: 'previousSibling' }
		},
		preFilter: {
			ATTR: function(e) {
				return (
					(e[1] = e[1].replace(Zo, Jr)),
					(e[3] = (e[3] || e[4] || e[5] || '').replace(Zo, Jr)),
					'~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
					e.slice(0, 4)
				);
			},
			CHILD: function(e) {
				return (
					(e[1] = e[1].toLowerCase()),
					'nth' === e[1].slice(0, 3)
						? (e[3] || Jo.error(e[0]),
						  (e[4] = +(e[4]
								? e[5] + (e[6] || 1)
								: 2 * ('even' === e[3] || 'odd' === e[3]))),
						  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
						: e[3] && Jo.error(e[0]),
					e
				);
			},
			PSEUDO: function(e) {
				var t,
					n = !e[6] && e[2];
				return qo.CHILD.test(e[0])
					? null
					: (e[3]
							? (e[2] = e[4] || e[5] || '')
							: n &&
							  Uo.test(n) &&
							  (t = oo(n, !0)) &&
							  (t = n.indexOf(')', n.length - t) - n.length) &&
							  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
					  e.slice(0, 3));
			}
		},
		filter: {
			TAG: function(e) {
				var t = e.replace(Zo, Jr).toLowerCase();
				return '*' === e
					? function() {
							return !0;
					  }
					: function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t;
					  };
			},
			CLASS: function(e) {
				var t = xo[e + ' '];
				return (
					t ||
					((t = new RegExp('(^|' + Oo + ')' + e + '(' + Oo + '|$)')) &&
						xo(e, function(e) {
							return t.test(
								('string' == typeof e.className && e.className) ||
									(typeof e.getAttribute != So && e.getAttribute('class')) ||
									''
							);
						}))
				);
			},
			ATTR: function(n, r, o) {
				return function(e) {
					var t = Jo.attr(e, n);
					return null == t
						? '!=' === r
						: !r ||
								((t += ''),
								'=' === r
									? t === o
									: '!=' === r
									? t !== o
									: '^=' === r
									? o && 0 === t.indexOf(o)
									: '*=' === r
									? o && -1 < t.indexOf(o)
									: '$=' === r
									? o && t.slice(-o.length) === o
									: '~=' === r
									? -1 < (' ' + t + ' ').indexOf(o)
									: '|=' === r &&
									  (t === o || t.slice(0, o.length + 1) === o + '-'));
				};
			},
			CHILD: function(h, e, t, m, g) {
				var p = 'nth' !== h.slice(0, 3),
					v = 'last' !== h.slice(-4),
					y = 'of-type' === e;
				return 1 === m && 0 === g
					? function(e) {
							return !!e.parentNode;
					  }
					: function(e, t, n) {
							var r,
								o,
								i,
								a,
								u,
								c,
								s = p != v ? 'nextSibling' : 'previousSibling',
								l = e.parentNode,
								f = y && e.nodeName.toLowerCase(),
								d = !n && !y;
							if (l) {
								if (p) {
									for (; s; ) {
										for (i = e; (i = i[s]); )
											if (y ? i.nodeName.toLowerCase() === f : 1 === i.nodeType)
												return !1;
										c = s = 'only' === h && !c && 'nextSibling';
									}
									return !0;
								}
								if (((c = [v ? l.firstChild : l.lastChild]), v && d)) {
									for (
										u =
											(r = (o = l[yo] || (l[yo] = {}))[h] || [])[0] === Co &&
											r[1],
											a = r[0] === Co && r[2],
											i = u && l.childNodes[u];
										(i = (++u && i && i[s]) || (a = u = 0) || c.pop());

									)
										if (1 === i.nodeType && ++a && i === e) {
											o[h] = [Co, u, a];
											break;
										}
								} else if (d && (r = (e[yo] || (e[yo] = {}))[h]) && r[0] === Co)
									a = r[1];
								else
									for (
										;
										(i = (++u && i && i[s]) || (a = u = 0) || c.pop()) &&
										((y ? i.nodeName.toLowerCase() !== f : 1 !== i.nodeType) ||
											!++a ||
											(d && ((i[yo] || (i[yo] = {}))[h] = [Co, a]), i !== e));

									);
								return (a -= g) === m || (a % m == 0 && 0 <= a / m);
							}
					  };
			},
			PSEUDO: function(e, i) {
				var t,
					a =
						to.pseudos[e] ||
						to.setFilters[e.toLowerCase()] ||
						Jo.error('unsupported pseudo: ' + e);
				return a[yo]
					? a(i)
					: 1 < a.length
					? ((t = [e, e, '', i]),
					  to.setFilters.hasOwnProperty(e.toLowerCase())
							? ei(function(e, t) {
									for (var n, r = a(e, i), o = r.length; o--; )
										e[(n = Do.call(e, r[o]))] = !(t[n] = r[o]);
							  })
							: function(e) {
									return a(e, 0, t);
							  })
					: a;
			}
		},
		pseudos: {
			not: ei(function(e) {
				var r = [],
					o = [],
					u = io(e.replace(Lo, '$1'));
				return u[yo]
					? ei(function(e, t, n, r) {
							for (var o, i = u(e, null, r, []), a = e.length; a--; )
								(o = i[a]) && (e[a] = !(t[a] = o));
					  })
					: function(e, t, n) {
							return (r[0] = e), u(r, null, n, o), !o.pop();
					  };
			}),
			has: ei(function(t) {
				return function(e) {
					return 0 < Jo(t, e).length;
				};
			}),
			contains: ei(function(t) {
				return (
					(t = t.replace(Zo, Jr)),
					function(e) {
						return -1 < (e.textContent || e.innerText || no(e)).indexOf(t);
					}
				);
			}),
			lang: ei(function(n) {
				return (
					jo.test(n || '') || Jo.error('unsupported lang: ' + n),
					(n = n.replace(Zo, Jr).toLowerCase()),
					function(e) {
						var t;
						do {
							if (
								(t = mo
									? e.lang
									: e.getAttribute('xml:lang') || e.getAttribute('lang'))
							)
								return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-');
						} while ((e = e.parentNode) && 1 === e.nodeType);
						return !1;
					}
				);
			}),
			target: function(e) {
				var t = j.window.location && j.window.location.hash;
				return t && t.slice(1) === e.id;
			},
			root: function(e) {
				return e === ho;
			},
			focus: function(e) {
				return (
					e === fo.activeElement &&
					(!fo.hasFocus || fo.hasFocus()) &&
					!!(e.type || e.href || ~e.tabIndex)
				);
			},
			enabled: function(e) {
				return !1 === e.disabled;
			},
			disabled: function(e) {
				return !0 === e.disabled;
			},
			checked: function(e) {
				var t = e.nodeName.toLowerCase();
				return (
					('input' === t && !!e.checked) || ('option' === t && !!e.selected)
				);
			},
			selected: function(e) {
				return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
			},
			empty: function(e) {
				for (e = e.firstChild; e; e = e.nextSibling)
					if (e.nodeType < 6) return !1;
				return !0;
			},
			parent: function(e) {
				return !to.pseudos.empty(e);
			},
			header: function(e) {
				return Wo.test(e.nodeName);
			},
			input: function(e) {
				return $o.test(e.nodeName);
			},
			button: function(e) {
				var t = e.nodeName.toLowerCase();
				return ('input' === t && 'button' === e.type) || 'button' === t;
			},
			text: function(e) {
				var t;
				return (
					'input' === e.nodeName.toLowerCase() &&
					'text' === e.type &&
					(null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
				);
			},
			first: oi(function() {
				return [0];
			}),
			last: oi(function(e, t) {
				return [t - 1];
			}),
			eq: oi(function(e, t, n) {
				return [n < 0 ? n + t : n];
			}),
			even: oi(function(e, t) {
				for (var n = 0; n < t; n += 2) e.push(n);
				return e;
			}),
			odd: oi(function(e, t) {
				for (var n = 1; n < t; n += 2) e.push(n);
				return e;
			}),
			lt: oi(function(e, t, n) {
				for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
				return e;
			}),
			gt: oi(function(e, t, n) {
				for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
				return e;
			})
		}
	}).pseudos.nth = to.pseudos.eq),
	{ radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
		to.pseudos[Qr] = ni(Qr);
	for (Qr in { submit: !0, reset: !0 }) to.pseudos[Qr] = ri(Qr);
	function ai() {}
	function ui(e) {
		for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
		return r;
	}
	function ci(a, e, t) {
		var u = e.dir,
			c = t && 'parentNode' === u,
			s = wo++;
		return e.first
			? function(e, t, n) {
					for (; (e = e[u]); ) if (1 === e.nodeType || c) return a(e, t, n);
			  }
			: function(e, t, n) {
					var r,
						o,
						i = [Co, s];
					if (n) {
						for (; (e = e[u]); )
							if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
					} else
						for (; (e = e[u]); )
							if (1 === e.nodeType || c) {
								if (
									(r = (o = e[yo] || (e[yo] = {}))[u]) &&
									r[0] === Co &&
									r[1] === s
								)
									return (i[2] = r[2]);
								if (((o[u] = i)[2] = a(e, t, n))) return !0;
							}
			  };
	}
	function si(o) {
		return 1 < o.length
			? function(e, t, n) {
					for (var r = o.length; r--; ) if (!o[r](e, t, n)) return !1;
					return !0;
			  }
			: o[0];
	}
	function li(e, t, n, r, o) {
		for (var i, a = [], u = 0, c = e.length, s = null != t; u < c; u++)
			(i = e[u]) && ((n && !n(i, r, o)) || (a.push(i), s && t.push(u)));
		return a;
	}
	function fi(m, g, p, v, y, e) {
		return (
			v && !v[yo] && (v = fi(v)),
			y && !y[yo] && (y = fi(y, e)),
			ei(function(e, t, n, r) {
				var o,
					i,
					a,
					u = [],
					c = [],
					s = t.length,
					l =
						e ||
						(function h(e, t, n) {
							for (var r = 0, o = t.length; r < o; r++) Jo(e, t[r], n);
							return n;
						})(g || '*', n.nodeType ? [n] : n, []),
					f = !m || (!e && g) ? l : li(l, u, m, n, r),
					d = p ? (y || (e ? m : s || v) ? [] : t) : f;
				if ((p && p(f, d, n, r), v))
					for (o = li(d, c), v(o, [], n, r), i = o.length; i--; )
						(a = o[i]) && (d[c[i]] = !(f[c[i]] = a));
				if (e) {
					if (y || m) {
						if (y) {
							for (o = [], i = d.length; i--; )
								(a = d[i]) && o.push((f[i] = a));
							y(null, (d = []), o, r);
						}
						for (i = d.length; i--; )
							(a = d[i]) &&
								-1 < (o = y ? Do.call(e, a) : u[i]) &&
								(e[o] = !(t[o] = a));
					}
				} else (d = li(d === t ? d.splice(s, d.length) : d)), y ? y(null, t, d, r) : Ro.apply(t, d);
			})
		);
	}
	function di(e) {
		for (
			var r,
				t,
				n,
				o = e.length,
				i = to.relative[e[0].type],
				a = i || to.relative[' '],
				u = i ? 1 : 0,
				c = ci(
					function(e) {
						return e === r;
					},
					a,
					!0
				),
				s = ci(
					function(e) {
						return -1 < Do.call(r, e);
					},
					a,
					!0
				),
				l = [
					function(e, t, n) {
						return (
							(!i && (n || t !== uo)) ||
							((r = t).nodeType ? c(e, t, n) : s(e, t, n))
						);
					}
				];
			u < o;
			u++
		)
			if ((t = to.relative[e[u].type])) l = [ci(si(l), t)];
			else {
				if ((t = to.filter[e[u].type].apply(null, e[u].matches))[yo]) {
					for (n = ++u; n < o && !to.relative[e[n].type]; n++);
					return fi(
						1 < u && si(l),
						1 < u &&
							ui(
								e
									.slice(0, u - 1)
									.concat({ value: ' ' === e[u - 2].type ? '*' : '' })
							).replace(Lo, '$1'),
						t,
						u < n && di(e.slice(u, n)),
						n < o && di((e = e.slice(n))),
						n < o && ui(e)
					);
				}
				l.push(t);
			}
		return si(l);
	}
	(ai.prototype = to.filters = to.pseudos),
		(to.setFilters = new ai()),
		(oo = Jo.tokenize = function(e, t) {
			var n,
				r,
				o,
				i,
				a,
				u,
				c,
				s = zo[e + ' '];
			if (s) return t ? 0 : s.slice(0);
			for (a = e, u = [], c = to.preFilter; a; ) {
				for (i in ((n && !(r = Vo.exec(a))) ||
					(r && (a = a.slice(r[0].length) || a), u.push((o = []))),
				(n = !1),
				(r = Io.exec(a)) &&
					((n = r.shift()),
					o.push({ value: n, type: r[0].replace(Lo, ' ') }),
					(a = a.slice(n.length))),
				to.filter))
					to.filter.hasOwnProperty(i) &&
						(!(r = qo[i].exec(a)) ||
							(c[i] && !(r = c[i](r))) ||
							((n = r.shift()),
							o.push({ value: n, type: i, matches: r }),
							(a = a.slice(n.length))));
				if (!n) break;
			}
			return t ? a.length : a ? Jo.error(e) : zo(e, u).slice(0);
		}),
		(io = Jo.compile = function(e, t) {
			var n,
				r = [],
				o = [],
				i = Eo[e + ' '];
			if (!i) {
				for (n = (t = t || oo(e)).length; n--; )
					(i = di(t[n]))[yo] ? r.push(i) : o.push(i);
				(i = Eo(
					e,
					(function a(p, v) {
						function e(e, t, n, r, o) {
							var i,
								a,
								u,
								c = 0,
								s = '0',
								l = e && [],
								f = [],
								d = uo,
								h = e || (b && to.find.TAG('*', o)),
								m = (Co += null == d ? 1 : Math.random() || 0.1),
								g = h.length;
							for (
								o && (uo = t !== fo && t);
								s !== g && null != (i = h[s]);
								s++
							) {
								if (b && i) {
									for (a = 0; (u = p[a++]); )
										if (u(i, t, n)) {
											r.push(i);
											break;
										}
									o && (Co = m);
								}
								y && ((i = !u && i) && c--, e && l.push(i));
							}
							if (((c += s), y && s !== c)) {
								for (a = 0; (u = v[a++]); ) u(l, f, t, n);
								if (e) {
									if (0 < c) for (; s--; ) l[s] || f[s] || (f[s] = Ao.call(r));
									f = li(f);
								}
								Ro.apply(r, f),
									o &&
										!e &&
										0 < f.length &&
										1 < c + v.length &&
										Jo.uniqueSort(r);
							}
							return o && ((Co = m), (uo = d)), l;
						}
						var y = 0 < v.length,
							b = 0 < p.length;
						return y ? ei(e) : e;
					})(o, r)
				)).selector = e;
			}
			return i;
		}),
		(ao = Jo.select = function(e, t, n, r) {
			var o,
				i,
				a,
				u,
				c,
				s = 'function' == typeof e && e,
				l = !r && oo((e = s.selector || e));
			if (((n = n || []), 1 === l.length)) {
				if (
					2 < (i = l[0] = l[0].slice(0)).length &&
					'ID' === (a = i[0]).type &&
					eo.getById &&
					9 === t.nodeType &&
					mo &&
					to.relative[i[1].type]
				) {
					if (!(t = (to.find.ID(a.matches[0].replace(Zo, Jr), t) || [])[0]))
						return n;
					s && (t = t.parentNode), (e = e.slice(i.shift().value.length));
				}
				for (
					o = qo.needsContext.test(e) ? 0 : i.length;
					o-- && ((a = i[o]), !to.relative[(u = a.type)]);

				)
					if (
						(c = to.find[u]) &&
						(r = c(
							a.matches[0].replace(Zo, Jr),
							(Yo.test(i[0].type) && ii(t.parentNode)) || t
						))
					) {
						if ((i.splice(o, 1), !(e = r.length && ui(i))))
							return Ro.apply(n, r), n;
						break;
					}
			}
			return (
				(s || io(e, l))(r, t, !mo, n, (Yo.test(e) && ii(t.parentNode)) || t), n
			);
		}),
		(eo.sortStable =
			yo
				.split('')
				.sort(No)
				.join('') === yo),
		(eo.detectDuplicates = !!so),
		lo(),
		(eo.sortDetached = !0);
	function hi(e) {
		return void 0 !== e;
	}
	function mi(e) {
		return 'string' == typeof e;
	}
	function gi(e, t) {
		var n, r, o;
		for (
			o = (t = t || xi).createElement('div'),
				n = t.createDocumentFragment(),
				o.innerHTML = e;
			(r = o.firstChild);

		)
			n.appendChild(r);
		return n;
	}
	function pi(e, t) {
		return e && t && -1 !== (' ' + e.className + ' ').indexOf(' ' + t + ' ');
	}
	function vi(e, t, n) {
		var r, o;
		return (
			(t = Ii(t)[0]),
			e.each(function() {
				(n && r === this.parentNode) ||
					((r = this.parentNode),
					(o = t.cloneNode(!1)),
					this.parentNode.insertBefore(o, this)),
					o.appendChild(this);
			}),
			e
		);
	}
	function yi(e, t) {
		return new Ii.fn.init(e, t);
	}
	function bi(e) {
		return null === e || e === undefined ? '' : ('' + e).replace(Hi, '');
	}
	function Ci(e, t) {
		var n, r, o, i;
		if (e)
			if ((n = e.length) === undefined) {
				for (r in e)
					if (e.hasOwnProperty(r) && ((i = e[r]), !1 === t.call(i, r, i)))
						break;
			} else for (o = 0; o < n && ((i = e[o]), !1 !== t.call(i, o, i)); o++);
		return e;
	}
	function wi(e, n) {
		var r = [];
		return (
			Ci(e, function(e, t) {
				n(t, e) && r.push(t);
			}),
			r
		);
	}
	var xi = j.document,
		zi = Array.prototype.push,
		Ei = Array.prototype.slice,
		Ni = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
		Si = Gr.Event,
		ki = Zn.makeMap('children,contents,next,prev'),
		Ti = function(e, t, n, r) {
			var o;
			if (mi(t)) t = gi(t, Bi(e[0]));
			else if (t.length && !t.nodeType) {
				if (((t = Ii.makeArray(t)), r))
					for (o = t.length - 1; 0 <= o; o--) Ti(e, t[o], n, r);
				else for (o = 0; o < t.length; o++) Ti(e, t[o], n, r);
				return e;
			}
			if (t.nodeType) for (o = e.length; o--; ) n.call(e[o], t);
			return e;
		},
		Ai = Zn.makeMap(
			'fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom',
			' '
		),
		Mi = Zn.makeMap(
			'checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected',
			' '
		),
		Ri = { for: 'htmlFor', class: 'className', readonly: 'readOnly' },
		_i = { float: 'cssFloat' },
		Di = {},
		Oi = {},
		Hi = /^\s*|\s*$/g,
		Bi = function(e) {
			return e ? (9 === e.nodeType ? e : e.ownerDocument) : xi;
		};
	(yi.fn = yi.prototype = {
		constructor: yi,
		selector: '',
		context: null,
		length: 0,
		init: function(e, t) {
			var n,
				r,
				o = this;
			if (!e) return o;
			if (e.nodeType) return (o.context = o[0] = e), (o.length = 1), o;
			if (t && t.nodeType) o.context = t;
			else {
				if (t) return Ii(e).attr(t);
				o.context = t = j.document;
			}
			if (mi(e)) {
				if (
					!(n =
						'<' === (o.selector = e).charAt(0) &&
						'>' === e.charAt(e.length - 1) &&
						3 <= e.length
							? [null, e, null]
							: Ni.exec(e))
				)
					return Ii(t).find(e);
				if (n[1])
					for (r = gi(e, Bi(t)).firstChild; r; )
						zi.call(o, r), (r = r.nextSibling);
				else {
					if (!(r = Bi(t).getElementById(n[2]))) return o;
					if (r.id !== n[2]) return o.find(e);
					(o.length = 1), (o[0] = r);
				}
			} else this.add(e, !1);
			return o;
		},
		toArray: function() {
			return Zn.toArray(this);
		},
		add: function(e, t) {
			var n, r;
			if (mi(e)) return this.add(Ii(e));
			if (!1 !== t)
				for (
					n = Ii.unique(this.toArray().concat(Ii.makeArray(e))),
						this.length = n.length,
						r = 0;
					r < n.length;
					r++
				)
					this[r] = n[r];
			else zi.apply(this, Ii.makeArray(e));
			return this;
		},
		attr: function(t, n) {
			var e,
				r = this;
			if ('object' == typeof t)
				Ci(t, function(e, t) {
					r.attr(e, t);
				});
			else {
				if (!hi(n)) {
					if (r[0] && 1 === r[0].nodeType) {
						if ((e = Di[t]) && e.get) return e.get(r[0], t);
						if (Mi[t]) return r.prop(t) ? t : undefined;
						null === (n = r[0].getAttribute(t, 2)) && (n = undefined);
					}
					return n;
				}
				this.each(function() {
					var e;
					if (1 === this.nodeType) {
						if ((e = Di[t]) && e.set) return void e.set(this, n);
						null === n
							? this.removeAttribute(t, 2)
							: this.setAttribute(t, n, 2);
					}
				});
			}
			return r;
		},
		removeAttr: function(e) {
			return this.attr(e, null);
		},
		prop: function(e, t) {
			var n = this;
			if ('object' == typeof (e = Ri[e] || e))
				Ci(e, function(e, t) {
					n.prop(e, t);
				});
			else {
				if (!hi(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
				this.each(function() {
					1 === this.nodeType && (this[e] = t);
				});
			}
			return n;
		},
		css: function(n, r) {
			function e(e) {
				return e.replace(/-(\D)/g, function(e, t) {
					return t.toUpperCase();
				});
			}
			function o(e) {
				return e.replace(/[A-Z]/g, function(e) {
					return '-' + e;
				});
			}
			var t,
				i,
				a = this;
			if ('object' == typeof n)
				Ci(n, function(e, t) {
					a.css(e, t);
				});
			else if (hi(r))
				(n = e(n)),
					'number' != typeof r || Ai[n] || (r = r.toString() + 'px'),
					a.each(function() {
						var e = this.style;
						if ((i = Oi[n]) && i.set) i.set(this, r);
						else {
							try {
								this.style[_i[n] || n] = r;
							} catch (t) {}
							(null !== r && '' !== r) ||
								(e.removeProperty
									? e.removeProperty(o(n))
									: e.removeAttribute(n));
						}
					});
			else {
				if (((t = a[0]), (i = Oi[n]) && i.get)) return i.get(t);
				if (!t.ownerDocument.defaultView)
					return t.currentStyle ? t.currentStyle[e(n)] : '';
				try {
					return t.ownerDocument.defaultView
						.getComputedStyle(t, null)
						.getPropertyValue(o(n));
				} catch (u) {
					return undefined;
				}
			}
			return a;
		},
		remove: function() {
			for (var e, t = this.length; t--; )
				(e = this[t]), Si.clean(e), e.parentNode && e.parentNode.removeChild(e);
			return this;
		},
		empty: function() {
			for (var e, t = this.length; t--; )
				for (e = this[t]; e.firstChild; ) e.removeChild(e.firstChild);
			return this;
		},
		html: function(e) {
			var t,
				n = this;
			if (hi(e)) {
				t = n.length;
				try {
					for (; t--; ) n[t].innerHTML = e;
				} catch (r) {
					Ii(n[t])
						.empty()
						.append(e);
				}
				return n;
			}
			return n[0] ? n[0].innerHTML : '';
		},
		text: function(e) {
			var t;
			if (hi(e)) {
				for (t = this.length; t--; )
					'innerText' in this[t]
						? (this[t].innerText = e)
						: (this[0].textContent = e);
				return this;
			}
			return this[0] ? this[0].innerText || this[0].textContent : '';
		},
		append: function() {
			return Ti(this, arguments, function(e) {
				(1 === this.nodeType || (this.host && 1 === this.host.nodeType)) &&
					this.appendChild(e);
			});
		},
		prepend: function() {
			return Ti(
				this,
				arguments,
				function(e) {
					(1 === this.nodeType || (this.host && 1 === this.host.nodeType)) &&
						this.insertBefore(e, this.firstChild);
				},
				!0
			);
		},
		before: function() {
			return this[0] && this[0].parentNode
				? Ti(this, arguments, function(e) {
						this.parentNode.insertBefore(e, this);
				  })
				: this;
		},
		after: function() {
			return this[0] && this[0].parentNode
				? Ti(
						this,
						arguments,
						function(e) {
							this.parentNode.insertBefore(e, this.nextSibling);
						},
						!0
				  )
				: this;
		},
		appendTo: function(e) {
			return Ii(e).append(this), this;
		},
		prependTo: function(e) {
			return Ii(e).prepend(this), this;
		},
		replaceWith: function(e) {
			return this.before(e).remove();
		},
		wrap: function(e) {
			return vi(this, e);
		},
		wrapAll: function(e) {
			return vi(this, e, !0);
		},
		wrapInner: function(e) {
			return (
				this.each(function() {
					Ii(this)
						.contents()
						.wrapAll(e);
				}),
				this
			);
		},
		unwrap: function() {
			return this.parent().each(function() {
				Ii(this).replaceWith(this.childNodes);
			});
		},
		clone: function() {
			var e = [];
			return (
				this.each(function() {
					e.push(this.cloneNode(!0));
				}),
				Ii(e)
			);
		},
		addClass: function(e) {
			return this.toggleClass(e, !0);
		},
		removeClass: function(e) {
			return this.toggleClass(e, !1);
		},
		toggleClass: function(o, i) {
			var e = this;
			return (
				'string' != typeof o ||
					(-1 !== o.indexOf(' ')
						? Ci(o.split(' '), function() {
								e.toggleClass(this, i);
						  })
						: e.each(function(e, t) {
								var n, r;
								(r = pi(t, o)) !== i &&
									((n = t.className),
									r
										? (t.className = bi(
												(' ' + n + ' ').replace(' ' + o + ' ', ' ')
										  ))
										: (t.className += n ? ' ' + o : o));
						  })),
				e
			);
		},
		hasClass: function(e) {
			return pi(this[0], e);
		},
		each: function(e) {
			return Ci(this, e);
		},
		on: function(e, t) {
			return this.each(function() {
				Si.bind(this, e, t);
			});
		},
		off: function(e, t) {
			return this.each(function() {
				Si.unbind(this, e, t);
			});
		},
		trigger: function(e) {
			return this.each(function() {
				'object' == typeof e ? Si.fire(this, e.type, e) : Si.fire(this, e);
			});
		},
		show: function() {
			return this.css('display', '');
		},
		hide: function() {
			return this.css('display', 'none');
		},
		slice: function() {
			return new Ii(Ei.apply(this, arguments));
		},
		eq: function(e) {
			return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
		},
		first: function() {
			return this.eq(0);
		},
		last: function() {
			return this.eq(-1);
		},
		find: function(e) {
			var t,
				n,
				r = [];
			for (t = 0, n = this.length; t < n; t++) Ii.find(e, this[t], r);
			return Ii(r);
		},
		filter: function(n) {
			return Ii(
				'function' == typeof n
					? wi(this.toArray(), function(e, t) {
							return n(t, e);
					  })
					: Ii.filter(n, this.toArray())
			);
		},
		closest: function(n) {
			var r = [];
			return (
				n instanceof Ii && (n = n[0]),
				this.each(function(e, t) {
					for (; t; ) {
						if ('string' == typeof n && Ii(t).is(n)) {
							r.push(t);
							break;
						}
						if (t === n) {
							r.push(t);
							break;
						}
						t = t.parentNode;
					}
				}),
				Ii(r)
			);
		},
		offset: function(e) {
			var t,
				n,
				r,
				o,
				i = 0,
				a = 0;
			return e
				? this.css(e)
				: ((t = this[0]) &&
						((r = (n = t.ownerDocument).documentElement),
						t.getBoundingClientRect &&
							((i =
								(o = t.getBoundingClientRect()).left +
								(r.scrollLeft || n.body.scrollLeft) -
								r.clientLeft),
							(a = o.top + (r.scrollTop || n.body.scrollTop) - r.clientTop))),
				  { left: i, top: a });
		},
		push: zi,
		sort: Array.prototype.sort,
		splice: Array.prototype.splice
	}),
		Zn.extend(yi, {
			extend: Zn.extend,
			makeArray: function(e) {
				return (function(e) {
					return e && e === e.window;
				})(e) || e.nodeType
					? [e]
					: Zn.toArray(e);
			},
			inArray: function(e, t) {
				var n;
				if (t.indexOf) return t.indexOf(e);
				for (n = t.length; n--; ) if (t[n] === e) return n;
				return -1;
			},
			isArray: Zn.isArray,
			each: Ci,
			trim: bi,
			grep: wi,
			find: Jo,
			expr: Jo.selectors,
			unique: Jo.uniqueSort,
			text: Jo.getText,
			contains: Jo.contains,
			filter: function(e, t, n) {
				var r = t.length;
				for (n && (e = ':not(' + e + ')'); r--; )
					1 !== t[r].nodeType && t.splice(r, 1);
				return (t =
					1 === t.length
						? Ii.find.matchesSelector(t[0], e)
							? [t[0]]
							: []
						: Ii.find.matches(e, t));
			}
		});
	function Pi(e, t, n) {
		var r = [],
			o = e[t];
		for (
			'string' != typeof n && n instanceof Ii && (n = n[0]);
			o && 9 !== o.nodeType;

		) {
			if (n !== undefined) {
				if (o === n) break;
				if ('string' == typeof n && Ii(o).is(n)) break;
			}
			1 === o.nodeType && r.push(o), (o = o[t]);
		}
		return r;
	}
	function Li(e, t, n, r) {
		var o = [];
		for (r instanceof Ii && (r = r[0]); e; e = e[t])
			if (!n || e.nodeType === n) {
				if (r !== undefined) {
					if (e === r) break;
					if ('string' == typeof r && Ii(e).is(r)) break;
				}
				o.push(e);
			}
		return o;
	}
	function Vi(e, t, n) {
		for (e = e[t]; e; e = e[t]) if (e.nodeType === n) return e;
		return null;
	}
	Ci(
		{
			parent: function(e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null;
			},
			parents: function(e) {
				return Pi(e, 'parentNode');
			},
			next: function(e) {
				return Vi(e, 'nextSibling', 1);
			},
			prev: function(e) {
				return Vi(e, 'previousSibling', 1);
			},
			children: function(e) {
				return Li(e.firstChild, 'nextSibling', 1);
			},
			contents: function(e) {
				return Zn.toArray(
					('iframe' === e.nodeName
						? e.contentDocument || e.contentWindow.document
						: e
					).childNodes
				);
			}
		},
		function(r, o) {
			yi.fn[r] = function(t) {
				var n = [];
				this.each(function() {
					var e = o.call(n, this, t, n);
					e && (Ii.isArray(e) ? n.push.apply(n, e) : n.push(e));
				}),
					1 < this.length &&
						(ki[r] || (n = Ii.unique(n)),
						0 === r.indexOf('parents') && (n = n.reverse()));
				var e = Ii(n);
				return t ? e.filter(t) : e;
			};
		}
	),
		Ci(
			{
				parentsUntil: function(e, t) {
					return Pi(e, 'parentNode', t);
				},
				nextUntil: function(e, t) {
					return Li(e, 'nextSibling', 1, t).slice(1);
				},
				prevUntil: function(e, t) {
					return Li(e, 'previousSibling', 1, t).slice(1);
				}
			},
			function(o, i) {
				yi.fn[o] = function(t, e) {
					var n = [];
					this.each(function() {
						var e = i.call(n, this, t, n);
						e && (Ii.isArray(e) ? n.push.apply(n, e) : n.push(e));
					}),
						1 < this.length &&
							((n = Ii.unique(n)),
							(0 !== o.indexOf('parents') && 'prevUntil' !== o) ||
								(n = n.reverse()));
					var r = Ii(n);
					return e ? r.filter(e) : r;
				};
			}
		),
		(yi.fn.is = function(e) {
			return !!e && 0 < this.filter(e).length;
		}),
		(yi.fn.init.prototype = yi.fn),
		(yi.overrideDefaults = function(n) {
			var r,
				o = function(e, t) {
					return (
						(r = r || n()),
						0 === arguments.length && (e = r.element),
						(t = t || r.context),
						new o.fn.init(e, t)
					);
				};
			return Ii.extend(o, this), o;
		}),
		(yi.attrHooks = Di),
		(yi.cssHooks = Oi);
	var Ii = yi,
		Fi =
			((Ui.prototype.current = function() {
				return this.node;
			}),
			(Ui.prototype.next = function(e) {
				return (
					(this.node = this.findSibling(
						this.node,
						'firstChild',
						'nextSibling',
						e
					)),
					this.node
				);
			}),
			(Ui.prototype.prev = function(e) {
				return (
					(this.node = this.findSibling(
						this.node,
						'lastChild',
						'previousSibling',
						e
					)),
					this.node
				);
			}),
			(Ui.prototype.prev2 = function(e) {
				return (
					(this.node = this.findPreviousNode(
						this.node,
						'lastChild',
						'previousSibling',
						e
					)),
					this.node
				);
			}),
			(Ui.prototype.findSibling = function(e, t, n, r) {
				var o, i;
				if (e) {
					if (!r && e[t]) return e[t];
					if (e !== this.rootNode) {
						if ((o = e[n])) return o;
						for (i = e.parentNode; i && i !== this.rootNode; i = i.parentNode)
							if ((o = i[n])) return o;
					}
				}
			}),
			(Ui.prototype.findPreviousNode = function(e, t, n, r) {
				var o, i, a;
				if (e) {
					if (((o = e[n]), this.rootNode && o === this.rootNode)) return;
					if (o) {
						if (!r) for (a = o[t]; a; a = a[t]) if (!a[t]) return a;
						return o;
					}
					if ((i = e.parentNode) && i !== this.rootNode) return i;
				}
			}),
			Ui);
	function Ui(e, t) {
		(this.node = e),
			(this.rootNode = t),
			(this.current = this.current.bind(this)),
			(this.next = this.next.bind(this)),
			(this.prev = this.prev.bind(this)),
			(this.prev2 = this.prev2.bind(this));
	}
	var ji,
		qi = Zn.each,
		$i = Zn.grep,
		Wi = Wn.ie,
		Ki = /^([a-z0-9],?)+$/i,
		Xi = /^[ \t\r\n]*$/,
		Yi = function(n, r, o) {
			var i = r.keep_values,
				e = {
					set: function(e, t, n) {
						r.url_converter &&
							(t = r.url_converter.call(
								r.url_converter_scope || o(),
								t,
								n,
								e[0]
							)),
							e.attr('data-mce-' + n, t).attr(n, t);
					},
					get: function(e, t) {
						return e.attr('data-mce-' + t) || e.attr(t);
					}
				},
				t = {
					style: {
						set: function(e, t) {
							null === t || 'object' != typeof t
								? (i && e.attr('data-mce-style', t),
								  null !== t && 'string' == typeof t
										? (e.removeAttr('style'), e.css(n.parse(t)))
										: e.attr('style', t))
								: e.css(t);
						},
						get: function(e) {
							var t = e.attr('data-mce-style') || e.attr('style');
							return (t = n.serialize(n.parse(t), e[0].nodeName));
						}
					}
				};
			return i && (t.href = t.src = e), t;
		},
		Gi = function(e, t) {
			var n = t.attr('style'),
				r = e.serialize(e.parse(n), t[0].nodeName);
			(r = r || null), t.attr('data-mce-style', r);
		},
		Zi = function(e, t) {
			var n,
				r,
				o = 0;
			if (e)
				for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling)
					(r = e.nodeType),
						(!t || 3 !== r || (r !== n && e.nodeValue.length)) &&
							(o++, (n = r));
			return o;
		};
	function Ji(a, u) {
		var c,
			s = this;
		void 0 === u && (u = {});
		function l(e) {
			if (e && a && 'string' == typeof e) {
				var t = a.getElementById(e);
				return t && t.id !== e ? a.getElementsByName(e)[1] : t;
			}
			return e;
		}
		function f(e) {
			return 'string' == typeof e && (e = l(e)), B(e);
		}
		function r(e, t, n) {
			var r,
				o,
				i = f(e);
			return (
				i.length && (o = (r = c[t]) && r.get ? r.get(i, t) : i.attr(t)),
				void 0 === o && (o = n || ''),
				o
			);
		}
		function d(e) {
			var t = l(e);
			return t ? t.attributes : [];
		}
		function o(e, t, n) {
			var r, o;
			'' === n && (n = null);
			var i = f(e);
			(r = i.attr(t)),
				i.length &&
					((o = c[t]) && o.set ? o.set(i, n, t) : i.attr(t, n),
					r !== n &&
						u.onSetAttrib &&
						u.onSetAttrib({ attrElm: i, attrName: t, attrValue: n }));
		}
		function h() {
			return u.root_element || a.body;
		}
		function i(e, t) {
			return rn.getPos(a.body, l(e), t);
		}
		function m(e, t, n) {
			var r = f(e);
			return n
				? r.css(t)
				: ('float' ===
						(t = t.replace(/-(\D)/g, function(e, t) {
							return t.toUpperCase();
						})) && (t = Wn.browser.isIE() ? 'styleFloat' : 'cssFloat'),
				  r[0] && r[0].style ? r[0].style[t] : undefined);
		}
		function g(e) {
			var t, n;
			return (
				(e = l(e)),
				(t = m(e, 'width')),
				(n = m(e, 'height')),
				-1 === t.indexOf('px') && (t = 0),
				-1 === n.indexOf('px') && (n = 0),
				{
					w: parseInt(t, 10) || e.offsetWidth || e.clientWidth,
					h: parseInt(n, 10) || e.offsetHeight || e.clientHeight
				}
			);
		}
		function p(e, t) {
			var n;
			if (!e) return !1;
			if (!Array.isArray(e)) {
				if ('*' === t) return 1 === e.nodeType;
				if (Ki.test(t)) {
					var r = t.toLowerCase().split(/,/),
						o = e.nodeName.toLowerCase();
					for (n = r.length - 1; 0 <= n; n--) if (r[n] === o) return !0;
					return !1;
				}
				if (e.nodeType && 1 !== e.nodeType) return !1;
			}
			var i = Array.isArray(e) ? e : [e];
			return 0 < Jo(t, i[0].ownerDocument || i[0], null, i).length;
		}
		function v(e, t, n, r) {
			var o,
				i = [],
				a = l(e);
			for (
				r = r === undefined,
					n = n || ('BODY' !== h().nodeName ? h().parentNode : null),
					Zn.is(t, 'string') &&
						(t =
							'*' === (o = t)
								? function(e) {
										return 1 === e.nodeType;
								  }
								: function(e) {
										return p(e, o);
								  });
				a && a !== n && a.nodeType && 9 !== a.nodeType;

			) {
				if (!t || ('function' == typeof t && t(a))) {
					if (!r) return [a];
					i.push(a);
				}
				a = a.parentNode;
			}
			return r ? i : null;
		}
		function n(e, t, n) {
			var r = t;
			if (e)
				for (
					'string' == typeof t &&
						(r = function(e) {
							return p(e, t);
						}),
						e = e[n];
					e;
					e = e[n]
				)
					if ('function' == typeof r && r(e)) return e;
			return null;
		}
		function y(e, n, r) {
			var o,
				t = 'string' == typeof e ? l(e) : e;
			if (!t) return !1;
			if (Zn.isArray(t) && (t.length || 0 === t.length))
				return (
					(o = []),
					qi(t, function(e, t) {
						e && ('string' == typeof e && (e = l(e)), o.push(n.call(r, e, t)));
					}),
					o
				);
			var i = r || s;
			return n.call(i, t);
		}
		function b(e, t) {
			f(e).each(function(e, n) {
				qi(t, function(e, t) {
					o(n, t, e);
				});
			});
		}
		function C(e, r) {
			var t = f(e);
			Wi
				? t.each(function(e, t) {
						if (!1 !== t.canHaveHTML) {
							for (; t.firstChild; ) t.removeChild(t.firstChild);
							try {
								(t.innerHTML = '<br>' + r), t.removeChild(t.firstChild);
							} catch (n) {
								Ii('<div></div>')
									.html('<br>' + r)
									.contents()
									.slice(1)
									.appendTo(t);
							}
							return r;
						}
				  })
				: t.html(r);
		}
		function w(e, n, r, o, i) {
			return y(e, function(e) {
				var t = 'string' == typeof n ? a.createElement(n) : n;
				return (
					b(t, r),
					o &&
						('string' != typeof o && o.nodeType
							? t.appendChild(o)
							: 'string' == typeof o && C(t, o)),
					i ? t : e.appendChild(t)
				);
			});
		}
		function x(e, t, n) {
			return w(a.createElement(e), e, t, n, !0);
		}
		function z(e, t) {
			var n = f(e);
			return (
				t
					? n
							.each(function() {
								for (var e; (e = this.firstChild); )
									3 === e.nodeType && 0 === e.data.length
										? this.removeChild(e)
										: this.parentNode.insertBefore(e, this);
							})
							.remove()
					: n.remove(),
				1 < n.length ? n.toArray() : n[0]
			);
		}
		function E(e, t, n) {
			f(e)
				.toggleClass(t, n)
				.each(function() {
					'' === this.className && Ii(this).attr('class', null);
				});
		}
		function N(t, e, n) {
			return y(e, function(e) {
				return (
					Zn.is(e, 'array') && (t = t.cloneNode(!0)),
					n &&
						qi($i(e.childNodes), function(e) {
							t.appendChild(e);
						}),
					e.parentNode.replaceChild(t, e)
				);
			});
		}
		function S() {
			return a.createRange();
		}
		function k(e) {
			if (e && Qt.isElement(e)) {
				var t = e.getAttribute('data-mce-contenteditable');
				return t && 'inherit' !== t
					? t
					: 'inherit' !== e.contentEditable
					? e.contentEditable
					: null;
			}
			return null;
		}
		var T = {},
			A = j.window,
			M = {},
			t = 0,
			e = (function U(m, g) {
				void 0 === g && (g = {});
				var p,
					v = 0,
					y = {};
				function b(e) {
					m.getElementsByTagName('head')[0].appendChild(e);
				}
				function n(e, t, n) {
					function r(e) {
						(l.status = e),
							(l.passed = []),
							(l.failed = []),
							u && ((u.onload = null), (u.onerror = null), (u = null));
					}
					function o() {
						for (var e = l.passed, t = e.length; t--; ) e[t]();
						r(2);
					}
					function i() {
						for (var e = l.failed, t = e.length; t--; ) e[t]();
						r(3);
					}
					function a(e, t) {
						e() || (new Date().getTime() - s < p ? Pn.setTimeout(t) : i());
					}
					var u,
						c,
						s,
						l,
						f = function() {
							a(function() {
								for (var e, t, n = m.styleSheets, r = n.length; r--; )
									if (
										(t = (e = n[r]).ownerNode
											? e.ownerNode
											: e.owningElement) &&
										t.id === u.id
									)
										return o(), !0;
							}, f);
						},
						d = function() {
							a(function() {
								try {
									var e = c.sheet.cssRules;
									return o(), !!e;
								} catch (t) {}
							}, d);
						};
					if (
						((e = Zn._addCacheSuffix(e)),
						y[e] ? (l = y[e]) : ((l = { passed: [], failed: [] }), (y[e] = l)),
						t && l.passed.push(t),
						n && l.failed.push(n),
						1 !== l.status)
					)
						if (2 !== l.status)
							if (3 !== l.status) {
								if (
									((l.status = 1),
									((u = m.createElement('link')).rel = 'stylesheet'),
									(u.type = 'text/css'),
									(u.id = 'u' + v++),
									(u.async = !1),
									(u.defer = !1),
									(s = new Date().getTime()),
									g.contentCssCors && (u.crossOrigin = 'anonymous'),
									g.referrerPolicy &&
										en(it.fromDom(u), 'referrerpolicy', g.referrerPolicy),
									'onload' in u &&
										!(
											(h = j.navigator.userAgent.match(/WebKit\/(\d*)/)) &&
											parseInt(h[1], 10) < 536
										))
								)
									(u.onload = f), (u.onerror = i);
								else {
									if (0 < j.navigator.userAgent.indexOf('Firefox'))
										return (
											((c = m.createElement('style')).textContent =
												'@import "' + e + '"'),
											d(),
											void b(c)
										);
									f();
								}
								var h;
								b(u), (u.href = e);
							} else i();
						else o();
				}
				function t(t) {
					return pn.nu(function(e) {
						n(t, q(e, $(Cn.value(t))), q(e, $(Cn.error(t))));
					});
				}
				function o(e) {
					return e.fold(W, W);
				}
				return (
					(p = g.maxLoadTime || 5e3),
					{
						load: n,
						loadAll: function(e, n, r) {
							vn(X(e, t)).get(function(e) {
								var t = Y(e, function(e) {
									return e.isValue();
								});
								0 < t.fail.length ? r(t.fail.map(o)) : n(t.pass.map(o));
							});
						},
						_setReferrerPolicy: function(e) {
							g.referrerPolicy = e;
						}
					}
				);
			})(a, {
				contentCssCors: u.contentCssCors,
				referrerPolicy: u.referrerPolicy
			}),
			R = [],
			_ = u.schema ? u.schema : Pr({}),
			D = $r(
				{
					url_converter: u.url_converter,
					url_converter_scope: u.url_converter_scope
				},
				u.schema
			),
			O = u.ownEvents ? new Gr() : Gr.Event,
			H = _.getBlockElements(),
			B = Ii.overrideDefaults(function() {
				return { context: a, element: F.getRoot() };
			}),
			P = Sr.decode,
			L = Sr.encodeAllRaw,
			V = function(e, t, n, r) {
				if (Zn.isArray(e)) {
					for (var o = e.length, i = []; o--; ) i[o] = V(e[o], t, n, r);
					return i;
				}
				return (
					!u.collect || (e !== a && e !== A) || R.push([e, t, n, r]),
					O.bind(e, t, n, r || F)
				);
			},
			I = function(e, t, n) {
				var r;
				if (Zn.isArray(e)) {
					r = e.length;
					for (var o = []; r--; ) o[r] = I(e[r], t, n);
					return o;
				}
				if (R && (e === a || e === A))
					for (r = R.length; r--; ) {
						var i = R[r];
						e !== i[0] ||
							(t && t !== i[1]) ||
							(n && n !== i[2]) ||
							O.unbind(i[0], i[1], i[2]);
					}
				return O.unbind(e, t, n);
			},
			F = {
				doc: a,
				settings: u,
				win: A,
				files: M,
				stdMode: !0,
				boxModel: !0,
				styleSheetLoader: e,
				boundEvents: R,
				styles: D,
				schema: _,
				events: O,
				isBlock: function(e) {
					if ('string' == typeof e) return !!H[e];
					if (e) {
						var t = e.nodeType;
						if (t) return !(1 !== t || !H[e.nodeName]);
					}
					return !1;
				},
				$: B,
				$$: f,
				root: null,
				clone: function(t, e) {
					if (!Wi || 1 !== t.nodeType || e) return t.cloneNode(e);
					if (e) return null;
					var n = a.createElement(t.nodeName);
					return (
						qi(d(t), function(e) {
							o(n, e.nodeName, r(t, e.nodeName));
						}),
						n
					);
				},
				getRoot: h,
				getViewPort: function(e) {
					var t = jt(e);
					return { x: t.x(), y: t.y(), w: t.width(), h: t.height() };
				},
				getRect: function(e) {
					var t, n;
					return (
						(e = l(e)),
						(t = i(e)),
						(n = g(e)),
						{ x: t.x, y: t.y, w: n.w, h: n.h }
					);
				},
				getSize: g,
				getParent: function(e, t, n) {
					var r = v(e, t, n, !1);
					return r && 0 < r.length ? r[0] : null;
				},
				getParents: v,
				get: l,
				getNext: function(e, t) {
					return n(e, t, 'nextSibling');
				},
				getPrev: function(e, t) {
					return n(e, t, 'previousSibling');
				},
				select: function(e, t) {
					return Jo(e, l(t) || u.root_element || a, []);
				},
				is: p,
				add: w,
				create: x,
				createHTML: function(e, t, n) {
					var r,
						o = '';
					for (r in ((o += '<' + e), t))
						t.hasOwnProperty(r) &&
							null !== t[r] &&
							'undefined' != typeof t[r] &&
							(o += ' ' + r + '="' + L(t[r]) + '"');
					return void 0 !== n ? o + '>' + n + '</' + e + '>' : o + ' />';
				},
				createFragment: function(e) {
					var t,
						n = a.createElement('div'),
						r = a.createDocumentFragment();
					for (e && (n.innerHTML = e); (t = n.firstChild); ) r.appendChild(t);
					return r;
				},
				remove: z,
				setStyle: function(e, t, n) {
					var r = K(t) ? f(e).css(t, n) : f(e).css(t);
					u.update_styles && Gi(D, r);
				},
				getStyle: m,
				setStyles: function(e, t) {
					var n = f(e).css(t);
					u.update_styles && Gi(D, n);
				},
				removeAllAttribs: function(e) {
					return y(e, function(e) {
						var t,
							n = e.attributes;
						for (t = n.length - 1; 0 <= t; t--)
							e.removeAttributeNode(n.item(t));
					});
				},
				setAttrib: o,
				setAttribs: b,
				getAttrib: r,
				getPos: i,
				parseStyle: function(e) {
					return D.parse(e);
				},
				serializeStyle: function(e, t) {
					return D.serialize(e, t);
				},
				addStyle: function(e) {
					var t, n;
					if (F !== Ji.DOM && a === j.document) {
						if (T[e]) return;
						T[e] = !0;
					}
					(n = a.getElementById('mceDefaultStyles')) ||
						(((n = a.createElement('style')).id = 'mceDefaultStyles'),
						(n.type = 'text/css'),
						(t = a.getElementsByTagName('head')[0]).firstChild
							? t.insertBefore(n, t.firstChild)
							: t.appendChild(n)),
						n.styleSheet
							? (n.styleSheet.cssText += e)
							: n.appendChild(a.createTextNode(e));
				},
				loadCSS: function(e) {
					var n;
					F === Ji.DOM || a !== j.document
						? ((e = e || ''),
						  (n = a.getElementsByTagName('head')[0]),
						  qi(e.split(','), function(e) {
								var t;
								(e = Zn._addCacheSuffix(e)),
									M[e] ||
										((M[e] = !0),
										(t = x(
											'link',
											te(
												te(
													{ rel: 'stylesheet', type: 'text/css', href: e },
													u.contentCssCors ? { crossOrigin: 'anonymous' } : {}
												),
												u.referrerPolicy
													? { referrerPolicy: u.referrerPolicy }
													: {}
											)
										)),
										n.appendChild(t));
						  }))
						: Ji.DOM.loadCSS(e);
				},
				addClass: function(e, t) {
					f(e).addClass(t);
				},
				removeClass: function(e, t) {
					E(e, t, !1);
				},
				hasClass: function(e, t) {
					return f(e).hasClass(t);
				},
				toggleClass: E,
				show: function(e) {
					f(e).show();
				},
				hide: function(e) {
					f(e).hide();
				},
				isHidden: function(e) {
					return 'none' === f(e).css('display');
				},
				uniqueId: function(e) {
					return (e || 'mce_') + t++;
				},
				setHTML: C,
				getOuterHTML: function(e) {
					var t = 'string' == typeof e ? l(e) : e;
					return Qt.isElement(t)
						? t.outerHTML
						: Ii('<div></div>')
								.append(Ii(t).clone())
								.html();
				},
				setOuterHTML: function(e, t) {
					f(e).each(function() {
						try {
							if ('outerHTML' in this) return void (this.outerHTML = t);
						} catch (e) {}
						z(Ii(this).html(t), !0);
					});
				},
				decode: P,
				encode: L,
				insertAfter: function(e, t) {
					var r = l(t);
					return y(e, function(e) {
						var t, n;
						return (
							(t = r.parentNode),
							(n = r.nextSibling) ? t.insertBefore(e, n) : t.appendChild(e),
							e
						);
					});
				},
				replace: N,
				rename: function(t, e) {
					var n;
					return (
						t.nodeName !== e.toUpperCase() &&
							((n = x(e)),
							qi(d(t), function(e) {
								o(n, e.nodeName, r(t, e.nodeName));
							}),
							N(n, t, !0)),
						n || t
					);
				},
				findCommonAncestor: function(e, t) {
					for (var n, r = e; r; ) {
						for (n = t; n && r !== n; ) n = n.parentNode;
						if (r === n) break;
						r = r.parentNode;
					}
					return !r && e.ownerDocument ? e.ownerDocument.documentElement : r;
				},
				toHex: function(e) {
					return D.toHex(Zn.trim(e));
				},
				run: y,
				getAttribs: d,
				isEmpty: function(e, t) {
					var n,
						r,
						o,
						i,
						a = 0;
					if ((e = e.firstChild)) {
						var u = new Fi(e, e.parentNode),
							c = _ ? _.getWhiteSpaceElements() : {};
						t = t || (_ ? _.getNonEmptyElements() : null);
						do {
							if (((o = e.nodeType), Qt.isElement(e))) {
								var s = e.getAttribute('data-mce-bogus');
								if (s) {
									e = u.next('all' === s);
									continue;
								}
								if (((i = e.nodeName.toLowerCase()), t && t[i])) {
									if ('br' !== i) return !1;
									a++, (e = u.next());
									continue;
								}
								for (n = (r = d(e)).length; n--; )
									if (
										'name' === (i = r[n].nodeName) ||
										'data-mce-bookmark' === i
									)
										return !1;
							}
							if (8 === o) return !1;
							if (3 === o && !Xi.test(e.nodeValue)) return !1;
							if (
								3 === o &&
								e.parentNode &&
								c[e.parentNode.nodeName] &&
								Xi.test(e.nodeValue)
							)
								return !1;
							e = u.next();
						} while (e);
					}
					return a <= 1;
				},
				createRng: S,
				nodeIndex: Zi,
				split: function(e, t, n) {
					var r,
						o,
						i,
						a = S();
					if (e && t)
						return (
							a.setStart(e.parentNode, Zi(e)),
							a.setEnd(t.parentNode, Zi(t)),
							(r = a.extractContents()),
							(a = S()).setStart(t.parentNode, Zi(t) + 1),
							a.setEnd(e.parentNode, Zi(e) + 1),
							(o = a.extractContents()),
							(i = e.parentNode).insertBefore(gr.trimNode(F, r), e),
							n ? i.insertBefore(n, e) : i.insertBefore(t, e),
							i.insertBefore(gr.trimNode(F, o), e),
							z(e),
							n || t
						);
				},
				bind: V,
				unbind: I,
				fire: function(e, t, n) {
					return O.fire(e, t, n);
				},
				getContentEditable: k,
				getContentEditableParent: function(e) {
					for (
						var t = h(), n = null;
						e && e !== t && null === (n = k(e));
						e = e.parentNode
					);
					return n;
				},
				destroy: function() {
					if (R)
						for (var e = R.length; e--; ) {
							var t = R[e];
							O.unbind(t[0], t[1], t[2]);
						}
					Jo.setDocument && Jo.setDocument();
				},
				isChildOf: function(e, t) {
					for (; e; ) {
						if (t === e) return !0;
						e = e.parentNode;
					}
					return !1;
				},
				dumpRng: function(e) {
					return (
						'startContainer: ' +
						e.startContainer.nodeName +
						', startOffset: ' +
						e.startOffset +
						', endContainer: ' +
						e.endContainer.nodeName +
						', endOffset: ' +
						e.endOffset
					);
				}
			};
		return (
			(c = Yi(D, u, function() {
				return F;
			})),
			F
		);
	}
	((ji = Ji = Ji || {}).DOM = ji(j.document)), (ji.nodeIndex = Zi);
	var Qi = Ji,
		ea = Qi.DOM,
		ta = Zn.each,
		na = Zn.grep,
		ra =
			((oa.prototype._setReferrerPolicy = function(e) {
				this.settings.referrerPolicy = e;
			}),
			(oa.prototype.loadScript = function(e, t, n) {
				var r,
					o,
					i = ea;
				(o = i.uniqueId()),
					((r = j.document.createElement('script')).id = o),
					(r.type = 'text/javascript'),
					(r.src = Zn._addCacheSuffix(e)),
					this.settings.referrerPolicy &&
						i.setAttrib(r, 'referrerpolicy', this.settings.referrerPolicy),
					(r.onload = function() {
						i.remove(o), r && (r.onreadystatechange = r.onload = r = null), t();
					}),
					(r.onerror = function() {
						B(n)
							? n()
							: 'undefined' != typeof j.console &&
							  j.console.log &&
							  j.console.log('Failed to load script: ' + e);
					}),
					(
						j.document.getElementsByTagName('head')[0] || j.document.body
					).appendChild(r);
			}),
			(oa.prototype.isDone = function(e) {
				return 2 === this.states[e];
			}),
			(oa.prototype.markDone = function(e) {
				this.states[e] = 2;
			}),
			(oa.prototype.add = function(e, t, n, r) {
				this.states[e] === undefined &&
					(this.queue.push(e), (this.states[e] = 0)),
					t &&
						(this.scriptLoadedCallbacks[e] ||
							(this.scriptLoadedCallbacks[e] = []),
						this.scriptLoadedCallbacks[e].push({
							success: t,
							failure: r,
							scope: n || this
						}));
			}),
			(oa.prototype.load = function(e, t, n, r) {
				return this.add(e, t, n, r);
			}),
			(oa.prototype.remove = function(e) {
				delete this.states[e], delete this.scriptLoadedCallbacks[e];
			}),
			(oa.prototype.loadQueue = function(e, t, n) {
				this.loadScripts(this.queue, e, t, n);
			}),
			(oa.prototype.loadScripts = function(n, e, t, r) {
				function o(t, e) {
					ta(a.scriptLoadedCallbacks[e], function(e) {
						B(e[t]) && e[t].call(e.scope);
					}),
						(a.scriptLoadedCallbacks[e] = undefined);
				}
				var i,
					a = this,
					u = [];
				a.queueLoadedCallbacks.push({
					success: e,
					failure: r,
					scope: t || this
				}),
					(i = function() {
						var e = na(n);
						if (
							((n.length = 0),
							ta(e, function(e) {
								2 !== a.states[e]
									? 3 !== a.states[e]
										? 1 !== a.states[e] &&
										  ((a.states[e] = 1),
										  a.loading++,
										  a.loadScript(
												e,
												function() {
													(a.states[e] = 2), a.loading--, o('success', e), i();
												},
												function() {
													(a.states[e] = 3),
														a.loading--,
														u.push(e),
														o('failure', e),
														i();
												}
										  ))
										: o('failure', e)
									: o('success', e);
							}),
							!a.loading)
						) {
							var t = a.queueLoadedCallbacks.slice(0);
							(a.queueLoadedCallbacks.length = 0),
								ta(t, function(e) {
									0 === u.length
										? B(e.success) && e.success.call(e.scope)
										: B(e.failure) && e.failure.call(e.scope, u);
								});
						}
					})();
			}),
			(oa.ScriptLoader = new oa()),
			oa);
	function oa(e) {
		void 0 === e && (e = {}),
			(this.states = {}),
			(this.queue = []),
			(this.scriptLoadedCallbacks = {}),
			(this.queueLoadedCallbacks = []),
			(this.loading = 0),
			(this.settings = e);
	}
	function ia() {
		return A(ua, ca.get());
	}
	var aa,
		ua = {},
		ca = at('en'),
		sa = {
			getData: function() {
				return S(ua, function(e) {
					return te({}, e);
				});
			},
			setCode: function(e) {
				e && ca.set(e);
			},
			getCode: function() {
				return ca.get();
			},
			add: function(e, t) {
				var n = ua[e];
				n || (ua[e] = n = {}),
					N(t, function(e, t) {
						n[t.toLowerCase()] = e;
					});
			},
			translate: function(e) {
				function n(e) {
					return B(e) ? Object.prototype.toString.call(e) : a(e) ? '' : '' + e;
				}
				function t(e) {
					var t = n(e);
					return A(i, t.toLowerCase())
						.map(n)
						.getOr(t);
				}
				function r(e) {
					return e.replace(/{context:\w+}$/, '');
				}
				function o(e) {
					return e;
				}
				var i = ia().getOr({}),
					a = function(e) {
						return '' === e || null === e || e === undefined;
					};
				if (a(e)) return o('');
				if (
					(function(e) {
						return _(e) && ee(e, 'raw');
					})(e)
				)
					return o(n(e.raw));
				if (
					(function(e) {
						return D(e) && 1 < e.length;
					})(e)
				) {
					var u = e.slice(1);
					return o(
						r(
							t(e[0]).replace(/\{([0-9]+)\}/g, function(e, t) {
								return ee(u, t) ? n(u[t]) : e;
							})
						)
					);
				}
				return o(r(t(e)));
			},
			isRtl: function() {
				return ia()
					.bind(function(e) {
						return A(e, '_dir');
					})
					.exists(function(e) {
						return 'rtl' === e;
					});
			},
			hasCode: function(e) {
				return ee(ua, e);
			}
		};
	function la() {
		function u(t, n) {
			var e = U(i, function(e) {
				return e.name === t && e.state === n;
			});
			F(e, function(e) {
				return e.callback();
			});
		}
		function c(e) {
			var t;
			return f[e] && (t = f[e].dependencies), t || [];
		}
		function s(e, t) {
			return 'object' == typeof t
				? t
				: 'string' == typeof e
				? { prefix: '', resource: t, suffix: '' }
				: { prefix: e.prefix, resource: t, suffix: e.suffix };
		}
		var r = this,
			o = [],
			l = {},
			f = {},
			i = [],
			d = function(e, t, n, r, o) {
				if (!l[e]) {
					var i = 'string' == typeof t ? t : t.prefix + t.resource + t.suffix;
					0 !== i.indexOf('/') &&
						-1 === i.indexOf('://') &&
						(i = la.baseURL + '/' + i),
						(l[e] = i.substring(0, i.lastIndexOf('/')));
					var a = function() {
						u(e, 'loaded'),
							(function(e, n, t, r) {
								var o = c(e);
								F(o, function(e) {
									var t = s(n, e);
									d(t.resource, t, undefined, undefined);
								}),
									t && (r ? t.call(r) : t.call(ra));
							})(e, t, n, r);
					};
					f[e] ? a() : ra.ScriptLoader.add(i, a, r, o);
				}
			},
			e = function(e, t, n) {
				void 0 === n && (n = 'added'),
					ee(f, e) && 'added' === n
						? t()
						: ee(l, e) && 'loaded' === n
						? t()
						: i.push({ name: e, state: n, callback: t });
			};
		return {
			items: o,
			urls: l,
			lookup: f,
			_listeners: i,
			get: function(e) {
				return f[e] ? f[e].instance : undefined;
			},
			dependencies: c,
			requireLangPack: function(t, n) {
				!1 !== la.languageLoad &&
					e(
						t,
						function() {
							var e = sa.getCode();
							!e ||
								(n && -1 === (',' + (n || '') + ',').indexOf(',' + e + ',')) ||
								ra.ScriptLoader.add(l[t] + '/langs/' + e + '.js');
						},
						'loaded'
					);
			},
			add: function(e, t, n) {
				var r = t;
				return (
					o.push(r), (f[e] = { instance: r, dependencies: n }), u(e, 'added'), r
				);
			},
			remove: function(e) {
				delete l[e], delete f[e];
			},
			createUrl: s,
			addComponents: function(e, t) {
				var n = r.urls[e];
				F(t, function(e) {
					ra.ScriptLoader.add(n + '/' + e);
				});
			},
			load: d,
			waitFor: e
		};
	}
	((aa = la = la || {}).PluginManager = aa()), (aa.ThemeManager = aa());
	function fa(n, r) {
		var o = null;
		return {
			cancel: function() {
				null !== o && (j.clearTimeout(o), (o = null));
			},
			throttle: function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				null === o &&
					(o = j.setTimeout(function() {
						n.apply(null, e), (o = null);
					}, r));
			}
		};
	}
	function da(n, r) {
		var o = null;
		return {
			cancel: function() {
				null !== o && (j.clearTimeout(o), (o = null));
			},
			throttle: function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				null !== o && j.clearTimeout(o),
					(o = j.setTimeout(function() {
						n.apply(null, e), (o = null);
					}, r));
			}
		};
	}
	function ha(e, t) {
		var n = Xe(e, t);
		return n === undefined || '' === n ? [] : n.split(' ');
	}
	function ma(e) {
		return e.dom().classList !== undefined;
	}
	function ga(e, t) {
		return (function(e, t, n) {
			var r = ha(e, t).concat([n]);
			return en(e, t, r.join(' ')), !0;
		})(e, 'class', t);
	}
	function pa(e, t) {
		return (function(e, t, n) {
			var r = U(ha(e, t), function(e) {
				return e !== n;
			});
			return 0 < r.length ? en(e, t, r.join(' ')) : Ye(e, t), !1;
		})(e, 'class', t);
	}
	function va(e, t) {
		ma(e) ? e.dom().classList.add(t) : ga(e, t);
	}
	function ya(e) {
		0 ===
			(ma(e)
				? e.dom().classList
				: (function(e) {
						return ha(e, 'class');
				  })(e)
			).length && Ye(e, 'class');
	}
	function ba(e, t) {
		return ma(e) && e.dom().classList.contains(t);
	}
	function Ca(e, t) {
		return (function(e, t) {
			var n = t === undefined ? j.document : t.dom();
			return ge(n) ? [] : X(n.querySelectorAll(e), it.fromDom);
		})(t, e);
	}
	var wa = la,
		xa = function(e, t) {
			var n = [];
			return (
				F(Ee(e), function(e) {
					t(e) && (n = n.concat([e])), (n = n.concat(xa(e, t)));
				}),
				n
			);
		};
	function za(e, t, n, r, o) {
		return e(n, r) ? R.some(n) : B(o) && o(n) ? R.none() : t(n, r, o);
	}
	function Ea(e, t, n) {
		for (var r = e.dom(), o = B(n) ? n : $(!1); r.parentNode; ) {
			r = r.parentNode;
			var i = it.fromDom(r);
			if (t(i)) return R.some(i);
			if (o(i)) break;
		}
		return R.none();
	}
	function Na(e, t, n) {
		return za(
			function(e, t) {
				return t(e);
			},
			Ea,
			e,
			t,
			n
		);
	}
	function Sa(e, t, n) {
		return Ea(
			e,
			function(e) {
				return me(e, t);
			},
			n
		);
	}
	function ka(e, t) {
		return (function(e, t) {
			var n = t === undefined ? j.document : t.dom();
			return ge(n) ? R.none() : R.from(n.querySelector(e)).map(it.fromDom);
		})(t, e);
	}
	function Ta(e, t, n) {
		return za(me, Sa, e, t, n);
	}
	function Aa(r, e) {
		function t(e, t) {
			return (function(e, t) {
				var n = e.dom();
				return !(!n || !n.hasAttribute) && n.hasAttribute(t);
			})(e, t)
				? R.some(Xe(e, t))
				: R.none();
		}
		var n = r.selection.getRng(),
			o = it.fromDom(n.startContainer),
			i = it.fromDom(r.getBody()),
			a = e.fold(
				function() {
					return '.' + cu();
				},
				function(e) {
					return '[' + su() + '="' + e + '"]';
				}
			),
			u = Ne(o, n.startOffset).getOr(o);
		return Ta(u, a, function(e) {
			return pe(e, i);
		}).bind(function(e) {
			return t(e, '' + lu()).bind(function(n) {
				return t(e, '' + su()).map(function(e) {
					var t = fu(r, n);
					return { uid: n, name: e, elements: t };
				});
			});
		});
	}
	function Ma(n, e) {
		function a(e, t) {
			r(e, function(e) {
				return t(e), e;
			});
		}
		var o = at({}),
			r = function(e, t) {
				var n = o.get(),
					r = t(
						n.hasOwnProperty(e)
							? n[e]
							: { listeners: [], previous: at(R.none()) }
					);
				(n[e] = r), o.set(n);
			},
			t = da(function() {
				var e = o.get(),
					t = (function(e, t) {
						var n = L.call(e, 0);
						return n.sort(t), n;
					})(Z(e));
				F(t, function(e) {
					r(e, function(o) {
						var i = o.previous.get();
						return (
							Aa(n, R.some(e)).fold(
								function() {
									i.isSome() &&
										((function(t) {
											a(t, function(e) {
												F(e.listeners, function(e) {
													return e(!1, t);
												});
											});
										})(e),
										o.previous.set(R.none()));
								},
								function(e) {
									var t = e.uid,
										n = e.name,
										r = e.elements;
									i.is(t) ||
										((function(t, n, r) {
											a(t, function(e) {
												F(e.listeners, function(e) {
													return e(!0, t, {
														uid: n,
														nodes: X(r, function(e) {
															return e.dom();
														})
													});
												});
											});
										})(n, t, r),
										o.previous.set(R.some(t)));
								}
							),
							{ previous: o.previous, listeners: o.listeners }
						);
					});
				});
			}, 30);
		return (
			n.on('remove', function() {
				t.cancel();
			}),
			n.on('NodeChange', function() {
				t.throttle();
			}),
			{
				addListener: function(e, t) {
					r(e, function(e) {
						return { previous: e.previous, listeners: e.listeners.concat([t]) };
					});
				}
			}
		);
	}
	function Ra(e, n) {
		e.on('init', function() {
			e.serializer.addNodeFilter('span', function(e) {
				F(e, function(t) {
					(function(e) {
						return R.from(e.attr(su())).bind(n.lookup);
					})(t).each(function(e) {
						!1 === e.persistent && t.unwrap();
					});
				});
			});
		});
	}
	function _a(e, t) {
		var n = ve(e).dom(),
			r = it.fromDom(n.createDocumentFragment()),
			o = (function(e, t) {
				var n = (t || j.document).createElement('div');
				return (n.innerHTML = e), Ee(it.fromDom(n));
			})(t, n);
		Re(r, o), _e(e), Ht(e, r);
	}
	function Da(e, t) {
		return it.fromDom(e.dom().cloneNode(t));
	}
	function Oa(e) {
		return Da(e, !1);
	}
	function Ha(e) {
		return Da(e, !0);
	}
	function Ba(e) {
		return (
			pu(e) && (e = e.parentNode), gu(e) && e.hasAttribute('data-mce-caret')
		);
	}
	function Pa(e) {
		return pu(e) && mu.isZwsp(e.data);
	}
	function La(e) {
		return Ba(e) || Pa(e);
	}
	function Va(e) {
		return e.firstChild !== e.lastChild || !Qt.isBr(e.firstChild);
	}
	function Ia(e) {
		var t = e.container();
		return (
			!(!e || !Qt.isText(t)) &&
			(t.data.charAt(e.offset()) === mu.ZWSP ||
				(e.isAtStart() && Pa(t.previousSibling)))
		);
	}
	function Fa(e) {
		var t = e.container();
		return (
			!(!e || !Qt.isText(t)) &&
			(t.data.charAt(e.offset() - 1) === mu.ZWSP ||
				(e.isAtEnd() && Pa(t.nextSibling)))
		);
	}
	function Ua(e, t, n) {
		var r, o;
		return (
			(r = t.ownerDocument.createElement(e)).setAttribute(
				'data-mce-caret',
				n ? 'before' : 'after'
			),
			r.setAttribute('data-mce-bogus', 'all'),
			r.appendChild(
				(function() {
					var e = j.document.createElement('br');
					return e.setAttribute('data-mce-bogus', '1'), e;
				})()
			),
			(o = t.parentNode),
			n
				? o.insertBefore(r, t)
				: t.nextSibling
				? o.insertBefore(r, t.nextSibling)
				: o.appendChild(r),
			r
		);
	}
	function ja(e) {
		return e && e.hasAttribute('data-mce-caret')
			? ((function(e) {
					var t = e.getElementsByTagName('br'),
						n = t[t.length - 1];
					Qt.isBogus(n) && n.parentNode.removeChild(n);
			  })(e),
			  e.removeAttribute('data-mce-caret'),
			  e.removeAttribute('data-mce-bogus'),
			  e.removeAttribute('style'),
			  e.removeAttribute('_moz_abspos'),
			  e)
			: null;
	}
	function qa(e) {
		return (
			!Su(e) && (xu(e) ? !zu(e.parentNode) : Eu(e) || wu(e) || Nu(e) || ku(e))
		);
	}
	function $a(e, t) {
		return (
			qa(e) &&
			(function(e, t) {
				for (e = e.parentNode; e && e !== t; e = e.parentNode) {
					if (ku(e)) return !1;
					if (bu(e)) return !0;
				}
				return !0;
			})(e, t)
		);
	}
	function Wa(e) {
		return e
			? {
					left: Tu(e.left),
					top: Tu(e.top),
					bottom: Tu(e.bottom),
					right: Tu(e.right),
					width: Tu(e.width),
					height: Tu(e.height)
			  }
			: { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 };
	}
	function Ka(e, t) {
		return (
			(e = Wa(e)),
			t || (e.left = e.left + e.width),
			(e.right = e.left),
			(e.width = 0),
			e
		);
	}
	function Xa(e, t, n) {
		return 0 <= e && e <= Math.min(t.height, n.height) / 2;
	}
	function Ya(e, t) {
		return (
			e.bottom - e.height / 2 < t.top ||
			(!(e.top > t.bottom) && Xa(t.top - e.bottom, e, t))
		);
	}
	function Ga(e, t) {
		return (
			e.top > t.bottom || (!(e.bottom < t.top) && Xa(t.bottom - e.top, e, t))
		);
	}
	function Za(e, t, n) {
		return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom;
	}
	function Ja(e) {
		var t = e.startContainer,
			n = e.startOffset;
		return t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null;
	}
	function Qa(e, t) {
		return (
			1 === e.nodeType &&
				e.hasChildNodes() &&
				(t >= e.childNodes.length && (t = e.childNodes.length - 1),
				(e = e.childNodes[t])),
			e
		);
	}
	function eu(e) {
		return 'string' == typeof e && 768 <= e.charCodeAt(0) && Au.test(e);
	}
	function tu(e, t, n) {
		return e.isSome() && t.isSome()
			? R.some(n(e.getOrDie(), t.getOrDie()))
			: R.none();
	}
	function nu(e) {
		return e && /[\r\n\t ]/.test(e);
	}
	function ru(e) {
		return !!e.setStart && !!e.setEnd;
	}
	function ou(e) {
		var t,
			n = e.startContainer,
			r = e.startOffset;
		return !!(
			nu(e.toString()) &&
			Lu(n.parentNode) &&
			Qt.isText(n) &&
			((t = n.data), nu(t[r - 1]) || nu(t[r + 1]))
		);
	}
	function iu(e) {
		return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom;
	}
	function au(e, t) {
		var n = Ka(e, t);
		return (n.width = 1), (n.right = n.left + 1), n;
	}
	var uu,
		cu = $('mce-annotation'),
		su = $('data-mce-annotation'),
		lu = $('data-mce-annotation-uid'),
		fu = function(e, t) {
			var n = it.fromDom(e.getBody());
			return Ca(n, '[' + lu() + '="' + t + '"]');
		},
		du = 0,
		hu = jr,
		mu = {
			isZwsp: function(e) {
				return e === hu;
			},
			ZWSP: hu,
			trim: function(e) {
				return e.replace(new RegExp(hu, 'g'), '');
			}
		},
		gu = Qt.isElement,
		pu = Qt.isText,
		vu = function(e) {
			return pu(e) && e.data[0] === mu.ZWSP;
		},
		yu = function(e) {
			return pu(e) && e.data[e.data.length - 1] === mu.ZWSP;
		},
		bu = Qt.isContentEditableTrue,
		Cu = Qt.isContentEditableFalse,
		wu = Qt.isBr,
		xu = Qt.isText,
		zu = Qt.matchNodeNames(['script', 'style', 'textarea']),
		Eu = Qt.matchNodeNames([
			'img',
			'input',
			'textarea',
			'hr',
			'iframe',
			'video',
			'audio',
			'object'
		]),
		Nu = Qt.matchNodeNames(['table']),
		Su = La,
		ku = function(e) {
			return (
				!1 ===
					(function(e) {
						return Qt.isElement(e) && 'true' === e.getAttribute('unselectable');
					})(e) && Cu(e)
			);
		},
		Tu = Math.round,
		Au = new RegExp(
			'[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]'
		),
		Mu = [].slice,
		Ru = function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			var n = Mu.call(arguments);
			return function(e) {
				for (var t = 0; t < n.length; t++) if (!n[t](e)) return !1;
				return !0;
			};
		},
		_u = function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			var n = Mu.call(arguments);
			return function(e) {
				for (var t = 0; t < n.length; t++) if (n[t](e)) return !0;
				return !1;
			};
		},
		Du = Qt.isElement,
		Ou = qa,
		Hu = Qt.matchStyleValues('display', 'block table'),
		Bu = Qt.matchStyleValues('float', 'left right'),
		Pu = Ru(Du, Ou, c(Bu)),
		Lu = c(Qt.matchStyleValues('white-space', 'pre pre-line pre-wrap')),
		Vu = Qt.isText,
		Iu = Qt.isBr,
		Fu = Qi.nodeIndex,
		Uu = Qa,
		ju = function(e) {
			return 'createRange' in e ? e.createRange() : Qi.DOM.createRng();
		},
		qu = function(e) {
			var t, n;
			return (
				(t =
					0 < (n = e.getClientRects()).length
						? Wa(n[0])
						: Wa(e.getBoundingClientRect())),
				!ru(e) && Iu(e) && iu(t)
					? (function(e) {
							var t,
								n = e.ownerDocument,
								r = ju(n),
								o = n.createTextNode(qr),
								i = e.parentNode;
							return (
								i.insertBefore(o, e),
								r.setStart(o, 0),
								r.setEnd(o, 1),
								(t = Wa(r.getBoundingClientRect())),
								i.removeChild(o),
								t
							);
					  })(e)
					: iu(t) && ru(e)
					? (function(e) {
							var t = e.startContainer,
								n = e.endContainer,
								r = e.startOffset,
								o = e.endOffset;
							if (t === n && Qt.isText(n) && 0 === r && 1 === o) {
								var i = e.cloneRange();
								return i.setEndAfter(n), qu(i);
							}
							return null;
					  })(e)
					: t
			);
		},
		$u = function(e) {
			function r(e) {
				0 !== e.height &&
					((0 < i.length &&
						(function(e, t) {
							return (
								e.left === t.left &&
								e.top === t.top &&
								e.bottom === t.bottom &&
								e.right === t.right
							);
						})(e, i[i.length - 1])) ||
						i.push(e));
			}
			function t(e, t) {
				var n = ju(e.ownerDocument);
				if (t < e.data.length) {
					if (eu(e.data[t])) return i;
					if (
						eu(e.data[t - 1]) &&
						(n.setStart(e, t), n.setEnd(e, t + 1), !ou(n))
					)
						return r(au(qu(n), !1)), i;
				}
				0 < t &&
					(n.setStart(e, t - 1), n.setEnd(e, t), ou(n) || r(au(qu(n), !1))),
					t < e.data.length &&
						(n.setStart(e, t), n.setEnd(e, t + 1), ou(n) || r(au(qu(n), !0)));
			}
			var n,
				o,
				i = [];
			if (Vu(e.container())) return t(e.container(), e.offset()), i;
			if (Du(e.container()))
				if (e.isAtEnd())
					(o = Uu(e.container(), e.offset())),
						Vu(o) && t(o, o.data.length),
						Pu(o) && !Iu(o) && r(au(qu(o), !1));
				else {
					if (
						((o = Uu(e.container(), e.offset())),
						Vu(o) && t(o, 0),
						Pu(o) && e.isAtEnd())
					)
						return r(au(qu(o), !1)), i;
					(n = Uu(e.container(), e.offset() - 1)),
						Pu(n) &&
							!Iu(n) &&
							((!Hu(n) && !Hu(o) && Pu(o)) || r(au(qu(n), !1))),
						Pu(o) && r(au(qu(o), !0));
				}
			return i;
		};
	function Wu(t, n, e) {
		function r() {
			return (e = e || $u(Wu(t, n)));
		}
		return {
			container: $(t),
			offset: $(n),
			toRange: function() {
				var e;
				return (e = ju(t.ownerDocument)).setStart(t, n), e.setEnd(t, n), e;
			},
			getClientRects: r,
			isVisible: function() {
				return 0 < r().length;
			},
			isAtStart: function() {
				return Vu(t), 0 === n;
			},
			isAtEnd: function() {
				return Vu(t) ? n >= t.data.length : n >= t.childNodes.length;
			},
			isEqual: function(e) {
				return e && t === e.container() && n === e.offset();
			},
			getNode: function(e) {
				return Uu(t, e ? n - 1 : n);
			}
		};
	}
	((uu = Wu = Wu || {}).fromRangeStart = function(e) {
		return uu(e.startContainer, e.startOffset);
	}),
		(uu.fromRangeEnd = function(e) {
			return uu(e.endContainer, e.endOffset);
		}),
		(uu.after = function(e) {
			return uu(e.parentNode, Fu(e) + 1);
		}),
		(uu.before = function(e) {
			return uu(e.parentNode, Fu(e));
		}),
		(uu.isAbove = function(e, t) {
			return tu(z(t.getClientRects()), E(e.getClientRects()), Ya).getOr(!1);
		}),
		(uu.isBelow = function(e, t) {
			return tu(E(t.getClientRects()), z(e.getClientRects()), Ga).getOr(!1);
		}),
		(uu.isAtStart = function(e) {
			return !!e && e.isAtStart();
		}),
		(uu.isAtEnd = function(e) {
			return !!e && e.isAtEnd();
		}),
		(uu.isTextPosition = function(e) {
			return !!e && Qt.isText(e.container());
		}),
		(uu.isElementPosition = function(e) {
			return !1 === uu.isTextPosition(e);
		});
	function Ku(t) {
		return function(e) {
			return t === e;
		};
	}
	function Xu(e) {
		return (
			(Ic(e) ? 'text()' : e.nodeName.toLowerCase()) +
			'[' +
			(function(e) {
				var r, t, n;
				return (
					(r = qc(jc(e))),
					(t = Xn.findIndex(r, Ku(e), e)),
					(r = r.slice(0, t + 1)),
					(n = Xn.reduce(
						r,
						function(e, t, n) {
							return Ic(t) && Ic(r[n - 1]) && e++, e;
						},
						0
					)),
					(r = Xn.filter(r, Qt.matchNodeNames([e.nodeName]))),
					(t = Xn.findIndex(r, Ku(e), e)) - n
				);
			})(e) +
			']'
		);
	}
	function Yu(e, t) {
		var n,
			r,
			o,
			i,
			a,
			u = [];
		return (
			(n = t.container()),
			(r = t.offset()),
			Ic(n)
				? (o = (function(e, t) {
						for (; (e = e.previousSibling) && Ic(e); ) t += e.data.length;
						return t;
				  })(n, r))
				: (r >= (i = n.childNodes).length
						? ((o = 'after'), (r = i.length - 1))
						: (o = 'before'),
				  (n = i[r])),
			u.push(Xu(n)),
			(a = (function(e, t, n) {
				var r = [];
				for (t = t.parentNode; t !== e && (!n || !n(t)); t = t.parentNode)
					r.push(t);
				return r;
			})(e, n)),
			(a = Xn.filter(a, c(Qt.isBogus))),
			(u = u.concat(
				Xn.map(a, function(e) {
					return Xu(e);
				})
			))
				.reverse()
				.join('/') +
				',' +
				o
		);
	}
	function Gu(e, t) {
		var n, r, o;
		return t
			? ((t = (n = t.split(','))[0].split('/')),
			  (o = 1 < n.length ? n[1] : 'before'),
			  (r = Xn.reduce(
					t,
					function(e, t) {
						return (t = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t))
							? ('text()' === t[1] && (t[1] = '#text'),
							  (function(e, t, n) {
									var r = qc(e);
									return (
										(r = Xn.filter(r, function(e, t) {
											return !Ic(e) || !Ic(r[t - 1]);
										})),
										(r = Xn.filter(r, Qt.matchNodeNames([t])))[n]
									);
							  })(e, t[1], parseInt(t[2], 10)))
							: null;
					},
					e
			  ))
					? Ic(r)
						? (function(e, t) {
								for (var n, r = e, o = 0; Ic(r); ) {
									if (((n = r.data.length), o <= t && t <= o + n)) {
										(e = r), (t -= o);
										break;
									}
									if (!Ic(r.nextSibling)) {
										(e = r), (t = n);
										break;
									}
									(o += n), (r = r.nextSibling);
								}
								return (
									Ic(e) && t > e.data.length && (t = e.data.length), Vc(e, t)
								);
						  })(r, parseInt(o, 10))
						: ((o = 'after' === o ? Uc(r) + 1 : Uc(r)), Vc(r.parentNode, o))
					: null)
			: null;
	}
	function Zu(e, t) {
		Qt.isText(t) && 0 === t.data.length && e.remove(t);
	}
	function Ju(e, t, n) {
		Qt.isDocumentFragment(n)
			? (function(t, e, n) {
					var r = R.from(n.firstChild),
						o = R.from(n.lastChild);
					e.insertNode(n),
						r.each(function(e) {
							return Zu(t, e.previousSibling);
						}),
						o.each(function(e) {
							return Zu(t, e.nextSibling);
						});
			  })(e, t, n)
			: (function(e, t, n) {
					t.insertNode(n), Zu(e, n.previousSibling), Zu(e, n.nextSibling);
			  })(e, t, n);
	}
	function Qu(e, t, n, r, o) {
		var i,
			a = r[o ? 'startContainer' : 'endContainer'],
			u = r[o ? 'startOffset' : 'endOffset'],
			c = [],
			s = 0,
			l = e.getRoot();
		for (
			Qt.isText(a)
				? c.push(
						n
							? (function(e, t, n) {
									var r, o;
									for (
										o = e(t.data.slice(0, n)).length, r = t.previousSibling;
										r && Qt.isText(r);
										r = r.previousSibling
									)
										o += e(r.data).length;
									return o;
							  })(t, a, u)
							: u
				  )
				: (u >= (i = a.childNodes).length &&
						i.length &&
						((s = 1), (u = Math.max(0, i.length - 1))),
				  c.push(e.nodeIndex(i[u], n) + s));
			a && a !== l;
			a = a.parentNode
		)
			c.push(e.nodeIndex(a, n));
		return c;
	}
	function ec(e, t, n) {
		var r = 0;
		return (
			Zn.each(e.select(t), function(e) {
				if ('all' !== e.getAttribute('data-mce-bogus'))
					return e !== n && void r++;
			}),
			r
		);
	}
	function tc(e, t) {
		var n,
			r,
			o,
			i = t ? 'start' : 'end';
		(n = e[i + 'Container']),
			(r = e[i + 'Offset']),
			Qt.isElement(n) &&
				'TR' === n.nodeName &&
				(n = (o = n.childNodes)[Math.min(t ? r : r - 1, o.length - 1)]) &&
				((r = t ? 0 : n.childNodes.length),
				e['set' + (t ? 'Start' : 'End')](n, r));
	}
	function nc(e) {
		return tc(e, !0), tc(e, !1), e;
	}
	function rc(e, t) {
		var n;
		if (Qt.isElement(e) && ((e = Qa(e, t)), $c(e))) return e;
		if (La(e)) {
			if (
				(Qt.isText(e) && Ba(e) && (e = e.parentNode),
				(n = e.previousSibling),
				$c(n))
			)
				return n;
			if (((n = e.nextSibling), $c(n))) return n;
		}
	}
	function oc(e, t, n) {
		var r = n.getNode(),
			o = r ? r.nodeName : null,
			i = n.getRng();
		if ($c(r) || 'IMG' === o) return { name: o, index: ec(n.dom, o, r) };
		var a = (function(e) {
			return (
				rc(e.startContainer, e.startOffset) || rc(e.endContainer, e.endOffset)
			);
		})(i);
		return a
			? { name: (o = a.tagName), index: ec(n.dom, o, a) }
			: (function(e, t, n, r) {
					var o = t.dom,
						i = {};
					return (
						(i.start = Qu(o, e, n, r, !0)),
						t.isCollapsed() || (i.end = Qu(o, e, n, r, !1)),
						i
					);
			  })(e, n, t, i);
	}
	function ic(e, t, n) {
		var r = {
			'data-mce-type': 'bookmark',
			id: t,
			style: 'overflow:hidden;line-height:0px'
		};
		return n ? e.create('span', r, '&#xFEFF;') : e.create('span', r);
	}
	function ac(e, t) {
		var n = e.dom,
			r = e.getRng(),
			o = n.uniqueId(),
			i = e.isCollapsed(),
			a = e.getNode(),
			u = a.nodeName;
		if ('IMG' === u) return { name: u, index: ec(n, u, a) };
		var c = nc(r.cloneRange());
		if (!i) {
			c.collapse(!1);
			var s = ic(n, o + '_end', t);
			Ju(n, c, s);
		}
		(r = nc(r)).collapse(!0);
		var l = ic(n, o + '_start', t);
		return Ju(n, r, l), e.moveToBookmark({ id: o, keep: 1 }), { id: o };
	}
	function uc(e, t, n) {
		function r(e) {
			for (var t; (t = o[e]()) && !Qt.isText(t) && !n(t); );
			return R.from(t).filter(Qt.isText);
		}
		void 0 === n && (n = s);
		var o = new Fi(e, t);
		return {
			current: function() {
				return R.from(o.current()).filter(Qt.isText);
			},
			next: function() {
				return r('next');
			},
			prev: function() {
				return r('prev');
			},
			prev2: function() {
				return r('prev2');
			}
		};
	}
	function cc(t, e) {
		var i =
				e ||
				function(e) {
					return t.isBlock(e) || Qt.isBr(e) || Qt.isContentEditableFalse(e);
				},
			a = function(e, t, n, r) {
				if (Qt.isText(e)) {
					var o = r(e, t, e.data);
					if (-1 !== o) return R.some({ container: e, offset: o });
				}
				return n().bind(function(e) {
					return a(e.container, e.offset, n, r);
				});
			};
		return {
			backwards: function(e, t, n, r) {
				var o = uc(e, r, i);
				return a(
					e,
					t,
					function() {
						return o.prev().map(function(e) {
							return { container: e, offset: e.length };
						});
					},
					n
				).getOrNull();
			},
			forwards: function(e, t, n, r) {
				var o = uc(e, r, i);
				return a(
					e,
					t,
					function() {
						return o.next().map(function(e) {
							return { container: e, offset: 0 };
						});
					},
					n
				).getOrNull();
			}
		};
	}
	function sc(e) {
		return Qt.isElement(e) && e.id === Kc;
	}
	function lc(e, t) {
		for (; t && t !== e; ) {
			if (t.id === Kc) return t;
			t = t.parentNode;
		}
		return null;
	}
	function fc(e) {
		var t = e.parentNode;
		t && t.removeChild(e);
	}
	function dc(e, t) {
		0 === t.length ? fc(e) : (e.nodeValue = t);
	}
	function hc(e) {
		var t = mu.trim(e);
		return { count: e.length - t.length, text: t };
	}
	function mc(e, t) {
		return Gc(e), t;
	}
	function gc(e, t) {
		var n = t.container(),
			r = (function(e, t) {
				var n = f(e, t);
				return -1 === n ? R.none() : R.some(n);
			})(G(n.childNodes), e)
				.map(function(e) {
					return e < t.offset() ? Vc(n, t.offset() - 1) : t;
				})
				.getOr(t);
		return Gc(e), r;
	}
	function pc(e, t) {
		return Yc(e) && t.container() === e
			? (function(e, t) {
					var n = hc(e.data.substr(0, t.offset())),
						r = hc(e.data.substr(t.offset())),
						o = n.text + r.text;
					return 0 < o.length ? (dc(e, o), Vc(e, t.offset() - n.count)) : t;
			  })(e, t)
			: mc(e, t);
	}
	function vc(e, t, n) {
		var r = e.getParam(t, n);
		if (-1 === r.indexOf('=')) return r;
		var o = e.getParam(t, '', 'hash');
		return o.hasOwnProperty(e.id) ? o[e.id] : n;
	}
	function yc(e, t, n) {
		var r,
			o,
			i,
			a,
			u,
			c = Ka(t.getBoundingClientRect(), n);
		return (
			(i =
				'BODY' === e.tagName
					? ((r = e.ownerDocument.documentElement),
					  (o = e.scrollLeft || r.scrollLeft),
					  e.scrollTop || r.scrollTop)
					: ((u = e.getBoundingClientRect()),
					  (o = e.scrollLeft - u.left),
					  e.scrollTop - u.top)),
			(c.left += o),
			(c.right += o),
			(c.top += i),
			(c.bottom += i),
			(c.width = 1),
			0 < (a = t.offsetWidth - t.clientWidth) &&
				(n && (a *= -1), (c.left += a), (c.right += a)),
			c
		);
	}
	function bc(e, i, a, t) {
		var n,
			u,
			c = at(R.none()),
			r = as(e),
			s = 0 < r.length ? r : 'p',
			l = function() {
				!(function(e) {
					var t, n, r, o, i;
					for (t = Ii('*[contentEditable=false]', e), o = 0; o < t.length; o++)
						(r = (n = t[o]).previousSibling),
							yu(r) &&
								(1 === (i = r.data).length
									? r.parentNode.removeChild(r)
									: r.deleteData(i.length - 1, 1)),
							(r = n.nextSibling),
							vu(r) &&
								(1 === (i = r.data).length
									? r.parentNode.removeChild(r)
									: r.deleteData(0, 1));
				})(i),
					u && (Zc.remove(u), (u = null)),
					c.get().each(function(e) {
						Ii(e.caret).remove(), c.set(R.none());
					}),
					Pn.clearInterval(n);
			},
			f = function() {
				n = Pn.setInterval(function() {
					t()
						? Ii('div.mce-visual-caret', i).toggleClass(
								'mce-visual-caret-hidden'
						  )
						: Ii('div.mce-visual-caret', i).addClass('mce-visual-caret-hidden');
				}, 500);
			};
		return {
			show: function(t, e) {
				var n, r;
				if (
					(l(),
					(function(e) {
						return Qt.isElement(e) && /^(TD|TH)$/i.test(e.tagName);
					})(e))
				)
					return null;
				if (!a(e))
					return (
						(u = (function(e, t) {
							var n, r, o;
							if (
								((r = e.ownerDocument.createTextNode(mu.ZWSP)),
								(o = e.parentNode),
								t)
							) {
								if (((n = e.previousSibling), pu(n))) {
									if (La(n)) return n;
									if (yu(n)) return n.splitText(n.data.length - 1);
								}
								o.insertBefore(r, e);
							} else {
								if (((n = e.nextSibling), pu(n))) {
									if (La(n)) return n;
									if (vu(n)) return n.splitText(1), n;
								}
								e.nextSibling
									? o.insertBefore(r, e.nextSibling)
									: o.appendChild(r);
							}
							return r;
						})(e, t)),
						(r = e.ownerDocument.createRange()),
						Ps(u.nextSibling)
							? (r.setStart(u, 0), r.setEnd(u, 0))
							: (r.setStart(u, 1), r.setEnd(u, 1)),
						r
					);
				(u = Ua(s, e, t)), (n = yc(i, e, t)), Ii(u).css('top', n.top);
				var o = Ii('<div class="mce-visual-caret" data-mce-bogus="all"></div>')
					.css(n)
					.appendTo(i)[0];
				return (
					c.set(R.some({ caret: o, element: e, before: t })),
					c.get().each(function(e) {
						t && Ii(e.caret).addClass('mce-visual-caret-before');
					}),
					f(),
					(r = e.ownerDocument.createRange()).setStart(u, 0),
					r.setEnd(u, 0),
					r
				);
			},
			hide: l,
			getCss: function() {
				return '.mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}';
			},
			reposition: function() {
				c.get().each(function(e) {
					var t = yc(i, e.element, e.before);
					Ii(e.caret).css(te({}, t));
				});
			},
			destroy: function() {
				return Pn.clearInterval(n);
			}
		};
	}
	function Cc() {
		return Bs.isIE() || Bs.isEdge() || Bs.isFirefox();
	}
	function wc(e) {
		return Ps(e) || (Qt.isTable(e) && Cc());
	}
	function xc(e) {
		return 0 < e;
	}
	function zc(e) {
		return e < 0;
	}
	function Ec(e, t) {
		for (var n; (n = e(t)); ) if (!Fs(n)) return n;
		return null;
	}
	function Nc(e, t, n, r, o) {
		var i = new Fi(e, r);
		if (zc(t)) {
			if ((Ls(e) || Fs(e)) && n((e = Ec(i.prev, !0)))) return e;
			for (; (e = Ec(i.prev, o)); ) if (n(e)) return e;
		}
		if (xc(t)) {
			if ((Ls(e) || Fs(e)) && n((e = Ec(i.next, !0)))) return e;
			for (; (e = Ec(i.next, o)); ) if (n(e)) return e;
		}
		return null;
	}
	function Sc(e, t) {
		for (; e && e !== t; ) {
			if (Vs(e)) return e;
			e = e.parentNode;
		}
		return null;
	}
	function kc(e, t, n) {
		return Sc(e.container(), n) === Sc(t.container(), n);
	}
	function Tc(e, t) {
		var n, r;
		return t
			? ((n = t.container()),
			  (r = t.offset()),
			  Us(n) ? n.childNodes[r + e] : null)
			: null;
	}
	function Ac(e, t) {
		var n = t.ownerDocument.createRange();
		return (
			e
				? (n.setStartBefore(t), n.setEndBefore(t))
				: (n.setStartAfter(t), n.setEndAfter(t)),
			n
		);
	}
	function Mc(e, t, n) {
		var r, o, i, a;
		for (o = e ? 'previousSibling' : 'nextSibling'; n && n !== t; ) {
			if (((r = n[o]), Is(r) && (r = r[o]), Ls(r))) {
				if (((a = n), Sc(r, (i = t)) === Sc(a, i))) return r;
				break;
			}
			if (js(r)) break;
			n = n.parentNode;
		}
		return null;
	}
	function Rc(e, t, n) {
		var r,
			o,
			i,
			a,
			u = d(Mc, !0, t),
			c = d(Mc, !1, t);
		if (((o = n.startContainer), (i = n.startOffset), Ba(o))) {
			if (
				(Us(o) || (o = o.parentNode),
				'before' === (a = o.getAttribute('data-mce-caret')) &&
					((r = o.nextSibling), wc(r)))
			)
				return qs(r);
			if ('after' === a && ((r = o.previousSibling), wc(r))) return $s(r);
		}
		if (!n.collapsed) return n;
		if (Qt.isText(o)) {
			if (Is(o)) {
				if (1 === e) {
					if ((r = c(o))) return qs(r);
					if ((r = u(o))) return $s(r);
				}
				if (-1 === e) {
					if ((r = u(o))) return $s(r);
					if ((r = c(o))) return qs(r);
				}
				return n;
			}
			if (yu(o) && i >= o.data.length - 1)
				return 1 === e && (r = c(o)) ? qs(r) : n;
			if (vu(o) && i <= 1) return -1 === e && (r = u(o)) ? $s(r) : n;
			if (i === o.data.length) return (r = c(o)) ? qs(r) : n;
			if (0 === i) return (r = u(o)) ? $s(r) : n;
		}
		return n;
	}
	function _c(e, t) {
		return R.from(Tc(e ? 0 : -1, t)).filter(Ls);
	}
	function Dc(e, t, n) {
		var r = Rc(e, t, n);
		return -1 === e ? Wu.fromRangeStart(r) : Wu.fromRangeEnd(r);
	}
	function Oc(e) {
		return R.from(e.getNode()).map(it.fromDom);
	}
	function Hc(e, t) {
		for (; (t = e(t)); ) if (t.isVisible()) return t;
		return t;
	}
	function Bc(e, t) {
		var n = kc(e, t);
		return !(n || !Qt.isBr(e.getNode())) || n;
	}
	var Pc,
		Lc,
		Vc = Wu,
		Ic = Qt.isText,
		Fc = Qt.isBogus,
		Uc = Qi.nodeIndex,
		jc = function(e) {
			var t = e.parentNode;
			return Fc(t) ? jc(t) : t;
		},
		qc = function(e) {
			return e
				? Xn.reduce(
						e.childNodes,
						function(e, t) {
							return (
								Fc(t) && 'BR' !== t.nodeName
									? (e = e.concat(qc(t)))
									: e.push(t),
								e
							);
						},
						[]
				  )
				: [];
		},
		$c = Qt.isContentEditableFalse,
		Wc = {
			getBookmark: function(e, t, n) {
				return 2 === t
					? oc(mu.trim, n, e)
					: 3 === t
					? (function(e) {
							var t = e.getRng();
							return {
								start: Yu(e.dom.getRoot(), Vc.fromRangeStart(t)),
								end: Yu(e.dom.getRoot(), Vc.fromRangeEnd(t))
							};
					  })(e)
					: t
					? (function(e) {
							return { rng: e.getRng() };
					  })(e)
					: ac(e, !1);
			},
			getUndoBookmark: d(oc, W, !0),
			getPersistentBookmark: ac
		},
		Kc = '_mce_caret',
		Xc = Qt.isElement,
		Yc = Qt.isText,
		Gc = function(e) {
			if (
				(Xc(e) &&
					La(e) &&
					(Va(e) ? e.removeAttribute('data-mce-caret') : fc(e)),
				Yc(e))
			) {
				var t = mu.trim(
					(function(e) {
						try {
							return e.nodeValue;
						} catch (t) {
							return '';
						}
					})(e)
				);
				dc(e, t);
			}
		},
		Zc = {
			removeAndReposition: function(e, t) {
				return Vc.isTextPosition(t)
					? pc(e, t)
					: (function(e, t) {
							return t.container() === e.parentNode ? gc(e, t) : mc(e, t);
					  })(e, t);
			},
			remove: Gc
		},
		Jc = Qi.DOM,
		Qc = function(e) {
			return e.getParam('iframe_attrs', {});
		},
		es = function(e) {
			return e.getParam('doctype', '<!DOCTYPE html>');
		},
		ts = function(e) {
			return e.getParam('document_base_url', '');
		},
		ns = function(e) {
			return vc(e, 'body_id', 'tinymce');
		},
		rs = function(e) {
			return vc(e, 'body_class', '');
		},
		os = function(e) {
			return e.getParam('content_security_policy', '');
		},
		is = function(e) {
			return e.getParam('br_in_pre', !0);
		},
		as = function(e) {
			if (e.getParam('force_p_newlines', !1)) return 'p';
			var t = e.getParam('forced_root_block', 'p');
			return !1 === t ? '' : !0 === t ? 'p' : t;
		},
		us = function(e) {
			return e.getParam('forced_root_block_attrs', {});
		},
		cs = function(e) {
			return e.getParam(
				'br_newline_selector',
				'.mce-toc h2,figcaption,caption'
			);
		},
		ss = function(e) {
			return e.getParam('no_newline_selector', '');
		},
		ls = function(e) {
			return e.getParam('keep_styles', !0);
		},
		fs = function(e) {
			return e.getParam('end_container_on_empty_block', !1);
		},
		ds = function(e) {
			return Zn.explode(
				e.getParam(
					'font_size_style_values',
					'xx-small,x-small,small,medium,large,x-large,xx-large'
				)
			);
		},
		hs = function(e) {
			return Zn.explode(e.getParam('font_size_classes', ''));
		},
		ms = function(e) {
			return e.getParam('icons', '', 'string');
		},
		gs = function(e) {
			return e.getParam('icons_url', '', 'string');
		},
		ps = function(e) {
			return e.getParam('images_dataimg_filter', $(!0), 'function');
		},
		vs = function(e) {
			return e.getParam('automatic_uploads', !0, 'boolean');
		},
		ys = function(e) {
			return e.getParam('images_reuse_filename', !1, 'boolean');
		},
		bs = function(e) {
			return e.getParam('images_replace_blob_uris', !0, 'boolean');
		},
		Cs = function(e) {
			return e.getParam('images_upload_url', '', 'string');
		},
		ws = function(e) {
			return e.getParam('images_upload_base_path', '', 'string');
		},
		xs = function(e) {
			return e.getParam('images_upload_credentials', !1, 'boolean');
		},
		zs = function(e) {
			return e.getParam('images_upload_handler', null, 'function');
		},
		Es = function(e) {
			return e.getParam('content_css_cors', !1, 'boolean');
		},
		Ns = function(e) {
			return e.getParam('referrer_policy', '', 'string');
		},
		Ss = function(e) {
			return e.getParam('language', 'en', 'string');
		},
		ks = function(e) {
			return e.getParam('language_url', '', 'string');
		},
		Ts = function(e) {
			return e.getParam('indent_use_margin', !1);
		},
		As = function(e) {
			return e.getParam('indentation', '40px', 'string');
		},
		Ms = function(e) {
			var t = e.settings.content_css;
			return K(t)
				? X(t.split(','), ce)
				: D(t)
				? t
				: !1 === t || e.inline
				? []
				: ['default'];
		},
		Rs = function(e) {
			return e.getParam('directionality', sa.isRtl() ? 'rtl' : undefined);
		},
		_s = function(e) {
			return e.getParam(
				'inline_boundaries_selector',
				'a[href],code,.mce-annotation',
				'string'
			);
		},
		Ds = function(e) {
			return e.getParam('object_resizing');
		},
		Os = function(e) {
			return e.getParam('resize_img_proportional', !0, 'boolean');
		},
		Hs = function(e) {
			return e.getParam(
				'placeholder',
				Jc.getAttrib(e.getElement(), 'placeholder'),
				'string'
			);
		},
		Bs = fe().browser,
		Ps = Qt.isContentEditableFalse,
		Ls = Qt.isContentEditableFalse,
		Vs = Qt.matchStyleValues(
			'display',
			'block table table-cell table-caption list-item'
		),
		Is = La,
		Fs = Ba,
		Us = Qt.isElement,
		js = qa,
		qs = d(Ac, !0),
		$s = d(Ac, !1);
	((Lc = Pc = Pc || {})[(Lc.Backwards = -1)] = 'Backwards'),
		(Lc[(Lc.Forwards = 1)] = 'Forwards');
	function Ws(e, t) {
		return e.hasChildNodes() && t < e.childNodes.length
			? e.childNodes[t]
			: null;
	}
	function Ks(e, t) {
		if (xc(e)) {
			if (Ol(t.previousSibling) && !Rl(t.previousSibling)) return Vc.before(t);
			if (Rl(t)) return Vc(t, 0);
		}
		if (zc(e)) {
			if (Ol(t.nextSibling) && !Rl(t.nextSibling)) return Vc.after(t);
			if (Rl(t)) return Vc(t, t.data.length);
		}
		return zc(e) ? (Dl(t) ? Vc.before(t) : Vc.after(t)) : Vc.before(t);
	}
	function Xs(t) {
		return {
			next: function(e) {
				return Pl(Pc.Forwards, e, t);
			},
			prev: function(e) {
				return Pl(Pc.Backwards, e, t);
			}
		};
	}
	function Ys(e) {
		return Vc.isTextPosition(e) ? 0 === e.offset() : qa(e.getNode());
	}
	function Gs(e) {
		if (Vc.isTextPosition(e)) {
			var t = e.container();
			return e.offset() === t.data.length;
		}
		return qa(e.getNode(!0));
	}
	function Zs(e, t) {
		return (
			!Vc.isTextPosition(e) &&
			!Vc.isTextPosition(t) &&
			e.getNode() === t.getNode(!0)
		);
	}
	function Js(e, t, n) {
		return e
			? !Zs(t, n) &&
					!(function(e) {
						return !Vc.isTextPosition(e) && Qt.isBr(e.getNode());
					})(t) &&
					Gs(t) &&
					Ys(n)
			: !Zs(n, t) && Ys(t) && Gs(n);
	}
	function Qs(t, n, r) {
		return Ll(t, n, r).bind(function(e) {
			return kc(r, e, n) && Js(t, r, e) ? Ll(t, n, e) : R.some(e);
		});
	}
	function el(e, t) {
		var n = e ? t.firstChild : t.lastChild;
		return Qt.isText(n)
			? R.some(Vc(n, e ? 0 : n.data.length))
			: n
			? qa(n)
				? R.some(
						e
							? Vc.before(n)
							: (function(e) {
									return Qt.isBr(e) ? Vc.before(e) : Vc.after(e);
							  })(n)
				  )
				: (function(e, t, n) {
						var r = e ? Vc.before(n) : Vc.after(n);
						return Ll(e, t, r);
				  })(e, t, n)
			: R.none();
	}
	function tl(e, t) {
		return (
			Qt.isElement(t) &&
				e.isBlock(t) &&
				!t.innerHTML &&
				!Wn.ie &&
				(t.innerHTML = '<br data-mce-bogus="1" />'),
			t
		);
	}
	function nl(e, t) {
		return Ul.lastPositionIn(e).fold(
			function() {
				return !1;
			},
			function(e) {
				return (
					t.setStart(e.container(), e.offset()),
					t.setEnd(e.container(), e.offset()),
					!0
				);
			}
		);
	}
	function rl(e, t, n) {
		return (
			!(
				!(function(e) {
					return !1 === e.hasChildNodes();
				})(t) || !lc(e, t)
			) &&
			((function(e, t) {
				var n = e.ownerDocument.createTextNode(mu.ZWSP);
				e.appendChild(n), t.setStart(n, 0), t.setEnd(n, 0);
			})(t, n),
			!0)
		);
	}
	function ol(e, t, n, r) {
		var o,
			i,
			a,
			u,
			c = n[t ? 'start' : 'end'],
			s = e.getRoot();
		if (c) {
			for (a = c[0], i = s, o = c.length - 1; 1 <= o; o--) {
				if (((u = i.childNodes), rl(s, i, r))) return !0;
				if (c[o] > u.length - 1) return !!rl(s, i, r) || nl(i, r);
				i = u[c[o]];
			}
			3 === i.nodeType && (a = Math.min(c[0], i.nodeValue.length)),
				1 === i.nodeType && (a = Math.min(c[0], i.childNodes.length)),
				t ? r.setStart(i, a) : r.setEnd(i, a);
		}
		return !0;
	}
	function il(e) {
		return Qt.isText(e) && 0 < e.data.length;
	}
	function al(e, t, n) {
		var r,
			o,
			i,
			a,
			u,
			c,
			s = e.get(n.id + '_' + t),
			l = n.keep;
		if (s) {
			if (
				((r = s.parentNode),
				(c =
					((u =
						((o =
							'start' === t
								? l
									? s.hasChildNodes()
										? ((r = s.firstChild), 1)
										: il(s.nextSibling)
										? ((r = s.nextSibling), 0)
										: il(s.previousSibling)
										? ((r = s.previousSibling), s.previousSibling.data.length)
										: ((r = s.parentNode), e.nodeIndex(s) + 1)
									: e.nodeIndex(s)
								: l
								? s.hasChildNodes()
									? ((r = s.firstChild), 1)
									: il(s.previousSibling)
									? ((r = s.previousSibling), s.previousSibling.data.length)
									: ((r = s.parentNode), e.nodeIndex(s))
								: e.nodeIndex(s)),
						r)),
					o)),
				!l)
			) {
				for (
					a = s.previousSibling,
						i = s.nextSibling,
						Zn.each(Zn.grep(s.childNodes), function(e) {
							Qt.isText(e) &&
								(e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ''));
						});
					(s = e.get(n.id + '_' + t));

				)
					e.remove(s, !0);
				a &&
					i &&
					a.nodeType === i.nodeType &&
					Qt.isText(a) &&
					!Wn.opera &&
					((o = a.nodeValue.length),
					a.appendData(i.nodeValue),
					e.remove(i),
					(c = ((u = a), o)));
			}
			return R.some(Vc(u, c));
		}
		return R.none();
	}
	function ul(e) {
		return '' !== e && -1 !== ' \f\n\r\t\x0B'.indexOf(e);
	}
	function cl(e) {
		return !ul(e) && !Kl(e);
	}
	function sl(e) {
		return !!e.nodeType;
	}
	function ll(e, t, n) {
		var r,
			o,
			i,
			a = n.startOffset,
			u = n.startContainer;
		if (
			(n.startContainer !== n.endContainer ||
				!(function(e) {
					return e && /^(IMG)$/.test(e.nodeName);
				})(n.startContainer.childNodes[n.startOffset])) &&
			1 === u.nodeType
		)
			for (
				a < (i = u.childNodes).length
					? ((u = i[a]), (r = new Fi(u, e.getParent(u, e.isBlock))))
					: ((u = i[i.length - 1]),
					  (r = new Fi(u, e.getParent(u, e.isBlock))).next(!0)),
					o = r.current();
				o;
				o = r.next()
			)
				if (3 === o.nodeType && !Xl(o))
					return n.setStart(o, 0), void t.setRng(n);
	}
	function fl(e, t, n) {
		if (e) {
			var r = t ? 'nextSibling' : 'previousSibling';
			for (e = n ? e : e[r]; e; e = e[r])
				if (1 === e.nodeType || !Xl(e)) return e;
		}
	}
	function dl(e, t) {
		return (
			sl(t) && (t = t.nodeName),
			!!e.schema.getTextBlockElements()[t.toLowerCase()]
		);
	}
	function hl(e, t, n) {
		return e.schema.isValidChild(t, n);
	}
	function ml(e, n) {
		return (
			'string' != typeof e
				? (e = e(n))
				: n &&
				  (e = e.replace(/%(\w+)/g, function(e, t) {
						return n[t] || e;
				  })),
			e
		);
	}
	function gl(e, t) {
		return (
			(e = '' + ((e = e || '').nodeName || e)),
			(t = '' + ((t = t || '').nodeName || t)),
			e.toLowerCase() === t.toLowerCase()
		);
	}
	function pl(e, t, n) {
		return (
			('color' !== n && 'backgroundColor' !== n) || (t = e.toHex(t)),
			'fontWeight' === n && 700 === t && (t = 'bold'),
			'fontFamily' === n &&
				(t = t.replace(/[\'\"]/g, '').replace(/,\s+/g, ',')),
			'' + t
		);
	}
	function vl(e, t, n) {
		return pl(e, e.getStyle(t, n), n);
	}
	function yl(t, e) {
		var n;
		return (
			t.getParent(e, function(e) {
				return (n = t.getStyle(e, 'text-decoration')) && 'none' !== n;
			}),
			n
		);
	}
	function bl(e, t, n) {
		return e.getParents(t, n, e.getRoot());
	}
	function Cl(e, t) {
		for (var n = t; n; ) {
			if (Qt.isElement(n) && e.getContentEditable(n))
				return 'false' === e.getContentEditable(n) ? n : t;
			n = n.parentNode;
		}
		return t;
	}
	function wl(e, t, n, r) {
		for (var o = t.data, i = n; e ? 0 <= i : i < o.length; e ? i-- : i++)
			if (r(o.charAt(i))) return e ? i + 1 : i;
		return -1;
	}
	function xl(e, t, n) {
		return wl(e, t, n, function(e) {
			return Kl(e) || ul(e);
		});
	}
	function zl(e, t, n) {
		return wl(e, t, n, cl);
	}
	function El(i, e, t, n, a, r) {
		function o(e, t, n) {
			var r = cc(i),
				o = a ? r.backwards : r.forwards;
			return R.from(
				o(
					e,
					t,
					function(e, t) {
						return Yl(e.parentNode) ? -1 : n(a, (u = e), t);
					},
					c
				)
			);
		}
		var u,
			c = i.getParent(t, i.isBlock) || e;
		return o(t, n, xl)
			.bind(function(e) {
				return r ? o(e.container, e.offset + (a ? -1 : 0), zl) : R.some(e);
			})
			.orThunk(function() {
				return u
					? R.some({ container: u, offset: a ? 0 : u.length })
					: R.none();
			});
	}
	function Nl(e, t, n, r, o) {
		Qt.isText(r) && 0 === r.nodeValue.length && r[o] && (r = r[o]);
		for (var i = Gl(e, r), a = 0; a < i.length; a++)
			for (var u = 0; u < t.length; u++) {
				var c = t[u];
				if (
					!('collapsed' in c && c.collapsed !== n.collapsed) &&
					e.is(i[a], c.selector)
				)
					return i[a];
			}
		return r;
	}
	function Sl(t, e, n, r) {
		var o,
			i = t.dom,
			a = i.getRoot();
		if ((e[0].wrapper || (o = i.getParent(n, e[0].block, a)), !o)) {
			var u = i.getParent(n, 'LI,TD,TH');
			o = i.getParent(
				Qt.isText(n) ? n.parentNode : n,
				function(e) {
					return e !== a && Jl(t, e);
				},
				u
			);
		}
		if ((o && e[0].wrapper && (o = Gl(i, o, 'ul,ol').reverse()[0] || o), !o))
			for (o = n; o[r] && !i.isBlock(o[r]) && ((o = o[r]), !gl(o, 'br')); );
		return o || n;
	}
	function kl(e, t, n, r, o, i, a) {
		var u, c, s, l, f, d;
		if (
			((u = c = a ? n : o),
			(l = a ? 'previousSibling' : 'nextSibling'),
			(f = e.getRoot()),
			Qt.isText(u) && !Zl(u) && (a ? 0 < r : i < u.nodeValue.length))
		)
			return u;
		for (;;) {
			if (!t[0].block_expand && e.isBlock(c)) return c;
			for (s = c[l]; s; s = s[l])
				if (
					!Yl(s) &&
					!Zl(s) &&
					('BR' !== (d = s).nodeName ||
						!d.getAttribute('data-mce-bogus') ||
						d.nextSibling)
				)
					return c;
			if (c === f || c.parentNode === f) {
				u = c;
				break;
			}
			c = c.parentNode;
		}
		return u;
	}
	function Tl(e, t, n, r) {
		void 0 === r && (r = !1);
		var o = t.startContainer,
			i = t.startOffset,
			a = t.endContainer,
			u = t.endOffset,
			c = e.dom;
		return (
			Qt.isElement(o) &&
				o.hasChildNodes() &&
				((o = Qa(o, i)), Qt.isText(o) && (i = 0)),
			Qt.isElement(a) &&
				a.hasChildNodes() &&
				((a = Qa(a, t.collapsed ? u : u - 1)),
				Qt.isText(a) && (u = a.nodeValue.length)),
			(o = Cl(c, o)),
			(a = Cl(c, a)),
			(Yl(o.parentNode) || Yl(o)) &&
				((o = Yl(o) ? o : o.parentNode),
				(o = t.collapsed ? o.previousSibling || o : o.nextSibling || o),
				Qt.isText(o) && (i = t.collapsed ? o.length : 0)),
			(Yl(a.parentNode) || Yl(a)) &&
				((a = Yl(a) ? a : a.parentNode),
				(a = t.collapsed ? a.nextSibling || a : a.previousSibling || a),
				Qt.isText(a) && (u = t.collapsed ? 0 : a.length)),
			t.collapsed &&
				(El(c, e.getBody(), o, i, !0, r).each(function(e) {
					var t = e.container,
						n = e.offset;
					(o = t), (i = n);
				}),
				El(c, e.getBody(), a, u, !1, r).each(function(e) {
					var t = e.container,
						n = e.offset;
					(a = t), (u = n);
				})),
			(n[0].inline || n[0].block_expand) &&
				((n[0].inline && Qt.isText(o) && 0 !== i) ||
					(o = kl(c, n, o, i, a, u, !0)),
				(n[0].inline && Qt.isText(a) && u !== a.nodeValue.length) ||
					(a = kl(c, n, o, i, a, u, !1))),
			n[0].selector &&
				!1 !== n[0].expand &&
				!n[0].inline &&
				((o = Nl(c, n, t, o, 'previousSibling')),
				(a = Nl(c, n, t, a, 'nextSibling'))),
			(n[0].block || n[0].selector) &&
				((o = Sl(e, n, o, 'previousSibling')),
				(a = Sl(e, n, a, 'nextSibling')),
				n[0].block &&
					(c.isBlock(o) || (o = kl(c, n, o, i, a, u, !0)),
					c.isBlock(a) || (a = kl(c, n, o, i, a, u, !1)))),
			Qt.isElement(o) && ((i = c.nodeIndex(o)), (o = o.parentNode)),
			Qt.isElement(a) && ((u = c.nodeIndex(a) + 1), (a = a.parentNode)),
			{ startContainer: o, startOffset: i, endContainer: a, endOffset: u }
		);
	}
	var Al,
		Ml = Qt.isContentEditableFalse,
		Rl = Qt.isText,
		_l = Qt.isElement,
		Dl = Qt.isBr,
		Ol = qa,
		Hl = function(e) {
			return (
				Eu(e) ||
				(function(e) {
					return (
						!!ku(e) &&
						!0 !==
							y(
								G(e.getElementsByTagName('*')),
								function(e, t) {
									return e || bu(t);
								},
								!1
							)
					);
				})(e)
			);
		},
		Bl = $a,
		Pl = function(e, t, n) {
			var r, o, i, a, u;
			if (!_l(n) || !t) return null;
			if (t.isEqual(Vc.after(n)) && n.lastChild) {
				if (
					((u = Vc.after(n.lastChild)),
					zc(e) && Ol(n.lastChild) && _l(n.lastChild))
				)
					return Dl(n.lastChild) ? Vc.before(n.lastChild) : u;
			} else u = t;
			var c = u.container(),
				s = u.offset();
			if (Rl(c)) {
				if (zc(e) && 0 < s) return Vc(c, --s);
				if (xc(e) && s < c.length) return Vc(c, ++s);
				r = c;
			} else {
				if (zc(e) && 0 < s && ((o = Ws(c, s - 1)), Ol(o)))
					return !Hl(o) && (i = Nc(o, e, Bl, o))
						? Rl(i)
							? Vc(i, i.data.length)
							: Vc.after(i)
						: Rl(o)
						? Vc(o, o.data.length)
						: Vc.before(o);
				if (xc(e) && s < c.childNodes.length && ((o = Ws(c, s)), Ol(o)))
					return Dl(o)
						? (function(e, t) {
								var n = t.nextSibling;
								return n && Ol(n)
									? Rl(n)
										? Vc(n, 0)
										: Vc.before(n)
									: Pl(Pc.Forwards, Vc.after(t), e);
						  })(n, o)
						: !Hl(o) && (i = Nc(o, e, Bl, o))
						? Rl(i)
							? Vc(i, 0)
							: Vc.before(i)
						: Rl(o)
						? Vc(o, 0)
						: Vc.after(o);
				r = o || u.getNode();
			}
			return ((xc(e) && u.isAtEnd()) || (zc(e) && u.isAtStart())) &&
				((r = Nc(r, e, $(!0), n, !0)), Bl(r, n))
				? Ks(e, r)
				: ((o = Nc(r, e, Bl, n)),
				  !(a = Xn.last(
						U(
							(function(e, t) {
								for (var n = []; e && e !== t; ) n.push(e), (e = e.parentNode);
								return n;
							})(c, n),
							Ml
						)
				  )) ||
				  (o && a.contains(o))
						? o
							? Ks(e, o)
							: null
						: (u = xc(e) ? Vc.after(a) : Vc.before(a)));
		},
		Ll = function(e, t, n) {
			var r = Xs(t);
			return R.from(e ? r.next(n) : r.prev(n));
		},
		Vl = function(t, n, e, r) {
			return Qs(t, n, e).bind(function(e) {
				return r(e) ? Vl(t, n, e, r) : R.some(e);
			});
		},
		Il = d(Ll, !0),
		Fl = d(Ll, !1),
		Ul = {
			fromPosition: Ll,
			nextPosition: Il,
			prevPosition: Fl,
			navigate: Qs,
			navigateIgnore: Vl,
			positionIn: el,
			firstPositionIn: d(el, !0),
			lastPositionIn: d(el, !1)
		},
		jl = function(e, t) {
			var n = e.dom;
			if (t) {
				if (
					(function(e) {
						return Zn.isArray(e.start);
					})(t)
				)
					return (function(e, t) {
						var n = e.createRng();
						return ol(e, !0, t, n) && ol(e, !1, t, n) ? R.some(n) : R.none();
					})(n, t);
				if (
					(function(e) {
						return 'string' == typeof e.start;
					})(t)
				)
					return R.some(
						(function(e, t) {
							var n, r;
							return (
								(n = e.createRng()),
								(r = Gu(e.getRoot(), t.start)),
								n.setStart(r.container(), r.offset()),
								(r = Gu(e.getRoot(), t.end)),
								n.setEnd(r.container(), r.offset()),
								n
							);
						})(n, t)
					);
				if (
					(function(e) {
						return e.hasOwnProperty('id');
					})(t)
				)
					return (function(r, e) {
						var t = al(r, 'start', e),
							n = al(r, 'end', e);
						return tu(t, n.or(t), function(e, t) {
							var n = r.createRng();
							return (
								n.setStart(tl(r, e.container()), e.offset()),
								n.setEnd(tl(r, t.container()), t.offset()),
								n
							);
						});
					})(n, t);
				if (
					(function(e) {
						return e.hasOwnProperty('name');
					})(t)
				)
					return (function(n, e) {
						return R.from(n.select(e.name)[e.index]).map(function(e) {
							var t = n.createRng();
							return t.selectNode(e), t;
						});
					})(n, t);
				if (
					(function(e) {
						return e.hasOwnProperty('rng');
					})(t)
				)
					return R.some(t.rng);
			}
			return R.none();
		},
		ql = function(e, t, n) {
			return Wc.getBookmark(e, t, n);
		},
		$l = function(t, e) {
			jl(t, e).each(function(e) {
				t.setRng(e);
			});
		},
		Wl = function(e) {
			return (
				Qt.isElement(e) &&
				'SPAN' === e.tagName &&
				'bookmark' === e.getAttribute('data-mce-type')
			);
		},
		Kl =
			((Al = qr),
			function(e) {
				return Al === e;
			}),
		Xl = function(e) {
			return e && Qt.isText(e) && /^([\t \r\n]+|)$/.test(e.nodeValue);
		},
		Yl = Wl,
		Gl = bl,
		Zl = Xl,
		Jl = dl,
		Ql = Zn.each,
		ef = function(e, t, u) {
			var n = t.startContainer,
				r = t.startOffset,
				o = t.endContainer,
				i = t.endOffset,
				a = e.select('td[data-mce-selected],th[data-mce-selected]');
			if (0 < a.length)
				Ql(a, function(e) {
					u([e]);
				});
			else {
				var c = function(e) {
						var t;
						return (
							3 === (t = e[0]).nodeType &&
								t === n &&
								r >= t.nodeValue.length &&
								e.splice(0, 1),
							(t = e[e.length - 1]),
							0 === i &&
								0 < e.length &&
								t === o &&
								3 === t.nodeType &&
								e.splice(e.length - 1, 1),
							e
						);
					},
					s = function(e, t, n) {
						for (var r = []; e && e !== n; e = e[t]) r.push(e);
						return r;
					},
					l = function(e, t) {
						do {
							if (e.parentNode === t) return e;
							e = e.parentNode;
						} while (e);
					},
					f = function(e, t, n) {
						for (
							var r = n ? 'nextSibling' : 'previousSibling',
								o = e,
								i = o.parentNode;
							o && o !== t;
							o = i
						) {
							i = o.parentNode;
							var a = s(o === e ? o : o[r], r);
							a.length && (n || a.reverse(), u(c(a)));
						}
					};
				if (
					(1 === n.nodeType && n.hasChildNodes() && (n = n.childNodes[r]),
					1 === o.nodeType &&
						o.hasChildNodes() &&
						(o = (function(e, t) {
							var n = e.childNodes;
							return (
								--t > n.length - 1 ? (t = n.length - 1) : t < 0 && (t = 0),
								n[t] || e
							);
						})(o, i)),
					n === o)
				)
					return u(c([n]));
				for (var d = e.findCommonAncestor(n, o), h = n; h; h = h.parentNode) {
					if (h === o) return f(n, d, !0);
					if (h === d) break;
				}
				for (h = o; h; h = h.parentNode) {
					if (h === n) return f(o, d);
					if (h === d) break;
				}
				var m = l(n, d) || n,
					g = l(o, d) || o;
				f(n, m, !0);
				var p = s(
					m === n ? m : m.nextSibling,
					'nextSibling',
					g === o ? g.nextSibling : g
				);
				p.length && u(c(p)), f(o, g);
			}
		};
	function tf(e) {
		return lf.get(e);
	}
	function nf(t, n, r, o) {
		return be(n).fold(
			function() {
				return 'skipping';
			},
			function(e) {
				return 'br' === o ||
					(function(e) {
						return Lt(e) && tf(e) === jr;
					})(n)
					? 'valid'
					: (function(e) {
							return Pt(e) && ba(e, cu());
					  })(n)
					? 'existing'
					: sc(n)
					? 'caret'
					: hl(t, r, o) && hl(t, Oe(e), r)
					? 'valid'
					: 'invalid-child';
			}
		);
	}
	function rf(e, t, n, r) {
		var o = t.uid,
			i =
				void 0 === o
					? (function(e) {
							var t = new Date().getTime();
							return (
								e + '_' + Math.floor(1e9 * Math.random()) + ++du + String(t)
							);
					  })('mce-annotation')
					: o,
			a = (function h(e, t) {
				var n = {};
				for (var r in e)
					Object.prototype.hasOwnProperty.call(e, r) &&
						t.indexOf(r) < 0 &&
						(n[r] = e[r]);
				if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
						t.indexOf(r[o]) < 0 &&
							Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
							(n[r[o]] = e[r[o]]);
				}
				return n;
			})(t, ['uid']),
			u = it.fromTag('span', e);
		va(u, cu()), en(u, '' + lu(), i), en(u, '' + su(), n);
		var c = r(i, a),
			s = c.attributes,
			l = void 0 === s ? {} : s,
			f = c.classes,
			d = void 0 === f ? [] : f;
		return (
			Ke(u, l),
			(function(t, e) {
				F(e, function(e) {
					va(t, e);
				});
			})(u, d),
			u
		);
	}
	function of(n, e, t, r, o) {
		function i() {
			s.set(R.none());
		}
		function a(e) {
			F(e, l);
		}
		var u = [],
			c = rf(n.getDoc(), o, t, r),
			s = at(R.none()),
			l = function(e) {
				switch (nf(n, e, 'span', Oe(e))) {
					case 'invalid-child':
						i();
						var t = Ee(e);
						a(t), i();
						break;
					case 'valid':
						!(function(e, t) {
							Te(e, t), Ht(t, e);
						})(
							e,
							s.get().getOrThunk(function() {
								var e = Oa(c);
								return u.push(e), s.set(R.some(e)), e;
							})
						);
				}
			};
		return (
			ef(n.dom, e, function(e) {
				i(),
					(function(e) {
						var t = X(e, it.fromDom);
						a(t);
					})(e);
			}),
			u
		);
	}
	function af(o, i, a, u) {
		o.undoManager.transact(function() {
			var e = o.selection.getRng();
			if (
				(e.collapsed &&
					(function(e, t) {
						var n = Tl(e, t, [{ inline: !0 }]);
						t.setStart(n.startContainer, n.startOffset),
							t.setEnd(n.endContainer, n.endOffset),
							e.selection.setRng(t);
					})(o, e),
				o.selection.getRng().collapsed)
			) {
				var t = rf(o.getDoc(), u, i, a.decorate);
				_a(t, qr),
					o.selection.getRng().insertNode(t.dom()),
					o.selection.select(t.dom());
			} else {
				var n = Wc.getPersistentBookmark(o.selection, !1),
					r = o.selection.getRng();
				of(o, r, i, a.decorate, u), o.selection.moveToBookmark(n);
			}
		});
	}
	function uf(r) {
		var o = (function() {
			var n = {};
			return {
				register: function(e, t) {
					n[e] = { name: e, settings: t };
				},
				lookup: function(e) {
					return n.hasOwnProperty(e)
						? R.from(n[e]).map(function(e) {
								return e.settings;
						  })
						: R.none();
				}
			};
		})();
		Ra(r, o);
		var n = Ma(r);
		return {
			register: function(e, t) {
				o.register(e, t);
			},
			annotate: function(t, n) {
				o.lookup(t).each(function(e) {
					af(r, t, e, n);
				});
			},
			annotationChanged: function(e, t) {
				n.addListener(e, t);
			},
			remove: function(e) {
				Aa(r, R.some(e)).each(function(e) {
					var t = e.elements;
					F(t, De);
				});
			},
			getAll: function(e) {
				var t = (function(e, t) {
					var n = it.fromDom(e.getBody()),
						r = Ca(n, '[' + su() + '="' + t + '"]'),
						o = {};
					return (
						F(r, function(e) {
							var t = Xe(e, lu()),
								n = o.hasOwnProperty(t) ? o[t] : [];
							o[t] = n.concat([e]);
						}),
						o
					);
				})(r, e);
				return S(t, function(e) {
					return X(e, function(e) {
						return e.dom();
					});
				});
			}
		};
	}
	function cf(e, t, n) {
		var r = n ? 'lastChild' : 'firstChild',
			o = n ? 'prev' : 'next';
		if (e[r]) return e[r];
		if (e !== t) {
			var i = e[o];
			if (i) return i;
			for (var a = e.parent; a && a !== t; a = a.parent)
				if ((i = a[o])) return i;
		}
	}
	function sf(e) {
		if (!ff.test(e.value)) return !1;
		var t = e.parent;
		return (
			!t || ('span' === t.name && !t.attr('style')) || !/^[ ]+$/.test(e.value)
		);
	}
	var lf = (function BN(n, r) {
			var t = function(e) {
				return n(e) ? R.from(e.dom().nodeValue) : R.none();
			};
			return {
				get: function(e) {
					if (!n(e))
						throw new Error('Can only get ' + r + ' value of a ' + r + ' node');
					return t(e).getOr('');
				},
				getOption: t,
				set: function(e, t) {
					if (!n(e))
						throw new Error(
							'Can only set raw ' + r + ' value of a ' + r + ' node'
						);
					e.dom().nodeValue = t;
				}
			};
		})(Lt, 'text'),
		ff = /^[ \t\r\n]*$/,
		df = {
			'#text': 3,
			'#comment': 8,
			'#cdata': 4,
			'#pi': 7,
			'#doctype': 10,
			'#document-fragment': 11
		},
		hf =
			((mf.create = function(e, t) {
				var n = new mf(e, df[e] || 1);
				if (t) for (var r in t) n.attr(r, t[r]);
				return n;
			}),
			(mf.prototype.replace = function(e) {
				return (
					e.parent && e.remove(), this.insert(e, this), this.remove(), this
				);
			}),
			(mf.prototype.attr = function(e, t) {
				var n;
				if ('string' != typeof e) {
					for (var r in e) this.attr(r, e[r]);
					return this;
				}
				if ((n = this.attributes)) {
					if (t === undefined) return n.map[e];
					if (null === t) {
						if (e in n.map) {
							delete n.map[e];
							for (var o = n.length; o--; )
								if (n[o].name === e) return n.splice(o, 1), this;
						}
						return this;
					}
					if (e in n.map) {
						for (o = n.length; o--; )
							if (n[o].name === e) {
								n[o].value = t;
								break;
							}
					} else n.push({ name: e, value: t });
					return (n.map[e] = t), this;
				}
			}),
			(mf.prototype.clone = function() {
				var e,
					t = new mf(this.name, this.type);
				if ((e = this.attributes)) {
					var n = [];
					n.map = {};
					for (var r = 0, o = e.length; r < o; r++) {
						var i = e[r];
						'id' !== i.name &&
							((n[n.length] = { name: i.name, value: i.value }),
							(n.map[i.name] = i.value));
					}
					t.attributes = n;
				}
				return (t.value = this.value), (t.shortEnded = this.shortEnded), t;
			}),
			(mf.prototype.wrap = function(e) {
				return this.parent.insert(e, this), e.append(this), this;
			}),
			(mf.prototype.unwrap = function() {
				for (var e = this.firstChild; e; ) {
					var t = e.next;
					this.insert(e, this, !0), (e = t);
				}
				this.remove();
			}),
			(mf.prototype.remove = function() {
				var e = this.parent,
					t = this.next,
					n = this.prev;
				return (
					e &&
						(e.firstChild === this
							? (e.firstChild = t) && (t.prev = null)
							: (n.next = t),
						e.lastChild === this
							? (e.lastChild = n) && (n.next = null)
							: (t.prev = n),
						(this.parent = this.next = this.prev = null)),
					this
				);
			}),
			(mf.prototype.append = function(e) {
				e.parent && e.remove();
				var t = this.lastChild;
				return (
					t
						? (((t.next = e).prev = t), (this.lastChild = e))
						: (this.lastChild = this.firstChild = e),
					(e.parent = this),
					e
				);
			}),
			(mf.prototype.insert = function(e, t, n) {
				e.parent && e.remove();
				var r = t.parent || this;
				return (
					n
						? (t === r.firstChild ? (r.firstChild = e) : (t.prev.next = e),
						  (e.prev = t.prev),
						  ((e.next = t).prev = e))
						: (t === r.lastChild ? (r.lastChild = e) : (t.next.prev = e),
						  (e.next = t.next),
						  ((e.prev = t).next = e)),
					(e.parent = r),
					e
				);
			}),
			(mf.prototype.getAll = function(e) {
				for (var t = [], n = this.firstChild; n; n = cf(n, this))
					n.name === e && t.push(n);
				return t;
			}),
			(mf.prototype.empty = function() {
				if (this.firstChild) {
					for (var e = [], t = this.firstChild; t; t = cf(t, this)) e.push(t);
					for (var n = e.length; n--; )
						(t =
							e[
								n
							]).parent = t.firstChild = t.lastChild = t.next = t.prev = null;
				}
				return (this.firstChild = this.lastChild = null), this;
			}),
			(mf.prototype.isEmpty = function(e, t, n) {
				void 0 === t && (t = {});
				var r = this.firstChild;
				if (r)
					do {
						if (1 === r.type) {
							if (r.attr('data-mce-bogus')) continue;
							if (e[r.name]) return !1;
							for (var o = r.attributes.length; o--; ) {
								var i = r.attributes[o].name;
								if ('name' === i || 0 === i.indexOf('data-mce-bookmark'))
									return !1;
							}
						}
						if (8 === r.type) return !1;
						if (3 === r.type && !sf(r)) return !1;
						if (
							3 === r.type &&
							r.parent &&
							t[r.parent.name] &&
							ff.test(r.value)
						)
							return !1;
						if (n && n(r)) return !1;
					} while ((r = cf(r, this)));
				return !0;
			}),
			(mf.prototype.walk = function(e) {
				return cf(this, null, e);
			}),
			mf);
	function mf(e, t) {
		(this.name = e),
			1 === (this.type = t) &&
				((this.attributes = []), (this.attributes.map = {}));
	}
	function gf(e, t, n) {
		var r,
			o,
			i,
			a,
			u = 1;
		for (
			a = e.getShortEndedElements(),
				(i = /<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g).lastIndex = r = n;
			(o = i.exec(t));

		) {
			if (((r = i.lastIndex), '/' === o[1])) u--;
			else if (!o[1]) {
				if (o[2] in a) continue;
				u++;
			}
			if (0 === u) break;
		}
		return r;
	}
	function pf(e, t) {
		var n = e.exec(t);
		if (n) {
			var r = n[1],
				o = n[2];
			return 'string' == typeof r && 'data-mce-bogus' === r.toLowerCase()
				? o
				: null;
		}
		return null;
	}
	function vf(q, $) {
		void 0 === $ && ($ = Pr());
		function e() {}
		!1 !== (q = q || {}).fix_self_closing && (q.fix_self_closing = !0);
		var W = q.comment ? q.comment : e,
			K = q.cdata ? q.cdata : e,
			X = q.text ? q.text : e,
			Y = q.start ? q.start : e,
			G = q.end ? q.end : e,
			Z = q.pi ? q.pi : e,
			J = q.doctype ? q.doctype : e;
		return {
			parse: function(i, e) {
				void 0 === e && (e = 'html');
				function t(e) {
					var t, n;
					for (t = B.length; t-- && B[t].name !== e; );
					if (0 <= t) {
						for (n = B.length - 1; t <= n; n--) (e = B[n]).valid && G(e.name);
						B.length = t;
					}
				}
				function a(e) {
					'' !== e &&
						('>' === e.charAt(0) && (e = ' ' + e),
						q.allow_conditional_comments ||
							'[if' !== e.substr(0, 3).toLowerCase() ||
							(e = ' ' + e),
						W(e));
				}
				function n(e, t) {
					var n = e || '',
						r = !ue(n, '--'),
						o = (function(e, t, n) {
							void 0 === n && (n = 0);
							var r = e.toLowerCase();
							if (
								-1 !== r.indexOf('[if ', n) &&
								(function(e, t) {
									return /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(
										e.substr(t)
									);
								})(r, n)
							) {
								var o = r.indexOf('[endif]', n);
								return r.indexOf('>', o);
							}
							if (t) {
								var i = r.indexOf('>', n);
								return -1 !== i ? i : r.length;
							}
							var a = /--!?>/;
							a.lastIndex = n;
							var u = a.exec(e);
							return u ? u.index + u[0].length : r.length;
						})(i, r, t);
					return (e = i.substr(t, o - t)), a(r ? n + e : e), o + 1;
				}
				function r(e, t, n, r, o) {
					var i, a;
					if (
						((n = (t = t.toLowerCase()) in p ? t : L(n || r || o || '')),
						y &&
							!h &&
							!1 ===
								(function(e) {
									return 0 === e.indexOf('data-') || 0 === e.indexOf('aria-');
								})(t))
					) {
						if (!(i = z[t]) && E) {
							for (a = E.length; a-- && !(i = E[a]).pattern.test(t); );
							-1 === a && (i = null);
						}
						if (!i) return;
						if (i.validValues && !(n in i.validValues)) return;
					}
					if (V[t] && !q.allow_script_urls) {
						var u = n.replace(/[\s\u0000-\u001F]+/g, '');
						try {
							u = decodeURIComponent(u);
						} catch (c) {
							u = unescape(u);
						}
						if (I.test(u)) return;
						if (
							(function(e, t) {
								return (
									!e.allow_html_data_urls &&
									(/^data:image\//i.test(t)
										? !1 === e.allow_svg_data_urls &&
										  /^data:image\/svg\+xml/i.test(t)
										: /^data:/i.test(t))
								);
							})(q, u)
						)
							return;
					}
					(h && (t in V || 0 === t.indexOf('on'))) ||
						((s.map[t] = n), s.push({ name: t, value: n }));
				}
				var o,
					u,
					c,
					s,
					l,
					f,
					d,
					h,
					m,
					g,
					p,
					v,
					y,
					b,
					C,
					w,
					x,
					z,
					E,
					N,
					S,
					k,
					T,
					A,
					M,
					R,
					_,
					D,
					O,
					H = 0,
					B = [],
					P = 0,
					L = Sr.decode,
					V = Zn.makeMap(
						'src,href,data,background,formaction,poster,xlink:href'
					),
					I = /((java|vb)script|mhtml):/i,
					F = 'html' === e ? 0 : 1;
				for (
					M = new RegExp(
						'<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\\/|\\s+)>))',
						'g'
					),
						R = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,
						g = $.getShortEndedElements(),
						A = q.self_closing_elements || $.getSelfClosingElements(),
						p = $.getBoolAttrs(),
						y = q.validate,
						m = q.remove_internals,
						O = q.fix_self_closing,
						_ = $.getSpecialElements(),
						T = i + '>';
					(o = M.exec(T));

				) {
					var U = o[0];
					if ((H < o.index && X(L(i.substr(H, o.index - H))), (u = o[7])))
						':' === (u = u.toLowerCase()).charAt(0) && (u = u.substr(1)), t(u);
					else if ((u = o[8])) {
						if (o.index + U.length > i.length) {
							X(L(i.substr(o.index))), (H = o.index + U.length);
							continue;
						}
						':' === (u = u.toLowerCase()).charAt(0) && (u = u.substr(1)),
							(v = u in g),
							O && A[u] && 0 < B.length && B[B.length - 1].name === u && t(u);
						var j = pf(R, o[9]);
						if (null !== j) {
							if ('all' === j) {
								(H = gf($, i, M.lastIndex)), (M.lastIndex = H);
								continue;
							}
							C = !1;
						}
						if (!y || (b = $.getElementRule(u))) {
							if (
								((C = !0),
								y && ((z = b.attributes), (E = b.attributePatterns)),
								(x = o[9])
									? ((h = -1 !== x.indexOf('data-mce-type')) && m && (C = !1),
									  ((s = []).map = {}),
									  x.replace(R, r))
									: ((s = []).map = {}),
								y && !h)
							) {
								if (
									((N = b.attributesRequired),
									(S = b.attributesDefault),
									(k = b.attributesForced),
									b.removeEmptyAttrs && !s.length && (C = !1),
									k)
								)
									for (l = k.length; l--; )
										(d = (w = k[l]).name),
											'{$uid}' === (D = w.value) && (D = 'mce_' + P++),
											(s.map[d] = D),
											s.push({ name: d, value: D });
								if (S)
									for (l = S.length; l--; )
										(d = (w = S[l]).name) in s.map ||
											('{$uid}' === (D = w.value) && (D = 'mce_' + P++),
											(s.map[d] = D),
											s.push({ name: d, value: D }));
								if (N) {
									for (l = N.length; l-- && !(N[l] in s.map); );
									-1 === l && (C = !1);
								}
								if ((w = s.map['data-mce-bogus'])) {
									if ('all' === w) {
										(H = gf($, i, M.lastIndex)), (M.lastIndex = H);
										continue;
									}
									C = !1;
								}
							}
							C && Y(u, s, v);
						} else C = !1;
						if ((c = _[u])) {
							(c.lastIndex = H = o.index + U.length),
								(H = (o = c.exec(i))
									? (C && (f = i.substr(H, o.index - H)), o.index + o[0].length)
									: ((f = i.substr(H)), i.length)),
								C && (0 < f.length && X(f, !0), G(u)),
								(M.lastIndex = H);
							continue;
						}
						v ||
							(x && x.indexOf('/') === x.length - 1
								? C && G(u)
								: B.push({ name: u, valid: C }));
					} else if ((u = o[1])) a(u);
					else if ((u = o[2])) {
						if (
							!(
								1 == F ||
								q.preserve_cdata ||
								(0 < B.length && $.isValidChild(B[B.length - 1].name, '#cdata'))
							)
						) {
							(H = n('', o.index + 2)), (M.lastIndex = H);
							continue;
						}
						K(u);
					} else if ((u = o[3])) J(u);
					else {
						if ((u = o[4]) || '<!' === U) {
							(H = n(u, o.index + U.length)), (M.lastIndex = H);
							continue;
						}
						if ((u = o[5])) {
							if (1 != F) {
								(H = n('?', o.index + 2)), (M.lastIndex = H);
								continue;
							}
							Z(u, o[6]);
						}
					}
					H = o.index + U.length;
				}
				for (H < i.length && X(L(i.substr(H))), l = B.length - 1; 0 <= l; l--)
					(u = B[l]).valid && G(u.name);
			}
		};
	}
	(vf = vf || {}).findEndTag = gf;
	function yf(e, t) {
		var n,
			r,
			o,
			i,
			a,
			u = t,
			c = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
			s = e.schema;
		for (
			u = (function(e, t) {
				var n = new RegExp(
					['\\s?(' + e.join('|') + ')="[^"]+"'].join('|'),
					'gi'
				);
				return t.replace(n, '');
			})(e.getTempAttrs(), u),
				a = s.getShortEndedElements();
			(i = c.exec(u));

		)
			(r = c.lastIndex),
				(o = i[0].length),
				(n = a[i[1]] ? r : fd.findEndTag(s, u, r)),
				(u = u.substring(0, r - o) + u.substring(n)),
				(c.lastIndex = r - o);
		return mu.trim(u);
	}
	function bf(e, t, n) {
		var r;
		if (
			((t.format = t.format ? t.format : 'html'),
			(t.get = !0),
			(t.getInner = !0),
			t.no_events || e.fire('BeforeGetContent', t),
			'raw' === t.format)
		)
			r = Zn.trim(dd.trimExternal(e.serializer, n.innerHTML));
		else if ('text' === t.format) r = mu.trim(n.innerText || n.textContent);
		else {
			if ('tree' === t.format) return e.serializer.serialize(n, t);
			r = (function(e, t) {
				var n = as(e),
					r = new RegExp(
						'^(<' +
							n +
							'[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/' +
							n +
							'>[\r\n]*|<br \\/>[\r\n]*)$'
					);
				return t.replace(r, '');
			})(e, e.serializer.serialize(n, t));
		}
		return (
			'text' === t.format || hr(it.fromDom(n))
				? (t.content = r)
				: (t.content = Zn.trim(r)),
			t.no_events || e.fire('GetContent', t),
			t.content
		);
	}
	function Cf(e) {
		var u,
			c,
			s,
			l,
			f,
			d = [];
		return (
			(u = (e = e || {}).indent),
			(c = hd(e.indent_before || '')),
			(s = hd(e.indent_after || '')),
			(l = Sr.getEncodeFunc(e.entity_encoding || 'raw', e.entities)),
			(f = 'html' === e.element_format),
			{
				start: function(e, t, n) {
					var r, o, i, a;
					if (
						(u &&
							c[e] &&
							0 < d.length &&
							0 < (a = d[d.length - 1]).length &&
							'\n' !== a &&
							d.push('\n'),
						d.push('<', e),
						t)
					)
						for (r = 0, o = t.length; r < o; r++)
							(i = t[r]), d.push(' ', i.name, '="', l(i.value, !0), '"');
					(d[d.length] = !n || f ? '>' : ' />'),
						n &&
							u &&
							s[e] &&
							0 < d.length &&
							0 < (a = d[d.length - 1]).length &&
							'\n' !== a &&
							d.push('\n');
				},
				end: function(e) {
					var t;
					d.push('</', e, '>'),
						u &&
							s[e] &&
							0 < d.length &&
							0 < (t = d[d.length - 1]).length &&
							'\n' !== t &&
							d.push('\n');
				},
				text: function(e, t) {
					0 < e.length && (d[d.length] = t ? e : l(e));
				},
				cdata: function(e) {
					d.push('<![CDATA[', e, ']]>');
				},
				comment: function(e) {
					d.push('\x3c!--', e, '--\x3e');
				},
				pi: function(e, t) {
					t ? d.push('<?', e, ' ', l(t), '?>') : d.push('<?', e, '?>'),
						u && d.push('\n');
				},
				doctype: function(e) {
					d.push('<!DOCTYPE', e, '>', u ? '\n' : '');
				},
				reset: function() {
					d.length = 0;
				},
				getContent: function() {
					return d.join('').replace(/\n$/, '');
				}
			}
		);
	}
	function wf(t, m) {
		void 0 === m && (m = Pr());
		var g = Cf(t);
		return (
			((t = t || {}).validate = !('validate' in t) || t.validate),
			{
				serialize: function(e) {
					var f, d;
					(d = t.validate),
						(f = {
							3: function(e) {
								g.text(e.value, e.raw);
							},
							8: function(e) {
								g.comment(e.value);
							},
							7: function(e) {
								g.pi(e.name, e.value);
							},
							10: function(e) {
								g.doctype(e.value);
							},
							4: function(e) {
								g.cdata(e.value);
							},
							11: function(e) {
								if ((e = e.firstChild)) for (; h(e), (e = e.next); );
							}
						}),
						g.reset();
					var h = function(e) {
						var t,
							n,
							r,
							o,
							i,
							a,
							u,
							c,
							s,
							l = f[e.type];
						if (l) l(e);
						else {
							if (
								((t = e.name),
								(n = e.shortEnded),
								(r = e.attributes),
								d &&
									r &&
									1 < r.length &&
									(((a = []).map = {}), (s = m.getElementRule(e.name))))
							) {
								for (u = 0, c = s.attributesOrder.length; u < c; u++)
									(o = s.attributesOrder[u]) in r.map &&
										((i = r.map[o]),
										(a.map[o] = i),
										a.push({ name: o, value: i }));
								for (u = 0, c = r.length; u < c; u++)
									(o = r[u].name) in a.map ||
										((i = r.map[o]),
										(a.map[o] = i),
										a.push({ name: o, value: i }));
								r = a;
							}
							if ((g.start(e.name, r, n), !n)) {
								if ((e = e.firstChild)) for (; h(e), (e = e.next); );
								g.end(t);
							}
						}
					};
					return 1 !== e.type || t.inner ? f[11](e) : h(e), g.getContent();
				}
			}
		);
	}
	function xf(e, t, n) {
		var r = (function(e, n, t) {
			var r = {},
				o = {},
				i = [];
			for (var a in (t.firstChild &&
				md(t.firstChild, function(t) {
					F(e, function(e) {
						e.name === t.name &&
							(r[e.name]
								? r[e.name].nodes.push(t)
								: (r[e.name] = { filter: e, nodes: [t] }));
					}),
						F(n, function(e) {
							'string' == typeof t.attr(e.name) &&
								(o[e.name]
									? o[e.name].nodes.push(t)
									: (o[e.name] = { filter: e, nodes: [t] }));
						});
				}),
			r))
				r.hasOwnProperty(a) && i.push(r[a]);
			for (var u in o) o.hasOwnProperty(u) && i.push(o[u]);
			return i;
		})(e, t, n);
		F(r, function(t) {
			F(t.filter.callbacks, function(e) {
				e(t.nodes, t.filter.name, {});
			});
		});
	}
	function zf(e) {
		var t = ve(e).dom();
		return e.dom() === t.activeElement;
	}
	function Ef(e) {
		var t = e !== undefined ? e.dom() : j.document;
		return R.from(t.activeElement).map(it.fromDom);
	}
	function Nf(e, t) {
		var n = Lt(t) ? tf(t).length : Ee(t).length + 1;
		return n < e ? n : e < 0 ? 0 : e;
	}
	function Sf(e) {
		return Cd.range(
			e.start(),
			Nf(e.soffset(), e.start()),
			e.finish(),
			Nf(e.foffset(), e.finish())
		);
	}
	function kf(e, t) {
		return !Qt.isRestrictedNode(t.dom()) && (Ot(e, t) || pe(e, t));
	}
	function Tf(t) {
		return function(e) {
			return kf(t, e.start()) && kf(t, e.finish());
		};
	}
	function Af(e) {
		return !0 === e.inline || wd.isIE();
	}
	function Mf(e) {
		return Cd.range(
			it.fromDom(e.startContainer),
			e.startOffset,
			it.fromDom(e.endContainer),
			e.endOffset
		);
	}
	function Rf(e) {
		var t = e.getSelection();
		return (t && 0 !== t.rangeCount ? R.from(t.getRangeAt(0)) : R.none()).map(
			Mf
		);
	}
	function _f(e) {
		var t = ye(e);
		return Rf(t.dom()).filter(Tf(e));
	}
	function Df(e, t) {
		return R.from(t)
			.filter(Tf(e))
			.map(Sf);
	}
	function Of(e) {
		var t = j.document.createRange();
		try {
			return (
				t.setStart(e.start().dom(), e.soffset()),
				t.setEnd(e.finish().dom(), e.foffset()),
				R.some(t)
			);
		} catch (n) {
			return R.none();
		}
	}
	function Hf(t) {
		return (t.bookmark ? t.bookmark : R.none())
			.bind(function(e) {
				return Df(it.fromDom(t.getBody()), e);
			})
			.bind(Of);
	}
	function Bf(t, e) {
		fe().browser.isIE()
			? (function(e) {
					e.on('focusout', function() {
						xd(e);
					});
			  })(t)
			: (function(e, t) {
					e.on('mouseup touchend', function(e) {
						t.throttle();
					});
			  })(t, e),
			t.on('keyup NodeChange', function(e) {
				!(function(e) {
					return 'nodechange' === e.type && e.selectionChange;
				})(e) && xd(t);
			});
	}
	function Pf(e) {
		return Nd.isEditorUIElement(e);
	}
	function Lf(t, e) {
		var n = t ? t.settings.custom_ui_selector : '';
		return (
			null !==
			kd.getParent(e, function(e) {
				return Pf(e) || (!!n && t.dom.is(e, n));
			})
		);
	}
	function Vf(r, e) {
		var t = e.editor;
		Sd(t),
			t.on('focusin', function() {
				var e = r.focusedEditor;
				e !== this &&
					(e && e.fire('blur', { focusedEditor: this }),
					r.setActive(this),
					(r.focusedEditor = this).fire('focus', { blurredEditor: e }),
					this.focus(!0));
			}),
			t.on('focusout', function() {
				var t = this;
				Pn.setEditorTimeout(t, function() {
					var e = r.focusedEditor;
					Lf(
						t,
						(function() {
							try {
								return j.document.activeElement;
							} catch (e) {
								return j.document.body;
							}
						})()
					) ||
						e !== t ||
						(t.fire('blur', { focusedEditor: null }), (r.focusedEditor = null));
				});
			}),
			cd ||
				((cd = function(e) {
					var t,
						n = r.activeEditor;
					(t = e.target),
						n &&
							t.ownerDocument === j.document &&
							(t === j.document.body ||
								Lf(n, t) ||
								r.focusedEditor !== n ||
								(n.fire('blur', { focusedEditor: null }),
								(r.focusedEditor = null)));
				}),
				kd.bind(j.document, 'focusin', cd));
	}
	function If(e, t) {
		e.focusedEditor === t.editor && (e.focusedEditor = null),
			e.activeEditor || (kd.unbind(j.document, 'focusin', cd), (cd = null));
	}
	function Ff(t, e) {
		return (function(e) {
			return e.collapsed
				? R.from(Qa(e.startContainer, e.startOffset)).map(it.fromDom)
				: R.none();
		})(e).bind(function(e) {
			return fr(e) ? R.some(e) : !1 === Ot(t, e) ? R.some(t) : R.none();
		});
	}
	function Uf(t, e) {
		Ff(it.fromDom(t.getBody()), e)
			.bind(function(e) {
				return Ul.firstPositionIn(e.dom());
			})
			.fold(
				function() {
					t.selection.normalize();
				},
				function(e) {
					return t.selection.setRng(e.toRange());
				}
			);
	}
	function jf(e) {
		if (e.setActive)
			try {
				e.setActive();
			} catch (t) {
				e.focus();
			}
		else e.focus();
	}
	function qf(e) {
		return (
			zf(e) ||
			(function(t) {
				return Ef(ve(t)).filter(function(e) {
					return t.dom().contains(e.dom());
				});
			})(e).isSome()
		);
	}
	function $f(e) {
		return e.inline
			? (function(e) {
					var t = e.getBody();
					return t && qf(it.fromDom(t));
			  })(e)
			: (function(e) {
					return e.iframeElement && zf(it.fromDom(e.iframeElement));
			  })(e);
	}
	function Wf(e) {
		return e instanceof hf;
	}
	function Kf(e, t) {
		e.dom.setHTML(e.getBody(), t),
			(function(r) {
				Dd(r) &&
					Ul.firstPositionIn(r.getBody()).each(function(e) {
						var t = e.getNode(),
							n = Qt.isTable(t) ? Ul.firstPositionIn(t).getOr(e) : e;
						r.selection.setRng(n.toRange());
					});
			})(e);
	}
	function Xf(t, n, r) {
		return (
			void 0 === r && (r = {}),
			(r.format = r.format ? r.format : 'html'),
			(r.set = !0),
			(r.content = Wf(n) ? '' : n),
			Wf(n) || r.no_events || (t.fire('BeforeSetContent', r), (n = r.content)),
			R.from(t.getBody()).fold($(n), function(e) {
				return Wf(n)
					? (function(e, t, n, r) {
							xf(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
							var o = wf({ validate: e.validate }, e.schema).serialize(n);
							return (
								(r.content = hr(it.fromDom(t)) ? o : Zn.trim(o)),
								Kf(e, r.content),
								r.no_events || e.fire('SetContent', r),
								n
							);
					  })(t, e, n, r)
					: (function(e, t, n, r) {
							var o, i;
							return (
								0 === n.length || /^\s+$/.test(n)
									? ((i = '<br data-mce-bogus="1">'),
									  'TABLE' === t.nodeName
											? (n = '<tr><td>' + i + '</td></tr>')
											: /^(UL|OL)$/.test(t.nodeName) &&
											  (n = '<li>' + i + '</li>'),
									  (n =
											(o = as(e)) &&
											e.schema.isValidChild(
												t.nodeName.toLowerCase(),
												o.toLowerCase()
											)
												? ((n = i),
												  e.dom.createHTML(
														o,
														e.settings.forced_root_block_attrs,
														n
												  ))
												: n || '<br data-mce-bogus="1">'),
									  Kf(e, n),
									  e.fire('SetContent', r))
									: ('raw' !== r.format &&
											(n = wf({ validate: e.validate }, e.schema).serialize(
												e.parser.parse(n, { isRootContent: !0, insert: !0 })
											)),
									  (r.content = hr(it.fromDom(t)) ? n : Zn.trim(n)),
									  Kf(e, r.content),
									  r.no_events || e.fire('SetContent', r)),
								r.content
							);
					  })(t, e, n, r);
			})
		);
	}
	function Yf(e) {
		return R.from(e).each(function(e) {
			return e.destroy();
		});
	}
	function Gf(e) {
		if (!e.removed) {
			var t = e._selectionOverrides,
				n = e.editorUpload,
				r = e.getBody(),
				o = e.getElement();
			r && e.save({ is_removing: !0 }),
				(e.removed = !0),
				e.unbindAllNativeEvents(),
				e.hasHiddenInput && o && Hd.remove(o.nextSibling),
				(function(e) {
					e.fire('remove');
				})(e),
				e.editorManager.remove(e),
				!e.inline &&
					r &&
					(function(e) {
						Hd.setStyle(e.id, 'display', e.orgDisplay);
					})(e),
				(function(e) {
					e.fire('detach');
				})(e),
				Hd.remove(e.getContainer()),
				Yf(t),
				Yf(n),
				e.destroy();
		}
	}
	function Zf(e, t) {
		var n = e.selection,
			r = e.dom;
		e.destroyed ||
			(t || e.removed
				? (t ||
						(e.editorManager.off('beforeunload', e._beforeUnload),
						e.theme && e.theme.destroy && e.theme.destroy(),
						Yf(n),
						Yf(r)),
				  (function(e) {
						var t = e.formElement;
						t &&
							(t._mceOldSubmit &&
								((t.submit = t._mceOldSubmit), (t._mceOldSubmit = null)),
							Hd.unbind(t, 'submit reset', e.formEventDelegate));
				  })(e),
				  (function(e) {
						(e.contentAreaContainer = e.formElement = e.container = e.editorContainer = null),
							(e.bodyElement = e.contentDocument = e.contentWindow = null),
							(e.iframeElement = e.targetElm = null),
							e.selection &&
								(e.selection = e.selection.win = e.selection.dom = e.selection.dom.doc = null);
				  })(e),
				  (e.destroyed = !0))
				: e.remove());
	}
	function Jf(e) {
		var t = D(e) ? e.join(' ') : e,
			n = X(K(t) ? t.split(' ') : [], ce);
		return U(n, function(e) {
			return 0 < e.length;
		});
	}
	function Qf(e, t) {
		return e.sections().hasOwnProperty(t);
	}
	function ed(e, t) {
		return A(e, 'toolbar_mode')
			.orThunk(function() {
				return A(e, 'toolbar_drawer').map(function(e) {
					return !1 === e ? 'wrap' : e;
				});
			})
			.getOr(t);
	}
	function td(e, t, n, r) {
		var o = Jf(n.forced_plugins),
			i = Jf(r.plugins),
			a = (function(e, t) {
				return Qf(e, t) ? e.sections()[t] : {};
			})(t, 'mobile'),
			u = a.plugins ? Jf(a.plugins) : i,
			c = (function(e, t) {
				return [].concat(Jf(e)).concat(Jf(t));
			})(
				o,
				e &&
					(function(e, t, n) {
						var r = e.sections();
						return Qf(e, t) && r[t].theme === n;
					})(t, 'mobile', 'mobile')
					? (function(e) {
							return U(e, d(h, jd));
					  })(u)
					: e && Qf(t, 'mobile')
					? u
					: i
			);
		return Zn.extend(r, { plugins: c.join(' ') });
	}
	function nd(e, t, n, r, o) {
		var i = e
				? {
						mobile: (function(e, t) {
							var n = {
								resize: !1,
								toolbar_mode: ed(e, 'scrolling'),
								toolbar_sticky: !1
							};
							return te(te(te({}, qd), n), t ? { menubar: !1 } : {});
						})(o, t)
				  }
				: {},
			a = (function(n, e) {
				var t = T(e, function(e, t) {
					return h(n, t);
				});
				return Ld(t.t, t.f);
			})(['mobile'], Pd(i, o)),
			u = Zn.extend(
				n,
				r,
				a.settings(),
				(function(e, t) {
					return e && Qf(t, 'mobile');
				})(e, a)
					? (function(e, t, n) {
							void 0 === n && (n = {});
							var r = e.sections(),
								o = r.hasOwnProperty(t) ? r[t] : {};
							return Zn.extend({}, n, o);
					  })(a, 'mobile')
					: {},
				{
					validate: !0,
					external_plugins: (function(e, t) {
						var n = t.external_plugins ? t.external_plugins : {};
						return e && e.external_plugins
							? Zn.extend({}, e.external_plugins, n)
							: n;
					})(r, a.settings())
				}
			);
		return td(e, a, r, u);
	}
	function rd(e, t, n, r, o) {
		var i = (function(e, t, n, r, o) {
			var i = {
				id: t,
				theme: 'silver',
				toolbar_mode: ed(e, 'floating'),
				plugins: '',
				document_base_url: n,
				add_form_submit_trigger: !0,
				submit_patch: !0,
				add_unload_trigger: !0,
				convert_urls: !0,
				relative_urls: !0,
				remove_script_host: !0,
				object_resizing: !0,
				doctype: '<!DOCTYPE html>',
				visual: !0,
				font_size_legacy_values:
					'xx-small,small,medium,large,x-large,xx-large,300%',
				forced_root_block: 'p',
				hidden_input: !0,
				inline_styles: !0,
				convert_fonts_to_spans: !0,
				indent: !0,
				indent_before:
					'p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist',
				indent_after:
					'p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist',
				entity_encoding: 'named',
				url_converter: o.convertURL,
				url_converter_scope: o
			};
			return te(te({}, i), r ? qd : {});
		})(o, t, n, Id, e);
		return nd(Fd || Ud, Fd, i, r, o);
	}
	function od(e, t, n) {
		return R.from(t.settings[n]).filter(e);
	}
	function id(e, t, n, r) {
		var o = t in e.settings ? e.settings[t] : n;
		return 'hash' === r
			? (function(e) {
					var n = {};
					return (
						'string' == typeof e
							? F(
									0 < e.indexOf('=')
										? e.split(/[;,](?![^=;,]*(?:[;,]|$))/)
										: e.split(','),
									function(e) {
										var t = e.split('=');
										1 < t.length
											? (n[Zn.trim(t[0])] = Zn.trim(t[1]))
											: (n[Zn.trim(t[0])] = Zn.trim(t[0]));
									}
							  )
							: (n = e),
						n
					);
			  })(o)
			: 'string' === r
			? od(K, e, t).getOr(n)
			: 'number' === r
			? od(P, e, t).getOr(n)
			: 'boolean' === r
			? od(H, e, t).getOr(n)
			: 'object' === r
			? od(_, e, t).getOr(n)
			: 'array' === r
			? od(D, e, t).getOr(n)
			: 'string[]' === r
			? od(
					(function(t) {
						return function(e) {
							return D(e) && b(e, t);
						};
					})(K),
					e,
					t
			  ).getOr(n)
			: 'function' === r
			? od(B, e, t).getOr(n)
			: o;
	}
	function ad(e, t) {
		return t.dom()[e];
	}
	function ud(e, t) {
		return parseInt(Ge(t, e), 10);
	}
	var cd,
		sd,
		ld,
		fd = vf,
		dd = { trimExternal: yf, trimInternal: yf },
		hd = Zn.makeMap,
		md = function(e, t) {
			t(e), e.firstChild && md(e.firstChild, t), e.next && md(e.next, t);
		},
		gd = function(a) {
			if (!D(a)) throw new Error('cases must be an array');
			if (0 === a.length) throw new Error('there must be at least one case');
			var u = [],
				n = {};
			return (
				F(a, function(e, r) {
					var t = Z(e);
					if (1 !== t.length) throw new Error('one and only one name per case');
					var o = t[0],
						i = e[o];
					if (n[o] !== undefined)
						throw new Error('duplicate key detected:' + o);
					if ('cata' === o)
						throw new Error('cannot have a case named cata (sorry)');
					if (!D(i)) throw new Error('case arguments must be an array');
					u.push(o),
						(n[o] = function() {
							var e = arguments.length;
							if (e !== i.length)
								throw new Error(
									'Wrong number of arguments to case ' +
										o +
										'. Expected ' +
										i.length +
										' (' +
										i +
										'), got ' +
										e
								);
							for (var n = new Array(e), t = 0; t < n.length; t++)
								n[t] = arguments[t];
							return {
								fold: function() {
									if (arguments.length !== a.length)
										throw new Error(
											'Wrong number of arguments to fold. Expected ' +
												a.length +
												', got ' +
												arguments.length
										);
									return arguments[r].apply(null, n);
								},
								match: function(e) {
									var t = Z(e);
									if (u.length !== t.length)
										throw new Error(
											'Wrong number of arguments to match. Expected: ' +
												u.join(',') +
												'\nActual: ' +
												t.join(',')
										);
									if (
										!b(u, function(e) {
											return h(t, e);
										})
									)
										throw new Error(
											'Not all branches were specified when using match. Specified: ' +
												t.join(', ') +
												'\nRequired: ' +
												u.join(', ')
										);
									return e[o].apply(null, n);
								},
								log: function(e) {
									j.console.log(e, {
										constructors: u,
										constructor: o,
										params: n
									});
								}
							};
						});
				}),
				n
			);
		},
		pd = { create: de('start', 'soffset', 'finish', 'foffset') },
		vd = gd([
			{ before: ['element'] },
			{ on: ['element', 'offset'] },
			{ after: ['element'] }
		]),
		yd =
			(vd.before,
			vd.on,
			vd.after,
			function(e) {
				return e.fold(W, W, W);
			}),
		bd = gd([
			{ domRange: ['rng'] },
			{ relative: ['startSitu', 'finishSitu'] },
			{ exact: ['start', 'soffset', 'finish', 'foffset'] }
		]),
		Cd = {
			domRange: bd.domRange,
			relative: bd.relative,
			exact: bd.exact,
			exactFromRange: function(e) {
				return bd.exact(e.start(), e.soffset(), e.finish(), e.foffset());
			},
			getWin: function(e) {
				var t = (function(e) {
					return e.match({
						domRange: function(e) {
							return it.fromDom(e.startContainer);
						},
						relative: function(e, t) {
							return yd(e);
						},
						exact: function(e, t, n, r) {
							return e;
						}
					});
				})(e);
				return ye(t);
			},
			range: pd.create
		},
		wd = fe().browser,
		xd = function(e) {
			var t = Af(e) ? _f(it.fromDom(e.getBody())) : R.none();
			e.bookmark = t.isSome() ? t : e.bookmark;
		},
		zd = function(t) {
			Hf(t).each(function(e) {
				t.selection.setRng(e);
			});
		},
		Ed = Hf,
		Nd = {
			isEditorUIElement: function(e) {
				var t = e.className.toString();
				return -1 !== t.indexOf('tox-') || -1 !== t.indexOf('mce-');
			}
		},
		Sd = function(e) {
			var t = fa(function() {
				xd(e);
			}, 0);
			e.on('init', function() {
				e.inline &&
					(function(e, t) {
						function n() {
							t.throttle();
						}
						Qi.DOM.bind(j.document, 'mouseup', n),
							e.on('remove', function() {
								Qi.DOM.unbind(j.document, 'mouseup', n);
							});
					})(e, t),
					Bf(e, t);
			}),
				e.on('remove', function() {
					t.cancel();
				});
		},
		kd = Qi.DOM,
		Td = function(e) {
			e.on('AddEditor', d(Vf, e)), e.on('RemoveEditor', d(If, e));
		},
		Ad = function(e) {
			var t = e.classList;
			return (
				t !== undefined &&
				(t.contains('tox-edit-area') ||
					t.contains('tox-edit-area__iframe') ||
					t.contains('mce-content-body'))
			);
		},
		Md = Lf,
		Rd = function(e) {
			return e.editorManager.setActive(e);
		},
		_d = function(e, t) {
			e.removed ||
				(t
					? Rd(e)
					: (function(t) {
							var e = t.selection,
								n = t.getBody(),
								r = e.getRng();
							t.quirks.refreshContentEditable(),
								t.bookmark !== undefined &&
									!1 === $f(t) &&
									Ed(t).each(function(e) {
										t.selection.setRng(e), (r = e);
									});
							var o = (function(t, e) {
								return t.dom.getParent(e, function(e) {
									return 'true' === t.dom.getContentEditable(e);
								});
							})(t, e.getNode());
							if (t.$.contains(n, o)) return jf(o), Uf(t, r), Rd(t);
							t.inline || (Wn.opera || jf(n), t.getWin().focus()),
								(Wn.gecko || t.inline) && (jf(n), Uf(t, r)),
								Rd(t);
					  })(e));
		},
		Dd = $f,
		Od = function(e) {
			return (
				$f(e) ||
				(function(t) {
					return Ef()
						.filter(function(e) {
							return !Ad(e.dom()) && Md(t, e.dom());
						})
						.isSome();
				})(e)
			);
		},
		Hd = Qi.DOM,
		Bd = Object.prototype.hasOwnProperty,
		Pd =
			((sd = function(e, t) {
				return _(e) && _(t) ? Pd(e, t) : t;
			}),
			function() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; t++)
					e[t] = arguments[t];
				if (0 === e.length) throw new Error("Can't merge zero objects");
				for (var n = {}, r = 0; r < e.length; r++) {
					var o = e[r];
					for (var i in o) Bd.call(o, i) && (n[i] = sd(n[i], o[i]));
				}
				return n;
			}),
		Ld = de('sections', 'settings'),
		Vd = fe().deviceType,
		Id = Vd.isTouch(),
		Fd = Vd.isPhone(),
		Ud = Vd.isTablet(),
		jd = ['lists', 'autolink', 'autosave'],
		qd = { table_grid: !1, object_resizing: !1, resize: !1 },
		$d =
			((ld = {}),
			{
				add: function(e, t) {
					ld[e] = t;
				},
				get: function(e) {
					return ld[e] ? ld[e] : { icons: {} };
				},
				has: function(e) {
					return ee(ld, e);
				}
			}),
		Wd = d(ad, 'clientWidth'),
		Kd = d(ad, 'clientHeight'),
		Xd = d(ud, 'margin-top'),
		Yd = d(ud, 'margin-left'),
		Gd = function(e, t, n) {
			var r = it.fromDom(e.getBody()),
				o = e.inline
					? r
					: (function(e) {
							return it.fromDom(e.dom().ownerDocument.documentElement);
					  })(r),
				i = (function(e, t, n, r) {
					var o = (function(e) {
						return e.dom().getBoundingClientRect();
					})(t);
					return {
						x: n - (e ? o.left + t.dom().clientLeft + Yd(t) : 0),
						y: r - (e ? o.top + t.dom().clientTop + Xd(t) : 0)
					};
				})(e.inline, o, t, n);
			return (function(e, t, n) {
				var r = Wd(e),
					o = Kd(e);
				return 0 <= t && 0 <= n && t <= r && n <= o;
			})(o, i.x, i.y);
		},
		Zd = function(e) {
			return (function(e) {
				return R.from(e).map(it.fromDom);
			})(e.inline ? e.getBody() : e.getContentAreaContainer())
				.map(function(e) {
					return Ot(ve(e), e);
				})
				.getOr(!1);
		};
	function Jd(n) {
		function r() {
			var e = n.theme;
			return e && e.getNotificationManagerImpl
				? e.getNotificationManagerImpl()
				: (function t() {
						function e() {
							throw new Error(
								'Theme did not provide a NotificationManager implementation.'
							);
						}
						return { open: e, close: e, reposition: e, getArgs: e };
				  })();
		}
		function o() {
			0 < u.length && r().reposition(u);
		}
		function i(t) {
			p(u, function(e) {
				return e === t;
			}).each(function(e) {
				u.splice(e, 1);
			});
		}
		function t(t) {
			if (!n.removed && Zd(n))
				return g(u, function(e) {
					return (function(e, t) {
						return !(
							e.type !== t.type ||
							e.text !== t.text ||
							e.progressBar ||
							e.timeout ||
							t.progressBar ||
							t.timeout
						);
					})(r().getArgs(e), t);
				}).getOrThunk(function() {
					n.editorManager.setActive(n);
					var e = r().open(t, function() {
						i(e), o();
					});
					return (
						(function(e) {
							u.push(e);
						})(e),
						o(),
						e
					);
				});
		}
		var a,
			u = [];
		return (
			(a = n).on('SkinLoaded', function() {
				var e = a.settings.service_message;
				e && t({ text: e, type: 'warning', timeout: 0 });
			}),
			a.on('ResizeEditor ResizeWindow NodeChange', function() {
				Pn.requestAnimationFrame(o);
			}),
			a.on('remove', function() {
				F(u.slice(), function(e) {
					r().close(e);
				});
			}),
			{
				open: t,
				close: function() {
					R.from(u[0]).each(function(e) {
						r().close(e), i(e), o();
					});
				},
				getNotifications: function() {
					return u;
				}
			}
		);
	}
	var Qd = wa.PluginManager,
		eh = wa.ThemeManager;
	function th(n) {
		function r() {
			var e = n.theme;
			return e && e.getWindowManagerImpl
				? e.getWindowManagerImpl()
				: (function t() {
						function e() {
							throw new Error(
								'Theme did not provide a WindowManager implementation.'
							);
						}
						return {
							open: e,
							openUrl: e,
							alert: e,
							confirm: e,
							close: e,
							getParams: e,
							setParams: e
						};
				  })();
		}
		function o(e, t) {
			return function() {
				return t ? t.apply(e, arguments) : undefined;
			};
		}
		function i(e) {
			c.push(e),
				(function(e) {
					n.fire('OpenWindow', { dialog: e });
				})(e);
		}
		function a(t) {
			!(function(e) {
				n.fire('CloseWindow', { dialog: e });
			})(t),
				0 ===
					(c = U(c, function(e) {
						return e !== t;
					})).length && n.focus();
		}
		function u(e) {
			n.editorManager.setActive(n), xd(n);
			var t = e();
			return i(t), t;
		}
		var c = [];
		return (
			n.on('remove', function() {
				F(c, function(e) {
					r().close(e);
				});
			}),
			{
				open: function(e, t) {
					return u(function() {
						return r().open(e, t, a);
					});
				},
				openUrl: function(e) {
					return u(function() {
						return r().openUrl(e, a);
					});
				},
				alert: function(e, t, n) {
					r().alert(e, o(n || this, t));
				},
				confirm: function(e, t, n) {
					r().confirm(e, o(n || this, t));
				},
				close: function() {
					R.from(c[c.length - 1]).each(function(e) {
						r().close(e), a(e);
					});
				}
			}
		);
	}
	function nh(e, t) {
		e.notificationManager.open({ type: 'error', text: t });
	}
	function rh(e, t) {
		e._skinLoaded
			? nh(e, t)
			: e.on('SkinLoaded', function() {
					nh(e, t);
			  });
	}
	function oh(e, t, n) {
		!(function(e, t, n) {
			e.fire(t, n);
		})(e, t, { message: n }),
			j.console.error(n);
	}
	function ih(e, t, n) {
		return n
			? 'Failed to load ' + e + ': ' + n + ' from url ' + t
			: 'Failed to load ' + e + ' url: ' + t;
	}
	function ah(e) {
		e.contentCSS = e.contentCSS.concat(
			(function(t) {
				var e = Ms(t),
					n = t.editorManager.baseURL + '/skins/content',
					r = 'content' + t.editorManager.suffix + '.css',
					o = !0 === t.inline;
				return X(e, function(e) {
					return (function(e) {
						return /^[a-z0-9\-]+$/i.test(e);
					})(e) && !o
						? n + '/' + e + '/' + r
						: t.documentBaseURI.toAbsolute(e);
				});
			})(e)
		);
	}
	var uh = function(e) {
			for (var t = [], n = 1; n < arguments.length; n++)
				t[n - 1] = arguments[n];
			var r = j.window.console;
			r && (r.error ? r.error.apply(r, arguments) : r.log.apply(r, arguments));
		},
		ch = {
			pluginLoadError: function(e, t, n) {
				oh(e, 'PluginLoadError', ih('plugin', t, n));
			},
			iconsLoadError: function(e, t, n) {
				oh(e, 'IconsLoadError', ih('icons', t, n));
			},
			languageLoadError: function(e, t, n) {
				oh(e, 'LanguageLoadError', ih('language', t, n));
			},
			pluginInitError: function(e, t, n) {
				var r = sa.translate(['Failed to initialize plugin: {0}', t]);
				uh(r, n), rh(e, r);
			},
			uploadError: function(e, t) {
				rh(e, sa.translate(['Failed to upload image: {0}', t]));
			},
			displayError: rh,
			initError: uh
		};
	function sh(e) {
		return { getBookmark: d(ql, e), moveToBookmark: d($l, e) };
	}
	(sh = sh || {}).isBookmarkNode = Wl;
	function lh(r, a) {
		var u,
			c,
			s,
			l,
			f,
			d,
			h,
			m,
			g,
			p,
			v,
			y,
			i,
			b,
			C,
			w,
			x,
			z = a.dom,
			E = Zn.each,
			N = a.getDoc(),
			S = j.document,
			k = Math.abs,
			T = Math.round,
			A = a.getBody();
		function M(e) {
			return e && ('IMG' === e.nodeName || a.dom.is(e, 'figure.image'));
		}
		function n(e) {
			var t = e.target;
			!(function(e, t) {
				if ('longpress' !== e.type && 0 !== e.type.indexOf('touch'))
					return M(e.target) && !dh(e.clientX, e.clientY, t);
				var n = e.touches[0];
				return M(e.target) && !dh(n.clientX, n.clientY, t);
			})(e, a.selection.getRng()) ||
				e.isDefaultPrevented() ||
				a.selection.select(t);
		}
		function R(e) {
			return a.dom.is(e, 'figure.image') ? e.querySelector('img') : e;
		}
		function _(e) {
			var t = Ds(a);
			return (
				!1 !== t &&
				!Wn.iOS &&
				('string' != typeof t && (t = 'table,img,figure.image,div'),
				'false' !== e.getAttribute('data-mce-resize') &&
					e !== a.getBody() && me(it.fromDom(e), t))
			);
		}
		function D(e) {
			var t, n, r, o;
			(t = e.screenX - d),
				(n = e.screenY - h),
				(b = t * f[2] + p),
				(C = n * f[3] + v),
				(b = b < 5 ? 5 : b),
				(C = C < 5 ? 5 : C),
				(M(u) && !1 !== Os(a)
					? !hh.modifierPressed(e)
					: hh.modifierPressed(e)) &&
					(k(t) > k(n)
						? ((C = T(b * y)), (b = T(C / y)))
						: ((b = T(C / y)), (C = T(b * y)))),
				z.setStyles(R(c), { width: b, height: C }),
				(r = 0 < (r = f.startPos.x + t) ? r : 0),
				(o = 0 < (o = f.startPos.y + n) ? o : 0),
				z.setStyles(s, { left: r, top: o, display: 'block' }),
				(s.innerHTML = b + ' &times; ' + C),
				f[2] < 0 && c.clientWidth <= b && z.setStyle(c, 'left', m + (p - b)),
				f[3] < 0 && c.clientHeight <= C && z.setStyle(c, 'top', g + (v - C)),
				(t = A.scrollWidth - w) + (n = A.scrollHeight - x) !== 0 &&
					z.setStyles(s, { left: r - t, top: o - n }),
				i ||
					((function(e, t, n, r) {
						e.fire('ObjectResizeStart', { target: t, width: n, height: r });
					})(a, u, p, v),
					(i = !0));
		}
		function o(e) {
			function t(e, t) {
				if (e)
					do {
						if (e === t) return !0;
					} while ((e = e.parentNode));
			}
			var n;
			i ||
				a.removed ||
				(E(z.select('img[data-mce-selected],hr[data-mce-selected]'), function(
					e
				) {
					e.removeAttribute('data-mce-selected');
				}),
				(n = 'mousedown' === e.type ? e.target : r.getNode()),
				t((n = z.$(n).closest('table,img,figure.image,hr')[0]), A) &&
				(V(), t(r.getStart(!0), n) && t(r.getEnd(!0), n))
					? B(n)
					: P());
		}
		function O(e) {
			return mh(
				(function(e, t) {
					for (; t && t !== e; ) {
						if (gh(t) || mh(t)) return t;
						t = t.parentNode;
					}
					return null;
				})(a.getBody(), e)
			);
		}
		l = {
			nw: [0, 0, -1, -1],
			ne: [1, 0, 1, -1],
			se: [1, 1, 1, 1],
			sw: [0, 1, -1, 1]
		};
		var H = function() {
				i = !1;
				function e(e, t) {
					t &&
						(u.style[e] || !a.schema.isValid(u.nodeName.toLowerCase(), e)
							? z.setStyle(R(u), e, t)
							: z.setAttrib(R(u), e, t));
				}
				e('width', b),
					e('height', C),
					z.unbind(N, 'mousemove', D),
					z.unbind(N, 'mouseup', H),
					S !== N && (z.unbind(S, 'mousemove', D), z.unbind(S, 'mouseup', H)),
					z.remove(c),
					z.remove(s),
					B(u),
					(function(e, t, n, r) {
						e.fire('ObjectResized', { target: t, width: n, height: r });
					})(a, u, b, C),
					z.setAttrib(u, 'style', z.getAttrib(u, 'style')),
					a.nodeChanged();
			},
			B = function(e) {
				var t, r, o, n, i;
				P(),
					L(),
					(t = z.getPos(e, A)),
					(m = t.x),
					(g = t.y),
					(i = e.getBoundingClientRect()),
					(r = i.width || i.right - i.left),
					(o = i.height || i.bottom - i.top),
					u !== e && ((u = e), (b = C = 0)),
					(n = a.fire('ObjectSelected', { target: e })),
					_(e) && !n.isDefaultPrevented()
						? E(l, function(t, e) {
								var n;
								(n = z.get('mceResizeHandle' + e)) && z.remove(n),
									(n = z.add(A, 'div', {
										id: 'mceResizeHandle' + e,
										'data-mce-bogus': 'all',
										class: 'mce-resizehandle',
										unselectable: !0,
										style: 'cursor:' + e + '-resize; margin:0; padding:0'
									})),
									11 === Wn.ie && (n.contentEditable = !1),
									z.bind(n, 'mousedown', function(e) {
										e.stopImmediatePropagation(),
											e.preventDefault(),
											(function(e) {
												(d = e.screenX),
													(h = e.screenY),
													(p = R(u).clientWidth),
													(v = R(u).clientHeight),
													(y = v / p),
													((f = t).startPos = {
														x: r * t[0] + m,
														y: o * t[1] + g
													}),
													(w = A.scrollWidth),
													(x = A.scrollHeight),
													(c = u.cloneNode(!0)),
													z.addClass(c, 'mce-clonedresizable'),
													z.setAttrib(c, 'data-mce-bogus', 'all'),
													(c.contentEditable = !1),
													(c.unSelectabe = !0),
													z.setStyles(c, { left: m, top: g, margin: 0 }),
													c.removeAttribute('data-mce-selected'),
													A.appendChild(c),
													z.bind(N, 'mousemove', D),
													z.bind(N, 'mouseup', H),
													S !== N &&
														(z.bind(S, 'mousemove', D),
														z.bind(S, 'mouseup', H)),
													(s = z.add(
														A,
														'div',
														{
															class: 'mce-resize-helper',
															'data-mce-bogus': 'all'
														},
														p + ' &times; ' + v
													));
											})(e);
									}),
									(t.elm = n),
									z.setStyles(n, {
										left: r * t[0] + m - n.offsetWidth / 2,
										top: o * t[1] + g - n.offsetHeight / 2
									});
						  })
						: P(),
					u.setAttribute('data-mce-selected', '1');
			},
			P = function() {
				var e, t;
				for (e in (L(), u && u.removeAttribute('data-mce-selected'), l))
					(t = z.get('mceResizeHandle' + e)) && (z.unbind(t), z.remove(t));
			},
			L = function() {
				for (var e in l) {
					var t = l[e];
					t.elm && (z.unbind(t.elm), delete t.elm);
				}
			},
			V = function() {
				try {
					a.getDoc().execCommand('enableObjectResizing', !1, !1);
				} catch (e) {}
			};
		return (
			a.on('init', function() {
				if ((V(), Wn.browser.isIE() || Wn.browser.isEdge())) {
					a.on('mousedown click', function(e) {
						var t = e.target,
							n = t.nodeName;
						i ||
							!/^(TABLE|IMG|HR)$/.test(n) ||
							O(t) ||
							(2 !== e.button && a.selection.select(t, 'TABLE' === n),
							'mousedown' === e.type && a.nodeChanged());
					});
					var e = function(e) {
						function t(e) {
							Pn.setEditorTimeout(a, function() {
								return a.selection.select(e);
							});
						}
						if (O(e.target)) return e.preventDefault(), void t(e.target);
						/^(TABLE|IMG|HR)$/.test(e.target.nodeName) &&
							(e.preventDefault(), 'IMG' === e.target.tagName && t(e.target));
					};
					z.bind(A, 'mscontrolselect', e),
						a.on('remove', function() {
							return z.unbind(A, 'mscontrolselect', e);
						});
				}
				var t = Pn.throttle(function(e) {
					a.composing || o(e);
				});
				a.on(
					'nodechange ResizeEditor ResizeWindow drop FullscreenStateChanged',
					t
				),
					a.on('keyup compositionend', function(e) {
						u && 'TABLE' === u.nodeName && t(e);
					}),
					a.on('hide blur', P),
					a.on('contextmenu longpress', n, !0);
			}),
			a.on('remove', L),
			{
				isResizable: _,
				showResizeRect: B,
				hideResizeRect: P,
				updateResizeRect: o,
				destroy: function() {
					u = c = null;
				}
			}
		);
	}
	var fh = sh,
		dh = function(t, n, e) {
			if (e.collapsed) return !1;
			if (
				Wn.browser.isIE() &&
				e.startOffset === e.endOffset - 1 &&
				e.startContainer === e.endContainer
			) {
				var r = e.startContainer.childNodes[e.startOffset];
				if (Qt.isElement(r))
					return C(r.getClientRects(), function(e) {
						return Za(e, t, n);
					});
			}
			return C(e.getClientRects(), function(e) {
				return Za(e, t, n);
			});
		},
		hh = {
			BACKSPACE: 8,
			DELETE: 46,
			DOWN: 40,
			ENTER: 13,
			LEFT: 37,
			RIGHT: 39,
			SPACEBAR: 32,
			TAB: 9,
			UP: 38,
			END: 35,
			HOME: 36,
			modifierPressed: function(e) {
				return e.shiftKey || e.ctrlKey || e.altKey || this.metaKeyPressed(e);
			},
			metaKeyPressed: function(e) {
				return Wn.mac ? e.metaKey : e.ctrlKey && !e.altKey;
			}
		},
		mh = Qt.isContentEditableFalse,
		gh = Qt.isContentEditableTrue;
	function ph(e) {
		var t = it.fromDom(j.document),
			n = Le(t),
			r = (function(e, t) {
				var n = t.owner(e);
				return lm(t, n);
			})(e, fm),
			o = Ft(e),
			i = m(
				r,
				function(e, t) {
					var n = Ft(t);
					return { left: e.left + n.left(), top: e.top + n.top() };
				},
				{ left: 0, top: 0 }
			);
		return It(i.left + o.left() + n.left(), i.top + o.top() + n.top());
	}
	function vh(e) {
		return 'textarea' === Oe(e);
	}
	function yh(e, t) {
		var n = (function(e) {
				var t = e.dom().ownerDocument,
					n = t.body,
					r = t.defaultView,
					o = t.documentElement;
				if (n === e.dom()) return It(n.offsetLeft, n.offsetTop);
				var i = Pe(r.pageYOffset, o.scrollTop),
					a = Pe(r.pageXOffset, o.scrollLeft),
					u = Pe(o.clientTop, n.clientTop),
					c = Pe(o.clientLeft, n.clientLeft);
				return Ft(e).translate(a - c, i - u);
			})(e),
			r = (function(e) {
				return sm.get(e);
			})(e);
		return { element: e, bottom: n.top() + r, height: r, pos: n, cleanup: t };
	}
	function bh(e, t) {
		var n = (function(e, t) {
				var n = Ee(e);
				if (0 === n.length || vh(e)) return { element: e, offset: t };
				if (t < n.length && !vh(n[t])) return { element: n[t], offset: 0 };
				var r = n[n.length - 1];
				return vh(r)
					? { element: e, offset: t }
					: 'img' === Oe(r)
					? { element: r, offset: 1 }
					: Lt(r)
					? { element: r, offset: tf(r).length }
					: { element: r, offset: Ee(r).length };
			})(e, t),
			r = it.fromHtml('<span data-mce-bogus="all">' + mu.ZWSP + '</span>');
		return (
			Te(n.element, r),
			yh(r, function() {
				return Bt(r);
			})
		);
	}
	function Ch(n, r, o, i) {
		hm(
			n,
			function(e, t) {
				return dm(n, r, o, i);
			},
			o
		);
	}
	function wh(e, t, n, r, o) {
		var i = { elm: r.element.dom(), alignToTop: o };
		!(function(e, t) {
			return e.fire('ScrollIntoView', t).isDefaultPrevented();
		})(e, i) &&
			(n(t, Le(t).top(), r, o),
			(function(e, t) {
				e.fire('AfterScrollIntoView', t);
			})(e, i));
	}
	function xh(e, t, n, r) {
		var o = it.fromDom(e.getDoc());
		wh(
			e,
			o,
			n,
			(function(e) {
				return yh(it.fromDom(e), i);
			})(t),
			r
		);
	}
	function zh(e, t, n, r) {
		var o = e.pos;
		if (n) Ve(o.left(), o.top(), r);
		else {
			var i = o.top() - t + e.height;
			Ve(o.left(), i, r);
		}
	}
	function Eh(e, t, n, r, o) {
		var i = n + t,
			a = r.pos.top(),
			u = r.bottom,
			c = n <= u - a;
		if (a < t) zh(r, n, !1 !== o, e);
		else if (i < a) {
			zh(r, n, c ? !1 !== o : !0 === o, e);
		} else i < u && !c && zh(r, n, !0 === o, e);
	}
	function Nh(e, t, n, r) {
		var o = e.dom().defaultView.innerHeight;
		Eh(e, t, o, n, r);
	}
	function Sh(e, t, n, r) {
		var o = e.dom().defaultView.innerHeight;
		Eh(e, t, o, n, r);
		var i = ph(n.element),
			a = jt(j.window);
		i.top() < a.y()
			? Ie(n.element, !1 !== r)
			: i.top() > a.bottom() && Ie(n.element, !0 === r);
	}
	function kh(e, t, n) {
		return Ch(e, Nh, t, n);
	}
	function Th(e, t, n) {
		return xh(e, t, Nh, n);
	}
	function Ah(e, t, n) {
		return Ch(e, Sh, t, n);
	}
	function Mh(e, t, n) {
		return xh(e, t, Sh, n);
	}
	function Rh(e) {
		return Qt.isContentEditableTrue(e) || Qt.isContentEditableFalse(e);
	}
	function _h(e, t) {
		var n = (t || j.document).createDocumentFragment();
		return (
			F(e, function(e) {
				n.appendChild(e.dom());
			}),
			it.fromDom(n)
		);
	}
	function Dh(e, t, n) {
		return Ot(t, e)
			? (function(e) {
					return e.slice(0, -1);
			  })(
					(function(e, t) {
						for (
							var n = B(t) ? t : s, r = e.dom(), o = [];
							null !== r.parentNode && r.parentNode !== undefined;

						) {
							var i = r.parentNode,
								a = it.fromDom(i);
							if ((o.push(a), !0 === n(a))) break;
							r = i;
						}
						return o;
					})(e, function(e) {
						return n(e) || pe(e, t);
					})
			  )
			: [];
	}
	function Oh(e, t) {
		return Dh(e, t, $(!1));
	}
	function Hh(o, e) {
		return tu(
			(function(e) {
				var t = e.startContainer,
					n = e.startOffset;
				return Qt.isText(t)
					? 0 === n
						? R.some(it.fromDom(t))
						: R.none()
					: R.from(t.childNodes[n]).map(it.fromDom);
			})(e),
			(function(e) {
				var t = e.endContainer,
					n = e.endOffset;
				return Qt.isText(t)
					? n === t.data.length
						? R.some(it.fromDom(t))
						: R.none()
					: R.from(t.childNodes[n - 1]).map(it.fromDom);
			})(e),
			function(e, t) {
				var n = g(Cm(o), d(pe, e)),
					r = g(wm(o), d(pe, t));
				return n.isSome() && r.isSome();
			}
		).getOr(!1);
	}
	function Bh(e, t, n, r) {
		var o = n,
			i = new Fi(n, o),
			a = e.schema.getNonEmptyElements();
		do {
			if (3 === n.nodeType && 0 !== Zn.trim(n.nodeValue).length)
				return void (r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
			if (a[n.nodeName] && !/^(TD|TH)$/.test(n.nodeName))
				return void (r
					? t.setStartBefore(n)
					: 'BR' === n.nodeName
					? t.setEndBefore(n)
					: t.setEndAfter(n));
		} while ((n = r ? i.next() : i.prev()));
		'BODY' === o.nodeName &&
			(r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length));
	}
	function Ph(e) {
		var t = e.selection.getSel();
		return t && 0 < t.rangeCount;
	}
	function Lh(e, t) {
		var n = parseInt(Xe(e, t), 10);
		return isNaN(n) ? 1 : n;
	}
	function Vh(e) {
		return y(
			e,
			function(e, t) {
				return t.cells().length > e ? t.cells().length : e;
			},
			0
		);
	}
	function Ih(e, t) {
		for (var n = e.rows(), r = 0; r < n.length; r++)
			for (var o = n[r].cells(), i = 0; i < o.length; i++)
				if (pe(o[i], t)) return R.some(Em(i, r));
		return R.none();
	}
	function Fh(e, t, n, r, o) {
		for (var i = [], a = e.rows(), u = n; u <= o; u++) {
			var c = a[u].cells(),
				s = t < r ? c.slice(t, r + 1) : c.slice(r, t + 1);
			i.push(zm(a[u].element(), s));
		}
		return i;
	}
	function Uh(e) {
		var t = [];
		if (e) for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
		return t;
	}
	function jh(e) {
		return U(Am(e), dr);
	}
	function qh(e) {
		return Ca(e, 'td[data-mce-selected],th[data-mce-selected]');
	}
	function $h(e, t) {
		var n = qh(t),
			r = jh(e);
		return 0 < n.length ? n : r;
	}
	function Wh(t, n) {
		return g(t, function(e) {
			return 'li' === Oe(e) && Hh(e, n);
		}).fold($([]), function(e) {
			return (function(e) {
				return g(e, function(e) {
					return 'ul' === Oe(e) || 'ol' === Oe(e);
				});
			})(t)
				.map(function(e) {
					return [it.fromTag('li'), it.fromTag(Oe(e))];
				})
				.getOr([]);
		});
	}
	function Kh(e, t) {
		var n = it.fromDom(t.commonAncestorContainer),
			r = bm(n, e),
			o = U(r, function(e) {
				return Qn(e) || ir(e);
			}),
			i = Wh(r, t),
			a = o.concat(
				i.length
					? i
					: (function(t) {
							return sr(t)
								? be(t)
										.filter(cr)
										.fold($([]), function(e) {
											return [t, e];
										})
								: cr(t)
								? [t]
								: [];
					  })(n)
			);
		return X(a, Oa);
	}
	function Xh() {
		return _h([]);
	}
	function Yh(e, t) {
		return (function(e, t) {
			var n = y(
				t,
				function(e, t) {
					return Ht(t, e), t;
				},
				e
			);
			return 0 < t.length ? _h([n]) : n;
		})(it.fromDom(t.cloneContents()), Kh(e, t));
	}
	function Gh(e, o) {
		return (function(e, t) {
			return Sa(t, 'table', d(pe, e));
		})(e, o[0])
			.bind(function(e) {
				var t = o[0],
					n = o[o.length - 1],
					r = Nm(e);
				return km(r, t, n).map(function(e) {
					return _h([Sm(e)]);
				});
			})
			.getOrThunk(Xh);
	}
	function Zh(e, t, n) {
		return (
			null !==
			(function(e, t, n) {
				for (; e && e !== t; ) {
					if (n(e)) return e;
					e = e.parentNode;
				}
				return null;
			})(e, t, n)
		);
	}
	function Jh(e, t, n) {
		return Zh(e, t, function(e) {
			return e.nodeName === n;
		});
	}
	function Qh(e) {
		return e && 'TABLE' === e.nodeName;
	}
	function em(e, t, n) {
		for (
			var r = new Fi(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot());
			(t = r[n ? 'prev' : 'next']());

		)
			if (Qt.isBr(t)) return !0;
	}
	function tm(e, t, n, r, o) {
		var i,
			a,
			u = e.getRoot(),
			c = e.schema.getNonEmptyElements(),
			s = e.getParent(o.parentNode, e.isBlock) || u;
		if (r && Qt.isBr(o) && t && e.isEmpty(s))
			return R.some(Wu(o.parentNode, e.nodeIndex(o)));
		for (var l, f, d = new Fi(o, s); (a = d[r ? 'prev' : 'next']()); ) {
			if (
				'false' === e.getContentEditableParent(a) ||
				((f = u), La((l = a)) && !1 === Zh(l, f, sc))
			)
				return R.none();
			if (Qt.isText(a) && 0 < a.nodeValue.length)
				return !1 === Jh(a, u, 'A')
					? R.some(Wu(a, r ? a.nodeValue.length : 0))
					: R.none();
			if (e.isBlock(a) || c[a.nodeName.toLowerCase()]) return R.none();
			i = a;
		}
		return n && i ? R.some(Wu(i, 0)) : R.none();
	}
	function nm(e, t, n, r) {
		var o,
			i,
			a,
			u,
			c,
			s,
			l,
			f = e.getRoot(),
			d = !1;
		if (
			((o = r[(n ? 'start' : 'end') + 'Container']),
			(i = r[(n ? 'start' : 'end') + 'Offset']),
			(s = Qt.isElement(o) && i === o.childNodes.length),
			(u = e.schema.getNonEmptyElements()),
			(c = n),
			La(o))
		)
			return R.none();
		if (
			(Qt.isElement(o) && i > o.childNodes.length - 1 && (c = !1),
			Qt.isDocument(o) && ((o = f), (i = 0)),
			o === f)
		) {
			if (c && (a = o.childNodes[0 < i ? i - 1 : 0])) {
				if (La(a)) return R.none();
				if (u[a.nodeName] || Qh(a)) return R.none();
			}
			if (o.hasChildNodes()) {
				if (
					((i = Math.min(!c && 0 < i ? i - 1 : i, o.childNodes.length - 1)),
					(o = o.childNodes[i]),
					(i = Qt.isText(o) && s ? o.data.length : 0),
					!t && o === f.lastChild && Qh(o))
				)
					return R.none();
				if (
					(function(e, t) {
						for (; t && t !== e; ) {
							if (Qt.isContentEditableFalse(t)) return !0;
							t = t.parentNode;
						}
						return !1;
					})(f, o) ||
					La(o)
				)
					return R.none();
				if (o.hasChildNodes() && !1 === Qh(o)) {
					var h = new Fi((a = o), f);
					do {
						if (Qt.isContentEditableFalse(a) || La(a)) {
							d = !1;
							break;
						}
						if (Qt.isText(a) && 0 < a.nodeValue.length) {
							(i = c ? 0 : a.nodeValue.length), (o = a), (d = !0);
							break;
						}
						if (
							u[a.nodeName.toLowerCase()] &&
							(!(l = a) || !/^(TD|TH|CAPTION)$/.test(l.nodeName))
						) {
							(i = e.nodeIndex(a)), (o = a.parentNode), c || i++, (d = !0);
							break;
						}
					} while ((a = c ? h.next() : h.prev()));
				}
			}
		}
		return (
			t &&
				(Qt.isText(o) &&
					0 === i &&
					tm(e, s, t, !0, o).each(function(e) {
						(o = e.container()), (i = e.offset()), (d = !0);
					}),
				Qt.isElement(o) &&
					(!(a = (a = o.childNodes[i]) || o.childNodes[i - 1]) ||
						!Qt.isBr(a) ||
						(function(e, t) {
							return e.previousSibling && e.previousSibling.nodeName === t;
						})(a, 'A') ||
						em(e, a, !1) ||
						em(e, a, !0) ||
						tm(e, s, t, !0, a).each(function(e) {
							(o = e.container()), (i = e.offset()), (d = !0);
						}))),
			c &&
				!t &&
				Qt.isText(o) &&
				i === o.nodeValue.length &&
				tm(e, s, t, !1, o).each(function(e) {
					(o = e.container()), (i = e.offset()), (d = !0);
				}),
			d ? R.some(Wu(o, i)) : R.none()
		);
	}
	function rm(e) {
		return 0 === e.dom().length ? (Bt(e), R.none()) : R.some(e);
	}
	function om(e, t, n, r, o) {
		var i = n ? t.startContainer : t.endContainer,
			a = n ? t.startOffset : t.endOffset;
		return R.from(i)
			.map(it.fromDom)
			.map(function(e) {
				return r && t.collapsed ? e : Ne(e, o(e, a)).getOr(e);
			})
			.bind(function(e) {
				return Pt(e) ? R.some(e) : be(e);
			})
			.map(function(e) {
				return e.dom();
			})
			.getOr(e);
	}
	function im(e, t, n) {
		return om(e, t, !0, n, function(e, t) {
			return Math.min(
				(function(e) {
					return e.dom().childNodes.length;
				})(e),
				t
			);
		});
	}
	function am(e, t, n) {
		return om(e, t, !1, n, function(e, t) {
			return 0 < t ? t - 1 : t;
		});
	}
	function um(e, t) {
		for (var n = e; e && Qt.isText(e) && 0 === e.length; )
			e = t ? e.nextSibling : e.previousSibling;
		return e || n;
	}
	function cm(e, t, n) {
		if (e && e.hasOwnProperty(t)) {
			var r = U(e[t], function(e) {
				return e !== n;
			});
			0 === r.length ? delete e[t] : (e[t] = r);
		}
	}
	var sm = (function PN(r, o) {
			function e(e) {
				var t = o(e);
				if (t <= 0 || null === t) {
					var n = Ge(e, r);
					return parseFloat(n) || 0;
				}
				return t;
			}
			function i(o, e) {
				return y(
					e,
					function(e, t) {
						var n = Ge(o, t),
							r = n === undefined ? 0 : parseInt(n, 10);
						return isNaN(r) ? e : e + r;
					},
					0
				);
			}
			return {
				set: function(e, t) {
					if (!P(t) && !t.match(/^[0-9]+$/))
						throw new Error(
							r + '.set accepts only positive integer values. Value was ' + t
						);
					var n = e.dom();
					$e(n) && (n.style[r] = t + 'px');
				},
				get: e,
				getOuter: e,
				aggregate: i,
				max: function(e, t, n) {
					var r = i(e, n);
					return r < t ? t - r : 0;
				}
			};
		})('height', function(e) {
			var t = e.dom();
			return Be(e) ? t.getBoundingClientRect().height : t.offsetHeight;
		}),
		lm = function(r, e) {
			return r.view(e).fold($([]), function(e) {
				var t = r.owner(e),
					n = lm(r, t);
				return [e].concat(n);
			});
		},
		fm = /* */ Object.freeze({
			__proto__: null,
			view: function(e) {
				return (e.dom() === j.document
					? R.none()
					: R.from(e.dom().defaultView.frameElement)
				).map(it.fromDom);
			},
			owner: function(e) {
				return ve(e);
			}
		}),
		dm = function(e, t, n, r) {
			var o = it.fromDom(e.getBody()),
				i = it.fromDom(e.getDoc());
			!(function(e) {
				e.dom().offsetWidth;
			})(o);
			var a = bh(it.fromDom(n.startContainer), n.startOffset);
			wh(e, i, t, a, r), a.cleanup();
		},
		hm = function(e, t, n) {
			var r = n.startContainer,
				o = n.startOffset,
				i = n.endContainer,
				a = n.endOffset;
			t(it.fromDom(r), it.fromDom(i));
			var u = e.dom.createRng();
			u.setStart(r, o), u.setEnd(i, a), e.selection.setRng(n);
		},
		mm = function(e, t, n) {
			(e.inline ? Th : Mh)(e, t, n);
		},
		gm = function(e, t, n) {
			(e.inline ? kh : Ah)(e, t, n);
		},
		pm = function(e, t, n) {
			var r,
				o,
				i = n;
			if (i.caretPositionFromPoint)
				(o = i.caretPositionFromPoint(e, t)) &&
					((r = n.createRange()).setStart(o.offsetNode, o.offset),
					r.collapse(!0));
			else if (n.caretRangeFromPoint) r = n.caretRangeFromPoint(e, t);
			else if (i.body.createTextRange) {
				r = i.body.createTextRange();
				try {
					r.moveToPoint(e, t), r.collapse(!0);
				} catch (a) {
					r = (function(e, n, t) {
						var r, o, i;
						if (
							((r = t.elementFromPoint(e, n)),
							(o = t.body.createTextRange()),
							(r && 'HTML' !== r.tagName) || (r = t.body),
							o.moveToElementText(r),
							0 <
								(i = (i = Zn.toArray(o.getClientRects())).sort(function(e, t) {
									return (
										(e = Math.abs(Math.max(e.top - n, e.bottom - n))) -
										(t = Math.abs(Math.max(t.top - n, t.bottom - n)))
									);
								})).length)
						) {
							n = (i[0].bottom + i[0].top) / 2;
							try {
								return o.moveToPoint(e, n), o.collapse(!0), o;
							} catch (a) {}
						}
						return null;
					})(e, t, n);
				}
				return (function(e, t) {
					var n = e && e.parentElement ? e.parentElement() : null;
					return Qt.isContentEditableFalse(
						(function(e, t, n) {
							for (; e && e !== t; ) {
								if (n(e)) return e;
								e = e.parentNode;
							}
							return null;
						})(n, t, Rh)
					)
						? null
						: e;
				})(r, n.body);
			}
			return r;
		},
		vm = function(n, e) {
			return X(e, function(e) {
				var t = n.fire('GetSelectionRange', { range: e });
				return t.range !== e ? t.range : e;
			});
		},
		ym = Oh,
		bm = function(e, t) {
			return [e].concat(Oh(e, t));
		},
		Cm = function(t) {
			return Se(t).fold($([t]), function(e) {
				return [t].concat(Cm(e));
			});
		},
		wm = function(t) {
			return ke(t).fold($([t]), function(e) {
				return 'br' === Oe(e)
					? Ce(e)
							.map(function(e) {
								return [t].concat(wm(e));
							})
							.getOr([])
					: [t].concat(wm(e));
			});
		},
		xm = de('element', 'width', 'rows'),
		zm = de('element', 'cells'),
		Em = de('x', 'y'),
		Nm = function(e) {
			var o = xm(Oa(e), 0, []);
			return (
				F(Ca(e, 'tr'), function(n, r) {
					F(Ca(n, 'td,th'), function(e, t) {
						!(function(e, t, n, r, o) {
							for (
								var i = Lh(o, 'rowspan'),
									a = Lh(o, 'colspan'),
									u = e.rows(),
									c = n;
								c < n + i;
								c++
							) {
								u[c] || (u[c] = zm(Ha(r), []));
								for (var s = t; s < t + a; s++) {
									u[c].cells()[s] = c === n && s === t ? o : Oa(o);
								}
							}
						})(
							o,
							(function(e, t, n) {
								for (
									;
									(r = t),
										(o = n),
										(i = void 0),
										((i = e.rows())[o] ? i[o].cells() : [])[r];

								)
									t++;
								var r, o, i;
								return t;
							})(o, t, r),
							r,
							n,
							e
						);
					});
				}),
				xm(o.element(), Vh(o.rows()), o.rows())
			);
		},
		Sm = function(e) {
			return (function(e, t) {
				var n = Oa(e.element()),
					r = it.fromTag('tbody');
				return Re(r, t), Ht(n, r), n;
			})(
				e,
				(function(e) {
					return X(e.rows(), function(e) {
						var t = X(e.cells(), function(e) {
								var t = Ha(e);
								return Ye(t, 'colspan'), Ye(t, 'rowspan'), t;
							}),
							n = Oa(e.element());
						return Re(n, t), n;
					});
				})(e)
			);
		},
		km = function(n, e, r) {
			return Ih(n, e).bind(function(t) {
				return Ih(n, r).map(function(e) {
					return (function(e, t, n) {
						var r = t.x(),
							o = t.y(),
							i = n.x(),
							a = n.y(),
							u = o < a ? Fh(e, r, o, i, a) : Fh(e, r, a, i, o);
						return xm(e.element(), Vh(u), u);
					})(n, t, e);
				});
			});
		},
		Tm = Uh,
		Am = function(e) {
			return v(e, function(e) {
				var t = Ja(e);
				return t ? [it.fromDom(t)] : [];
			});
		},
		Mm = function(e) {
			return 1 < Uh(e).length;
		},
		Rm = $h,
		_m = function(e) {
			return $h(Tm(e.selection.getSel()), it.fromDom(e.getBody()));
		},
		Dm = function(e, t) {
			var n = Rm(t, e);
			return 0 < n.length
				? Gh(e, n)
				: (function(e, t) {
						return 0 < t.length && t[0].collapsed ? Xh() : Yh(e, t[0]);
				  })(e, t);
		},
		Om = function(e, t) {
			if (
				(void 0 === t && (t = {}),
				(t.get = !0),
				(t.format = t.format || 'html'),
				(t.selection = !0),
				(t = e.fire('BeforeGetContent', t)).isDefaultPrevented())
			)
				return e.fire('GetContent', t), t.content;
			if ('text' === t.format)
				return (function(r) {
					return R.from(r.selection.getRng())
						.map(function(e) {
							var t = r.dom.add(
									r.getBody(),
									'div',
									{
										'data-mce-bogus': 'all',
										style: 'overflow: hidden; opacity: 0;'
									},
									e.cloneContents()
								),
								n = mu.trim(t.innerText);
							return r.dom.remove(t), n;
						})
						.getOr('');
				})(e);
			t.getInner = !0;
			var n = (function(e, t) {
				var n,
					r = e.selection.getRng(),
					o = e.dom.create('body'),
					i = e.selection.getSel(),
					a = vm(e, Tm(i));
				return (
					(n = t.contextual
						? Dm(it.fromDom(e.getBody()), a).dom()
						: r.cloneContents()) && o.appendChild(n),
					e.selection.serializer.serialize(o, t)
				);
			})(e, t);
			return 'tree' === t.format
				? n
				: ((t.content = e.selection.isCollapsed() ? '' : n),
				  e.fire('GetContent', t),
				  t.content);
		},
		Hm = function(e, t) {
			return (
				e &&
				t &&
				e.startContainer === t.startContainer &&
				e.startOffset === t.startOffset &&
				e.endContainer === t.endContainer &&
				e.endOffset === t.endOffset
			);
		},
		Bm = function(e, t) {
			var n = t.collapsed,
				r = t.cloneRange(),
				o = Wu.fromRangeStart(t);
			return (
				nm(e, n, !0, r).each(function(e) {
					(n && Wu.isAbove(o, e)) || r.setStart(e.container(), e.offset());
				}),
				n ||
					nm(e, n, !1, r).each(function(e) {
						r.setEnd(e.container(), e.offset());
					}),
				n && r.collapse(!0),
				Hm(t, r) ? R.none() : R.some(r)
			);
		},
		Pm = function(e, t, n) {
			if (
				(n = (function(e, t) {
					return (
						((e = e || { format: 'html' }).set = !0),
						(e.selection = !0),
						(e.content = t),
						e
					);
				})(n, t)).no_events ||
				!(n = e.fire('BeforeSetContent', n)).isDefaultPrevented()
			) {
				var r = e.selection.getRng();
				!(function(r, e) {
					var t = R.from(e.firstChild).map(it.fromDom),
						n = R.from(e.lastChild).map(it.fromDom);
					r.deleteContents(), r.insertNode(e);
					var o = t
							.bind(Ce)
							.filter(Lt)
							.bind(rm),
						i = n
							.bind(we)
							.filter(Lt)
							.bind(rm);
					tu(o, t.filter(Lt), function(e, t) {
						!(function(e, t) {
							e.insertData(0, t);
						})(t.dom(), e.dom().data),
							Bt(e);
					}),
						tu(i, n.filter(Lt), function(e, t) {
							var n = t.dom().length;
							t.dom().appendData(e.dom().data), r.setEnd(t.dom(), n), Bt(e);
						}),
						r.collapse(!1);
				})(r, r.createContextualFragment(n.content)),
					e.selection.setRng(r),
					gm(e, r),
					n.no_events || e.fire('SetContent', n);
			} else e.fire('SetContent', n);
		};
	function Lm(e) {
		return !!e.select;
	}
	function Vm(e) {
		return (
			!(!e || !e.ownerDocument) &&
			Ot(it.fromDom(e.ownerDocument), it.fromDom(e))
		);
	}
	function Im(u, c, e, s) {
		function t(e, t) {
			return Pm(s, e, t);
		}
		function r() {
			var e,
				t,
				n = d();
			return (
				!(n && n.anchorNode && n.focusNode) ||
				((e = u.createRng()).setStart(n.anchorNode, n.anchorOffset),
				e.collapse(!0),
				(t = u.createRng()).setStart(n.focusNode, n.focusOffset),
				t.collapse(!0),
				e.compareBoundaryPoints(e.START_TO_START, t) <= 0)
			);
		}
		var n,
			o,
			l,
			f,
			i = (function p(i, n) {
				var a, u;
				return {
					selectorChangedWithUnbind: function(e, t) {
						return (
							a ||
								((a = {}),
								(u = {}),
								n.on('NodeChange', function(e) {
									var n = e.element,
										r = i.getParents(n, null, i.getRoot()),
										o = {};
									Zn.each(a, function(e, n) {
										Zn.each(r, function(t) {
											if (i.is(t, n))
												return (
													u[n] ||
														(Zn.each(e, function(e) {
															e(!0, { node: t, selector: n, parents: r });
														}),
														(u[n] = e)),
													(o[n] = e),
													!1
												);
										});
									}),
										Zn.each(u, function(e, t) {
											o[t] ||
												(delete u[t],
												Zn.each(e, function(e) {
													e(!1, { node: n, selector: t, parents: r });
												}));
										});
								})),
							a[e] || (a[e] = []),
							a[e].push(t),
							{
								unbind: function() {
									cm(a, e, t), cm(u, e, t);
								}
							}
						);
					}
				};
			})(u, s).selectorChangedWithUnbind,
			a = function(e) {
				var t = h();
				t.collapse(!!e), m(t);
			},
			d = function() {
				return c.getSelection ? c.getSelection() : c.document.selection;
			},
			h = function() {
				function e(e, t, n) {
					try {
						return t.compareBoundaryPoints(e, n);
					} catch (r) {
						return -1;
					}
				}
				var t, n, r, o;
				if (!c) return null;
				if (null == (o = c.document)) return null;
				if (s.bookmark !== undefined && !1 === Dd(s)) {
					var i = Ed(s);
					if (i.isSome())
						return i
							.map(function(e) {
								return vm(s, [e])[0];
							})
							.getOr(o.createRange());
				}
				try {
					(t = d()) &&
						!Qt.isRestrictedNode(t.anchorNode) &&
						(n =
							0 < t.rangeCount
								? t.getRangeAt(0)
								: t.createRange
								? t.createRange()
								: o.createRange());
				} catch (a) {}
				return (
					(n =
						(n = vm(s, [n])[0]) ||
						(o.createRange ? o.createRange() : o.body.createTextRange()))
						.setStart &&
						9 === n.startContainer.nodeType &&
						n.collapsed &&
						((r = u.getRoot()), n.setStart(r, 0), n.setEnd(r, 0)),
					l &&
						f &&
						(0 === e(n.START_TO_START, n, l) && 0 === e(n.END_TO_END, n, l)
							? (n = f)
							: (f = l = null)),
					n
				);
			},
			m = function(e, t) {
				var n, r;
				if (
					(function(e) {
						return (
							!!e && (!!Lm(e) || (Vm(e.startContainer) && Vm(e.endContainer)))
						);
					})(e)
				) {
					var o = Lm(e) ? e : null;
					if (o) {
						f = null;
						try {
							o.select();
						} catch (i) {}
					} else {
						if (
							((n = d()),
							(e = s.fire('SetSelectionRange', { range: e, forward: t }).range),
							n)
						) {
							f = e;
							try {
								n.removeAllRanges(), n.addRange(e);
							} catch (i) {}
							!1 === t &&
								n.extend &&
								(n.collapse(e.endContainer, e.endOffset),
								n.extend(e.startContainer, e.startOffset)),
								(l = 0 < n.rangeCount ? n.getRangeAt(0) : null);
						}
						e.collapsed ||
							e.startContainer !== e.endContainer ||
							!n.setBaseAndExtent ||
							Wn.ie ||
							(e.endOffset - e.startOffset < 2 &&
								e.startContainer.hasChildNodes() &&
								(r = e.startContainer.childNodes[e.startOffset]) &&
								'IMG' === r.tagName &&
								(n.setBaseAndExtent(
									e.startContainer,
									e.startOffset,
									e.endContainer,
									e.endOffset
								),
								(n.anchorNode === e.startContainer &&
									n.focusNode === e.endContainer) ||
									n.setBaseAndExtent(r, 0, r, 1))),
							s.fire('AfterSetSelectionRange', { range: e, forward: t });
					}
				}
			},
			g = {
				bookmarkManager: null,
				controlSelection: null,
				dom: u,
				win: c,
				serializer: e,
				editor: s,
				collapse: a,
				setCursorLocation: function(e, t) {
					var n = u.createRng();
					e
						? (n.setStart(e, t), n.setEnd(e, t), m(n), a(!1))
						: (Bh(u, n, s.getBody(), !0), m(n));
				},
				getContent: function(e) {
					return Om(s, e);
				},
				setContent: t,
				getBookmark: function(e, t) {
					return n.getBookmark(e, t);
				},
				moveToBookmark: function(e) {
					return n.moveToBookmark(e);
				},
				select: function(e, t) {
					return (
						(function(r, e, o) {
							return R.from(e).map(function(e) {
								var t = r.nodeIndex(e),
									n = r.createRng();
								return (
									n.setStart(e.parentNode, t),
									n.setEnd(e.parentNode, t + 1),
									o && (Bh(r, n, e, !0), Bh(r, n, e, !1)),
									n
								);
							});
						})(u, e, t).each(m),
						e
					);
				},
				isCollapsed: function() {
					var e = h(),
						t = d();
					return (
						!(!e || e.item) &&
						(e.compareEndPoints
							? 0 === e.compareEndPoints('StartToEnd', e)
							: !t || e.collapsed)
					);
				},
				isForward: r,
				setNode: function(e) {
					return t(u.getOuterHTML(e)), e;
				},
				getNode: function() {
					return (function(e, t) {
						var n, r, o, i, a;
						return t
							? ((r = t.startContainer),
							  (o = t.endContainer),
							  (i = t.startOffset),
							  (a = t.endOffset),
							  (n = t.commonAncestorContainer),
							  !t.collapsed &&
							  (r === o &&
									a - i < 2 &&
									r.hasChildNodes() &&
									(n = r.childNodes[i]),
							  3 === r.nodeType &&
									3 === o.nodeType &&
									((r = r.length === i ? um(r.nextSibling, !0) : r.parentNode),
									(o = 0 === a ? um(o.previousSibling, !1) : o.parentNode),
									r && r === o))
									? r
									: n && 3 === n.nodeType
									? n.parentNode
									: n)
							: e;
					})(s.getBody(), h());
				},
				getSel: d,
				setRng: m,
				getRng: h,
				getStart: function(e) {
					return im(s.getBody(), h(), e);
				},
				getEnd: function(e) {
					return am(s.getBody(), h(), e);
				},
				getSelectedBlocks: function(e, t) {
					return (function(e, t, n, r) {
						var o,
							i,
							a = [];
						if (
							((i = e.getRoot()),
							(n = e.getParent(n || im(i, t, t.collapsed), e.isBlock)),
							(r = e.getParent(r || am(i, t, t.collapsed), e.isBlock)),
							n && n !== i && a.push(n),
							n && r && n !== r)
						)
							for (var u = new Fi((o = n), i); (o = u.next()) && o !== r; )
								e.isBlock(o) && a.push(o);
						return r && n !== r && r !== i && a.push(r), a;
					})(u, h(), e, t);
				},
				normalize: function() {
					var e = h(),
						t = d();
					if (Mm(t) || !Ph(s)) return e;
					var n = Bm(u, e);
					return (
						n.each(function(e) {
							m(e, r());
						}),
						n.getOr(e)
					);
				},
				selectorChanged: function(e, t) {
					return i(e, t), g;
				},
				selectorChangedWithUnbind: i,
				getScrollContainer: function() {
					for (var e, t = u.getRoot(); t && 'BODY' !== t.nodeName; ) {
						if (t.scrollHeight > t.clientHeight) {
							e = t;
							break;
						}
						t = t.parentNode;
					}
					return e;
				},
				scrollIntoView: function(e, t) {
					return mm(s, e, t);
				},
				placeCaretAt: function(e, t) {
					return m(pm(e, t, s.getDoc()));
				},
				getBoundingClientRect: function() {
					var e = h();
					return e.collapsed
						? Vc.fromRangeStart(e).getClientRects()[0]
						: e.getBoundingClientRect();
				},
				destroy: function() {
					(c = l = f = null), o.destroy();
				}
			};
		return (
			(n = fh(g)),
			(o = lh(g, s)),
			(g.bookmarkManager = n),
			(g.controlSelection = o),
			g
		);
	}
	function Fm(e, i, a) {
		e.addNodeFilter('font', function(e) {
			F(e, function(e) {
				var t = i.parse(e.attr('style')),
					n = e.attr('color'),
					r = e.attr('face'),
					o = e.attr('size');
				n && (t.color = n),
					r && (t['font-family'] = r),
					o && (t['font-size'] = a[parseInt(e.attr('size'), 10) - 1]),
					(e.name = 'span'),
					e.attr('style', i.serialize(t)),
					(function(t, e) {
						F(e, function(e) {
							t.attr(e, null);
						});
					})(e, ['color', 'face', 'size']);
			});
		});
	}
	function Um(e, t) {
		var n = $r();
		t.convert_fonts_to_spans && Fm(e, n, Zn.explode(t.font_size_legacy_values)),
			(function(e, n) {
				e.addNodeFilter('strike', function(e) {
					F(e, function(e) {
						var t = n.parse(e.attr('style'));
						(t['text-decoration'] = 'line-through'),
							(e.name = 'span'),
							e.attr('style', n.serialize(t));
					});
				});
			})(e, n);
	}
	function jm(e, t, n, r) {
		(e.padd_empty_with_br || t.insert) && n[r.name]
			? (r.empty().append(new hf('br', 1)).shortEnded = !0)
			: (r.empty().append(new hf('#text', 3)).value = qr);
	}
	function qm(t, e, n, r) {
		return r.isEmpty(e, n, function(e) {
			return (function(e, t) {
				var n = e.getElementRule(t.name);
				return n && n.paddEmpty;
			})(t, e);
		});
	}
	function $m(T, A) {
		void 0 === A && (A = Pr());
		var M = {},
			R = [],
			_ = {},
			D = {};
		((T = T || {}).validate = !('validate' in T) || T.validate),
			(T.root_name = T.root_name || 'body');
		var O = function(e) {
				var t, n, r;
				(n = e.name) in M && ((r = _[n]) ? r.push(e) : (_[n] = [e])),
					(t = R.length);
				for (; t--; )
					(n = R[t].name) in e.attributes.map &&
						((r = D[n]) ? r.push(e) : (D[n] = [e]));
				return e;
			},
			e = {
				schema: A,
				addAttributeFilter: function(e, n) {
					tg(ng(e), function(e) {
						var t;
						for (t = 0; t < R.length; t++)
							if (R[t].name === e) return void R[t].callbacks.push(n);
						R.push({ name: e, callbacks: [n] });
					});
				},
				getAttributeFilters: function() {
					return [].concat(R);
				},
				addNodeFilter: function(e, n) {
					tg(ng(e), function(e) {
						var t = M[e];
						t || (M[e] = t = []), t.push(n);
					});
				},
				getNodeFilters: function() {
					var e = [];
					for (var t in M)
						M.hasOwnProperty(t) && e.push({ name: t, callbacks: M[t] });
					return e;
				},
				filterNode: O,
				parse: function(e, a) {
					var t,
						n,
						r,
						o,
						i,
						u,
						c,
						s,
						l,
						f,
						d,
						h = [];
					(a = a || {}),
						(_ = {}),
						(D = {}),
						(l = rg(
							eg('script,style,head,html,body,title,meta,param'),
							A.getBlockElements()
						));
					var m,
						g = A.getNonEmptyElements(),
						p = A.children,
						v = T.validate,
						y =
							'forced_root_block' in a
								? a.forced_root_block
								: T.forced_root_block,
						b = !1 === (m = y) ? '' : !0 === m ? 'p' : m,
						C = A.getWhiteSpaceElements(),
						w = /^[ \t\r\n]+/,
						x = /[ \t\r\n]+$/,
						z = /[ \t\r\n]+/g,
						E = /^[ \t\r\n]+$/;
					f = C.hasOwnProperty(a.context) || C.hasOwnProperty(T.root_name);
					function N(e) {
						var t,
							n,
							r,
							o,
							i = A.getBlockElements();
						for (t = e.prev; t && 3 === t.type; ) {
							if (0 < (r = t.value.replace(x, '')).length)
								return void (t.value = r);
							if ((n = t.next)) {
								if (3 === n.type && n.value.length) {
									t = t.prev;
									continue;
								}
								if (!i[n.name] && 'script' !== n.name && 'style' !== n.name) {
									t = t.prev;
									continue;
								}
							}
							(o = t.prev), t.remove(), (t = o);
						}
					}
					var S = function(e, t) {
						var n,
							r = new hf(e, t);
						return e in M && ((n = _[e]) ? n.push(r) : (_[e] = [r])), r;
					};
					t = fd(
						{
							validate: v,
							allow_script_urls: T.allow_script_urls,
							allow_conditional_comments: T.allow_conditional_comments,
							preserve_cdata: T.preserve_cdata,
							self_closing_elements: (function(e) {
								var t,
									n = {};
								for (t in e) 'li' !== t && 'p' !== t && (n[t] = e[t]);
								return n;
							})(A.getSelfClosingElements()),
							cdata: function(e) {
								d.append(S('#cdata', 4)).value = e;
							},
							text: function(e, t) {
								var n;
								f ||
									((e = e.replace(z, ' ')),
									(function(e, t) {
										return e && (t[e.name] || 'br' === e.name);
									})(d.lastChild, l) && (e = e.replace(w, ''))),
									0 !== e.length &&
										(((n = S('#text', 3)).raw = !!t), (d.append(n).value = e));
							},
							comment: function(e) {
								d.append(S('#comment', 8)).value = e;
							},
							pi: function(e, t) {
								(d.append(S(e, 7)).value = t), N(d);
							},
							doctype: function(e) {
								(d.append(S('#doctype', 10)).value = e), N(d);
							},
							start: function(e, t, n) {
								var r, o, i, a, u;
								if ((i = v ? A.getElementRule(e) : {})) {
									for (
										(r = S(i.outputName || e, 1)).attributes = t,
											r.shortEnded = n,
											d.append(r),
											(u = p[d.name]) && p[r.name] && !u[r.name] && h.push(r),
											o = R.length;
										o--;

									)
										(a = R[o].name) in t.map &&
											((c = D[a]) ? c.push(r) : (D[a] = [r]));
									l[e] && N(r), n || (d = r), !f && C[e] && (f = !0);
								}
							},
							end: function(e) {
								var t, n, r, o, i;
								if ((n = v ? A.getElementRule(e) : {})) {
									if (l[e] && !f) {
										if ((t = d.firstChild) && 3 === t.type)
											if (0 < (r = t.value.replace(w, '')).length)
												(t.value = r), (t = t.next);
											else
												for (o = t.next, t.remove(), t = o; t && 3 === t.type; )
													(r = t.value),
														(o = t.next),
														(0 !== r.length && !E.test(r)) ||
															(t.remove(), (t = o)),
														(t = o);
										if ((t = d.lastChild) && 3 === t.type)
											if (0 < (r = t.value.replace(x, '')).length)
												(t.value = r), (t = t.prev);
											else
												for (o = t.prev, t.remove(), t = o; t && 3 === t.type; )
													(r = t.value),
														(o = t.prev),
														(0 !== r.length && !E.test(r)) ||
															(t.remove(), (t = o)),
														(t = o);
									}
									if (
										(f && C[e] && (f = !1),
										n.removeEmpty &&
											qm(A, g, C, d) &&
											!d.attr('name') &&
											!d.attr('id'))
									)
										return (
											(i = d.parent),
											l[d.name] ? d.empty().remove() : d.unwrap(),
											void (d = i)
										);
									n.paddEmpty &&
										((function(e) {
											return Qm(e, '#text') && e.firstChild.value === qr;
										})(d) ||
											qm(A, g, C, d)) &&
										jm(T, a, l, d),
										(d = d.parent);
								}
							}
						},
						A
					);
					var k = (d = new hf(a.context || T.root_name, 11));
					if (
						(t.parse(e, a.format),
						v &&
							h.length &&
							(a.context
								? (a.invalid = !0)
								: (function(e) {
										var t, n, r, o, i, a, u, c, s, l, f, d, h, m, g, p;
										for (
											d = eg('tr,td,th,tbody,thead,tfoot,table'),
												l = A.getNonEmptyElements(),
												f = A.getWhiteSpaceElements(),
												h = A.getTextBlockElements(),
												m = A.getSpecialElements(),
												t = 0;
											t < e.length;
											t++
										)
											if ((n = e[t]).parent && !n.fixed)
												if (h[n.name] && 'li' === n.parent.name) {
													for (g = n.next; g && h[g.name]; )
														(g.name = 'li'),
															(g.fixed = !0),
															n.parent.insert(g, n.parent),
															(g = g.next);
													n.unwrap(n);
												} else {
													for (
														o = [n], r = n.parent;
														r && !A.isValidChild(r.name, n.name) && !d[r.name];
														r = r.parent
													)
														o.push(r);
													if (r && 1 < o.length) {
														for (
															o.reverse(), i = a = O(o[0].clone()), s = 0;
															s < o.length - 1;
															s++
														) {
															for (
																A.isValidChild(a.name, o[s].name)
																	? ((u = O(o[s].clone())), a.append(u))
																	: (u = a),
																	c = o[s].firstChild;
																c && c !== o[s + 1];

															)
																(p = c.next), u.append(c), (c = p);
															a = u;
														}
														qm(A, l, f, i)
															? r.insert(n, o[0], !0)
															: (r.insert(i, o[0], !0), r.insert(n, i)),
															(r = o[0]),
															(qm(A, l, f, r) || Qm(r, 'br')) &&
																r.empty().remove();
													} else if (n.parent) {
														if ('li' === n.name) {
															if (
																(g = n.prev) &&
																('ul' === g.name || 'ul' === g.name)
															) {
																g.append(n);
																continue;
															}
															if (
																(g = n.next) &&
																('ul' === g.name || 'ul' === g.name)
															) {
																g.insert(n, g.firstChild, !0);
																continue;
															}
															n.wrap(O(new hf('ul', 1)));
															continue;
														}
														A.isValidChild(n.parent.name, 'div') &&
														A.isValidChild('div', n.name)
															? n.wrap(O(new hf('div', 1)))
															: m[n.name]
															? n.empty().remove()
															: n.unwrap();
													}
												}
								  })(h)),
						b &&
							('body' === k.name || a.isRootContent) &&
							(function() {
								function e(e) {
									e &&
										((r = e.firstChild) &&
											3 === r.type &&
											(r.value = r.value.replace(w, '')),
										(r = e.lastChild) &&
											3 === r.type &&
											(r.value = r.value.replace(x, '')));
								}
								var t,
									n,
									r = k.firstChild;
								if (A.isValidChild(k.name, b.toLowerCase())) {
									for (; r; )
										(t = r.next),
											3 === r.type ||
											(1 === r.type &&
												'p' !== r.name &&
												!l[r.name] &&
												!r.attr('data-mce-type'))
												? (n ||
														((n = S(b, 1)).attr(T.forced_root_block_attrs),
														k.insert(n, r)),
												  n.append(r))
												: (e(n), (n = null)),
											(r = t);
									e(n);
								}
							})(),
						!a.invalid)
					) {
						for (s in _)
							if (_.hasOwnProperty(s)) {
								for (c = M[s], i = (n = _[s]).length; i--; )
									n[i].parent || n.splice(i, 1);
								for (r = 0, o = c.length; r < o; r++) c[r](n, s, a);
							}
						for (r = 0, o = R.length; r < o; r++)
							if ((c = R[r]).name in D) {
								for (i = (n = D[c.name]).length; i--; )
									n[i].parent || n.splice(i, 1);
								for (i = 0, u = c.callbacks.length; i < u; i++)
									c.callbacks[i](n, c.name, a);
							}
					}
					return k;
				}
			};
		return (
			(function(e, g) {
				var p = e.schema;
				g.remove_trailing_brs &&
					e.addNodeFilter('br', function(e, t, n) {
						var r,
							o,
							i,
							a,
							u,
							c,
							s,
							l,
							f = e.length,
							d = Zn.extend({}, p.getBlockElements()),
							h = p.getNonEmptyElements(),
							m = p.getNonEmptyElements();
						for (d.body = 1, r = 0; r < f; r++)
							if (
								((i = (o = e[r]).parent), d[o.parent.name] && o === i.lastChild)
							) {
								for (u = o.prev; u; ) {
									if (
										'span' !== (c = u.name) ||
										'bookmark' !== u.attr('data-mce-type')
									) {
										if ('br' !== c) break;
										if ('br' === c) {
											o = null;
											break;
										}
									}
									u = u.prev;
								}
								o &&
									(o.remove(),
									qm(p, h, m, i) &&
										(s = p.getElementRule(i.name)) &&
										(s.removeEmpty
											? i.remove()
											: s.paddEmpty && jm(g, n, d, i)));
							} else {
								for (
									a = o;
									i &&
									i.firstChild === a &&
									i.lastChild === a &&
									!d[(a = i).name];

								)
									i = i.parent;
								a === i &&
									!0 !== g.padd_empty_with_br &&
									(((l = new hf('#text', 3)).value = qr), o.replace(l));
							}
					}),
					e.addAttributeFilter('href', function(e) {
						var t,
							n,
							r,
							o = e.length;
						if (!g.allow_unsafe_link_target)
							for (; o--; )
								'a' === (t = e[o]).name &&
									'_blank' === t.attr('target') &&
									t.attr(
										'rel',
										((n = t.attr('rel')),
										void 0,
										(r = n ? Zn.trim(n) : ''),
										/\b(noopener)\b/g.test(r)
											? r
											: r
													.split(' ')
													.filter(function(e) {
														return 0 < e.length;
													})
													.concat(['noopener'])
													.sort()
													.join(' '))
									);
					}),
					g.allow_html_in_named_anchor ||
						e.addAttributeFilter('id,name', function(e) {
							for (var t, n, r, o, i = e.length; i--; )
								if ('a' === (o = e[i]).name && o.firstChild && !o.attr('href'))
									for (
										r = o.parent, t = o.lastChild;
										(n = t.prev), r.insert(t, o), (t = n);

									);
						}),
					g.fix_list_elements &&
						e.addNodeFilter('ul,ol', function(e) {
							for (var t, n, r = e.length; r--; )
								if ('ul' === (n = (t = e[r]).parent).name || 'ol' === n.name)
									if (t.prev && 'li' === t.prev.name) t.prev.append(t);
									else {
										var o = new hf('li', 1);
										o.attr('style', 'list-style-type: none'), t.wrap(o);
									}
						}),
					g.validate &&
						p.getValidClasses() &&
						e.addAttributeFilter('class', function(e) {
							for (
								var t, n, r, o, i, a, u, c = e.length, s = p.getValidClasses();
								c--;

							) {
								for (
									n = (t = e[c]).attr('class').split(' '), i = '', r = 0;
									r < n.length;
									r++
								)
									(o = n[r]),
										(u = !1),
										(a = s['*']) && a[o] && (u = !0),
										(a = s[t.name]),
										!u && a && a[o] && (u = !0),
										u && (i && (i += ' '), (i += o));
								i.length || (i = null), t.attr('class', i);
							}
						});
			})(e, T),
			Jm(e, T),
			e
		);
	}
	function Wm(e, t, n) {
		-1 === Zn.inArray(t, n) &&
			(e.addAttributeFilter(n, function(e, t) {
				for (var n = e.length; n--; ) e[n].attr(t, null);
			}),
			t.push(n));
	}
	function Km(e, t, n, r, o) {
		return (function(e, t, n) {
			return t.no_events || !e
				? n
				: (function(e, t) {
						return e.fire('PostProcess', t);
				  })(e, te(te({}, t), { content: n })).content;
		})(
			e,
			o,
			(function(e, t, n) {
				return wf(e, t).serialize(n);
			})(t, n, r)
		);
	}
	function Xm(a, u) {
		var e = ['data-mce-selected'],
			c = u && u.dom ? u.dom : Qi.DOM,
			s = u && u.schema ? u.schema : Pr(a);
		(a.entity_encoding = a.entity_encoding || 'named'),
			(a.remove_trailing_brs =
				!('remove_trailing_brs' in a) || a.remove_trailing_brs);
		var l = $m(a, s);
		return (
			og(l, a, c),
			{
				schema: s,
				addNodeFilter: l.addNodeFilter,
				addAttributeFilter: l.addAttributeFilter,
				serialize: function(e, t) {
					void 0 === t && (t = {});
					var n = te({ format: 'html' }, t),
						r = ag(u, e, n),
						o = (function(e, t, n) {
							var r = mu.trim(n.getInner ? t.innerHTML : e.getOuterHTML(t));
							return n.selection || hr(it.fromDom(t)) ? r : Zn.trim(r);
						})(c, r, n),
						i = (function(e, t, n) {
							var r = n.selection ? te({ forced_root_block: !1 }, n) : n,
								o = e.parse(t, r);
							return ig(o), o;
						})(l, o, n);
					return 'tree' === n.format ? i : Km(u, a, s, i, n);
				},
				addRules: function(e) {
					s.addValidElements(e);
				},
				setRules: function(e) {
					s.setValidElements(e);
				},
				addTempAttr: d(Wm, l, e),
				getTempAttrs: function() {
					return e;
				},
				getNodeFilters: l.getNodeFilters,
				getAttributeFilters: l.getAttributeFilters
			}
		);
	}
	function Ym(e, t) {
		var n = Xm(e, t);
		return {
			schema: n.schema,
			addNodeFilter: n.addNodeFilter,
			addAttributeFilter: n.addAttributeFilter,
			serialize: n.serialize,
			addRules: n.addRules,
			setRules: n.setRules,
			addTempAttr: n.addTempAttr,
			getTempAttrs: n.getTempAttrs,
			getNodeFilters: n.getNodeFilters,
			getAttributeFilters: n.getAttributeFilters
		};
	}
	function Gm(e) {
		var t,
			n,
			r = decodeURIComponent(e).split(',');
		return (
			(n = /data:([^;]+)/.exec(r[0])) && (t = n[1]), { type: t, data: r[1] }
		);
	}
	function Zm(e) {
		return (e || 'blobid') + lg++;
	}
	var Jm = function(e, t) {
			t.inline_styles && Um(e, t);
		},
		Qm = function(e, t) {
			return (
				e &&
				e.firstChild &&
				e.firstChild === e.lastChild &&
				e.firstChild.name === t
			);
		},
		eg = Zn.makeMap,
		tg = Zn.each,
		ng = Zn.explode,
		rg = Zn.extend,
		og = function(t, c, s) {
			t.addAttributeFilter('data-mce-tabindex', function(e, t) {
				for (var n, r = e.length; r--; )
					(n = e[r]).attr('tabindex', n.attr('data-mce-tabindex')),
						n.attr(t, null);
			}),
				t.addAttributeFilter('src,href,style', function(e, t) {
					for (
						var n,
							r,
							o = e.length,
							i = 'data-mce-' + t,
							a = c.url_converter,
							u = c.url_converter_scope;
						o--;

					)
						(r = (n = e[o]).attr(i)) !== undefined
							? (n.attr(t, 0 < r.length ? r : null), n.attr(i, null))
							: ((r = n.attr(t)),
							  'style' === t
									? (r = s.serializeStyle(s.parseStyle(r), n.name))
									: a && (r = a.call(u, r, t, n.name)),
							  n.attr(t, 0 < r.length ? r : null));
				}),
				t.addAttributeFilter('class', function(e) {
					for (var t, n, r = e.length; r--; )
						(n = (t = e[r]).attr('class')) &&
							((n = t.attr('class').replace(/(?:^|\s)mce-item-\w+(?!\S)/g, '')),
							t.attr('class', 0 < n.length ? n : null));
				}),
				t.addAttributeFilter('data-mce-type', function(e, t, n) {
					for (var r, o = e.length; o--; ) {
						if ('bookmark' === (r = e[o]).attr('data-mce-type') && !n.cleanup)
							R.from(r.firstChild).exists(function(e) {
								return !mu.isZwsp(e.value);
							})
								? r.unwrap()
								: r.remove();
					}
				}),
				t.addNodeFilter('noscript', function(e) {
					for (var t, n = e.length; n--; )
						(t = e[n].firstChild) && (t.value = Sr.decode(t.value));
				}),
				t.addNodeFilter('script,style', function(e, t) {
					for (
						var n,
							r,
							o,
							i = e.length,
							a = function(e) {
								return e
									.replace(/(<!--\[CDATA\[|\]\]-->)/g, '\n')
									.replace(/^[\r\n]*|[\r\n]*$/g, '')
									.replace(
										/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,
										''
									)
									.replace(
										/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,
										''
									);
							};
						i--;

					)
						(r = (n = e[i]).firstChild ? n.firstChild.value : ''),
							'script' === t
								? ((o = n.attr('type')) &&
										n.attr(
											'type',
											'mce-no/type' === o ? null : o.replace(/^mce\-/, '')
										),
								  'xhtml' === c.element_format &&
										0 < r.length &&
										(n.firstChild.value = '// <![CDATA[\n' + a(r) + '\n// ]]>'))
								: 'xhtml' === c.element_format &&
								  0 < r.length &&
								  (n.firstChild.value = '\x3c!--\n' + a(r) + '\n--\x3e');
				}),
				t.addNodeFilter('#comment', function(e) {
					for (var t, n = e.length; n--; )
						(t = e[n]),
							c.preserve_cdata && 0 === t.value.indexOf('[CDATA[')
								? ((t.name = '#cdata'),
								  (t.type = 4),
								  (t.value = s.decode(
										t.value.replace(/^\[CDATA\[|\]\]$/g, '')
								  )))
								: 0 === t.value.indexOf('mce:protected ') &&
								  ((t.name = '#text'),
								  (t.type = 3),
								  (t.raw = !0),
								  (t.value = unescape(t.value).substr(14)));
				}),
				t.addNodeFilter('xml:namespace,input', function(e, t) {
					for (var n, r = e.length; r--; )
						7 === (n = e[r]).type
							? n.remove()
							: 1 === n.type &&
							  ('input' !== t || n.attr('type') || n.attr('type', 'text'));
				}),
				t.addAttributeFilter('data-mce-type', function(e) {
					F(e, function(e) {
						'format-caret' === e.attr('data-mce-type') &&
							(e.isEmpty(t.schema.getNonEmptyElements())
								? e.remove()
								: e.unwrap());
					});
				}),
				t.addAttributeFilter(
					'data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder',
					function(e, t) {
						for (var n = e.length; n--; ) e[n].attr(t, null);
					}
				);
		},
		ig = function(e) {
			function t(e) {
				return e && 'br' === e.name;
			}
			var n, r;
			t((n = e.lastChild)) && t((r = n.prev)) && (n.remove(), r.remove());
		},
		ag = function(e, t, n) {
			return (function(e, t) {
				return e && e.hasEventListeners('PreProcess') && !t.no_events;
			})(e, n)
				? (function(e, t, n) {
						var r,
							o,
							i,
							a = e.dom;
						return (
							(t = t.cloneNode(!0)),
							(r = j.document.implementation).createHTMLDocument &&
								((o = r.createHTMLDocument('')),
								Zn.each('BODY' === t.nodeName ? t.childNodes : [t], function(
									e
								) {
									o.body.appendChild(o.importNode(e, !0));
								}),
								(t = 'BODY' !== t.nodeName ? o.body.firstChild : o.body),
								(i = a.doc),
								(a.doc = o)),
							(function(e, t) {
								e.fire('PreProcess', t);
							})(e, te(te({}, n), { node: t })),
							i && (a.doc = i),
							t
						);
				  })(e, t, n)
				: t;
		},
		ug = function(e) {
			return 0 === e.indexOf('blob:')
				? (function(i) {
						return new wn(function(e, t) {
							function n() {
								t(
									'Cannot convert ' +
										i +
										' to Blob. Resource might not exist or is inaccessible.'
								);
							}
							try {
								var r = new j.XMLHttpRequest();
								r.open('GET', i, !0),
									(r.responseType = 'blob'),
									(r.onload = function() {
										200 === this.status ? e(this.response) : n();
									}),
									(r.onerror = n),
									r.send();
							} catch (o) {
								n();
							}
						});
				  })(e)
				: 0 === e.indexOf('data:')
				? (function(i) {
						return new wn(function(e) {
							var t,
								n,
								r,
								o = Gm(i);
							try {
								t = j.atob(o.data);
							} catch (HN) {
								return void e(new j.Blob([]));
							}
							for (n = new Uint8Array(t.length), r = 0; r < n.length; r++)
								n[r] = t.charCodeAt(r);
							e(new j.Blob([n], { type: o.type }));
						});
				  })(e)
				: null;
		},
		cg = function(n) {
			return new wn(function(e) {
				var t = new j.FileReader();
				(t.onloadend = function() {
					e(t.result);
				}),
					t.readAsDataURL(n);
			});
		},
		sg = Gm,
		lg = 0;
	function fg(o, i) {
		var a = {};
		return {
			findAll: function(e, n) {
				var t;
				(n = n || $(!0)),
					(t = U(
						(function(e) {
							return e ? G(e.getElementsByTagName('img')) : [];
						})(e),
						function(e) {
							var t = e.src;
							return (
								!!Wn.fileApi &&
								!e.hasAttribute('data-mce-bogus') &&
									!e.hasAttribute('data-mce-placeholder') &&
										!(!t || t === Wn.transparentSrc) &&
											(0 === t.indexOf('blob:')
												? !o.isUploaded(t) && n(e)
												: 0 === t.indexOf('data:') && n(e))
							);
						}
					));
				var r = X(t, function(n) {
					if (a[n.src])
						return new wn(function(t) {
							a[n.src].then(function(e) {
								if ('string' == typeof e) return e;
								t({ image: n, blobInfo: e.blobInfo });
							});
						});
					var e = new wn(function(e, t) {
						!(function(n, r, o, t) {
							var i, a;
							0 !== r.src.indexOf('blob:')
								? ((i = sg(r.src).data),
								  (a = n.findFirst(function(e) {
										return e.base64() === i;
								  }))
										? o({ image: r, blobInfo: a })
										: ug(r.src).then(
												function(e) {
													(a = n.create(Zm(), e, i)),
														n.add(a),
														o({ image: r, blobInfo: a });
												},
												function(e) {
													t(e);
												}
										  ))
								: (a = n.getByUri(r.src))
								? o({ image: r, blobInfo: a })
								: ug(r.src).then(
										function(t) {
											cg(t).then(function(e) {
												(i = sg(e).data),
													(a = n.create(Zm(), t, i)),
													n.add(a),
													o({ image: r, blobInfo: a });
											});
										},
										function(e) {
											t(e);
										}
								  );
						})(i, n, e, t);
					})
						.then(function(e) {
							return delete a[e.image.src], e;
						})
						['catch'](function(e) {
							return delete a[n.src], e;
						});
					return (a[n.src] = e);
				});
				return wn.all(r);
			}
		};
	}
	function dg(c, a) {
		function n(e, t, n, r) {
			var o, i;
			(o = new j.XMLHttpRequest()).open('POST', a.url),
				(o.withCredentials = a.credentials),
				(o.upload.onprogress = function(e) {
					r((e.loaded / e.total) * 100);
				}),
				(o.onerror = function() {
					n(
						'Image upload failed due to a XHR Transport error. Code: ' +
							o.status
					);
				}),
				(o.onload = function() {
					var e;
					o.status < 200 || 300 <= o.status
						? n('HTTP Error: ' + o.status)
						: (e = JSON.parse(o.responseText)) && 'string' == typeof e.location
						? t(
								(function(e, t) {
									return e
										? e.replace(/\/$/, '') + '/' + t.replace(/^\//, '')
										: t;
								})(a.basePath, e.location)
						  )
						: n('Invalid JSON: ' + o.responseText);
				}),
				(i = new j.FormData()).append('file', e.blob(), e.filename()),
				o.send(i);
		}
		function s(e, t) {
			return { url: t, blobInfo: e, status: !0 };
		}
		function l(e, t) {
			return { url: '', blobInfo: e, status: !1, error: t };
		}
		function f(e, t) {
			Zn.each(o[e], function(e) {
				e(t);
			}),
				delete o[e];
		}
		function r(e, t) {
			return (
				(e = Zn.grep(e, function(e) {
					return !c.isUploaded(e.blobUri());
				})),
				wn.all(
					Zn.map(e, function(e) {
						return c.isPending(e.blobUri())
							? (function(e) {
									var t = e.blobUri();
									return new wn(function(e) {
										(o[t] = o[t] || []), o[t].push(e);
									});
							  })(e)
							: (function(i, a, u) {
									return (
										c.markPending(i.blobUri()),
										new wn(function(t) {
											function e() {}
											var n;
											try {
												var r = function() {
													n && (n.close(), e);
												};
												a(
													i,
													function(e) {
														r(),
															c.markUploaded(i.blobUri(), e),
															f(i.blobUri(), s(i, e)),
															t(s(i, e));
													},
													function(e) {
														r(),
															c.removeFailed(i.blobUri()),
															f(i.blobUri(), l(i, e)),
															t(l(i, e));
													},
													function(e) {
														e < 0 ||
															100 < e ||
															(n = n || u()).progressBar.value(e);
													}
												);
											} catch (o) {
												t(l(i, o.message));
											}
										})
									);
							  })(e, a.handler, t);
					})
				)
			);
		}
		var o = {};
		return (
			!1 === B(a.handler) && (a.handler = n),
			{
				upload: function(e, t) {
					return !a.url &&
						(function(e) {
							return e === n;
						})(a.handler)
						? new wn(function(e) {
								e([]);
						  })
						: r(e, t);
				}
			}
		);
	}
	function hg(o) {
		function t(t) {
			return function(e) {
				return o.selection ? t(e) : [];
			};
		}
		function r(e, t, n) {
			for (
				var r = 0;
				-1 !== (r = e.indexOf(t, r)) &&
					((e = e.substring(0, r) + n + e.substr(r + t.length)),
					(r += n.length - t.length + 1)),
					-1 !== r;

			);
			return e;
		}
		function i(e, t, n) {
			return (
				(e = r(e, 'src="' + t + '"', 'src="' + n + '"')),
				(e = r(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"'))
			);
		}
		function n(t, n) {
			F(o.undoManager.data, function(e) {
				'fragmented' === e.type
					? (e.fragments = X(e.fragments, function(e) {
							return i(e, t, n);
					  }))
					: (e.content = i(e.content, t, n));
			});
		}
		function a() {
			return o.notificationManager.open({
				text: o.translate('Image uploading...'),
				type: 'info',
				timeout: -1,
				progressBar: !0
			});
		}
		function u(e, t) {
			h.removeByUri(e.src),
				n(e.src, t),
				o.$(e).attr({
					src: ys(o)
						? (function(e) {
								return (
									e + (-1 === e.indexOf('?') ? '?' : '&') + new Date().getTime()
								);
						  })(t)
						: t,
					'data-mce-src': o.convertURL(t, 'src')
				});
		}
		function c(n) {
			return (
				(f =
					f ||
					dg(m, {
						url: Cs(o),
						basePath: ws(o),
						credentials: xs(o),
						handler: zs(o)
					})),
				p().then(
					t(function(r) {
						var e = X(r, function(e) {
							return e.blobInfo;
						});
						return f.upload(e, a).then(
							t(function(e) {
								var t = X(e, function(e, t) {
									var n = r[t].image;
									return (
										e.status && bs(o)
											? u(n, e.url)
											: e.error && ch.uploadError(o, e.error),
										{ element: n, status: e.status }
									);
								});
								return n && n(t), t;
							})
						);
					})
				)
			);
		}
		function e(e) {
			if (vs(o)) return c(e);
		}
		function s(t) {
			return (
				!1 !==
					b(g, function(e) {
						return e(t);
					}) &&
				(0 !== t.getAttribute('src').indexOf('data:') || ps(o)(t))
			);
		}
		function l(e) {
			return e.replace(/src="(blob:[^"]+)"/g, function(e, n) {
				var t = m.getResultUri(n);
				if (t) return 'src="' + t + '"';
				var r = h.getByUri(n);
				return (r =
					r ||
					y(
						o.editorManager.get(),
						function(e, t) {
							return (
								e || (t.editorUpload && t.editorUpload.blobCache.getByUri(n))
							);
						},
						null
					))
					? 'src="data:' + r.blob().type + ';base64,' + r.base64() + '"'
					: e;
			});
		}
		var f,
			d,
			h = (function() {
				var n = [],
					o = function(e) {
						var t, n;
						if (!e.blob || !e.base64)
							throw new Error(
								'blob and base64 representations of the image are required for BlobInfo to be created'
							);
						return (
							(t = e.id || Gg('blobid')),
							(n = e.name || t),
							{
								id: $(t),
								name: $(n),
								filename: $(
									n +
										'.' +
										(function(e) {
											return (
												{
													'image/jpeg': 'jpg',
													'image/jpg': 'jpg',
													'image/gif': 'gif',
													'image/png': 'png'
												}[e.toLowerCase()] || 'dat'
											);
										})(e.blob.type)
								),
								blob: $(e.blob),
								base64: $(e.base64),
								blobUri: $(e.blobUri || j.URL.createObjectURL(e.blob)),
								uri: $(e.uri)
							}
						);
					},
					t = function(t) {
						return e(function(e) {
							return e.id() === t;
						});
					},
					e = function(e) {
						return U(n, e)[0];
					};
				return {
					create: function(e, t, n, r) {
						if (K(e)) return o({ id: e, name: r, blob: t, base64: n });
						if (_(e)) return o(e);
						throw new Error('Unknown input type');
					},
					add: function(e) {
						t(e.id()) || n.push(e);
					},
					get: t,
					getByUri: function(t) {
						return e(function(e) {
							return e.blobUri() === t;
						});
					},
					findFirst: e,
					removeByUri: function(t) {
						n = U(n, function(e) {
							return (
								e.blobUri() !== t || (j.URL.revokeObjectURL(e.blobUri()), !1)
							);
						});
					},
					destroy: function() {
						F(n, function(e) {
							j.URL.revokeObjectURL(e.blobUri());
						}),
							(n = []);
					}
				};
			})(),
			m = (function v() {
				function n(e, t) {
					return { status: e, resultUri: t };
				}
				function t(e) {
					return e in r;
				}
				var r = {};
				return {
					hasBlobUri: t,
					getResultUri: function(e) {
						var t = r[e];
						return t ? t.resultUri : null;
					},
					isPending: function(e) {
						return !!t(e) && 1 === r[e].status;
					},
					isUploaded: function(e) {
						return !!t(e) && 2 === r[e].status;
					},
					markPending: function(e) {
						r[e] = n(1, null);
					},
					markUploaded: function(e, t) {
						r[e] = n(2, t);
					},
					removeFailed: function(e) {
						delete r[e];
					},
					destroy: function() {
						r = {};
					}
				};
			})(),
			g = [],
			p = function() {
				return (d = d || fg(m, h)).findAll(o.getBody(), s).then(
					t(function(e) {
						return (
							(e = U(e, function(e) {
								return 'string' != typeof e || (ch.displayError(o, e), !1);
							})),
							F(e, function(e) {
								n(e.image.src, e.blobInfo.blobUri()),
									(e.image.src = e.blobInfo.blobUri()),
									e.image.removeAttribute('data-mce-src');
							}),
							e
						);
					})
				);
			};
		return (
			o.on('SetContent', function() {
				vs(o) ? e() : p();
			}),
			o.on('RawSaveContent', function(e) {
				e.content = l(e.content);
			}),
			o.on('GetContent', function(e) {
				e.source_view || 'raw' === e.format || (e.content = l(e.content));
			}),
			o.on('PostRender', function() {
				o.parser.addNodeFilter('img', function(e) {
					F(e, function(e) {
						var t = e.attr('src');
						if (!h.getByUri(t)) {
							var n = m.getResultUri(t);
							n && e.attr('src', n);
						}
					});
				});
			}),
			{
				blobCache: h,
				addFilter: function(e) {
					g.push(e);
				},
				uploadImages: c,
				uploadImagesAuto: e,
				scanForImages: p,
				destroy: function() {
					h.destroy(), m.destroy(), (d = f = null);
				}
			}
		);
	}
	function mg(e, t, n) {
		var r = e.formatter.get(n);
		if (r)
			for (var o = 0; o < r.length; o++)
				if (!1 === r[o].inherit && e.dom.is(t, r[o].selector)) return !0;
		return !1;
	}
	function gg(t, e, n, r) {
		var o = t.dom.getRoot();
		return (
			e !== o &&
			((e = t.dom.getParent(e, function(e) {
				return !!mg(t, e, n) || e.parentNode === o || !!tp(t, e, n, r, !0);
			})),
			tp(t, e, n, r))
		);
	}
	function pg(e, t, n) {
		return (
			!!ep(t, n.inline) ||
			!!ep(t, n.block) ||
				(n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0)
		);
	}
	function vg(e, t, n, r, o, i) {
		var a,
			u,
			c,
			s = n[r];
		if (n.onmatch) return n.onmatch(t, n, r);
		if (s)
			if ('undefined' == typeof s.length) {
				for (a in s)
					if (s.hasOwnProperty(a)) {
						if (
							((u = 'attributes' === r ? e.getAttrib(t, a) : vl(e, t, a)),
							o && !u && !n.exact)
						)
							return;
						if ((!o || n.exact) && !ep(u, pl(e, ml(s[a], i), a))) return;
					}
			} else
				for (c = 0; c < s.length; c++)
					if ('attributes' === r ? e.getAttrib(t, s[c]) : vl(e, t, s[c]))
						return n;
		return n;
	}
	function yg(e, t, n, r) {
		var o;
		return r
			? gg(e, r, t, n)
			: ((r = e.selection.getNode()),
			  !!gg(e, r, t, n) ||
					!((o = e.selection.getStart()) === r || !gg(e, o, t, n)));
	}
	function bg(r, o, i) {
		var e,
			a = [],
			u = {};
		return (
			(e = r.selection.getStart()),
			r.dom.getParent(
				e,
				function(e) {
					var t, n;
					for (t = 0; t < o.length; t++)
						(n = o[t]), !u[n] && tp(r, e, n, i) && ((u[n] = !0), a.push(n));
				},
				r.dom.getRoot()
			),
			a
		);
	}
	function Cg(e, t) {
		var n,
			r,
			o,
			i,
			a,
			u = e.formatter.get(t),
			c = e.dom;
		if (u)
			for (
				n = e.selection.getStart(), r = bl(c, n), i = u.length - 1;
				0 <= i;
				i--
			) {
				if (!(a = u[i].selector) || u[i].defaultBlock) return !0;
				for (o = r.length - 1; 0 <= o; o--) if (c.is(r[o], a)) return !0;
			}
		return !1;
	}
	function wg(e, t) {
		return e.splitText(t);
	}
	function xg(e) {
		var t = e.startContainer,
			n = e.startOffset,
			r = e.endContainer,
			o = e.endOffset;
		return (
			t === r && Qt.isText(t)
				? 0 < n &&
				  n < t.nodeValue.length &&
				  ((t = (r = wg(t, n)).previousSibling),
				  n < o
						? ((t = r = wg(r, (o -= n)).previousSibling),
						  (o = r.nodeValue.length),
						  (n = 0))
						: (o = 0))
				: (Qt.isText(t) &&
						0 < n &&
						n < t.nodeValue.length &&
						((t = wg(t, n)), (n = 0)),
				  Qt.isText(r) &&
						0 < o &&
						o < r.nodeValue.length &&
						(o = (r = wg(r, o).previousSibling).nodeValue.length)),
			{ startContainer: t, startOffset: n, endContainer: r, endOffset: o }
		);
	}
	function zg(e, t, n) {
		if (0 !== n) {
			var r = e.data.slice(t, t + n),
				o = t + n >= e.data.length,
				i = 0 === t;
			e.replaceData(
				t,
				n,
				(function(n, r, o) {
					return y(
						n,
						function(e, t) {
							return ul(t) || Kl(t)
								? e.previousCharIsSpace ||
								  ('' === e.str && r) ||
								  (e.str.length === n.length - 1 && o)
									? { previousCharIsSpace: !1, str: e.str + qr }
									: { previousCharIsSpace: !0, str: e.str + ' ' }
								: { previousCharIsSpace: !1, str: e.str + t };
						},
						{ previousCharIsSpace: !1, str: '' }
					).str;
				})(r, i, o)
			);
		}
	}
	function Eg(e, t) {
		var n = e.data.slice(t),
			r =
				n.length -
				(function(e) {
					return e.replace(/^\s+/g, '');
				})(n).length;
		return zg(e, t, r);
	}
	function Ng(e, t) {
		var n = it.fromDom(e);
		return (function(e, t, n) {
			return Sa(e, t, n).isSome();
		})(it.fromDom(t), 'pre,code', d(pe, n));
	}
	function Sg(e, t) {
		return (
			(qa(t) &&
				!1 ===
					(function(e, t) {
						return (
							Qt.isText(t) && /^[ \t\r\n]*$/.test(t.data) && !1 === Ng(e, t)
						);
					})(e, t)) ||
			(function(e) {
				return Qt.isElement(e) && 'A' === e.nodeName && e.hasAttribute('name');
			})(t) ||
			np(t)
		);
	}
	function kg(e, t) {
		return (function(e, t) {
			var n = e.container(),
				r = e.offset();
			return (
				!1 === Vc.isTextPosition(e) &&
				n === t.parentNode &&
				r > Vc.before(t).offset()
			);
		})(t, e)
			? Vc(t.container(), t.offset() - 1)
			: t;
	}
	function Tg(e) {
		return qa(e.previousSibling)
			? R.some(
					(function(e) {
						return Qt.isText(e) ? Vc(e, e.data.length) : Vc.after(e);
					})(e.previousSibling)
			  )
			: e.previousSibling
			? Ul.lastPositionIn(e.previousSibling)
			: R.none();
	}
	function Ag(e) {
		return qa(e.nextSibling)
			? R.some(
					(function(e) {
						return Qt.isText(e) ? Vc(e, 0) : Vc.before(e);
					})(e.nextSibling)
			  )
			: e.nextSibling
			? Ul.firstPositionIn(e.nextSibling)
			: R.none();
	}
	function Mg(e, t) {
		return Tg(t)
			.orThunk(function() {
				return Ag(t);
			})
			.orThunk(function() {
				return (function(e, t) {
					var n = Vc.before(
						t.previousSibling ? t.previousSibling : t.parentNode
					);
					return Ul.prevPosition(e, n).fold(function() {
						return Ul.nextPosition(e, Vc.after(t));
					}, R.some);
				})(e, t);
			});
	}
	function Rg(e, t) {
		return Ag(t)
			.orThunk(function() {
				return Tg(t);
			})
			.orThunk(function() {
				return (function(e, t) {
					return Ul.nextPosition(e, Vc.after(t)).fold(function() {
						return Ul.prevPosition(e, Vc.before(t));
					}, R.some);
				})(e, t);
			});
	}
	function _g(e, t, n) {
		return (function(e, t, n) {
			return e ? Rg(t, n) : Mg(t, n);
		})(e, t, n).map(d(kg, n));
	}
	function Dg(t, n, e) {
		e.fold(
			function() {
				t.focus();
			},
			function(e) {
				t.selection.setRng(e.toRange(), n);
			}
		);
	}
	function Og(e, t) {
		return t && e.schema.getBlockElements().hasOwnProperty(Oe(t));
	}
	function Hg(e) {
		if (ip(e)) {
			var t = it.fromHtml('<br data-mce-bogus="1">');
			return _e(e), Ht(e, t), R.some(Vc.before(t.dom()));
		}
		return R.none();
	}
	function Bg(e, t, a) {
		var n = Ce(e).filter(Lt),
			r = we(e).filter(Lt);
		return (
			Bt(e),
			(function(e, t, n, r) {
				return e.isSome() && t.isSome() && n.isSome()
					? R.some(r(e.getOrDie(), t.getOrDie(), n.getOrDie()))
					: R.none();
			})(n, r, t, function(e, t, n) {
				var r = e.dom(),
					o = t.dom(),
					i = r.data.length;
				return (
					(function(e, t, n) {
						var r = se(e.data).length;
						e.appendData(t.data), Bt(it.fromDom(t)), n && Eg(e, r);
					})(r, o, a),
					n.container() === o ? Vc(r, i) : n
				);
			}).orThunk(function() {
				return (
					a &&
						(n.each(function(e) {
							return (function(e, t) {
								var n = e.data.slice(0, t),
									r = n.length - se(n).length;
								return zg(e, t - r, r);
							})(e.dom(), e.dom().length);
						}),
						r.each(function(e) {
							return Eg(e.dom(), 0);
						})),
					t
				);
			})
		);
	}
	function Pg(e) {
		return (
			0 <
			(function(e) {
				for (var t = []; e; ) {
					if (
						(3 === e.nodeType && e.nodeValue !== up) ||
						1 < e.childNodes.length
					)
						return [];
					1 === e.nodeType && t.push(e), (e = e.firstChild);
				}
				return t;
			})(e).length
		);
	}
	function Lg(e) {
		if (e) {
			var t = new Fi(e, e);
			for (e = t.current(); e; e = t.next()) if (Qt.isText(e)) return e;
		}
		return null;
	}
	function Vg(e) {
		var t = it.fromTag('span');
		return (
			Ke(t, { id: cp, 'data-mce-bogus': '1', 'data-mce-type': 'format-caret' }),
			e && Ht(t, it.fromText(up)),
			t
		);
	}
	function Ig(e, t, n) {
		void 0 === n && (n = !0);
		var r = e.dom,
			o = e.selection;
		if (Pg(t)) ap(e, !1, it.fromDom(t), n);
		else {
			var i = o.getRng(),
				a = r.getParent(t, r.isBlock),
				u = (function(e) {
					var t = Lg(e);
					return t && t.nodeValue.charAt(0) === up && t.deleteData(0, 1), t;
				})(t);
			i.startContainer === u &&
				0 < i.startOffset &&
				i.setStart(u, i.startOffset - 1),
				i.endContainer === u && 0 < i.endOffset && i.setEnd(u, i.endOffset - 1),
				r.remove(t, !0),
				a && r.isEmpty(a) && Jg(it.fromDom(a)),
				o.setRng(i);
		}
	}
	function Fg(e, t, n) {
		void 0 === n && (n = !0);
		var r = e.dom,
			o = e.selection;
		if (t) Ig(e, t, n);
		else if (!(t = lc(e.getBody(), o.getStart())))
			for (; (t = r.get(cp)); ) Ig(e, t, !1);
	}
	function Ug(e, t, n) {
		var r = e.dom,
			o = r.getParent(n, d(dl, e));
		o && r.isEmpty(o)
			? n.parentNode.replaceChild(t, n)
			: (Zg(it.fromDom(n)),
			  r.isEmpty(n) ? n.parentNode.replaceChild(t, n) : r.insertAfter(t, n));
	}
	function jg(e, t) {
		return e.appendChild(t), t;
	}
	function qg(e, t) {
		var n = m(
			e,
			function(e, t) {
				return jg(e, t.cloneNode(!1));
			},
			t
		);
		return jg(n, n.ownerDocument.createTextNode(up));
	}
	function $g(t) {
		t.on('mouseup keydown', function(e) {
			!(function(e, t) {
				var n = e.selection,
					r = e.getBody();
				Fg(e, null, !1),
					(8 !== t && 46 !== t) ||
						!n.isCollapsed() ||
						n.getStart().innerHTML !== up ||
						Fg(e, lc(r, n.getStart())),
					(37 !== t && 39 !== t) || Fg(e, lc(r, n.getStart()));
			})(t, e.keyCode);
		});
	}
	function Wg(e, t) {
		return (
			e.schema.getTextInlineElements().hasOwnProperty(Oe(t)) &&
			!sc(t.dom()) &&
			!Qt.isBogus(t.dom())
		);
	}
	var Kg,
		Xg,
		Yg = 0,
		Gg = function(e) {
			return (
				e +
				Yg++ +
				(function() {
					function e() {
						return Math.round(4294967295 * Math.random()).toString(36);
					}
					return 's' + new Date().getTime().toString(36) + e() + e() + e();
				})()
			);
		},
		Zg = function(e) {
			var t = Ca(e, 'br'),
				n = U(
					(function(e) {
						for (var t = [], n = e.dom(); n; )
							t.push(it.fromDom(n)), (n = n.lastChild);
						return t;
					})(e).slice(-1),
					er
				);
			t.length === n.length && F(n, Bt);
		},
		Jg = function(e) {
			_e(e), Ht(e, it.fromHtml('<br data-mce-bogus="1">'));
		},
		Qg = function(n) {
			ke(n).each(function(t) {
				Ce(t).each(function(e) {
					ar(n) && er(t) && ar(e) && Bt(t);
				});
			});
		},
		ep = gl,
		tp = function(e, t, n, r, o) {
			var i,
				a,
				u,
				c,
				s = e.formatter.get(n),
				l = e.dom;
			if (s && t)
				for (a = 0; a < s.length; a++)
					if (
						((i = s[a]),
						pg(e.dom, t, i) &&
							vg(l, t, i, 'attributes', o, r) &&
							vg(l, t, i, 'styles', o, r))
					) {
						if ((c = i.classes))
							for (u = 0; u < c.length; u++)
								if (!e.dom.hasClass(t, c[u])) return;
						return i;
					}
		},
		np = Qt.hasAttribute('data-mce-bookmark'),
		rp = Qt.hasAttribute('data-mce-bogus'),
		op = Qt.hasAttributeValue('data-mce-bogus', 'all'),
		ip = function(e, t) {
			return (
				void 0 === t && (t = !0),
				(function(e, t) {
					var n,
						r = 0;
					if (Sg(e, e)) return !1;
					if (!(n = e.firstChild)) return !0;
					var o = new Fi(n, e);
					do {
						if (t) {
							if (op(n)) {
								n = o.next(!0);
								continue;
							}
							if (rp(n)) {
								n = o.next();
								continue;
							}
						}
						if (Qt.isBr(n)) r++, (n = o.next());
						else {
							if (Sg(e, n)) return !1;
							n = o.next();
						}
					} while (n);
					return r <= 1;
				})(e.dom(), t)
			);
		},
		ap = function(t, n, e, r) {
			void 0 === r && (r = !0);
			var o = _g(n, t.getBody(), e.dom()),
				i = Ea(
					e,
					d(Og, t),
					(function(t) {
						return function(e) {
							return e.dom() === t;
						};
					})(t.getBody())
				),
				a = Bg(
					e,
					o,
					(function(e, t) {
						return ee(e.schema.getTextInlineElements(), Oe(t));
					})(t, e)
				);
			t.dom.isEmpty(t.getBody())
				? (t.setContent(''), t.selection.setCursorLocation())
				: i.bind(Hg).fold(
						function() {
							r && Dg(t, n, a);
						},
						function(e) {
							r && Dg(t, n, R.some(e));
						}
				  );
		},
		up = mu.ZWSP,
		cp = '_mce_caret',
		sp = {},
		lp = Xn.filter,
		fp = Xn.each;
	(Xg = function(e) {
		var t,
			n,
			r = e.selection.getRng();
		(t = Qt.matchNodeNames(['pre'])),
			r.collapsed ||
				((n = e.selection.getSelectedBlocks()),
				fp(
					lp(lp(n, t), function(e) {
						return (
							t(e.previousSibling) && -1 !== Xn.indexOf(n, e.previousSibling)
						);
					}),
					function(e) {
						!(function(e, t) {
							Ii(t).remove(),
								Ii(e)
									.append('<br><br>')
									.append(t.childNodes);
						})(e.previousSibling, e);
					}
				));
	}),
		sp[(Kg = 'pre')] || (sp[Kg] = []),
		sp[Kg].push(Xg);
	function dp(o) {
		this.compare = function(e, t) {
			if (e.nodeName !== t.nodeName) return !1;
			function n(n) {
				var r = {};
				return (
					Ap(o.getAttribs(n), function(e) {
						var t = e.nodeName.toLowerCase();
						0 !== t.indexOf('_') &&
							'style' !== t &&
							0 !== t.indexOf('data-') &&
							(r[t] = o.getAttrib(n, t));
					}),
					r
				);
			}
			function r(e, t) {
				var n, r;
				for (r in e)
					if (e.hasOwnProperty(r)) {
						if (void 0 === (n = t[r])) return !1;
						if (e[r] !== n) return !1;
						delete t[r];
					}
				for (r in t) if (t.hasOwnProperty(r)) return !1;
				return !0;
			}
			return (
				!!r(n(e), n(t)) &&
				!!r(
					o.parseStyle(o.getAttrib(e, 'style')),
					o.parseStyle(o.getAttrib(t, 'style'))
				) &&
					!Wl(e) && !Wl(t)
			);
		};
	}
	function hp(e, t, n) {
		return e.isChildOf(t, n) && t !== n && !e.isBlock(n);
	}
	function mp(e, t, n) {
		var r, o;
		if (
			((r = t[n ? 'startContainer' : 'endContainer']),
			(o = t[n ? 'startOffset' : 'endOffset']),
			Qt.isElement(r))
		) {
			var i = r.childNodes.length - 1;
			!n && o && o--, (r = r.childNodes[i < o ? i : o]);
		}
		return (
			Qt.isText(r) &&
				n &&
				o >= r.nodeValue.length &&
				(r = new Fi(r, e.getBody()).next() || r),
			Qt.isText(r) && !n && 0 === o && (r = new Fi(r, e.getBody()).prev() || r),
			r
		);
	}
	function gp(e, t, n, r) {
		var o = e.create(n, r);
		return t.parentNode.insertBefore(o, t), o.appendChild(t), o;
	}
	function pp(e, t, n, r, o) {
		var i = it.fromDom(t),
			a = it.fromDom(e.create(r, o)),
			u = n ? ze(i) : xe(i);
		return Re(a, u), n ? (Te(i, a), Me(a, i)) : (Ae(i, a), Ht(a, i)), a.dom();
	}
	function vp(e, t, n, r) {
		return !(t = fl(t, n, r)) || 'BR' === t.nodeName || e.isBlock(t);
	}
	function yp(e, r, o, t, i) {
		var n,
			a = e.dom;
		if (
			!(function(e, t, n) {
				return (
					!!_p(t, n.inline) ||
					!!_p(t, n.block) ||
						(n.selector ? Qt.isElement(t) && e.is(t, n.selector) : void 0)
				);
			})(a, t, r) &&
			!(function(e, t) {
				return t.links && 'A' === e.nodeName;
			})(t, r)
		)
			return !1;
		var u = t;
		if ('all' !== r.remove) {
			Rp(r.styles, function(e, t) {
				(e = pl(a, ml(e, o), t)),
					'number' == typeof t && ((t = e), (i = null)),
					(!r.remove_similar && i && !_p(vl(a, i, t), e)) ||
						a.setStyle(u, t, ''),
					(n = !0);
			}),
				n &&
					'' === a.getAttrib(u, 'style') &&
					(u.removeAttribute('style'), u.removeAttribute('data-mce-style')),
				Rp(r.attributes, function(e, t) {
					var n;
					if (
						((e = ml(e, o)),
						'number' == typeof t && ((t = e), (i = null)),
						r.remove_similar || !i || _p(a.getAttrib(i, t), e))
					) {
						if (
							'class' === t &&
							(e = a.getAttrib(u, t)) &&
							((n = ''),
							Rp(e.split(/\s+/), function(e) {
								/mce\-\w+/.test(e) && (n += (n ? ' ' : '') + e);
							}),
							n)
						)
							return void a.setAttrib(u, t, n);
						'class' === t && u.removeAttribute('className'),
							Mp.test(t) && u.removeAttribute('data-mce-' + t),
							u.removeAttribute(t);
					}
				}),
				Rp(r.classes, function(e) {
					(e = ml(e, o)), (i && !a.hasClass(i, e)) || a.removeClass(u, e);
				});
			for (var c = a.getAttribs(u), s = 0; s < c.length; s++) {
				var l = c[s].nodeName;
				if (0 !== l.indexOf('_') && 0 !== l.indexOf('data-')) return !1;
			}
		}
		return 'none' !== r.remove
			? ((function(t, e, n) {
					var r,
						o = e.parentNode,
						i = t.dom,
						a = as(t);
					n.block &&
						(a
							? o === i.getRoot() &&
							  ((n.list_block && _p(e, n.list_block)) ||
									Rp(Zn.grep(e.childNodes), function(e) {
										hl(t, a, e.nodeName.toLowerCase())
											? r
												? r.appendChild(e)
												: ((r = gp(i, e, a)),
												  i.setAttribs(r, t.settings.forced_root_block_attrs))
											: (r = 0);
									}))
							: i.isBlock(e) &&
							  !i.isBlock(o) &&
							  (vp(i, e, !1) ||
									vp(i, e.firstChild, !0, !0) ||
									e.insertBefore(i.create('br'), e.firstChild),
							  vp(i, e, !0) ||
									vp(i, e.lastChild, !1, !0) ||
									e.appendChild(i.create('br')))),
						(n.selector && n.inline && !_p(n.inline, e)) || i.remove(e, !0);
			  })(e, u, r),
			  !0)
			: void 0;
	}
	function bp(u, n, a, e, r) {
		function c(e) {
			var t = (function(n, e, r, o, i) {
				var a;
				return (
					Rp(bl(n.dom, e.parentNode).reverse(), function(e) {
						var t;
						a ||
							'_start' === e.id ||
							'_end' === e.id ||
							((t = tp(n, e, r, o, i)) && !1 !== t.split && (a = e));
					}),
					a
				);
			})(u, e, n, a, r);
			return (function(e, t, n, r, o, i, a, u) {
				var c,
					s,
					l,
					f,
					d,
					h,
					m = e.dom;
				if (n) {
					for (
						h = n.parentNode, c = r.parentNode;
						c && c !== h;
						c = c.parentNode
					) {
						for (s = m.clone(c, !1), d = 0; d < t.length; d++)
							if (yp(e, t[d], u, s, s)) {
								s = 0;
								break;
							}
						s && (l && s.appendChild(l), (f = f || s), (l = s));
					}
					!i || (a.mixed && m.isBlock(n)) || (r = m.split(n, r)),
						l && (o.parentNode.insertBefore(l, o), f.appendChild(o));
				}
				return r;
			})(u, l, t, e, e, !0, f, a);
		}
		function s(e) {
			var t = h.get(e ? '_start' : '_end'),
				n = t[e ? 'firstChild' : 'lastChild'];
			return (
				(function(e) {
					return (
						Wl(e) && Qt.isElement(e) && ('_start' === e.id || '_end' === e.id)
					);
				})(n) && (n = n[e ? 'firstChild' : 'lastChild']),
				Qt.isText(n) &&
					0 === n.data.length &&
					(n = e
						? t.previousSibling || t.nextSibling
						: t.nextSibling || t.previousSibling),
				h.remove(t, !0),
				n
			);
		}
		function t(e) {
			var t,
				n,
				r = e.commonAncestorContainer,
				o = Tl(u, e, l, !0);
			if (f.split) {
				if (((o = xg(o)), (t = mp(u, o, !0)) !== (n = mp(u, o)))) {
					if (
						(/^(TR|TH|TD)$/.test(t.nodeName) &&
							t.firstChild &&
							(t =
								'TR' === t.nodeName
									? t.firstChild.firstChild || t
									: t.firstChild || t),
						r &&
							/^T(HEAD|BODY|FOOT|R)$/.test(r.nodeName) &&
							(function(e) {
								return /^(TH|TD)$/.test(e.nodeName);
							})(n) &&
							n.firstChild &&
							(n = n.firstChild || n),
						hp(h, t, n))
					) {
						var i = R.from(t.firstChild).getOr(t);
						return (
							c(
								pp(h, i, !0, 'span', {
									id: '_start',
									'data-mce-type': 'bookmark'
								})
							),
							void s(!0)
						);
					}
					if (hp(h, n, t)) {
						i = R.from(n.lastChild).getOr(n);
						return (
							c(
								pp(h, i, !1, 'span', {
									id: '_end',
									'data-mce-type': 'bookmark'
								})
							),
							void s(!1)
						);
					}
					(t = gp(h, t, 'span', { id: '_start', 'data-mce-type': 'bookmark' })),
						(n = gp(h, n, 'span', { id: '_end', 'data-mce-type': 'bookmark' }));
					var a = h.createRng();
					a.setStartAfter(t),
						a.setEndBefore(n),
						ef(h, a, function(e) {
							F(e, function(e) {
								Wl(e) || Wl(e.parentNode) || c(e);
							});
						}),
						c(t),
						c(n),
						(t = s(!0)),
						(n = s());
				} else t = n = c(t);
				(o.startContainer = t.parentNode ? t.parentNode : t),
					(o.startOffset = h.nodeIndex(t)),
					(o.endContainer = n.parentNode ? n.parentNode : n),
					(o.endOffset = h.nodeIndex(n) + 1);
			}
			ef(h, o, function(e) {
				Rp(e, function(e) {
					g(e),
						Qt.isElement(e) &&
							'underline' === u.dom.getStyle(e, 'text-decoration') &&
							e.parentNode &&
							'underline' === yl(h, e.parentNode) &&
							yp(
								u,
								{
									deep: !1,
									exact: !0,
									inline: 'span',
									styles: { textDecoration: 'underline' }
								},
								null,
								e
							);
				});
			});
		}
		var o,
			i,
			l = u.formatter.get(n),
			f = l[0],
			d = !0,
			h = u.dom,
			m = u.selection,
			g = function(e) {
				var t, n, r, o, i;
				if (
					(Qt.isElement(e) &&
						h.getContentEditable(e) &&
						((o = d), (d = 'true' === h.getContentEditable(e)), (i = !0)),
					(t = Zn.grep(e.childNodes)),
					d && !i)
				)
					for (n = 0, r = l.length; n < r && !yp(u, l[n], a, e, e); n++);
				if (f.deep && t.length) {
					for (n = 0, r = t.length; n < r; n++) g(t[n]);
					i && (d = o);
				}
			};
		if (e)
			sl(e)
				? ((i = h.createRng()).setStartBefore(e), i.setEndAfter(e), t(i))
				: t(e);
		else if ('false' !== h.getContentEditable(m.getNode()))
			m.isCollapsed() &&
			f.inline &&
			!h.select('td[data-mce-selected],th[data-mce-selected]').length
				? (function(e, t, n, r) {
						var o,
							i,
							a,
							u,
							c,
							s,
							l,
							f = e.dom,
							d = e.selection,
							h = [],
							m = d.getRng();
						for (
							o = m.startContainer,
								i = m.startOffset,
								3 === (c = o).nodeType &&
									(i !== o.nodeValue.length && (u = !0), (c = c.parentNode));
							c;

						) {
							if (tp(e, c, t, n, r)) {
								s = c;
								break;
							}
							c.nextSibling && (u = !0), h.push(c), (c = c.parentNode);
						}
						if (s)
							if (u) {
								(a = d.getBookmark()), m.collapse(!0);
								var g = Tl(e, m, e.formatter.get(t), !0);
								(g = xg(g)), e.formatter.remove(t, n, g), d.moveToBookmark(a);
							} else {
								l = lc(e.getBody(), s);
								var p = Vg(!1).dom(),
									v = qg(h, p);
								Ug(e, p, l || s),
									Ig(e, l, !1),
									d.setCursorLocation(v, 1),
									f.isEmpty(s) && f.remove(s);
							}
				  })(u, n, a, r)
				: ((o = Wc.getPersistentBookmark(u.selection, !0)),
				  t(m.getRng()),
				  m.moveToBookmark(o),
				  f.inline && yg(u, n, a, m.getStart()) && ll(h, m, m.getRng()),
				  u.nodeChanged());
		else {
			e = m.getNode();
			for (
				var p = 0, v = l.length;
				p < v && (!l[p].ceFalseOverride || !yp(u, l[p], a, e, e));
				p++
			);
		}
	}
	function Cp(e) {
		return Qt.isElement(e) && !Wl(e) && !sc(e) && !Qt.isBogus(e);
	}
	function wp(e, t) {
		var n;
		for (n = e; n; n = n[t]) {
			if (Qt.isText(n) && 0 !== n.nodeValue.length) return e;
			if (Qt.isElement(n) && !Wl(n)) return n;
		}
		return e;
	}
	function xp(e, t, n) {
		var r,
			o,
			i = new dp(e);
		if (
			t &&
			n &&
			((t = wp(t, 'previousSibling')),
			(n = wp(n, 'nextSibling')),
			i.compare(t, n))
		) {
			for (r = t.nextSibling; r && r !== n; )
				(r = (o = r).nextSibling), t.appendChild(o);
			return (
				e.remove(n),
				Zn.each(Zn.grep(n.childNodes), function(e) {
					t.appendChild(e);
				}),
				t
			);
		}
		return n;
	}
	function zp(n, e) {
		return d(function(e, t) {
			return !(!t || !vl(n, t, e));
		}, e);
	}
	function Ep(r, e, t) {
		return d(
			function(e, t, n) {
				r.setStyle(n, e, t),
					'' === n.getAttribute('style') && n.removeAttribute('style'),
					Hp(r, n);
			},
			e,
			t
		);
	}
	function Np(e, t) {
		var n;
		1 === t.nodeType &&
			t.parentNode &&
			1 === t.parentNode.nodeType &&
			((n = yl(e, t.parentNode)),
			e.getStyle(t, 'color') && n
				? e.setStyle(t, 'text-decoration', n)
				: e.getStyle(t, 'text-decoration') === n &&
				  e.setStyle(t, 'text-decoration', null));
	}
	function Sp(n, e, r, o) {
		Dp(e, function(t) {
			Dp(n.dom.select(t.inline, o), function(e) {
				Cp(e) && yp(n, t, r, e, t.exact ? e : null);
			}),
				(function(r, e, t) {
					if (e.clear_child_styles) {
						var n = e.links ? '*:not(a)' : '*';
						Dp(r.select(n, t), function(n) {
							Cp(n) &&
								Dp(e.styles, function(e, t) {
									r.setStyle(n, t, '');
								});
						});
					}
				})(n.dom, t, o);
		});
	}
	function kp(t) {
		var n = Vc.fromRangeStart(t),
			r = Vc.fromRangeEnd(t),
			o = t.commonAncestorContainer;
		return Ul.fromPosition(!1, o, r)
			.map(function(e) {
				return !kc(n, r, o) && kc(n, e, o)
					? (function(e, t, n, r) {
							var o = j.document.createRange();
							return o.setStart(e, t), o.setEnd(n, r), o;
					  })(n.container(), n.offset(), e.container(), e.offset())
					: t;
			})
			.getOr(t);
	}
	function Tp(e, t, n, r, o) {
		return (
			null === t.get() &&
				(function(t, n) {
					var r = at({});
					t.set({}),
						n.on('NodeChange', function(e) {
							Vp(n, e.element, r, t.get());
						});
				})(t, e),
			(function(e, t, n, r) {
				var o = e.get();
				F(t.split(','), function(e) {
					o[e] || (o[e] = { similar: r, callbacks: [] }),
						o[e].callbacks.push(n);
				}),
					e.set(o);
			})(t, n, r, o),
			{
				unbind: function() {
					return (function(e, t, n) {
						var r = e.get();
						F(t.split(','), function(e) {
							(r[e].callbacks = U(r[e].callbacks, function(e) {
								return e !== n;
							})),
								0 === r[e].callbacks.length && delete r[e];
						}),
							e.set(r);
					})(t, n, r);
				}
			}
		);
	}
	var Ap = Zn.each,
		Mp = /^(src|href|style)$/,
		Rp = Zn.each,
		_p = gl,
		Dp = Zn.each,
		Op = function(e, t, n) {
			Dp(e.childNodes, function(e) {
				Cp(e) && (t(e) && n(e), e.hasChildNodes() && Op(e, t, n));
			});
		},
		Hp = function(e, t) {
			'SPAN' === t.nodeName && 0 === e.getAttribs(t).length && e.remove(t, !0);
		},
		Bp = function(e) {
			return e.collapsed ? e : kp(e);
		},
		Pp = Zn.each,
		Lp = function(m, g, p, r) {
			function v(n, e) {
				if (((e = e || C), n)) {
					if (
						(e.onformat && e.onformat(n, e, p, r),
						Pp(e.styles, function(e, t) {
							i.setStyle(n, t, ml(e, p));
						}),
						e.styles)
					) {
						var t = i.getAttrib(n, 'style');
						t && i.setAttrib(n, 'data-mce-style', t);
					}
					Pp(e.attributes, function(e, t) {
						i.setAttrib(n, t, ml(e, p));
					}),
						Pp(e.classes, function(e) {
							(e = ml(e, p)), i.hasClass(n, e) || i.addClass(n, e);
						});
				}
			}
			function y(e, t) {
				var n = !1;
				return (
					!!C.selector &&
					(Pp(e, function(e) {
						if (!('collapsed' in e && e.collapsed !== o))
							return i.is(t, e.selector) && !sc(t)
								? (v(t, e), !(n = !0))
								: void 0;
					}),
					n)
				);
			}
			function e(c, e, t, s) {
				var l,
					f,
					d = [],
					h = !0;
				(l = C.inline || C.block),
					(f = c.create(l)),
					v(f),
					ef(c, e, function(e) {
						var a,
							u = function(e) {
								var t = !1,
									n = h,
									r = e.nodeName.toLowerCase(),
									o = e.parentNode.nodeName.toLowerCase();
								if (
									(Qt.isElement(e) &&
										c.getContentEditable(e) &&
										((n = h),
										(h = 'true' === c.getContentEditable(e)),
										(t = !0)),
									gl(r, 'br'))
								)
									return (a = 0), void (C.block && c.remove(e));
								if (C.wrapper && tp(m, e, g, p)) a = 0;
								else {
									if (
										h &&
										!t &&
										C.block &&
										!C.wrapper &&
										dl(m, r) &&
										hl(m, o, l)
									)
										return (e = c.rename(e, l)), v(e), d.push(e), void (a = 0);
									if (C.selector) {
										var i = y(b, e);
										if (!C.inline || i) return void (a = 0);
									}
									!h ||
									t ||
									!hl(m, l, r) ||
									!hl(m, o, l) ||
									(!s &&
										3 === e.nodeType &&
										1 === e.nodeValue.length &&
										65279 === e.nodeValue.charCodeAt(0)) ||
									sc(e) ||
									(C.inline && c.isBlock(e))
										? ((a = 0),
										  Pp(Zn.grep(e.childNodes), u),
										  t && (h = n),
										  (a = 0))
										: (a ||
												((a = c.clone(f, !1)),
												e.parentNode.insertBefore(a, e),
												d.push(a)),
										  a.appendChild(e));
								}
							};
						Pp(e, u);
					}),
					!0 === C.links &&
						Pp(d, function(e) {
							var t = function(e) {
								'A' === e.nodeName && v(e, C), Pp(Zn.grep(e.childNodes), t);
							};
							t(e);
						}),
					Pp(d, function(e) {
						function t(e) {
							var t = !1;
							return (
								Pp(e.childNodes, function(e) {
									if (
										(function(e) {
											return (
												e &&
												1 === e.nodeType &&
												!Wl(e) &&
												!sc(e) &&
												!Qt.isBogus(e)
											);
										})(e)
									)
										return (t = e), !1;
								}),
								t
							);
						}
						var n, r, o, i, a;
						((r = 0),
						Pp(e.childNodes, function(e) {
							(function(e) {
								return e && Qt.isText(e) && 0 === e.length;
							})(e) ||
								Wl(e) ||
								r++;
						}),
						(n = r),
						(!(1 < d.length) && c.isBlock(e)) || 0 !== n)
							? (C.inline || C.wrapper) &&
							  (C.exact ||
									1 !== n ||
									((i = t((o = e))) &&
										!Wl(i) &&
										pg(c, i, C) &&
										((a = c.clone(i, !1)),
										v(a),
										c.replace(a, o, !0),
										c.remove(i, !0)),
									(e = a || o)),
							  Sp(m, b, p, e),
							  (function(t, n, r, o, i) {
									(tp(t, i.parentNode, r, o) && yp(t, n, o, i)) ||
										(n.merge_with_parents &&
											t.dom.getParent(i.parentNode, function(e) {
												if (tp(t, e, r, o)) return yp(t, n, o, i), !0;
											}));
							  })(m, C, g, p, e),
							  (function(e, t, n, r) {
									t.styles &&
										t.styles.backgroundColor &&
										Op(
											r,
											zp(e, 'fontSize'),
											Ep(e, 'backgroundColor', ml(t.styles.backgroundColor, n))
										);
							  })(c, C, p, e),
							  (function(e, t, n, r) {
									('sub' !== t.inline && 'sup' !== t.inline) ||
										(Op(r, zp(e, 'fontSize'), Ep(e, 'fontSize', '')),
										e.remove(
											e.select('sup' === t.inline ? 'sub' : 'sup', r),
											!0
										));
							  })(c, C, 0, e),
							  (function(e, t, n, r) {
									r &&
										!1 !== t.merge_siblings &&
										((r = xp(e, fl(r), r)), (r = xp(e, r, fl(r, !0))));
							  })(c, C, 0, e))
							: c.remove(e, !0);
					});
			}
			var t,
				n,
				b = m.formatter.get(g),
				C = b[0],
				o = !r && m.selection.isCollapsed(),
				i = m.dom,
				a = m.selection;
			if ('false' !== i.getContentEditable(a.getNode())) {
				if (C) {
					if (r)
						sl(r)
							? y(b, r) ||
							  ((n = i.createRng()).setStartBefore(r),
							  n.setEndAfter(r),
							  e(i, Tl(m, n, b), 0, !0))
							: e(i, r, 0, !0);
					else if (
						o &&
						C.inline &&
						!i.select('td[data-mce-selected],th[data-mce-selected]').length
					)
						!(function(e, t, n) {
							var r,
								o,
								i,
								a,
								u,
								c,
								s = e.selection;
							(a = (r = s.getRng()).startOffset),
								(c = r.startContainer.nodeValue),
								(o = lc(e.getBody(), s.getStart())) && (i = Lg(o));
							var l = /[^\s\u00a0\u00ad\u200b\ufeff]/;
							c &&
							0 < a &&
							a < c.length &&
							l.test(c.charAt(a)) &&
							l.test(c.charAt(a - 1))
								? ((u = s.getBookmark()),
								  r.collapse(!0),
								  (r = Tl(e, r, e.formatter.get(t))),
								  (r = xg(r)),
								  e.formatter.apply(t, n, r),
								  s.moveToBookmark(u))
								: ((o && i.nodeValue === up) ||
										((i = (o = (function(e, t) {
											return e.importNode(t, !0);
										})(e.getDoc(), Vg(!0).dom())).firstChild),
										r.insertNode(o),
										(a = 1)),
								  e.formatter.apply(t, n, o),
								  s.setCursorLocation(i, a));
						})(m, g, p);
					else {
						var u = m.selection.getNode();
						m.settings.forced_root_block ||
							!b[0].defaultBlock ||
							i.getParent(u, i.isBlock) ||
							Lp(m, b[0].defaultBlock),
							m.selection.setRng(Bp(m.selection.getRng())),
							(t = Wc.getPersistentBookmark(m.selection, !0)),
							e(i, Tl(m, a.getRng(), b)),
							C.styles &&
								(function(e, t, n, r) {
									(t.styles.color || t.styles.textDecoration) &&
										(Zn.walk(r, d(Np, e), 'childNodes'), Np(e, r));
								})(i, C, 0, u),
							a.moveToBookmark(t),
							ll(i, a, a.getRng()),
							m.nodeChanged();
					}
					!(function(e, t) {
						fp(sp[e], function(e) {
							e(t);
						});
					})(g, m);
				}
			} else {
				r = a.getNode();
				for (var c = 0, s = b.length; c < s; c++)
					if (b[c].ceFalseOverride && i.is(r, b[c].selector))
						return void v(r, b[c]);
			}
		},
		Vp = function(r, e, t, n) {
			var o = Z(t.get()),
				i = {},
				a = {},
				u = U(bl(r.dom, e), function(e) {
					return 1 === e.nodeType && !e.getAttribute('data-mce-bogus');
				});
			N(n, function(e, n) {
				Zn.each(u, function(t) {
					return r.formatter.matchNode(t, n, {}, e.similar)
						? (-1 === o.indexOf(n) &&
								(F(e.callbacks, function(e) {
									e(!0, { node: t, format: n, parents: u });
								}),
								(i[n] = e.callbacks)),
						  (a[n] = e.callbacks),
						  !1)
						: !mg(r, t, n) && void 0;
				});
			});
			var c = Ip(t.get(), a, e, u);
			t.set(te(te({}, i), c));
		},
		Ip = function(e, n, r, o) {
			return T(e, function(e, t) {
				return (
					!!ee(n, t) ||
					(F(e, function(e) {
						e(!1, { node: r, format: t, parents: o });
					}),
					!1)
				);
			}).t;
		},
		Fp = function(r) {
			var t = {
				valigntop: [{ selector: 'td,th', styles: { verticalAlign: 'top' } }],
				valignmiddle: [
					{ selector: 'td,th', styles: { verticalAlign: 'middle' } }
				],
				valignbottom: [
					{ selector: 'td,th', styles: { verticalAlign: 'bottom' } }
				],
				alignleft: [
					{
						selector: 'figure.image',
						collapsed: !1,
						classes: 'align-left',
						ceFalseOverride: !0,
						preview: 'font-family font-size'
					},
					{
						selector: 'figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li',
						styles: { textAlign: 'left' },
						inherit: !1,
						preview: !1,
						defaultBlock: 'div'
					},
					{
						selector: 'img,table',
						collapsed: !1,
						styles: { float: 'left' },
						preview: 'font-family font-size'
					}
				],
				aligncenter: [
					{
						selector: 'figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li',
						styles: { textAlign: 'center' },
						inherit: !1,
						preview: 'font-family font-size',
						defaultBlock: 'div'
					},
					{
						selector: 'figure.image',
						collapsed: !1,
						classes: 'align-center',
						ceFalseOverride: !0,
						preview: 'font-family font-size'
					},
					{
						selector: 'img',
						collapsed: !1,
						styles: {
							display: 'block',
							marginLeft: 'auto',
							marginRight: 'auto'
						},
						preview: !1
					},
					{
						selector: 'table',
						collapsed: !1,
						styles: { marginLeft: 'auto', marginRight: 'auto' },
						preview: 'font-family font-size'
					}
				],
				alignright: [
					{
						selector: 'figure.image',
						collapsed: !1,
						classes: 'align-right',
						ceFalseOverride: !0,
						preview: 'font-family font-size'
					},
					{
						selector: 'figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li',
						styles: { textAlign: 'right' },
						inherit: !1,
						preview: 'font-family font-size',
						defaultBlock: 'div'
					},
					{
						selector: 'img,table',
						collapsed: !1,
						styles: { float: 'right' },
						preview: 'font-family font-size'
					}
				],
				alignjustify: [
					{
						selector: 'figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li',
						styles: { textAlign: 'justify' },
						inherit: !1,
						defaultBlock: 'div',
						preview: 'font-family font-size'
					}
				],
				bold: [
					{ inline: 'strong', remove: 'all' },
					{ inline: 'span', styles: { fontWeight: 'bold' } },
					{ inline: 'b', remove: 'all' }
				],
				italic: [
					{ inline: 'em', remove: 'all' },
					{ inline: 'span', styles: { fontStyle: 'italic' } },
					{ inline: 'i', remove: 'all' }
				],
				underline: [
					{
						inline: 'span',
						styles: { textDecoration: 'underline' },
						exact: !0
					},
					{ inline: 'u', remove: 'all' }
				],
				strikethrough: [
					{
						inline: 'span',
						styles: { textDecoration: 'line-through' },
						exact: !0
					},
					{ inline: 'strike', remove: 'all' }
				],
				forecolor: {
					inline: 'span',
					styles: { color: '%value' },
					links: !0,
					remove_similar: !0,
					clear_child_styles: !0
				},
				hilitecolor: {
					inline: 'span',
					styles: { backgroundColor: '%value' },
					links: !0,
					remove_similar: !0,
					clear_child_styles: !0
				},
				fontname: {
					inline: 'span',
					toggle: !1,
					styles: { fontFamily: '%value' },
					clear_child_styles: !0
				},
				fontsize: {
					inline: 'span',
					toggle: !1,
					styles: { fontSize: '%value' },
					clear_child_styles: !0
				},
				fontsize_class: { inline: 'span', attributes: { class: '%value' } },
				blockquote: { block: 'blockquote', wrapper: !0, remove: 'all' },
				subscript: { inline: 'sub' },
				superscript: { inline: 'sup' },
				code: { inline: 'code' },
				link: {
					inline: 'a',
					selector: 'a',
					remove: 'all',
					split: !0,
					deep: !0,
					onmatch: function() {
						return !0;
					},
					onformat: function(n, e, t) {
						Zn.each(t, function(e, t) {
							r.setAttrib(n, t, e);
						});
					}
				},
				removeformat: [
					{
						selector:
							'b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins',
						remove: 'all',
						split: !0,
						expand: !1,
						block_expand: !0,
						deep: !0
					},
					{
						selector: 'span',
						attributes: ['style', 'class'],
						remove: 'empty',
						split: !0,
						expand: !1,
						deep: !0
					},
					{
						selector: '*',
						attributes: ['style', 'class'],
						split: !1,
						expand: !1,
						deep: !0
					}
				]
			};
			return (
				Zn.each(
					'p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp'.split(/\s/),
					function(e) {
						t[e] = { block: e, remove: 'all' };
					}
				),
				t
			);
		};
	function Up(e, t) {
		function c(e) {
			var t;
			return (
				(r = 'string' == typeof e ? { name: e, classes: [], attrs: {} } : e),
				(function(e, t) {
					t.classes.length && jv.addClass(e, t.classes.join(' ')),
						jv.setAttribs(e, t.attrs);
				})((t = jv.create(r.name)), r),
				t
			);
		}
		var n,
			r,
			o,
			s = (t && t.schema) || Pr({}),
			l = function(n, e, t) {
				var r,
					o,
					i,
					a = 0 < e.length && e[0],
					u = a && a.name;
				if (
					(i = (function(e, t) {
						var n = 'string' != typeof e ? e.nodeName.toLowerCase() : e,
							r = s.getElementRule(n),
							o = r && r.parentsRequired;
						return (
							!(!o || !o.length) && (t && -1 !== Zn.inArray(o, t) ? t : o[0])
						);
					})(n, u))
				)
					u === i ? ((o = e[0]), (e = e.slice(1))) : (o = i);
				else if (a) (o = e[0]), (e = e.slice(1));
				else if (!t) return n;
				return (
					o && (r = c(o)).appendChild(n),
					t &&
						(r || (r = jv.create('div')).appendChild(n),
						Zn.each(t, function(e) {
							var t = c(e);
							r.insertBefore(t, n);
						})),
					l(r, e, o && o.siblings)
				);
			};
		return e && e.length
			? ((r = e[0]),
			  (n = c(r)),
			  (o = jv.create('div')).appendChild(l(n, e.slice(1), r.siblings)),
			  o)
			: '';
	}
	function jp(e) {
		var t,
			a = { classes: [], attrs: {} };
		return (
			'*' !== (e = a.selector = Zn.trim(e)) &&
				(t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function(
					e,
					t,
					n,
					r,
					o
				) {
					switch (t) {
						case '#':
							a.attrs.id = n;
							break;
						case '.':
							a.classes.push(n);
							break;
						case ':':
							-1 !==
								Zn.inArray(
									'checked disabled enabled read-only required'.split(' '),
									n
								) && (a.attrs[n] = n);
					}
					if ('[' === r) {
						var i = o.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
						i && (a.attrs[i[1]] = i[2]);
					}
					return '';
				})),
			(a.name = t || 'div'),
			a
		);
	}
	function qp(n, e) {
		var t,
			r,
			o,
			i,
			a,
			u,
			c = '';
		if (!1 === (u = n.settings.preview_styles)) return '';
		function s(e) {
			return e.replace(/%(\w+)/g, '');
		}
		if (
			('string' != typeof u &&
				(u =
					'font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow'),
			'string' == typeof e)
		) {
			if (!(e = n.formatter.get(e))) return;
			e = e[0];
		}
		return 'preview' in e && !1 === (u = e.preview)
			? ''
			: ((t = e.block || e.inline || 'span'),
			  (r = (i = (function(e) {
					return e && 'string' == typeof e
						? ((e = (e = e.split(/\s*,\s*/)[0]).replace(
								/\s*(~\+|~|\+|>)\s*/g,
								'$1'
						  )),
						  Zn.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/), function(e) {
								var t = Zn.map(e.split(/(?:~\+|~|\+)/), jp),
									n = t.pop();
								return t.length && (n.siblings = t), n;
						  }).reverse())
						: [];
			  })(e.selector)).length
					? (i[0].name || (i[0].name = t), (t = e.selector), Up(i, n))
					: Up([t], n)),
			  (o = jv.select(t, r)[0] || r.firstChild),
			  Uv(e.styles, function(e, t) {
					(e = s(e)) && jv.setStyle(o, t, e);
			  }),
			  Uv(e.attributes, function(e, t) {
					(e = s(e)) && jv.setAttrib(o, t, e);
			  }),
			  Uv(e.classes, function(e) {
					(e = s(e)), jv.hasClass(o, e) || jv.addClass(o, e);
			  }),
			  n.fire('PreviewFormats'),
			  jv.setStyles(r, { position: 'absolute', left: -65535 }),
			  n.getBody().appendChild(r),
			  (a = jv.getStyle(n.getBody(), 'fontSize', !0)),
			  (a = /px$/.test(a) ? parseInt(a, 10) : 0),
			  Uv(u.split(' '), function(e) {
					var t = jv.getStyle(o, e, !0);
					if (
						!(
							('background-color' === e &&
								/transparent|rgba\s*\([^)]+,\s*0\)/.test(t) &&
								((t = jv.getStyle(n.getBody(), e, !0)),
								'#ffffff' === jv.toHex(t).toLowerCase())) ||
							('color' === e && '#000000' === jv.toHex(t).toLowerCase())
						)
					) {
						if ('font-size' === e && /em|%$/.test(t)) {
							if (0 === a) return;
							t = (parseFloat(t) / (/%$/.test(t) ? 100 : 1)) * a + 'px';
						}
						'border' === e && t && (c += 'padding:0 2px;'),
							(c += e + ':' + t + ';');
					}
			  }),
			  n.fire('AfterPreviewFormats'),
			  jv.remove(r),
			  c);
	}
	function $p(e, t, n, r, o) {
		var i = t.get(n);
		!yg(e, n, r, o) || ('toggle' in i[0] && !i[0].toggle)
			? Lp(e, n, r, o)
			: bp(e, n, r, o);
	}
	function Wp(e) {
		var t = (function o(e) {
				var n = {},
					r = function(e, t) {
						e &&
							('string' != typeof e
								? Zn.each(e, function(e, t) {
										r(t, e);
								  })
								: (D(t) || (t = [t]),
								  Zn.each(t, function(e) {
										'undefined' == typeof e.deep && (e.deep = !e.selector),
											'undefined' == typeof e.split &&
												(e.split = !e.selector || e.inline),
											'undefined' == typeof e.remove &&
												e.selector &&
												!e.inline &&
												(e.remove = 'none'),
											e.selector &&
												e.inline &&
												((e.mixed = !0), (e.block_expand = !0)),
											'string' == typeof e.classes &&
												(e.classes = e.classes.split(/\s+/));
								  }),
								  (n[e] = t)));
					};
				return (
					r(Fp(e.dom)),
					r(e.settings.formats),
					{
						get: function(e) {
							return e ? n[e] : n;
						},
						has: function(e) {
							return ee(n, e);
						},
						register: r,
						unregister: function(e) {
							return e && n[e] && delete n[e], n;
						}
					}
				);
			})(e),
			n = at(null);
		return (
			qv(e),
			$g(e),
			{
				get: t.get,
				has: t.has,
				register: t.register,
				unregister: t.unregister,
				apply: d(Lp, e),
				remove: d(bp, e),
				toggle: d($p, e, t),
				match: d(yg, e),
				matchAll: d(bg, e),
				matchNode: d(tp, e),
				canApply: d(Cg, e),
				formatChanged: d(Tp, e, n),
				getCssText: d(qp, e)
			}
		);
	}
	function Kp(e) {
		return Qt.isElement(e)
			? e.outerHTML
			: Qt.isText(e)
			? Sr.encodeRaw(e.data, !1)
			: Qt.isComment(e)
			? '\x3c!--' + e.data + '--\x3e'
			: '';
	}
	function Xp(e, t, n) {
		var r = (function(e) {
			var t, n, r;
			for (
				r = j.document.createElement('div'),
					t = j.document.createDocumentFragment(),
					e && (r.innerHTML = e);
				(n = r.firstChild);

			)
				t.appendChild(n);
			return t;
		})(t);
		if (e.hasChildNodes() && n < e.childNodes.length) {
			var o = e.childNodes[n];
			o.parentNode.insertBefore(r, o);
		} else e.appendChild(r);
	}
	function Yp(e) {
		return {
			type: 'fragmented',
			fragments: e,
			content: '',
			bookmark: null,
			beforeBookmark: null
		};
	}
	function Gp(e) {
		return {
			type: 'complete',
			fragments: null,
			content: e,
			bookmark: null,
			beforeBookmark: null
		};
	}
	function Zp(e) {
		return 'fragmented' === e.type ? e.fragments.join('') : e.content;
	}
	function Jp(e) {
		var t = it.fromTag(
			'body',
			Zv.get().getOrThunk(function() {
				var e = j.document.implementation.createHTMLDocument('undo');
				return Zv.set(R.some(e)), e;
			})
		);
		return (
			_a(t, Zp(e)),
			F(Ca(t, '*[data-mce-bogus]'), De),
			(function(e) {
				return e.dom().innerHTML;
			})(t)
		);
	}
	function Qp(e) {
		return 0 === e.get();
	}
	function ev(e, t, n) {
		Qp(n) && (e.typing = t);
	}
	function tv(e, t) {
		e.typing && (ev(e, !1, t), e.add());
	}
	function nv(n) {
		var r = at(R.none()),
			o = at(0),
			i = at(0),
			a = {
				data: [],
				typing: !1,
				beforeChange: function() {
					!(function(e, t, n) {
						Qp(t) && n.set(R.some(Wc.getUndoBookmark(e.selection)));
					})(n, o, r);
				},
				add: function(e, t) {
					return (function(e, t, n, r, o, i, a) {
						var u = e.settings,
							c = Jv(e);
						if (
							((i = i || {}), (i = Zn.extend(i, c)), !1 === Qp(r) || e.removed)
						)
							return null;
						var s = t.data[n.get()];
						if (
							e
								.fire('BeforeAddUndo', {
									level: i,
									lastLevel: s,
									originalEvent: a
								})
								.isDefaultPrevented()
						)
							return null;
						if (s && ey(s, i)) return null;
						if (
							(t.data[n.get()] &&
								o.get().each(function(e) {
									t.data[n.get()].beforeBookmark = e;
								}),
							u.custom_undo_redo_levels &&
								t.data.length > u.custom_undo_redo_levels)
						) {
							for (var l = 0; l < t.data.length - 1; l++)
								t.data[l] = t.data[l + 1];
							t.data.length--, n.set(t.data.length);
						}
						(i.bookmark = Wc.getUndoBookmark(e.selection)),
							n.get() < t.data.length - 1 && (t.data.length = n.get() + 1),
							t.data.push(i),
							n.set(t.data.length - 1);
						var f = { level: i, lastLevel: s, originalEvent: a };
						return (
							e.fire('AddUndo', f),
							0 < n.get() && (e.setDirty(!0), e.fire('change', f)),
							i
						);
					})(n, a, i, o, r, e, t);
				},
				undo: function() {
					return (function(e, t, n, r) {
						var o;
						return (
							t.typing && (t.add(), (t.typing = !1), ev(t, !1, n)),
							0 < r.get() &&
								(r.set(r.get() - 1),
								(o = t.data[r.get()]),
								Qv(e, o, !0),
								e.setDirty(!0),
								e.fire('Undo', { level: o })),
							o
						);
					})(n, a, o, i);
				},
				redo: function() {
					return (function(e, t, n) {
						var r;
						return (
							t.get() < n.length - 1 &&
								(t.set(t.get() + 1),
								(r = n[t.get()]),
								Qv(e, r, !1),
								e.setDirty(!0),
								e.fire('Redo', { level: r })),
							r
						);
					})(n, i, a.data);
				},
				clear: function() {
					!(function(e, t, n) {
						(t.data = []), n.set(0), (t.typing = !1), e.fire('ClearUndos');
					})(n, a, i);
				},
				reset: function() {
					!(function(e) {
						e.clear(), e.add();
					})(a);
				},
				hasUndo: function() {
					return (function(e, t, n) {
						return (
							0 < n.get() || (t.typing && t.data[0] && !ey(Jv(e), t.data[0]))
						);
					})(n, a, i);
				},
				hasRedo: function() {
					return (function(e, t) {
						return t.get() < e.data.length - 1 && !e.typing;
					})(a, i);
				},
				transact: function(e) {
					return (function(e, t, n) {
						return tv(e, t), e.beforeChange(), e.ignore(n), e.add();
					})(a, o, e);
				},
				ignore: function(e) {
					!(function(e, t) {
						try {
							e.set(e.get() + 1), t();
						} finally {
							e.set(e.get() - 1);
						}
					})(o, e);
				},
				extra: function(e, t) {
					!(function(e, t, n, r, o) {
						if (t.transact(r)) {
							var i = t.data[n.get()].bookmark,
								a = t.data[n.get() - 1];
							Qv(e, a, !0),
								t.transact(o) && (t.data[n.get() - 1].beforeBookmark = i);
						}
					})(n, a, i, e, t);
				}
			};
		return (
			(function(n, r, o) {
				function i(e) {
					ev(r, !1, o), r.add({}, e);
				}
				var a = at(!1);
				n.on('init', function() {
					r.add();
				}),
					n.on('BeforeExecCommand', function(e) {
						var t = e.command;
						'Undo' !== t &&
							'Redo' !== t &&
							'mceRepaint' !== t &&
							(tv(r, o), r.beforeChange());
					}),
					n.on('ExecCommand', function(e) {
						var t = e.command;
						'Undo' !== t && 'Redo' !== t && 'mceRepaint' !== t && i(e);
					}),
					n.on('ObjectResizeStart cut', function() {
						r.beforeChange();
					}),
					n.on('SaveContent ObjectResized blur', i),
					n.on('dragend', i),
					n.on('keyup', function(e) {
						var t = e.keyCode;
						e.isDefaultPrevented() ||
							(((33 <= t && t <= 36) ||
								(37 <= t && t <= 40) ||
								45 === t ||
								e.ctrlKey) &&
								(i(), n.nodeChanged()),
							(46 !== t && 8 !== t) || n.nodeChanged(),
							a.get() &&
								r.typing &&
								!1 === ey(Jv(n), r.data[0]) &&
								(!1 === n.isDirty() &&
									(n.setDirty(!0),
									n.fire('change', { level: r.data[0], lastLevel: null })),
								n.fire('TypingUndo'),
								a.set(!1),
								n.nodeChanged()));
					}),
					n.on('keydown', function(e) {
						var t = e.keyCode;
						if (!e.isDefaultPrevented())
							if ((33 <= t && t <= 36) || (37 <= t && t <= 40) || 45 === t)
								r.typing && i(e);
							else {
								var n = (e.ctrlKey && !e.altKey) || e.metaKey;
								!(t < 16 || 20 < t) ||
									224 === t ||
									91 === t ||
									r.typing ||
									n ||
									(r.beforeChange(), ev(r, !0, o), r.add({}, e), a.set(!0));
							}
					}),
					n.on('mousedown', function(e) {
						r.typing && i(e);
					});
				n.on('input', function(e) {
					e.inputType &&
						((function(e) {
							return 'insertReplacementText' === e.inputType;
						})(e) ||
							(function(e) {
								return 'insertText' === e.inputType && null === e.data;
							})(e)) &&
						i(e);
				}),
					n.on('AddUndo Undo Redo ClearUndos', function(e) {
						e.isDefaultPrevented() || n.nodeChanged();
					});
			})(n, a, o),
			(function(e) {
				e.addShortcut('meta+z', '', 'Undo'),
					e.addShortcut('meta+y,meta+shift+z', '', 'Redo');
			})(n),
			a
		);
	}
	function rv(e) {
		return 'keydown' === e.type || 'keyup' === e.type;
	}
	function ov(e) {
		var t = e.keyCode;
		return t === hh.BACKSPACE || t === hh.DELETE;
	}
	function iv(o) {
		var i = o.dom,
			a = as(o),
			u = Hs(o),
			c = function(e, t) {
				if (
					!(function(e) {
						if (rv(e)) {
							var t = e.keyCode;
							return (
								!ov(e) &&
								(hh.metaKeyPressed(e) ||
									e.altKey ||
									(112 <= t && t <= 123) ||
									h(ty, t))
							);
						}
						return !1;
					})(e)
				) {
					var n = o.getBody(),
						r =
							!(function(e) {
								return (
									rv(e) && !(ov(e) || ('keyup' === e.type && 229 === e.keyCode))
								);
							})(e) &&
							(function(e, t, n) {
								if (ip(it.fromDom(t), !1)) {
									var r = '' === n,
										o = t.firstElementChild;
									return (
										!o ||
										(!e.getStyle(t.firstElementChild, 'padding-left') &&
											!e.getStyle(t.firstElementChild, 'padding-right') &&
											(r ? !e.isBlock(o) : n === o.nodeName.toLowerCase()))
									);
								}
								return !1;
							})(i, n, a);
					(('' !== i.getAttrib(n, ny)) === r && !t) ||
						(i.setAttrib(n, ny, r ? u : null),
						i.setAttrib(n, 'aria-placeholder', r ? u : null),
						(function(e, t) {
							e.fire('PlaceholderToggle', { state: t });
						})(o, r),
						o.on(r ? 'keydown' : 'keyup', c),
						o.off(r ? 'keyup' : 'keydown', c));
				}
			};
		u &&
			o.on('init', function(e) {
				c(e, !0),
					o.on('change SetContent ExecCommand', c),
					o.on('remove', function() {
						var e = o.getBody();
						i.setAttrib(e, ny, null), i.setAttrib(e, 'aria-placeholder', null);
					});
			});
	}
	function av(e) {
		return e.touches === undefined || 1 !== e.touches.length
			? R.none()
			: R.some(e.touches[0]);
	}
	function uv(e, t) {
		return e.hasOwnProperty(t.nodeName);
	}
	function cv(e, t) {
		if (Qt.isText(t)) {
			if (0 === t.nodeValue.length) return !0;
			if (/^\s+$/.test(t.nodeValue) && (!t.nextSibling || uv(e, t.nextSibling)))
				return !0;
		}
		return !1;
	}
	function sv(e) {
		var t,
			n,
			r,
			o,
			i,
			a,
			u,
			c,
			s,
			l,
			f = e.dom,
			d = e.selection,
			h = e.schema,
			m = h.getBlockElements(),
			g = d.getStart(),
			p = e.getBody(),
			v = as(e);
		if (
			g &&
			Qt.isElement(g) &&
			v &&
			((l = p.nodeName.toLowerCase()),
			h.isValidChild(l, v.toLowerCase()) &&
				!(function(t, e, n) {
					return C(ym(it.fromDom(n), it.fromDom(e)), function(e) {
						return uv(t, e.dom());
					});
				})(m, p, g))
		) {
			for (
				n = (t = d.getRng()).startContainer,
					r = t.startOffset,
					o = t.endContainer,
					i = t.endOffset,
					s = Dd(e),
					g = p.firstChild;
				g;

			)
				if (
					((y = m),
					(b = g),
					Qt.isText(b) || (Qt.isElement(b) && !uv(y, b) && !Wl(b)))
				) {
					if (cv(m, g)) {
						(g = (u = g).nextSibling), f.remove(u);
						continue;
					}
					a ||
						((a = f.create(v, us(e))),
						g.parentNode.insertBefore(a, g),
						(c = !0)),
						(g = (u = g).nextSibling),
						a.appendChild(u);
				} else (a = null), (g = g.nextSibling);
			var y, b;
			c &&
				s &&
				(t.setStart(n, r), t.setEnd(o, i), d.setRng(t), e.nodeChanged());
		}
	}
	function lv(e) {
		return iy(e) && e.data[0] === mu.ZWSP;
	}
	function fv(e) {
		return iy(e) && e.data[e.data.length - 1] === mu.ZWSP;
	}
	function dv(e) {
		return e.ownerDocument.createTextNode(mu.ZWSP);
	}
	function hv(e, t) {
		return e
			? (function(e) {
					if (iy(e.previousSibling))
						return (
							fv(e.previousSibling) || e.previousSibling.appendData(mu.ZWSP),
							e.previousSibling
						);
					if (iy(e)) return lv(e) || e.insertData(0, mu.ZWSP), e;
					var t = dv(e);
					return e.parentNode.insertBefore(t, e), t;
			  })(t)
			: (function(e) {
					if (iy(e.nextSibling))
						return (
							lv(e.nextSibling) || e.nextSibling.insertData(0, mu.ZWSP),
							e.nextSibling
						);
					if (iy(e)) return fv(e) || e.appendData(mu.ZWSP), e;
					var t = dv(e);
					return (
						e.nextSibling
							? e.parentNode.insertBefore(t, e.nextSibling)
							: e.parentNode.appendChild(t),
						t
					);
			  })(t);
	}
	function mv(e, t) {
		return Qt.isText(e.container()) ? hv(t, e.container()) : hv(t, e.getNode());
	}
	function gv(e, t) {
		var n = t.get();
		return n && e.container() === n && Pa(n);
	}
	function pv(e, t) {
		if (!t) return t;
		var n = t.container(),
			r = t.offset();
		return e
			? Pa(n)
				? Qt.isText(n.nextSibling)
					? Vc(n.nextSibling, 0)
					: Vc.after(n)
				: Ia(t)
				? Vc(n, r + 1)
				: t
			: Pa(n)
			? Qt.isText(n.previousSibling)
				? Vc(n.previousSibling, n.previousSibling.data.length)
				: Vc.before(n)
			: Fa(t)
			? Vc(n, r - 1)
			: t;
	}
	function vv(e, t) {
		var n = Sc(t, e);
		return n || e;
	}
	function yv(e, t, n) {
		var r = ly.normalizeForwards(n),
			o = vv(t, r.container());
		return ly.findRootInline(e, o, r).fold(function() {
			return Ul.nextPosition(o, r)
				.bind(d(ly.findRootInline, e, o))
				.map(function(e) {
					return dy.before(e);
				});
		}, R.none);
	}
	function bv(e, t) {
		return null === lc(e, t);
	}
	function Cv(e, t, n) {
		return ly.findRootInline(e, t, n).filter(d(bv, t));
	}
	function wv(e, t, n) {
		var r = ly.normalizeBackwards(n);
		return Cv(e, t, r).bind(function(e) {
			return Ul.prevPosition(e, r).isNone() ? R.some(dy.start(e)) : R.none();
		});
	}
	function xv(e, t, n) {
		var r = ly.normalizeForwards(n);
		return Cv(e, t, r).bind(function(e) {
			return Ul.nextPosition(e, r).isNone() ? R.some(dy.end(e)) : R.none();
		});
	}
	function zv(e, t, n) {
		var r = ly.normalizeBackwards(n),
			o = vv(t, r.container());
		return ly.findRootInline(e, o, r).fold(function() {
			return Ul.prevPosition(o, r)
				.bind(d(ly.findRootInline, e, o))
				.map(function(e) {
					return dy.after(e);
				});
		}, R.none);
	}
	function Ev(e) {
		return !1 === ly.isRtl(hy(e));
	}
	function Nv(e, t, n) {
		return fy([yv, wv, xv, zv], [e, t, n]).filter(Ev);
	}
	function Sv(e) {
		return e.fold($('before'), $('start'), $('end'), $('after'));
	}
	function kv(e) {
		return e.fold(dy.before, dy.before, dy.after, dy.after);
	}
	function Tv(n, e, r, t, o, i) {
		return tu(ly.findRootInline(e, r, t), ly.findRootInline(e, r, o), function(
			e,
			t
		) {
			return e !== t && ly.hasSameParentBlock(r, e, t)
				? dy.after(n ? e : t)
				: i;
		}).getOr(i);
	}
	function Av(e, t) {
		return e.fold($(!0), function(e) {
			return !(function(e, t) {
				return Sv(e) === Sv(t) && hy(e) === hy(t);
			})(e, t);
		});
	}
	function Mv(e, t) {
		return e
			? t.fold(q(R.some, dy.start), R.none, q(R.some, dy.after), R.none)
			: t.fold(R.none, q(R.some, dy.before), R.none, q(R.some, dy.end));
	}
	function Rv(e, t, n, r) {
		var o = ly.normalizePosition(e, r),
			i = Nv(t, n, o);
		return Nv(t, n, o)
			.bind(d(Mv, e))
			.orThunk(function() {
				return (function(t, n, r, o, e) {
					var i = ly.normalizePosition(t, e);
					return Ul.fromPosition(t, r, i)
						.map(d(ly.normalizePosition, t))
						.fold(
							function() {
								return o.map(kv);
							},
							function(e) {
								return Nv(n, r, e)
									.map(d(Tv, t, n, r, i, e))
									.filter(d(Av, o));
							}
						)
						.filter(Ev);
				})(e, t, n, i, r);
			});
	}
	function _v(e) {
		return B(e.selection.getSel().modify);
	}
	function Dv(e, t, n) {
		var r = e ? 1 : -1;
		return (
			t.setRng(Vc(n.container(), n.offset() + r).toRange()),
			t.getSel().modify('move', e ? 'forward' : 'backward', 'word'),
			!0
		);
	}
	function Ov(e, t) {
		var n = e.dom.createRng();
		n.setStart(t.container(), t.offset()),
			n.setEnd(t.container(), t.offset()),
			e.selection.setRng(n);
	}
	function Hv(e) {
		return !1 !== e.settings.inline_boundaries;
	}
	function Bv(e, t) {
		e
			? t.setAttribute('data-mce-selected', 'inline-boundary')
			: t.removeAttribute('data-mce-selected');
	}
	function Pv(t, e, n) {
		return cy(e, n).map(function(e) {
			return Ov(t, e), n;
		});
	}
	function Lv(e, t, n) {
		return function() {
			return !!Hv(t) && yy(e, t);
		};
	}
	function Vv(e) {
		return y(
			e,
			function(e, t) {
				return e.concat(
					(function(t) {
						function e(e) {
							return X(e, function(e) {
								return ((e = Wa(e)).node = t), e;
							});
						}
						if (Qt.isElement(t)) return e(t.getClientRects());
						if (Qt.isText(t)) {
							var n = t.ownerDocument.createRange();
							return (
								n.setStart(t, 0),
								n.setEnd(t, t.data.length),
								e(n.getClientRects())
							);
						}
					})(t)
				);
			},
			[]
		);
	}
	var Iv,
		Fv,
		Uv = Zn.each,
		jv = Qi.DOM,
		qv = function(e) {
			e.addShortcut('meta+b', '', 'Bold'),
				e.addShortcut('meta+i', '', 'Italic'),
				e.addShortcut('meta+u', '', 'Underline');
			for (var t = 1; t <= 6; t++)
				e.addShortcut('access+' + t, '', ['FormatBlock', !1, 'h' + t]);
			e.addShortcut('access+7', '', ['FormatBlock', !1, 'p']),
				e.addShortcut('access+8', '', ['FormatBlock', !1, 'div']),
				e.addShortcut('access+9', '', ['FormatBlock', !1, 'address']);
		},
		$v = 0,
		Wv = 2,
		Kv = 1,
		Xv = function(m, g) {
			function p(e, t, n, r) {
				for (var o = e; o - t < r && o < n && m[o] === g[o - t]; ) ++o;
				return (function(e, t, n) {
					return { start: e, end: t, diag: n };
				})(e, o, t);
			}
			var e = m.length + g.length + 2,
				v = new Array(e),
				y = new Array(e),
				s = function(e, t, n, r, o) {
					var i = l(e, t, n, r);
					if (
						null === i ||
						(i.start === t && i.diag === t - r) ||
						(i.end === e && i.diag === e - n)
					)
						for (var a = e, u = n; a < t || u < r; )
							a < t && u < r && m[a] === g[u]
								? (o.push([0, m[a]]), ++a, ++u)
								: r - n < t - e
								? (o.push([2, m[a]]), ++a)
								: (o.push([1, g[u]]), ++u);
					else {
						s(e, i.start, n, i.start - i.diag, o);
						for (var c = i.start; c < i.end; ++c) o.push([0, m[c]]);
						s(i.end, t, i.end - i.diag, r, o);
					}
				},
				l = function(e, t, n, r) {
					var o = t - e,
						i = r - n;
					if (0 == o || 0 == i) return null;
					var a,
						u,
						c,
						s,
						l,
						f = o - i,
						d = i + o,
						h = (d % 2 == 0 ? d : 1 + d) / 2;
					for (v[1 + h] = e, y[1 + h] = t + 1, a = 0; a <= h; ++a) {
						for (u = -a; u <= a; u += 2) {
							for (
								c = u + h,
									u === -a || (u !== a && v[c - 1] < v[c + 1])
										? (v[c] = v[c + 1])
										: (v[c] = v[c - 1] + 1),
									l = (s = v[c]) - e + n - u;
								s < t && l < r && m[s] === g[l];

							)
								(v[c] = ++s), ++l;
							if (f % 2 != 0 && f - a <= u && u <= f + a && y[c - f] <= v[c])
								return p(y[c - f], u + e - n, t, r);
						}
						for (u = f - a; u <= f + a; u += 2) {
							for (
								c = u + h - f,
									u === f - a || (u !== f + a && y[c + 1] <= y[c - 1])
										? (y[c] = y[c + 1] - 1)
										: (y[c] = y[c - 1]),
									l = (s = y[c] - 1) - e + n - u;
								e <= s && n <= l && m[s] === g[l];

							)
								(y[c] = s--), l--;
							if (f % 2 == 0 && -a <= u && u <= a && y[c] <= v[c + f])
								return p(y[c], u + e - n, t, r);
						}
					}
				},
				t = [];
			return s(0, m.length, 0, g.length, t), t;
		},
		Yv = function(e) {
			return U(X(G(e.childNodes), Kp), function(e) {
				return 0 < e.length;
			});
		},
		Gv = function(e, t) {
			var n = X(G(t.childNodes), Kp);
			return (
				(function(e, t) {
					var n = 0;
					F(e, function(e) {
						e[0] === $v
							? n++
							: e[0] === Kv
							? (Xp(t, e[1], n), n++)
							: e[0] === Wv &&
							  (function(e, t) {
									if (e.hasChildNodes() && t < e.childNodes.length) {
										var n = e.childNodes[t];
										n.parentNode.removeChild(n);
									}
							  })(t, n);
					});
				})(Xv(n, e), t),
				t
			);
		},
		Zv = at(R.none()),
		Jv = function(n) {
			var e, t, r;
			return (
				(e = Yv(n.getBody())),
				(function(e) {
					return -1 !== e.indexOf('</iframe>');
				})(
					(t = (r = v(e, function(e) {
						var t = dd.trimInternal(n.serializer, e);
						return 0 < t.length ? [t] : [];
					})).join(''))
				)
					? Yp(r)
					: Gp(t)
			);
		},
		Qv = function(e, t, n) {
			'fragmented' === t.type
				? Gv(t.fragments, e.getBody())
				: e.setContent(t.content, { format: 'raw' }),
				e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark);
		},
		ey = function(e, t) {
			return (
				!(!e || !t) &&
				(!!(function(e, t) {
					return Zp(e) === Zp(t);
				})(e, t) ||
					(function(e, t) {
						return Jp(e) === Jp(t);
					})(e, t))
			);
		},
		ty = [
			9,
			27,
			hh.HOME,
			hh.END,
			19,
			20,
			44,
			144,
			145,
			33,
			34,
			45,
			16,
			17,
			18,
			91,
			92,
			93,
			hh.DOWN,
			hh.UP,
			hh.LEFT,
			hh.RIGHT
		].concat(Wn.browser.isFirefox() ? [224] : []),
		ny = 'data-mce-placeholder',
		ry = function(n) {
			var r = at(R.none()),
				o = at(!1),
				i = da(function(e) {
					n.fire('longpress', te(te({}, e), { type: 'longpress' })), o.set(!0);
				}, 400);
			n.on(
				'touchstart',
				function(n) {
					av(n).each(function(e) {
						i.cancel();
						var t = { x: $(e.clientX), y: $(e.clientY), target: $(n.target) };
						i.throttle(n), o.set(!1), r.set(R.some(t));
					});
				},
				!0
			),
				n.on(
					'touchmove',
					function(e) {
						i.cancel(),
							av(e).each(function(t) {
								r.get().each(function(e) {
									!(function(e, t) {
										var n = Math.abs(e.clientX - t.x()),
											r = Math.abs(e.clientY - t.y());
										return 5 < n || 5 < r;
									})(t, e) ||
										(r.set(R.none()), o.set(!1), n.fire('longpresscancel'));
								});
							});
					},
					!0
				),
				n.on(
					'touchend touchcancel',
					function(t) {
						i.cancel(),
							'touchcancel' !== t.type &&
								r
									.get()
									.filter(function(e) {
										return e.target().isEqualNode(t.target);
									})
									.each(function() {
										o.get()
											? t.preventDefault()
											: n.fire('tap', te(te({}, t), { type: 'tap' }));
									});
					},
					!0
				);
		},
		oy = function(e) {
			as(e) && e.on('NodeChange', d(sv, e));
		},
		iy = Qt.isText,
		ay = d(hv, !0),
		uy = d(hv, !1),
		cy = function(n, e) {
			return e.fold(
				function(e) {
					Zc.remove(n.get());
					var t = ay(e);
					return n.set(t), R.some(Vc(t, t.length - 1));
				},
				function(e) {
					return Ul.firstPositionIn(e).map(function(e) {
						if (gv(e, n)) return Vc(n.get(), 1);
						Zc.remove(n.get());
						var t = mv(e, !0);
						return n.set(t), Vc(t, 1);
					});
				},
				function(e) {
					return Ul.lastPositionIn(e).map(function(e) {
						if (gv(e, n)) return Vc(n.get(), n.get().length - 1);
						Zc.remove(n.get());
						var t = mv(e, !1);
						return n.set(t), Vc(t, t.length - 1);
					});
				},
				function(e) {
					Zc.remove(n.get());
					var t = uy(e);
					return n.set(t), R.some(Vc(t, 1));
				}
			);
		},
		sy = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
		ly = {
			isInlineTarget: function(e, t) {
				return me(it.fromDom(t), _s(e));
			},
			findRootInline: function(e, t, n) {
				var r = (function(e, t, n) {
					return U(Qi.DOM.getParents(n.container(), '*', t), e);
				})(e, t, n);
				return R.from(r[r.length - 1]);
			},
			isRtl: function(e) {
				return (
					'rtl' === Qi.DOM.getStyle(e, 'direction', !0) ||
					(function(e) {
						return sy.test(e);
					})(e.textContent)
				);
			},
			isAtZwsp: function(e) {
				return Ia(e) || Fa(e);
			},
			normalizePosition: pv,
			normalizeForwards: d(pv, !0),
			normalizeBackwards: d(pv, !1),
			hasSameParentBlock: function(e, t, n) {
				var r = Sc(t, e),
					o = Sc(n, e);
				return r && r === o;
			}
		},
		fy = function(e, t) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n].apply(null, t);
				if (r.isSome()) return r;
			}
			return R.none();
		},
		dy = gd([
			{ before: ['element'] },
			{ start: ['element'] },
			{ end: ['element'] },
			{ after: ['element'] }
		]),
		hy = function(e) {
			return e.fold(W, W, W, W);
		},
		my = Nv,
		gy = Rv,
		py = (d(Rv, !1), d(Rv, !0), kv),
		vy = function(e) {
			return e.fold(dy.start, dy.start, dy.end, dy.end);
		},
		yy = function(e, t) {
			var n = t.selection.getRng(),
				r = e ? Vc.fromRangeEnd(n) : Vc.fromRangeStart(n);
			return (
				!!_v(t) &&
				(e && Ia(r)
					? Dv(!0, t.selection, r)
					: !(e || !Fa(r)) && Dv(!1, t.selection, r))
			);
		},
		by = {
			move: function(e, t, n) {
				return function() {
					return (
						!!Hv(e) &&
						(function(t, n, e) {
							var r = t.getBody(),
								o = Vc.fromRangeStart(t.selection.getRng()),
								i = d(ly.isInlineTarget, t);
							return gy(e, i, r, o).bind(function(e) {
								return Pv(t, n, e);
							});
						})(e, t, n).isSome()
					);
				};
			},
			moveNextWord: d(Lv, !0),
			movePrevWord: d(Lv, !1),
			setupSelectedState: function(t) {
				var n = at(null),
					r = d(ly.isInlineTarget, t);
				return (
					t.on('NodeChange', function(e) {
						Hv(t) &&
							((function(e, t, n) {
								var r = U(
										t.select('*[data-mce-selected="inline-boundary"]'),
										e
									),
									o = U(n, e);
								F(x(r, o), d(Bv, !1)), F(x(o, r), d(Bv, !0));
							})(r, t.dom, e.parents),
							(function(e, t) {
								if (
									e.selection.isCollapsed() &&
									!0 !== e.composing &&
									t.get()
								) {
									var n = Vc.fromRangeStart(e.selection.getRng());
									Vc.isTextPosition(n) &&
										!1 === ly.isAtZwsp(n) &&
										(Ov(e, Zc.removeAndReposition(t.get(), n)), t.set(null));
								}
							})(t, n),
							(function(n, r, o, e) {
								if (r.selection.isCollapsed()) {
									var t = U(e, n);
									F(t, function(e) {
										var t = Vc.fromRangeStart(r.selection.getRng());
										my(n, r.getBody(), t).bind(function(e) {
											return Pv(r, o, e);
										});
									});
								}
							})(r, t, n, e.parents));
					}),
					n
				);
			},
			setCaretPosition: Ov
		};
	((Fv = Iv = Iv || {})[(Fv.Up = -1)] = 'Up'), (Fv[(Fv.Down = 1)] = 'Down');
	function Cy(o, i, a, e, u, t) {
		function n(e) {
			var t, n, r;
			for (r = Vv([e]), -1 === o && (r = r.reverse()), t = 0; t < r.length; t++)
				if (((n = r[t]), !a(n, c))) {
					if ((0 < l.length && i(n, Xn.last(l)) && s++, (n.line = s), u(n)))
						return !0;
					l.push(n);
				}
		}
		var r,
			c,
			s = 0,
			l = [];
		return (
			(c = Xn.last(t.getClientRects())) &&
				(n((r = t.getNode())),
				(function(e, t, n, r) {
					for (; (r = Nc(r, e, $a, t)); ) if (n(r)) return;
				})(o, e, n, r)),
			l
		);
	}
	function wy(t) {
		return function(e) {
			return (function(e, t) {
				return t.line > e;
			})(t, e);
		};
	}
	function xy(t) {
		return function(e) {
			return (function(e, t) {
				return t.line === e;
			})(t, e);
		};
	}
	function zy(e, t) {
		return Math.abs(e.left - t);
	}
	function Ey(e, t) {
		return Math.abs(e.right - t);
	}
	function Ny(e, t) {
		return e >= t.left && e <= t.right;
	}
	function Sy(e, o) {
		return Xn.reduce(e, function(e, t) {
			var n, r;
			return (
				(n = Math.min(zy(e, o), Ey(e, o))),
				(r = Math.min(zy(t, o), Ey(t, o))),
				Ny(o, t) ? t : Ny(o, e) ? e : r === n && Uy(t.node) ? t : r < n ? t : e
			);
		});
	}
	function ky(e, t, n, r) {
		for (; (r = jy(r, e, $a, t)); ) if (n(r)) return;
	}
	function Ty(e, t, n) {
		var r,
			o = Vv(
				(function(e) {
					return U(G(e.getElementsByTagName('*')), wc);
				})(e)
			),
			i = U(o, function(e) {
				return n >= e.top && n <= e.bottom;
			});
		return (r =
			(r = Sy(i, t)) &&
			Sy(
				(function(e, r) {
					function t(t, e) {
						var n;
						return (
							(n = U(Vv([e]), function(e) {
								return !t(e, r);
							})),
							(o = o.concat(n)),
							0 === n.length
						);
					}
					var o = [];
					return (
						o.push(r),
						ky(Iv.Up, e, d(t, Ya), r.node),
						ky(Iv.Down, e, d(t, Ga), r.node),
						o
					);
				})(e, r),
				t
			)) && wc(r.node)
			? (function(e, t) {
					return { node: e.node, before: zy(e, t) < Ey(e, t) };
			  })(r, t)
			: null;
	}
	function Ay(e, t, n, r, o) {
		return t._selectionOverrides.showCaret(e, n, r, o);
	}
	function My(e, t) {
		return e.fire('BeforeObjectSelected', { target: t }).isDefaultPrevented()
			? null
			: (function(e) {
					var t = e.ownerDocument.createRange();
					return t.selectNode(e), t;
			  })(t);
	}
	function Ry(e, t, n) {
		var r = Rc(1, e.getBody(), t),
			o = Vc.fromRangeStart(r),
			i = o.getNode();
		if ($y(i)) return Ay(1, e, i, !o.isAtEnd(), !1);
		var a = o.getNode(!0);
		if ($y(a)) return Ay(1, e, a, !1, !1);
		var u = e.dom.getParent(o.getNode(), function(e) {
			return $y(e) || qy(e);
		});
		return $y(u) ? Ay(1, e, u, !1, n) : null;
	}
	function _y(e, t, n) {
		if (!t || !t.collapsed) return t;
		var r = Ry(e, t, n);
		return r || t;
	}
	function Dy(n, r, o) {
		return R.from(o.container())
			.filter(Qt.isText)
			.exists(function(e) {
				var t = n ? 0 : -1;
				return r(e.data.charAt(o.offset() + t));
			});
	}
	function Oy(e) {
		var t = e.container();
		return Qt.isText(t) && 0 === t.data.length;
	}
	function Hy(t, n) {
		return function(e) {
			return R.from(Tc(t ? 0 : -1, e))
				.filter(n)
				.isSome();
		};
	}
	function By(e) {
		return 'IMG' === e.nodeName && 'block' === Ge(it.fromDom(e), 'display');
	}
	function Py(e) {
		return Qt.isContentEditableFalse(e) && !Qt.isBogusAll(e);
	}
	var Ly,
		Vy,
		Iy = d(Cy, Iv.Up, Ya, Ga),
		Fy = d(Cy, Iv.Down, Ga, Ya),
		Uy = Qt.isContentEditableFalse,
		jy = Nc,
		qy = Qt.isContentEditableTrue,
		$y = Qt.isContentEditableFalse,
		Wy = d(Dy, !0, ul),
		Ky = d(Dy, !1, ul),
		Xy = Hy(!0, By),
		Yy = Hy(!1, By),
		Gy = Hy(!0, Qt.isTable),
		Zy = Hy(!1, Qt.isTable),
		Jy = Hy(!0, Py),
		Qy = Hy(!1, Py);
	((Vy = Ly = Ly || {})[(Vy.Br = 0)] = 'Br'),
		(Vy[(Vy.Block = 1)] = 'Block'),
		(Vy[(Vy.Wrap = 2)] = 'Wrap'),
		(Vy[(Vy.Eol = 3)] = 'Eol');
	function eb(e, t) {
		return e === Pc.Backwards ? w(t) : t;
	}
	function tb(e, t, n, r) {
		for (
			var o, i, a, u, c, s, l = Xs(n), f = r, d = [];
			f && ((c = l), (s = f), (o = t === Pc.Forwards ? c.next(s) : c.prev(s)));

		) {
			if (Qt.isBr(o.getNode(!1)))
				return t === Pc.Forwards
					? {
							positions: eb(t, d).concat([o]),
							breakType: Ly.Br,
							breakAt: R.some(o)
					  }
					: { positions: eb(t, d), breakType: Ly.Br, breakAt: R.some(o) };
			if (o.isVisible()) {
				if (e(f, o)) {
					var h =
						((i = t),
						(a = f),
						(u = o),
						Qt.isBr(u.getNode(i === Pc.Forwards))
							? Ly.Br
							: !1 === kc(a, u)
							? Ly.Block
							: Ly.Wrap);
					return { positions: eb(t, d), breakType: h, breakAt: R.some(o) };
				}
				d.push(o), (f = o);
			} else f = o;
		}
		return { positions: eb(t, d), breakType: Ly.Eol, breakAt: R.none() };
	}
	function nb(n, r, o, e) {
		return r(o, e)
			.breakAt.map(function(e) {
				var t = r(o, e).positions;
				return n === Pc.Backwards ? t.concat(e) : [e].concat(t);
			})
			.getOr([]);
	}
	function rb(e, i) {
		return y(
			e,
			function(e, o) {
				return e.fold(
					function() {
						return R.some(o);
					},
					function(r) {
						return tu(z(r.getClientRects()), z(o.getClientRects()), function(
							e,
							t
						) {
							var n = Math.abs(i - e.left);
							return Math.abs(i - t.left) <= n ? o : r;
						}).or(e);
					}
				);
			},
			R.none()
		);
	}
	function ob(t, e) {
		return z(e.getClientRects()).bind(function(e) {
			return rb(t, e.left);
		});
	}
	function ib(e, t, n, r) {
		var o = e === Pc.Forwards,
			i = o ? Jy : Qy;
		if (!r.collapsed) {
			var a = Hw(r);
			if (Ow(a)) return Ay(e, t, a, e === Pc.Backwards, !0);
		}
		var u = (function(e) {
				return Ba(e.startContainer);
			})(r),
			c = Dc(e, t.getBody(), r);
		if (i(c)) return My(t, c.getNode(!o));
		var s = ly.normalizePosition(o, n(c));
		if (!s) return u ? r : null;
		if (i(s)) return Ay(e, t, s.getNode(!o), o, !0);
		var l = n(s);
		return l && i(l) && Bc(s, l)
			? Ay(e, t, l.getNode(!o), o, !0)
			: u
			? _y(t, s.toRange(), !0)
			: null;
	}
	function ab(e, t, n, r) {
		var o, i, a, u, c, s, l, f, d;
		if (
			((d = Hw(r)),
			(o = Dc(e, t.getBody(), r)),
			(i = n(t.getBody(), wy(1), o)),
			(a = U(i, xy(1))),
			(c = Xn.last(o.getClientRects())),
			(Jy(o) || Gy(o)) && (d = o.getNode()),
			(Qy(o) || Zy(o)) && (d = o.getNode(!0)),
			!c)
		)
			return null;
		if (((s = c.left), (u = Sy(a, s)) && Ow(u.node)))
			return (
				(l = Math.abs(s - u.left)),
				(f = Math.abs(s - u.right)),
				Ay(e, t, u.node, l < f, !0)
			);
		if (d) {
			var h = (function(e, t, n, r) {
				function o(e) {
					return Xn.last(e.getClientRects());
				}
				var i,
					a,
					u,
					c,
					s,
					l,
					f = Xs(t),
					d = [],
					h = 0;
				l = o(
					(c =
						1 === e
							? ((i = f.next), (a = Ga), (u = Ya), Vc.after(r))
							: ((i = f.prev), (a = Ya), (u = Ga), Vc.before(r)))
				);
				do {
					if (c.isVisible() && !u((s = o(c)), l)) {
						if (
							(0 < d.length && a(s, Xn.last(d)) && h++,
							((s = Wa(s)).position = c),
							(s.line = h),
							n(s))
						)
							return d;
						d.push(s);
					}
				} while ((c = i(c)));
				return d;
			})(e, t.getBody(), wy(1), d);
			if ((u = Sy(U(h, xy(1)), s))) return _y(t, u.position.toRange(), !0);
			if ((u = Xn.last(U(h, xy(0))))) return _y(t, u.position.toRange(), !0);
		}
	}
	function ub(e, t, n) {
		var r,
			o,
			i = Xs(e.getBody()),
			a = d(Hc, i.next),
			u = d(Hc, i.prev);
		if (n.collapsed && e.settings.forced_root_block) {
			if (!(r = e.dom.getParent(n.startContainer, 'PRE'))) return;
			(1 === t ? a(Vc.fromRangeStart(n)) : u(Vc.fromRangeStart(n))) ||
				((o = (function(e) {
					var t = e.dom.create(as(e));
					return (
						(!Wn.ie || 11 <= Wn.ie) &&
							(t.innerHTML = '<br data-mce-bogus="1">'),
						t
					);
				})(e)),
				1 === t ? e.$(r).after(o) : e.$(r).before(o),
				e.selection.select(o, !0),
				e.selection.collapse());
		}
	}
	function cb(t, n) {
		return function() {
			var e = (function(e, t) {
				var n,
					r = Xs(e.getBody()),
					o = d(Hc, r.next),
					i = d(Hc, r.prev),
					a = t ? Pc.Forwards : Pc.Backwards,
					u = t ? o : i,
					c = e.selection.getRng();
				return (n = ib(a, e, u, c)) ? n : (n = ub(e, a, c)) || null;
			})(t, n);
			return !!e && (t.selection.setRng(e), !0);
		};
	}
	function sb(t, n) {
		return function() {
			var e = (function(e, t) {
				var n,
					r = t ? 1 : -1,
					o = t ? Fy : Iy,
					i = e.selection.getRng();
				return (n = ab(r, e, o, i)) ? n : (n = ub(e, r, i)) || null;
			})(t, n);
			return !!e && (t.selection.setRng(e), !0);
		};
	}
	function lb(n, r) {
		return function() {
			var e = r
					? Vc.fromRangeEnd(n.selection.getRng())
					: Vc.fromRangeStart(n.selection.getRng()),
				t = r ? Rw(n.getBody(), e) : Mw(n.getBody(), e);
			return (r ? E(t.positions) : z(t.positions))
				.filter(
					(function(t) {
						return function(e) {
							return t ? Qy(e) : Jy(e);
						};
					})(r)
				)
				.fold($(!1), function(e) {
					return n.selection.setRng(e.toRange()), !0;
				});
		};
	}
	function fb(e, t, n, r, o) {
		var i = Ca(it.fromDom(n), 'td,th,caption').map(function(e) {
			return e.dom();
		});
		return (function(e, o, i) {
			return y(
				e,
				function(e, r) {
					return e.fold(
						function() {
							return R.some(r);
						},
						function(e) {
							var t = Math.sqrt(Math.abs(e.x - o) + Math.abs(e.y - i)),
								n = Math.sqrt(Math.abs(r.x - o) + Math.abs(r.y - i));
							return R.some(n < t ? r : e);
						}
					);
				},
				R.none()
			);
		})(
			U(
				(function(n, e) {
					return v(e, function(e) {
						var t = (function(e, t) {
							return {
								left: e.left - t,
								top: e.top - t,
								right: e.right + 2 * t,
								bottom: e.bottom + 2 * t,
								width: e.width + t,
								height: e.height + t
							};
						})(Wa(e.getBoundingClientRect()), -1);
						return [
							{ x: t.left, y: n(t), cell: e },
							{ x: t.right, y: n(t), cell: e }
						];
					});
				})(e, i),
				function(e) {
					return t(e, o);
				}
			),
			r,
			o
		).map(function(e) {
			return e.cell;
		});
	}
	function db(t, n) {
		return z(n.getClientRects())
			.bind(function(e) {
				return Bw(t, e.left, e.top);
			})
			.bind(function(e) {
				return ob(
					(function(t) {
						return Ul.lastPositionIn(t)
							.map(function(e) {
								return Mw(t, e).positions.concat(e);
							})
							.getOr([]);
					})(e),
					n
				);
			});
	}
	function hb(t, n) {
		return E(n.getClientRects())
			.bind(function(e) {
				return Pw(t, e.left, e.top);
			})
			.bind(function(e) {
				return ob(
					(function(t) {
						return Ul.firstPositionIn(t)
							.map(function(e) {
								return [e].concat(Rw(t, e).positions);
							})
							.getOr([]);
					})(e),
					n
				);
			});
	}
	function mb(e, t) {
		e.selection.setRng(t), gm(e, t);
	}
	function gb(e, t, n) {
		var r = e(t, n);
		return (function(e) {
			return e.breakType === Ly.Wrap && 0 === e.positions.length;
		})(r) ||
			(!Qt.isBr(n.getNode()) &&
				(function(e) {
					return e.breakType === Ly.Br && 1 === e.positions.length;
				})(r))
			? !(function(t, n, e) {
					return e.breakAt
						.map(function(e) {
							return t(n, e).breakAt.isSome();
						})
						.getOr(!1);
			  })(e, t, r)
			: r.breakAt.isNone();
	}
	function pb(e, t, n, r) {
		var o = e.selection.getRng(),
			i = t ? 1 : -1;
		if (
			Cc() &&
			(function(e, t, n) {
				var r = Vc.fromRangeStart(t);
				return Ul.positionIn(!e, n)
					.map(function(e) {
						return e.isEqual(r);
					})
					.getOr(!1);
			})(t, o, n)
		) {
			var a = Ay(i, e, n, !t, !0);
			return mb(e, a), !0;
		}
		return !1;
	}
	function vb(e, t) {
		var n = t.getNode(e);
		return Qt.isElement(n) && 'TABLE' === n.nodeName ? R.some(n) : R.none();
	}
	function yb(n, r, o) {
		var e = vb(!!r, o),
			i = !1 === r;
		e.fold(
			function() {
				return mb(n, o.toRange());
			},
			function(t) {
				return Ul.positionIn(i, n.getBody())
					.filter(function(e) {
						return e.isEqual(o);
					})
					.fold(
						function() {
							return mb(n, o.toRange());
						},
						function(e) {
							return (function(n, r, o, e) {
								var i = as(r);
								i
									? r.undoManager.transact(function() {
											var e = it.fromTag(i);
											Ke(e, us(r)),
												Ht(e, it.fromTag('br')),
												n ? Ae(it.fromDom(o), e) : Te(it.fromDom(o), e);
											var t = r.dom.createRng();
											t.setStart(e.dom(), 0), t.setEnd(e.dom(), 0), mb(r, t);
									  })
									: mb(r, e.toRange());
							})(r, n, t, o);
						}
					);
			}
		);
	}
	function bb(e, t, n, r) {
		var o = e.selection.getRng(),
			i = Vc.fromRangeStart(o),
			a = e.getBody();
		if (!t && Lw(r, i)) {
			var u = (function(t, n, e) {
				return db(n, e)
					.orThunk(function() {
						return z(e.getClientRects()).bind(function(e) {
							return rb(_w(t, Vc.before(n)), e.left);
						});
					})
					.getOr(Vc.before(n));
			})(a, n, i);
			return yb(e, t, u), !0;
		}
		if (t && Vw(r, i)) {
			u = (function(t, n, e) {
				return hb(n, e)
					.orThunk(function() {
						return z(e.getClientRects()).bind(function(e) {
							return rb(Dw(t, Vc.after(n)), e.left);
						});
					})
					.getOr(Vc.after(n));
			})(a, n, i);
			return yb(e, t, u), !0;
		}
		return !1;
	}
	function Cb(t, n) {
		return function() {
			return R.from(t.dom.getParent(t.selection.getNode(), 'td,th'))
				.bind(function(e) {
					return R.from(t.dom.getParent(e, 'table')).map(function(e) {
						return pb(t, n, e);
					});
				})
				.getOr(!1);
		};
	}
	function wb(n, r) {
		return function() {
			return R.from(n.dom.getParent(n.selection.getNode(), 'td,th'))
				.bind(function(t) {
					return R.from(n.dom.getParent(t, 'table')).map(function(e) {
						return bb(n, r, e, t);
					});
				})
				.getOr(!1);
		};
	}
	function xb(e) {
		return h(['figcaption'], Oe(e));
	}
	function zb(e) {
		var t = j.document.createRange();
		return t.setStartBefore(e.dom()), t.setEndBefore(e.dom()), t;
	}
	function Eb(e, t, n) {
		n ? Ht(e, t) : Me(e, t);
	}
	function Nb(e, t, n, r) {
		return '' === t
			? (function(e, t) {
					var n = it.fromTag('br');
					return Eb(e, n, t), zb(n);
			  })(e, r)
			: (function(e, t, n, r) {
					var o = it.fromTag(n),
						i = it.fromTag('br');
					return Ke(o, r), Ht(o, i), Eb(e, o, t), zb(i);
			  })(e, r, t, n);
	}
	function Sb(e, t, n) {
		return t
			? (function(e, t) {
					return Rw(e, t).breakAt.isNone();
			  })(e.dom(), n)
			: (function(e, t) {
					return Mw(e, t).breakAt.isNone();
			  })(e.dom(), n);
	}
	function kb(t, n) {
		var r = it.fromDom(t.getBody()),
			o = Vc.fromRangeStart(t.selection.getRng()),
			i = as(t),
			a = us(t);
		return (function(e, t) {
			var n = d(pe, t);
			return Na(it.fromDom(e.container()), ar, n).filter(xb);
		})(o, r).exists(function() {
			if (Sb(r, n, o)) {
				var e = Nb(r, i, a, n);
				return t.selection.setRng(e), !0;
			}
			return !1;
		});
	}
	function Tb(e, t) {
		return function() {
			return !!e.selection.isCollapsed() && kb(e, t);
		};
	}
	function Ab(e, t) {
		return v(
			(function(e) {
				return X(e, function(e) {
					return te(
						{
							shiftKey: !1,
							altKey: !1,
							ctrlKey: !1,
							metaKey: !1,
							keyCode: 0,
							action: i
						},
						e
					);
				});
			})(e),
			function(e) {
				return (function(e, t) {
					return (
						t.keyCode === e.keyCode &&
						t.shiftKey === e.shiftKey &&
						t.altKey === e.altKey &&
						t.ctrlKey === e.ctrlKey &&
						t.metaKey === e.metaKey
					);
				})(e, t)
					? [e]
					: [];
			}
		);
	}
	function Mb(e, t) {
		return { from: $(e), to: $(t) };
	}
	function Rb(e, t) {
		var n = it.fromDom(e),
			r = it.fromDom(t.container());
		return jw(n, r).map(function(e) {
			return (function(e, t) {
				return { block: $(e), position: $(t) };
			})(e, t);
		});
	}
	function _b(t, n, e) {
		var r = Rb(t, Vc.fromRangeStart(e)),
			o = r.bind(function(e) {
				return Ul.fromPosition(n, t, e.position()).bind(function(e) {
					return Rb(t, e).map(function(e) {
						return (function(t, n, r) {
							return Qt.isBr(r.position().getNode()) && !1 === ip(r.block())
								? Ul.positionIn(!1, r.block().dom())
										.bind(function(e) {
											return e.isEqual(r.position())
												? Ul.fromPosition(n, t, e).bind(function(e) {
														return Rb(t, e);
												  })
												: R.some(r);
										})
										.getOr(r)
								: r;
						})(t, n, e);
					});
				});
			});
		return tu(r, o, Mb).filter(function(e) {
			return (
				(function(e) {
					return !1 === pe(e.from().block(), e.to().block());
				})(e) &&
				(function(e) {
					return be(e.from().block())
						.bind(function(t) {
							return be(e.to().block()).filter(function(e) {
								return pe(t, e);
							});
						})
						.isSome();
				})(e) &&
				(function(e) {
					return (
						!1 ===
							Qt.isContentEditableFalse(
								e
									.from()
									.block()
									.dom()
							) &&
						!1 ===
							Qt.isContentEditableFalse(
								e
									.to()
									.block()
									.dom()
							)
					);
				})(e)
			);
		});
	}
	function Db(e) {
		var t = (function(e) {
			var t = Ee(e);
			return p(t, ar).fold(
				function() {
					return t;
				},
				function(e) {
					return t.slice(0, e);
				}
			);
		})(e);
		return F(t, Bt), t;
	}
	function Ob(e, t) {
		var n = bm(t, e);
		return g(n.reverse(), function(e) {
			return ip(e);
		}).each(Bt);
	}
	function Hb(e, t, n, r) {
		if (ip(n)) return Jg(n), Ul.firstPositionIn(n.dom());
		(function(e) {
			return (
				0 ===
				U(xe(e), function(e) {
					return !ip(e);
				}).length
			);
		})(r) &&
			ip(t) &&
			Te(r, it.fromTag('br'));
		var o = Ul.prevPosition(n.dom(), Vc.before(r.dom()));
		return (
			F(Db(t), function(e) {
				Te(r, e);
			}),
			Ob(e, t),
			o
		);
	}
	function Bb(e, t, n) {
		if (ip(n)) return Bt(n), ip(t) && Jg(t), Ul.firstPositionIn(t.dom());
		var r = Ul.lastPositionIn(n.dom());
		return (
			F(Db(t), function(e) {
				Ht(n, e);
			}),
			Ob(e, t),
			r
		);
	}
	function Pb(e, t) {
		return Ot(t, e)
			? (function(e, t) {
					var n = bm(t, e);
					return R.from(n[n.length - 1]);
			  })(t, e)
			: R.none();
	}
	function Lb(e, t) {
		Ul.positionIn(e, t.dom())
			.map(function(e) {
				return e.getNode();
			})
			.map(it.fromDom)
			.filter(er)
			.each(Bt);
	}
	function Vb(e, t, n) {
		return Lb(!0, t), Lb(!1, n), Pb(t, n).fold(d(Bb, e, t, n), d(Hb, e, t, n));
	}
	function Ib(e, t) {
		var n = it.fromDom(t),
			r = d(pe, e);
		return Ea(n, dr, r).isSome();
	}
	function Fb(e, t) {
		var n = Ul.prevPosition(e.dom(), Vc.fromRangeStart(t)).isNone(),
			r = Ul.nextPosition(e.dom(), Vc.fromRangeEnd(t)).isNone();
		return (
			!(function(e, t) {
				return Ib(e, t.startContainer) || Ib(e, t.endContainer);
			})(e, t) &&
			n &&
			r
		);
	}
	function Ub(e) {
		var t = it.fromDom(e.getBody()),
			n = e.selection.getRng();
		return Fb(t, n)
			? (function(e) {
					return e.setContent(''), e.selection.setCursorLocation(), !0;
			  })(e)
			: (function(n, r) {
					var o = r.getRng();
					return tu(
						jw(n, it.fromDom(o.startContainer)),
						jw(n, it.fromDom(o.endContainer)),
						function(e, t) {
							return (
								!1 === pe(e, t) &&
								(o.deleteContents(),
								Kw(n, !0, e, t).each(function(e) {
									r.setRng(e.toRange());
								}),
								!0)
							);
						}
					).getOr(!1);
			  })(t, e.selection);
	}
	function jb(e) {
		return Oc(e).exists(er);
	}
	function qb(e, t, n) {
		var r = U(bm(it.fromDom(n.container()), t), ar),
			o = z(r).getOr(t);
		return Ul.fromPosition(e, o.dom(), n).filter(jb);
	}
	function $b(e, t) {
		return Oc(t).exists(er) || qb(!0, e, t).isSome();
	}
	function Wb(e, t) {
		return (
			(function(e) {
				return R.from(e.getNode(!0)).map(it.fromDom);
			})(t).exists(er) || qb(!1, e, t).isSome()
		);
	}
	function Kb(e, t, n, r) {
		var o = r.getNode(!1 === t);
		return jw(it.fromDom(e), it.fromDom(n.getNode()))
			.map(function(e) {
				return ip(e) ? Jw.remove(e.dom()) : Jw.moveToElement(o);
			})
			.orThunk(function() {
				return R.some(Jw.moveToElement(o));
			});
	}
	function Xb(t, n, r) {
		return Ul.fromPosition(n, t, r).bind(function(e) {
			return (function(e) {
				return dr(it.fromDom(e)) || sr(it.fromDom(e));
			})(e.getNode())
				? R.none()
				: (function(t, e, n, r) {
						function o(e) {
							return Qn(it.fromDom(e)) && !kc(n, r, t);
						}
						return _c(!e, n).fold(function() {
							return _c(e, r).fold($(!1), o);
						}, o);
				  })(t, n, r, e)
				? R.none()
				: n && Qt.isContentEditableFalse(e.getNode())
				? Kb(t, n, r, e)
				: !1 === n && Qt.isContentEditableFalse(e.getNode(!0))
				? Kb(t, n, r, e)
				: n && Qy(r)
				? R.some(Jw.moveToPosition(e))
				: !1 === n && Jy(r)
				? R.some(Jw.moveToPosition(e))
				: R.none();
		});
	}
	function Yb(t, e, n) {
		return (function(e, t) {
			var n = t.getNode(!1 === e),
				r = e ? 'after' : 'before';
			return Qt.isElement(n) && n.getAttribute('data-mce-caret') === r;
		})(e, n)
			? (function(e, t) {
					return e && Qt.isContentEditableFalse(t.nextSibling)
						? R.some(Jw.moveToElement(t.nextSibling))
						: !1 === e && Qt.isContentEditableFalse(t.previousSibling)
						? R.some(Jw.moveToElement(t.previousSibling))
						: R.none();
			  })(e, n.getNode(!1 === e)).fold(function() {
					return Xb(t, e, n);
			  }, R.some)
			: Xb(t, e, n).bind(function(e) {
					return (function(t, n, e) {
						return e.fold(
							function(e) {
								return R.some(Jw.remove(e));
							},
							function(e) {
								return R.some(Jw.moveToElement(e));
							},
							function(e) {
								return kc(n, e, t) ? R.none() : R.some(Jw.moveToPosition(e));
							}
						);
					})(t, n, e);
			  });
	}
	function Gb(e, t) {
		return R.from(Qw(e.getBody(), t));
	}
	function Zb(t, n) {
		var e = t.selection.getNode();
		return Gb(t, e)
			.filter(Qt.isContentEditableFalse)
			.fold(
				function() {
					return (function(e, t, n) {
						var r = Rc(t ? 1 : -1, e, n),
							o = Vc.fromRangeStart(r),
							i = it.fromDom(e);
						return !1 === t && Qy(o)
							? R.some(Jw.remove(o.getNode(!0)))
							: t && Jy(o)
							? R.some(Jw.remove(o.getNode()))
							: !1 === t && Jy(o) && Wb(i, o)
							? Gw(i, o).map(function(e) {
									return Jw.remove(e.getNode());
							  })
							: t && Qy(o) && $b(i, o)
							? Zw(i, o).map(function(e) {
									return Jw.remove(e.getNode());
							  })
							: Yb(e, t, o);
					})(t.getBody(), n, t.selection.getRng())
						.map(function(e) {
							return e.fold(
								(function(t, n) {
									return function(e) {
										return (
											t._selectionOverrides.hideFakeCaret(),
											ap(t, n, it.fromDom(e)),
											!0
										);
									};
								})(t, n),
								(function(n, r) {
									return function(e) {
										var t = r ? Vc.before(e) : Vc.after(e);
										return n.selection.setRng(t.toRange()), !0;
									};
								})(t, n),
								(function(t) {
									return function(e) {
										return t.selection.setRng(e.toRange()), !0;
									};
								})(t)
							);
						})
						.getOr(!1);
				},
				function() {
					return !0;
				}
			);
	}
	function Jb(e, t) {
		var n = e.selection.getNode();
		return (
			!!Qt.isContentEditableFalse(n) &&
			Gb(e, n.parentNode)
				.filter(Qt.isContentEditableFalse)
				.fold(
					function() {
						return (
							(function(e) {
								F(Ca(e, '.mce-offscreen-selection'), Bt);
							})(it.fromDom(e.getBody())),
							ap(e, t, it.fromDom(e.selection.getNode())),
							qw(e),
							!0
						);
					},
					function() {
						return !0;
					}
				)
		);
	}
	function Qb(e, t, n, r, o, i) {
		var a = Ay(r, e, i.getNode(!o), o, !0);
		if (t.collapsed) {
			var u = t.cloneRange();
			o
				? u.setEnd(a.startContainer, a.startOffset)
				: u.setStart(a.endContainer, a.endOffset),
				u.deleteContents();
		} else t.deleteContents();
		return (
			e.selection.setRng(a),
			(function(e, t) {
				Qt.isText(t) && 0 === t.data.length && e.remove(t);
			})(e.dom, n),
			!0
		);
	}
	function eC(t, n) {
		return function(e) {
			return cy(n, e)
				.map(function(e) {
					return by.setCaretPosition(t, e), !0;
				})
				.getOr(!1);
		};
	}
	function tC(e, t, n, r) {
		var o = e.getBody(),
			i = d(ly.isInlineTarget, e);
		e.undoManager.ignore(function() {
			e.selection.setRng(
				(function(e, t) {
					var n = j.document.createRange();
					return (
						n.setStart(e.container(), e.offset()),
						n.setEnd(t.container(), t.offset()),
						n
					);
				})(n, r)
			),
				e.execCommand('Delete'),
				my(i, o, Vc.fromRangeStart(e.selection.getRng()))
					.map(vy)
					.map(eC(e, t));
		}),
			e.nodeChanged();
	}
	function nC(n, r, o, i) {
		var a = (function(e, t) {
				var n = Sc(t, e);
				return n || e;
			})(n.getBody(), i.container()),
			u = d(ly.isInlineTarget, n),
			c = my(u, a, i);
		return c
			.bind(function(e) {
				return o
					? e.fold($(R.some(vy(e))), R.none, $(R.some(py(e))), R.none)
					: e.fold(R.none, $(R.some(py(e))), R.none, $(R.some(vy(e))));
			})
			.map(eC(n, r))
			.getOrThunk(function() {
				var t = Ul.navigate(o, a, i),
					e = t.bind(function(e) {
						return my(u, a, e);
					});
				return c.isSome() && e.isSome()
					? ly
							.findRootInline(u, a, i)
							.map(function(e) {
								return (
									!!(function(o) {
										return tu(
											Ul.firstPositionIn(o),
											Ul.lastPositionIn(o),
											function(e, t) {
												var n = ly.normalizePosition(!0, e),
													r = ly.normalizePosition(!1, t);
												return Ul.nextPosition(o, n)
													.map(function(e) {
														return e.isEqual(r);
													})
													.getOr(!0);
											}
										).getOr(!0);
									})(e) && (ap(n, o, it.fromDom(e)), !0)
								);
							})
							.getOr(!1)
					: e
							.bind(function(e) {
								return t.map(function(e) {
									return o ? tC(n, r, i, e) : tC(n, r, e, i), !0;
								});
							})
							.getOr(!1);
			});
	}
	function rC(e) {
		return 1 === Ee(e).length;
	}
	function oC(e, t, n, r) {
		var o = d(Wg, t),
			i = X(U(r, o), function(e) {
				return e.dom();
			});
		if (0 === i.length) ap(t, e, n);
		else {
			var a = (function(e, t) {
				var n = Vg(!1),
					r = qg(t, n.dom());
				return Te(it.fromDom(e), n), Bt(it.fromDom(e)), Vc(r, 0);
			})(n.dom(), i);
			t.selection.setRng(a.toRange());
		}
	}
	function iC(n, r) {
		var e = it.fromDom(n.getBody()),
			t = it.fromDom(n.selection.getStart()),
			o = U(
				(function(e, t) {
					var n = bm(t, e);
					return p(n, ar).fold($(n), function(e) {
						return n.slice(0, e);
					});
				})(e, t),
				rC
			);
		return E(o)
			.map(function(e) {
				var t = Vc.fromRangeStart(n.selection.getRng());
				return (
					!(
						!$w(r, t, e.dom()) ||
						(function(e) {
							return sc(e.dom()) && Pg(e.dom());
						})(e)
					) && (oC(r, n, e, o), !0)
				);
			})
			.getOr(!1);
	}
	function aC(e, t) {
		return { start: $(e), end: $(t) };
	}
	function uC(e, t) {
		return Ta(it.fromDom(e), 'td,th', t);
	}
	function cC(e, t) {
		return Sa(e, 'table', t);
	}
	function sC(e) {
		return !1 === pe(e.start(), e.end());
	}
	function lC(e, n) {
		return cC(e.start(), n).bind(function(t) {
			return cC(e.end(), n).bind(function(e) {
				return (function(e, t) {
					return e ? R.some(t) : R.none();
				})(pe(t, e), t);
			});
		});
	}
	function fC(e) {
		return Ca(e, 'td,th');
	}
	function dC(n, e) {
		var t = uC(e.startContainer, n),
			r = uC(e.endContainer, n);
		return e.collapsed
			? R.none()
			: tu(t, r, aC).fold(
					function() {
						return t.fold(
							function() {
								return r.bind(function(t) {
									return cC(t, n).bind(function(e) {
										return z(fC(e)).map(function(e) {
											return aC(e, t);
										});
									});
								});
							},
							function(t) {
								return cC(t, n).bind(function(e) {
									return E(fC(e)).map(function(e) {
										return aC(t, e);
									});
								});
							}
						);
					},
					function(e) {
						return ax(n, e)
							? R.none()
							: (function(t, e) {
									return cC(t.start(), e).bind(function(e) {
										return E(fC(e)).map(function(e) {
											return aC(t.start(), e);
										});
									});
							  })(e, n);
					}
			  );
	}
	function hC(t, e) {
		return lC(t, e).map(function(e) {
			return (function(e, t, n) {
				return { rng: $(e), table: $(t), cells: $(n) };
			})(t, e, fC(e));
		});
	}
	function mC(e, t) {
		var n = (function(t) {
			return function(e) {
				return pe(t, e);
			};
		})(e);
		return (function(e, t) {
			var n = uC(e.startContainer, t),
				r = uC(e.endContainer, t);
			return tu(n, r, aC)
				.filter(sC)
				.filter(function(e) {
					return ax(t, e);
				})
				.orThunk(function() {
					return dC(t, e);
				});
		})(t, n).bind(function(e) {
			return hC(e, n);
		});
	}
	function gC(e, t) {
		return p(e, function(e) {
			return pe(e, t);
		});
	}
	function pC(n) {
		return (function(n) {
			return tu(
				gC(n.cells(), n.rng().start()),
				gC(n.cells(), n.rng().end()),
				function(e, t) {
					return n.cells().slice(e, t + 1);
				}
			);
		})(n).map(function(e) {
			var t = n.cells();
			return e.length === t.length
				? ix.removeTable(n.table())
				: ix.emptyCells(e);
		});
	}
	function vC(e, t) {
		return F(t, Jg), e.selection.setCursorLocation(t[0].dom(), 0), !0;
	}
	function yC(e, t) {
		return ap(e, !1, t), !0;
	}
	function bC(t, e, n) {
		return (function(e, t) {
			return mC(e, t).bind(pC);
		})(e, n).map(function(e) {
			return e.fold(d(yC, t), d(vC, t));
		});
	}
	function CC(t, e, n, r) {
		return ux(e, r)
			.fold(
				function() {
					return bC(t, e, n);
				},
				function(e) {
					return (function(e, t) {
						return cx(e, t);
					})(t, e);
				}
			)
			.getOr(!1);
	}
	function wC(e, t) {
		return g(bm(t, e), dr);
	}
	function xC(t, n, r, o, i) {
		return Ul.navigate(r, t.getBody(), i)
			.bind(function(e) {
				return (function(e, n, r, o) {
					return Ul.firstPositionIn(e.dom())
						.bind(function(t) {
							return Ul.lastPositionIn(e.dom()).map(function(e) {
								return n
									? r.isEqual(t) && o.isEqual(e)
									: r.isEqual(e) && o.isEqual(t);
							});
						})
						.getOr(!0);
				})(o, r, i, e)
					? (function(e, t) {
							return cx(e, t);
					  })(t, o)
					: (function(e, t, n) {
							return ux(e, it.fromDom(n.getNode())).map(function(e) {
								return !1 === pe(e, t);
							});
					  })(n, o, e);
			})
			.or(R.some(!0));
	}
	function zC(t, n, r, e) {
		var o = Vc.fromRangeStart(t.selection.getRng());
		return wC(r, e)
			.bind(function(e) {
				return ip(e)
					? cx(t, e)
					: (function(e, t, n, r, o) {
							return Ul.navigate(n, e.getBody(), o).bind(function(e) {
								return wC(t, it.fromDom(e.getNode())).map(function(e) {
									return !1 === pe(e, r);
								});
							});
					  })(t, r, n, e, o);
			})
			.getOr(!1);
	}
	function EC(e, t) {
		return e ? Gy(t) : Zy(t);
	}
	function NC(t, n, e) {
		var r = it.fromDom(t.getBody());
		return ux(r, e).fold(
			function() {
				return (
					zC(t, n, r, e) ||
					(function(e, t) {
						var n = Vc.fromRangeStart(e.selection.getRng());
						return (
							EC(t, n) ||
							Ul.fromPosition(t, e.getBody(), n)
								.map(function(e) {
									return EC(t, e);
								})
								.getOr(!1)
						);
					})(t, n)
				);
			},
			function(e) {
				return (function(e, t, n, r) {
					var o = Vc.fromRangeStart(e.selection.getRng());
					return ip(r) ? cx(e, r) : xC(e, n, t, r, o);
				})(t, n, r, e).getOr(!1);
			}
		);
	}
	function SC(e) {
		var t = parseInt(e, 10);
		return isNaN(t) ? 0 : t;
	}
	function kC(e, t) {
		return (
			(e ||
			(function(e) {
				return 'table' === Oe(e);
			})(t)
				? 'margin'
				: 'padding') + ('rtl' === Ge(t, 'direction') ? '-right' : '-left')
		);
	}
	function TC(e) {
		var t = fx(e);
		return (
			!0 !== e.readonly &&
			(1 < t.length ||
				(function(r, e) {
					return b(e, function(e) {
						var t = kC(Ts(r), e),
							n = Ze(e, t)
								.map(SC)
								.getOr(0);
						return 'false' !== r.dom.getContentEditable(e.dom()) && 0 < n;
					});
				})(e, t))
		);
	}
	function AC(e) {
		return cr(e) || sr(e);
	}
	function MC(e, t) {
		var n = e.dom,
			r = e.selection,
			o = e.formatter,
			i = As(e),
			a = /[a-z%]+$/i.exec(i)[0],
			u = parseInt(i, 10),
			c = Ts(e),
			s = as(e);
		e.queryCommandState('InsertUnorderedList') ||
			e.queryCommandState('InsertOrderedList') ||
			'' !== s ||
			n.getParent(r.getNode(), n.isBlock) ||
			o.apply('div'),
			F(fx(e), function(e) {
				!(function(e, t, n, r, o, i) {
					var a = kC(n, it.fromDom(i));
					if ('outdent' === t) {
						var u = Math.max(0, SC(i.style[a]) - r);
						e.setStyle(i, a, u ? u + o : '');
					} else {
						u = SC(i.style[a]) + r + o;
						e.setStyle(i, a, u);
					}
				})(n, t, c, u, a, e.dom());
			});
	}
	function RC(e, t, n) {
		return Ul.navigateIgnore(e, t, n, Oy);
	}
	function _C(e, t) {
		return g(bm(it.fromDom(t.container()), e), ar);
	}
	function DC(e, n, r) {
		return RC(e, n.dom(), r).forall(function(t) {
			return _C(n, r).fold(
				function() {
					return !1 === kc(t, r, n.dom());
				},
				function(e) {
					return !1 === kc(t, r, n.dom()) && Ot(e, it.fromDom(t.container()));
				}
			);
		});
	}
	function OC(t, n, r) {
		return _C(n, r).fold(
			function() {
				return RC(t, n.dom(), r).forall(function(e) {
					return !1 === kc(e, r, n.dom());
				});
			},
			function(e) {
				return RC(t, e.dom(), r).isNone();
			}
		);
	}
	function HC(e) {
		return R.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock));
	}
	function BC(e, t) {
		return e && e.parentNode && e.parentNode.nodeName === t;
	}
	function PC(e) {
		return e && /^(OL|UL|LI)$/.test(e.nodeName);
	}
	function LC(e) {
		var t = e.parentNode;
		return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e;
	}
	function VC(e, t, n) {
		for (var r = e[n ? 'firstChild' : 'lastChild']; r && !Qt.isElement(r); )
			r = r[n ? 'nextSibling' : 'previousSibling'];
		return r === t;
	}
	function IC(e) {
		e.innerHTML = '<br data-mce-bogus="1">';
	}
	function FC(e, t) {
		return (
			e.nodeName === t ||
			(e.previousSibling && e.previousSibling.nodeName === t)
		);
	}
	function UC(e, t) {
		return (
			t &&
			e.isBlock(t) &&
			!/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) &&
			!/^(fixed|absolute)/i.test(t.style.position) &&
			'true' !== e.getContentEditable(t)
		);
	}
	function jC(e, t, n) {
		return !1 === Qt.isText(t)
			? n
			: e
			? 1 === n && t.data.charAt(n - 1) === mu.ZWSP
				? 0
				: n
			: n === t.data.length - 1 && t.data.charAt(n) === mu.ZWSP
			? t.data.length
			: n;
	}
	function qC(e, t) {
		var n,
			r,
			o = e.getRoot();
		for (n = t; n !== o && 'false' !== e.getContentEditable(n); )
			'true' === e.getContentEditable(n) && (r = n), (n = n.parentNode);
		return n !== o ? r : o;
	}
	function $C(e, t) {
		var n = as(e);
		n &&
			n.toLowerCase() === t.tagName.toLowerCase() &&
			e.dom.setAttribs(t, us(e));
	}
	function WC(e, t, n) {
		var r = e.create('span', {}, '&nbsp;');
		n.parentNode.insertBefore(r, n), t.scrollIntoView(r), e.remove(r);
	}
	function KC(e, t, n, r) {
		var o = e.createRng();
		r
			? (o.setStartBefore(n), o.setEndBefore(n))
			: (o.setStartAfter(n), o.setEndAfter(n)),
			t.setRng(o);
	}
	function XC(e, t) {
		var n,
			r,
			o = e.selection,
			i = e.dom,
			a = o.getRng();
		Bm(i, a).each(function(e) {
			a.setStart(e.startContainer, e.startOffset),
				a.setEnd(e.endContainer, e.endOffset);
		});
		var u = a.startOffset,
			c = a.startContainer;
		if (1 === c.nodeType && c.hasChildNodes()) {
			var s = u > c.childNodes.length - 1;
			(c = c.childNodes[Math.min(u, c.childNodes.length - 1)] || c),
				(u = s && 3 === c.nodeType ? c.nodeValue.length : 0);
		}
		var l = i.getParent(c, i.isBlock),
			f = l ? i.getParent(l.parentNode, i.isBlock) : null,
			d = f ? f.nodeName.toUpperCase() : '',
			h = !(!t || !t.ctrlKey);
		'LI' !== d || h || (l = f),
			c &&
				3 === c.nodeType &&
				u >= c.nodeValue.length &&
				!(function(e, t, n) {
					for (
						var r, o = new Fi(t, n), i = e.getNonEmptyElements();
						(r = o.next());

					)
						if (i[r.nodeName.toLowerCase()] || 0 < r.length) return !0;
				})(e.schema, c, l) &&
				((n = i.create('br')),
				a.insertNode(n),
				a.setStartAfter(n),
				a.setEndAfter(n),
				(r = !0)),
			(n = i.create('br')),
			Ju(i, a, n),
			WC(i, o, n),
			KC(i, o, n, r),
			e.undoManager.add();
	}
	function YC(e, t) {
		var n = it.fromTag('br');
		Te(it.fromDom(t), n), e.undoManager.add();
	}
	function GC(e, t) {
		Nx(e.getBody(), t) || Ae(it.fromDom(t), it.fromTag('br'));
		var n = it.fromTag('br');
		Ae(it.fromDom(t), n),
			WC(e.dom, e.selection, n.dom()),
			KC(e.dom, e.selection, n.dom(), !1),
			e.undoManager.add();
	}
	function ZC(e) {
		return e && 'A' === e.nodeName && 'href' in e;
	}
	function JC(e) {
		return e.fold($(!1), ZC, ZC, $(!1));
	}
	function QC(e, t) {
		t.fold(i, d(YC, e), d(GC, e), i);
	}
	function ew(e, t) {
		return Cx(e)
			.filter(function(e) {
				return 0 < t.length && me(it.fromDom(e), t);
			})
			.isSome();
	}
	function tw(e, t) {
		return Tx(e);
	}
	function nw(n) {
		return function(e, t) {
			return ('' === as(e)) === n;
		};
	}
	function rw(n) {
		return function(e, t) {
			return xx(e) === n;
		};
	}
	function ow(n, r) {
		return function(e, t) {
			return (wx(e) === n.toUpperCase()) === r;
		};
	}
	function iw(e) {
		return ow('pre', e);
	}
	function aw(n) {
		return function(e, t) {
			return is(e) === n;
		};
	}
	function uw(e, t) {
		return kx(e);
	}
	function cw(e, t) {
		return t;
	}
	function sw(e) {
		var t = as(e),
			n = bx(e.dom, e.selection.getStart());
		return n && e.schema.isValidChild(n.nodeName, t || 'P');
	}
	function lw(e, t) {
		return function(n, r) {
			return y(
				e,
				function(e, t) {
					return e && t(n, r);
				},
				!0
			)
				? R.some(t)
				: R.none();
		};
	}
	function fw(n, r) {
		var e = r.container(),
			t = r.offset();
		return Qt.isText(e)
			? (e.insertData(t, n), R.some(Wu(e, t + n.length)))
			: Oc(r).map(function(e) {
					var t = it.fromText(n);
					return r.isAtEnd() ? Ae(e, t) : Te(e, t), Wu(t.dom(), n.length);
			  });
	}
	function dw(e) {
		return Wu.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd();
	}
	function hw(e, t) {
		var n = U(bm(it.fromDom(t.container()), e), ar);
		return z(n).getOr(e);
	}
	function mw(e, t) {
		return dw(t)
			? Ky(t)
			: Ky(t) || Ul.prevPosition(hw(e, t).dom(), t).exists(Ky);
	}
	function gw(e, t) {
		return dw(t)
			? Wy(t)
			: Wy(t) || Ul.nextPosition(hw(e, t).dom(), t).exists(Wy);
	}
	function pw(e) {
		return Oc(e)
			.bind(function(e) {
				return Na(e, Pt);
			})
			.exists(function(e) {
				return (function(e) {
					return h(['pre', 'pre-wrap'], e);
				})(Ge(e, 'white-space'));
			});
	}
	function vw(e, t) {
		return (
			(function(e, t) {
				return Ul.prevPosition(e.dom(), t).isNone();
			})(e, t) ||
			(function(e, t) {
				return Ul.nextPosition(e.dom(), t).isNone();
			})(e, t) ||
			dx(e, t) ||
			hx(e, t) ||
			Wb(e, t) ||
			$b(e, t)
		);
	}
	function yw(e, t) {
		var n = (function(e) {
			var t = e.container(),
				n = e.offset();
			return Qt.isText(t) && n < t.data.length ? Wu(t, n + 1) : e;
		})(t);
		return !pw(n) && (hx(e, n) || gx(e, n) || $b(e, n) || gw(e, n));
	}
	function bw(e, t) {
		return (
			(function(e, t) {
				return !pw(t) && (dx(e, t) || mx(e, t) || Wb(e, t) || mw(e, t));
			})(e, t) || yw(e, t)
		);
	}
	function Cw(e, t) {
		return Kl(e.charAt(t));
	}
	function ww(e) {
		var t = e.container();
		return Qt.isText(t) && ae(t.data, qr);
	}
	function xw(e) {
		var t = e.data,
			n = (function(e) {
				var n = e.split('');
				return X(n, function(e, t) {
					return Kl(e) &&
						0 < t &&
						t < n.length - 1 &&
						cl(n[t - 1]) &&
						cl(n[t + 1])
						? ' '
						: e;
				}).join('');
			})(t);
		return n !== t && ((e.data = n), !0);
	}
	function zw(n, e) {
		return R.some(e)
			.filter(ww)
			.bind(function(e) {
				var t = e.container();
				return (function(e, t) {
					var n = t.data,
						r = Wu(t, 0);
					return !(!Cw(n, 0) || bw(e, r)) && ((t.data = ' ' + n.slice(1)), !0);
				})(n, t) ||
					xw(t) ||
					(function(e, t) {
						var n = t.data,
							r = Wu(t, n.length - 1);
						return (
							!(!Cw(n, n.length - 1) || bw(e, r)) &&
							((t.data = n.slice(0, -1) + ' '), !0)
						);
					})(n, t)
					? R.some(e)
					: R.none();
			});
	}
	function Ew(t) {
		var e = it.fromDom(t.getBody());
		t.selection.isCollapsed() &&
			zw(e, Wu.fromRangeStart(t.selection.getRng())).each(function(e) {
				t.selection.setRng(e.toRange());
			});
	}
	function Nw(t, n) {
		return function(e) {
			return (function(e, t) {
				return !pw(t) && (vw(e, t) || mw(e, t) || gw(e, t));
			})(t, e)
				? Dx(n)
				: Ox(n);
		};
	}
	function Sw(e) {
		var t = Vc.fromRangeStart(e.selection.getRng()),
			n = it.fromDom(e.getBody());
		if (e.selection.isCollapsed()) {
			var r = d(ly.isInlineTarget, e),
				o = Vc.fromRangeStart(e.selection.getRng());
			return my(r, e.getBody(), o)
				.bind(
					(function(t) {
						return function(e) {
							return e.fold(
								function(e) {
									return Ul.prevPosition(t.dom(), Vc.before(e));
								},
								function(e) {
									return Ul.firstPositionIn(e);
								},
								function(e) {
									return Ul.lastPositionIn(e);
								},
								function(e) {
									return Ul.nextPosition(t.dom(), Vc.after(e));
								}
							);
						};
					})(n)
				)
				.bind(Nw(n, t))
				.exists(
					(function(t) {
						return function(e) {
							return t.selection.setRng(e.toRange()), t.nodeChanged(), !0;
						};
					})(e)
				);
		}
		return !1;
	}
	function kw(e, t) {
		t.hasAttribute('data-mce-caret') &&
			(ja(t),
			(function(e) {
				e.selection.setRng(e.selection.getRng());
			})(e),
			e.selection.scrollIntoView(t));
	}
	function Tw(e, t) {
		var n = (function(e) {
			return ka(it.fromDom(e.getBody()), '*[data-mce-caret]').fold(
				$(null),
				function(e) {
					return e.dom();
				}
			);
		})(e);
		if (n)
			return 'compositionstart' === t.type
				? (t.preventDefault(), t.stopPropagation(), void kw(e, n))
				: void (Va(n) && (kw(e, n), e.undoManager.add()));
	}
	function Aw(t) {
		!(function(e) {
			var t = fa(function() {
				e.composing || Ew(e);
			}, 0);
			Px.isIE() &&
				(e.on('keypress', function(e) {
					t.throttle();
				}),
				e.on('remove', function(e) {
					t.cancel();
				}));
		})(t),
			t.on('input', function(e) {
				!1 === e.isComposing && Ew(t);
			});
	}
	var Mw = d(tb, Wu.isAbove, -1),
		Rw = d(tb, Wu.isBelow, 1),
		_w = d(nb, -1, Mw),
		Dw = d(nb, 1, Rw),
		Ow = Qt.isContentEditableFalse,
		Hw = Ja,
		Bw = d(
			fb,
			function(e) {
				return e.bottom;
			},
			function(e, t) {
				return e.y < t;
			}
		),
		Pw = d(
			fb,
			function(e) {
				return e.top;
			},
			function(e, t) {
				return e.y > t;
			}
		),
		Lw = d(gb, Mw),
		Vw = d(gb, Rw),
		Iw = function(e) {
			for (var t = [], n = 1; n < arguments.length; n++)
				t[n - 1] = arguments[n];
			var r = Array.prototype.slice.call(arguments, 1);
			return function() {
				return e.apply(null, r);
			};
		},
		Fw = function(e, t) {
			return g(Ab(e, t), function(e) {
				return e.action();
			});
		},
		Uw = function(t, n) {
			t.on('keydown', function(e) {
				!1 === e.isDefaultPrevented() &&
					(function(e, t, n) {
						var r = fe().os;
						Fw(
							[
								{ keyCode: hh.RIGHT, action: cb(e, !0) },
								{ keyCode: hh.LEFT, action: cb(e, !1) },
								{ keyCode: hh.UP, action: sb(e, !1) },
								{ keyCode: hh.DOWN, action: sb(e, !0) },
								{ keyCode: hh.RIGHT, action: Cb(e, !0) },
								{ keyCode: hh.LEFT, action: Cb(e, !1) },
								{ keyCode: hh.UP, action: wb(e, !1) },
								{ keyCode: hh.DOWN, action: wb(e, !0) },
								{ keyCode: hh.RIGHT, action: by.move(e, t, !0) },
								{ keyCode: hh.LEFT, action: by.move(e, t, !1) },
								{
									keyCode: hh.RIGHT,
									ctrlKey: !r.isOSX(),
									altKey: r.isOSX(),
									action: by.moveNextWord(e, t)
								},
								{
									keyCode: hh.LEFT,
									ctrlKey: !r.isOSX(),
									altKey: r.isOSX(),
									action: by.movePrevWord(e, t)
								},
								{ keyCode: hh.UP, action: Tb(e, !1) },
								{ keyCode: hh.DOWN, action: Tb(e, !0) }
							],
							n
						).each(function(e) {
							n.preventDefault();
						});
					})(t, n, e);
			});
		},
		jw = function(e, t) {
			return Ot(e, t)
				? Na(
						t,
						function(e) {
							return ur(e) || sr(e);
						},
						(function(t) {
							return function(e) {
								return pe(t, it.fromDom(e.dom().parentNode));
							};
						})(e)
				  )
				: R.none();
		},
		qw = function(e) {
			e.dom.isEmpty(e.getBody()) &&
				(e.setContent(''),
				(function(e) {
					var t = e.getBody(),
						n = t.firstChild && e.dom.isBlock(t.firstChild) ? t.firstChild : t;
					e.selection.setCursorLocation(n, 0);
				})(e));
		},
		$w = function(i, a, u) {
			return tu(Ul.firstPositionIn(u), Ul.lastPositionIn(u), function(e, t) {
				var n = ly.normalizePosition(!0, e),
					r = ly.normalizePosition(!1, t),
					o = ly.normalizePosition(!1, a);
				return i
					? Ul.nextPosition(u, o)
							.map(function(e) {
								return e.isEqual(r) && a.isEqual(n);
							})
							.getOr(!1)
					: Ul.prevPosition(u, o)
							.map(function(e) {
								return e.isEqual(n) && a.isEqual(r);
							})
							.getOr(!1);
			}).getOr(!0);
		},
		Ww = function(e, t, n) {
			return n.collapsed ? _b(e, t, n) : R.none();
		},
		Kw = function(e, t, n, r) {
			return t ? Vb(e, r, n) : Vb(e, n, r);
		},
		Xw = function(t, n) {
			var r = it.fromDom(t.getBody()),
				e = Ww(r.dom(), n, t.selection.getRng()).bind(function(e) {
					return Kw(r, n, e.from().block(), e.to().block());
				});
			return (
				e.each(function(e) {
					t.selection.setRng(e.toRange());
				}),
				e.isSome()
			);
		},
		Yw = function(e, t) {
			return !e.selection.isCollapsed() && Ub(e);
		},
		Gw = d(qb, !1),
		Zw = d(qb, !0),
		Jw = gd([
			{ remove: ['element'] },
			{ moveToElement: ['element'] },
			{ moveToPosition: ['position'] }
		]),
		Qw = function(e, t) {
			for (; t && t !== e; ) {
				if (Qt.isContentEditableTrue(t) || Qt.isContentEditableFalse(t))
					return t;
				t = t.parentNode;
			}
			return null;
		},
		ex = function(e, t) {
			return e.selection.isCollapsed() ? Zb(e, t) : Jb(e, t);
		},
		tx = function(e) {
			var t,
				n = Qw(e.getBody(), e.selection.getNode());
			return (
				Qt.isContentEditableTrue(n) &&
					e.dom.isBlock(n) &&
					e.dom.isEmpty(n) &&
					((t = e.dom.create('br', { 'data-mce-bogus': '1' })),
					e.dom.setHTML(n, ''),
					n.appendChild(t),
					e.selection.setRng(Vc.before(t).toRange())),
				!0
			);
		},
		nx = function(e, t) {
			return (function(e, t) {
				var n = e.selection.getRng();
				if (!Qt.isText(n.commonAncestorContainer)) return !1;
				var r = t ? Pc.Forwards : Pc.Backwards,
					o = Xs(e.getBody()),
					i = d(Hc, o.next),
					a = d(Hc, o.prev),
					u = t ? i : a,
					c = t ? Jy : Qy,
					s = Dc(r, e.getBody(), n),
					l = ly.normalizePosition(t, u(s));
				if (!l || !Bc(s, l)) return !1;
				if (c(l)) return Qb(e, n, s.getNode(), r, t, l);
				var f = u(l);
				return !!(f && c(f) && Bc(l, f)) && Qb(e, n, s.getNode(), r, t, f);
			})(e, t);
		},
		rx = function(e, t, n) {
			if (
				e.selection.isCollapsed() &&
				(function(e) {
					return !1 !== e.settings.inline_boundaries;
				})(e)
			) {
				var r = Vc.fromRangeStart(e.selection.getRng());
				return nC(e, t, n, r);
			}
			return !1;
		},
		ox = function(e, t) {
			return !!e.selection.isCollapsed() && iC(e, t);
		},
		ix = gd([{ removeTable: ['element'] }, { emptyCells: ['cells'] }]),
		ax = function(e, t) {
			return lC(t, e).isSome();
		},
		ux = function(e, t) {
			return g(bm(t, e), function(e) {
				return 'caption' === Oe(e);
			});
		},
		cx = function(e, t) {
			return Jg(t), e.selection.setCursorLocation(t.dom(), 0), R.some(!0);
		},
		sx = function(e, t) {
			var n = it.fromDom(e.selection.getStart(!0)),
				r = _m(e);
			return e.selection.isCollapsed() && 0 === r.length
				? NC(e, t, n)
				: (function(e, t) {
						var n = it.fromDom(e.getBody()),
							r = e.selection.getRng(),
							o = _m(e);
						return 0 !== o.length ? vC(e, o) : CC(e, n, r, t);
				  })(e, n);
		},
		lx = function(e, t) {
			return (
				!!e.selection.isCollapsed() &&
				(function(t, n) {
					var e = Vc.fromRangeStart(t.selection.getRng());
					return Ul.fromPosition(n, t.getBody(), e)
						.filter(function(e) {
							return n ? Xy(e) : Yy(e);
						})
						.bind(function(e) {
							return R.from(Tc(n ? 0 : -1, e));
						})
						.map(function(e) {
							return t.selection.select(e), !0;
						})
						.getOr(!1);
				})(e, t)
			);
		},
		fx = function(e) {
			return U(X(e.selection.getSelectedBlocks(), it.fromDom), function(e) {
				return (
					!AC(e) &&
					!(function(e) {
						return be(e)
							.map(AC)
							.getOr(!1);
					})(e) &&
					(function(e) {
						return Na(e, function(e) {
							return (
								Qt.isContentEditableTrue(e.dom()) ||
								Qt.isContentEditableFalse(e.dom())
							);
						}).exists(function(e) {
							return Qt.isContentEditableTrue(e.dom());
						});
					})(e)
				);
			});
		},
		dx = d(OC, !1),
		hx = d(OC, !0),
		mx = d(DC, !1),
		gx = d(DC, !0),
		px = function(e, t, n) {
			if (e.selection.isCollapsed() && TC(e)) {
				var r = e.dom,
					o = e.selection.getRng(),
					i = Vc.fromRangeStart(o),
					a = r.getParent(o.startContainer, r.isBlock);
				if (null !== a && dx(it.fromDom(a), i)) return MC(e, 'outdent'), !0;
			}
			return !1;
		},
		vx = function(t, n) {
			t.on('keydown', function(e) {
				!1 === e.isDefaultPrevented() &&
					(function(e, t, n) {
						Fw(
							[
								{ keyCode: hh.BACKSPACE, action: Iw(px, e, !1) },
								{ keyCode: hh.BACKSPACE, action: Iw(ex, e, !1) },
								{ keyCode: hh.DELETE, action: Iw(ex, e, !0) },
								{ keyCode: hh.BACKSPACE, action: Iw(nx, e, !1) },
								{ keyCode: hh.DELETE, action: Iw(nx, e, !0) },
								{ keyCode: hh.BACKSPACE, action: Iw(rx, e, t, !1) },
								{ keyCode: hh.DELETE, action: Iw(rx, e, t, !0) },
								{ keyCode: hh.BACKSPACE, action: Iw(sx, e, !1) },
								{ keyCode: hh.DELETE, action: Iw(sx, e, !0) },
								{ keyCode: hh.BACKSPACE, action: Iw(lx, e, !1) },
								{ keyCode: hh.DELETE, action: Iw(lx, e, !0) },
								{ keyCode: hh.BACKSPACE, action: Iw(Yw, e, !1) },
								{ keyCode: hh.DELETE, action: Iw(Yw, e, !0) },
								{ keyCode: hh.BACKSPACE, action: Iw(Xw, e, !1) },
								{ keyCode: hh.DELETE, action: Iw(Xw, e, !0) },
								{ keyCode: hh.BACKSPACE, action: Iw(ox, e, !1) },
								{ keyCode: hh.DELETE, action: Iw(ox, e, !0) }
							],
							n
						).each(function(e) {
							n.preventDefault();
						});
					})(t, n, e);
			}),
				t.on('keyup', function(e) {
					!1 === e.isDefaultPrevented() &&
						(function(e, t) {
							Fw(
								[
									{ keyCode: hh.BACKSPACE, action: Iw(tx, e) },
									{ keyCode: hh.DELETE, action: Iw(tx, e) }
								],
								t
							);
						})(t, e);
				});
		},
		yx = function(e, t) {
			var n,
				r,
				o = t,
				i = e.dom,
				a = e.schema.getMoveCaretBeforeOnEnterElements();
			if (t) {
				if (/^(LI|DT|DD)$/.test(t.nodeName)) {
					var u = (function(e) {
						for (; e; ) {
							if (
								1 === e.nodeType ||
								(3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data))
							)
								return e;
							e = e.nextSibling;
						}
					})(t.firstChild);
					u &&
						/^(UL|OL|DL)$/.test(u.nodeName) &&
						t.insertBefore(i.doc.createTextNode(qr), t.firstChild);
				}
				if (((r = i.createRng()), t.normalize(), t.hasChildNodes())) {
					for (var c = new Fi(t, t); (n = c.current()); ) {
						if (Qt.isText(n)) {
							r.setStart(n, 0), r.setEnd(n, 0);
							break;
						}
						if (a[n.nodeName.toLowerCase()]) {
							r.setStartBefore(n), r.setEndBefore(n);
							break;
						}
						(o = n), (n = c.next());
					}
					n || (r.setStart(o, 0), r.setEnd(o, 0));
				} else
					Qt.isBr(t)
						? t.nextSibling && i.isBlock(t.nextSibling)
							? (r.setStartBefore(t), r.setEndBefore(t))
							: (r.setStartAfter(t), r.setEndAfter(t))
						: (r.setStart(t, 0), r.setEnd(t, 0));
				e.selection.setRng(r), gm(e, r);
			}
		},
		bx = function(e, t) {
			var n,
				r,
				o = e.getRoot();
			for (n = t; n !== o && 'false' !== e.getContentEditable(n); )
				'true' === e.getContentEditable(n) && (r = n), (n = n.parentNode);
			return n !== o ? r : o;
		},
		Cx = HC,
		wx = function(e) {
			return HC(e).fold($(''), function(e) {
				return e.nodeName.toUpperCase();
			});
		},
		xx = function(e) {
			return HC(e)
				.filter(function(e) {
					return sr(it.fromDom(e));
				})
				.isSome();
		},
		zx = function(e, t, n, r, o) {
			var i = e.dom,
				a = e.selection.getRng();
			if (n !== e.getBody()) {
				!(function(e) {
					return PC(e) && PC(e.parentNode);
				})(n) || (o = 'LI');
				var u = o ? t(o) : i.create('BR');
				if (VC(n, r, !0) && VC(n, r, !1))
					BC(n, 'LI') ? i.insertAfter(u, LC(n)) : i.replace(u, n);
				else if (VC(n, r, !0))
					BC(n, 'LI')
						? (i.insertAfter(u, LC(n)),
						  u.appendChild(i.doc.createTextNode(' ')),
						  u.appendChild(n))
						: n.parentNode.insertBefore(u, n);
				else if (VC(n, r, !1)) i.insertAfter(u, LC(n));
				else {
					n = LC(n);
					var c = a.cloneRange();
					c.setStartAfter(r), c.setEndAfter(n);
					var s = c.extractContents();
					'LI' === o &&
					(function(e, t) {
						return e.firstChild && e.firstChild.nodeName === t;
					})(s, 'LI')
						? ((u = s.firstChild), i.insertAfter(s, n))
						: (i.insertAfter(s, n), i.insertAfter(u, n));
				}
				i.remove(r), yx(e, u);
			}
		},
		Ex = function(a, e) {
			function t(e) {
				var t,
					n,
					r,
					o = c,
					i = b.getTextInlineElements();
				if (
					(e || 'TABLE' === m || 'HR' === m
						? ((t = y.create(e || p)), $C(a, t))
						: (t = s.cloneNode(!1)),
					(r = t),
					!1 === ls(a))
				)
					y.setAttrib(t, 'style', null), y.setAttrib(t, 'class', null);
				else
					do {
						if (i[o.nodeName]) {
							if (sc(o) || Wl(o)) continue;
							(n = o.cloneNode(!1)),
								y.setAttrib(n, 'id', ''),
								t.hasChildNodes() ? n.appendChild(t.firstChild) : (r = n),
								t.appendChild(n);
						}
					} while ((o = o.parentNode) && o !== u);
				return IC(r), t;
			}
			function n(e) {
				var t,
					n,
					r = jC(e, c, i);
				if (Qt.isText(c) && (e ? 0 < r : r < c.nodeValue.length)) return !1;
				if (c.parentNode === s && v && !e) return !0;
				if (e && Qt.isElement(c) && c === s.firstChild) return !0;
				if (FC(c, 'TABLE') || FC(c, 'HR')) return (v && !e) || (!v && e);
				var o = new Fi(c, s);
				for (
					Qt.isText(c) &&
					(e && 0 === r ? o.prev() : e || r !== c.nodeValue.length || o.next());
					(t = o.current());

				) {
					if (Qt.isElement(t)) {
						if (
							!t.getAttribute('data-mce-bogus') &&
							((n = t.nodeName.toLowerCase()), C[n] && 'br' !== n)
						)
							return !1;
					} else if (Qt.isText(t) && !/^[ \t\r\n]*$/.test(t.nodeValue))
						return !1;
					e ? o.prev() : o.next();
				}
				return !0;
			}
			function r() {
				(f = /^(H[1-6]|PRE|FIGURE)$/.test(m) && 'HGROUP' !== g ? t(p) : t()),
					fs(a) && UC(y, h) && y.isEmpty(s)
						? (f = y.split(h, s))
						: y.insertAfter(f, s),
					yx(a, f);
			}
			var o,
				u,
				c,
				i,
				s,
				l,
				f,
				d,
				h,
				m,
				g,
				p,
				v,
				y = a.dom,
				b = a.schema,
				C = b.getNonEmptyElements(),
				w = a.selection.getRng();
			Bm(y, w).each(function(e) {
				w.setStart(e.startContainer, e.startOffset),
					w.setEnd(e.endContainer, e.endOffset);
			}),
				(c = w.startContainer),
				(i = w.startOffset),
				(p = as(a)),
				(l = !(!e || !e.shiftKey));
			var x = !(!e || !e.ctrlKey);
			Qt.isElement(c) &&
				c.hasChildNodes() &&
				((v = i > c.childNodes.length - 1),
				(c = c.childNodes[Math.min(i, c.childNodes.length - 1)] || c),
				(i = v && Qt.isText(c) ? c.nodeValue.length : 0)),
				(u = qC(y, c)) &&
					(((p && !l) || (!p && l)) &&
						(c = (function(e, t, n, r, o) {
							var i,
								a,
								u,
								c,
								s,
								l,
								f = t || 'P',
								d = e.dom,
								h = qC(d, r);
							if (!(a = d.getParent(r, d.isBlock)) || !UC(d, a)) {
								if (
									((l =
										(a = a || h) === e.getBody() ||
										(function(e) {
											return e && /^(TD|TH|CAPTION)$/.test(e.nodeName);
										})(a)
											? a.nodeName.toLowerCase()
											: a.parentNode.nodeName.toLowerCase()),
									!a.hasChildNodes())
								)
									return (
										(i = d.create(f)),
										$C(e, i),
										a.appendChild(i),
										n.setStart(i, 0),
										n.setEnd(i, 0),
										i
									);
								for (c = r; c.parentNode !== a; ) c = c.parentNode;
								for (; c && !d.isBlock(c); ) c = (u = c).previousSibling;
								if (u && e.schema.isValidChild(l, f.toLowerCase())) {
									for (
										i = d.create(f),
											$C(e, i),
											u.parentNode.insertBefore(i, u),
											c = u;
										c && !d.isBlock(c);

									)
										(s = c.nextSibling), i.appendChild(c), (c = s);
									n.setStart(r, o), n.setEnd(r, o);
								}
							}
							return r;
						})(a, p, w, c, i)),
					(s = y.getParent(c, y.isBlock)),
					(h = s ? y.getParent(s.parentNode, y.isBlock) : null),
					(m = s ? s.nodeName.toUpperCase() : ''),
					'LI' !== (g = h ? h.nodeName.toUpperCase() : '') ||
						x ||
						((h = (s = h).parentNode), (m = g)),
					/^(LI|DT|DD)$/.test(m) && y.isEmpty(s)
						? zx(a, t, h, s, p)
						: (p && s === a.getBody()) ||
						  ((p = p || 'P'),
						  Ba(s)
								? ((f = ja(s)), y.isEmpty(s) && IC(s), yx(a, f))
								: n()
								? r()
								: n(!0)
								? ((f = s.parentNode.insertBefore(t(), s)),
								  yx(a, FC(s, 'HR') ? f : s))
								: ((o = (function(e) {
										var t = e.cloneRange();
										return (
											t.setStart(
												e.startContainer,
												jC(!0, e.startContainer, e.startOffset)
											),
											t.setEnd(
												e.endContainer,
												jC(!1, e.endContainer, e.endOffset)
											),
											t
										);
								  })(w).cloneRange()).setEndAfter(s),
								  (function(e) {
										F(xa(it.fromDom(e), Lt), function(e) {
											var t = e.dom();
											t.nodeValue = mu.trim(t.nodeValue);
										});
								  })((d = o.extractContents())),
								  (function(e) {
										for (
											;
											Qt.isText(e) &&
												(e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, '')),
												(e = e.firstChild);

										);
								  })(d),
								  (f = d.firstChild),
								  y.insertAfter(d, s),
								  (function(e, t, n) {
										var r,
											o = n,
											i = [];
										if (o) {
											for (; (o = o.firstChild); ) {
												if (e.isBlock(o)) return;
												Qt.isElement(o) &&
													!t[o.nodeName.toLowerCase()] &&
													i.push(o);
											}
											for (r = i.length; r--; )
												!(o = i[r]).hasChildNodes() ||
												(o.firstChild === o.lastChild &&
													'' === o.firstChild.nodeValue)
													? e.remove(o)
													: ((a = e),
													  (u = o) &&
															'A' === u.nodeName &&
															a.isEmpty(u) &&
															e.remove(o));
											var a, u;
										}
								  })(y, C, f),
								  (function(e, t) {
										var n;
										t.normalize(),
											((n = t.lastChild) &&
												!/^(left|right)$/gi.test(e.getStyle(n, 'float', !0))) ||
												e.add(t, 'br');
								  })(y, s),
								  y.isEmpty(s) && IC(s),
								  f.normalize(),
								  y.isEmpty(f) ? (y.remove(f), r()) : yx(a, f)),
						  y.setAttrib(f, 'id', ''),
						  a.fire('NewBlock', { newBlock: f })));
		},
		Nx = function(e, t) {
			return (
				!!(function(e) {
					return Qt.isBr(e.getNode());
				})(Vc.after(t)) ||
				Ul.nextPosition(e, Vc.after(t))
					.map(function(e) {
						return Qt.isBr(e.getNode());
					})
					.getOr(!1)
			);
		},
		Sx = function(e, t) {
			var n = (function(e) {
				var t = d(ly.isInlineTarget, e),
					n = Vc.fromRangeStart(e.selection.getRng());
				return my(t, e.getBody(), n).filter(JC);
			})(e);
			n.isSome() ? n.each(d(QC, e)) : XC(e, t);
		},
		kx = function(e) {
			return ew(e, cs(e));
		},
		Tx = function(e) {
			return ew(e, ss(e));
		},
		Ax = gd([{ br: [] }, { block: [] }, { none: [] }]),
		Mx = function(e, t) {
			return fy(
				[
					lw([tw], Ax.none()),
					lw([ow('summary', !0)], Ax.br()),
					lw([iw(!0), aw(!1), cw], Ax.br()),
					lw([iw(!0), aw(!1)], Ax.block()),
					lw([iw(!0), aw(!0), cw], Ax.block()),
					lw([iw(!0), aw(!0)], Ax.br()),
					lw([rw(!0), cw], Ax.br()),
					lw([rw(!0)], Ax.block()),
					lw([nw(!0), cw, sw], Ax.block()),
					lw([nw(!0)], Ax.br()),
					lw([uw], Ax.br()),
					lw([nw(!1), cw], Ax.br()),
					lw([sw], Ax.block())
				],
				[e, !(!t || !t.shiftKey)]
			).getOr(Ax.none());
		},
		Rx = function(e, t) {
			Mx(e, t).fold(
				function() {
					Sx(e, t);
				},
				function() {
					Ex(e, t);
				},
				i
			);
		},
		_x = function(t) {
			t.on('keydown', function(e) {
				e.keyCode === hh.ENTER &&
					(function(e, t) {
						t.isDefaultPrevented() ||
							(t.preventDefault(),
							(function(e) {
								e.typing && ((e.typing = !1), e.add());
							})(e.undoManager),
							e.undoManager.transact(function() {
								!1 === e.selection.isCollapsed() && e.execCommand('Delete'),
									Rx(e, t);
							}));
					})(t, e);
			});
		},
		Dx = d(fw, qr),
		Ox = d(fw, ' '),
		Hx = function(t) {
			t.on('keydown', function(e) {
				!1 === e.isDefaultPrevented() &&
					(function(e, t) {
						Fw([{ keyCode: hh.SPACEBAR, action: Iw(Sw, e) }], t).each(function(
							e
						) {
							t.preventDefault();
						});
					})(t, e);
			});
		},
		Bx = function(e) {
			e.on('keyup compositionstart', d(Tw, e));
		},
		Px = fe().browser,
		Lx = function(t) {
			t.on('keydown', function(e) {
				!1 === e.isDefaultPrevented() &&
					(function(e, t) {
						Fw(
							[
								{ keyCode: hh.END, action: lb(e, !0) },
								{ keyCode: hh.HOME, action: lb(e, !1) }
							],
							t
						).each(function(e) {
							t.preventDefault();
						});
					})(t, e);
			});
		},
		Vx = function(e) {
			var t = by.setupSelectedState(e);
			Bx(e), Uw(e, t), vx(e, t), _x(e), Hx(e), Aw(e), Lx(e);
		},
		Ix =
			((Fx.prototype.nodeChanged = function(e) {
				var t,
					n,
					r,
					o = this.editor.selection;
				this.editor.initialized &&
					o &&
					!this.editor.settings.disable_nodechange &&
					!this.editor.readonly &&
					((r = this.editor.getBody()),
					((t = o.getStart(!0) || r).ownerDocument === this.editor.getDoc() &&
						this.editor.dom.isChildOf(t, r)) ||
						(t = r),
					(n = []),
					this.editor.dom.getParent(t, function(e) {
						if (e === r) return !0;
						n.push(e);
					}),
					((e = e || {}).element = t),
					(e.parents = n),
					this.editor.fire('NodeChange', e));
			}),
			(Fx.prototype.isSameElementPath = function(e) {
				var t, n;
				if (
					(n = this.editor
						.$(e)
						.parentsUntil(this.editor.getBody())
						.add(e)).length === this.lastPath.length
				) {
					for (t = n.length; 0 <= t && n[t] === this.lastPath[t]; t--);
					if (-1 === t) return (this.lastPath = n), !0;
				}
				return (this.lastPath = n), !1;
			}),
			Fx);
	function Fx(r) {
		var o;
		(this.lastPath = []), (this.editor = r);
		var t = this;
		'onselectionchange' in r.getDoc() ||
			r.on('NodeChange click mouseup keyup focus', function(e) {
				var t, n;
				(n = {
					startContainer: (t = r.selection.getRng()).startContainer,
					startOffset: t.startOffset,
					endContainer: t.endContainer,
					endOffset: t.endOffset
				}),
					('nodechange' !== e.type && Hm(n, o)) || r.fire('SelectionChange'),
					(o = n);
			}),
			r.on('contextmenu', function() {
				r.fire('SelectionChange');
			}),
			r.on('SelectionChange', function() {
				var e = r.selection.getStart(!0);
				!e ||
					(!Wn.range && r.selection.isCollapsed()) ||
					(Ph(r) &&
						!t.isSameElementPath(e) &&
						r.dom.isChildOf(e, r.getBody()) &&
						r.nodeChanged({ selectionChange: !0 }));
			}),
			r.on('mouseup', function(e) {
				!e.isDefaultPrevented() &&
					Ph(r) &&
					('IMG' === r.selection.getNode().nodeName
						? Pn.setEditorTimeout(r, function() {
								r.nodeChanged();
						  })
						: r.nodeChanged());
			});
	}
	function Ux(e) {
		!(function(t) {
			t.on('click', function(e) {
				t.dom.getParent(e.target, 'details') && e.preventDefault();
			});
		})(e),
			(function(e) {
				e.parser.addNodeFilter('details', function(e) {
					F(e, function(e) {
						e.attr('data-mce-open', e.attr('open')), e.attr('open', 'open');
					});
				}),
					e.serializer.addNodeFilter('details', function(e) {
						F(e, function(e) {
							var t = e.attr('data-mce-open');
							e.attr('open', K(t) ? t : null), e.attr('data-mce-open', null);
						});
					});
			})(e);
	}
	function jx(e) {
		return Qt.isElement(e) && ur(it.fromDom(e));
	}
	function qx(t) {
		t.on('click', function(e) {
			3 <= e.detail &&
				(function(e) {
					var t = e.selection.getRng(),
						n = Wu.fromRangeStart(t),
						r = Wu.fromRangeEnd(t);
					if (Wu.isElementPosition(n)) {
						var o = n.container();
						jx(o) &&
							Ul.firstPositionIn(o).each(function(e) {
								return t.setStart(e.container(), e.offset());
							});
					}
					if (Wu.isElementPosition(r)) {
						o = n.container();
						jx(o) &&
							Ul.lastPositionIn(o).each(function(e) {
								return t.setEnd(e.container(), e.offset());
							});
					}
					e.selection.setRng(Bp(t));
				})(t);
		});
	}
	function $x(e) {
		var t, n, r, o;
		return (
			(o = e.getBoundingClientRect()),
			(n = (t = e.ownerDocument).documentElement),
			(r = t.defaultView),
			{
				top: o.top + r.pageYOffset - n.clientTop,
				left: o.left + r.pageXOffset - n.clientLeft
			}
		);
	}
	function Wx(e) {
		e && e.parentNode && e.parentNode.removeChild(e);
	}
	function Kx(i, a) {
		return function(e) {
			if (
				(function(e) {
					return 0 === e.button;
				})(e)
			) {
				var t = g(a.dom.getParents(e.target), _u(Nz, Sz)).getOr(null);
				if (
					(function(e, t) {
						return Nz(t) && t !== e;
					})(a.getBody(), t)
				) {
					var n = a.dom.getPos(t),
						r = a.getBody(),
						o = a.getDoc().documentElement;
					(i.element = t),
						(i.screenX = e.screenX),
						(i.screenY = e.screenY),
						(i.maxX = (a.inline ? r.scrollWidth : o.offsetWidth) - 2),
						(i.maxY = (a.inline ? r.scrollHeight : o.offsetHeight) - 2),
						(i.relX = e.pageX - n.x),
						(i.relY = e.pageY - n.y),
						(i.width = t.offsetWidth),
						(i.height = t.offsetHeight),
						(i.ghost = (function(e, t, n, r) {
							var o = t.cloneNode(!0);
							e.dom.setStyles(o, { width: n, height: r }),
								e.dom.setAttrib(o, 'data-mce-selected', null);
							var i = e.dom.create('div', {
								class: 'mce-drag-container',
								'data-mce-bogus': 'all',
								unselectable: 'on',
								contenteditable: 'false'
							});
							return (
								e.dom.setStyles(i, {
									position: 'absolute',
									opacity: 0.5,
									overflow: 'hidden',
									border: 0,
									padding: 0,
									margin: 0,
									width: n,
									height: r
								}),
								e.dom.setStyles(o, { margin: 0, boxSizing: 'border-box' }),
								i.appendChild(o),
								i
							);
						})(a, t, i.width, i.height));
				}
			}
		};
	}
	function Xx(r, o) {
		return function(e) {
			if (
				r.dragging &&
				(function(e, t, n) {
					return t !== n && !e.dom.isChildOf(t, n) && !Nz(t);
				})(
					o,
					(function(e) {
						var t = e.getSel().getRangeAt(0).startContainer;
						return 3 === t.nodeType ? t.parentNode : t;
					})(o.selection),
					r.element
				)
			) {
				var t = (function(e) {
						var t = e.cloneNode(!0);
						return t.removeAttribute('data-mce-selected'), t;
					})(r.element),
					n = o.fire('drop', {
						targetClone: t,
						clientX: e.clientX,
						clientY: e.clientY
					});
				n.isDefaultPrevented() ||
					((t = n.targetClone),
					o.undoManager.transact(function() {
						Wx(r.element),
							o.insertContent(o.dom.getOuterHTML(t)),
							o._selectionOverrides.hideFakeCaret();
					}));
			}
			kz(r);
		};
	}
	function Yx(e) {
		var t,
			n,
			r,
			o,
			i,
			a,
			u = {};
		(t = Qi.DOM),
			(a = j.document),
			(n = Kx(u, e)),
			(r = (function(r, o) {
				var i = Pn.throttle(function(e, t) {
					o._selectionOverrides.hideFakeCaret(), o.selection.placeCaretAt(e, t);
				}, 0);
				return function(e) {
					var t = Math.max(
						Math.abs(e.screenX - r.screenX),
						Math.abs(e.screenY - r.screenY)
					);
					if (
						(function(e) {
							return e.element;
						})(r) &&
						!r.dragging &&
						10 < t
					) {
						if (o.fire('dragstart', { target: r.element }).isDefaultPrevented())
							return;
						(r.dragging = !0), o.focus();
					}
					if (r.dragging) {
						var n = (function(e, t) {
							return { pageX: t.pageX - e.relX, pageY: t.pageY + 5 };
						})(r, Ez(o, e));
						!(function(e, t) {
							e.parentNode !== t && t.appendChild(e);
						})(r.ghost, o.getBody()),
							(function(e, t, n, r, o, i) {
								var a = 0,
									u = 0;
								(e.style.left = t.pageX + 'px'),
									(e.style.top = t.pageY + 'px'),
									t.pageX + n > o && (a = t.pageX + n - o),
									t.pageY + r > i && (u = t.pageY + r - i),
									(e.style.width = n - a + 'px'),
									(e.style.height = r - u + 'px');
							})(r.ghost, n, r.width, r.height, r.maxX, r.maxY),
							i(e.clientX, e.clientY);
					}
				};
			})(u, e)),
			(o = Xx(u, e)),
			(i = (function(e, t) {
				return function() {
					e.dragging && t.fire('dragend'), kz(e);
				};
			})(u, e)),
			e.on('mousedown', n),
			e.on('mousemove', r),
			e.on('mouseup', o),
			t.bind(a, 'mousemove', r),
			t.bind(a, 'mouseup', i),
			e.on('remove', function() {
				t.unbind(a, 'mousemove', r), t.unbind(a, 'mouseup', i);
			});
	}
	function Gx(e, t) {
		for (var n = e.getBody(); t && t !== n; ) {
			if (Mz(t) || Rz(t)) return t;
			t = t.parentNode;
		}
		return null;
	}
	function Zx(g) {
		function a(e) {
			e && g.selection.setRng(e);
		}
		function r() {
			return g.selection.getRng();
		}
		function p(e, t, n, r) {
			return (
				void 0 === r && (r = !0),
				g
					.fire('ShowCaret', { target: t, direction: e, before: n })
					.isDefaultPrevented()
					? null
					: (r && g.selection.scrollIntoView(t, -1 === e), o.show(n, t))
			);
		}
		function t(e) {
			return La(e) || vu(e) || yu(e);
		}
		var v,
			y = g.getBody(),
			o = bc(
				g,
				y,
				function(e) {
					return g.dom.isBlock(e);
				},
				function() {
					return Dd(g);
				}
			),
			b = 'sel-' + g.dom.uniqueId(),
			C = function(e) {
				return t(e.startContainer) || t(e.endContainer);
			},
			u = function(e) {
				var t = g.schema.getShortEndedElements(),
					n = g.dom.createRng(),
					r = e.startContainer,
					o = e.startOffset,
					i = e.endContainer,
					a = e.endOffset;
				return (
					ee(t, r.nodeName.toLowerCase())
						? 0 === o
							? n.setStartBefore(r)
							: n.setStartAfter(r)
						: n.setStart(r, o),
					ee(t, i.nodeName.toLowerCase())
						? 0 === a
							? n.setEndBefore(i)
							: n.setEndAfter(i)
						: n.setEnd(i, a),
					n
				);
			},
			c = function(e, t) {
				var n,
					r,
					o,
					i,
					a,
					u,
					c,
					s,
					l,
					f,
					d = g.$,
					h = g.dom;
				if (!e) return null;
				if (e.collapsed) {
					if (!C(e))
						if (!1 === t) {
							if (((s = Dc(-1, y, e)), wc(s.getNode(!0))))
								return p(-1, s.getNode(!0), !1, !1);
							if (wc(s.getNode())) return p(-1, s.getNode(), !s.isAtEnd(), !1);
						} else {
							if (((s = Dc(1, y, e)), wc(s.getNode())))
								return p(1, s.getNode(), !s.isAtEnd(), !1);
							if (wc(s.getNode(!0))) return p(1, s.getNode(!0), !1, !1);
						}
					return null;
				}
				if (
					((i = e.startContainer),
					(a = e.startOffset),
					(u = e.endOffset),
					3 === i.nodeType &&
						0 === a &&
						Rz(i.parentNode) &&
						((i = i.parentNode), (a = h.nodeIndex(i)), (i = i.parentNode)),
					1 !== i.nodeType)
				)
					return null;
				if (
					(u === a + 1 && i === e.endContainer && (n = i.childNodes[a]), !Rz(n))
				)
					return null;
				if (
					((l = f = n.cloneNode(!0)),
					(c = g.fire('ObjectSelected', {
						target: n,
						targetClone: l
					})).isDefaultPrevented())
				)
					return null;
				(r = ka(it.fromDom(g.getBody()), '#' + b).fold(
					function() {
						return d([]);
					},
					function(e) {
						return d([e.dom()]);
					}
				)),
					(l = c.targetClone),
					0 === r.length &&
						(r = d(
							'<div data-mce-bogus="all" class="mce-offscreen-selection"></div>'
						).attr('id', b)).appendTo(g.getBody()),
					(e = g.dom.createRng()),
					l === f && Wn.ie
						? (r
								.empty()
								.append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>')
								.append(l),
						  e.setStartAfter(r[0].firstChild.firstChild),
						  e.setEndAfter(l))
						: (r
								.empty()
								.append(qr)
								.append(l)
								.append(qr),
						  e.setStart(r[0].firstChild, 1),
						  e.setEnd(r[0].lastChild, 0)),
					r.css({ top: h.getPos(n, g.getBody()).y }),
					r[0].focus(),
					(o = g.selection.getSel()).removeAllRanges(),
					o.addRange(e);
				var m = it.fromDom(n);
				return (
					F(Ca(it.fromDom(g.getBody()), '*[data-mce-selected]'), function(e) {
						pe(m, e) || Ye(e, 'data-mce-selected');
					}),
					g.dom.getAttrib(n, 'data-mce-selected') ||
						n.setAttribute('data-mce-selected', '1'),
					(v = n),
					w(),
					e
				);
			},
			s = function() {
				v &&
					(v.removeAttribute('data-mce-selected'),
					ka(it.fromDom(g.getBody()), '#' + b).each(Bt),
					(v = null)),
					ka(it.fromDom(g.getBody()), '#' + b).each(Bt),
					(v = null);
			},
			w = function() {
				o.hide();
			};
		return (
			Wn.ceFalse &&
				(function() {
					g.on('mouseup', function(e) {
						var t = r();
						t.collapsed && Gd(g, e.clientX, e.clientY) && a(Ry(g, t, !1));
					}),
						g.on('click', function(e) {
							var t;
							(t = Gx(g, e.target)) &&
								(Rz(t) && (e.preventDefault(), g.focus()),
								Mz(t) && g.dom.isChildOf(t, g.selection.getNode()) && s());
						}),
						g.on('blur NewBlock', function() {
							s();
						}),
						g.on('ResizeWindow FullscreenStateChanged', function() {
							return o.reposition();
						});
					function i(e, t) {
						var n = g.dom.getParent(e, g.dom.isBlock),
							r = g.dom.getParent(t, g.dom.isBlock);
						return (
							!(!n || !g.dom.isChildOf(n, r) || !1 !== Rz(Gx(g, n))) ||
							(n &&
								!(function(e, t) {
									return (
										g.dom.getParent(e, g.dom.isBlock) ===
										g.dom.getParent(t, g.dom.isBlock)
									);
								})(n, r) &&
								(function(e) {
									var t = Xs(e);
									if (!e.firstChild) return !1;
									var n = Vc.before(e.firstChild),
										r = t.next(n);
									return r && !Jy(r) && !Qy(r);
								})(n))
						);
					}
					var n;
					(n = g).on(
						'tap',
						function(e) {
							var t = Gx(n, e.target);
							Rz(t) && (e.preventDefault(), c(My(n, t)));
						},
						!0
					),
						g.on('mousedown', function(e) {
							var t,
								n = e.target;
							if (
								(n === y || 'HTML' === n.nodeName || g.dom.isChildOf(n, y)) &&
								!1 !== Gd(g, e.clientX, e.clientY)
							)
								if ((t = Gx(g, n)))
									Rz(t)
										? (e.preventDefault(), c(My(g, t)))
										: (s(),
										  (Mz(t) && e.shiftKey) ||
												dh(e.clientX, e.clientY, g.selection.getRng()) ||
												(w(), g.selection.placeCaretAt(e.clientX, e.clientY)));
								else if (!1 === wc(n)) {
									s(), w();
									var r = Ty(y, e.clientX, e.clientY);
									if (r && !i(e.target, r.node)) {
										e.preventDefault();
										var o = p(1, r.node, r.before, !1);
										g.getBody().focus(), a(o);
									}
								}
						}),
						g.on('keypress', function(e) {
							hh.modifierPressed(e) ||
								(e.keyCode, Rz(g.selection.getNode()) && e.preventDefault());
						}),
						g.on('GetSelectionRange', function(e) {
							var t = e.range;
							if (v) {
								if (!v.parentNode) return void (v = null);
								(t = t.cloneRange()).selectNode(v), (e.range = t);
							}
						}),
						g.on('SetSelectionRange', function(e) {
							e.range = u(e.range);
							var t = c(e.range, e.forward);
							t && (e.range = t);
						});
					g.on('AfterSetSelectionRange', function(e) {
						var t = e.range;
						C(t) ||
							(function(e) {
								return 'mcepastebin' === e.id;
							})(t.startContainer.parentNode) ||
							w(),
							(function(e) {
								return g.dom.hasClass(e, 'mce-offscreen-selection');
							})(t.startContainer.parentNode) || s();
					}),
						g.on('copy', function(e) {
							var t = e.clipboardData;
							if (!e.isDefaultPrevented() && e.clipboardData && !Wn.ie) {
								var n = (function() {
									var e = g.dom.get(b);
									return e ? e.getElementsByTagName('*')[0] : e;
								})();
								n &&
									(e.preventDefault(),
									t.clearData(),
									t.setData('text/html', n.outerHTML),
									t.setData('text/plain', n.outerText));
							}
						}),
						Tz(g),
						Az(g);
				})(),
			{
				showCaret: p,
				showBlockCaretContainer: function(e) {
					e.hasAttribute('data-mce-caret') &&
						(ja(e), a(r()), g.selection.scrollIntoView(e));
				},
				hideFakeCaret: w,
				destroy: function() {
					o.destroy(), (v = null);
				}
			}
		);
	}
	function Jx(a) {
		function e(e, t) {
			try {
				a.getDoc().execCommand(e, !1, t);
			} catch (n) {}
		}
		function u(e) {
			return e.isDefaultPrevented();
		}
		function t() {
			a.shortcuts.add('meta+a', null, 'SelectAll');
		}
		function n() {
			a.on('keydown', function(e) {
				if (
					!u(e) &&
					e.keyCode === i &&
					l.isCollapsed() &&
					0 === l.getRng().startOffset
				) {
					var t = l.getNode().previousSibling;
					if (t && t.nodeName && 'table' === t.nodeName.toLowerCase())
						return e.preventDefault(), !1;
				}
			});
		}
		function r() {
			a.inline ||
				(a.contentStyles.push('body {min-height: 150px}'),
				a.on('click', function(e) {
					var t;
					if ('HTML' === e.target.nodeName) {
						if (11 < Wn.ie) return void a.getBody().focus();
						(t = a.selection.getRng()),
							a.getBody().focus(),
							a.selection.setRng(t),
							a.selection.normalize(),
							a.nodeChanged();
					}
				}));
		}
		var o = Zn.each,
			i = hh.BACKSPACE,
			c = hh.DELETE,
			s = a.dom,
			l = a.selection,
			f = a.settings,
			d = a.parser,
			h = Wn.gecko,
			m = Wn.ie,
			g = Wn.webkit,
			p = 'data:text/mce-internal,',
			v = m ? 'Text' : 'URL';
		function y(e) {
			var t = s.create('body'),
				n = e.cloneContents();
			return t.appendChild(n), l.serializer.serialize(t, { format: 'html' });
		}
		function b() {
			var e = s.getAttribs(l.getStart().cloneNode(!1));
			return function() {
				var t = l.getStart();
				t !== a.getBody() &&
					(s.setAttrib(t, 'style', null),
					o(e, function(e) {
						t.setAttributeNode(e.cloneNode(!0));
					}));
			};
		}
		function C() {
			return (
				!l.isCollapsed() &&
				s.getParent(l.getStart(), s.isBlock) !==
					s.getParent(l.getEnd(), s.isBlock)
			);
		}
		return (
			a.on('keydown', function(e) {
				var t, n, r, o, i;
				if (
					!u(e) &&
					e.keyCode === hh.BACKSPACE &&
					((n = (t = l.getRng()).startContainer),
					(r = t.startOffset),
					(o = s.getRoot()),
					(i = n),
					t.collapsed && 0 === r)
				) {
					for (
						;
						i &&
						i.parentNode &&
						i.parentNode.firstChild === i &&
						i.parentNode !== o;

					)
						i = i.parentNode;
					'BLOCKQUOTE' === i.tagName &&
						(a.formatter.toggle('blockquote', null, i),
						(t = s.createRng()).setStart(n, 0),
						t.setEnd(n, 0),
						l.setRng(t));
				}
			}),
			a.on('keydown', function(e) {
				var t,
					n,
					r = e.keyCode;
				if (!u(e) && (r === c || r === i)) {
					if (
						((t = a.selection.isCollapsed()),
						(n = a.getBody()),
						t && !s.isEmpty(n))
					)
						return;
					if (
						!t &&
						!(function(e) {
							var t = y(e),
								n = s.createRng();
							return n.selectNode(a.getBody()), t === y(n);
						})(a.selection.getRng())
					)
						return;
					e.preventDefault(),
						a.setContent(''),
						n.firstChild && s.isBlock(n.firstChild)
							? a.selection.setCursorLocation(n.firstChild, 0)
							: a.selection.setCursorLocation(n, 0),
						a.nodeChanged();
				}
			}),
			Wn.windowsPhone ||
				a.on(
					'keyup focusin mouseup',
					function(e) {
						hh.modifierPressed(e) || l.normalize();
					},
					!0
				),
			g &&
				(a.inline ||
					s.bind(a.getDoc(), 'mousedown mouseup', function(e) {
						var t;
						if (e.target === a.getDoc().documentElement)
							if (
								((t = l.getRng()), a.getBody().focus(), 'mousedown' === e.type)
							) {
								if (La(t.startContainer)) return;
								l.placeCaretAt(e.clientX, e.clientY);
							} else l.setRng(t);
					}),
				a.on('click', function(e) {
					var t = e.target;
					/^(IMG|HR)$/.test(t.nodeName) &&
						'false' !== s.getContentEditableParent(t) &&
						(e.preventDefault(), a.selection.select(t), a.nodeChanged()),
						'A' === t.nodeName &&
							s.hasClass(t, 'mce-item-anchor') &&
							(e.preventDefault(), l.select(t));
				}),
				f.forced_root_block &&
					a.on('init', function() {
						e('DefaultParagraphSeparator', as(a));
					}),
				a.on('init', function() {
					a.dom.bind(a.getBody(), 'submit', function(e) {
						e.preventDefault();
					});
				}),
				n(),
				d.addNodeFilter('br', function(e) {
					for (var t = e.length; t--; )
						'Apple-interchange-newline' === e[t].attr('class') && e[t].remove();
				}),
				Wn.iOS
					? (a.inline ||
							a.on('keydown', function() {
								j.document.activeElement === j.document.body &&
									a.getWin().focus();
							}),
					  r(),
					  a.on('click', function(e) {
							var t = e.target;
							do {
								if ('A' === t.tagName) return void e.preventDefault();
							} while ((t = t.parentNode));
					  }),
					  a.contentStyles.push(
							'.mce-content-body {-webkit-touch-callout: none}'
					  ))
					: t()),
			11 <= Wn.ie && (r(), n()),
			Wn.ie &&
				(t(),
				e('AutoUrlDetect', !1),
				a.on('dragstart', function(e) {
					!(function(e) {
						var t, n;
						e.dataTransfer &&
							(a.selection.isCollapsed() &&
								'IMG' === e.target.tagName &&
								l.select(e.target),
							0 < (t = a.selection.getContent()).length &&
								((n = p + escape(a.id) + ',' + escape(t)),
								e.dataTransfer.setData(v, n)));
					})(e);
				}),
				a.on('drop', function(e) {
					if (!u(e)) {
						var t = (function(e) {
							var t;
							return e.dataTransfer &&
								(t = e.dataTransfer.getData(v)) &&
								0 <= t.indexOf(p)
								? ((t = t.substr(p.length).split(',')),
								  { id: unescape(t[0]), html: unescape(t[1]) })
								: null;
						})(e);
						if (t && t.id !== a.id) {
							e.preventDefault();
							var n = pm(e.x, e.y, a.getDoc());
							l.setRng(n),
								(function(e, t) {
									a.queryCommandSupported('mceInsertClipboardContent')
										? a.execCommand('mceInsertClipboardContent', !1, {
												content: e,
												internal: t
										  })
										: a.execCommand('mceInsertContent', !1, e);
								})(t.html, !0);
						}
					}
				})),
			h &&
				(a.on('keydown', function(e) {
					if (!u(e) && e.keyCode === i) {
						if (!a.getBody().getElementsByTagName('hr').length) return;
						if (l.isCollapsed() && 0 === l.getRng().startOffset) {
							var t = l.getNode(),
								n = t.previousSibling;
							if ('HR' === t.nodeName)
								return s.remove(t), void e.preventDefault();
							n &&
								n.nodeName &&
								'hr' === n.nodeName.toLowerCase() &&
								(s.remove(n), e.preventDefault());
						}
					}
				}),
				j.Range.prototype.getClientRects ||
					a.on('mousedown', function(e) {
						if (!u(e) && 'HTML' === e.target.nodeName) {
							var t = a.getBody();
							t.blur(),
								Pn.setEditorTimeout(a, function() {
									t.focus();
								});
						}
					}),
				a.on('keypress', function(e) {
					var t;
					if (!u(e) && (8 === e.keyCode || 46 === e.keyCode) && C())
						return (
							(t = b()),
							a.getDoc().execCommand('delete', !1, null),
							t(),
							e.preventDefault(),
							!1
						);
				}),
				s.bind(a.getDoc(), 'cut', function(e) {
					var t;
					!u(e) &&
						C() &&
						((t = b()),
						Pn.setEditorTimeout(a, function() {
							t();
						}));
				}),
				f.readonly ||
					a.on('BeforeExecCommand mousedown', function() {
						e('StyleWithCSS', !1),
							e('enableInlineTableEditing', !1),
							f.object_resizing || e('enableObjectResizing', !1);
					}),
				a.on('SetContent ExecCommand', function(e) {
					('setcontent' !== e.type && 'mceInsertLink' !== e.command) ||
						o(s.select('a'), function(e) {
							var t = e.parentNode,
								n = s.getRoot();
							if (t.lastChild === e) {
								for (; t && !s.isBlock(t); ) {
									if (t.parentNode.lastChild !== t || t === n) return;
									t = t.parentNode;
								}
								s.add(t, 'br', { 'data-mce-bogus': 1 });
							}
						});
				}),
				a.contentStyles.push(
					'img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}'
				),
				Wn.mac &&
					a.on('keydown', function(e) {
						!hh.metaKeyPressed(e) ||
							e.shiftKey ||
							(37 !== e.keyCode && 39 !== e.keyCode) ||
							(e.preventDefault(),
							a.selection
								.getSel()
								.modify(
									'move',
									37 === e.keyCode ? 'backward' : 'forward',
									'lineboundary'
								));
					}),
				n()),
			{
				refreshContentEditable: function() {},
				isHidden: function() {
					var e;
					return (
						!(!h || a.removed) &&
						(!(e = a.selection.getSel()) || !e.rangeCount || 0 === e.rangeCount)
					);
				}
			}
		);
	}
	function Qx(e) {
		e.bindPendingEventDelegates(),
			(e.initialized = !0),
			(function(e) {
				e.fire('Init');
			})(e),
			e.focus(!0),
			(function(r) {
				var e = r.dom.getRoot();
				r.inline ||
					(Ph(r) && r.selection.getStart(!0) !== e) ||
					Ul.firstPositionIn(e).each(function(e) {
						var t = e.getNode(),
							n = Qt.isTable(t) ? Ul.firstPositionIn(t).getOr(e) : e;
						r.selection.setRng(n.toRange());
					});
			})(e),
			e.nodeChanged({ initial: !0 }),
			e.execCallback('init_instance_callback', e),
			(function(t) {
				t.settings.auto_focus &&
					Pn.setEditorTimeout(
						t,
						function() {
							var e;
							(e =
								!0 === t.settings.auto_focus
									? t
									: t.editorManager.get(t.settings.auto_focus)).destroyed ||
								e.focus();
						},
						100
					);
			})(e);
	}
	function ez(e, t) {
		var n = e.editorManager.translate('Rich Text Area. Press ALT-0 for help.'),
			r = (function(e, t, n, r) {
				var o = it.fromTag('iframe');
				return (
					Ke(o, r),
					Ke(o, {
						id: e + '_ifr',
						frameBorder: '0',
						allowTransparency: 'true',
						title: t
					}),
					va(o, 'tox-edit-area__iframe'),
					o
				);
			})(e.id, n, t.height, Qc(e)).dom();
		r.onload = function() {
			(r.onload = null), e.fire('load');
		};
		var o = (function(e, t) {
			if (
				j.document.domain !== j.window.location.hostname &&
				Wn.browser.isIE()
			) {
				var n = Gg('mce');
				e[n] = function() {
					Dz(e);
				};
				var r =
					'javascript:(function(){document.open();document.domain="' +
					j.document.domain +
					'";var ed = window.parent.tinymce.get("' +
					e.id +
					'");document.write(ed.iframeHTML);document.close();ed.' +
					n +
					'(true);})()';
				return Oz.setAttrib(t, 'src', r), !0;
			}
			return !1;
		})(e, r);
		return (
			(e.contentAreaContainer = t.iframeContainer),
			(e.iframeElement = r),
			(e.iframeHTML = (function(e) {
				var t, n, r;
				return (
					(r = es(e) + '<html><head>'),
					ts(e) !== e.documentBaseUrl &&
						(r += '<base href="' + e.documentBaseURI.getURI() + '" />'),
					(r +=
						'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'),
					(t = ns(e)),
					(n = rs(e)),
					os(e) &&
						(r +=
							'<meta http-equiv="Content-Security-Policy" content="' +
							os(e) +
							'" />'),
					(r +=
						'</head><body id="' +
						t +
						'" class="mce-content-body ' +
						n +
						'" data-id="' +
						e.id +
						'"><br></body></html>')
				);
			})(e)),
			Oz.add(t.iframeContainer, r),
			o
		);
	}
	function tz(e) {
		return e.replace(/^\-/, '');
	}
	function nz(e) {
		return { editorContainer: e, iframeContainer: e };
	}
	function rz(e) {
		var t = e.getElement();
		return e.inline
			? nz(null)
			: (function(e) {
					var t = Bz.create('div');
					return Bz.insertAfter(t, e), nz(t);
			  })(t);
	}
	function oz(e) {
		return '-' === e.charAt(0);
	}
	function iz(t, n) {
		(function(e) {
			return R.from(gs(e))
				.filter(function(e) {
					return 0 < e.length;
				})
				.map(function(e) {
					return { url: e, name: R.none() };
				});
		})(n)
			.orThunk(function() {
				return (function(t) {
					return R.from(ms(t))
						.filter(function(e) {
							return 0 < e.length && !$d.has(e);
						})
						.map(function(e) {
							return {
								url: t.editorManager.baseURL + '/icons/' + e + '/icons.js',
								name: R.some(e)
							};
						});
				})(n);
			})
			.each(function(e) {
				t.add(e.url, i, undefined, function() {
					ch.iconsLoadError(n, e.url, e.name.getOrUndefined());
				});
			});
	}
	function az(e, t) {
		var n = ra.ScriptLoader;
		!(function(e, t, n, r) {
			var o = t.settings,
				i = o.theme;
			if (K(i)) {
				if (!oz(i) && !eh.urls.hasOwnProperty(i)) {
					var a = o.theme_url;
					a
						? eh.load(i, t.documentBaseURI.toAbsolute(a))
						: eh.load(i, 'themes/' + i + '/theme' + n + '.js');
				}
				e.loadQueue(function() {
					eh.waitFor(i, r);
				});
			} else r();
		})(n, e, t, function() {
			!(function(e, t) {
				var n = Ss(t),
					r = ks(t);
				if (!1 === sa.hasCode(n) && 'en' !== n) {
					var o =
						'' !== r ? r : t.editorManager.baseURL + '/langs/' + n + '.js';
					e.add(o, i, undefined, function() {
						ch.languageLoadError(t, o, n);
					});
				}
			})(n, e),
				iz(n, e),
				(function(r, n, o) {
					D(n.plugins) && (n.plugins = n.plugins.join(' ')),
						Zn.each(n.external_plugins, function(e, t) {
							Qd.load(t, e, i, undefined, function() {
								ch.pluginLoadError(r, e, t);
							}),
								(n.plugins += ' ' + t);
						}),
						Zn.each(n.plugins.split(/[ ,]/), function(e) {
							if ((e = Zn.trim(e)) && !Qd.urls[e])
								if (oz(e)) {
									e = e.substr(1, e.length);
									var t = Qd.dependencies(e);
									Zn.each(t, function(e) {
										var t = {
												prefix: 'plugins/',
												resource: e,
												suffix: '/plugin' + o + '.js'
											},
											n = Qd.createUrl(t, e);
										Qd.load(n.resource, n, i, undefined, function() {
											ch.pluginLoadError(
												r,
												n.prefix + n.resource + n.suffix,
												n.resource
											);
										});
									});
								} else {
									var n = {
										prefix: 'plugins/',
										resource: e,
										suffix: '/plugin' + o + '.js'
									};
									Qd.load(e, n, i, undefined, function() {
										ch.pluginLoadError(r, n.prefix + n.resource + n.suffix, e);
									});
								}
						});
				})(e, e.settings, t),
				n.loadQueue(
					function() {
						e.removed || Lz(e);
					},
					e,
					function() {
						e.removed || Lz(e);
					}
				);
		});
	}
	function uz(e, t) {
		return (
			e.getBlockElements()[t.name] &&
			(function(e) {
				return e.firstChild && e.firstChild === e.lastChild;
			})(t) &&
			(function(e) {
				return 'br' === e.name || e.value === qr;
			})(t.firstChild)
		);
	}
	function cz(e) {
		return Zn.grep(e.childNodes, function(e) {
			return 'LI' === e.nodeName;
		});
	}
	function sz(e) {
		return (
			e &&
			e.firstChild &&
			e.firstChild === e.lastChild &&
			(function(e) {
				return e.data === qr || Qt.isBr(e);
			})(e.firstChild)
		);
	}
	function lz(e) {
		return 0 < e.length &&
			(function(e) {
				return !e.firstChild || sz(e);
			})(e[e.length - 1])
			? e.slice(0, -1)
			: e;
	}
	function fz(e, t) {
		var n = e.getParent(t, e.isBlock);
		return n && 'LI' === n.nodeName ? n : null;
	}
	function dz(e, t) {
		var n = Vc.after(e),
			r = Xs(t).prev(n);
		return r ? r.toRange() : null;
	}
	function hz(t, e, n) {
		var r = t.parentNode;
		return (
			Zn.each(e, function(e) {
				r.insertBefore(e, t);
			}),
			(function(e, t) {
				var n = Vc.before(e),
					r = Xs(t).next(n);
				return r ? r.toRange() : null;
			})(t, n)
		);
	}
	function mz(e, t) {
		var n = e.selection.getRng(),
			r = n.startContainer,
			o = n.startOffset;
		n.collapsed &&
			(function(e, t) {
				return Qt.isText(e) && e.nodeValue[t - 1] === qr;
			})(r, o) &&
			Qt.isText(r) &&
			(r.insertData(o - 1, ' '),
			r.deleteData(o, 1),
			n.setStart(r, o),
			n.setEnd(r, o),
			e.selection.setRng(n)),
			e.selection.setContent(t);
	}
	function gz(e, t, n) {
		var r,
			o,
			i,
			a,
			u,
			c,
			s,
			l,
			f,
			d,
			h,
			m = e.selection,
			g = e.dom;
		if (
			(/^ | $/.test(t) &&
				(t = (function(e, t) {
					var n, r;
					(n = e.startContainer), (r = e.startOffset);
					function o(e) {
						return n[e] && 3 === n[e].nodeType;
					}
					return (
						3 === n.nodeType &&
							(0 < r
								? (t = t.replace(/^&nbsp;/, ' '))
								: o('previousSibling') || (t = t.replace(/^ /, '&nbsp;')),
							r < n.length
								? (t = t.replace(/&nbsp;(<br>|)$/, ' '))
								: o('nextSibling') ||
								  (t = t.replace(/(&nbsp;| )(<br>|)$/, '&nbsp;'))),
						t
					);
				})(m.getRng(), t)),
			(r = e.parser),
			(h = n.merge),
			(o = wf({ validate: e.settings.validate }, e.schema)),
			(d =
				'<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>'),
			(c = { content: t, format: 'html', selection: !0, paste: n.paste }),
			(c = e.fire('BeforeSetContent', c)).isDefaultPrevented())
		)
			e.fire('SetContent', {
				content: c.content,
				format: 'html',
				selection: !0,
				paste: n.paste
			});
		else {
			-1 === (t = c.content).indexOf('{$caret}') && (t += '{$caret}'),
				(t = t.replace(/\{\$caret\}/, d));
			var p =
					(l = m.getRng()).startContainer ||
					(l.parentElement ? l.parentElement() : null),
				v = e.getBody();
			p === v &&
				m.isCollapsed() &&
				g.isBlock(v.firstChild) &&
				(function(e, t) {
					return t && !e.schema.getShortEndedElements()[t.nodeName];
				})(e, v.firstChild) &&
				g.isEmpty(v.firstChild) &&
				((l = g.createRng()).setStart(v.firstChild, 0),
				l.setEnd(v.firstChild, 0),
				m.setRng(l)),
				m.isCollapsed() ||
					(e.selection.setRng(Bp(e.selection.getRng())),
					e.getDoc().execCommand('Delete', !1, null),
					(t = (function(e, t) {
						var n, r;
						return (
							(n = e.startContainer),
							(r = e.startOffset),
							3 === n.nodeType &&
								e.collapsed &&
								(n.data[r] === qr
									? (n.deleteData(r, 1), /[\u00a0| ]$/.test(t) || (t += ' '))
									: n.data[r - 1] === qr &&
									  (n.deleteData(r - 1, 1),
									  /[\u00a0| ]$/.test(t) || (t = ' ' + t))),
							t
						);
					})(e.selection.getRng(), t)));
			var y = {
				context: (i = m.getNode()).nodeName.toLowerCase(),
				data: n.data,
				insert: !0
			};
			if (((u = r.parse(t, y)), !0 === n.paste && Fz(e.schema, u) && jz(g, i)))
				return (
					(l = Uz(o, g, e.selection.getRng(), u)),
					e.selection.setRng(l),
					void e.fire('SetContent', c)
				);
			if (
				((function(e) {
					for (var t = e; (t = t.walk()); )
						1 === t.type && t.attr('data-mce-fragment', '1');
				})(u),
				'mce_marker' === (f = u.lastChild).attr('id'))
			)
				for (f = (s = f).prev; f; f = f.walk(!0))
					if (3 === f.type || !g.isBlock(f.name)) {
						e.schema.isValidChild(f.parent.name, 'span') &&
							f.parent.insert(s, f, 'br' === f.name);
						break;
					}
			if ((e._selectionOverrides.showBlockCaretContainer(i), y.invalid)) {
				for (
					mz(e, d),
						i = m.getNode(),
						a = e.getBody(),
						9 === i.nodeType ? (i = f = a) : (f = i);
					f !== a;

				)
					f = (i = f).parentNode;
				(t = i === a ? a.innerHTML : g.getOuterHTML(i)),
					(t = o.serialize(
						r.parse(
							t.replace(
								/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,
								function() {
									return o.serialize(u);
								}
							)
						)
					)),
					i === a ? g.setHTML(a, t) : g.setOuterHTML(i, t);
			} else
				!(function(e, t, n) {
					if ('all' === n.getAttribute('data-mce-bogus'))
						n.parentNode.insertBefore(e.dom.createFragment(t), n);
					else {
						var r = n.firstChild,
							o = n.lastChild;
						!r || (r === o && 'BR' === r.nodeName)
							? e.dom.setHTML(n, t)
							: mz(e, t);
					}
				})(e, (t = o.serialize(u)), i);
			!(function(e, t) {
				var n = e.schema.getTextInlineElements(),
					r = e.dom;
				if (t) {
					var o = e.getBody(),
						i = new dp(r);
					Zn.each(r.select('*[data-mce-fragment]'), function(e) {
						for (var t = e.parentNode; t && t !== o; t = t.parentNode)
							n[e.nodeName.toLowerCase()] && i.compare(t, e) && r.remove(e, !0);
					});
				}
			})(e, h),
				(function(n, e) {
					var t,
						r,
						o,
						i,
						a,
						u = n.dom,
						c = n.selection;
					if (e) {
						if (
							(n.selection.scrollIntoView(e),
							(t = (function(e) {
								for (var t = n.getBody(); e && e !== t; e = e.parentNode)
									if ('false' === n.dom.getContentEditable(e)) return e;
								return null;
							})(e)))
						)
							return u.remove(e), c.select(t);
						var s = u.createRng();
						(i = e.previousSibling) && 3 === i.nodeType
							? (s.setStart(i, i.nodeValue.length),
							  Wn.ie ||
									((a = e.nextSibling) &&
										3 === a.nodeType &&
										(i.appendData(a.data), a.parentNode.removeChild(a))))
							: (s.setStartBefore(e), s.setEndBefore(e));
						(r = u.getParent(e, u.isBlock)),
							u.remove(e),
							r &&
								u.isEmpty(r) &&
								(n.$(r).empty(),
								s.setStart(r, 0),
								s.setEnd(r, 0),
								qz(r) ||
								(function(e) {
									return !!e.getAttribute('data-mce-fragment');
								})(r) ||
								!(o = (function(e) {
									var t = Vc.fromRangeStart(e);
									if ((t = Xs(n.getBody()).next(t))) return t.toRange();
								})(s))
									? u.add(r, u.create('br', { 'data-mce-bogus': '1' }))
									: ((s = o), u.remove(r))),
							c.setRng(s);
					}
				})(e, g.get('mce_marker')),
				(function(e) {
					Zn.each(e.getElementsByTagName('*'), function(e) {
						e.removeAttribute('data-mce-fragment');
					});
				})(e.getBody()),
				(function(e, t) {
					R.from(e.getParent(t, 'td,th'))
						.map(it.fromDom)
						.each(Qg);
				})(e.dom, e.selection.getStart()),
				e.fire('SetContent', c),
				e.addVisual();
		}
	}
	function pz(e, t) {
		e.getDoc().execCommand(t, !1, null);
	}
	function vz(e, t, n) {
		return t(e).orThunk(function() {
			return n(e)
				? R.none()
				: (function(e, t, n) {
						for (var r = e.dom(), o = B(n) ? n : $(!1); r.parentNode; ) {
							r = r.parentNode;
							var i = it.fromDom(r),
								a = t(i);
							if (a.isSome()) return a;
							if (o(i)) break;
						}
						return R.none();
				  })(e, t, n);
		});
	}
	function yz(e, t, n) {
		function r(t) {
			return Ze(t, e).orThunk(function() {
				return 'font' === Oe(t)
					? A(Xz, e).bind(function(e) {
							return (function(e, t) {
								return R.from(Xe(e, t));
							})(t, e);
					  })
					: R.none();
			});
		}
		return vz(
			it.fromDom(n),
			function(e) {
				return r(e);
			},
			function(e) {
				return pe(it.fromDom(t), e);
			}
		);
	}
	function bz(n) {
		return function(t, e) {
			return R.from(e)
				.map(it.fromDom)
				.filter(Pt)
				.bind(function(e) {
					return yz(n, t, e.dom()).or(
						(function(e, t) {
							return R.from(Qi.DOM.getStyle(t, e, !0));
						})(n, e.dom())
					);
				})
				.getOr('');
		};
	}
	function Cz(e) {
		return Ul.firstPositionIn(e.getBody()).map(function(e) {
			var t = e.container();
			return Qt.isText(t) ? t.parentNode : t;
		});
	}
	function wz(t) {
		return R.from(t.selection.getRng()).bind(function(e) {
			return (function(e, t) {
				return e.startContainer === t && 0 === e.startOffset;
			})(e, t.getBody())
				? R.none()
				: R.from(t.selection.getStart(!0));
		});
	}
	function xz(e, t) {
		if (/^[0-9\.]+$/.test(t)) {
			var n = parseInt(t, 10);
			if (1 <= n && n <= 7) {
				var r = ds(e),
					o = hs(e);
				return o ? o[n - 1] || t : r[n - 1] || t;
			}
			return t;
		}
		return t;
	}
	function zz(e, t) {
		var n = xz(e, t);
		e.formatter.toggle('fontname', {
			value: (function(e) {
				var t = e.split(/\s*,\s*/);
				return X(t, function(e) {
					return -1 === e.indexOf(' ') || ue(e, '"') || ue(e, "'")
						? e
						: "'" + e + "'";
				}).join(',');
			})(n)
		}),
			e.nodeChanged();
	}
	var Ez = function(e, t) {
			return (function(e, t, n) {
				return {
					pageX: n.left - e.left + t.left,
					pageY: n.top - e.top + t.top
				};
			})(
				(function(e) {
					return e.inline ? $x(e.getBody()) : { left: 0, top: 0 };
				})(e),
				(function(e) {
					var t = e.getBody();
					return e.inline
						? { left: t.scrollLeft, top: t.scrollTop }
						: { left: 0, top: 0 };
				})(e),
				(function(e, t) {
					if (t.target.ownerDocument === e.getDoc())
						return { left: t.pageX, top: t.pageY };
					var n = $x(e.getContentAreaContainer()),
						r = (function(e) {
							var t = e.getBody(),
								n = e.getDoc().documentElement,
								r = { left: t.scrollLeft, top: t.scrollTop },
								o = {
									left: t.scrollLeft || n.scrollLeft,
									top: t.scrollTop || n.scrollTop
								};
							return e.inline ? r : o;
						})(e);
					return {
						left: t.pageX - n.left + r.left,
						top: t.pageY - n.top + r.top
					};
				})(e, t)
			);
		},
		Nz = Qt.isContentEditableFalse,
		Sz = Qt.isContentEditableTrue,
		kz = function(e) {
			(e.dragging = !1), (e.element = null), Wx(e.ghost);
		},
		Tz = function(e) {
			Yx(e),
				(function(n) {
					n.on('drop', function(e) {
						var t =
							'undefined' != typeof e.clientX
								? n.getDoc().elementFromPoint(e.clientX, e.clientY)
								: null;
						(Nz(t) || Nz(n.dom.getContentEditableParent(t))) &&
							e.preventDefault();
					});
				})(e);
		},
		Az = function(t) {
			var e = fa(function() {
				if (
					!t.removed &&
					t.getBody().contains(j.document.activeElement) &&
					t.selection.getRng().collapsed
				) {
					var e = _y(t, t.selection.getRng(), !1);
					t.selection.setRng(e);
				}
			}, 0);
			t.on('focus', function() {
				e.throttle();
			}),
				t.on('blur', function() {
					e.cancel();
				});
		},
		Mz = Qt.isContentEditableTrue,
		Rz = Qt.isContentEditableFalse,
		_z = Qi.DOM,
		Dz = function(t, e) {
			var n,
				r,
				o = t.settings,
				i = t.getElement(),
				a = t.getDoc();
			o.inline || (t.getElement().style.visibility = t.orgVisibility),
				e || t.inline || (a.open(), a.write(t.iframeHTML), a.close()),
				t.inline &&
					(t.on('remove', function() {
						var e = this.getBody();
						_z.removeClass(e, 'mce-content-body'),
							_z.removeClass(e, 'mce-edit-focus'),
							_z.setAttrib(e, 'contentEditable', null);
					}),
					_z.addClass(i, 'mce-content-body'),
					(t.contentDocument = a = j.document),
					(t.contentWindow = j.window),
					(t.bodyElement = i),
					(t.contentAreaContainer = i),
					(o.root_name = i.nodeName.toLowerCase())),
				((n = t.getBody()).disabled = !0),
				(t.readonly = o.readonly),
				t.readonly ||
					(t.inline &&
						'static' === _z.getStyle(n, 'position', !0) &&
						(n.style.position = 'relative'),
					(n.contentEditable = t.getParam('content_editable_state', !0))),
				(n.disabled = !1),
				(t.editorUpload = hg(t)),
				(t.schema = Pr(o)),
				(t.dom = Qi(a, {
					keep_values: !0,
					url_converter: t.convertURL,
					url_converter_scope: t,
					hex_colors: o.force_hex_style_colors,
					update_styles: !0,
					root_element: t.inline ? t.getBody() : null,
					collect: function() {
						return t.inline;
					},
					schema: t.schema,
					contentCssCors: Es(t),
					referrerPolicy: Ns(t),
					onSetAttrib: function(e) {
						t.fire('SetAttrib', e);
					}
				})),
				(t.parser = (function(u) {
					var e = $m(u.settings, u.schema);
					return (
						e.addAttributeFilter('src,href,style,tabindex', function(e, t) {
							for (var n, r, o, i = e.length, a = u.dom; i--; )
								if (
									((r = (n = e[i]).attr(t)), (o = 'data-mce-' + t), !n.attr(o))
								) {
									if (0 === r.indexOf('data:') || 0 === r.indexOf('blob:'))
										continue;
									'style' === t
										? ((r = a.serializeStyle(a.parseStyle(r), n.name)).length ||
												(r = null),
										  n.attr(o, r),
										  n.attr(t, r))
										: 'tabindex' === t
										? (n.attr(o, r), n.attr(t, null))
										: n.attr(o, u.convertURL(r, t, n.name));
								}
						}),
						e.addNodeFilter('script', function(e) {
							for (var t, n, r = e.length; r--; )
								0 !==
									(n = (t = e[r]).attr('type') || 'no/type').indexOf('mce-') &&
									t.attr('type', 'mce-' + n);
						}),
						u.settings.preserve_cdata &&
							e.addNodeFilter('#cdata', function(e) {
								for (var t, n = e.length; n--; )
									((t = e[n]).type = 8),
										(t.name = '#comment'),
										(t.value = '[CDATA[' + u.dom.encode(t.value) + ']]');
							}),
						e.addNodeFilter('p,h1,h2,h3,h4,h5,h6,div', function(e) {
							for (
								var t, n = e.length, r = u.schema.getNonEmptyElements();
								n--;

							)
								(t = e[n]).isEmpty(r) &&
									0 === t.getAll('br').length &&
									(t.append(new hf('br', 1)).shortEnded = !0);
						}),
						e
					);
				})(t)),
				(t.serializer = Ym(o, t)),
				(t.selection = Im(t.dom, t.getWin(), t.serializer, t)),
				(t.annotator = uf(t)),
				(t.formatter = Wp(t)),
				(t.undoManager = nv(t)),
				(t._nodeChangeDispatcher = new Ix(t)),
				(t._selectionOverrides = Zx(t)),
				ry(t),
				Ux(t),
				qx(t),
				Vx(t),
				oy(t),
				iv(t),
				(function(e) {
					e.fire('PreInit');
				})(t),
				o.browser_spellcheck ||
					o.gecko_spellcheck ||
					((a.body.spellcheck = !1), _z.setAttrib(n, 'spellcheck', 'false')),
				(t.quirks = Jx(t)),
				(function(e) {
					e.fire('PostRender');
				})(t);
			var u = Rs(t);
			u !== undefined && (n.dir = u),
				o.protect &&
					t.on('BeforeSetContent', function(t) {
						Zn.each(o.protect, function(e) {
							t.content = t.content.replace(e, function(e) {
								return '\x3c!--mce:protected ' + escape(e) + '--\x3e';
							});
						});
					}),
				t.on('SetContent', function() {
					t.addVisual(t.getBody());
				}),
				t.load({ initial: !0, format: 'html' }),
				(t.startContent = t.getContent({ format: 'raw' })),
				t.on('compositionstart compositionend', function(e) {
					t.composing = 'compositionstart' === e.type;
				}),
				0 < t.contentStyles.length &&
					((r = ''),
					Zn.each(t.contentStyles, function(e) {
						r += e + '\r\n';
					}),
					t.dom.addStyle(r)),
				(function(e) {
					return e.inline ? _z.styleSheetLoader : e.dom.styleSheetLoader;
				})(t).loadAll(
					t.contentCSS,
					function(e) {
						Qx(t);
					},
					function(e) {
						Qx(t);
					}
				),
				o.content_style &&
					(function(e, t) {
						var n = it.fromDom(e.getDoc().head),
							r = it.fromTag('style');
						en(r, 'type', 'text/css'), Ht(r, it.fromText(t)), Ht(n, r);
					})(t, o.content_style);
		},
		Oz = Qi.DOM,
		Hz = function(e, t) {
			var n = ez(e, t);
			t.editorContainer &&
				((Oz.get(t.editorContainer).style.display = e.orgDisplay),
				(e.hidden = Oz.isHidden(t.editorContainer))),
				(e.getElement().style.display = 'none'),
				Oz.setAttrib(e.id, 'aria-hidden', 'true'),
				n || Dz(e);
		},
		Bz = Qi.DOM,
		Pz = function(t, n, e) {
			var r = Qd.get(e),
				o = Qd.urls[e] || t.documentBaseUrl.replace(/\/$/, '');
			if (((e = Zn.trim(e)), r && -1 === Zn.inArray(n, e))) {
				if (
					(Zn.each(Qd.dependencies(e), function(e) {
						Pz(t, n, e);
					}),
					t.plugins[e])
				)
					return;
				try {
					var i = new r(t, o, t.$);
					(t.plugins[e] = i).init && (i.init(t, o), n.push(e));
				} catch (HN) {
					ch.pluginInitError(t, e, HN);
				}
			}
		},
		Lz = function(e) {
			e.fire('ScriptsLoaded'),
				(function(n) {
					var e = Zn.trim(n.settings.icons),
						r = n.ui.registry.getAll().icons,
						t = te(
							te(
								{},
								{
									'accessibility-check':
										'<svg width="24" height="24"><path d="M12 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2zm8 7h-5v12c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-5c0-.6-.4-1-1-1a1 1 0 0 0-1 1v5c0 .6-.4 1-1 1a1 1 0 0 1-1-1V9H4a1 1 0 1 1 0-2h16c.6 0 1 .4 1 1s-.4 1-1 1z" fill-rule="nonzero"/></svg>',
									'action-next':
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M5.7 7.3a1 1 0 0 0-1.4 1.4l7.7 7.7 7.7-7.7a1 1 0 1 0-1.4-1.4L12 13.6 5.7 7.3z"/></svg>',
									'action-prev':
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M18.3 15.7a1 1 0 0 0 1.4-1.4L12 6.6l-7.7 7.7a1 1 0 0 0 1.4 1.4L12 9.4l6.3 6.3z"/></svg>',
									'align-center':
										'<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 1 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
									'align-justify':
										'<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
									'align-left':
										'<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
									'align-none':
										'<svg width="24" height="24"><path d="M14.2 5L13 7H5a1 1 0 1 1 0-2h9.2zm4 0h.8a1 1 0 0 1 0 2h-2l1.2-2zm-6.4 4l-1.2 2H5a1 1 0 0 1 0-2h6.8zm4 0H19a1 1 0 0 1 0 2h-4.4l1.2-2zm-6.4 4l-1.2 2H5a1 1 0 0 1 0-2h4.4zm4 0H19a1 1 0 0 1 0 2h-6.8l1.2-2zM7 17l-1.2 2H5a1 1 0 0 1 0-2h2zm4 0h8a1 1 0 0 1 0 2H9.8l1.2-2zm5.2-13.5l1.3.7-9.7 16.3-1.3-.7 9.7-16.3z" fill-rule="evenodd"/></svg>',
									'align-right':
										'<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
									'arrow-left':
										'<svg width="24" height="24"><path d="M5.6 13l12 6a1 1 0 0 0 1.4-1V6a1 1 0 0 0-1.4-.9l-12 6a1 1 0 0 0 0 1.8z" fill-rule="evenodd"/></svg>',
									'arrow-right':
										'<svg width="24" height="24"><path d="M18.5 13l-12 6A1 1 0 0 1 5 18V6a1 1 0 0 1 1.4-.9l12 6a1 1 0 0 1 0 1.8z" fill-rule="evenodd"/></svg>',
									bold:
										'<svg width="24" height="24"><path d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 0 1-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z" fill-rule="evenodd"/></svg>',
									bookmark:
										'<svg width="24" height="24"><path d="M6 4v17l6-4 6 4V4c0-.6-.4-1-1-1H7a1 1 0 0 0-1 1z" fill-rule="nonzero"/></svg>',
									'border-width':
										'<svg width="24" height="24"><path d="M5 14.8h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm-.5 3.7h15c.3 0 .5.2.5.5s-.2.5-.5.5h-15a.5.5 0 1 1 0-1zm.5-8.3h14c.6 0 1 .4 1 1v1c0 .5-.4 1-1 1H5a1 1 0 0 1-1-1v-1c0-.6.4-1 1-1zm0-5.7h14c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1v-2c0-.6.4-1 1-1z" fill-rule="evenodd"/></svg>',
									brightness:
										'<svg width="24" height="24"><path d="M12 17c.3 0 .5.1.7.3.2.2.3.4.3.7v1c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7v-1c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3zm0-10a1 1 0 0 1-.7-.3A1 1 0 0 1 11 6V5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7v1c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3zm7 4c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3h-1a1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h1zM7 12c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3H5a1 1 0 0 1-.7-.3A1 1 0 0 1 4 12c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h1c.3 0 .5.1.7.3.2.2.3.4.3.7zm10 3.5l.7.8c.2.1.3.4.3.6 0 .3-.1.6-.3.8a1 1 0 0 1-.8.3 1 1 0 0 1-.6-.3l-.8-.7a1 1 0 0 1-.3-.8c0-.2.1-.5.3-.7a1 1 0 0 1 1.4 0zm-10-7l-.7-.8a1 1 0 0 1-.3-.6c0-.3.1-.6.3-.8.2-.2.5-.3.8-.3.2 0 .5.1.7.3l.7.7c.2.2.3.5.3.8 0 .2-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.8-.3zm10 0a1 1 0 0 1-.8.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.3.1-.6.3-.8l.8-.7c.1-.2.4-.3.6-.3.3 0 .6.1.8.3.2.2.3.5.3.8 0 .2-.1.5-.3.7l-.7.7zm-10 7c.2-.2.5-.3.8-.3.2 0 .5.1.7.3a1 1 0 0 1 0 1.4l-.8.8a1 1 0 0 1-.6.3 1 1 0 0 1-.8-.3 1 1 0 0 1-.3-.8c0-.2.1-.5.3-.6l.7-.8zM12 8a4 4 0 0 1 3.7 2.4 4 4 0 0 1 0 3.2A4 4 0 0 1 12 16a4 4 0 0 1-3.7-2.4 4 4 0 0 1 0-3.2A4 4 0 0 1 12 8zm0 6.5c.7 0 1.3-.2 1.8-.7.5-.5.7-1.1.7-1.8s-.2-1.3-.7-1.8c-.5-.5-1.1-.7-1.8-.7s-1.3.2-1.8.7c-.5.5-.7 1.1-.7 1.8s.2 1.3.7 1.8c.5.5 1.1.7 1.8.7z" fill-rule="evenodd"/></svg>',
									browse:
										'<svg width="24" height="24"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4v-2h4V8H5v10h4v2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zm-8 9.4l-2.3 2.3a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L13 13.4V20a1 1 0 0 1-2 0v-6.6z" fill-rule="nonzero"/></svg>',
									cancel:
										'<svg width="24" height="24"><path d="M12 4.6a7.4 7.4 0 1 1 0 14.8 7.4 7.4 0 0 1 0-14.8zM12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 8L14.8 8l1 1.1-2.7 2.8 2.7 2.7-1.1 1.1-2.7-2.7-2.7 2.7-1-1.1 2.6-2.7-2.7-2.7 1-1.1 2.8 2.7z" fill-rule="nonzero"/></svg>',
									'change-case':
										'<svg width="24" height="24"><path d="M18.4 18.2v-.6c-.5.8-1.3 1.2-2.4 1.2-2.2 0-3.3-1.6-3.3-4.8 0-3.1 1-4.7 3.3-4.7 1.1 0 1.8.3 2.4 1.1v-.6c0-.5.4-.8.8-.8s.8.3.8.8v8.4c0 .5-.4.8-.8.8a.8.8 0 0 1-.8-.8zm-2-7.4c-1.3 0-1.8.9-1.8 3.2 0 2.4.5 3.3 1.7 3.3 1.3 0 1.8-.9 1.8-3.2 0-2.4-.5-3.3-1.7-3.3zM10 15.7H5.5l-.8 2.6a1 1 0 0 1-1 .7h-.2a.7.7 0 0 1-.7-1l4-12a1 1 0 1 1 2 0l4 12a.7.7 0 0 1-.8 1h-.2a1 1 0 0 1-1-.7l-.8-2.6zm-.3-1.5l-2-6.5-1.9 6.5h3.9z" fill-rule="evenodd"/></svg>',
									'character-count':
										'<svg width="24" height="24"><path d="M4 11.5h16v1H4v-1zm4.8-6.8V10H7.7V5.8h-1v-1h2zM11 8.3V9h2v1h-3V7.7l2-1v-.9h-2v-1h3v2.4l-2 1zm6.3-3.4V10h-3.1V9h2.1V8h-2.1V6.8h2.1v-1h-2.1v-1h3.1zM5.8 16.4c0-.5.2-.8.5-1 .2-.2.6-.3 1.2-.3l.8.1c.2 0 .4.2.5.3l.4.4v2.8l.2.3H8.2v-.1-.2l-.6.3H7c-.4 0-.7 0-1-.2a1 1 0 0 1-.3-.9c0-.3 0-.6.3-.8.3-.2.7-.4 1.2-.4l.6-.2h.3v-.2l-.1-.2a.8.8 0 0 0-.5-.1 1 1 0 0 0-.4 0l-.3.4h-1zm2.3.8h-.2l-.2.1-.4.1a1 1 0 0 0-.4.2l-.2.2.1.3.5.1h.4l.4-.4v-.6zm2-3.4h1.2v1.7l.5-.3h.5c.5 0 .9.1 1.2.5.3.4.5.8.5 1.4 0 .6-.2 1.1-.5 1.5-.3.4-.7.6-1.3.6l-.6-.1-.4-.4v.4h-1.1v-5.4zm1.1 3.3c0 .3 0 .6.2.8a.7.7 0 0 0 1.2 0l.2-.8c0-.4 0-.6-.2-.8a.7.7 0 0 0-.6-.3l-.6.3-.2.8zm6.1-.5c0-.2 0-.3-.2-.4a.8.8 0 0 0-.5-.2c-.3 0-.5.1-.6.3l-.2.9c0 .3 0 .6.2.8.1.2.3.3.6.3.2 0 .4 0 .5-.2l.2-.4h1.1c0 .5-.3.8-.6 1.1a2 2 0 0 1-1.3.4c-.5 0-1-.2-1.3-.6a2 2 0 0 1-.5-1.4c0-.6.1-1.1.5-1.5.3-.4.8-.5 1.4-.5.5 0 1 0 1.2.3.4.3.5.7.5 1.2h-1v-.1z" fill-rule="evenodd"/></svg>',
									'checklist-rtl':
										'<svg width="24" height="24"><path d="M5 17h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm14.2 11c.2-.4.6-.5.9-.3.3.2.4.6.2 1L18 20c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L18 14c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L18 8c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8z" fill-rule="evenodd"/></svg>',
									checklist:
										'<svg width="24" height="24"><path d="M11 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2zM7.2 16c.2-.4.6-.5.9-.3.3.2.4.6.2 1L6 20c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L6 14c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L6 8c-.2.3-.7.4-1 0L3.8 6.9a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8z" fill-rule="evenodd"/></svg>',
									checkmark:
										'<svg width="24" height="24"><path d="M18.2 5.4a1 1 0 0 1 1.6 1.2l-8 12a1 1 0 0 1-1.5.1l-5-5a1 1 0 1 1 1.4-1.4l4.1 4.1 7.4-11z" fill-rule="nonzero"/></svg>',
									'chevron-down':
										'<svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"/></svg>',
									'chevron-left':
										'<svg width="10" height="10"><path d="M7.8 1.3L4 5l3.8 3.7c.3.3.3.8 0 1-.4.4-.9.4-1.2 0L2.2 5.7a.8.8 0 0 1 0-1.2L6.6.2C7 0 7.4 0 7.8.2c.3.3.3.8 0 1.1z" fill-rule="nonzero"/></svg>',
									'chevron-right':
										'<svg width="10" height="10"><path d="M2.2 1.3a.8.8 0 0 1 0-1c.4-.4.9-.4 1.2 0l4.4 4.1c.3.4.3.9 0 1.2L3.4 9.8c-.3.3-.8.3-1.2 0a.8.8 0 0 1 0-1.1L6 5 2.2 1.3z" fill-rule="nonzero"/></svg>',
									'chevron-up':
										'<svg width="10" height="10"><path d="M8.7 7.8L5 4 1.3 7.8c-.3.3-.8.3-1 0a.8.8 0 0 1 0-1.2l4.1-4.4c.3-.3.9-.3 1.2 0l4.2 4.4c.3.3.3.9 0 1.2-.3.3-.8.3-1.1 0z" fill-rule="nonzero"/></svg>',
									close:
										'<svg width="24" height="24"><path d="M17.3 8.2L13.4 12l3.9 3.8a1 1 0 0 1-1.5 1.5L12 13.4l-3.8 3.9a1 1 0 0 1-1.5-1.5l3.9-3.8-3.9-3.8a1 1 0 0 1 1.5-1.5l3.8 3.9 3.8-3.9a1 1 0 0 1 1.5 1.5z" fill-rule="evenodd"/></svg>',
									'code-sample':
										'<svg width="24" height="26"><path d="M7.1 11a2.8 2.8 0 0 1-.8 2 2.8 2.8 0 0 1 .8 2v1.7c0 .3.1.6.4.8.2.3.5.4.8.4.3 0 .4.2.4.4v.8c0 .2-.1.4-.4.4-.7 0-1.4-.3-2-.8-.5-.6-.8-1.3-.8-2V15c0-.3-.1-.6-.4-.8-.2-.3-.5-.4-.8-.4a.4.4 0 0 1-.4-.4v-.8c0-.2.2-.4.4-.4.3 0 .6-.1.8-.4.3-.2.4-.5.4-.8V9.3c0-.7.3-1.4.8-2 .6-.5 1.3-.8 2-.8.3 0 .4.2.4.4v.8c0 .2-.1.4-.4.4-.3 0-.6.1-.8.4-.3.2-.4.5-.4.8V11zm9.8 0V9.3c0-.3-.1-.6-.4-.8-.2-.3-.5-.4-.8-.4a.4.4 0 0 1-.4-.4V7c0-.2.1-.4.4-.4.7 0 1.4.3 2 .8.5.6.8 1.3.8 2V11c0 .3.1.6.4.8.2.3.5.4.8.4.2 0 .4.2.4.4v.8c0 .2-.2.4-.4.4-.3 0-.6.1-.8.4-.3.2-.4.5-.4.8v1.7c0 .7-.3 1.4-.8 2-.6.5-1.3.8-2 .8a.4.4 0 0 1-.4-.4v-.8c0-.2.1-.4.4-.4.3 0 .6-.1.8-.4.3-.2.4-.5.4-.8V15a2.8 2.8 0 0 1 .8-2 2.8 2.8 0 0 1-.8-2zm-3.3-.4c0 .4-.1.8-.5 1.1-.3.3-.7.5-1.1.5-.4 0-.8-.2-1.1-.5-.4-.3-.5-.7-.5-1.1 0-.5.1-.9.5-1.2.3-.3.7-.4 1.1-.4.4 0 .8.1 1.1.4.4.3.5.7.5 1.2zM12 13c.4 0 .8.1 1.1.5.4.3.5.7.5 1.1 0 1-.1 1.6-.5 2a3 3 0 0 1-1.1 1c-.4.3-.8.4-1.1.4a.5.5 0 0 1-.5-.5V17a3 3 0 0 0 1-.2l.6-.6c-.6 0-1-.2-1.3-.5-.2-.3-.3-.7-.3-1 0-.5.1-1 .5-1.2.3-.4.7-.5 1.1-.5z" fill-rule="evenodd"/></svg>',
									'color-levels':
										'<svg width="24" height="24"><path d="M17.5 11.4A9 9 0 0 1 18 14c0 .5 0 1-.2 1.4 0 .4-.3.9-.5 1.3a6.2 6.2 0 0 1-3.7 3 5.7 5.7 0 0 1-3.2 0A5.9 5.9 0 0 1 7.6 18a6.2 6.2 0 0 1-1.4-2.6 6.7 6.7 0 0 1 0-2.8c0-.4.1-.9.3-1.3a13.6 13.6 0 0 1 2.3-4A20 20 0 0 1 12 4a26.4 26.4 0 0 1 3.2 3.4 18.2 18.2 0 0 1 2.3 4zm-2 4.5c.4-.7.5-1.4.5-2a7.3 7.3 0 0 0-1-3.2c.2.6.2 1.2.2 1.9a4.5 4.5 0 0 1-1.3 3 5.3 5.3 0 0 1-2.3 1.5 4.9 4.9 0 0 1-2 .1 4.3 4.3 0 0 0 2.4.8 4 4 0 0 0 2-.6 4 4 0 0 0 1.5-1.5z" fill-rule="evenodd"/></svg>',
									'color-picker':
										'<svg width="24" height="24"><path d="M12 3a9 9 0 0 0 0 18 1.5 1.5 0 0 0 1.1-2.5c-.2-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.4-4-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill-rule="nonzero"/></svg>',
									'color-swatch-remove-color':
										'<svg width="24" height="24"><path stroke="#000" stroke-width="2" d="M21 3L3 21" fill-rule="evenodd"/></svg>',
									'color-swatch':
										'<svg width="24" height="24"><rect x="3" y="3" width="18" height="18" rx="1" fill-rule="evenodd"/></svg>',
									'comment-add':
										'<svg width="24" height="24"><g fill-rule="nonzero"><path d="M9 19l3-2h7c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h4v2zm-2 4v-4H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-6.4L7 23z"/><path d="M13 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2z"/></g></svg>',
									comment:
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M9 19l3-2h7c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h4v2zm-2 4v-4H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-6.4L7 23z"/></svg>',
									contrast:
										'<svg width="24" height="24"><path d="M12 4a7.8 7.8 0 0 1 5.7 2.3A8 8 0 1 1 12 4zm-6 8a6 6 0 0 0 6 6V6a6 6 0 0 0-6 6z" fill-rule="evenodd"/></svg>',
									copy:
										'<svg width="24" height="24"><path d="M16 3H6a2 2 0 0 0-2 2v11h2V5h10V3zm1 4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9c0-1.2.9-2 2-2h7zm0 12V9h-7v10h7z" fill-rule="nonzero"/></svg>',
									crop:
										'<svg width="24" height="24"><path d="M17 8v7h2c.6 0 1 .4 1 1s-.4 1-1 1h-2v2c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-2H7V9H5a1 1 0 1 1 0-2h2V5c0-.6.4-1 1-1s1 .4 1 1v2h7l3-3 1 1-3 3zM9 9v5l5-5H9zm1 6h5v-5l-5 5z" fill-rule="evenodd"/></svg>',
									cut:
										'<svg width="24" height="24"><path d="M18 15c.6.7 1 1.4 1 2.3 0 .8-.2 1.5-.7 2l-.8.5-1 .2c-.4 0-.8 0-1.2-.3a3.9 3.9 0 0 1-2.1-2.2c-.2-.5-.3-1-.2-1.5l-1-1-1 1c0 .5 0 1-.2 1.5-.1.5-.4 1-.9 1.4-.3.4-.7.6-1.2.8l-1.2.3c-.4 0-.7 0-1-.2-.3 0-.6-.3-.8-.5-.5-.5-.8-1.2-.7-2 0-.9.4-1.6 1-2.2A3.7 3.7 0 0 1 8.6 14H9l1-1-4-4-.5-1a3.3 3.3 0 0 1 0-2c0-.4.3-.7.5-1l6 6 6-6 .5 1a3.3 3.3 0 0 1 0 2c0 .4-.3.7-.5 1l-4 4 1 1h.5c.4 0 .8 0 1.2.3.5.2.9.4 1.2.8zm-8.5 2.2l.1-.4v-.3-.4a1 1 0 0 0-.2-.5 1 1 0 0 0-.4-.2 1.6 1.6 0 0 0-.8 0 2.6 2.6 0 0 0-.8.3 2.5 2.5 0 0 0-.9 1.1l-.1.4v.7l.2.5.5.2h.7a2.5 2.5 0 0 0 .8-.3 2.8 2.8 0 0 0 1-1zm2.5-2.8c.4 0 .7-.1 1-.4.3-.3.4-.6.4-1s-.1-.7-.4-1c-.3-.3-.6-.4-1-.4s-.7.1-1 .4c-.3.3-.4.6-.4 1s.1.7.4 1c.3.3.6.4 1 .4zm5.4 4l.2-.5v-.4-.3a2.6 2.6 0 0 0-.3-.8 2.4 2.4 0 0 0-.7-.7 2.5 2.5 0 0 0-.8-.3 1.5 1.5 0 0 0-.8 0 1 1 0 0 0-.4.2 1 1 0 0 0-.2.5 1.5 1.5 0 0 0 0 .7v.4l.3.4.3.4a2.8 2.8 0 0 0 .8.5l.4.1h.7l.5-.2z" fill-rule="evenodd"/></svg>',
									'document-properties':
										'<svg width="24" height="24"><path d="M14.4 3H7a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7.6L14.4 3zM17 19H7V5h6v4h4v10z" fill-rule="nonzero"/></svg>',
									drag:
										'<svg width="24" height="24"><path d="M13 5h2v2h-2V5zm0 4h2v2h-2V9zM9 9h2v2H9V9zm4 4h2v2h-2v-2zm-4 0h2v2H9v-2zm0 4h2v2H9v-2zm4 0h2v2h-2v-2zM9 5h2v2H9V5z" fill-rule="evenodd"/></svg>',
									duplicate:
										'<svg width="24" height="24"><g fill-rule="nonzero"><path d="M16 3v2H6v11H4V5c0-1.1.9-2 2-2h10zm3 8h-2V9h-7v10h9a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9c0-1.2.9-2 2-2h7a2 2 0 0 1 2 2v2z"/><path d="M17 14h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1z"/></g></svg>',
									'edit-block':
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M19.8 8.8l-9.4 9.4c-.2.2-.5.4-.9.4l-5.4 1.2 1.2-5.4.5-.8 9.4-9.4c.7-.7 1.8-.7 2.5 0l2.1 2.1c.7.7.7 1.8 0 2.5zm-2-.2l1-.9v-.3l-2.2-2.2a.3.3 0 0 0-.3 0l-1 1L18 8.5zm-1 1l-2.5-2.4-6 6 2.5 2.5 6-6zm-7 7.1l-2.6-2.4-.3.3-.1.2-.7 3 3.1-.6h.1l.4-.5z"/></svg>',
									'edit-image':
										'<svg width="24" height="24"><path d="M18 16h2V7a2 2 0 0 0-2-2H7v2h11v9zM6 17h15a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1H6a2 2 0 0 1-2-2V7H3a1 1 0 1 1 0-2h1V4a1 1 0 1 1 2 0v13zm3-5.3l1.3 2 3-4.7 3.7 6H7l2-3.3z" fill-rule="nonzero"/></svg>',
									'embed-page':
										'<svg width="24" height="24"><path d="M19 6V5H5v14h2A13 13 0 0 1 19 6zm0 1.4c-.8.8-1.6 2.4-2.2 4.6H19V7.4zm0 5.6h-2.4c-.4 1.8-.6 3.8-.6 6h3v-6zm-4 6c0-2.2.2-4.2.6-6H13c-.7 1.8-1.1 3.8-1.1 6h3zm-4 0c0-2.2.4-4.2 1-6H9.6A12 12 0 0 0 8 19h3zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm11.8 9c.4-1.9 1-3.4 1.8-4.5a9.2 9.2 0 0 0-4 4.5h2.2zm-3.4 0a12 12 0 0 1 2.8-4 12 12 0 0 0-5 4h2.2z" fill-rule="nonzero"/></svg>',
									embed:
										'<svg width="24" height="24"><path d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm1 2v14h14V5H5zm4.8 2.6l5.6 4a.5.5 0 0 1 0 .8l-5.6 4A.5.5 0 0 1 9 16V8a.5.5 0 0 1 .8-.4z" fill-rule="nonzero"/></svg>',
									emoji:
										'<svg width="24" height="24"><path d="M9 11c.6 0 1-.4 1-1s-.4-1-1-1a1 1 0 0 0-1 1c0 .6.4 1 1 1zm6 0c.6 0 1-.4 1-1s-.4-1-1-1a1 1 0 0 0-1 1c0 .6.4 1 1 1zm-3 5.5c2.1 0 4-1.5 4.4-3.5H7.6c.5 2 2.3 3.5 4.4 3.5zM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z" fill-rule="nonzero"/></svg>',
									fill:
										'<svg width="24" height="26"><path d="M16.6 12l-9-9-1.4 1.4 2.4 2.4-5.2 5.1c-.5.6-.5 1.6 0 2.2L9 19.6a1.5 1.5 0 0 0 2.2 0l5.5-5.5c.5-.6.5-1.6 0-2.2zM5.2 13L10 8.2l4.8 4.8H5.2zM19 14.5s-2 2.2-2 3.5c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.3-2-3.5-2-3.5z" fill-rule="nonzero"/></svg>',
									'flip-horizontally':
										'<svg width="24" height="24"><path d="M14 19h2v-2h-2v2zm4-8h2V9h-2v2zM4 7v10c0 1.1.9 2 2 2h3v-2H6V7h3V5H6a2 2 0 0 0-2 2zm14-2v2h2a2 2 0 0 0-2-2zm-7 16h2V3h-2v18zm7-6h2v-2h-2v2zm-4-8h2V5h-2v2zm4 12a2 2 0 0 0 2-2h-2v2z" fill-rule="nonzero"/></svg>',
									'flip-vertically':
										'<svg width="24" height="24"><path d="M5 14v2h2v-2H5zm8 4v2h2v-2h-2zm4-14H7a2 2 0 0 0-2 2v3h2V6h10v3h2V6a2 2 0 0 0-2-2zm2 14h-2v2a2 2 0 0 0 2-2zM3 11v2h18v-2H3zm6 7v2h2v-2H9zm8-4v2h2v-2h-2zM5 18c0 1.1.9 2 2 2v-2H5z" fill-rule="nonzero"/></svg>',
									'format-painter':
										'<svg width="24" height="24"><path d="M18 5V4c0-.5-.4-1-1-1H5a1 1 0 0 0-1 1v4c0 .6.5 1 1 1h12c.6 0 1-.4 1-1V7h1v4H9v9c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-7h8V5h-3z" fill-rule="nonzero"/></svg>',
									format:
										'<svg width="24" height="24"><path fill-rule="evenodd" d="M17 5a1 1 0 0 1 0 2h-4v11a1 1 0 0 1-2 0V7H7a1 1 0 1 1 0-2h10z"/></svg>',
									fullscreen:
										'<svg width="24" height="24"><path d="M15.3 10l-1.2-1.3 2.9-3h-2.3a.9.9 0 1 1 0-1.7H19c.5 0 .9.4.9.9v4.4a.9.9 0 1 1-1.8 0V7l-2.9 3zm0 4l3 3v-2.3a.9.9 0 1 1 1.7 0V19c0 .5-.4.9-.9.9h-4.4a.9.9 0 1 1 0-1.8H17l-3-2.9 1.3-1.2zM10 15.4l-2.9 3h2.3a.9.9 0 1 1 0 1.7H5a.9.9 0 0 1-.9-.9v-4.4a.9.9 0 1 1 1.8 0V17l2.9-3 1.2 1.3zM8.7 10L5.7 7v2.3a.9.9 0 0 1-1.7 0V5c0-.5.4-.9.9-.9h4.4a.9.9 0 0 1 0 1.8H7l3 2.9-1.3 1.2z" fill-rule="nonzero"/></svg>',
									gallery:
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M5 15.7l2.3-2.2c.3-.3.7-.3 1 0L11 16l5.1-5c.3-.4.8-.4 1 0l2 1.9V8H5v7.7zM5 18V19h3l1.8-1.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 6h16c.6 0 1 .4 1 1v13c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-.6.4-1 1-1zm6 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM4.5 4h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm2-2h11a.5.5 0 1 1 0 1h-11a.5.5 0 0 1 0-1z"/></svg>',
									gamma:
										'<svg width="24" height="24"><path d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm1 2v14h14V5H5zm6.5 11.8V14L9.2 8.7a5.1 5.1 0 0 0-.4-.8l-.1-.2H8 8v-1l.3-.1.3-.1h.7a1 1 0 0 1 .6.5l.1.3a8.5 8.5 0 0 1 .3.6l1.9 4.6 2-5.2a1 1 0 0 1 1-.6.5.5 0 0 1 .5.6L13 14v2.8a.7.7 0 0 1-1.4 0z" fill-rule="nonzero"/></svg>',
									help:
										'<svg width="24" height="24"><g fill-rule="evenodd"><path d="M12 5.5a6.5 6.5 0 0 0-6 9 6.3 6.3 0 0 0 1.4 2l1 1a6.3 6.3 0 0 0 3.6 1 6.5 6.5 0 0 0 6-9 6.3 6.3 0 0 0-1.4-2l-1-1a6.3 6.3 0 0 0-3.6-1zM12 4a7.8 7.8 0 0 1 5.7 2.3A8 8 0 1 1 12 4z"/><path d="M9.6 9.7a.7.7 0 0 1-.7-.8c0-1.1 1.5-1.8 3.2-1.8 1.8 0 3.2.8 3.2 2.4 0 1.4-.4 2.1-1.5 2.8-.2 0-.3.1-.3.2a2 2 0 0 0-.8.8.8.8 0 0 1-1.4-.6c.3-.7.8-1 1.3-1.5l.4-.2c.7-.4.8-.6.8-1.5 0-.5-.6-.9-1.7-.9-.5 0-1 .1-1.4.3-.2 0-.3.1-.3.2v-.2c0 .4-.4.8-.8.8z" fill-rule="nonzero"/><circle cx="12" cy="16" r="1"/></g></svg>',
									'highlight-bg-color':
										'<svg width="24" height="24"><g fill-rule="evenodd"><path id="tox-icon-highlight-bg-color__color" d="M3 18h18v3H3z"/><path fill-rule="nonzero" d="M7.7 16.7H3l3.3-3.3-.7-.8L10.2 8l4 4.1-4 4.2c-.2.2-.6.2-.8 0l-.6-.7-1.1 1.1zm5-7.5L11 7.4l3-2.9a2 2 0 0 1 2.6 0L18 6c.7.7.7 2 0 2.7l-2.9 2.9-1.8-1.8-.5-.6"/></g></svg>',
									home:
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
									'horizontal-rule':
										'<svg width="24" height="24"><path d="M4 11h16v2H4z" fill-rule="evenodd"/></svg>',
									'image-options':
										'<svg width="24" height="24"><path d="M6 10a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm12 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-6 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2z" fill-rule="nonzero"/></svg>',
									image:
										'<svg width="24" height="24"><path d="M5 15.7l3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7zM5 18V19h3l2.8-2.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill-rule="nonzero"/></svg>',
									indent:
										'<svg width="24" height="24"><path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 1 1 0-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm-5 4h12a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm-2.6-3.8L6.2 12l-1.8-1.2a1 1 0 0 1 1.2-1.6l3 2a1 1 0 0 1 0 1.6l-3 2a1 1 0 1 1-1.2-1.6z" fill-rule="evenodd"/></svg>',
									info:
										'<svg width="24" height="24"><path d="M12 4a7.8 7.8 0 0 1 5.7 2.3A8 8 0 1 1 12 4zm-1 3v2h2V7h-2zm3 10v-1h-1v-5h-3v1h1v4h-1v1h4z" fill-rule="evenodd"/></svg>',
									'insert-character':
										'<svg width="24" height="24"><path d="M15 18h4l1-2v4h-6v-3.3l1.4-1a6 6 0 0 0 1.8-2.9 6.3 6.3 0 0 0-.1-4.1 5.8 5.8 0 0 0-3-3.2c-.6-.3-1.3-.5-2.1-.5a5.1 5.1 0 0 0-3.9 1.8 6.3 6.3 0 0 0-1.3 6 6.2 6.2 0 0 0 1.8 3l1.4.9V20H4v-4l1 2h4v-.5l-2-1L5.4 15A6.5 6.5 0 0 1 4 11c0-1 .2-1.9.6-2.7A7 7 0 0 1 6.3 6C7.1 5.4 8 5 9 4.5c1-.3 2-.5 3.1-.5a8.8 8.8 0 0 1 5.7 2 7 7 0 0 1 1.7 2.3 6 6 0 0 1 .2 4.8c-.2.7-.6 1.3-1 1.9a7.6 7.6 0 0 1-3.6 2.5v.5z" fill-rule="evenodd"/></svg>',
									'insert-time':
										'<svg width="24" height="24"><g fill-rule="nonzero"><path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0 2a9 9 0 1 1 0-18 9 9 0 0 1 0 18z"/><path d="M16 12h-3V7c0-.6-.4-1-1-1a1 1 0 0 0-1 1v7h5c.6 0 1-.4 1-1s-.4-1-1-1z"/></g></svg>',
									invert:
										'<svg width="24" height="24"><path d="M18 19.3L16.5 18a5.8 5.8 0 0 1-3.1 1.9 6.1 6.1 0 0 1-5.5-1.6A5.8 5.8 0 0 1 6 14v-.3l.1-1.2A13.9 13.9 0 0 1 7.7 9l-3-3 .7-.8 2.8 2.9 9 8.9 1.5 1.6-.7.6zm0-5.5v.3l-.1 1.1-.4 1-1.2-1.2a4.3 4.3 0 0 0 .2-1v-.2c0-.4 0-.8-.2-1.3l-.5-1.4a14.8 14.8 0 0 0-3-4.2L12 6a26.1 26.1 0 0 0-2.2 2.5l-1-1a20.9 20.9 0 0 1 2.9-3.3L12 4l1 .8a22.2 22.2 0 0 1 4 5.4c.6 1.2 1 2.4 1 3.6z" fill-rule="evenodd"/></svg>',
									italic:
										'<svg width="24" height="24"><path d="M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z" fill-rule="evenodd"/></svg>',
									line:
										'<svg width="24" height="24"><path d="M15 9l-8 8H4v-3l8-8 3 3zm1-1l-3-3 1-1h1c-.2 0 0 0 0 0l2 2s0 .2 0 0v1l-1 1zM4 18h16v2H4v-2z" fill-rule="evenodd"/></svg>',
									link:
										'<svg width="24" height="24"><path d="M6.2 12.3a1 1 0 0 1 1.4 1.4l-2.1 2a2 2 0 1 0 2.7 2.8l4.8-4.8a1 1 0 0 0 0-1.4 1 1 0 1 1 1.4-1.3 2.9 2.9 0 0 1 0 4L9.6 20a3.9 3.9 0 0 1-5.5-5.5l2-2zm11.6-.6a1 1 0 0 1-1.4-1.4l2-2a2 2 0 1 0-2.6-2.8L11 10.3a1 1 0 0 0 0 1.4A1 1 0 1 1 9.6 13a2.9 2.9 0 0 1 0-4L14.4 4a3.9 3.9 0 0 1 5.5 5.5l-2 2z" fill-rule="nonzero"/></svg>',
									'list-bull-circle':
										'<svg width="48" height="48"><g fill-rule="evenodd"><path d="M11 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM11 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM11 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill-rule="nonzero"/><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/></g></svg>',
									'list-bull-default':
										'<svg width="48" height="48"><g fill-rule="evenodd"><circle cx="11" cy="14" r="3"/><circle cx="11" cy="24" r="3"/><circle cx="11" cy="34" r="3"/><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/></g></svg>',
									'list-bull-square':
										'<svg width="48" height="48"><g fill-rule="evenodd"><path d="M8 11h6v6H8zM8 21h6v6H8zM8 31h6v6H8z"/><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/></g></svg>',
									'list-num-default-rtl':
										'<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M37.4 17v-4.8l-1.6 1v-1.1l1.6-1h1.2V17zM33.3 17.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm1.7 5.7c0-1.2 1-2 2.2-2 1.3 0 2.1.8 2.1 1.8 0 .7-.3 1.2-1.3 2.2l-1.2 1v.2h2.6v1h-4.3v-.9l2-1.9c.8-.8 1-1.1 1-1.5 0-.5-.4-.8-1-.8-.5 0-.9.3-.9.9H35zm-1.7 4.3c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm3.2 7.3v-1h.7c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7s-1 .3-1 .8H35c0-1.1 1-1.8 2.2-1.8 1.2 0 2.1.6 2.1 1.6 0 .7-.4 1.2-1 1.3v.1c.7.1 1.3.7 1.3 1.4 0 1-1 1.9-2.4 1.9-1.3 0-2.2-.8-2.3-2h1.2c0 .6.5 1 1.1 1 .6 0 1-.4 1-1 0-.5-.3-.8-1-.8h-.7zm-3.3 2.7c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7z"/></g></svg>',
									'list-num-default':
										'<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M10 17v-4.8l-1.5 1v-1.1l1.6-1h1.2V17h-1.2zm3.6.1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zm-5 5.7c0-1.2.8-2 2.1-2s2.1.8 2.1 1.8c0 .7-.3 1.2-1.4 2.2l-1.1 1v.2h2.6v1H8.6v-.9l2-1.9c.8-.8 1-1.1 1-1.5 0-.5-.4-.8-1-.8-.5 0-.9.3-.9.9H8.5zm6.3 4.3c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM10 34.4v-1h.7c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7s-1 .3-1 .8H8.6c0-1.1 1-1.8 2.2-1.8 1.3 0 2.1.6 2.1 1.6 0 .7-.4 1.2-1 1.3v.1c.8.1 1.3.7 1.3 1.4 0 1-1 1.9-2.4 1.9-1.3 0-2.2-.8-2.3-2h1.2c0 .6.5 1 1.1 1 .7 0 1-.4 1-1 0-.5-.3-.8-1-.8h-.7zm4.7 2.7c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7z"/></g></svg>',
									'list-num-lower-alpha-rtl':
										'<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M36.5 16c-.9 0-1.5-.5-1.5-1.3s.6-1.3 1.8-1.4h1v-.4c0-.4-.2-.6-.7-.6-.4 0-.7.1-.8.4h-1.1c0-.8.8-1.4 2-1.4S39 12 39 13V16h-1.2v-.6c-.3.4-.8.7-1.4.7zm.4-.8c.6 0 1-.4 1-.9V14h-1c-.5.1-.7.3-.7.6 0 .4.3.6.7.6zM33.1 16.1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7zM37.7 26c-.7 0-1.2-.2-1.5-.7v.7H35v-6.3h1.2v2.5c.3-.5.8-.9 1.5-.9 1.1 0 1.8 1 1.8 2.4 0 1.5-.7 2.4-1.8 2.4zm-.5-3.6c-.6 0-1 .5-1 1.3s.4 1.4 1 1.4c.7 0 1-.6 1-1.4 0-.8-.3-1.3-1-1.3zM33.2 26.1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7zm6 7h-1c-.1-.5-.4-.8-1-.8s-1 .5-1 1.4c0 1 .4 1.4 1 1.4.5 0 .9-.2 1-.7h1c0 1-.8 1.7-2 1.7-1.4 0-2.2-.9-2.2-2.4s.8-2.4 2.2-2.4c1.2 0 2 .7 2 1.7zm-6.1 3c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
									'list-num-lower-alpha':
										'<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M10.3 15.2c.5 0 1-.4 1-.9V14h-1c-.5.1-.8.3-.8.6 0 .4.3.6.8.6zm-.4.9c-1 0-1.5-.6-1.5-1.4 0-.8.6-1.3 1.7-1.4h1.1v-.4c0-.4-.2-.6-.7-.6-.5 0-.8.1-.9.4h-1c0-.8.8-1.4 2-1.4 1.1 0 1.8.6 1.8 1.6V16h-1.1v-.6h-.1c-.2.4-.7.7-1.3.7zm4.6 0c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-3.2 10c-.6 0-1.2-.3-1.4-.8v.7H8.5v-6.3H10v2.5c.3-.5.8-.9 1.4-.9 1.2 0 1.9 1 1.9 2.4 0 1.5-.7 2.4-1.9 2.4zm-.4-3.7c-.7 0-1 .5-1 1.3s.3 1.4 1 1.4c.6 0 1-.6 1-1.4 0-.8-.4-1.3-1-1.3zm4 3.7c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-2.2 7h-1.2c0-.5-.4-.8-.9-.8-.6 0-1 .5-1 1.4 0 1 .4 1.4 1 1.4.5 0 .8-.2 1-.7h1c0 1-.8 1.7-2 1.7-1.4 0-2.2-.9-2.2-2.4s.8-2.4 2.2-2.4c1.2 0 2 .7 2 1.7zm1.8 3c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
									'list-num-lower-greek-rtl':
										'<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M37.4 16c-1.2 0-2-.8-2-2.3 0-1.5.8-2.4 2-2.4.6 0 1 .4 1.3 1v-.9H40v3.2c0 .4.1.5.4.5h.2v.9h-.6c-.6 0-1-.2-1-.7h-.2c-.2.4-.7.8-1.3.8zm.3-1c.6 0 1-.5 1-1.3s-.4-1.3-1-1.3-1 .5-1 1.3.4 1.4 1 1.4zM33.3 16.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM36 21.9c0-1.5.8-2.3 2.1-2.3 1.2 0 2 .6 2 1.6 0 .6-.3 1-.9 1.3.9.3 1.3.8 1.3 1.7 0 1.2-.7 1.9-1.8 1.9-.6 0-1.1-.3-1.4-.8v2.2H36V22zm1.8 1.2v-1h.3c.5 0 .9-.2.9-.7 0-.5-.3-.8-.9-.8-.5 0-.8.3-.8 1v2.2c0 .8.4 1.3 1 1.3s1-.4 1-1-.4-1-1.2-1h-.3zM33.3 26.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM37.1 34.6L34.8 30h1.4l1.7 3.5 1.7-3.5h1.1l-2.2 4.6v.1c.5.8.7 1.4.7 1.8 0 .4-.2.8-.4 1-.2.2-.6.3-1 .3-.9 0-1.3-.4-1.3-1.2 0-.5.2-1 .5-1.7l.1-.2zm.7 1a2 2 0 0 0-.4.9c0 .3.1.4.4.4.3 0 .4-.1.4-.4 0-.2-.1-.6-.4-1zM33.3 36.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
									'list-num-lower-greek':
										'<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M10.5 15c.7 0 1-.5 1-1.3s-.3-1.3-1-1.3c-.5 0-.9.5-.9 1.3s.4 1.4 1 1.4zm-.3 1c-1.1 0-1.8-.8-1.8-2.3 0-1.5.7-2.4 1.8-2.4.7 0 1.1.4 1.3 1h.1v-.9h1.2v3.2c0 .4.1.5.4.5h.2v.9h-.6c-.6 0-1-.2-1.1-.7h-.1c-.2.4-.7.8-1.4.8zm5 .1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7zm-4.9 7v-1h.3c.6 0 1-.2 1-.7 0-.5-.4-.8-1-.8-.5 0-.8.3-.8 1v2.2c0 .8.4 1.3 1.1 1.3.6 0 1-.4 1-1s-.5-1-1.3-1h-.3zM8.6 22c0-1.5.7-2.3 2-2.3 1.2 0 2 .6 2 1.6 0 .6-.3 1-.8 1.3.8.3 1.3.8 1.3 1.7 0 1.2-.8 1.9-1.9 1.9-.6 0-1.1-.3-1.3-.8v2.2H8.5V22zm6.2 4.2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zm-4.5 8.5L8 30h1.4l1.7 3.5 1.7-3.5h1.1l-2.2 4.6v.1c.5.8.7 1.4.7 1.8 0 .4-.1.8-.4 1-.2.2-.6.3-1 .3-.9 0-1.3-.4-1.3-1.2 0-.5.2-1 .5-1.7l.1-.2zm.7 1a2 2 0 0 0-.4.9c0 .3.1.4.4.4.3 0 .4-.1.4-.4 0-.2-.1-.6-.4-1zm4.5.5c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
									'list-num-lower-roman-rtl':
										'<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M32.9 16v-1.2h-1.3V16H33zm0 10v-1.2h-1.3V26H33zm0 10v-1.2h-1.3V36H33z"/><path fill-rule="nonzero" d="M36 21h-1.5v5H36zM36 31h-1.5v5H36zM39 21h-1.5v5H39zM39 31h-1.5v5H39zM42 31h-1.5v5H42zM36 11h-1.5v5H36zM36 19h-1.5v1H36zM36 29h-1.5v1H36zM39 19h-1.5v1H39zM39 29h-1.5v1H39zM42 29h-1.5v1H42zM36 9h-1.5v1H36z"/></g></svg>',
									'list-num-lower-roman':
										'<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M15.1 16v-1.2h1.3V16H15zm0 10v-1.2h1.3V26H15zm0 10v-1.2h1.3V36H15z"/><path fill-rule="nonzero" d="M12 21h1.5v5H12zM12 31h1.5v5H12zM9 21h1.5v5H9zM9 31h1.5v5H9zM6 31h1.5v5H6zM12 11h1.5v5H12zM12 19h1.5v1H12zM12 29h1.5v1H12zM9 19h1.5v1H9zM9 29h1.5v1H9zM6 29h1.5v1H6zM12 9h1.5v1H12z"/></g></svg>',
									'list-num-upper-alpha-rtl':
										'<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M39.3 17l-.5-1.4h-2l-.5 1.4H35l2-6h1.6l2 6h-1.3zm-1.6-4.7l-.7 2.3h1.6l-.8-2.3zM33.4 17c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zm4.7 9.9h-2.7v-6H38c1.2 0 1.9.6 1.9 1.5 0 .6-.5 1.2-1 1.3.7.1 1.3.7 1.3 1.5 0 1-.8 1.7-2 1.7zm-1.4-5v1.5h1c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7h-1zm0 4h1.1c.7 0 1.1-.3 1.1-.8 0-.6-.4-.9-1.1-.9h-1.1V26zM33 27.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm4.9 10c-1.8 0-2.8-1.1-2.8-3.1s1-3.1 2.8-3.1c1.4 0 2.5.9 2.6 2.2h-1.3c0-.7-.6-1.1-1.3-1.1-1 0-1.6.7-1.6 2s.6 2 1.6 2c.7 0 1.2-.4 1.4-1h1.2c-.1 1.3-1.2 2.2-2.6 2.2zm-4.5 0c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
									'list-num-upper-alpha':
										'<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M12.6 17l-.5-1.4h-2L9.5 17H8.3l2-6H12l2 6h-1.3zM11 12.3l-.7 2.3h1.6l-.8-2.3zm4.7 4.8c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zM11.4 27H8.7v-6h2.6c1.2 0 1.9.6 1.9 1.5 0 .6-.5 1.2-1 1.3.7.1 1.3.7 1.3 1.5 0 1-.8 1.7-2 1.7zM10 22v1.5h1c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7h-1zm0 4H11c.7 0 1.1-.3 1.1-.8 0-.6-.4-.9-1.1-.9H10V26zm5.4 1.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-4.1 10c-1.8 0-2.8-1.1-2.8-3.1s1-3.1 2.8-3.1c1.4 0 2.5.9 2.6 2.2h-1.3c0-.7-.6-1.1-1.3-1.1-1 0-1.6.7-1.6 2s.6 2 1.6 2c.7 0 1.2-.4 1.4-1h1.2c-.1 1.3-1.2 2.2-2.6 2.2zm4.5 0c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
									'list-num-upper-roman-rtl':
										'<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M31.6 17v-1.2H33V17h-1.3zm0 10v-1.2H33V27h-1.3zm0 10v-1.2H33V37h-1.3z"/><path fill-rule="nonzero" d="M34.5 20H36v7h-1.5zM34.5 30H36v7h-1.5zM37.5 20H39v7h-1.5zM37.5 30H39v7h-1.5zM40.5 30H42v7h-1.5zM34.5 10H36v7h-1.5z"/></g></svg>',
									'list-num-upper-roman':
										'<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M15.1 17v-1.2h1.3V17H15zm0 10v-1.2h1.3V27H15zm0 10v-1.2h1.3V37H15z"/><path fill-rule="nonzero" d="M12 20h1.5v7H12zM12 30h1.5v7H12zM9 20h1.5v7H9zM9 30h1.5v7H9zM6 30h1.5v7H6zM12 10h1.5v7H12z"/></g></svg>',
									lock:
										'<svg width="24" height="24"><path d="M16.3 11c.2 0 .3 0 .5.2l.2.6v7.4c0 .3 0 .4-.2.6l-.6.2H7.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6v-7.4c0-.3 0-.4.2-.6l.5-.2H8V8c0-.8.3-1.5.9-2.1.6-.6 1.3-.9 2.1-.9h2c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v3h.3zM10 8v3h4V8a1 1 0 0 0-.3-.7A1 1 0 0 0 13 7h-2a1 1 0 0 0-.7.3 1 1 0 0 0-.3.7z" fill-rule="evenodd"/></svg>',
									ltr:
										'<svg width="24" height="24"><path d="M11 5h7a1 1 0 0 1 0 2h-1v11a1 1 0 0 1-2 0V7h-2v11a1 1 0 0 1-2 0v-6c-.5 0-1 0-1.4-.3A3.4 3.4 0 0 1 7.8 10a3.3 3.3 0 0 1 0-2.8 3.4 3.4 0 0 1 1.8-1.8L11 5zM4.4 16.2L6.2 15l-1.8-1.2a1 1 0 0 1 1.2-1.6l3 2a1 1 0 0 1 0 1.6l-3 2a1 1 0 1 1-1.2-1.6z" fill-rule="evenodd"/></svg>',
									'more-drawer':
										'<svg width="24" height="24"><path d="M6 10a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm12 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-6 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2z" fill-rule="nonzero"/></svg>',
									'new-document':
										'<svg width="24" height="24"><path d="M14.4 3H7a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7.6L14.4 3zM17 19H7V5h6v4h4v10z" fill-rule="nonzero"/></svg>',
									'new-tab':
										'<svg width="24" height="24"><path d="M15 13l2-2v8H5V7h8l-2 2H7v8h8v-4zm4-8v5.5l-2-2-5.6 5.5H10v-1.4L15.5 7l-2-2H19z" fill-rule="evenodd"/></svg>',
									'non-breaking':
										'<svg width="24" height="24"><path d="M11 11H8a1 1 0 1 1 0-2h3V6c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1s-.4 1-1 1h-3v3c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-3zm10 4v5H3v-5c0-.6.4-1 1-1s1 .4 1 1v3h14v-3c0-.6.4-1 1-1s1 .4 1 1z" fill-rule="evenodd"/></svg>',
									notice:
										'<svg width="24" height="24"><path d="M17.8 9.8L15.4 4 20 8.5v7L15.5 20h-7L4 15.5v-7L8.5 4h7l2.3 5.8zm0 0l2.2 5.7-2.3-5.8zM13 17v-2h-2v2h2zm0-4V7h-2v6h2z" fill-rule="evenodd"/></svg>',
									'ordered-list-rtl':
										'<svg width="24" height="24"><path d="M6 17h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm0-6h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm0-6h8a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2zm13-1v3.5a.5.5 0 1 1-1 0V5h-.5a.5.5 0 1 1 0-1H19zm-1 8.8l.2.2h1.3a.5.5 0 1 1 0 1h-1.6a1 1 0 0 1-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 0 0-.2-.2h-1.3a.5.5 0 0 1-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zm2 4.2v2c0 .6-.4 1-1 1h-1.5a.5.5 0 0 1 0-1h1.2a.3.3 0 1 0 0-.6h-1.3a.4.4 0 1 1 0-.8h1.3a.3.3 0 0 0 0-.6h-1.2a.5.5 0 1 1 0-1H19c.6 0 1 .4 1 1z" fill-rule="evenodd"/></svg>',
									'ordered-list':
										'<svg width="24" height="24"><path d="M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 1 1 0-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 0 1-.5-.5V5h-.5a.5.5 0 0 1 0-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 0 1-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 0 0-.2-.2H4.5a.5.5 0 0 1-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 0 1 0-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 1 1 0-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 1 1 0-1H6c.6 0 1 .4 1 1z" fill-rule="evenodd"/></svg>',
									orientation:
										'<svg width="24" height="24"><path d="M7.3 6.4L1 13l6.4 6.5 6.5-6.5-6.5-6.5zM3.7 13l3.6-3.7L11 13l-3.7 3.7-3.6-3.7zM12 6l2.8 2.7c.3.3.3.8 0 1-.3.4-.9.4-1.2 0L9.2 5.7a.8.8 0 0 1 0-1.2L13.6.2c.3-.3.9-.3 1.2 0 .3.3.3.8 0 1.1L12 4h1a9 9 0 1 1-4.3 16.9l1.5-1.5A7 7 0 1 0 13 6h-1z" fill-rule="nonzero"/></svg>',
									outdent:
										'<svg width="24" height="24"><path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 1 1 0-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm-5 4h12a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm1.6-3.8a1 1 0 0 1-1.2 1.6l-3-2a1 1 0 0 1 0-1.6l3-2a1 1 0 0 1 1.2 1.6L6.8 12l1.8 1.2z" fill-rule="evenodd"/></svg>',
									'page-break':
										'<svg width="24" height="24"><g fill-rule="evenodd"><path d="M5 11c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h1c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2zm4 0c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h1c.6 0 1 .4 1 1s-.4 1-1 1h-1a1 1 0 0 1 0-2zm4 0c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zM7 3v5h10V3c0-.6.4-1 1-1s1 .4 1 1v7H5V3c0-.6.4-1 1-1s1 .4 1 1zM6 22a1 1 0 0 1-1-1v-7h14v7c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-5H7v5c0 .6-.4 1-1 1z"/></g></svg>',
									paragraph:
										'<svg width="24" height="24"><path fill-rule="evenodd" d="M10 5h7a1 1 0 0 1 0 2h-1v11a1 1 0 0 1-2 0V7h-2v11a1 1 0 0 1-2 0v-6c-.5 0-1 0-1.4-.3A3.4 3.4 0 0 1 6.8 10a3.3 3.3 0 0 1 0-2.8 3.4 3.4 0 0 1 1.8-1.8L10 5z"/></svg>',
									'paste-text':
										'<svg width="24" height="24"><path d="M18 9V5h-2v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V5H6v13h3V9h9zM9 20H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.2A3 3 0 0 1 12 1a3 3 0 0 1 2.8 2H18a2 2 0 0 1 2 2v4h1v12H9v-1zm1.5-9.5v9h9v-9h-9zM12 3a1 1 0 0 0-1 1c0 .5.4 1 1 1s1-.5 1-1-.4-1-1-1zm0 9h6v2h-.5l-.5-1h-1v4h.8v1h-3.6v-1h.8v-4h-1l-.5 1H12v-2z" fill-rule="nonzero"/></svg>',
									paste:
										'<svg width="24" height="24"><path d="M18 9V5h-2v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V5H6v13h3V9h9zM9 20H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.2A3 3 0 0 1 12 1a3 3 0 0 1 2.8 2H18a2 2 0 0 1 2 2v4h1v12H9v-1zm1.5-9.5v9h9v-9h-9zM12 3a1 1 0 0 0-1 1c0 .5.4 1 1 1s1-.5 1-1-.4-1-1-1z" fill-rule="nonzero"/></svg>',
									'permanent-pen':
										'<svg width="24" height="24"><path d="M10.5 17.5L8 20H3v-3l3.5-3.5a2 2 0 0 1 0-3L14 3l1 1-7.3 7.3a1 1 0 0 0 0 1.4l3.6 3.6c.4.4 1 .4 1.4 0L20 9l1 1-7.6 7.6a2 2 0 0 1-2.8 0l-.1-.1z" fill-rule="nonzero"/></svg>',
									plus:
										'<svg width="24" height="24"><path d="M12 4c.5 0 1 .4 1 .9V11h6a1 1 0 0 1 .1 2H13v6a1 1 0 0 1-2 .1V13H5a1 1 0 0 1-.1-2H11V5c0-.6.4-1 1-1z"/></svg>',
									preferences:
										'<svg width="24" height="24"><path d="M20.1 13.5l-1.9.2a5.8 5.8 0 0 1-.6 1.5l1.2 1.5c.4.4.3 1 0 1.4l-.7.7a1 1 0 0 1-1.4 0l-1.5-1.2a6.2 6.2 0 0 1-1.5.6l-.2 1.9c0 .5-.5.9-1 .9h-1a1 1 0 0 1-1-.9l-.2-1.9a5.8 5.8 0 0 1-1.5-.6l-1.5 1.2a1 1 0 0 1-1.4 0l-.7-.7a1 1 0 0 1 0-1.4l1.2-1.5a6.2 6.2 0 0 1-.6-1.5l-1.9-.2a1 1 0 0 1-.9-1v-1c0-.5.4-1 .9-1l1.9-.2a5.8 5.8 0 0 1 .6-1.5L5.2 7.3a1 1 0 0 1 0-1.4l.7-.7a1 1 0 0 1 1.4 0l1.5 1.2a6.2 6.2 0 0 1 1.5-.6l.2-1.9c0-.5.5-.9 1-.9h1c.5 0 1 .4 1 .9l.2 1.9a5.8 5.8 0 0 1 1.5.6l1.5-1.2a1 1 0 0 1 1.4 0l.7.7c.3.4.4 1 0 1.4l-1.2 1.5a6.2 6.2 0 0 1 .6 1.5l1.9.2c.5 0 .9.5.9 1v1c0 .5-.4 1-.9 1zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill-rule="evenodd"/></svg>',
									preview:
										'<svg width="24" height="24"><path d="M3.5 12.5c.5.8 1.1 1.6 1.8 2.3 2 2 4.2 3.2 6.7 3.2s4.7-1.2 6.7-3.2a16.2 16.2 0 0 0 2.1-2.8 15.7 15.7 0 0 0-2.1-2.8c-2-2-4.2-3.2-6.7-3.2a9.3 9.3 0 0 0-6.7 3.2A16.2 16.2 0 0 0 3.2 12c0 .2.2.3.3.5zm-2.4-1l.7-1.2L4 7.8C6.2 5.4 8.9 4 12 4c3 0 5.8 1.4 8.1 3.8a18.2 18.2 0 0 1 2.8 3.7v1l-.7 1.2-2.1 2.5c-2.3 2.4-5 3.8-8.1 3.8-3 0-5.8-1.4-8.1-3.8a18.2 18.2 0 0 1-2.8-3.7 1 1 0 0 1 0-1zm12-3.3a2 2 0 1 0 2.7 2.6 4 4 0 1 1-2.6-2.6z" fill-rule="nonzero"/></svg>',
									print:
										'<svg width="24" height="24"><path d="M18 8H6a3 3 0 0 0-3 3v6h2v3h14v-3h2v-6a3 3 0 0 0-3-3zm-1 10H7v-4h10v4zm.5-5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm.5-8H6v2h12V5z" fill-rule="nonzero"/></svg>',
									quote:
										'<svg width="24" height="24"><path d="M7.5 17h.9c.4 0 .7-.2.9-.6L11 13V8c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h2l-1.3 2.7a1 1 0 0 0 .8 1.3zm8 0h.9c.4 0 .7-.2.9-.6L19 13V8c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h2l-1.3 2.7a1 1 0 0 0 .8 1.3z" fill-rule="nonzero"/></svg>',
									redo:
										'<svg width="24" height="24"><path d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 1 1-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3z" fill-rule="nonzero"/></svg>',
									reload:
										'<svg width="24" height="24"><g fill-rule="nonzero"><path d="M5 22.1l-1.2-4.7v-.2a1 1 0 0 1 1-1l5 .4a1 1 0 1 1-.2 2l-2.2-.2a7.8 7.8 0 0 0 8.4.2 7.5 7.5 0 0 0 3.5-6.4 1 1 0 1 1 2 0 9.5 9.5 0 0 1-4.5 8 9.9 9.9 0 0 1-10.2 0l.4 1.4a1 1 0 1 1-2 .5zM13.6 7.4c0-.5.5-1 1-.9l2.8.2a8 8 0 0 0-9.5-1 7.5 7.5 0 0 0-3.6 7 1 1 0 0 1-2 0 9.5 9.5 0 0 1 4.5-8.6 10 10 0 0 1 10.9.3l-.3-1a1 1 0 0 1 2-.5l1.1 4.8a1 1 0 0 1-1 1.2l-5-.4a1 1 0 0 1-.9-1z"/></g></svg>',
									'remove-formatting':
										'<svg width="24" height="24"><path d="M13.2 6a1 1 0 0 1 0 .2l-2.6 10a1 1 0 0 1-1 .8h-.2a.8.8 0 0 1-.8-1l2.6-10H8a1 1 0 1 1 0-2h9a1 1 0 0 1 0 2h-3.8zM5 18h7a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm13 1.5L16.5 18 15 19.5a.7.7 0 0 1-1-1l1.5-1.5-1.5-1.5a.7.7 0 0 1 1-1l1.5 1.5 1.5-1.5a.7.7 0 0 1 1 1L17.5 17l1.5 1.5a.7.7 0 0 1-1 1z" fill-rule="evenodd"/></svg>',
									remove:
										'<svg width="24" height="24"><path d="M16 7h3a1 1 0 0 1 0 2h-1v9a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9H5a1 1 0 1 1 0-2h3V6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1zm-2 0V6c0-.6-.4-1-1-1h-2a1 1 0 0 0-1 1v1h4zm2 2H8v9c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V9zm-7 3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0v-4zm4 0a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0v-4z" fill-rule="nonzero"/></svg>',
									'resize-handle':
										'<svg width="10" height="10"><g fill-rule="nonzero"><path d="M8.1 1.1A.5.5 0 1 1 9 2l-7 7A.5.5 0 1 1 1 8l7-7zM8.1 5.1A.5.5 0 1 1 9 6l-3 3A.5.5 0 1 1 5 8l3-3z"/></g></svg>',
									resize:
										'<svg width="24" height="24"><path d="M4 5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h6c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3H7.4L18 16.6V13c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7v6c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3h-6a1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h3.6L6 7.4V11c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3A1 1 0 0 1 4 11V5z" fill-rule="evenodd"/></svg>',
									'restore-draft':
										'<svg width="24" height="24"><g fill-rule="evenodd"><path d="M17 13c0 .6-.4 1-1 1h-4V8c0-.6.4-1 1-1s1 .4 1 1v4h2c.6 0 1 .4 1 1z"/><path d="M4.7 10H9a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v3l2.5-2.4a9.2 9.2 0 0 1 10.8-1.5A9 9 0 0 1 13.4 21c-2.4.1-4.7-.7-6.5-2.2a1 1 0 1 1 1.3-1.5 7.2 7.2 0 0 0 11.6-3.7 7 7 0 0 0-3.5-7.7A7.2 7.2 0 0 0 8 7L4.7 10z" fill-rule="nonzero"/></g></svg>',
									'rotate-left':
										'<svg width="24" height="24"><path d="M4.7 10H9a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v3l2.5-2.4a9.2 9.2 0 0 1 10.8-1.5A9 9 0 0 1 13.4 21c-2.4.1-4.7-.7-6.5-2.2a1 1 0 1 1 1.3-1.5 7.2 7.2 0 0 0 11.6-3.7 7 7 0 0 0-3.5-7.7A7.2 7.2 0 0 0 8 7L4.7 10z" fill-rule="nonzero"/></svg>',
									'rotate-right':
										'<svg width="24" height="24"><path d="M20 8V5a1 1 0 0 1 2 0v6c0 .6-.4 1-1 1h-6a1 1 0 0 1 0-2h4.3L16 7A7.2 7.2 0 0 0 7.7 6a7 7 0 0 0 3 13.1c1.9.1 3.7-.5 5-1.7a1 1 0 0 1 1.4 1.5A9.2 9.2 0 0 1 2.2 14c-.9-3.9 1-8 4.5-9.9 3.5-1.9 8-1.3 10.8 1.5L20 8z" fill-rule="nonzero"/></svg>',
									rtl:
										'<svg width="24" height="24"><path d="M8 5h8v2h-2v12h-2V7h-2v12H8v-7c-.5 0-1 0-1.4-.3A3.4 3.4 0 0 1 4.8 10a3.3 3.3 0 0 1 0-2.8 3.4 3.4 0 0 1 1.8-1.8L8 5zm12 11.2a1 1 0 1 1-1 1.6l-3-2a1 1 0 0 1 0-1.6l3-2a1 1 0 1 1 1 1.6L18.4 15l1.8 1.2z" fill-rule="evenodd"/></svg>',
									save:
										'<svg width="24" height="24"><path d="M5 16h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2zm0 2v2h14v-2H5zm10 0h2v2h-2v-2zm-4-6.4L8.7 9.3a1 1 0 1 0-1.4 1.4l4 4c.4.4 1 .4 1.4 0l4-4a1 1 0 1 0-1.4-1.4L13 11.6V4a1 1 0 0 0-2 0v7.6z" fill-rule="nonzero"/></svg>',
									search:
										'<svg width="24" height="24"><path d="M16 17.3a8 8 0 1 1 1.4-1.4l4.3 4.4a1 1 0 0 1-1.4 1.4l-4.4-4.3zm-5-.3a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" fill-rule="nonzero"/></svg>',
									'select-all':
										'<svg width="24" height="24"><path d="M3 5h2V3a2 2 0 0 0-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2a2 2 0 0 0-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8a2 2 0 0 0 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z" fill-rule="nonzero"/></svg>',
									selected:
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm3.6 10.9L7 12.3a.7.7 0 0 0-1 1L9.6 17 18 8.6a.7.7 0 0 0 0-1 .7.7 0 0 0-1 0l-7.4 7.3z"/></svg>',
									settings:
										'<svg width="24" height="24"><path d="M11 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8v.3c0 .2 0 .3-.2.5l-.6.2H7.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6V8H5a1 1 0 1 1 0-2h2v-.3c0-.2 0-.3.2-.5l.5-.2h2.5c.3 0 .4 0 .6.2l.2.5V6zM8 8h2V6H8v2zm9 2.8v.2h2c.6 0 1 .4 1 1s-.4 1-1 1h-2v.3c0 .2 0 .3-.2.5l-.6.2h-2.4c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6V13H5a1 1 0 0 1 0-2h8v-.3c0-.2 0-.3.2-.5l.6-.2h2.4c.3 0 .4 0 .6.2l.2.6zM14 13h2v-2h-2v2zm-3 2.8v.2h8c.6 0 1 .4 1 1s-.4 1-1 1h-8v.3c0 .2 0 .3-.2.5l-.6.2H7.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6V18H5a1 1 0 0 1 0-2h2v-.3c0-.2 0-.3.2-.5l.5-.2h2.5c.3 0 .4 0 .6.2l.2.6zM8 18h2v-2H8v2z" fill-rule="evenodd"/></svg>',
									sharpen:
										'<svg width="24" height="24"><path d="M16 6l4 4-8 9-8-9 4-4h8zm-4 10.2l5.5-6.2-.1-.1H12v-.3h5.1l-.2-.2H12V9h4.6l-.2-.2H12v-.3h4.1l-.2-.2H12V8h3.6l-.2-.2H8.7L6.5 10l.1.1H12v.3H6.9l.2.2H12v.3H7.3l.2.2H12v.3H7.7l.3.2h4v.3H8.2l.2.2H12v.3H8.6l.3.2H12v.3H9l.3.2H12v.3H9.5l.2.2H12v.3h-2l.2.2H12v.3h-1.6l.2.2H12v.3h-1.1l.2.2h.9v.3h-.7l.2.2h.5v.3h-.3l.3.2z" fill-rule="evenodd"/></svg>',
									'sort-asc':
										'<svg width="24" height="24"><g fill-rule="evenodd"><path d="M4 8h5a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0 8h8a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0-4h7a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/><path fill-rule="nonzero" d="M16 8.4l-2.3 2.3a1 1 0 0 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 1 1-1.4 1.4L18 8.4V18a1 1 0 0 1-2 0V8.4z"/></g></svg>',
									'sort-dsc':
										'<svg width="24" height="24"><g fill-rule="evenodd"><path d="M4 16h5a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0-8h8a1 1 0 0 0 0-2H4a1 1 0 1 0 0 2zm0 4h7a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2z"/><path fill-rule="nonzero" d="M16 15.6l-2.3-2.3a1 1 0 0 0-1.4 1.4l4 4c.4.4 1 .4 1.4 0l4-4a1 1 0 0 0-1.4-1.4L18 15.6V6a1 1 0 0 0-2 0v9.6z"/></g></svg>',
									sourcecode:
										'<svg width="24" height="24"><g fill-rule="nonzero"><path d="M9.8 15.7c.3.3.3.8 0 1-.3.4-.9.4-1.2 0l-4.4-4.1a.8.8 0 0 1 0-1.2l4.4-4.2c.3-.3.9-.3 1.2 0 .3.3.3.8 0 1.1L6 12l3.8 3.7zM14.2 15.7c-.3.3-.3.8 0 1 .4.4.9.4 1.2 0l4.4-4.1c.3-.3.3-.9 0-1.2l-4.4-4.2a.8.8 0 0 0-1.2 0c-.3.3-.3.8 0 1.1L18 12l-3.8 3.7z"/></g></svg>',
									'spell-check':
										'<svg width="24" height="24"><path d="M6 8v3H5V5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h2c.3 0 .5.1.7.3.2.2.3.4.3.7v6H8V8H6zm0-3v2h2V5H6zm13 0h-3v5h3v1h-3a1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7V5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h3v1zm-5 1.5l-.1.7c-.1.2-.3.3-.6.3.3 0 .5.1.6.3l.1.7V10c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3h-3V4h3c.3 0 .5.1.7.3.2.2.3.4.3.7v1.5zM13 10V8h-2v2h2zm0-3V5h-2v2h2zm3 5l1 1-6.5 7L7 15.5l1.3-1 2.2 2.2L16 12z" fill-rule="evenodd"/></svg>',
									'strike-through':
										'<svg width="24" height="24"><g fill-rule="evenodd"><path d="M15.6 8.5c-.5-.7-1-1.1-1.3-1.3-.6-.4-1.3-.6-2-.6-2.7 0-2.8 1.7-2.8 2.1 0 1.6 1.8 2 3.2 2.3 4.4.9 4.6 2.8 4.6 3.9 0 1.4-.7 4.1-5 4.1A6.2 6.2 0 0 1 7 16.4l1.5-1.1c.4.6 1.6 2 3.7 2 1.6 0 2.5-.4 3-1.2.4-.8.3-2-.8-2.6-.7-.4-1.6-.7-2.9-1-1-.2-3.9-.8-3.9-3.6C7.6 6 10.3 5 12.4 5c2.9 0 4.2 1.6 4.7 2.4l-1.5 1.1z"/><path d="M5 11h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z" fill-rule="nonzero"/></g></svg>',
									subscript:
										'<svg width="24" height="24"><path d="M10.4 10l4.6 4.6-1.4 1.4L9 11.4 4.4 16 3 14.6 7.6 10 3 5.4 4.4 4 9 8.6 13.6 4 15 5.4 10.4 10zM21 19h-5v-1l1-.8 1.7-1.6c.3-.4.5-.8.5-1.2 0-.3 0-.6-.2-.7-.2-.2-.5-.3-.9-.3a2 2 0 0 0-.8.2l-.7.3-.4-1.1 1-.6 1.2-.2c.8 0 1.4.3 1.8.7.4.4.6.9.6 1.5s-.2 1.1-.5 1.6a8 8 0 0 1-1.3 1.3l-.6.6h2.6V19z" fill-rule="nonzero"/></svg>',
									superscript:
										'<svg width="24" height="24"><path d="M15 9.4L10.4 14l4.6 4.6-1.4 1.4L9 15.4 4.4 20 3 18.6 7.6 14 3 9.4 4.4 8 9 12.6 13.6 8 15 9.4zm5.9 1.6h-5v-1l1-.8 1.7-1.6c.3-.5.5-.9.5-1.3 0-.3 0-.5-.2-.7-.2-.2-.5-.3-.9-.3l-.8.2-.7.4-.4-1.2c.2-.2.5-.4 1-.5.3-.2.8-.2 1.2-.2.8 0 1.4.2 1.8.6.4.4.6 1 .6 1.6 0 .5-.2 1-.5 1.5l-1.3 1.4-.6.5h2.6V11z" fill-rule="nonzero"/></svg>',
									'table-cell-properties':
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zm-8 9H5v5h6v-5zm8 0h-6v5h6v-5zm-8-7H5v5h6V6z"/></svg>',
									'table-cell-select-all':
										'<svg width="24" height="24"><g fill-rule="evenodd"><path fill-rule="nonzero" d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zm0 2H5v12h14V6z"/><path d="M13 6v5h6v2h-6v5h-2v-5H5v-2h6V6h2z" opacity=".2"/></g></svg>',
									'table-cell-select-inner':
										'<svg width="24" height="24"><g fill-rule="evenodd"><path fill-rule="nonzero" d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zm0 2H5v12h14V6z" opacity=".2"/><path d="M13 6v5h6v2h-6v5h-2v-5H5v-2h6V6h2z"/></g></svg>',
									'table-delete-column':
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zm-4 4h-2V6h-2v2H9V6H5v12h4v-2h2v2h2v-2h2v2h4V6h-4v2zm.3.5l1 1.2-3 2.3 3 2.3-1 1.2L12 13l-3.3 2.6-1-1.2 3-2.3-3-2.3 1-1.2L12 11l3.3-2.5z"/></svg>',
									'table-delete-row':
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zm0 2H5v3h2.5v2H5v2h2.5v2H5v3h14v-3h-2.5v-2H19v-2h-2.5V9H19V6zm-4.7 1.8l1.2 1L13 12l2.6 3.3-1.2 1-2.3-3-2.3 3-1.2-1L11 12 8.5 8.7l1.2-1 2.3 3 2.3-3z"/></svg>',
									'table-delete-table':
										'<svg width="24" height="24"><g fill-rule="nonzero"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zM5 6v12h14V6H5z"/><path d="M14.4 8.6l1 1-2.3 2.4 2.3 2.4-1 1-2.4-2.3-2.4 2.3-1-1 2.3-2.4-2.3-2.4 1-1 2.4 2.3z"/></g></svg>',
									'table-insert-column-after':
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M20 4c.6 0 1 .4 1 1v2a1 1 0 0 1-2 0V6h-8v12h8v-1a1 1 0 0 1 2 0v2c0 .5-.4 1-.9 1H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h15zM9 13H5v5h4v-5zm7-5c.5 0 1 .4 1 .9V11h2a1 1 0 0 1 .1 2H17v2a1 1 0 0 1-2 .1V13h-2a1 1 0 0 1-.1-2H15V9c0-.6.4-1 1-1zM9 6H5v5h4V6z"/></svg>',
									'table-insert-column-before':
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v1h8V6H5v1a1 1 0 1 1-2 0V5c0-.6.4-1 1-1h15zm0 9h-4v5h4v-5zM8 8c.5 0 1 .4 1 .9V11h2a1 1 0 0 1 .1 2H9v2a1 1 0 0 1-2 .1V13H5a1 1 0 0 1-.1-2H7V9c0-.6.4-1 1-1zm11-2h-4v5h4V6z"/></svg>',
									'table-insert-row-above':
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M6 4a1 1 0 1 1 0 2H5v6h14V6h-1a1 1 0 0 1 0-2h2c.6 0 1 .4 1 1v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-.6.4-1 1-1h2zm5 10H5v4h6v-4zm8 0h-6v4h6v-4zM12 3c.5 0 1 .4 1 .9V6h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 .1V8H9a1 1 0 0 1 0-2h2V4c0-.6.4-1 1-1z"/></svg>',
									'table-insert-row-after':
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M12 13c.5 0 1 .4 1 .9V16h2a1 1 0 0 1 .1 2H13v2a1 1 0 0 1-2 .1V18H9a1 1 0 0 1-.1-2H11v-2c0-.6.4-1 1-1zm6 7a1 1 0 0 1 0-2h1v-6H5v6h1a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1V6c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v13c0 .5-.4 1-.9 1H18zM11 6H5v4h6V6zm8 0h-6v4h6V6z"/></svg>',
									'table-left-header':
										'<svg width="24" height="24"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zm0 9h-4v5h4v-5zm-6 0H9v5h4v-5zm0-7H9v5h4V6zm6 0h-4v5h4V6z"/></svg>',
									'table-merge-cells':
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zM5 15.5V18h3v-2.5H5zm14-5h-9V18h9v-7.5zM19 6h-4v2.5h4V6zM8 6H5v2.5h3V6zm5 0h-3v2.5h3V6zm-8 7.5h3v-3H5v3z"/></svg>',
									'table-row-properties':
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zM5 15v3h6v-3H5zm14 0h-6v3h6v-3zm0-9h-6v3h6V6zM5 9h6V6H5v3z"/></svg>',
									'table-split-cells':
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zM8 15.5H5V18h3v-2.5zm11-5h-9V18h9v-7.5zm-2.5 1l1 1-2 2 2 2-1 1-2-2-2 2-1-1 2-2-2-2 1-1 2 2 2-2zm-8.5-1H5v3h3v-3zM19 6h-4v2.5h4V6zM8 6H5v2.5h3V6zm5 0h-3v2.5h3V6z"/></svg>',
									'table-top-header':
										'<svg width="24" height="24"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zm-8 11H5v3h6v-3zm8 0h-6v3h6v-3zm0-5h-6v3h6v-3zM5 13h6v-3H5v3z"/></svg>',
									table:
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zM5 14v4h6v-4H5zm14 0h-6v4h6v-4zm0-6h-6v4h6V8zM5 12h6V8H5v4z"/></svg>',
									template:
										'<svg width="24" height="24"><path d="M19 19v-1H5v1h14zM9 16v-4a5 5 0 1 1 6 0v4h4a2 2 0 0 1 2 2v3H3v-3c0-1.1.9-2 2-2h4zm4 0v-5l.8-.6a3 3 0 1 0-3.6 0l.8.6v5h2z" fill-rule="nonzero"/></svg>',
									'temporary-placeholder':
										'<svg width="24" height="24"><g fill-rule="evenodd"><path d="M9 7.6V6h2.5V4.5a.5.5 0 1 1 1 0V6H15v1.6a8 8 0 1 1-6 0zm-2.6 5.3a.5.5 0 0 0 .3.6c.3 0 .6 0 .6-.3l.1-.2a5 5 0 0 1 3.3-2.8c.3-.1.4-.4.4-.6-.1-.3-.4-.5-.6-.4a6 6 0 0 0-4.1 3.7z"/><circle cx="14" cy="4" r="1"/><circle cx="12" cy="2" r="1"/><circle cx="10" cy="4" r="1"/></g></svg>',
									'text-color':
										'<svg width="24" height="24"><g fill-rule="evenodd"><path id="tox-icon-text-color__color" d="M3 18h18v3H3z"/><path d="M8.7 16h-.8a.5.5 0 0 1-.5-.6l2.7-9c.1-.3.3-.4.5-.4h2.8c.2 0 .4.1.5.4l2.7 9a.5.5 0 0 1-.5.6h-.8a.5.5 0 0 1-.4-.4l-.7-2.2c0-.3-.3-.4-.5-.4h-3.4c-.2 0-.4.1-.5.4l-.7 2.2c0 .3-.2.4-.4.4zm2.6-7.6l-.6 2a.5.5 0 0 0 .5.6h1.6a.5.5 0 0 0 .5-.6l-.6-2c0-.3-.3-.4-.5-.4h-.4c-.2 0-.4.1-.5.4z"/></g></svg>',
									toc:
										'<svg width="24" height="24"><path d="M5 5c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 1 1 0-2zm3 0h11c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 1 1 0-2zm-3 8c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h11c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2zm0-4c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 1 1 0-2zm3 0h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm-3 8c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
									translate:
										'<svg width="24" height="24"><path d="M12.7 14.3l-.3.7-.4.7-2.2-2.2-3.1 3c-.3.4-.8.4-1 0a.7.7 0 0 1 0-1l3.1-3A12.4 12.4 0 0 1 6.7 9H8a10.1 10.1 0 0 0 1.7 2.4c.5-.5 1-1.1 1.4-1.8l.9-2H4.7a.7.7 0 1 1 0-1.5h4.4v-.7c0-.4.3-.8.7-.8.4 0 .7.4.7.8v.7H15c.4 0 .8.3.8.7 0 .4-.4.8-.8.8h-1.4a12.3 12.3 0 0 1-1 2.4 13.5 13.5 0 0 1-1.7 2.3l1.9 1.8zm4.3-3l2.7 7.3a.5.5 0 0 1-.4.7 1 1 0 0 1-1-.7l-.6-1.5h-3.4l-.6 1.5a1 1 0 0 1-1 .7.5.5 0 0 1-.4-.7l2.7-7.4a1 1 0 1 1 2 0zm-2.2 4.4h2.4L16 12.5l-1.2 3.2z" fill-rule="evenodd"/></svg>',
									underline:
										'<svg width="24" height="24"><path d="M16 5c.6 0 1 .4 1 1v5.5a4 4 0 0 1-.4 1.8l-1 1.4a5.3 5.3 0 0 1-5.5 1 5 5 0 0 1-1.6-1c-.5-.4-.8-.9-1.1-1.4a4 4 0 0 1-.4-1.8V6c0-.6.4-1 1-1s1 .4 1 1v5.5c0 .3 0 .6.2 1l.6.7a3.3 3.3 0 0 0 2.2.8 3.4 3.4 0 0 0 2.2-.8c.3-.2.4-.5.6-.8l.2-.9V6c0-.6.4-1 1-1zM8 17h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
									undo:
										'<svg width="24" height="24"><path d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 0 1-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 1 1-1.4 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 1.4L6.4 8z" fill-rule="nonzero"/></svg>',
									unlink:
										'<svg width="24" height="24"><path d="M6.2 12.3a1 1 0 0 1 1.4 1.4l-2 2a2 2 0 1 0 2.6 2.8l4.8-4.8a1 1 0 0 0 0-1.4 1 1 0 1 1 1.4-1.3 2.9 2.9 0 0 1 0 4L9.6 20a3.9 3.9 0 0 1-5.5-5.5l2-2zm11.6-.6a1 1 0 0 1-1.4-1.4l2.1-2a2 2 0 1 0-2.7-2.8L11 10.3a1 1 0 0 0 0 1.4A1 1 0 1 1 9.6 13a2.9 2.9 0 0 1 0-4L14.4 4a3.9 3.9 0 0 1 5.5 5.5l-2 2zM7.6 6.3a.8.8 0 0 1-1 1.1L3.3 4.2a.7.7 0 1 1 1-1l3.2 3.1zM5.1 8.6a.8.8 0 0 1 0 1.5H3a.8.8 0 0 1 0-1.5H5zm5-3.5a.8.8 0 0 1-1.5 0V3a.8.8 0 0 1 1.5 0V5zm6 11.8a.8.8 0 0 1 1-1l3.2 3.2a.8.8 0 0 1-1 1L16 17zm-2.2 2a.8.8 0 0 1 1.5 0V21a.8.8 0 0 1-1.5 0V19zm5-3.5a.7.7 0 1 1 0-1.5H21a.8.8 0 0 1 0 1.5H19z" fill-rule="nonzero"/></svg>',
									unlock:
										'<svg width="24" height="24"><path d="M16 5c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v3h-2V8a1 1 0 0 0-.3-.7A1 1 0 0 0 16 7h-2a1 1 0 0 0-.7.3 1 1 0 0 0-.3.7v3h.3c.2 0 .3 0 .5.2l.2.6v7.4c0 .3 0 .4-.2.6l-.6.2H4.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6v-7.4c0-.3 0-.4.2-.6l.5-.2H11V8c0-.8.3-1.5.9-2.1.6-.6 1.3-.9 2.1-.9h2z" fill-rule="evenodd"/></svg>',
									'unordered-list':
										'<svg width="24" height="24"><path d="M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z" fill-rule="evenodd"/></svg>',
									unselected:
										'<svg width="24" height="24"><path fill-rule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm0 1a1 1 0 0 0-1 1v12c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H6z"/></svg>',
									upload:
										'<svg width="24" height="24"><path d="M18 19v-2a1 1 0 0 1 2 0v3c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v2h12zM11 6.4L8.7 8.7a1 1 0 0 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 1 1-1.4 1.4L13 6.4V16a1 1 0 0 1-2 0V6.4z" fill-rule="nonzero"/></svg>',
									user:
										'<svg width="24" height="24"><path d="M12 24a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm-8.7-5.3a11 11 0 0 0 17.4 0C19.4 16.3 14.6 15 12 15c-2.6 0-7.4 1.3-8.7 3.7zM12 13c2.2 0 4-2 4-4.5S14.2 4 12 4 8 6 8 8.5 9.8 13 12 13z" fill-rule="nonzero"/></svg>',
									visualblocks:
										'<svg width="24" height="24"><path d="M9 19v2H7v-2h2zm-4 0v2a2 2 0 0 1-2-2h2zm8 0v2h-2v-2h2zm8 0a2 2 0 0 1-2 2v-2h2zm-4 0v2h-2v-2h2zM15 7a1 1 0 0 1 0 2v7a1 1 0 0 1-2 0V9h-1v7a1 1 0 0 1-2 0v-4a2.5 2.5 0 0 1-.2-5H15zM5 15v2H3v-2h2zm16 0v2h-2v-2h2zM5 11v2H3v-2h2zm16 0v2h-2v-2h2zM5 7v2H3V7h2zm16 0v2h-2V7h2zM5 3v2H3c0-1.1.9-2 2-2zm8 0v2h-2V3h2zm6 0a2 2 0 0 1 2 2h-2V3zM9 3v2H7V3h2zm8 0v2h-2V3h2z" fill-rule="evenodd"/></svg>',
									visualchars:
										'<svg width="24" height="24"><path d="M10 5h7a1 1 0 0 1 0 2h-1v11a1 1 0 0 1-2 0V7h-2v11a1 1 0 0 1-2 0v-6c-.5 0-1 0-1.4-.3A3.4 3.4 0 0 1 6.8 10a3.3 3.3 0 0 1 0-2.8 3.4 3.4 0 0 1 1.8-1.8L10 5z" fill-rule="evenodd"/></svg>',
									warning:
										'<svg width="24" height="24"><path d="M19.8 18.3c.2.5.3.9 0 1.2-.1.3-.5.5-1 .5H5.2c-.5 0-.9-.2-1-.5-.3-.3-.2-.7 0-1.2L11 4.7l.5-.5.5-.2c.2 0 .3 0 .5.2.2 0 .3.3.5.5l6.8 13.6zM12 18c.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3 1 1 0 0 0-.3.7c0 .3.1.5.3.7.2.2.4.3.7.3zm.7-3l.3-4a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3 1 1 0 0 0-.3.7l.3 4h1.4z" fill-rule="evenodd"/></svg>',
									'zoom-in':
										'<svg width="24" height="24"><path d="M16 17.3a8 8 0 1 1 1.4-1.4l4.3 4.4a1 1 0 0 1-1.4 1.4l-4.4-4.3zm-5-.3a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-1-9a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0V8zm-2 4a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2H8z" fill-rule="nonzero"/></svg>',
									'zoom-out':
										'<svg width="24" height="24"><path d="M16 17.3a8 8 0 1 1 1.4-1.4l4.3 4.4a1 1 0 0 1-1.4 1.4l-4.4-4.3zm-5-.3a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-3-5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2H8z" fill-rule="nonzero"/></svg>'
								}
							),
							$d.get(e).icons
						);
					N(t, function(e, t) {
						ee(r, t) || n.ui.registry.addIcon(t, e);
					});
				})(e),
				(function(e) {
					var t = e.settings.theme;
					if (K(t)) {
						e.settings.theme = tz(t);
						var n = eh.get(t);
						(e.theme = new n(e, eh.urls[t])),
							e.theme.init &&
								e.theme.init(
									e,
									eh.urls[t] || e.documentBaseUrl.replace(/\/$/, ''),
									e.$
								);
					} else e.theme = {};
				})(e),
				(function(t) {
					var n = [];
					Zn.each(t.settings.plugins.split(/[ ,]/), function(e) {
						Pz(t, n, tz(e));
					});
				})(e);
			var t = (function(e) {
				var t = e.getElement();
				return (
					(e.orgDisplay = t.style.display),
					K(e.settings.theme)
						? (function(e) {
								return e.theme.renderUI();
						  })(e)
						: B(e.settings.theme)
						? (function(e) {
								var t = e.getElement(),
									n = (0, e.settings.theme)(e, t);
								return (
									n.editorContainer.nodeType &&
										(n.editorContainer.id =
											n.editorContainer.id || e.id + '_parent'),
									n.iframeContainer &&
										n.iframeContainer.nodeType &&
										(n.iframeContainer.id =
											n.iframeContainer.id || e.id + '_iframecontainer'),
									(n.height = n.iframeHeight ? n.iframeHeight : t.offsetHeight),
									n
								);
						  })(e)
						: rz(e)
				);
			})(e);
			return (
				(e.editorContainer = t.editorContainer ? t.editorContainer : null),
				ah(e),
				e.inline ? Dz(e) : Hz(e, t)
			);
		},
		Vz = Qi.DOM,
		Iz = function(t) {
			var e = t.settings,
				n = t.id;
			sa.setCode(Ss(t));
			var r = function() {
				Vz.unbind(j.window, 'ready', r), t.render();
			};
			if (Gr.Event.domLoaded) {
				if (t.getElement() && Wn.contentEditable) {
					e.inline
						? (t.inline = !0)
						: ((t.orgVisibility = t.getElement().style.visibility),
						  (t.getElement().style.visibility = 'hidden'));
					var o = t.getElement().form || Vz.getParent(n, 'form');
					o &&
						((t.formElement = o),
						e.hidden_input &&
							!Qt.isTextareaOrInput(t.getElement()) &&
							(Vz.insertAfter(
								Vz.create('input', { type: 'hidden', name: n }),
								n
							),
							(t.hasHiddenInput = !0)),
						(t.formEventDelegate = function(e) {
							t.fire(e.type, e);
						}),
						Vz.bind(o, 'submit reset', t.formEventDelegate),
						t.on('reset', function() {
							t.resetContent();
						}),
						!e.submit_patch ||
							o.submit.nodeType ||
							o.submit.length ||
							o._mceOldSubmit ||
							((o._mceOldSubmit = o.submit),
							(o.submit = function() {
								return (
									t.editorManager.triggerSave(),
									t.setDirty(!1),
									o._mceOldSubmit(o)
								);
							}))),
						(t.windowManager = th(t)),
						(t.notificationManager = Jd(t)),
						'xml' === e.encoding &&
							t.on('GetContent', function(e) {
								e.save && (e.content = Vz.encode(e.content));
							}),
						e.add_form_submit_trigger &&
							t.on('submit', function() {
								t.initialized && t.save();
							}),
						e.add_unload_trigger &&
							((t._beforeUnload = function() {
								!t.initialized ||
									t.destroyed ||
									t.isHidden() ||
									t.save({ format: 'raw', no_events: !0, set_dirty: !1 });
							}),
							t.editorManager.on('BeforeUnload', t._beforeUnload)),
						t.editorManager.add(t),
						az(t, t.suffix);
				}
			} else Vz.bind(j.window, 'ready', r);
		},
		Fz = function(e, t) {
			var n = t.firstChild,
				r = t.lastChild;
			return (
				n && 'meta' === n.name && (n = n.next),
				r && 'mce_marker' === r.attr('id') && (r = r.prev),
				(function(e, t) {
					var n = e.getNonEmptyElements();
					return t && (t.isEmpty(n) || uz(e, t));
				})(e, r) && (r = r.prev),
				!(!n || n !== r) && ('ul' === n.name || 'ol' === n.name)
			);
		},
		Uz = function(e, o, i, t) {
			function n(e) {
				var t = Vc.fromRangeStart(i),
					n = Xs(o.getRoot()),
					r = 1 === e ? n.prev(t) : n.next(t);
				return !r || fz(o, r.getNode()) !== a;
			}
			var r = (function(e, t, n) {
					var r = t.serialize(n);
					return (function(e) {
						var t = e.firstChild,
							n = e.lastChild;
						return (
							t && 'META' === t.nodeName && t.parentNode.removeChild(t),
							n && 'mce_marker' === n.id && n.parentNode.removeChild(n),
							e
						);
					})(e.createFragment(r));
				})(o, e, t),
				a = fz(o, i.startContainer),
				u = lz(cz(r.firstChild)),
				c = o.getRoot();
			return n(1)
				? hz(a, u, c)
				: n(2)
				? (function(e, t, n, r) {
						return r.insertAfter(t.reverse(), e), dz(t[0], n);
				  })(a, u, c, o)
				: (function(t, e, n, r) {
						var o = (function(e, t) {
								var n = t.cloneRange(),
									r = t.cloneRange();
								return (
									n.setStartBefore(e),
									r.setEndAfter(e),
									[n.cloneContents(), r.cloneContents()]
								);
							})(t, r),
							i = t.parentNode;
						return (
							i.insertBefore(o[0], t),
							Zn.each(e, function(e) {
								i.insertBefore(e, t);
							}),
							i.insertBefore(o[1], t),
							i.removeChild(t),
							dz(e[e.length - 1], n)
						);
				  })(a, u, c, i);
		},
		jz = function(e, t) {
			return !!fz(e, t);
		},
		qz = Qt.matchNodeNames(['td', 'th']),
		$z = function(e, t) {
			var n = (function(e) {
				var t;
				return 'string' != typeof e
					? ((t = Zn.extend({ paste: e.paste, data: { paste: e.paste } }, e)),
					  { content: e.content, details: t })
					: { content: e, details: {} };
			})(t);
			gz(e, n.content, n.details);
		},
		Wz = function(e) {
			px(e, !1) ||
				ex(e, !1) ||
				nx(e, !1) ||
				rx(e, !1) ||
				Xw(e, !1) ||
				sx(e) ||
				Yw(e, !1) ||
				ox(e, !1) ||
				(pz(e, 'Delete'), qw(e));
		},
		Kz = function(e) {
			ex(e, !0) ||
				nx(e, !0) ||
				rx(e, !0) ||
				Xw(e, !0) ||
				sx(e) ||
				Yw(e, !0) ||
				ox(e, !0) ||
				pz(e, 'ForwardDelete');
		},
		Xz = { 'font-size': 'size', 'font-family': 'face' },
		Yz = {
			getFontSize: bz('font-size'),
			getFontFamily: q(function(e) {
				return e.replace(/[\'\"\\]/g, '').replace(/,\s+/g, ',');
			}, bz('font-family')),
			toPt: function(e, t) {
				return /[0-9.]+px$/.test(e)
					? (function(e, t) {
							var n = Math.pow(10, t);
							return Math.round(e * n) / n;
					  })((72 * parseInt(e, 10)) / 96, t || 0) + 'pt'
					: e;
			}
		},
		Gz = Zn.each,
		Zz = Zn.map,
		Jz = Zn.inArray,
		Qz =
			((eE.prototype.execCommand = function(t, n, r, e) {
				var o,
					i,
					a = !1,
					u = this;
				if (!u.editor.removed) {
					if (
						(/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(
							t
						) ||
						(e && e.skip_focus)
							? zd(u.editor)
							: u.editor.focus(),
						(e = u.editor.fire('BeforeExecCommand', {
							command: t,
							ui: n,
							value: r
						})).isDefaultPrevented())
					)
						return !1;
					if (((i = t.toLowerCase()), (o = u.commands.exec[i])))
						return (
							o(i, n, r),
							u.editor.fire('ExecCommand', { command: t, ui: n, value: r }),
							!0
						);
					if (
						(Gz(this.editor.plugins, function(e) {
							if (e.execCommand && e.execCommand(t, n, r))
								return (
									u.editor.fire('ExecCommand', { command: t, ui: n, value: r }),
									!(a = !0)
								);
						}),
						a)
					)
						return a;
					if (
						u.editor.theme &&
						u.editor.theme.execCommand &&
						u.editor.theme.execCommand(t, n, r)
					)
						return (
							u.editor.fire('ExecCommand', { command: t, ui: n, value: r }), !0
						);
					try {
						a = u.editor.getDoc().execCommand(t, n, r);
					} catch (c) {}
					return (
						!!a &&
						(u.editor.fire('ExecCommand', { command: t, ui: n, value: r }), !0)
					);
				}
			}),
			(eE.prototype.queryCommandState = function(e) {
				var t;
				if (!this.editor.quirks.isHidden() && !this.editor.removed) {
					if (((e = e.toLowerCase()), (t = this.commands.state[e])))
						return t(e);
					try {
						return this.editor.getDoc().queryCommandState(e);
					} catch (n) {}
					return !1;
				}
			}),
			(eE.prototype.queryCommandValue = function(e) {
				var t;
				if (!this.editor.quirks.isHidden() && !this.editor.removed) {
					if (((e = e.toLowerCase()), (t = this.commands.value[e])))
						return t(e);
					try {
						return this.editor.getDoc().queryCommandValue(e);
					} catch (n) {}
				}
			}),
			(eE.prototype.addCommands = function(e, n) {
				var r = this;
				(n = n || 'exec'),
					Gz(e, function(t, e) {
						Gz(e.toLowerCase().split(','), function(e) {
							r.commands[n][e] = t;
						});
					});
			}),
			(eE.prototype.addCommand = function(e, o, i) {
				var a = this;
				(e = e.toLowerCase()),
					(this.commands.exec[e] = function(e, t, n, r) {
						return o.call(i || a.editor, t, n, r);
					});
			}),
			(eE.prototype.queryCommandSupported = function(e) {
				if (((e = e.toLowerCase()), this.commands.exec[e])) return !0;
				try {
					return this.editor.getDoc().queryCommandSupported(e);
				} catch (t) {}
				return !1;
			}),
			(eE.prototype.addQueryStateHandler = function(e, t, n) {
				var r = this;
				(e = e.toLowerCase()),
					(this.commands.state[e] = function() {
						return t.call(n || r.editor);
					});
			}),
			(eE.prototype.addQueryValueHandler = function(e, t, n) {
				var r = this;
				(e = e.toLowerCase()),
					(this.commands.value[e] = function() {
						return t.call(n || r.editor);
					});
			}),
			(eE.prototype.hasCustomCommand = function(e) {
				return (e = e.toLowerCase()), !!this.commands.exec[e];
			}),
			(eE.prototype.execNativeCommand = function(e, t, n) {
				return (
					t === undefined && (t = !1),
					n === undefined && (n = null),
					this.editor.getDoc().execCommand(e, t, n)
				);
			}),
			(eE.prototype.isFormatMatch = function(e) {
				return this.editor.formatter.match(e);
			}),
			(eE.prototype.toggleFormat = function(e, t) {
				this.editor.formatter.toggle(e, t ? { value: t } : undefined),
					this.editor.nodeChanged();
			}),
			(eE.prototype.storeSelection = function(e) {
				this.selectionBookmark = this.editor.selection.getBookmark(e);
			}),
			(eE.prototype.restoreSelection = function() {
				this.editor.selection.moveToBookmark(this.selectionBookmark);
			}),
			(eE.prototype.setupCommands = function(i) {
				var a = this;
				function e(n) {
					return function() {
						var e = i.selection.isCollapsed()
								? [i.dom.getParent(i.selection.getNode(), i.dom.isBlock)]
								: i.selection.getSelectedBlocks(),
							t = Zz(e, function(e) {
								return !!i.formatter.matchNode(e, n);
							});
						return -1 !== Jz(t, !0);
					};
				}
				this.addCommands({
					'mceResetDesignMode,mceBeginUndoLevel': function() {},
					'mceEndUndoLevel,mceAddUndoLevel': function() {
						i.undoManager.add();
					},
					'Cut,Copy,Paste': function(e) {
						var t,
							n = i.getDoc();
						try {
							a.execNativeCommand(e);
						} catch (o) {
							t = !0;
						}
						if (
							('paste' !== e || n.queryCommandEnabled(e) || (t = !0),
							t || !n.queryCommandSupported(e))
						) {
							var r = i.translate(
								"Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead."
							);
							Wn.mac && (r = r.replace(/Ctrl\+/g, '\u2318+')),
								i.notificationManager.open({ text: r, type: 'error' });
						}
					},
					unlink: function() {
						if (i.selection.isCollapsed()) {
							var e = i.dom.getParent(i.selection.getStart(), 'a');
							e && i.dom.remove(e, !0);
						} else i.formatter.remove('link');
					},
					'JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone': function(
						e
					) {
						var t = e.substring(7);
						'full' === t && (t = 'justify'),
							Gz('left,center,right,justify'.split(','), function(e) {
								t !== e && i.formatter.remove('align' + e);
							}),
							'none' !== t && a.toggleFormat('align' + t);
					},
					'InsertUnorderedList,InsertOrderedList': function(e) {
						var t, n;
						a.execNativeCommand(e),
							(t = i.dom.getParent(i.selection.getNode(), 'ol,ul')) &&
								((n = t.parentNode),
								/^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName) &&
									(a.storeSelection(),
									i.dom.split(n, t),
									a.restoreSelection()));
					},
					'Bold,Italic,Underline,Strikethrough,Superscript,Subscript': function(
						e
					) {
						a.toggleFormat(e);
					},
					'ForeColor,HiliteColor': function(e, t, n) {
						a.toggleFormat(e, n);
					},
					FontName: function(e, t, n) {
						zz(i, n);
					},
					FontSize: function(e, t, n) {
						!(function(e, t) {
							e.formatter.toggle('fontsize', { value: xz(e, t) }),
								e.nodeChanged();
						})(i, n);
					},
					RemoveFormat: function(e) {
						i.formatter.remove(e);
					},
					mceBlockQuote: function() {
						a.toggleFormat('blockquote');
					},
					FormatBlock: function(e, t, n) {
						return a.toggleFormat(n || 'p');
					},
					mceCleanup: function() {
						var e = i.selection.getBookmark();
						i.setContent(i.getContent()), i.selection.moveToBookmark(e);
					},
					mceRemoveNode: function(e, t, n) {
						var r = n || i.selection.getNode();
						r !== i.getBody() &&
							(a.storeSelection(), i.dom.remove(r, !0), a.restoreSelection());
					},
					mceSelectNodeDepth: function(e, t, n) {
						var r = 0;
						i.dom.getParent(
							i.selection.getNode(),
							function(e) {
								if (1 === e.nodeType && r++ === n)
									return i.selection.select(e), !1;
							},
							i.getBody()
						);
					},
					mceSelectNode: function(e, t, n) {
						i.selection.select(n);
					},
					mceInsertContent: function(e, t, n) {
						$z(i, n);
					},
					mceInsertRawHTML: function(e, t, n) {
						i.selection.setContent('tiny_mce_marker');
						var r = i.getContent();
						i.setContent(
							r.replace(/tiny_mce_marker/g, function() {
								return n;
							})
						);
					},
					mceInsertNewLine: function(e, t, n) {
						Rx(i, n);
					},
					mceToggleFormat: function(e, t, n) {
						a.toggleFormat(n);
					},
					mceSetContent: function(e, t, n) {
						i.setContent(n);
					},
					'Indent,Outdent': function(e) {
						MC(i, e);
					},
					mceRepaint: function() {},
					InsertHorizontalRule: function() {
						i.execCommand('mceInsertContent', !1, '<hr />');
					},
					mceToggleVisualAid: function() {
						(i.hasVisual = !i.hasVisual), i.addVisual();
					},
					mceReplaceContent: function(e, t, n) {
						i.execCommand(
							'mceInsertContent',
							!1,
							n.replace(
								/\{\$selection\}/g,
								i.selection.getContent({ format: 'text' })
							)
						);
					},
					mceInsertLink: function(e, t, n) {
						var r;
						'string' == typeof n && (n = { href: n }),
							(r = i.dom.getParent(i.selection.getNode(), 'a')),
							(n.href = n.href.replace(/ /g, '%20')),
							(r && n.href) || i.formatter.remove('link'),
							n.href && i.formatter.apply('link', n, r);
					},
					selectAll: function() {
						var e = i.dom.getParent(
							i.selection.getStart(),
							Qt.isContentEditableTrue
						);
						if (e) {
							var t = i.dom.createRng();
							t.selectNodeContents(e), i.selection.setRng(t);
						}
					},
					delete: function() {
						Wz(i);
					},
					forwardDelete: function() {
						Kz(i);
					},
					mceNewDocument: function() {
						i.setContent('');
					},
					InsertLineBreak: function(e, t, n) {
						return Sx(i, n), !0;
					}
				}),
					a.addCommands(
						{
							JustifyLeft: e('alignleft'),
							JustifyCenter: e('aligncenter'),
							JustifyRight: e('alignright'),
							JustifyFull: e('alignjustify'),
							'Bold,Italic,Underline,Strikethrough,Superscript,Subscript': function(
								e
							) {
								return a.isFormatMatch(e);
							},
							mceBlockQuote: function() {
								return a.isFormatMatch('blockquote');
							},
							Outdent: function() {
								return TC(i);
							},
							'InsertUnorderedList,InsertOrderedList': function(e) {
								var t = i.dom.getParent(i.selection.getNode(), 'ul,ol');
								return (
									t &&
									(('insertunorderedlist' === e && 'UL' === t.tagName) ||
										('insertorderedlist' === e && 'OL' === t.tagName))
								);
							}
						},
						'state'
					),
					a.addCommands({
						Undo: function() {
							i.undoManager.undo();
						},
						Redo: function() {
							i.undoManager.redo();
						}
					}),
					a.addQueryValueHandler(
						'FontName',
						function() {
							return (function(t) {
								return wz(t).fold(
									function() {
										return Cz(t)
											.map(function(e) {
												return Yz.getFontFamily(t.getBody(), e);
											})
											.getOr('');
									},
									function(e) {
										return Yz.getFontFamily(t.getBody(), e);
									}
								);
							})(i);
						},
						this
					),
					a.addQueryValueHandler(
						'FontSize',
						function() {
							return (function(t) {
								return wz(t).fold(
									function() {
										return Cz(t)
											.map(function(e) {
												return Yz.getFontSize(t.getBody(), e);
											})
											.getOr('');
									},
									function(e) {
										return Yz.getFontSize(t.getBody(), e);
									}
								);
							})(i);
						},
						this
					);
			}),
			eE);
	function eE(e) {
		(this.commands = { state: {}, exec: {}, value: {} }),
			(this.editor = e),
			this.setupCommands(e);
	}
	var tE = Zn.makeMap(
			'focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel',
			' '
		),
		nE =
			((rE.isNative = function(e) {
				return !!tE[e.toLowerCase()];
			}),
			(rE.prototype.fire = function(e, t) {
				var n, r, o, i;
				if (
					((e = e.toLowerCase()),
					((t = t || {}).type = e),
					t.target || (t.target = this.scope),
					t.preventDefault ||
						((t.preventDefault = function() {
							t.isDefaultPrevented = a;
						}),
						(t.stopPropagation = function() {
							t.isPropagationStopped = a;
						}),
						(t.stopImmediatePropagation = function() {
							t.isImmediatePropagationStopped = a;
						}),
						(t.isDefaultPrevented = s),
						(t.isPropagationStopped = s),
						(t.isImmediatePropagationStopped = s)),
					this.settings.beforeFire && this.settings.beforeFire(t),
					(n = this.bindings[e]))
				)
					for (r = 0, o = n.length; r < o; r++) {
						if (
							((i = n[r]).once && this.off(e, i.func),
							t.isImmediatePropagationStopped())
						)
							return t.stopPropagation(), t;
						if (!1 === i.func.call(this.scope, t)) return t.preventDefault(), t;
					}
				return t;
			}),
			(rE.prototype.on = function(e, t, n, r) {
				var o, i, a;
				if ((!1 === t && (t = s), t)) {
					var u = { func: t };
					for (
						r && Zn.extend(u, r), a = (i = e.toLowerCase().split(' ')).length;
						a--;

					)
						(e = i[a]),
							(o = this.bindings[e]) ||
								((o = this.bindings[e] = []), this.toggleEvent(e, !0)),
							n ? o.unshift(u) : o.push(u);
				}
				return this;
			}),
			(rE.prototype.off = function(e, t) {
				var n, r, o, i, a;
				if (e)
					for (n = (i = e.toLowerCase().split(' ')).length; n--; ) {
						if (((e = i[n]), (r = this.bindings[e]), !e)) {
							for (o in this.bindings)
								this.toggleEvent(o, !1), delete this.bindings[o];
							return this;
						}
						if (r) {
							if (t)
								for (a = r.length; a--; )
									r[a].func === t &&
										((r = r.slice(0, a).concat(r.slice(a + 1))),
										(this.bindings[e] = r));
							else r.length = 0;
							r.length || (this.toggleEvent(e, !1), delete this.bindings[e]);
						}
					}
				else {
					for (e in this.bindings) this.toggleEvent(e, !1);
					this.bindings = {};
				}
				return this;
			}),
			(rE.prototype.once = function(e, t, n) {
				return this.on(e, t, n, { once: !0 });
			}),
			(rE.prototype.has = function(e) {
				return (
					(e = e.toLowerCase()),
					!(!this.bindings[e] || 0 === this.bindings[e].length)
				);
			}),
			rE);
	function rE(e) {
		(this.bindings = {}),
			(this.settings = e || {}),
			(this.scope = this.settings.scope || this),
			(this.toggleEvent = this.settings.toggleEvent || s);
	}
	function oE(n) {
		return (
			n._eventDispatcher ||
				(n._eventDispatcher = new nE({
					scope: n,
					toggleEvent: function(e, t) {
						nE.isNative(e) && n.toggleNativeEvent && n.toggleNativeEvent(e, t);
					}
				})),
			n._eventDispatcher
		);
	}
	function iE(e, t, n) {
		ba(e, t) && !1 === n
			? (function(e, t) {
					ma(e) ? e.dom().classList.remove(t) : pa(e, t);
					ya(e);
			  })(e, t)
			: n && va(e, t);
	}
	function aE(e, t, n) {
		try {
			e.getDoc().execCommand(t, !1, n);
		} catch (r) {}
	}
	function uE(e, t) {
		e.dom().contentEditable = t ? 'true' : 'false';
	}
	function cE(e, t) {
		var n = it.fromDom(e.getBody());
		iE(n, 'mce-content-readonly', t),
			t
				? (e.selection.controlSelection.hideResizeRect(),
				  e._selectionOverrides.hideFakeCaret(),
				  (function(e) {
						R.from(e.selection.getNode()).each(function(e) {
							e.removeAttribute('data-mce-selected');
						});
				  })(e),
				  (e.readonly = !0),
				  uE(n, !1),
				  (function(e) {
						F(Ca(e, '*[contenteditable="true"]'), function(e) {
							en(e, yE, 'true'), uE(e, !1);
						});
				  })(n))
				: ((e.readonly = !1),
				  uE(n, !0),
				  (function(e) {
						F(Ca(e, '*[' + yE + '="true"]'), function(e) {
							Ye(e, yE), uE(e, !0);
						});
				  })(n),
				  aE(e, 'StyleWithCSS', !1),
				  aE(e, 'enableInlineTableEditing', !1),
				  aE(e, 'enableObjectResizing', !1),
				  Od(e) && e.focus(),
				  (function(e) {
						e.selection.setRng(e.selection.getRng());
				  })(e),
				  e.nodeChanged());
	}
	function sE(e) {
		return !0 === e.readonly;
	}
	function lE(t) {
		t.parser.addAttributeFilter('contenteditable', function(e) {
			sE(t) &&
				F(e, function(e) {
					e.attr(yE, e.attr('contenteditable')),
						e.attr('contenteditable', 'false');
				});
		}),
			t.serializer.addAttributeFilter(yE, function(e) {
				sE(t) &&
					F(e, function(e) {
						e.attr('contenteditable', e.attr(yE));
					});
			}),
			t.serializer.addTempAttr(yE);
	}
	function fE(e, t) {
		return 'selectionchange' === t
			? e.getDoc()
			: !e.inline &&
			  /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)
			? e.getDoc().documentElement
			: e.settings.event_root
			? (e.eventRoot || (e.eventRoot = bE.select(e.settings.event_root)[0]),
			  e.eventRoot)
			: e.getBody();
	}
	function dE(e, t, n) {
		!(function(e) {
			return !e.hidden && !sE(e);
		})(e)
			? sE(e) &&
			  (function(e, t) {
					var n = t.target;
					!(function(e) {
						return 'click' === e.type;
					})(t) ||
						hh.metaKeyPressed(t) ||
						!(function(e, t) {
							return null !== e.dom.getParent(t, 'a');
						})(e, n) ||
						t.preventDefault();
			  })(e, n)
			: e.fire(t, n);
	}
	function hE(i, a) {
		var e, t;
		if ((i.delegates || (i.delegates = {}), !i.delegates[a] && !i.removed))
			if (((e = fE(i, a)), i.settings.event_root)) {
				if (
					(pE ||
						((pE = {}),
						i.editorManager.on('removeEditor', function() {
							var e;
							if (!i.editorManager.activeEditor && pE) {
								for (e in pE) i.dom.unbind(fE(i, e));
								pE = null;
							}
						})),
					pE[a])
				)
					return;
				(t = function(e) {
					for (
						var t = e.target, n = i.editorManager.get(), r = n.length;
						r--;

					) {
						var o = n[r].getBody();
						(o !== t && !bE.isChildOf(t, o)) || dE(n[r], a, e);
					}
				}),
					(pE[a] = t),
					bE.bind(e, a, t);
			} else
				(t = function(e) {
					dE(i, a, e);
				}),
					bE.bind(e, a, t),
					(i.delegates[a] = t);
	}
	function mE(e, t, n, r) {
		var o = n[t.get()],
			i = n[r];
		try {
			i.activate();
		} catch (HN) {
			return void j.console.error(
				'problem while activating editor mode ' + r + ':',
				HN
			);
		}
		o.deactivate(),
			o.editorReadOnly !== i.editorReadOnly && cE(e, i.editorReadOnly),
			t.set(r),
			(function(e, t) {
				e.fire('SwitchMode', { mode: t });
			})(e, r);
	}
	function gE(t) {
		var n = at('design'),
			r = at({
				design: { activate: i, deactivate: i, editorReadOnly: !1 },
				readonly: { activate: i, deactivate: i, editorReadOnly: !0 }
			});
		return (
			(function(e) {
				e.serializer
					? lE(e)
					: e.on('PreInit', function() {
							lE(e);
					  });
			})(t),
			(function(t) {
				t.on('ShowCaret', function(e) {
					sE(t) && e.preventDefault();
				}),
					t.on('ObjectSelected', function(e) {
						sE(t) && e.preventDefault();
					});
			})(t),
			{
				isReadOnly: function() {
					return sE(t);
				},
				set: function(e) {
					return (function(e, t, n, r) {
						if (r !== n.get()) {
							if (!ee(t, r))
								throw new Error("Editor mode '" + r + "' is invalid");
							e.initialized
								? mE(e, n, t, r)
								: e.on('init', function() {
										return mE(e, n, t, r);
								  });
						}
					})(t, r.get(), n, e);
				},
				get: function() {
					return n.get();
				},
				register: function(e, t) {
					r.set(
						(function(e, t, n) {
							var r;
							if (h(wE, t))
								throw new Error('Cannot override default mode ' + t);
							return te(
								te({}, e),
								(((r = {})[t] = te(te({}, n), {
									deactivate: function() {
										try {
											n.deactivate();
										} catch (HN) {
											j.console.error(
												'problem while deactivating editor mode ' + t + ':',
												HN
											);
										}
									}
								})),
								r)
							);
						})(r.get(), e, t)
					);
				}
			}
		);
	}
	var pE,
		vE = {
			fire: function(e, t, n) {
				if (this.removed && 'remove' !== e && 'detach' !== e) return t;
				var r = oE(this).fire(e, t);
				if (!1 !== n && this.parent)
					for (var o = this.parent(); o && !r.isPropagationStopped(); )
						o.fire(e, r, !1), (o = o.parent());
				return r;
			},
			on: function(e, t, n) {
				return oE(this).on(e, t, n);
			},
			off: function(e, t) {
				return oE(this).off(e, t);
			},
			once: function(e, t) {
				return oE(this).once(e, t);
			},
			hasEventListeners: function(e) {
				return oE(this).has(e);
			}
		},
		yE = 'data-mce-contenteditable',
		bE = Qi.DOM,
		CE = te(te({}, vE), {
			bindPendingEventDelegates: function() {
				var t = this;
				Zn.each(t._pendingNativeEvents, function(e) {
					hE(t, e);
				});
			},
			toggleNativeEvent: function(e, t) {
				var n = this;
				'focus' !== e &&
					'blur' !== e &&
					(t
						? n.initialized
							? hE(n, e)
							: n._pendingNativeEvents
							? n._pendingNativeEvents.push(e)
							: (n._pendingNativeEvents = [e])
						: n.initialized &&
						  (n.dom.unbind(fE(n, e), e, n.delegates[e]),
						  delete n.delegates[e]));
			},
			unbindAllNativeEvents: function() {
				var e,
					t = this,
					n = t.getBody(),
					r = t.dom;
				if (t.delegates) {
					for (e in t.delegates) t.dom.unbind(fE(t, e), e, t.delegates[e]);
					delete t.delegates;
				}
				!t.inline &&
					n &&
					r &&
					((n.onload = null), r.unbind(t.getWin()), r.unbind(t.getDoc())),
					r && (r.unbind(n), r.unbind(t.getContainer()));
			}
		}),
		wE = ['design', 'readonly'],
		xE = Zn.each,
		zE = Zn.explode,
		EE = {
			f1: 112,
			f2: 113,
			f3: 114,
			f4: 115,
			f5: 116,
			f6: 117,
			f7: 118,
			f8: 119,
			f9: 120,
			f10: 121,
			f11: 122,
			f12: 123
		},
		NE = Zn.makeMap('alt,ctrl,shift,meta,access'),
		SE =
			((kE.prototype.add = function(e, n, r, o) {
				var t,
					i = this;
				return (
					'string' == typeof (t = r)
						? (r = function() {
								i.editor.execCommand(t, !1, null);
						  })
						: Zn.isArray(t) &&
						  (r = function() {
								i.editor.execCommand(t[0], t[1], t[2]);
						  }),
					xE(zE(Zn.trim(e)), function(e) {
						var t = i.createShortcut(e, n, r, o);
						i.shortcuts[t.id] = t;
					}),
					!0
				);
			}),
			(kE.prototype.remove = function(e) {
				var t = this.createShortcut(e);
				return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0);
			}),
			(kE.prototype.parseShortcut = function(e) {
				var t,
					n,
					r = {};
				for (n in (xE(zE(e.toLowerCase(), '+'), function(e) {
					e in NE
						? (r[e] = !0)
						: /^[0-9]{2,}$/.test(e)
						? (r.keyCode = parseInt(e, 10))
						: ((r.charCode = e.charCodeAt(0)),
						  (r.keyCode = EE[e] || e.toUpperCase().charCodeAt(0)));
				}),
				(t = [r.keyCode]),
				NE))
					r[n] ? t.push(n) : (r[n] = !1);
				return (
					(r.id = t.join(',')),
					r.access && ((r.alt = !0), Wn.mac ? (r.ctrl = !0) : (r.shift = !0)),
					r.meta && (Wn.mac ? (r.meta = !0) : ((r.ctrl = !0), (r.meta = !1))),
					r
				);
			}),
			(kE.prototype.createShortcut = function(e, t, n, r) {
				var o;
				return (
					((o = Zn.map(zE(e, '>'), this.parseShortcut))[
						o.length - 1
					] = Zn.extend(o[o.length - 1], { func: n, scope: r || this.editor })),
					Zn.extend(o[0], {
						desc: this.editor.translate(t),
						subpatterns: o.slice(1)
					})
				);
			}),
			(kE.prototype.hasModifier = function(e) {
				return e.altKey || e.ctrlKey || e.metaKey;
			}),
			(kE.prototype.isFunctionKey = function(e) {
				return 'keydown' === e.type && 112 <= e.keyCode && e.keyCode <= 123;
			}),
			(kE.prototype.matchShortcut = function(e, t) {
				return (
					!!t &&
					t.ctrl === e.ctrlKey &&
					t.meta === e.metaKey &&
					t.alt === e.altKey &&
					t.shift === e.shiftKey &&
					!!(
						e.keyCode === t.keyCode ||
						(e.charCode && e.charCode === t.charCode)
					) &&
					(e.preventDefault(), !0)
				);
			}),
			(kE.prototype.executeShortcutAction = function(e) {
				return e.func ? e.func.call(e.scope) : null;
			}),
			kE);
	function kE(e) {
		(this.shortcuts = {}), (this.pendingPatterns = []), (this.editor = e);
		var n = this;
		e.on('keyup keypress keydown', function(t) {
			(!n.hasModifier(t) && !n.isFunctionKey(t)) ||
				t.isDefaultPrevented() ||
				(xE(n.shortcuts, function(e) {
					if (n.matchShortcut(t, e))
						return (
							(n.pendingPatterns = e.subpatterns.slice(0)),
							'keydown' === t.type && n.executeShortcutAction(e),
							!0
						);
				}),
				n.matchShortcut(t, n.pendingPatterns[0]) &&
					(1 === n.pendingPatterns.length &&
						'keydown' === t.type &&
						n.executeShortcutAction(n.pendingPatterns[0]),
					n.pendingPatterns.shift()));
		});
	}
	function TE() {
		var e = (function() {
			function e(n, r) {
				return function(e, t) {
					return (n[e.toLowerCase()] = te(te({}, t), { type: r }));
				};
			}
			var t = {},
				n = {},
				r = {},
				o = {},
				i = {},
				a = {},
				u = {};
			return {
				addButton: e(t, 'button'),
				addGroupToolbarButton: e(t, 'grouptoolbarbutton'),
				addToggleButton: e(t, 'togglebutton'),
				addMenuButton: e(t, 'menubutton'),
				addSplitButton: e(t, 'splitbutton'),
				addMenuItem: e(n, 'menuitem'),
				addNestedMenuItem: e(n, 'nestedmenuitem'),
				addToggleMenuItem: e(n, 'togglemenuitem'),
				addAutocompleter: e(r, 'autocompleter'),
				addContextMenu: e(i, 'contextmenu'),
				addContextToolbar: e(a, 'contexttoolbar'),
				addContextForm: e(a, 'contextform'),
				addSidebar: e(u, 'sidebar'),
				addIcon: function(e, t) {
					return (o[e.toLowerCase()] = t);
				},
				getAll: function() {
					return {
						buttons: t,
						menuItems: n,
						icons: o,
						popups: r,
						contextMenus: i,
						contextToolbars: a,
						sidebars: u
					};
				}
			};
		})();
		return {
			addAutocompleter: e.addAutocompleter,
			addButton: e.addButton,
			addContextForm: e.addContextForm,
			addContextMenu: e.addContextMenu,
			addContextToolbar: e.addContextToolbar,
			addIcon: e.addIcon,
			addMenuButton: e.addMenuButton,
			addMenuItem: e.addMenuItem,
			addNestedMenuItem: e.addNestedMenuItem,
			addSidebar: e.addSidebar,
			addSplitButton: e.addSplitButton,
			addToggleButton: e.addToggleButton,
			addGroupToolbarButton: e.addGroupToolbarButton,
			addToggleMenuItem: e.addToggleMenuItem,
			getAll: e.getAll
		};
	}
	var AE = Zn.each,
		ME = Zn.trim,
		RE = 'source protocol authority userInfo user password host port relative path directory file query anchor'.split(
			' '
		),
		_E = { ftp: 21, http: 80, https: 443, mailto: 25 },
		DE =
			((OE.parseDataUri = function(e) {
				var t,
					n = decodeURIComponent(e).split(','),
					r = /data:([^;]+)/.exec(n[0]);
				return r && (t = r[1]), { type: t, data: n[1] };
			}),
			(OE.getDocumentBaseUrl = function(e) {
				var t;
				return (
					(t =
						0 !== e.protocol.indexOf('http') && 'file:' !== e.protocol
							? e.href
							: e.protocol + '//' + e.host + e.pathname),
					/^[^:]+:\/\/\/?[^\/]+\//.test(t) &&
						((t = t.replace(/[\?#].*$/, '').replace(/[\/\\][^\/]+$/, '')),
						/[\/\\]$/.test(t) || (t += '/')),
					t
				);
			}),
			(OE.prototype.setPath = function(e) {
				var t = /^(.*?)\/?(\w+)?$/.exec(e);
				(this.path = t[0]),
					(this.directory = t[1]),
					(this.file = t[2]),
					(this.source = ''),
					this.getURI();
			}),
			(OE.prototype.toRelative = function(e) {
				var t;
				if ('./' === e) return e;
				var n = new OE(e, { base_uri: this });
				if (
					('mce_host' !== n.host && this.host !== n.host && n.host) ||
					this.port !== n.port ||
					(this.protocol !== n.protocol && '' !== n.protocol)
				)
					return n.getURI();
				var r = this.getURI(),
					o = n.getURI();
				return r === o ||
					('/' === r.charAt(r.length - 1) && r.substr(0, r.length - 1) === o)
					? r
					: ((t = this.toRelPath(this.path, n.path)),
					  n.query && (t += '?' + n.query),
					  n.anchor && (t += '#' + n.anchor),
					  t);
			}),
			(OE.prototype.toAbsolute = function(e, t) {
				var n = new OE(e, { base_uri: this });
				return n.getURI(t && this.isSameOrigin(n));
			}),
			(OE.prototype.isSameOrigin = function(e) {
				if (this.host == e.host && this.protocol == e.protocol) {
					if (this.port == e.port) return !0;
					var t = _E[this.protocol];
					if (t && (this.port || t) == (e.port || t)) return !0;
				}
				return !1;
			}),
			(OE.prototype.toRelPath = function(e, t) {
				var n,
					r,
					o,
					i = 0,
					a = '',
					u = e.substring(0, e.lastIndexOf('/')).split('/');
				if (((n = t.split('/')), u.length >= n.length))
					for (r = 0, o = u.length; r < o; r++)
						if (r >= n.length || u[r] !== n[r]) {
							i = r + 1;
							break;
						}
				if (u.length < n.length)
					for (r = 0, o = n.length; r < o; r++)
						if (r >= u.length || u[r] !== n[r]) {
							i = r + 1;
							break;
						}
				if (1 === i) return t;
				for (r = 0, o = u.length - (i - 1); r < o; r++) a += '../';
				for (r = i - 1, o = n.length; r < o; r++)
					a += r !== i - 1 ? '/' + n[r] : n[r];
				return a;
			}),
			(OE.prototype.toAbsPath = function(e, t) {
				var n,
					r,
					o,
					i = 0,
					a = [];
				r = /\/$/.test(t) ? '/' : '';
				var u = e.split('/'),
					c = t.split('/');
				for (
					AE(u, function(e) {
						e && a.push(e);
					}),
						u = a,
						n = c.length - 1,
						a = [];
					0 <= n;
					n--
				)
					0 !== c[n].length &&
						'.' !== c[n] &&
						('..' !== c[n] ? (0 < i ? i-- : a.push(c[n])) : i++);
				return (
					0 !==
						(o =
							(n = u.length - i) <= 0
								? w(a).join('/')
								: u.slice(0, n).join('/') + '/' + w(a).join('/')).indexOf(
							'/'
						) && (o = '/' + o),
					r && o.lastIndexOf('/') !== o.length - 1 && (o += r),
					o
				);
			}),
			(OE.prototype.getURI = function(e) {
				var t;
				return (
					void 0 === e && (e = !1),
					(this.source && !e) ||
						((t = ''),
						e ||
							(this.protocol ? (t += this.protocol + '://') : (t += '//'),
							this.userInfo && (t += this.userInfo + '@'),
							this.host && (t += this.host),
							this.port && (t += ':' + this.port)),
						this.path && (t += this.path),
						this.query && (t += '?' + this.query),
						this.anchor && (t += '#' + this.anchor),
						(this.source = t)),
					this.source
				);
			}),
			OE);
	function OE(e, t) {
		(e = ME(e)), (this.settings = t || {});
		var n = this.settings.base_uri,
			r = this;
		if (/^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e)) r.source = e;
		else {
			var o = 0 === e.indexOf('//');
			if (
				(0 !== e.indexOf('/') ||
					o ||
					(e = ((n && n.protocol) || 'http') + '://mce_host' + e),
				!/^[\w\-]*:?\/\//.test(e))
			) {
				var i = this.settings.base_uri
					? this.settings.base_uri.path
					: new OE(j.document.location.href).directory;
				if (this.settings.base_uri && '' == this.settings.base_uri.protocol)
					e = '//mce_host' + r.toAbsPath(i, e);
				else {
					var a = /([^#?]*)([#?]?.*)/.exec(e);
					e =
						((n && n.protocol) || 'http') +
						'://mce_host' +
						r.toAbsPath(i, a[1]) +
						a[2];
				}
			}
			e = e.replace(/@@/g, '(mce_at)');
			var u = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
				e
			);
			AE(RE, function(e, t) {
				var n = u[t];
				(n = n && n.replace(/\(mce_at\)/g, '@@')), (r[e] = n);
			}),
				n &&
					(r.protocol || (r.protocol = n.protocol),
					r.userInfo || (r.userInfo = n.userInfo),
					r.port || 'mce_host' !== r.host || (r.port = n.port),
					(r.host && 'mce_host' !== r.host) || (r.host = n.host),
					(r.source = '')),
				o && (r.protocol = '');
		}
	}
	var HE = Qi.DOM,
		BE = Zn.extend,
		PE = Zn.each,
		LE = Zn.resolve,
		VE = Wn.ie,
		IE =
			((FE.prototype.render = function() {
				Iz(this);
			}),
			(FE.prototype.focus = function(e) {
				_d(this, e);
			}),
			(FE.prototype.hasFocus = function() {
				return Dd(this);
			}),
			(FE.prototype.execCallback = function(e) {
				for (var t = [], n = 1; n < arguments.length; n++)
					t[n - 1] = arguments[n];
				var r,
					o = this.settings[e];
				if (o)
					return (
						this.callbackLookup &&
							(r = this.callbackLookup[e]) &&
							((o = r.func), (r = r.scope)),
						'string' == typeof o &&
							((r = (r = o.replace(/\.\w+$/, '')) ? LE(r) : 0),
							(o = LE(o)),
							(this.callbackLookup = this.callbackLookup || {}),
							(this.callbackLookup[e] = { func: o, scope: r })),
						o.apply(r || this, Array.prototype.slice.call(arguments, 1))
					);
			}),
			(FE.prototype.translate = function(e) {
				return sa.translate(e);
			}),
			(FE.prototype.getParam = function(e, t, n) {
				return id(this, e, t, n);
			}),
			(FE.prototype.nodeChanged = function(e) {
				this._nodeChangeDispatcher.nodeChanged(e);
			}),
			(FE.prototype.addCommand = function(e, t, n) {
				this.editorCommands.addCommand(e, t, n);
			}),
			(FE.prototype.addQueryStateHandler = function(e, t, n) {
				this.editorCommands.addQueryStateHandler(e, t, n);
			}),
			(FE.prototype.addQueryValueHandler = function(e, t, n) {
				this.editorCommands.addQueryValueHandler(e, t, n);
			}),
			(FE.prototype.addShortcut = function(e, t, n, r) {
				this.shortcuts.add(e, t, n, r);
			}),
			(FE.prototype.execCommand = function(e, t, n, r) {
				return this.editorCommands.execCommand(e, t, n, r);
			}),
			(FE.prototype.queryCommandState = function(e) {
				return this.editorCommands.queryCommandState(e);
			}),
			(FE.prototype.queryCommandValue = function(e) {
				return this.editorCommands.queryCommandValue(e);
			}),
			(FE.prototype.queryCommandSupported = function(e) {
				return this.editorCommands.queryCommandSupported(e);
			}),
			(FE.prototype.show = function() {
				this.hidden &&
					((this.hidden = !1),
					this.inline
						? (this.getBody().contentEditable = 'true')
						: (HE.show(this.getContainer()), HE.hide(this.id)),
					this.load(),
					this.fire('show'));
			}),
			(FE.prototype.hide = function() {
				var e = this,
					t = e.getDoc();
				e.hidden ||
					(VE && t && !e.inline && t.execCommand('SelectAll'),
					e.save(),
					e.inline
						? ((e.getBody().contentEditable = 'false'),
						  e === e.editorManager.focusedEditor &&
								(e.editorManager.focusedEditor = null))
						: (HE.hide(e.getContainer()),
						  HE.setStyle(e.id, 'display', e.orgDisplay)),
					(e.hidden = !0),
					e.fire('hide'));
			}),
			(FE.prototype.isHidden = function() {
				return !!this.hidden;
			}),
			(FE.prototype.setProgressState = function(e, t) {
				this.fire('ProgressState', { state: e, time: t });
			}),
			(FE.prototype.load = function(e) {
				var t,
					n = this.getElement();
				if (this.removed) return '';
				if (n) {
					(e = e || {}).load = !0;
					var r = Qt.isTextareaOrInput(n) ? n.value : n.innerHTML;
					return (
						(t = this.setContent(r, e)),
						(e.element = n),
						e.no_events || this.fire('LoadContent', e),
						(e.element = n = null),
						t
					);
				}
			}),
			(FE.prototype.save = function(e) {
				var t,
					n,
					r = this,
					o = r.getElement();
				if (o && r.initialized && !r.removed)
					return (
						((e = e || {}).save = !0),
						(e.element = o),
						(e.content = r.getContent(e)),
						e.no_events || r.fire('SaveContent', e),
						'raw' === e.format && r.fire('RawSaveContent', e),
						(t = e.content),
						Qt.isTextareaOrInput(o)
							? (o.value = t)
							: ((!e.is_removing && r.inline) || (o.innerHTML = t),
							  (n = HE.getParent(r.id, 'form')) &&
									PE(n.elements, function(e) {
										if (e.name === r.id) return (e.value = t), !1;
									})),
						(e.element = o = null),
						!1 !== e.set_dirty && r.setDirty(!1),
						t
					);
			}),
			(FE.prototype.setContent = function(e, t) {
				return Xf(this, e, t);
			}),
			(FE.prototype.getContent = function(e) {
				return (function(t, n) {
					return (
						void 0 === n && (n = {}),
						R.from(t.getBody()).fold(
							$('tree' === n.format ? new hf('body', 11) : ''),
							function(e) {
								return bf(t, n, e);
							}
						)
					);
				})(this, e);
			}),
			(FE.prototype.insertContent = function(e, t) {
				t && (e = BE({ content: e }, t)),
					this.execCommand('mceInsertContent', !1, e);
			}),
			(FE.prototype.resetContent = function(e) {
				e === undefined
					? Xf(this, this.startContent, { format: 'raw' })
					: Xf(this, e),
					this.undoManager.reset(),
					this.setDirty(!1),
					this.nodeChanged();
			}),
			(FE.prototype.isDirty = function() {
				return !this.isNotDirty;
			}),
			(FE.prototype.setDirty = function(e) {
				var t = !this.isNotDirty;
				(this.isNotDirty = !e), e && e !== t && this.fire('dirty');
			}),
			(FE.prototype.getContainer = function() {
				return (
					this.container ||
						(this.container = HE.get(
							this.editorContainer || this.id + '_parent'
						)),
					this.container
				);
			}),
			(FE.prototype.getContentAreaContainer = function() {
				return this.contentAreaContainer;
			}),
			(FE.prototype.getElement = function() {
				return (
					this.targetElm || (this.targetElm = HE.get(this.id)), this.targetElm
				);
			}),
			(FE.prototype.getWin = function() {
				var e;
				return (
					this.contentWindow ||
						((e = this.iframeElement) &&
							(this.contentWindow = e.contentWindow)),
					this.contentWindow
				);
			}),
			(FE.prototype.getDoc = function() {
				var e;
				return (
					this.contentDocument ||
						((e = this.getWin()) && (this.contentDocument = e.document)),
					this.contentDocument
				);
			}),
			(FE.prototype.getBody = function() {
				var e = this.getDoc();
				return this.bodyElement || (e ? e.body : null);
			}),
			(FE.prototype.convertURL = function(e, t, n) {
				var r = this.settings;
				return r.urlconverter_callback
					? this.execCallback('urlconverter_callback', e, n, !0, t)
					: !r.convert_urls ||
					  (n && 'LINK' === n.nodeName) ||
					  0 === e.indexOf('file:') ||
					  0 === e.length
					? e
					: r.relative_urls
					? this.documentBaseURI.toRelative(e)
					: (e = this.documentBaseURI.toAbsolute(e, r.remove_script_host));
			}),
			(FE.prototype.addVisual = function(e) {
				var n,
					r = this,
					o = r.settings,
					i = r.dom;
				(e = e || r.getBody()),
					r.hasVisual === undefined && (r.hasVisual = o.visual),
					PE(i.select('table,a', e), function(e) {
						var t;
						switch (e.nodeName) {
							case 'TABLE':
								return (
									(n = o.visual_table_class || 'mce-item-table'),
									void (((t = i.getAttrib(e, 'border')) && '0' !== t) ||
									!r.hasVisual
										? i.removeClass(e, n)
										: i.addClass(e, n))
								);
							case 'A':
								return void (
									i.getAttrib(e, 'href') ||
									((t = i.getAttrib(e, 'name') || e.id),
									(n = o.visual_anchor_class || 'mce-item-anchor'),
									t && r.hasVisual ? i.addClass(e, n) : i.removeClass(e, n))
								);
						}
					}),
					r.fire('VisualAid', { element: e, hasVisual: r.hasVisual });
			}),
			(FE.prototype.remove = function() {
				Gf(this);
			}),
			(FE.prototype.destroy = function(e) {
				Zf(this, e);
			}),
			(FE.prototype.uploadImages = function(e) {
				return this.editorUpload.uploadImages(e);
			}),
			(FE.prototype._scanForImages = function() {
				return this.editorUpload.scanForImages();
			}),
			(FE.prototype.addButton = function() {
				throw new Error(
					'editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead'
				);
			}),
			(FE.prototype.addSidebar = function() {
				throw new Error(
					'editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead'
				);
			}),
			(FE.prototype.addMenuItem = function() {
				throw new Error(
					'editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead'
				);
			}),
			(FE.prototype.addContextToolbar = function() {
				throw new Error(
					'editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead'
				);
			}),
			FE);
	function FE(e, t, n) {
		var r = this;
		(this.plugins = {}),
			(this.contentCSS = []),
			(this.contentStyles = []),
			(this.loadedCSS = {}),
			(this.isNotDirty = !1),
			(this.editorManager = n),
			(this.documentBaseUrl = n.documentBaseURL),
			BE(this, CE),
			(this.settings = rd(this, e, this.documentBaseUrl, n.defaultSettings, t)),
			this.settings.suffix && (n.suffix = this.settings.suffix),
			(this.suffix = n.suffix),
			this.settings.base_url && n._setBaseUrl(this.settings.base_url),
			(this.baseUri = n.baseURI),
			this.settings.referrer_policy &&
				(ra.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy),
				Qi.DOM.styleSheetLoader._setReferrerPolicy(
					this.settings.referrer_policy
				)),
			(wa.languageLoad = this.settings.language_load),
			(wa.baseURL = n.baseURL),
			(this.id = e),
			this.setDirty(!1),
			(this.documentBaseURI = new DE(this.settings.document_base_url, {
				base_uri: this.baseUri
			})),
			(this.baseURI = this.baseUri),
			(this.inline = !!this.settings.inline),
			(this.shortcuts = new SE(this)),
			(this.editorCommands = new Qz(this)),
			this.settings.cache_suffix &&
				(Wn.cacheSuffix = this.settings.cache_suffix.replace(/^[\?\&]+/, '')),
			(this.ui = { registry: TE() });
		var o = gE(this);
		(this.mode = o),
			(this.setMode = o.set),
			n.fire('SetupEditor', { editor: this }),
			this.execCallback('setup', this),
			(this.$ = Ii.overrideDefaults(function() {
				return {
					context: r.inline ? r.getBody() : r.getDoc(),
					element: r.getBody()
				};
			}));
	}
	function UE(t) {
		var n = t.type;
		YE(nN.get(), function(e) {
			switch (n) {
				case 'scroll':
					e.fire('ScrollWindow', t);
					break;
				case 'resize':
					e.fire('ResizeWindow', t);
			}
		});
	}
	function jE(e) {
		e !== JE &&
			(e
				? Ii(window).on('resize scroll', UE)
				: Ii(window).off('resize scroll', UE),
			(JE = e));
	}
	function qE(t) {
		var e = eN;
		delete QE[t.id];
		for (var n = 0; n < QE.length; n++)
			if (QE[n] === t) {
				QE.splice(n, 1);
				break;
			}
		return (
			(eN = U(eN, function(e) {
				return t !== e;
			})),
			nN.activeEditor === t && (nN.activeEditor = 0 < eN.length ? eN[0] : null),
			nN.focusedEditor === t && (nN.focusedEditor = null),
			e.length !== eN.length
		);
	}
	var $E,
		WE,
		KE = Qi.DOM,
		XE = Zn.explode,
		YE = Zn.each,
		GE = Zn.extend,
		ZE = 0,
		JE = !1,
		QE = [],
		eN = [],
		tN = 'CSS1Compat' !== j.document.compatMode,
		nN = te(te({}, vE), {
			baseURI: null,
			baseURL: null,
			defaultSettings: {},
			documentBaseURL: null,
			suffix: null,
			$: Ii,
			majorVersion: '5',
			minorVersion: '2.0',
			releaseDate: '2020-02-13',
			editors: QE,
			i18n: sa,
			activeEditor: null,
			focusedEditor: null,
			settings: {},
			setup: function() {
				var e,
					t,
					n = '';
				(t = DE.getDocumentBaseUrl(j.document.location)),
					/^[^:]+:\/\/\/?[^\/]+\//.test(t) &&
						((t = t.replace(/[\?#].*$/, '').replace(/[\/\\][^\/]+$/, '')),
						/[\/\\]$/.test(t) || (t += '/'));
				var r = window.tinymce || window.tinyMCEPreInit;
				if (r) (e = r.base || r.baseURL), (n = r.suffix);
				else {
					for (
						var o = j.document.getElementsByTagName('script'), i = 0;
						i < o.length;
						i++
					) {
						var a;
						if ('' !== (a = o[i].src || '')) {
							var u = a.substring(a.lastIndexOf('/'));
							if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(a)) {
								-1 !== u.indexOf('.min') && (n = '.min'),
									(e = a.substring(0, a.lastIndexOf('/')));
								break;
							}
						}
					}
					if (!e && j.document.currentScript)
						-1 !== (a = j.document.currentScript.src).indexOf('.min') &&
							(n = '.min'),
							(e = a.substring(0, a.lastIndexOf('/')));
				}
				(this.baseURL = new DE(t).toAbsolute(e)),
					(this.documentBaseURL = t),
					(this.baseURI = new DE(this.baseURL)),
					(this.suffix = n),
					Td(this);
			},
			overrideDefaults: function(e) {
				var t, n;
				(t = e.base_url) && this._setBaseUrl(t),
					(n = e.suffix),
					e.suffix && (this.suffix = n);
				var r = (this.defaultSettings = e).plugin_base_urls;
				for (var o in r) wa.PluginManager.urls[o] = r[o];
			},
			init: function(r) {
				var n,
					u,
					c = this;
				u = Zn.makeMap(
					'area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu',
					' '
				);
				function s(e) {
					var t = e.id;
					return (
						t ||
							((t = (t = e.name) && !KE.get(t) ? e.name : KE.uniqueId()),
							e.setAttribute('id', t)),
						t
					);
				}
				function l(e, t) {
					return t.constructor === RegExp
						? t.test(e.className)
						: KE.hasClass(e, t);
				}
				var f = function(e) {
						n = e;
					},
					e = function() {
						function n(e, t, n) {
							var r = new IE(e, t, c);
							a.push(r),
								r.on('init', function() {
									++i === o.length && f(a);
								}),
								(r.targetElm = r.targetElm || n),
								r.render();
						}
						var o,
							i = 0,
							a = [];
						KE.unbind(window, 'ready', e),
							(function(e) {
								var t = r[e];
								if (t) t.apply(c, Array.prototype.slice.call(arguments, 2));
							})('onpageload'),
							(o = Ii.unique(
								(function(t) {
									var e,
										n = [];
									if (Wn.browser.isIE() && Wn.browser.version.major < 11)
										return (
											ch.initError(
												'TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/'
											),
											[]
										);
									if (tN)
										return (
											ch.initError(
												'Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode.'
											),
											[]
										);
									if (t.types)
										return (
											YE(t.types, function(e) {
												n = n.concat(KE.select(e.selector));
											}),
											n
										);
									if (t.selector) return KE.select(t.selector);
									if (t.target) return [t.target];
									switch (t.mode) {
										case 'exact':
											0 < (e = t.elements || '').length &&
												YE(XE(e), function(t) {
													var e;
													(e = KE.get(t))
														? n.push(e)
														: YE(j.document.forms, function(e) {
																YE(e.elements, function(e) {
																	e.name === t &&
																		((t = 'mce_editor_' + ZE++),
																		KE.setAttrib(e, 'id', t),
																		n.push(e));
																});
														  });
												});
											break;
										case 'textareas':
										case 'specific_textareas':
											YE(KE.select('textarea'), function(e) {
												(t.editor_deselector && l(e, t.editor_deselector)) ||
													(t.editor_selector && !l(e, t.editor_selector)) ||
													n.push(e);
											});
									}
									return n;
								})(r)
							)),
							r.types
								? YE(r.types, function(t) {
										Zn.each(o, function(e) {
											return (
												!KE.is(e, t.selector) || (n(s(e), GE({}, r, t), e), !1)
											);
										});
								  })
								: (Zn.each(o, function(e) {
										!(function(e) {
											e &&
												e.initialized &&
												!(e.getContainer() || e.getBody()).parentNode &&
												(qE(e),
												e.unbindAllNativeEvents(),
												e.destroy(!0),
												(e.removed = !0),
												(e = null));
										})(c.get(e.id));
								  }),
								  0 ===
								  (o = Zn.grep(o, function(e) {
										return !c.get(e.id);
								  })).length
										? f([])
										: YE(o, function(e) {
												!(function(e, t) {
													return e.inline && t.tagName.toLowerCase() in u;
												})(r, e)
													? n(s(e), r, e)
													: ch.initError(
															'Could not initialize inline editor on invalid inline target element',
															e
													  );
										  }));
					};
				return (
					(c.settings = r),
					KE.bind(window, 'ready', e),
					new wn(function(t) {
						n
							? t(n)
							: (f = function(e) {
									t(e);
							  });
					})
				);
			},
			get: function(t) {
				return 0 === arguments.length
					? eN.slice(0)
					: K(t)
					? g(eN, function(e) {
							return e.id === t;
					  }).getOr(null)
					: P(t) && eN[t]
					? eN[t]
					: null;
			},
			add: function(e) {
				var n = this;
				return (
					QE[e.id] === e ||
						(null === n.get(e.id) &&
							((function(e) {
								return 'length' !== e;
							})(e.id) && (QE[e.id] = e),
							QE.push(e),
							eN.push(e)),
						jE(!0),
						(n.activeEditor = e),
						n.fire('AddEditor', { editor: e }),
						$E ||
							(($E = function(e) {
								var t = n.fire('BeforeUnload');
								if (t.returnValue)
									return (
										e.preventDefault(),
										(e.returnValue = t.returnValue),
										t.returnValue
									);
							}),
							window.addEventListener('beforeunload', $E))),
					e
				);
			},
			createEditor: function(e, t) {
				return this.add(new IE(e, t, this));
			},
			remove: function(e) {
				var t,
					n,
					r = this;
				if (e) {
					if (!K(e))
						return (
							(n = e),
							O(r.get(n.id))
								? null
								: (qE(n) && r.fire('RemoveEditor', { editor: n }),
								  0 === eN.length &&
										window.removeEventListener('beforeunload', $E),
								  n.remove(),
								  jE(0 < eN.length),
								  n)
						);
					YE(KE.select(e), function(e) {
						(n = r.get(e.id)) && r.remove(n);
					});
				} else for (t = eN.length - 1; 0 <= t; t--) r.remove(eN[t]);
			},
			execCommand: function(e, t, n) {
				var r = this.get(n);
				switch (e) {
					case 'mceAddEditor':
						return this.get(n) || new IE(n, this.settings, this).render(), !0;
					case 'mceRemoveEditor':
						return r && r.remove(), !0;
					case 'mceToggleEditor':
						return (
							r
								? r.isHidden()
									? r.show()
									: r.hide()
								: this.execCommand('mceAddEditor', 0, n),
							!0
						);
				}
				return !!this.activeEditor && this.activeEditor.execCommand(e, t, n);
			},
			triggerSave: function() {
				YE(eN, function(e) {
					e.save();
				});
			},
			addI18n: function(e, t) {
				sa.add(e, t);
			},
			translate: function(e) {
				return sa.translate(e);
			},
			setActive: function(e) {
				var t = this.activeEditor;
				this.activeEditor !== e &&
					(t && t.fire('deactivate', { relatedTarget: e }),
					e.fire('activate', { relatedTarget: t })),
					(this.activeEditor = e);
			},
			_setBaseUrl: function(e) {
				(this.baseURL = new DE(this.documentBaseURL).toAbsolute(
					e.replace(/\/+$/, '')
				)),
					(this.baseURI = new DE(this.baseURL));
			}
		});
	function rN(n) {
		return {
			walk: function(e, t) {
				return ef(n, e, t);
			},
			split: xg,
			normalize: function(t) {
				return Bm(n, t).fold($(!1), function(e) {
					return (
						t.setStart(e.startContainer, e.startOffset),
						t.setEnd(e.endContainer, e.endOffset),
						!0
					);
				});
			}
		};
	}
	nN.setup(),
		((WE = rN = rN || {}).compareRanges = Hm),
		(WE.getCaretRangeFromPoint = pm),
		(WE.getSelectedNode = Ja),
		(WE.getNode = Qa);
	function oN(e, t, n) {
		var r, o, i, a, u, c;
		return (
			(r = t.x),
			(o = t.y),
			(i = e.w),
			(a = e.h),
			(u = t.w),
			(c = t.h),
			'b' === (n = (n || '').split(''))[0] && (o += c),
			'r' === n[1] && (r += u),
			'c' === n[0] && (o += mN(c / 2)),
			'c' === n[1] && (r += mN(u / 2)),
			'b' === n[3] && (o -= a),
			'r' === n[4] && (r -= i),
			'c' === n[3] && (o -= mN(a / 2)),
			'c' === n[4] && (r -= mN(i / 2)),
			gN(r, o, i, a)
		);
	}
	function iN() {}
	var aN,
		uN,
		cN,
		sN,
		lN = rN,
		fN =
			((aN = {}),
			(uN = {}),
			{
				load: function(r, o) {
					var i = 'Script at URL "' + o + '" failed to load',
						a =
							'Script at URL "' +
							o +
							'" did not call `tinymce.Resource.add(\'' +
							r +
							"', data)` within 1 second";
					if (aN[r] !== undefined) return aN[r];
					var e = new wn(function(e, t) {
						var n = (function(e, t, n) {
							function r(n) {
								return function() {
									for (var e = [], t = 0; t < arguments.length; t++)
										e[t] = arguments[t];
									o ||
										((o = !0),
										null !== i && (j.clearTimeout(i), (i = null)),
										n.apply(null, e));
								};
							}
							void 0 === n && (n = 1e3);
							var o = !1,
								i = null,
								a = r(e),
								u = r(t);
							return {
								start: function() {
									for (var e = [], t = 0; t < arguments.length; t++)
										e[t] = arguments[t];
									o ||
										null !== i ||
										(i = j.setTimeout(function() {
											return u.apply(null, e);
										}, n));
								},
								resolve: a,
								reject: u
							};
						})(e, t);
						(uN[r] = n.resolve),
							ra.ScriptLoader.loadScript(
								o,
								function() {
									return n.start(a);
								},
								function() {
									return n.reject(i);
								}
							);
					});
					return (aN[r] = e);
				},
				add: function(e, t) {
					uN[e] !== undefined && (uN[e](t), delete uN[e]),
						(aN[e] = wn.resolve(t));
				}
			}),
		dN = Math.min,
		hN = Math.max,
		mN = Math.round,
		gN = function(e, t, n, r) {
			return { x: e, y: t, w: n, h: r };
		},
		pN = {
			inflate: function(e, t, n) {
				return gN(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n);
			},
			relativePosition: oN,
			findBestRelativePosition: function(e, t, n, r) {
				var o, i;
				for (i = 0; i < r.length; i++)
					if (
						(o = oN(e, t, r[i])).x >= n.x &&
						o.x + o.w <= n.w + n.x &&
						o.y >= n.y &&
						o.y + o.h <= n.h + n.y
					)
						return r[i];
				return null;
			},
			intersect: function(e, t) {
				var n, r, o, i;
				return (
					(n = hN(e.x, t.x)),
					(r = hN(e.y, t.y)),
					(o = dN(e.x + e.w, t.x + t.w)),
					(i = dN(e.y + e.h, t.y + t.h)),
					o - n < 0 || i - r < 0 ? null : gN(n, r, o - n, i - r)
				);
			},
			clamp: function(e, t, n) {
				var r, o, i, a, u, c, s, l, f, d;
				return (
					(u = e.x),
					(c = e.y),
					(s = e.x + e.w),
					(l = e.y + e.h),
					(f = t.x + t.w),
					(d = t.y + t.h),
					(r = hN(0, t.x - u)),
					(o = hN(0, t.y - c)),
					(i = hN(0, s - f)),
					(a = hN(0, l - d)),
					(u += r),
					(c += o),
					n && ((s += r), (l += o), (u -= i), (c -= a)),
					gN(u, c, (s -= i) - u, (l -= a) - c)
				);
			},
			create: gN,
			fromClientRect: function(e) {
				return gN(e.left, e.top, e.width, e.height);
			}
		},
		vN = Zn.each,
		yN = Zn.extend;
	iN.extend = cN = function(n) {
		function r() {
			var e, t, n;
			if (
				!sN &&
				(this.init && this.init.apply(this, arguments), (t = this.Mixins))
			)
				for (e = t.length; e--; )
					(n = t[e]).init && n.init.apply(this, arguments);
		}
		function t() {
			return this;
		}
		function e(n, r) {
			return function() {
				var e,
					t = this._super;
				return (
					(this._super = u[n]),
					(e = r.apply(this, arguments)),
					(this._super = t),
					e
				);
			};
		}
		var o,
			i,
			a,
			u = this.prototype;
		for (i in ((sN = !0),
		(o = new this()),
		(sN = !1),
		n.Mixins &&
			(vN(n.Mixins, function(e) {
				for (var t in e) 'init' !== t && (n[t] = e[t]);
			}),
			u.Mixins && (n.Mixins = u.Mixins.concat(n.Mixins))),
		n.Methods &&
			vN(n.Methods.split(','), function(e) {
				n[e] = t;
			}),
		n.Properties &&
			vN(n.Properties.split(','), function(e) {
				var t = '_' + e;
				n[e] = function(e) {
					return e !== undefined ? ((this[t] = e), this) : this[t];
				};
			}),
		n.Statics &&
			vN(n.Statics, function(e, t) {
				r[t] = e;
			}),
		n.Defaults && u.Defaults && (n.Defaults = yN({}, u.Defaults, n.Defaults)),
		n))
			'function' == typeof (a = n[i]) && u[i] ? (o[i] = e(i, a)) : (o[i] = a);
		return (r.prototype = o), ((r.constructor = r).extend = cN), r;
	};
	var bN = Math.min,
		CN = Math.max,
		wN = Math.round,
		xN = {
			serialize: function(e) {
				var t = JSON.stringify(e);
				return K(t)
					? t.replace(/[\u0080-\uFFFF]/g, function(e) {
							var t = e.charCodeAt(0).toString(16);
							return '\\u' + '0000'.substring(t.length) + t;
					  })
					: t;
			},
			parse: function(e) {
				try {
					return JSON.parse(e);
				} catch (t) {}
			}
		},
		zN = {
			callbacks: {},
			count: 0,
			send: function(t) {
				var n = this,
					r = Qi.DOM,
					o = t.count !== undefined ? t.count : n.count,
					i = 'tinymce_jsonp_' + o;
				(n.callbacks[o] = function(e) {
					r.remove(i), delete n.callbacks[o], t.callback(e);
				}),
					r.add(r.doc.body, 'script', {
						id: i,
						src: t.url,
						type: 'text/javascript'
					}),
					n.count++;
			}
		},
		EN = te(te({}, vE), {
			send: function(e) {
				var t,
					n = 0,
					r = function() {
						!e.async || 4 === t.readyState || 1e4 < n++
							? (e.success && n < 1e4 && 200 === t.status
									? e.success.call(e.success_scope, '' + t.responseText, t, e)
									: e.error &&
									  e.error.call(
											e.error_scope,
											1e4 < n ? 'TIMED_OUT' : 'GENERAL',
											t,
											e
									  ),
							  (t = null))
							: Pn.setTimeout(r, 10);
					};
				if (
					((e.scope = e.scope || this),
					(e.success_scope = e.success_scope || e.scope),
					(e.error_scope = e.error_scope || e.scope),
					(e.async = !1 !== e.async),
					(e.data = e.data || ''),
					EN.fire('beforeInitialize', { settings: e }),
					(t = new j.XMLHttpRequest()))
				) {
					if (
						(t.overrideMimeType && t.overrideMimeType(e.content_type),
						t.open(e.type || (e.data ? 'POST' : 'GET'), e.url, e.async),
						e.crossDomain && (t.withCredentials = !0),
						e.content_type &&
							t.setRequestHeader('Content-Type', e.content_type),
						e.requestheaders &&
							Zn.each(e.requestheaders, function(e) {
								t.setRequestHeader(e.key, e.value);
							}),
						t.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
						(t = EN.fire('beforeSend', { xhr: t, settings: e }).xhr).send(
							e.data
						),
						!e.async)
					)
						return r();
					Pn.setTimeout(r, 10);
				}
			}
		}),
		NN = Zn.extend,
		SN =
			((kN.sendRPC = function(e) {
				return new kN().send(e);
			}),
			(kN.prototype.send = function(e) {
				var n = e.error,
					r = e.success,
					o = NN(this.settings, e);
				(o.success = function(e, t) {
					void 0 === (e = xN.parse(e)) && (e = { error: 'JSON Parse error.' }),
						e.error
							? n.call(o.error_scope || o.scope, e.error, t)
							: r.call(o.success_scope || o.scope, e.result);
				}),
					(o.error = function(e, t) {
						n && n.call(o.error_scope || o.scope, e, t);
					}),
					(o.data = xN.serialize({
						id: e.id || 'c' + this.count++,
						method: e.method,
						params: e.params
					})),
					(o.content_type = 'application/json'),
					EN.send(o);
			}),
			kN);
	function kN(e) {
		(this.settings = NN({}, e)), (this.count = 0);
	}
	var TN, AN, MN, RN;
	try {
		TN = j.window.localStorage;
	} catch (HN) {
		(AN = {}),
			(MN = []),
			(RN = {
				getItem: function(e) {
					var t = AN[e];
					return t || null;
				},
				setItem: function(e, t) {
					MN.push(e), (AN[e] = String(t));
				},
				key: function(e) {
					return MN[e];
				},
				removeItem: function(t) {
					(MN = MN.filter(function(e) {
						return e === t;
					})),
						delete AN[t];
				},
				clear: function() {
					(MN = []), (AN = {});
				},
				length: 0
			}),
			Object.defineProperty(RN, 'length', {
				get: function() {
					return MN.length;
				},
				configurable: !1,
				enumerable: !1
			}),
			(TN = RN);
	}
	var _N,
		DN = {
			geom: { Rect: pN },
			util: {
				Promise: wn,
				Delay: Pn,
				Tools: Zn,
				VK: hh,
				URI: DE,
				Class: iN,
				EventDispatcher: nE,
				Observable: vE,
				I18n: sa,
				XHR: EN,
				JSON: xN,
				JSONRequest: SN,
				JSONP: zN,
				LocalStorage: TN,
				Color: function(e) {
					function t(e) {
						var t;
						return (
							'object' == typeof e
								? 'r' in e
									? ((u = e.r), (c = e.g), (s = e.b))
									: 'v' in e &&
									  (function(e, t, n) {
											var r, o, i, a;
											if (
												((e = (parseInt(e, 10) || 0) % 360),
												(t = parseInt(t, 10) / 100),
												(n = parseInt(n, 10) / 100),
												(t = CN(0, bN(t, 1))),
												(n = CN(0, bN(n, 1))),
												0 !== t)
											) {
												switch (
													((r = e / 60),
													(i = (o = n * t) * (1 - Math.abs((r % 2) - 1))),
													(a = n - o),
													Math.floor(r))
												) {
													case 0:
														(u = o), (c = i), (s = 0);
														break;
													case 1:
														(u = i), (c = o), (s = 0);
														break;
													case 2:
														(u = 0), (c = o), (s = i);
														break;
													case 3:
														(u = 0), (c = i), (s = o);
														break;
													case 4:
														(u = i), (c = 0), (s = o);
														break;
													case 5:
														(u = o), (c = 0), (s = i);
														break;
													default:
														u = c = s = 0;
												}
												(u = wN(255 * (u + a))),
													(c = wN(255 * (c + a))),
													(s = wN(255 * (s + a)));
											} else u = c = s = wN(255 * n);
									  })(e.h, e.s, e.v)
								: (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(
										e
								  ))
								? ((u = parseInt(t[1], 10)),
								  (c = parseInt(t[2], 10)),
								  (s = parseInt(t[3], 10)))
								: (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))
								? ((u = parseInt(t[1], 16)),
								  (c = parseInt(t[2], 16)),
								  (s = parseInt(t[3], 16)))
								: (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) &&
								  ((u = parseInt(t[1] + t[1], 16)),
								  (c = parseInt(t[2] + t[2], 16)),
								  (s = parseInt(t[3] + t[3], 16))),
							(u = u < 0 ? 0 : 255 < u ? 255 : u),
							(c = c < 0 ? 0 : 255 < c ? 255 : c),
							(s = s < 0 ? 0 : 255 < s ? 255 : s),
							n
						);
					}
					var n = {},
						u = 0,
						c = 0,
						s = 0;
					return (
						e && t(e),
						(n.toRgb = function() {
							return { r: u, g: c, b: s };
						}),
						(n.toHsv = function() {
							return (function(e, t, n) {
								var r, o, i, a;
								return (
									(o = 0),
									(i = bN((e /= 255), bN((t /= 255), (n /= 255)))) ===
									(a = CN(e, CN(t, n)))
										? { h: 0, s: 0, v: 100 * (o = i) }
										: ((r = (a - i) / a),
										  {
												h: wN(
													60 *
														((e === i ? 3 : n === i ? 1 : 5) -
															(e === i ? t - n : n === i ? e - t : n - e) /
																((o = a) - i))
												),
												s: wN(100 * r),
												v: wN(100 * o)
										  })
								);
							})(u, c, s);
						}),
						(n.toHex = function() {
							function e(e) {
								return 1 < (e = parseInt(e, 10).toString(16)).length
									? e
									: '0' + e;
							}
							return '#' + e(u) + e(c) + e(s);
						}),
						(n.parse = t),
						n
					);
				}
			},
			dom: {
				EventUtils: Gr,
				Sizzle: Jo,
				DomQuery: Ii,
				TreeWalker: Fi,
				TextSeeker: cc,
				DOMUtils: Qi,
				ScriptLoader: ra,
				RangeUtils: lN,
				Serializer: Ym,
				ControlSelection: lh,
				BookmarkManager: fh,
				Selection: Im,
				Event: Gr.Event
			},
			html: {
				Styles: $r,
				Entities: Sr,
				Node: hf,
				Schema: Pr,
				SaxParser: fd,
				DomParser: $m,
				Writer: Cf,
				Serializer: wf
			},
			Env: Wn,
			AddOnManager: wa,
			Annotator: uf,
			Formatter: Wp,
			UndoManager: nv,
			EditorCommands: Qz,
			WindowManager: th,
			NotificationManager: Jd,
			EditorObservable: CE,
			Shortcuts: SE,
			Editor: IE,
			FocusManager: Nd,
			EditorManager: nN,
			DOM: Qi.DOM,
			ScriptLoader: ra.ScriptLoader,
			PluginManager: wa.PluginManager,
			ThemeManager: wa.ThemeManager,
			IconManager: $d,
			Resource: fN,
			trim: Zn.trim,
			isArray: Zn.isArray,
			is: Zn.is,
			toArray: Zn.toArray,
			makeMap: Zn.makeMap,
			each: Zn.each,
			map: Zn.map,
			grep: Zn.grep,
			inArray: Zn.inArray,
			extend: Zn.extend,
			create: Zn.create,
			walk: Zn.walk,
			createNS: Zn.createNS,
			resolve: Zn.resolve,
			explode: Zn.explode,
			_addCacheSuffix: Zn._addCacheSuffix,
			isOpera: Wn.opera,
			isWebKit: Wn.webkit,
			isIE: Wn.ie,
			isGecko: Wn.gecko,
			isMac: Wn.mac
		},
		ON = Zn.extend(nN, DN);
	(_N = ON),
		(window.tinymce = _N),
		(window.tinyMCE = _N),
		(function(e) {
			if ('object' == typeof module)
				try {
					module.exports = e;
				} catch (t) {}
		})(ON);
})(window);

/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.4.0-12
 */

!(function(a) {
	'use strict';
	var n,
		t,
		r,
		e,
		u = void 0 !== a.window ? a.window : Function('return this;')(),
		i = function(n, t) {
			return { isRequired: n, applyPatch: t };
		},
		c = function(i, o) {
			return function() {
				for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
				var r = o.apply(this, n),
					e = void 0 === r ? n : r;
				return i.apply(this, e);
			};
		},
		o = function(n, t) {
			if (n)
				for (var r = 0; r < t.length; r++)
					t[r].isRequired(n) && t[r].applyPatch(n);
			return n;
		},
		f = function() {},
		l = function(n) {
			return function() {
				return n;
			};
		},
		s = l(!1),
		g = l(!0),
		p = function() {
			return d;
		},
		d =
			((n = function(n) {
				return n.isNone();
			}),
			(e = {
				fold: function(n, t) {
					return n();
				},
				is: s,
				isSome: s,
				isNone: g,
				getOr: (r = function(n) {
					return n;
				}),
				getOrThunk: (t = function(n) {
					return n();
				}),
				getOrDie: function(n) {
					throw new Error(n || 'error: getOrDie called on none.');
				},
				getOrNull: l(null),
				getOrUndefined: l(void 0),
				or: r,
				orThunk: t,
				map: p,
				each: f,
				bind: p,
				exists: s,
				forall: g,
				filter: p,
				equals: n,
				equals_: n,
				toArray: function() {
					return [];
				},
				toString: l('none()')
			}),
			Object.freeze && Object.freeze(e),
			e),
		h = function(r) {
			var n = l(r),
				t = function() {
					return i;
				},
				e = function(n) {
					return n(r);
				},
				i = {
					fold: function(n, t) {
						return t(r);
					},
					is: function(n) {
						return r === n;
					},
					isSome: g,
					isNone: s,
					getOr: n,
					getOrThunk: n,
					getOrDie: n,
					getOrNull: n,
					getOrUndefined: n,
					or: t,
					orThunk: t,
					map: function(n) {
						return h(n(r));
					},
					each: function(n) {
						n(r);
					},
					bind: e,
					exists: e,
					forall: e,
					filter: function(n) {
						return n(r) ? i : d;
					},
					toArray: function() {
						return [r];
					},
					toString: function() {
						return 'some(' + r + ')';
					},
					equals: function(n) {
						return n.is(r);
					},
					equals_: function(n, t) {
						return n.fold(s, function(n) {
							return t(r, n);
						});
					}
				};
			return i;
		},
		v = p,
		y = function(n) {
			return null == n ? d : h(n);
		},
		m = function(t) {
			return function(n) {
				return (
					(function(n) {
						if (null === n) return 'null';
						var t = typeof n;
						return 'object' === t &&
							(Array.prototype.isPrototypeOf(n) ||
								(n.constructor && 'Array' === n.constructor.name))
							? 'array'
							: 'object' === t &&
							  (String.prototype.isPrototypeOf(n) ||
									(n.constructor && 'String' === n.constructor.name))
							? 'string'
							: t;
					})(n) === t
				);
			};
		},
		w = m('object'),
		O = m('array'),
		b = m('undefined'),
		j = m('function'),
		A = (Array.prototype.slice, Array.prototype.indexOf),
		x = Array.prototype.push,
		E = function(n, t) {
			return (r = n), (e = t), -1 < A.call(r, e);
			var r, e;
		},
		S = function(n, t) {
			return (function(n) {
				for (var t = [], r = 0, e = n.length; r < e; ++r) {
					if (!O(n[r]))
						throw new Error(
							'Arr.flatten item ' + r + ' was not an array, input: ' + n
						);
					x.apply(t, n[r]);
				}
				return t;
			})(
				(function(n, t) {
					for (var r = n.length, e = new Array(r), i = 0; i < r; i++) {
						var o = n[i];
						e[i] = t(o, i);
					}
					return e;
				})(n, t)
			);
		},
		M = (j(Array.from) && Array.from, Object.prototype.hasOwnProperty),
		_ = function(u) {
			return function() {
				for (var n = new Array(arguments.length), t = 0; t < n.length; t++)
					n[t] = arguments[t];
				if (0 === n.length) throw new Error("Can't merge zero objects");
				for (var r = {}, e = 0; e < n.length; e++) {
					var i = n[e];
					for (var o in i) M.call(i, o) && (r[o] = u(r[o], i[o]));
				}
				return r;
			};
		},
		D = _(function(n, t) {
			return w(n) && w(t) ? D(n, t) : t;
		}),
		P = _(function(n, t) {
			return t;
		}),
		U = Object.keys,
		N = Object.hasOwnProperty,
		R = function(n, t) {
			for (var r = U(n), e = 0, i = r.length; e < i; e++) {
				var o = r[e];
				t(n[o], o);
			}
		},
		T = function(n, t) {
			return q(n, t) ? y(n[t]) : v();
		},
		q = function(n, t) {
			return N.call(n, t);
		},
		C = function(n) {
			if (b(n) || '' === n) return [];
			var t = O(n)
				? S(n, function(n) {
						return n.split(/[\s+,]/);
				  })
				: n.split(/[\s+,]/);
			return S(t, function(n) {
				return 0 < n.length ? [n.trim()] : [];
			});
		},
		I = function(n, t) {
			var r,
				e,
				i,
				o = D(n, t),
				u = C(t.plugins),
				a = T(o, 'custom_plugin_urls').getOr({}),
				c =
					((r = function(n, t) {
						return E(u, t);
					}),
					(e = {}),
					(i = {}),
					R(a, function(n, t) {
						(r(n, t) ? e : i)[t] = n;
					}),
					{ t: e, f: i }),
				f = T(o, 'external_plugins').getOr({}),
				l = {};
			R(c.t, function(n, t) {
				l[t] = n;
			});
			var s = P(l, f);
			return P(t, 0 === U(s).length ? {} : { external_plugins: s });
		},
		k = {
			getCustomPluginUrls: I,
			patch: i(
				function() {
					return !0;
				},
				function(t) {
					t.EditorManager.init = c(t.EditorManager.init, function(n) {
						return [I(t.defaultSettings, n)];
					});
				}
			)
		},
		L = function(n, t) {
			return (function(n, t) {
				for (var r = null != t ? t : u, e = 0; e < n.length && null != r; ++e)
					r = r[n[e]];
				return r;
			})(n.split('.'), t);
		},
		z = function(n) {
			return parseInt(n, 10);
		},
		V = function(n, t) {
			var r = n - t;
			return 0 === r ? 0 : 0 < r ? 1 : -1;
		},
		B = function(n, t, r) {
			return { major: n, minor: t, patch: r };
		},
		F = function(n) {
			var t = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n);
			return t ? B(z(t[1]), z(t[2]), z(t[3])) : B(0, 0, 0);
		},
		$ = function(n, t) {
			return (
				!!n &&
				-1 ===
					(function(n, t) {
						var r = V(n.major, t.major);
						if (0 !== r) return r;
						var e = V(n.minor, t.minor);
						if (0 !== e) return e;
						var i = V(n.patch, t.patch);
						return 0 !== i ? i : 0;
					})(
						F(
							[(r = n).majorVersion, r.minorVersion]
								.join('.')
								.split('.')
								.slice(0, 3)
								.join('.')
						),
						F(t)
					)
			);
			var r;
		},
		G = {
			patch: i(
				function(n) {
					return $(n, '4.7.0');
				},
				function(n) {
					var o;
					n.EditorManager.init = c(
						n.EditorManager.init,
						((o = n.EditorManager),
						function(n) {
							var t = L('tinymce.util.Tools', u),
								r = C(n.plugins),
								e = o.defaultSettings.forced_plugins || [],
								i = 0 < e.length ? r.concat(e) : r;
							return [t.extend({}, n, { plugins: i })];
						})
					);
				}
			)
		},
		H = function() {
			return new Date().getTime();
		},
		J = function(n, t, r, e, i) {
			var o,
				u = H();
			o = a.setInterval(function() {
				n() && (a.clearInterval(o), t()),
					H() - u > i && (a.clearInterval(o), r());
			}, e);
		},
		K = function(i) {
			return function() {
				var n,
					t,
					r,
					e = ((n = i),
					(t = 'position'),
					(r = n.currentStyle
						? n.currentStyle[t]
						: a.window.getComputedStyle(n, null)[t]),
					r || '').toLowerCase();
				return 'absolute' === e || 'fixed' === e;
			};
		},
		Q = function(n) {
			n.parentNode.removeChild(n);
		},
		W = function(n, t) {
			var r,
				e =
					(((r = a.document.createElement('div')).style.display = 'none'),
					(r.className = 'mce-floatpanel'),
					r);
			a.document.body.appendChild(e),
				J(
					K(e),
					function() {
						Q(e), n();
					},
					function() {
						Q(e), t();
					},
					10,
					5e3
				);
		},
		X = function(n, t) {
			n.notificationManager
				? n.notificationManager.open({
						text: t,
						type: 'warning',
						timeout: 0,
						icon: ''
				  })
				: n.windowManager.alert(t);
		},
		Y = function(n) {
			n.EditorManager.on('AddEditor', function(n) {
				var t = n.editor,
					r = t.settings.service_message;
				r &&
					W(
						function() {
							X(t, t.settings.service_message);
						},
						function() {
							a.alert(r);
						}
					);
			});
		},
		Z = function(n) {
			var t,
				r,
				e = L('tinymce.util.URI', u);
			(t = n.base_url) &&
				((this.baseURL = new e(this.documentBaseURL).toAbsolute(
					t.replace(/\/+$/, '')
				)),
				(this.baseURI = new e(this.baseURL))),
				(r = n.suffix),
				n.suffix && (this.suffix = r),
				(this.defaultSettings = n);
		},
		nn = function(n) {
			return [L('tinymce.util.Tools', u).extend({}, this.defaultSettings, n)];
		},
		tn = {
			patch: i(
				function(n) {
					return 'function' != typeof n.overrideDefaults;
				},
				function(n) {
					Y(n),
						(n.overrideDefaults = Z),
						(n.EditorManager.init = c(n.EditorManager.init, nn));
				}
			)
		},
		rn = {
			patch: i(
				function(n) {
					return $(n, '4.5.0');
				},
				function(n) {
					var e;
					n.overrideDefaults = c(
						n.overrideDefaults,
						((e = n),
						function(n) {
							var t = n.plugin_base_urls;
							for (var r in t) e.PluginManager.urls[r] = t[r];
						})
					);
				}
			)
		},
		en = function(n) {
			o(n, [tn.patch, rn.patch, G.patch, k.patch]);
		};
	en(u.tinymce);
})(window);

(function(cloudSettings) {
	tinymce.overrideDefaults(cloudSettings);
})({
	imagetools_proxy: 'https://imageproxy.tiny.cloud/2/image',
	suffix: '.min',
	linkchecker_service_url: 'https://hyperlinking.tiny.cloud',
	spellchecker_rpc_url: 'https://spelling.tiny.cloud',
	spellchecker_api_key: '4ah37g9wba7s1oabryidjlyzl93df80e3o4ogz2k79cu2ggv',
	tinydrive_service_url: 'https://catalog.tiny.cloud',
	api_key: '4ah37g9wba7s1oabryidjlyzl93df80e3o4ogz2k79cu2ggv',
	imagetools_api_key: '4ah37g9wba7s1oabryidjlyzl93df80e3o4ogz2k79cu2ggv',
	tinydrive_api_key: '4ah37g9wba7s1oabryidjlyzl93df80e3o4ogz2k79cu2ggv',
	forced_plugins: ['chiffer'],
	referrer_policy: 'origin',
	content_css_cors: true,
	custom_plugin_urls: {},
	chiffer_snowplow_service_url: 'https://sp.tinymce.com/i',
	mediaembed_api_key: '4ah37g9wba7s1oabryidjlyzl93df80e3o4ogz2k79cu2ggv',
	linkchecker_api_key: '4ah37g9wba7s1oabryidjlyzl93df80e3o4ogz2k79cu2ggv',
	mediaembed_service_url: 'https://hyperlinking.tiny.cloud'
});
tinymce.baseURL = 'https://cdn.tiny.cloud/1/invalid-origin/tinymce/5.2.0-75';

/* Ephox chiffer plugin
 *
 * Copyright 2010-2019 Tiny Technologies Inc. All rights reserved.
 *
 * Version: 1.4.2-9
 */

!(function(u) {
	'use strict';
	for (
		var t,
			a = function() {
				return new Date().getTime();
			},
			c =
				((t = 'string'),
				function(n) {
					return (
						(function(n) {
							if (null === n) return 'null';
							var t = typeof n;
							return 'object' === t &&
								(Array.prototype.isPrototypeOf(n) ||
									(n.constructor && 'Array' === n.constructor.name))
								? 'array'
								: 'object' === t &&
								  (String.prototype.isPrototypeOf(n) ||
										(n.constructor && 'String' === n.constructor.name))
								? 'string'
								: t;
						})(n) === t
					);
				}),
			o = [],
			n = 0;
		n < 256;
		++n
	)
		o[n] = (n + 256).toString(16).substr(1);
	var f = function() {
			var n,
				t,
				r,
				e = (function() {
					for (var n = new Array(16), t = 0, r = 0; r < 16; r++)
						0 == (3 & r) && (t = 4294967296 * Math.random()),
							(n[r] = (t >>> ((3 & r) << 3)) & 255);
					return n;
				})();
			return (
				(e[6] = (15 & e[6]) | 64),
				(e[8] = (63 & e[8]) | 128),
				(t = 0),
				(r = o)[(n = e)[t++]] +
					r[n[t++]] +
					r[n[t++]] +
					r[n[t++]] +
					'-' +
					r[n[t++]] +
					r[n[t++]] +
					'-' +
					r[n[t++]] +
					r[n[t++]] +
					'-' +
					r[n[t++]] +
					r[n[t++]] +
					'-' +
					r[n[t++]] +
					r[n[t++]] +
					r[n[t++]] +
					r[n[t++]] +
					r[n[t++]] +
					r[n[t++]]
			);
		},
		s = function() {},
		d = function(n, t) {
			var i,
				c,
				r,
				e =
					((i = n),
					(c = t),
					{
						send: function(n, t, r) {
							var e =
									'?aid=' +
									c +
									'&tna=tinymce_cloud&p=web&dtm=' +
									t +
									'&stm=' +
									a() +
									'&tz=' +
									('undefined' != typeof Intl
										? encodeURIComponent(
												Intl.DateTimeFormat().resolvedOptions().timeZone
										  )
										: 'N%2FA') +
									'&e=se&se_ca=' +
									n +
									'&eid=' +
									f() +
									'&fp=none&tv=js-2.6.1',
								o = u.document.createElement('img');
							(o.src = i.chiffer_snowplow_service_url + e),
								(o.onload = function() {
									r(!0);
								}),
								(o.onerror = function() {
									r(!1);
								});
						}
					});
			return (
				(r = e),
				{
					sendStat: function(n) {
						return function() {
							r.send(n, a(), s);
						};
					}
				}
			);
		};
	return function() {
		var n,
			t,
			r = tinymce.defaultSettings,
			e = {
				load: function(n) {
					return s;
				}
			},
			o = ((n = r.api_key), c(n) ? n : void 0),
			i =
				void 0 === o
					? e
					: ((t = d(r, o)).sendStat('script_load')(),
					  {
							load: function(n) {
								n.once('init', t.sendStat('init')),
									n.once('focus', t.sendStat('focus'));
							}
					  });
		tinymce.PluginManager.add('chiffer', i.load);
	};
})(window)();
