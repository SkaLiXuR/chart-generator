;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) l(r)
  new MutationObserver(r => {
    for (const i of r)
      if (i.type === 'childList')
        for (const o of i.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && l(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(r) {
    const i = {}
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerpolicy && (i.referrerPolicy = r.referrerpolicy),
      r.crossorigin === 'use-credentials'
        ? (i.credentials = 'include')
        : r.crossorigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    )
  }
  function l(r) {
    if (r.ep) return
    r.ep = !0
    const i = n(r)
    fetch(r.href, i)
  }
})()
function j() {}
function et(t) {
  return t()
}
function W() {
  return Object.create(null)
}
function R(t) {
  t.forEach(et)
}
function nt(t) {
  return typeof t == 'function'
}
function rt(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == 'object') || typeof t == 'function'
}
function ot(t) {
  return Object.keys(t).length === 0
}
function c(t, e) {
  t.appendChild(e)
}
function P(t, e, n) {
  t.insertBefore(e, n || null)
}
function N(t) {
  t.parentNode.removeChild(t)
}
function it(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}
function p(t) {
  return document.createElement(t)
}
function D(t) {
  return document.createTextNode(t)
}
function v() {
  return D(' ')
}
function C(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l)
}
function ut(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e)
  }
}
function a(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function ft(t) {
  return Array.from(t.childNodes)
}
function F(t, e) {
  ;(e = '' + e), t.wholeText !== e && (t.data = e)
}
function E(t, e) {
  t.value = e == null ? '' : e
}
let G
function x(t) {
  G = t
}
const O = [],
  X = [],
  B = [],
  Y = [],
  ct = Promise.resolve()
let K = !1
function st() {
  K || ((K = !0), ct.then(lt))
}
function z(t) {
  B.push(t)
}
const q = new Set()
let T = 0
function lt() {
  const t = G
  do {
    for (; T < O.length; ) {
      const e = O[T]
      T++, x(e), at(e.$$)
    }
    for (x(null), O.length = 0, T = 0; X.length; ) X.pop()()
    for (let e = 0; e < B.length; e += 1) {
      const n = B[e]
      q.has(n) || (q.add(n), n())
    }
    B.length = 0
  } while (O.length)
  for (; Y.length; ) Y.pop()()
  ;(K = !1), q.clear(), x(t)
}
function at(t) {
  if (t.fragment !== null) {
    t.update(), R(t.before_update)
    const e = t.dirty
    ;(t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(z)
  }
}
const dt = new Set()
function ht(t, e) {
  t && t.i && (dt.delete(t), t.i(e))
}
function pt(t, e, n, l) {
  const { fragment: r, after_update: i } = t.$$
  r && r.m(e, n),
    l ||
      z(() => {
        const o = t.$$.on_mount.map(et).filter(nt)
        t.$$.on_destroy ? t.$$.on_destroy.push(...o) : R(o),
          (t.$$.on_mount = [])
      }),
    i.forEach(z)
}
function mt(t, e) {
  const n = t.$$
  n.fragment !== null &&
    (R(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []))
}
function _t(t, e) {
  t.$$.dirty[0] === -1 && (O.push(t), st(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)
}
function gt(t, e, n, l, r, i, o, b = [-1]) {
  const s = G
  x(t)
  const u = (t.$$ = {
    fragment: null,
    ctx: [],
    props: i,
    update: j,
    not_equal: r,
    bound: W(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    callbacks: W(),
    dirty: b,
    skip_bound: !1,
    root: e.target || s.$$.root,
  })
  o && o(u.root)
  let y = !1
  if (
    ((u.ctx = n
      ? n(t, e.props || {}, (g, m, ...L) => {
          const _ = L.length ? L[0] : m
          return (
            u.ctx &&
              r(u.ctx[g], (u.ctx[g] = _)) &&
              (!u.skip_bound && u.bound[g] && u.bound[g](_), y && _t(t, g)),
            m
          )
        })
      : []),
    u.update(),
    (y = !0),
    R(u.before_update),
    (u.fragment = l ? l(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const g = ft(e.target)
      u.fragment && u.fragment.l(g), g.forEach(N)
    } else u.fragment && u.fragment.c()
    e.intro && ht(t.$$.fragment),
      pt(t, e.target, e.anchor, e.customElement),
      lt()
  }
  x(s)
}
class bt {
  $destroy() {
    mt(this, 1), (this.$destroy = j)
  }
  $on(e, n) {
    if (!nt(n)) return j
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = [])
    return (
      l.push(n),
      () => {
        const r = l.indexOf(n)
        r !== -1 && l.splice(r, 1)
      }
    )
  }
  $set(e) {
    this.$$set &&
      !ot(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1))
  }
}
function Z(t, e, n) {
  const l = t.slice()
  return (l[8] = e[n]), l
}
function tt(t) {
  let e,
    n = t[8][0] + '',
    l,
    r,
    i,
    o = t[8][1] + '',
    b
  return {
    c() {
      ;(e = p('div')),
        (l = D(n)),
        (r = v()),
        (i = p('div')),
        (b = D(o)),
        a(e, 'class', 'chart-item'),
        a(i, 'class', 'chart-item')
    },
    m(s, u) {
      P(s, e, u), c(e, l), P(s, r, u), P(s, i, u), c(i, b)
    },
    p(s, u) {
      u & 2 && n !== (n = s[8][0] + '') && F(l, n),
        u & 2 && o !== (o = s[8][1] + '') && F(b, o)
    },
    d(s) {
      s && N(e), s && N(r), s && N(i)
    },
  }
}
function yt(t) {
  let e,
    n,
    l,
    r,
    i,
    o,
    b,
    s,
    u,
    y,
    g,
    m,
    L,
    _,
    H,
    A,
    J,
    w,
    S,
    I,
    Q,
    M,
    U,
    k = t[1],
    h = []
  for (let f = 0; f < k.length; f += 1) h[f] = tt(Z(t, k, f))
  return {
    c() {
      ;(e = p('main')),
        (n = p('form')),
        (l = p('div')),
        (r = p('label')),
        (r.textContent = 'Chart title:'),
        (i = v()),
        (o = p('input')),
        (b = v()),
        (s = p('br')),
        (u = v()),
        (y = p('label')),
        (y.textContent = 'Add a row:'),
        (g = v()),
        (m = p('input')),
        (L = v()),
        (_ = p('input')),
        (H = v()),
        (A = p('input')),
        (J = v()),
        (w = p('div')),
        (S = p('div')),
        (I = D(t[0])),
        (Q = v())
      for (let f = 0; f < h.length; f += 1) h[f].c()
      a(r, 'for', 'chart-title-input'),
        a(o, 'autocomplete', 'off'),
        a(o, 'placeholder', 'Chart Title'),
        a(o, 'name', 'chart-title-input'),
        a(o, 'type', 'text'),
        a(y, 'for', 'row-left-input'),
        a(m, 'autocomplete', 'off'),
        a(m, 'placeholder', 'Left side'),
        a(m, 'name', 'row-left-input'),
        a(m, 'type', 'text'),
        a(_, 'autocomplete', 'off'),
        a(_, 'placeholder', 'Right side'),
        a(_, 'type', 'text'),
        a(A, 'type', 'submit'),
        (A.value = 'Add Row'),
        a(l, 'class', 'chart-controls'),
        a(S, 'class', 'chart-title chart-item'),
        a(w, 'class', 'chart-container')
    },
    m(f, $) {
      P(f, e, $),
        c(e, n),
        c(n, l),
        c(l, r),
        c(l, i),
        c(l, o),
        E(o, t[0]),
        c(l, b),
        c(l, s),
        c(l, u),
        c(l, y),
        c(l, g),
        c(l, m),
        E(m, t[2]),
        c(l, L),
        c(l, _),
        E(_, t[3]),
        c(l, H),
        c(l, A),
        c(e, J),
        c(e, w),
        c(w, S),
        c(S, I),
        c(w, Q)
      for (let d = 0; d < h.length; d += 1) h[d].m(w, null)
      M ||
        ((U = [
          C(o, 'input', t[5]),
          C(m, 'input', t[6]),
          C(_, 'input', t[7]),
          C(A, 'submit', t[4]),
          C(n, 'submit', ut(t[4])),
        ]),
        (M = !0))
    },
    p(f, [$]) {
      if (
        ($ & 1 && o.value !== f[0] && E(o, f[0]),
        $ & 4 && m.value !== f[2] && E(m, f[2]),
        $ & 8 && _.value !== f[3] && E(_, f[3]),
        $ & 1 && F(I, f[0]),
        $ & 2)
      ) {
        k = f[1]
        let d
        for (d = 0; d < k.length; d += 1) {
          const V = Z(f, k, d)
          h[d] ? h[d].p(V, $) : ((h[d] = tt(V)), h[d].c(), h[d].m(w, null))
        }
        for (; d < h.length; d += 1) h[d].d(1)
        h.length = k.length
      }
    },
    i: j,
    o: j,
    d(f) {
      f && N(e), it(h, f), (M = !1), R(U)
    },
  }
}
function vt(t, e, n) {
  let l = '',
    r = [],
    i,
    o
  function b() {
    r.push([i, o]), n(1, r), console.log(i, o, r)
  }
  function s() {
    ;(l = this.value), n(0, l)
  }
  function u() {
    ;(i = this.value), n(2, i)
  }
  function y() {
    ;(o = this.value), n(3, o)
  }
  return [l, r, i, o, b, s, u, y]
}
class $t extends bt {
  constructor(e) {
    super(), gt(this, e, vt, yt, rt, {})
  }
}
new $t({ target: document.getElementById('app') })
