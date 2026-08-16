/* @ds-bundle: {"format":3,"namespace":"SabaideeCircleDesignSystem_5d6b11","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/content/Avatar.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Chip","sourcePath":"components/content/Chip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"3ee674a756e0","components/actions/IconButton.jsx":"527ec0695352","components/content/Avatar.jsx":"1e575ab60765","components/content/Badge.jsx":"8a969a494929","components/content/Card.jsx":"38fe71a6ffe9","components/content/Chip.jsx":"b4484d738f7e","components/forms/Input.jsx":"9036606ecf7f","ui_kits/website/About.jsx":"a965ba723bc7","ui_kits/website/Footer.jsx":"2ecd6c41328d","ui_kits/website/Gatherings.jsx":"6f802afe45b9","ui_kits/website/Home.jsx":"d34e46f60fa5","ui_kits/website/Nav.jsx":"4b4f7e9ac0c5","ui_kits/website/data.js":"dfbb46f40867","ui_kits/website/icons.jsx":"29c8e54af836"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SabaideeCircleDesignSystem_5d6b11 = window.SabaideeCircleDesignSystem_5d6b11 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sabaidee Circle — Button
 * Warm, welcoming actions. Orange primary CTA, indigo-outline secondary,
 * gold-underline tertiary. Softly rounded (8px), calm transitions.
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 14,
      height: 36
    },
    md: {
      padding: '11px 22px',
      fontSize: 15,
      height: 44
    },
    lg: {
      padding: '14px 28px',
      fontSize: 17,
      height: 52
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    lineHeight: 1,
    border: '2px solid transparent',
    borderRadius: 'var(--radius)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'background var(--dur) var(--ease-standard), color var(--dur) var(--ease-standard), border-color var(--dur) var(--ease-standard), box-shadow var(--dur) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
    whiteSpace: 'nowrap',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--saffron-400)',
      color: 'var(--color-on-primary)',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--indigo-500)',
      borderColor: 'var(--indigo-500)'
    },
    tertiary: {
      background: 'transparent',
      color: 'var(--saffron-700)',
      padding: '8px 6px',
      borderRadius: 0,
      boxShadow: 'inset 0 -1px 0 0 var(--gold-400)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)'
    },
    danger: {
      background: 'var(--error-500)',
      color: '#fff',
      boxShadow: 'var(--shadow-sm)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyles = !disabled && hover ? {
    primary: {
      background: 'var(--saffron-500)'
    },
    secondary: {
      background: 'var(--indigo-100)'
    },
    tertiary: {
      color: 'var(--saffron-500)',
      boxShadow: 'inset 0 -2px 0 0 var(--gold-400)'
    },
    ghost: {
      background: 'var(--surface-high)'
    },
    danger: {
      background: 'var(--on-error-container)'
    }
  }[variant] : {};
  const activeStyle = !disabled && active ? {
    transform: 'scale(0.97)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyles,
      ...activeStyle,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sabaidee Circle — IconButton
 * Circular or softly-rounded button for a single icon (close, menu, like).
 */
function IconButton({
  variant = 'soft',
  size = 'md',
  round = true,
  disabled = false,
  label,
  children,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size];
  const variants = {
    soft: {
      background: 'var(--surface-high)',
      color: 'var(--text-strong)'
    },
    solid: {
      background: 'var(--saffron-400)',
      color: '#fff'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--indigo-500)',
      border: '2px solid var(--indigo-500)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverBg = !disabled && hover ? {
    soft: {
      background: 'var(--surface-highest)'
    },
    solid: {
      background: 'var(--saffron-500)'
    },
    ghost: {
      background: 'var(--surface-high)'
    },
    outline: {
      background: 'var(--indigo-100)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      padding: 0,
      border: '2px solid transparent',
      borderRadius: round ? 'var(--radius-full)' : 'var(--radius)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      transform: active && !disabled ? 'scale(0.92)' : 'none',
      ...variants[variant],
      ...hoverBg,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sabaidee Circle — Avatar
 * Circular member portrait or warm-toned initials fallback.
 */
function Avatar({
  src = null,
  name = '',
  size = 44,
  ring = false,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase();

  // deterministic warm tone from name
  const tones = [['var(--saffron-200)', 'var(--saffron-900)'], ['var(--indigo-100)', 'var(--indigo-700)'], ['var(--gold-200)', 'var(--gold-700)'], ['var(--surface-high)', 'var(--ink-700)']];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h + name.charCodeAt(i)) % tones.length;
  const [bg, fg] = tones[h];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      background: src ? 'transparent' : bg,
      color: fg,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: size * 0.4,
      overflow: 'hidden',
      flex: '0 0 auto',
      boxShadow: ring ? '0 0 0 2px var(--surface), 0 0 0 4px var(--gold-400)' : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '•');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sabaidee Circle — Badge
 * Small status / count marker. Use sparingly for "New", counts, status dots.
 */
function Badge({
  tone = 'saffron',
  variant = 'soft',
  dot = false,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    saffron: {
      soft: ['var(--saffron-100)', 'var(--saffron-800)'],
      solid: ['var(--saffron-400)', '#fff']
    },
    indigo: {
      soft: ['var(--indigo-100)', 'var(--indigo-700)'],
      solid: ['var(--indigo-500)', '#fff']
    },
    gold: {
      soft: ['var(--gold-200)', 'var(--gold-700)'],
      solid: ['var(--gold-400)', 'var(--gold-700)']
    },
    danger: {
      soft: ['var(--error-container)', 'var(--on-error-container)'],
      solid: ['var(--error-500)', '#fff']
    },
    neutral: {
      soft: ['var(--surface-high)', 'var(--text-muted)'],
      solid: ['var(--ink-700)', 'var(--inverse-on-surface)']
    }
  };
  const [bg, fg] = tones[tone][variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      padding: dot ? 0 : '3px 9px',
      borderRadius: 'var(--radius-full)',
      background: dot ? 'transparent' : bg,
      color: fg,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: bg === 'transparent' ? fg : bg,
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sabaidee Circle — Card
 * Primary vehicle for community content. Generous 24px padding,
 * a 1px metallic-gold accent on the top edge, soft warm shadow.
 */
function Card({
  variant = 'default',
  interactive = false,
  goldEdge = true,
  padding = 24,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    default: {
      background: 'var(--surface-lowest)'
    },
    sunken: {
      background: 'var(--surface-low)'
    },
    raised: {
      background: 'var(--surface-container)'
    },
    inverse: {
      background: 'var(--inverse-surface)',
      color: 'var(--inverse-on-surface)'
    }
  };
  const baseShadow = variant === 'inverse' ? 'var(--shadow-md)' : 'var(--shadow-sm)';
  const edge = goldEdge ? ', var(--edge-gold)' : '';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      padding,
      fontFamily: 'var(--font-body)',
      color: variants[variant].color || 'var(--text-body)',
      boxShadow: interactive && hover ? `var(--shadow-lg)${edge}` : `${baseShadow}${edge}`,
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur) var(--ease-standard), transform var(--dur) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default',
      ...variants[variant],
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sabaidee Circle — Chip
 * Pill for cultural topics (History, Food, Events). Light saffron fill,
 * dark orange text — distinct from actionable buttons. Optionally selectable.
 */
function Chip({
  tone = 'saffron',
  selected = false,
  onSelect,
  iconLeft = null,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    saffron: {
      bg: 'var(--saffron-100)',
      fg: 'var(--saffron-800)',
      selBg: 'var(--saffron-400)',
      selFg: '#fff'
    },
    indigo: {
      bg: 'var(--indigo-100)',
      fg: 'var(--indigo-700)',
      selBg: 'var(--indigo-500)',
      selFg: '#fff'
    },
    gold: {
      bg: 'var(--gold-200)',
      fg: 'var(--gold-700)',
      selBg: 'var(--gold-400)',
      selFg: 'var(--gold-700)'
    },
    neutral: {
      bg: 'var(--surface-high)',
      fg: 'var(--text-muted)',
      selBg: 'var(--ink-700)',
      selFg: 'var(--inverse-on-surface)'
    }
  };
  const t = tones[tone];
  const clickable = !!onSelect;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: clickable ? 'button' : undefined,
    tabIndex: clickable ? 0 : undefined,
    onClick: onSelect,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      padding: '6px 14px',
      borderRadius: 'var(--radius-full)',
      background: selected ? t.selBg : t.bg,
      color: selected ? t.selFg : t.fg,
      cursor: clickable ? 'pointer' : 'default',
      userSelect: 'none',
      transition: 'background var(--dur) var(--ease-standard), color var(--dur) var(--ease-standard)',
      ...style
    }
  }, rest), iconLeft, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Chip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sabaidee Circle — Input
 * Warm beige field with a saffron bottom border that thickens on focus.
 * Bold Inter label for maximum legibility across generations.
 */
function Input({
  label,
  hint,
  error,
  type = 'text',
  iconLeft = null,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--error-500)' : focus ? 'var(--saffron-400)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--surface-low)',
      borderRadius: 'var(--radius) var(--radius) 0 0',
      borderBottom: `${focus || error ? 2.5 : 2}px solid ${borderColor}`,
      padding: '0 12px',
      opacity: disabled ? 0.5 : 1,
      transition: 'border-color var(--dur) var(--ease-standard), border-width var(--dur) var(--ease-standard)',
      boxShadow: focus && !error ? '0 2px 8px -4px rgba(255,140,0,0.5)' : 'none'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      display: 'flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-body)',
      padding: '11px 0'
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--error-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
/* Sabaidee Circle website — Our Story (about) + Join form. */
function About({
  setPage
}) {
  const {
    Button,
    Card,
    Avatar,
    Chip
  } = window.SabaideeCircleDesignSystem_5d6b11;
  const {
    IconArrowRight
  } = window;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 40px 40px',
      background: 'var(--surface-low)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    tone: "gold",
    style: {
      marginBottom: 20
    }
  }, "Our Story"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 46,
      letterSpacing: '-0.02em',
      lineHeight: 1.08,
      color: 'var(--text-strong)',
      margin: '0 0 20px'
    }
  }, "A community-rooted space for Lao people, across generations"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: '31px',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "We bring together Lao people of all ages to reconnect with culture, language, and Buddhist-rooted practices \u2014 through meditation, workshops, food, movement, and conversation."))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      padding: '64px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    padding: 32
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      margin: '0 0 12px'
    }
  }, "What we hope you feel"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, ['“I’m welcome here.”', '“I don’t need to know everything.”', '“This feels familiar, even as I learn.”', '“This honours where I come from.”'].map((q, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 17,
      lineHeight: '24px',
      opacity: 0.92
    }
  }, q)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: '27px',
      color: 'var(--text-body)',
      margin: 0
    }
  }, "Sabaidee Circle is about ", /*#__PURE__*/React.createElement("strong", null, "belonging"), " \u2014 you don\u2019t have to prove your \u201CLao-ness\u201D; ", /*#__PURE__*/React.createElement("strong", null, "continuity"), " \u2014 honouring tradition while letting it evolve; and ", /*#__PURE__*/React.createElement("strong", null, "care"), " \u2014 for culture, community, and one another."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: /*#__PURE__*/React.createElement(IconArrowRight, {
      size: 18
    }),
    onClick: () => setPage('join'),
    style: {
      alignSelf: 'flex-start'
    }
  }, "Come practice with us")))));
}
function Join({
  setPage
}) {
  const {
    Button,
    Card,
    Input,
    Chip
  } = window.SabaideeCircleDesignSystem_5d6b11;
  const [sent, setSent] = React.useState(false);
  const [interests, setInterests] = React.useState(['Meditation']);
  const topics = ['Festival', 'Meditation', 'Food', 'Language', 'History', 'Movement'];
  const toggle = t => setInterests(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 620,
      margin: '0 auto',
      padding: '64px 40px 96px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 40
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--saffron-100)',
      color: 'var(--saffron-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30,
      marginBottom: 16
    }
  }, "\u2661"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 28,
      color: 'var(--text-strong)',
      margin: '0 0 10px'
    }
  }, "You\u2019re welcome here"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: '24px',
      color: 'var(--text-muted)',
      margin: '0 0 24px'
    }
  }, "We\u2019ll send a gentle note before each gathering. Sabaidee \u2014 see you in the circle."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      setSent(false);
      setPage('home');
    }
  }, "Back to home")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, "Join the circle"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: '24px',
      color: 'var(--text-muted)',
      margin: '0 0 28px'
    }
  }, "Tell us a little about you. Come as you are \u2014 every level of cultural knowledge is welcome."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "e.g. Noy"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@email.com",
    hint: "Only for gathering reminders \u2014 never shared."
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)',
      display: 'block',
      marginBottom: 10
    }
  }, "What draws you in?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, topics.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    tone: "saffron",
    selected: interests.includes(t),
    onSelect: () => toggle(t)
  }, t)))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Send & join")))));
}
Object.assign(window, {
  About,
  Join
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Sabaidee Circle website — footer. */
function Footer({
  setPage
}) {
  const cols = [['Gather', [['Upcoming gatherings', 'gatherings'], ['Join the circle', 'join'], ['Our story', 'about']]], ['Practices', [['Meditation', 'gatherings'], ['Cultural workshops', 'gatherings'], ['Lao language', 'gatherings']]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--inverse-surface)',
      color: 'var(--inverse-on-surface)',
      padding: '56px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: '#000',
      display: 'inline-flex',
      overflow: 'hidden',
      border: '2px solid var(--gold-400)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-circle.png",
    alt: "",
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18
    }
  }, "Sabaidee Circle")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: '22px',
      opacity: 0.75,
      maxWidth: 300,
      margin: 0
    }
  }, "Welcoming spaces for Lao culture, spirituality, and identity \u2014 across generations and borders.")), cols.map(([title, links]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      opacity: 0.6,
      margin: '0 0 14px'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, links.map(([label, id]) => /*#__PURE__*/React.createElement("li", {
    key: label
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => setPage(id),
    style: {
      fontSize: 14,
      opacity: 0.85,
      cursor: 'pointer'
    }
  }, label))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '36px auto 0',
      paddingTop: 20,
      borderTop: '1px solid rgba(242,242,217,0.15)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement("span", null, "Lao in Canada \uD83C\uDF41 \xB7 Across generations & borders"), /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Sabaidee Circle")));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Gatherings.jsx
try { (() => {
/* Sabaidee Circle website — Gatherings listing with topic filters. */
function Gatherings({
  setPage
}) {
  const {
    Chip
  } = window.SabaideeCircleDesignSystem_5d6b11;
  const [filter, setFilter] = React.useState('All');
  const topics = ['All', 'Festival', 'Meditation', 'Food', 'Language', 'History', 'Movement'];
  const toneFor = {
    Festival: 'saffron',
    Meditation: 'indigo',
    Food: 'gold',
    Language: 'neutral',
    History: 'indigo',
    Movement: 'saffron'
  };
  const events = window.SABAIDEE_EVENTS.filter(e => filter === 'All' || e.topic === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      padding: '56px 40px 88px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      margin: '0 0 8px'
    }
  }, "Come together"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 44,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '0 0 12px'
    }
  }, "Gatherings"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: '28px',
      color: 'var(--text-muted)',
      maxWidth: 560,
      margin: '0 0 28px'
    }
  }, "Practices, meals, and conversations \u2014 open to all generations. No experience needed."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, topics.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    tone: t === 'All' ? 'saffron' : toneFor[t] || 'neutral',
    selected: filter === t,
    onSelect: () => setFilter(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, events.map(e => /*#__PURE__*/React.createElement(window.EventCard, {
    key: e.id,
    e: e,
    setPage: setPage
  }))), events.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-faint)',
      fontSize: 16,
      marginTop: 24
    }
  }, "No gatherings under this topic yet \u2014 check back soon."));
}
Object.assign(window, {
  Gatherings
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Gatherings.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
/* Sabaidee Circle website — Home: hero, values, a few upcoming gatherings. */
function Home({
  setPage
}) {
  const {
    Button,
    Card,
    Chip,
    Badge,
    Avatar
  } = window.SabaideeCircleDesignSystem_5d6b11;
  const {
    IconCalendar,
    IconMapPin,
    IconArrowRight,
    IconLeaf,
    IconUsers,
    IconBowl
  } = window;
  const values = [[IconUsers, 'Belonging', "You don't have to prove your Lao-ness. Come as you are."], [IconLeaf, 'Continuity', 'Honouring tradition while letting it grow with each generation.'], [IconBowl, 'Care', 'For culture, for community, and for one another.']];
  const events = window.SABAIDEE_EVENTS.slice(0, 3);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '88px 40px 96px',
      background: 'var(--surface-low)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.5,
      backgroundImage: 'repeating-linear-gradient(45deg, var(--clay-300) 0 1px, transparent 1px 14px), repeating-linear-gradient(-45deg, var(--clay-300) 0 1px, transparent 1px 14px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Chip, {
    tone: "gold",
    style: {
      marginBottom: 20
    }
  }, "Lao in Canada \xB7 Across generations & borders"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 56,
      lineHeight: 1.04,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)',
      margin: '0 0 20px'
    }
  }, "A circle to gather, belong & carry culture forward"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: '30px',
      color: 'var(--text-muted)',
      maxWidth: 520,
      margin: '0 0 32px'
    }
  }, "Sabaidee Circle creates welcoming spaces for Lao culture, spirituality, and identity to be explored, practiced, and shared \u2014 together."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(IconArrowRight, {
      size: 18
    }),
    onClick: () => setPage('join')
  }, "Join the circle"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => setPage('gatherings')
  }, "See gatherings"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      height: 300,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 50% 40%, var(--saffron-300), var(--saffron-700))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 232,
      height: 232,
      borderRadius: '50%',
      background: '#000',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      border: '3px solid var(--gold-400)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-circle.png",
    alt: "Sabaidee Circle",
    style: {
      width: 226,
      height: 226,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      padding: '80px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      margin: '0 0 8px'
    }
  }, "What holds us together"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 34,
      color: 'var(--text-strong)',
      margin: '0 0 36px',
      maxWidth: 560
    }
  }, "Rooted in three simple things"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, values.map(([Icon, title, body], i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    padding: 28
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--saffron-100)',
      color: 'var(--saffron-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: '23px',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, body))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      padding: '48px 40px 88px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 34,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Upcoming gatherings"), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    onClick: () => setPage('gatherings')
  }, "See all gatherings")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, events.map(e => /*#__PURE__*/React.createElement(EventCard, {
    key: e.id,
    e: e,
    setPage: setPage
  })))));
}

/* Shared event card used on Home + Gatherings */
function EventCard({
  e,
  setPage
}) {
  const {
    Card,
    Chip,
    Badge,
    Avatar
  } = window.SabaideeCircleDesignSystem_5d6b11;
  const {
    IconCalendar,
    IconMapPin
  } = window;
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: 0,
    style: {
      overflow: 'hidden'
    },
    onClick: () => setPage && setPage('join')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 132,
      background: e.bg,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: e.soon ? 'saffron' : 'neutral',
    variant: "solid"
  }, e.soon ? 'This week' : e.month), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      color: 'rgba(255,255,255,0.95)'
    }
  }, e.day)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    tone: e.tone,
    style: {
      marginBottom: 12
    }
  }, e.topic), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 21,
      color: 'var(--text-strong)',
      margin: '0 0 10px',
      lineHeight: 1.2
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      color: 'var(--text-muted)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconCalendar, {
    size: 16
  }), e.when), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconMapPin, {
    size: 16
  }), e.where))));
}
Object.assign(window, {
  Home,
  EventCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* Sabaidee Circle website — top navigation. Logo mark + section links + CTA. */
function Nav({
  page,
  setPage
}) {
  const {
    Button
  } = window.SabaideeCircleDesignSystem_5d6b11;
  const links = [['home', 'Home'], ['gatherings', 'Gatherings'], ['about', 'Our Story']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 40px',
      borderBottom: '1px solid var(--border-hairline)',
      background: 'rgba(251,251,226,0.85)',
      backdropFilter: 'blur(8px)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer'
    },
    onClick: () => setPage('home')
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: '#000',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-circle.png",
    alt: "",
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--text-strong)',
      letterSpacing: '-0.01em'
    }
  }, "Sabaidee Circle")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => setPage(id),
    style: {
      fontSize: 15,
      fontWeight: 500,
      cursor: 'pointer',
      color: page === id ? 'var(--saffron-700)' : 'var(--text-muted)',
      paddingBottom: 3,
      boxShadow: page === id ? 'inset 0 -2px 0 0 var(--gold-400)' : 'none',
      transition: 'color var(--dur) var(--ease-standard)'
    }
  }, label)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => setPage('join')
  }, "Join us")));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Shared event data for the website kit. */
window.SABAIDEE_EVENTS = [{
  id: 1,
  day: '12',
  month: 'APR',
  soon: true,
  topic: 'Festival',
  tone: 'saffron',
  title: 'Pi Mai — Lao New Year',
  when: 'Sat 12 Apr · 11:00–4:00',
  where: 'Riverdale Community Hall',
  bg: 'linear-gradient(135deg, var(--saffron-400), var(--saffron-700))'
}, {
  id: 2,
  day: '19',
  month: 'APR',
  soon: false,
  topic: 'Meditation',
  tone: 'indigo',
  title: 'Saturday Morning Sit',
  when: 'Sat 19 Apr · 9:00–10:00',
  where: 'Wat Lao Toronto',
  bg: 'linear-gradient(135deg, var(--indigo-500), var(--indigo-700))'
}, {
  id: 3,
  day: '26',
  month: 'APR',
  soon: false,
  topic: 'Food',
  tone: 'gold',
  title: 'Cooking Circle: Lao Sausage',
  when: 'Sat 26 Apr · 2:00–5:00',
  where: 'East End Kitchen Co-op',
  bg: 'linear-gradient(135deg, var(--gold-400), var(--gold-600))'
}, {
  id: 4,
  day: '03',
  month: 'MAY',
  soon: false,
  topic: 'Language',
  tone: 'neutral',
  title: 'Lao Language Table',
  when: 'Sat 3 May · 1:00–2:30',
  where: 'Sabaidee Circle (online)',
  bg: 'linear-gradient(135deg, var(--ink-700), var(--ink-600))'
}, {
  id: 5,
  day: '10',
  month: 'MAY',
  soon: false,
  topic: 'History',
  tone: 'indigo',
  title: 'Elders’ Stories Evening',
  when: 'Sat 10 May · 6:00–8:00',
  where: 'Riverdale Community Hall',
  bg: 'linear-gradient(135deg, var(--indigo-600), var(--indigo-900))'
}, {
  id: 6,
  day: '17',
  month: 'MAY',
  soon: false,
  topic: 'Movement',
  tone: 'saffron',
  title: 'Gentle Movement &amp; Tea',
  when: 'Sat 17 May · 10:00–11:30',
  where: 'Community Yoga Studio',
  bg: 'linear-gradient(135deg, var(--saffron-300), var(--saffron-500))'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
/* Lucide-style stroke icons (1.75–2px, round caps) — consistent set for the
   Sabaidee Circle website kit. Substituted in lieu of a brand icon font;
   see readme ICONOGRAPHY. Exports to window for the babel-script kit. */
const I = p => ({
  width: p.size || 20,
  height: p.size || 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: p.sw || 1.9,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
});
const IconCalendar = (p = {}) => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "18",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 2v4M8 2v4M3 10h18"
}));
const IconMapPin = (p = {}) => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const IconUsers = (p = {}) => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "7",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
}));
const IconHeart = (p = {}) => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
  d: "M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 12 5 5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"
}));
const IconArrowRight = (p = {}) => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const IconSparkle = (p = {}) => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
  d: "M12 3v18M3 12h18M6.5 6.5l11 11M17.5 6.5l-11 11"
}));
const IconLeaf = (p = {}) => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
  d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 21c0-3 1.85-5.36 5.08-6"
}));
const IconMenu = (p = {}) => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
  d: "M4 6h16M4 12h16M4 18h16"
}));
const IconBowl = (p = {}) => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
  d: "M3 11h18a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 4c1 1 1 2 0 3M8 5c.6.6.6 1.2 0 2M16 5c.6.6.6 1.2 0 2"
}));
const IconBook = (p = {}) => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
  d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z"
}));
Object.assign(window, {
  IconCalendar,
  IconMapPin,
  IconUsers,
  IconHeart,
  IconArrowRight,
  IconSparkle,
  IconLeaf,
  IconMenu,
  IconBowl,
  IconBook
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

})();
