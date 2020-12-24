import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, g as element, h as space, B as text, j as claim_element, k as children, m as detach_dev, l as claim_space, C as claim_text, n as attr_dev, p as add_location, q as set_style, r as insert_dev, t as append_dev, y as noop, v as validate_slots, o as onMount, R as globals, z as binding_callbacks } from './client.490c89f4.js';
import { q as quintInOut } from './index.8bfd631a.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var console_1 = globals.console;
var file = "src/routes/new_landing.svelte";

function create_fragment(ctx) {
  var div0;
  var t0;
  var div5;
  var div1;
  var t1;
  var t2;
  var div2;
  var t3;
  var t4;
  var div4;
  var div3;
  var t5;
  var t6;
  var div6;
  var block = {
    c: function create() {
      div0 = element("div");
      t0 = space();
      div5 = element("div");
      div1 = element("div");
      t1 = text("Hi, ");
      t2 = space();
      div2 = element("div");
      t3 = text("I'm ");
      t4 = space();
      div4 = element("div");
      div3 = element("div");
      t5 = text("Berly.");
      t6 = space();
      div6 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div0 = claim_element(nodes, "DIV", {
        class: true
      });
      children(div0).forEach(detach_dev);
      t0 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", {
        class: true,
        style: true
      });
      var div5_nodes = children(div5);
      div1 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t1 = claim_text(div1_nodes, "Hi, ");
      div1_nodes.forEach(detach_dev);
      t2 = claim_space(div5_nodes);
      div2 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t3 = claim_text(div2_nodes, "I'm ");
      div2_nodes.forEach(detach_dev);
      t4 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", {});
      var div3_nodes = children(div3);
      t5 = claim_text(div3_nodes, "Berly.");
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t6 = claim_space(nodes);
      div6 = claim_element(nodes, "DIV", {
        class: true
      });
      children(div6).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "absolute top-0 left-0 w-full h-24 bg-white");
      add_location(div0, file, 100, 0, 3354);
      attr_dev(div1, "class", "opacity-0");
      add_location(div1, file, 105, 2, 3581);
      attr_dev(div2, "class", "opacity-0");
      add_location(div2, file, 106, 2, 3637);
      add_location(div3, file, 108, 4, 3760);
      attr_dev(div4, "class", "opacity-0 whitespace-nowrap");
      add_location(div4, file, 107, 2, 3694);
      attr_dev(div5, "class", "flex flex-row items-center justify-center w-full h-screen text-5xl");
      set_style(div5, "transform", "translateY(-5.5rem)");
      add_location(div5, file, 101, 0, 3431);
      attr_dev(div6, "class", "w-full h-screen bg-black");
      add_location(div6, file, 111, 0, 3820);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div0, anchor);
      /*div0_binding*/

      ctx[6](div0);
      insert_dev(target, t0, anchor);
      insert_dev(target, div5, anchor);
      append_dev(div5, div1);
      append_dev(div1, t1);
      /*div1_binding*/

      ctx[7](div1);
      append_dev(div5, t2);
      append_dev(div5, div2);
      append_dev(div2, t3);
      /*div2_binding*/

      ctx[8](div2);
      append_dev(div5, t4);
      append_dev(div5, div4);
      append_dev(div4, div3);
      append_dev(div3, t5);
      /*div3_binding*/

      ctx[9](div3);
      /*div4_binding*/

      ctx[10](div4);
      /*div5_binding*/

      ctx[11](div5);
      insert_dev(target, t6, anchor);
      insert_dev(target, div6, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div0);
      /*div0_binding*/

      ctx[6](null);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div5);
      /*div1_binding*/

      ctx[7](null);
      /*div2_binding*/

      ctx[8](null);
      /*div3_binding*/

      ctx[9](null);
      /*div4_binding*/

      ctx[10](null);
      /*div5_binding*/

      ctx[11](null);
      if (detaching) detach_dev(t6);
      if (detaching) detach_dev(div6);
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
  validate_slots("New_landing", slots, []);
  var cover;
  var container;
  var hi;
  var content;
  var iam;
  var content_child;
  onMount(function () {
    requestAnimationFrame(fade_in);
  });
  var fade_in_start;

  function fade_in(timestamp) {
    if (fade_in_start === undefined) {
      fade_in_start = timestamp;
    }

    var duration = 1000;
    var elapsed = timestamp - fade_in_start;
    var progress = quintInOut(elapsed / duration);
    $$invalidate(2, hi.style.opacity = "".concat(progress), hi);
    $$invalidate(4, iam.style.opacity = "".concat(progress), iam);
    $$invalidate(3, content.style.opacity = "".concat(progress), content);

    if (elapsed < duration) {
      requestAnimationFrame(fade_in);
    } else {
      // Start fade out after 500
      setTimeout(function () {
        requestAnimationFrame(fade_out);
      }, 300);
    }
  }

  var fade_out_start;
  var text_expand_started = false;

  function fade_out(timestamp) {
    if (fade_out_start === undefined) {
      fade_out_start = timestamp;
    }

    var duration = 1000;
    var elapsed = timestamp - fade_out_start;
    var progress = quintInOut(elapsed / duration);
    $$invalidate(2, hi.style.opacity = "".concat(1 - progress), hi);
    $$invalidate(3, content.style.opacity = "".concat(1 - progress), content);

    if (elapsed > duration * 0.7 && !text_expand_started) {
      // Start text transition
      text_expand_started = true;
      $$invalidate(3, content.style.width = content.scrollWidth + "px", content);
      content_original_width = content.scrollWidth;
      hi_original_width = hi.scrollWidth;
      $$invalidate(5, content_child.innerText = "a designer, creator, and life lover.", content_child);
      requestAnimationFrame(text_exapnd);
    }

    if (elapsed < duration) {
      requestAnimationFrame(fade_out);
    }
  }

  var text_expand_start;
  var content_original_width;
  var hi_original_width;

  function text_exapnd(timestamp) {
    if (text_expand_start === undefined) {
      text_expand_start = timestamp;
    }

    var duration = 1000;
    var elapsed = timestamp - text_expand_start;
    var progress = quintInOut(elapsed / duration);
    $$invalidate(3, content.style.opacity = "".concat(progress), content);
    $$invalidate(3, content.style.width = "".concat(content_original_width + progress * (content.scrollWidth - content_original_width), "px"), content);
    $$invalidate(2, hi.style.width = "".concat((1 - progress) * hi_original_width, "px"), hi);

    if (elapsed < duration) {
      requestAnimationFrame(text_exapnd);
    } else {
      requestAnimationFrame(transition_to_main);
    }
  }

  var transition_to_main_start;
  var container_original_height;

  function transition_to_main(timestamp) {
    if (transition_to_main_start === undefined) {
      transition_to_main_start = timestamp;
      container_original_height = container.offsetHeight;
    }

    var duration = 1500;
    var elapsed = timestamp - transition_to_main_start;
    var target_height = 7;
    var target_fontsize = 1.5;
    console.log(container.style.height);
    var progress = quintInOut(elapsed / duration);
    $$invalidate(0, cover.style.opacity = "".concat(1 - progress), cover);
    $$invalidate(1, container.style.transform = "translateY(".concat((progress - 1) * 5.5, "rem)"), container);
    $$invalidate(1, container.style.height = "calc(".concat((1 - progress) * container_original_height, "px + ").concat(progress * target_height, "rem)"), container);
    $$invalidate(1, container.style.fontSize = "".concat((1 - progress) * 3 + progress * target_fontsize, "rem"), container);

    if (elapsed < duration) {
      requestAnimationFrame(transition_to_main);
    }
  }

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<New_landing> was created with unknown prop '".concat(key, "'"));
  });

  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      cover = $$value;
      $$invalidate(0, cover);
    });
  }

  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      hi = $$value;
      $$invalidate(2, hi);
    });
  }

  function div2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      iam = $$value;
      $$invalidate(4, iam);
    });
  }

  function div3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      content_child = $$value;
      $$invalidate(5, content_child);
    });
  }

  function div4_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      content = $$value;
      $$invalidate(3, content);
    });
  }

  function div5_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      container = $$value;
      $$invalidate(1, container);
    });
  }

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      quintInOut: quintInOut,
      cover: cover,
      container: container,
      hi: hi,
      content: content,
      iam: iam,
      content_child: content_child,
      fade_in_start: fade_in_start,
      fade_in: fade_in,
      fade_out_start: fade_out_start,
      text_expand_started: text_expand_started,
      fade_out: fade_out,
      text_expand_start: text_expand_start,
      content_original_width: content_original_width,
      hi_original_width: hi_original_width,
      text_exapnd: text_exapnd,
      transition_to_main_start: transition_to_main_start,
      container_original_height: container_original_height,
      transition_to_main: transition_to_main
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("cover" in $$props) $$invalidate(0, cover = $$props.cover);
    if ("container" in $$props) $$invalidate(1, container = $$props.container);
    if ("hi" in $$props) $$invalidate(2, hi = $$props.hi);
    if ("content" in $$props) $$invalidate(3, content = $$props.content);
    if ("iam" in $$props) $$invalidate(4, iam = $$props.iam);
    if ("content_child" in $$props) $$invalidate(5, content_child = $$props.content_child);
    if ("fade_in_start" in $$props) fade_in_start = $$props.fade_in_start;
    if ("fade_out_start" in $$props) fade_out_start = $$props.fade_out_start;
    if ("text_expand_started" in $$props) text_expand_started = $$props.text_expand_started;
    if ("text_expand_start" in $$props) text_expand_start = $$props.text_expand_start;
    if ("content_original_width" in $$props) content_original_width = $$props.content_original_width;
    if ("hi_original_width" in $$props) hi_original_width = $$props.hi_original_width;
    if ("transition_to_main_start" in $$props) transition_to_main_start = $$props.transition_to_main_start;
    if ("container_original_height" in $$props) container_original_height = $$props.container_original_height;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [cover, container, hi, content, iam, content_child, div0_binding, div1_binding, div2_binding, div3_binding, div4_binding, div5_binding];
}

var New_landing = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(New_landing, _SvelteComponentDev);

  var _super = _createSuper(New_landing);

  function New_landing(options) {
    var _this;

    _classCallCheck(this, New_landing);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "New_landing",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return New_landing;
}(SvelteComponentDev);

export default New_landing;
