import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, h as space, g as element, B as text, N as query_selector_all, m as detach_dev, l as claim_space, j as claim_element, k as children, C as claim_text, p as add_location, r as insert_dev, t as append_dev, y as noop, v as validate_slots } from './client.ca38221d.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/gallery.svelte";

function create_fragment(ctx) {
  var t0;
  var h1;
  var t1;
  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text("This is a placeholder for gallery");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-182nuu3\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "This is a placeholder for gallery");
      h1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Gallery";
      add_location(h1, file, 4, 0, 55);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Gallery", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Gallery> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Gallery = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Gallery, _SvelteComponentDev);

  var _super = _createSuper(Gallery);

  function Gallery(options) {
    var _this;

    _classCallCheck(this, Gallery);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Gallery",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Gallery;
}(SvelteComponentDev);

export default Gallery;
