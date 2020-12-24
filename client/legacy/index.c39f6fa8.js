import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, v as validate_slots, o as onMount, g as element, h as space, j as claim_element, k as children, l as claim_space, m as detach_dev, n as attr_dev, p as add_location, q as set_style, r as insert_dev, t as append_dev, u as listen_dev, w as is_function, x as _slicedToArray, y as noop, z as binding_callbacks, A as identity, B as text, C as claim_text, D as add_render_callback, E as create_bidirectional_transition, F as create_component, G as claim_component, H as mount_component, I as transition_in, J as transition_out, K as destroy_component, L as toggle_class, M as prop_dev, N as query_selector_all, O as check_outros, P as run_all, Q as get_webp_support, R as globals, T as group_outros } from './client.490c89f4.js';
import { c as cubicInOut } from './index.8bfd631a.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/Img.svelte";

function create_fragment(ctx) {
  var picture;
  var source0;
  var source0_srcset_value;
  var t0;
  var source1;
  var source1_srcset_value;
  var t1;
  var img_1;
  var img_1_src_value;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      picture = element("picture");
      source0 = element("source");
      t0 = space();
      source1 = element("source");
      t1 = space();
      img_1 = element("img");
      this.h();
    },
    l: function claim(nodes) {
      picture = claim_element(nodes, "PICTURE", {
        class: true
      });
      var picture_nodes = children(picture);
      source0 = claim_element(picture_nodes, "SOURCE", {
        srcset: true,
        type: true
      });
      t0 = claim_space(picture_nodes);
      source1 = claim_element(picture_nodes, "SOURCE", {
        srcset: true,
        type: true
      });
      t1 = claim_space(picture_nodes);
      img_1 = claim_element(picture_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        style: true
      });
      picture_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(source0, "srcset", source0_srcset_value =
      /*src*/
      ctx[0] + ".webp");
      attr_dev(source0, "type", "image/webp");
      add_location(source0, file, 14, 2, 275);
      attr_dev(source1, "srcset", source1_srcset_value =
      /*src*/
      ctx[0] + ".png");
      attr_dev(source1, "type", "image/png");
      add_location(source1, file, 15, 2, 329);
      attr_dev(img_1, "class", "object-cover w-full h-full transition-opacity duration-500 ease-in-out");
      if (img_1.src !== (img_1_src_value =
      /*src*/
      ctx[0] + ".png")) attr_dev(img_1, "src", img_1_src_value);
      attr_dev(img_1, "alt",
      /*alt*/
      ctx[1]);
      set_style(img_1, "opacity",
      /*opacity*/
      ctx[2]);
      add_location(img_1, file, 16, 2, 381);
      attr_dev(picture, "class", "w-full h-full");
      add_location(picture, file, 13, 0, 241);
    },
    m: function mount(target, anchor) {
      insert_dev(target, picture, anchor);
      append_dev(picture, source0);
      append_dev(picture, t0);
      append_dev(picture, source1);
      append_dev(picture, t1);
      append_dev(picture, img_1);
      /*img_1_binding*/

      ctx[5](img_1);

      if (!mounted) {
        dispose = listen_dev(img_1, "load", function () {
          if (is_function(
          /*onload*/
          ctx[3]))
            /*onload*/
            ctx[3].apply(this, arguments);
        }, false, false, false);
        mounted = true;
      }
    },
    p: function update(new_ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      ctx = new_ctx;

      if (dirty &
      /*src*/
      1 && source0_srcset_value !== (source0_srcset_value =
      /*src*/
      ctx[0] + ".webp")) {
        attr_dev(source0, "srcset", source0_srcset_value);
      }

      if (dirty &
      /*src*/
      1 && source1_srcset_value !== (source1_srcset_value =
      /*src*/
      ctx[0] + ".png")) {
        attr_dev(source1, "srcset", source1_srcset_value);
      }

      if (dirty &
      /*src*/
      1 && img_1.src !== (img_1_src_value =
      /*src*/
      ctx[0] + ".png")) {
        attr_dev(img_1, "src", img_1_src_value);
      }

      if (dirty &
      /*alt*/
      2) {
        attr_dev(img_1, "alt",
        /*alt*/
        ctx[1]);
      }

      if (dirty &
      /*opacity*/
      4) {
        set_style(img_1, "opacity",
        /*opacity*/
        ctx[2]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(picture);
      /*img_1_binding*/

      ctx[5](null);
      mounted = false;
      dispose();
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

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Img", slots, []);
  var src = $$props.src;
  var alt = $$props.alt;
  var _$$props$opacity = $$props.opacity,
      opacity = _$$props$opacity === void 0 ? 1 : _$$props$opacity;
  var _$$props$onload = $$props.onload,
      onload = _$$props$onload === void 0 ? function () {} : _$$props$onload;
  var img;
  onMount(function () {
    if (img.complete) {
      onload();
    }
  });
  var writable_props = ["src", "alt", "opacity", "onload"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Img> was created with unknown prop '".concat(key, "'"));
  });

  function img_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      img = $$value;
      $$invalidate(4, img);
    });
  }

  $$self.$$set = function ($$props) {
    if ("src" in $$props) $$invalidate(0, src = $$props.src);
    if ("alt" in $$props) $$invalidate(1, alt = $$props.alt);
    if ("opacity" in $$props) $$invalidate(2, opacity = $$props.opacity);
    if ("onload" in $$props) $$invalidate(3, onload = $$props.onload);
  };

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      src: src,
      alt: alt,
      opacity: opacity,
      onload: onload,
      img: img
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("src" in $$props) $$invalidate(0, src = $$props.src);
    if ("alt" in $$props) $$invalidate(1, alt = $$props.alt);
    if ("opacity" in $$props) $$invalidate(2, opacity = $$props.opacity);
    if ("onload" in $$props) $$invalidate(3, onload = $$props.onload);
    if ("img" in $$props) $$invalidate(4, img = $$props.img);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [src, alt, opacity, onload, img, img_1_binding];
}

var Img = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Img, _SvelteComponentDev);

  var _super = _createSuper(Img);

  function Img(options) {
    var _this;

    _classCallCheck(this, Img);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      src: 0,
      alt: 1,
      opacity: 2,
      onload: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Img",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*src*/
    ctx[0] === undefined && !("src" in props)) {
      console.warn("<Img> was created without expected prop 'src'");
    }

    if (
    /*alt*/
    ctx[1] === undefined && !("alt" in props)) {
      console.warn("<Img> was created without expected prop 'alt'");
    }

    return _this;
  }

  _createClass(Img, [{
    key: "src",
    get: function get() {
      throw new Error("<Img>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Img>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "alt",
    get: function get() {
      throw new Error("<Img>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Img>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "opacity",
    get: function get() {
      throw new Error("<Img>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Img>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "onload",
    get: function get() {
      throw new Error("<Img>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Img>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Img;
}(SvelteComponentDev);

function fade(node, _ref2) {
  var _ref2$delay = _ref2.delay,
      delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
      _ref2$duration = _ref2.duration,
      duration = _ref2$duration === void 0 ? 400 : _ref2$duration,
      _ref2$easing = _ref2.easing,
      easing = _ref2$easing === void 0 ? identity : _ref2$easing;
  var o = +getComputedStyle(node).opacity;
  return {
    delay: delay,
    duration: duration,
    easing: easing,
    css: function css(t) {
      return "opacity: ".concat(t * o);
    }
  };
}

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/components/Loader.svelte";

function create_fragment$1(ctx) {
  var div;
  var p;
  var t0;
  var t1;
  var span;
  var div_transition;
  var current;
  var block = {
    c: function create() {
      div = element("div");
      p = element("p");
      t0 = text("loading");
      t1 = space();
      span = element("span");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      p = claim_element(div_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "loading");
      p_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      span = claim_element(div_nodes, "SPAN", {
        class: true
      });
      children(span).forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "svelte-1y1iwro");
      add_location(p, file$1, 223, 2, 3679);
      attr_dev(span, "class", "svelte-1y1iwro");
      add_location(span, file$1, 224, 2, 3696);
      attr_dev(div, "class", "loading svelte-1y1iwro");
      add_location(div, file$1, 222, 0, 3639);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, p);
      append_dev(p, t0);
      append_dev(div, t1);
      append_dev(div, span);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      add_render_callback(function () {
        if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, true);
        div_transition.run(1);
      });
      current = true;
    },
    o: function outro(local) {
      if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, false);
      div_transition.run(0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (detaching && div_transition) div_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Loader", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Loader> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      fade: fade
    };
  };

  return [];
}

var Loader = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Loader, _SvelteComponentDev);

  var _super = _createSuper$1(Loader);

  function Loader(options) {
    var _this;

    _classCallCheck(this, Loader);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Loader",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Loader;
}(SvelteComponentDev);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var console_1 = globals.console;
var file$2 = "src/routes/index.svelte"; // (124:2) {#if loader_display}

function create_if_block_2(ctx) {
  var loader;
  var current;
  loader = new Loader({
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(loader.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(loader.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(loader, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(loader.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loader.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loader, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_2.name,
    type: "if",
    source: "(124:2) {#if loader_display}",
    ctx: ctx
  });
  return block;
} // (137:6) {#if loaded_target === loaded_count}


function create_if_block_1(ctx) {
  var div;
  var img;
  var t0;
  var a;
  var t1;
  var a_hidden_value;
  var div_transition;
  var current;
  img = new Img({
    props: {
      src: "artwork/hidden_season_scaled",
      alt: "Hidden Season",
      opacity:
      /*left_hovered*/
      ctx[1] ? 0.6 : 1
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      div = element("div");
      create_component(img.$$.fragment);
      t0 = space();
      a = element("a");
      t1 = text("Primary");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      claim_component(img.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      a = claim_element(div_nodes, "A", {
        type: true,
        class: true,
        hidden: true,
        href: true
      });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Primary");
      a_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "type", "button");
      attr_dev(a, "class", "btn btn-outline-primary svelte-1t689gm");
      a.hidden = a_hidden_value = !
      /*left_hovered*/
      ctx[1];
      attr_dev(a, "href", "left");
      add_location(a, file$2, 147, 10, 3876);
      attr_dev(div, "class", "inner-card rounded-r-2xl svelte-1t689gm");
      toggle_class(div, "active",
      /*left_hovered*/
      ctx[1]);
      toggle_class(div, "normal", !
      /*right_hovered*/
      ctx[0] && !
      /*left_hovered*/
      ctx[1]);
      toggle_class(div, "inactive",
      /*right_hovered*/
      ctx[0]);
      add_location(div, file$2, 137, 8, 3508);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(img, div, null);
      append_dev(div, t0);
      append_dev(div, a);
      append_dev(a, t1);
      current = true;
    },
    p: function update(ctx, dirty) {
      var img_changes = {};
      if (dirty &
      /*left_hovered*/
      2) img_changes.opacity =
      /*left_hovered*/
      ctx[1] ? 0.6 : 1;
      img.$set(img_changes);

      if (!current || dirty &
      /*left_hovered*/
      2 && a_hidden_value !== (a_hidden_value = !
      /*left_hovered*/
      ctx[1])) {
        prop_dev(a, "hidden", a_hidden_value);
      }

      if (dirty &
      /*left_hovered*/
      2) {
        toggle_class(div, "active",
        /*left_hovered*/
        ctx[1]);
      }

      if (dirty &
      /*right_hovered, left_hovered*/
      3) {
        toggle_class(div, "normal", !
        /*right_hovered*/
        ctx[0] && !
        /*left_hovered*/
        ctx[1]);
      }

      if (dirty &
      /*right_hovered*/
      1) {
        toggle_class(div, "inactive",
        /*right_hovered*/
        ctx[0]);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(img.$$.fragment, local);
      add_render_callback(function () {
        if (!div_transition) div_transition = create_bidirectional_transition(div,
        /*slideLeft*/
        ctx[5], {}, true);
        div_transition.run(1);
      });
      current = true;
    },
    o: function outro(local) {
      transition_out(img.$$.fragment, local);
      if (!div_transition) div_transition = create_bidirectional_transition(div,
      /*slideLeft*/
      ctx[5], {}, false);
      div_transition.run(0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      destroy_component(img);
      if (detaching && div_transition) div_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(137:6) {#if loaded_target === loaded_count}",
    ctx: ctx
  });
  return block;
} // (165:6) {#if loaded_target === loaded_count}


function create_if_block(ctx) {
  var div;
  var img;
  var t0;
  var a;
  var t1;
  var a_hidden_value;
  var div_transition;
  var current;
  img = new Img({
    props: {
      src: "artwork/pelton_gaming_scaled",
      alt: "Pelton Gaming",
      opacity:
      /*right_hovered*/
      ctx[0] ? 0.6 : 1
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      div = element("div");
      create_component(img.$$.fragment);
      t0 = space();
      a = element("a");
      t1 = text("Primary");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      claim_component(img.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      a = claim_element(div_nodes, "A", {
        type: true,
        class: true,
        hidden: true,
        href: true
      });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Primary");
      a_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "type", "button");
      attr_dev(a, "class", "btn btn-outline-primary svelte-1t689gm");
      a.hidden = a_hidden_value = !
      /*right_hovered*/
      ctx[0];
      attr_dev(a, "href", "right");
      add_location(a, file$2, 175, 10, 4661);
      attr_dev(div, "class", "inner-card rounded-l-2xl svelte-1t689gm");
      toggle_class(div, "active",
      /*right_hovered*/
      ctx[0]);
      toggle_class(div, "normal", !
      /*right_hovered*/
      ctx[0] && !
      /*left_hovered*/
      ctx[1]);
      toggle_class(div, "inactive",
      /*left_hovered*/
      ctx[1]);
      add_location(div, file$2, 165, 8, 4291);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(img, div, null);
      append_dev(div, t0);
      append_dev(div, a);
      append_dev(a, t1);
      current = true;
    },
    p: function update(ctx, dirty) {
      var img_changes = {};
      if (dirty &
      /*right_hovered*/
      1) img_changes.opacity =
      /*right_hovered*/
      ctx[0] ? 0.6 : 1;
      img.$set(img_changes);

      if (!current || dirty &
      /*right_hovered*/
      1 && a_hidden_value !== (a_hidden_value = !
      /*right_hovered*/
      ctx[0])) {
        prop_dev(a, "hidden", a_hidden_value);
      }

      if (dirty &
      /*right_hovered*/
      1) {
        toggle_class(div, "active",
        /*right_hovered*/
        ctx[0]);
      }

      if (dirty &
      /*right_hovered, left_hovered*/
      3) {
        toggle_class(div, "normal", !
        /*right_hovered*/
        ctx[0] && !
        /*left_hovered*/
        ctx[1]);
      }

      if (dirty &
      /*left_hovered*/
      2) {
        toggle_class(div, "inactive",
        /*left_hovered*/
        ctx[1]);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(img.$$.fragment, local);
      add_render_callback(function () {
        if (!div_transition) div_transition = create_bidirectional_transition(div,
        /*slideRight*/
        ctx[4], {}, true);
        div_transition.run(1);
      });
      current = true;
    },
    o: function outro(local) {
      transition_out(img.$$.fragment, local);
      if (!div_transition) div_transition = create_bidirectional_transition(div,
      /*slideRight*/
      ctx[4], {}, false);
      div_transition.run(0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      destroy_component(img);
      if (detaching && div_transition) div_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(165:6) {#if loaded_target === loaded_count}",
    ctx: ctx
  });
  return block;
}

function create_fragment$2(ctx) {
  var t0;
  var main;
  var t1;
  var div2;
  var div0;
  var t2;
  var div1;
  var current;
  var mounted;
  var dispose;
  var if_block0 =
  /*loader_display*/
  ctx[3] && create_if_block_2(ctx);
  var if_block1 = loaded_target ===
  /*loaded_count*/
  ctx[2] && create_if_block_1(ctx);
  var if_block2 = loaded_target ===
  /*loaded_count*/
  ctx[2] && create_if_block(ctx);
  var block = {
    c: function create() {
      t0 = space();
      main = element("main");
      if (if_block0) if_block0.c();
      t1 = space();
      div2 = element("div");
      div0 = element("div");
      if (if_block1) if_block1.c();
      t2 = space();
      div1 = element("div");
      if (if_block2) if_block2.c();
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-tozi5p\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      main = claim_element(nodes, "MAIN", {
        class: true,
        style: true
      });
      var main_nodes = children(main);
      if (if_block0) if_block0.l(main_nodes);
      t1 = claim_space(main_nodes);
      div2 = claim_element(main_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        id: true,
        class: true
      });
      var div0_nodes = children(div0);
      if (if_block1) if_block1.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        id: true,
        class: true
      });
      var div1_nodes = children(div1);
      if (if_block2) if_block2.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      main_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Berly Dai Portfolio";
      attr_dev(div0, "id", "left");
      attr_dev(div0, "class", "pr-2");
      add_location(div0, file$2, 127, 4, 3282);
      attr_dev(div1, "id", "right");
      attr_dev(div1, "class", "pl-2");
      add_location(div1, file$2, 155, 4, 4062);
      attr_dev(div2, "class", "flex w-full h-full pb-4");
      add_location(div2, file$2, 126, 2, 3240);
      attr_dev(main, "class", "w-full overflow-hidden");
      set_style(main, "height", "calc(100vh - 5.5rem)");
      add_location(main, file$2, 122, 0, 3117);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, main, anchor);
      if (if_block0) if_block0.m(main, null);
      append_dev(main, t1);
      append_dev(main, div2);
      append_dev(div2, div0);
      if (if_block1) if_block1.m(div0, null);
      append_dev(div2, t2);
      append_dev(div2, div1);
      if (if_block2) if_block2.m(div1, null);
      current = true;

      if (!mounted) {
        dispose = [listen_dev(div0, "mouseenter",
        /*mouseenter_handler*/
        ctx[8], false, false, false), listen_dev(div0, "mouseleave",
        /*mouseleave_handler*/
        ctx[9], false, false, false), listen_dev(div1, "mouseenter",
        /*mouseenter_handler_1*/
        ctx[10], false, false, false), listen_dev(div1, "mouseleave",
        /*mouseleave_handler_1*/
        ctx[11], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*loader_display*/
      ctx[3]) {
        if (if_block0) {
          if (dirty &
          /*loader_display*/
          8) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(main, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      if (loaded_target ===
      /*loaded_count*/
      ctx[2]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*loaded_count*/
          4) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div0, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        check_outros();
      }

      if (loaded_target ===
      /*loaded_count*/
      ctx[2]) {
        if (if_block2) {
          if_block2.p(ctx, dirty);

          if (dirty &
          /*loaded_count*/
          4) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block(ctx);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div1, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, function () {
          if_block2 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(main);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (if_block2) if_block2.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var loaded_target = 2;

function instance$2($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", slots, []);
  var right_hovered = false;
  var left_hovered = false;
  var exiting = false;
  var loaded_count = 0;
  var loader_display = false;
  onMount(function () {
    var webp_support = get_webp_support();
    var left_img = new Image();
    left_img.addEventListener("load", function () {
      $$invalidate(2, loaded_count += 1);
    });

    if (webp_support) {
      left_img.src = "artwork/hidden_season_scaled.webp";
    } else {
      left_img.src = "artwork/hidden_season_scaled.png";
    }

    var right_img = new Image();
    right_img.addEventListener("load", function () {
      $$invalidate(2, loaded_count += 1);
    });

    if (webp_support) {
      right_img.src = "artwork/pelton_gaming_scaled.webp";
    } else {
      right_img.src = "artwork/pelton_gaming_scaled.png";
    }

    setTimeout(function () {
      if (loaded_count != loaded_target) {
        console.log("starting loader");
        $$invalidate(3, loader_display = true);
      }
    }, 500);
  });

  function slideRight(node, _ref3) {
    var _ref3$delay = _ref3.delay,
        delay = _ref3$delay === void 0 ? 0 : _ref3$delay,
        _ref3$duration = _ref3.duration,
        duration = _ref3$duration === void 0 ? 500 : _ref3$duration;
    return {
      delay: delay,
      duration: duration,
      easing: cubicInOut,
      css: function css(t) {
        return "transform: translateX(".concat((1 - t) * 100, "%)");
      }
    };
  }

  function slideLeft(node, _ref4) {
    var _ref4$delay = _ref4.delay,
        delay = _ref4$delay === void 0 ? 0 : _ref4$delay,
        _ref4$duration = _ref4.duration,
        duration = _ref4$duration === void 0 ? 500 : _ref4$duration;
    return {
      delay: delay,
      duration: duration,
      easing: cubicInOut,
      css: function css(t) {
        return "transform: translateX(-".concat((1 - t) * 100, "%)");
      }
    };
  }

  function enter(id) {
    if (!exiting) {
      if (id === "right") {
        $$invalidate(0, right_hovered = true);
      } else if (id === "left") {
        $$invalidate(1, left_hovered = true);
      }
    }
  }

  function leave(id) {
    if (!exiting) {
      if (id === "right") {
        $$invalidate(0, right_hovered = false);
      } else if (id === "left") {
        $$invalidate(1, left_hovered = false);
      }
    }
  }

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });

  var mouseenter_handler = function mouseenter_handler() {
    enter("left");
  };

  var mouseleave_handler = function mouseleave_handler() {
    leave("left");
  };

  var mouseenter_handler_1 = function mouseenter_handler_1() {
    enter("right");
  };

  var mouseleave_handler_1 = function mouseleave_handler_1() {
    leave("right");
  };

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      cubicInOut: cubicInOut,
      Img: Img,
      Loader: Loader,
      get_webp_support: get_webp_support,
      right_hovered: right_hovered,
      left_hovered: left_hovered,
      exiting: exiting,
      loaded_count: loaded_count,
      loaded_target: loaded_target,
      loader_display: loader_display,
      slideRight: slideRight,
      slideLeft: slideLeft,
      enter: enter,
      leave: leave
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("right_hovered" in $$props) $$invalidate(0, right_hovered = $$props.right_hovered);
    if ("left_hovered" in $$props) $$invalidate(1, left_hovered = $$props.left_hovered);
    if ("exiting" in $$props) exiting = $$props.exiting;
    if ("loaded_count" in $$props) $$invalidate(2, loaded_count = $$props.loaded_count);
    if ("loader_display" in $$props) $$invalidate(3, loader_display = $$props.loader_display);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [right_hovered, left_hovered, loaded_count, loader_display, slideRight, slideLeft, enter, leave, mouseenter_handler, mouseleave_handler, mouseenter_handler_1, mouseleave_handler_1];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper$2(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
