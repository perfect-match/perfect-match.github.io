function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var seedrandom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! seedrandom */
    "./node_modules/seedrandom/index.js");
    /* harmony import */


    var seedrandom__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["form"];
    var _c1 = ["scale"];

    function AppComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.newGame();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Neues Spiel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.enterCode = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Code eingeben ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function AppComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AppComponent_ng_container_3_Template_form_submit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.setCode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Best\xE4tigen ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_3_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.enterCode = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Zur\xFCck ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("pattern", "[", ctx_r1.characters, "]{6}");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r6.invalid);
      }
    }

    function AppComponent_ng_container_4_div_33_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var marker_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", marker_r12, " ");
      }
    }

    function AppComponent_ng_container_4_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_4_div_33_div_1_Template, 2, 1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var marker_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", marker_r12 % 10 === 0);
      }
    }

    function AppComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_4_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.score = ctx_r15.score ? ctx_r15.score - 1 : 0;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u2212 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_4_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.score = ctx_r17.score + 1;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " + ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pointerdown", function AppComponent_ng_container_4_Template_div_pointerdown_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.startDrag($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "polygon", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AppComponent_ng_container_4_div_33_Template, 2, 1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_4_Template_button_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.nextRound();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " N\xE4chste Runde ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_4_Template_button_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_4_Template_button_click_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.rounds = ctx_r21.rounds + 1;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Runde hinzuf\xFCgen ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_4_Template_button_click_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.endGame();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Beenden ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Spiel #", ctx_r2.code, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Runde ", ctx_r2.round, " / ", ctx_r2.rounds, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r2.score, " ", ctx_r2.score === 1 ? "Punkt" : "Punkte", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.category.from);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.category.to);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r2.hideIndicator ? "none" : "flex")("left", ctx_r2.indicator, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx_r2.answer, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.markers);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.round === ctx_r2.rounds);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.hideIndicator ? "Ziel anzeigen" : "Ziel verbergen", " ");
      }
    }

    var categories = [{
      from: 'klein',
      to: 'groß'
    }, {
      from: 'mild',
      to: 'würzig'
    }, {
      from: 'Groschenroman',
      to: 'Weltliteratur'
    }, {
      from: 'untalentiert',
      to: 'talentiert'
    }, {
      from: 'Für Kinder',
      to: 'Für Erwachsene'
    }, {
      from: 'Morgens',
      to: 'Abends'
    }, {
      from: 'zwanglos',
      to: 'förmlich'
    }, {
      from: 'häufig',
      to: 'selten'
    }, {
      from: 'nah',
      to: 'fern'
    }, {
      from: 'stark',
      to: 'schwach'
    }, {
      from: 'Top',
      to: 'Flop'
    }, {
      from: 'Nord',
      to: 'Süd'
    }, {
      from: 'Ost',
      to: 'West'
    }, {
      from: 'lecker',
      to: 'ungenießbar'
    }, {
      from: 'stinkt',
      to: 'riecht gut'
    }, {
      from: 'Raubtier',
      to: 'Kuscheltier'
    }, {
      from: 'Dystopie',
      to: 'Utopie'
    }, {
      from: 'Beliebter Pizzabelag',
      to: 'Unbeliebter Pizzabelag'
    }, {
      from: 'hoch',
      to: 'tief'
    }, {
      from: 'weltoffen',
      to: 'engstirnig'
    }, {
      from: 'gut',
      to: 'böse'
    }, {
      from: 'Diktatur',
      to: 'Demokratie'
    }, {
      from: 'heiß',
      to: 'kalt'
    }, {
      from: 'gute Angewohnheit',
      to: 'schlechte Angewohnheit'
    }, {
      from: 'historisch wichtig',
      to: 'historisch unwichtig'
    }, {
      from: 'attraktiv',
      to: 'unattraktiv'
    }, {
      from: 'überbewertet',
      to: 'unterbewertet'
    }, {
      from: 'verboten',
      to: 'erwünscht'
    }, {
      from: 'nass',
      to: 'trocken'
    }, {
      from: 'glatt',
      to: 'rau'
    }, {
      from: 'populär',
      to: 'unpopulär'
    }, {
      from: 'weich',
      to: 'hart'
    }, {
      from: 'dumm',
      to: 'brilliant'
    }, {
      from: 'billig',
      to: 'teuer'
    }, {
      from: 'benötigt Können',
      to: 'benötigt Glück'
    }, {
      from: 'oft benutzter Buchstabe',
      to: 'selten benutzter Buchstabe'
    }, {
      from: 'geteilt',
      to: 'ganz'
    }, {
      from: 'nützliche Erfindung',
      to: 'unnütze Erfindung'
    }, {
      from: 'flexibel',
      to: 'unflexibel'
    }, {
      from: 'rund',
      to: 'spitz'
    }, {
      from: 'hohe Qualität',
      to: 'niedrige Qualität'
    }, {
      from: 'hell',
      to: 'dunkel'
    }, {
      from: 'gut gemacht',
      to: 'schlecht gemacht'
    }, {
      from: 'lauter Ort',
      to: 'leiser Ort'
    }, {
      from: 'brauchen',
      to: 'wollen'
    }, {
      from: 'schlechte Superkraft',
      to: 'geniale Superkraft'
    }, {
      from: 'temporär',
      to: 'permanent'
    }, {
      from: 'matt',
      to: 'glänzend'
    }, {
      from: 'sauber',
      to: 'dreckig'
    }, {
      from: 'durchsichtig',
      to: 'undurchsichtig'
    }, {
      from: 'reich',
      to: 'arm'
    }, {
      from: 'knapp',
      to: 'ausreichend'
    }, {
      from: 'Dorf',
      to: 'Weltstadt'
    }, {
      from: 'nett',
      to: 'gemein'
    }, {
      from: 'friedlich',
      to: 'gewaltsam'
    }, {
      from: 'unterlegen',
      to: 'überlegen'
    }, {
      from: 'immer leer',
      to: 'immer voll'
    }, {
      from: 'großes Land',
      to: 'kleines Land'
    }, {
      from: 'altmodisch',
      to: 'modern'
    }, {
      from: 'regional',
      to: 'global'
    }, {
      from: 'verantwortungsvoll',
      to: 'leichtsinnig'
    }, {
      from: 'loyal',
      to: 'untreu'
    }, {
      from: 'Kavaliersdelikt',
      to: 'Straftat'
    }, {
      from: 'schnell',
      to: 'langsam'
    }, {
      from: '80er',
      to: '90er'
    }, {
      from: 'normaler Besitzgegenstand',
      to: 'ungewöhnlicher Besitzgegenstand'
    }, {
      from: 'beliebter Drink',
      to: 'seltener Drink'
    }, {
      from: 'dick',
      to: 'dünn'
    }, {
      from: 'monoton',
      to: 'abwechslungsreich'
    }, {
      from: 'heruntergekommen',
      to: 'in Schuss'
    }];

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.characters = '123456789abcdefghijkmnpqrstuvwxyz';
        this.enterCode = false;
        this.code = '';
        this.indicator = 50;
        this.answer = 0;
        this.hideIndicator = true;
        this.round = 0;
        this.rounds = 7;
        this.score = 0;
        this.categories = categories.slice();
        this.markers = Array.from(new Array(21).keys()).map(function (index) {
          return index * 5;
        });

        this.drag = function (event) {
          return _this.updateAnswer(event.pageX);
        };

        this.endDrag = function () {
          document.removeEventListener('pointermove', _this.drag);
          document.removeEventListener('pointerup', _this.endDrag);
        };
      }

      _createClass(AppComponent, [{
        key: "newGame",
        value: function newGame() {
          var random = seedrandom__WEBPACK_IMPORTED_MODULE_1___default()();

          for (var i = 0; i < 6; i++) {
            this.code += this.characters[Math.floor(random() * this.characters.length)];
          }

          this.nextRound();
        }
      }, {
        key: "setCode",
        value: function setCode() {
          this.code = this.form.value.code;
          this.enterCode = false;
          this.nextRound();
        }
      }, {
        key: "nextRound",
        value: function nextRound() {
          var random = new seedrandom__WEBPACK_IMPORTED_MODULE_1___default.a("".concat(this.code, ".").concat(this.round));
          this.round++;
          this.hideIndicator = true;
          this.indicator = random() * 100;
          this.category = this.categories.splice(Math.floor(random() * this.categories.length), 1)[0];

          if (!this.categories.length) {
            this.categories = categories.slice();
          }
        }
      }, {
        key: "startDrag",
        value: function startDrag(event) {
          document.addEventListener('pointermove', this.drag);
          document.addEventListener('pointerup', this.endDrag);
          this.updateAnswer(event.pageX);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.hideIndicator = !this.hideIndicator;
        }
      }, {
        key: "endGame",
        value: function endGame() {
          this.code = '';
          this.round = 0;
          this.rounds = 7;
          this.score = 0;
        }
      }, {
        key: "updateAnswer",
        value: function updateAnswer(pageX) {
          var scaleRect = this.scaleRect;
          this.answer = Math.min(Math.max(pageX - scaleRect.left, 0), scaleRect.width);
        }
      }, {
        key: "scaleRect",
        get: function get() {
          return this.scaleRef.nativeElement.getBoundingClientRect();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scaleRef = _t.first);
        }
      },
      decls: 5,
      vars: 3,
      consts: [["app__title", ""], [4, "ngIf"], ["app__button", "", "type", "button", 3, "click"], ["app__button", "info", "type", "button", 3, "click"], ["app__form", "", 3, "submit"], ["form", "ngForm"], ["app__label", "", "for", "code"], ["app__input", "", "name", "code", "ngModel", "", "required", "", 3, "pattern"], ["app__button", "", "type", "submit", 3, "disabled"], ["app__button", "danger", "type", "button", 3, "click"], ["app__code", ""], ["app__round", ""], ["app__scoreboard", ""], ["app__score", ""], ["app__category", ""], ["app__from", ""], ["app__to", ""], ["app__scale", "", 3, "pointerdown"], ["scale", ""], ["app__indicator", ""], ["app__indicator-2", ""], ["app__indicator-3", ""], ["app__indicator-4", ""], ["app__answer", "", "viewBox", "0 0 2 2", "preserveAspectRatio", "none"], ["score", "1,0 2,2 0,2"], ["app__markers", ""], ["app__marker", "", 4, "ngFor", "ngForOf"], ["app__button", "", "type", "button", 3, "disabled", "click"], ["app__button", "warning", "type", "button", 3, "click"], ["app__marker", ""], ["app__value", "", 4, "ngIf"], ["app__value", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Perfect Match ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_container_2_Template, 5, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_container_3_Template, 10, 2, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_container_4_Template, 42, 16, "ng-container", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.code && !ctx.enterCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.code && ctx.enterCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.code);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n[app__title][_ngcontent-%COMP%] {\n  margin: 0 0 4vh;\n  font-size: 6vh;\n  font-family: \"Leckerli One\", cursive;\n  color: #37474f;\n}\n\n[app__code][_ngcontent-%COMP%] {\n  margin-bottom: 4vh;\n  font-size: 2vw;\n}\n\n[app__round][_ngcontent-%COMP%] {\n  margin-bottom: 2vh;\n  font-size: 1.5vw;\n}\n\n[app__scoreboard][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6vh;\n}\n\n[app__scoreboard][_ngcontent-%COMP%]   [app__button][_ngcontent-%COMP%] {\n  width: 3vw;\n  margin-top: 0;\n}\n\n[app__score][_ngcontent-%COMP%] {\n  width: 12vw;\n  font-size: 1.5vw;\n  text-align: center;\n}\n\n[app__category][_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 3vw 1vh;\n  align-self: stretch;\n  font-size: 36px;\n}\n\n[app__scale][_ngcontent-%COMP%] {\n  align-self: stretch;\n  position: relative;\n  margin: 0 3vw 0;\n  height: 10vh;\n  background-color: #f5f5f5;\n}\n\n[app__markers][_ngcontent-%COMP%] {\n  display: flex;\n  align-self: stretch;\n  margin: 0 3vw 4vw;\n}\n\n[app__marker][_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  position: relative;\n  height: 2vh;\n  width: 5%;\n}\n\n[app__marker][_ngcontent-%COMP%]:nth-child(2n) {\n  height: 1vh;\n}\n\n[app__marker][_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -1px;\n  width: 2px;\n  background-color: #37474f;\n}\n\n[app__value][_ngcontent-%COMP%] {\n  position: relative;\n  top: 2vh;\n  left: -2vw;\n  width: 4vw;\n  font-size: 2vw;\n  text-align: center;\n}\n\n[app__indicator][_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  margin-left: -10%;\n  width: 20%;\n}\n\n[app__indicator-2][_ngcontent-%COMP%], [app__indicator-3][_ngcontent-%COMP%], [app__indicator-4][_ngcontent-%COMP%] {\n  width: 20%;\n  height: 10vh;\n  line-height: 2;\n  font-size: 2vh;\n  text-align: center;\n}\n\n[app__indicator-2][_ngcontent-%COMP%] {\n  background-color: #ef5350;\n}\n\n[app__indicator-3][_ngcontent-%COMP%] {\n  background-color: #ffd95b;\n}\n\n[app__indicator-4][_ngcontent-%COMP%] {\n  background: #64b5f6;\n}\n\n[app__answer][_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -1%;\n  width: 2%;\n  height: 6vh;\n  cursor: pointer;\n}\n\n[app__from][_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n[app__button][_ngcontent-%COMP%] {\n  margin-top: 2vh;\n  padding: 0.5vw;\n  width: 20vw;\n  border: none;\n  background-color: #519657;\n  color: white;\n  font-size: 1.5vw;\n}\n\n[app__button][_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n}\n\n[app__button=danger][_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n\n[app__button=warning][_ngcontent-%COMP%] {\n  background-color: #ffa726;\n}\n\n[app__button=info][_ngcontent-%COMP%] {\n  background-color: #2286c3;\n}\n\n[app__form][_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n[app__label][_ngcontent-%COMP%] {\n  margin-bottom: 1vh;\n  font-size: 2vw;\n}\n\n[app__input][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0.5vw;\n  width: 20vw;\n  border: 1px solid #37474f;\n  font-size: 2vw;\n  text-align: center;\n}\n\n[app__input][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNYXJrdXMgU2NobWlkdFxcUHJvamVrdGVcXHBlcmZlY3QtbWF0Y2gvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQ25CSjs7QURzQkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQ25CSjs7QURzQkE7RUFDSSxrQkF6Q2tCO0VBMENsQixjQUFBO0FDbkJKOztBRHNCQTtFQUNJLGtCQTVDbUI7RUE2Q25CLGdCQUFBO0FDbkJKOztBRHNCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQWpEd0I7QUM4QjVCOztBRHFCSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FDbkJSOztBRHVCQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDcEJKOztBRHVCQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBcEVZO0VBcUVaLHlCQUFBO0FDcEJKOztBRHVCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDcEJKOztBRHVCQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDcEJKOztBRHNCSTtFQUNJLFdBQUE7QUNwQlI7O0FEdUJJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDckJSOztBRHlCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDdEJKOztBRHlCQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ3RCSjs7QUR5QkE7OztFQUdJLFVBQUE7RUFDQSxZQTFIWTtFQTJIWixjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDdEJKOztBRHlCQTtFQUNJLHlCQUFBO0FDdEJKOztBRHlCQTtFQUNJLHlCQUFBO0FDdEJKOztBRHlCQTtFQUNJLG1CQUFBO0FDdEJKOztBRHlCQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBM0lZO0VBNElaLFdBQUE7RUFDQSxlQUFBO0FDdEJKOztBRHlCQTtFQUNJLFlBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDdEJKOztBRHdCSTtFQUNJLHlCQUFBO0FDdEJSOztBRDBCQTtFQUNJLHlCQUFBO0FDdkJKOztBRDBCQTtFQUNJLHlCQUFBO0FDdkJKOztBRDBCQTtFQUNJLHlCQUFBO0FDdkJKOztBRDBCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDdkJKOztBRDBCQTtFQUNJLGtCQW5MbUI7RUFvTG5CLGNBQUE7QUN2Qko7O0FEMEJBO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDdkJKOztBRHlCSTtFQUNJLGFBQUE7QUN2QlIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29kZV9fbWFyZ2luLWJvdHRvbTogNHZoO1xyXG5cclxuJHJvdW5kX19tYXJnaW4tYm90dG9tOiAydmg7XHJcblxyXG4kc2NvcmVib2FyZF9fbWFyZ2luLWJvdHRvbTogNnZoO1xyXG5cclxuJGNhdGVnb3J5X19tYXJnaW4teDogM3Z3O1xyXG4kY2F0ZWdvcnlfX21hcmdpbi1ib3R0b206IDF2aDtcclxuXHJcbiRzY2FsZV9fbWFyZ2luOiAzdnc7XHJcbiRzY2FsZV9faGVpZ2h0OiAxMHZoO1xyXG5cclxuJG1hcmtlcl9fbWFyZ2luLWJvdHRvbTogNHZ3O1xyXG5cclxuJHN0ZXBfX3dpZHRoOiA0JTtcclxuXHJcbiRhbnN3ZXJfX3dpZHRoOiAyJTtcclxuXHJcbiRsYWJlbF9fbWFyZ2luLWJvdHRvbTogMXZoO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5bYXBwX190aXRsZV0ge1xyXG4gICAgbWFyZ2luOiAwIDAgNHZoO1xyXG4gICAgZm9udC1zaXplOiA2dmg7XHJcbiAgICBmb250LWZhbWlseTogJ0xlY2tlcmxpIE9uZScsIGN1cnNpdmU7XHJcbiAgICBjb2xvcjogIzM3NDc0ZjtcclxufVxyXG5cclxuW2FwcF9fY29kZV0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJGNvZGVfX21hcmdpbi1ib3R0b207XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxufVxyXG5cclxuW2FwcF9fcm91bmRdIHtcclxuICAgIG1hcmdpbi1ib3R0b206ICRyb3VuZF9fbWFyZ2luLWJvdHRvbTtcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbn1cclxuXHJcblthcHBfX3Njb3JlYm9hcmRdIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHNjb3JlYm9hcmRfX21hcmdpbi1ib3R0b207XHJcblxyXG4gICAgW2FwcF9fYnV0dG9uXSB7XHJcbiAgICAgICAgd2lkdGg6IDN2dztcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5bYXBwX19zY29yZV0ge1xyXG4gICAgd2lkdGg6IDEydnc7XHJcbiAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5bYXBwX19jYXRlZ29yeV0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMCAkY2F0ZWdvcnlfX21hcmdpbi14ICRjYXRlZ29yeV9fbWFyZ2luLWJvdHRvbTtcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuXHJcblthcHBfX3NjYWxlXSB7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwICRzY2FsZV9fbWFyZ2luIDA7XHJcbiAgICBoZWlnaHQ6ICRzY2FsZV9faGVpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuW2FwcF9fbWFya2Vyc10ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICBtYXJnaW46IDAgJHNjYWxlX19tYXJnaW4gJG1hcmtlcl9fbWFyZ2luLWJvdHRvbTtcclxufVxyXG5cclxuW2FwcF9fbWFya2VyXSB7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMnZoO1xyXG4gICAgd2lkdGg6IDUlO1xyXG5cclxuICAgICY6bnRoLWNoaWxkKDJuKSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxdmg7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IC0xcHg7XHJcbiAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0NzRmO1xyXG4gICAgfVxyXG59XHJcblxyXG5bYXBwX192YWx1ZV0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAydmg7XHJcbiAgICBsZWZ0OiAtMnZ3O1xyXG4gICAgd2lkdGg6IDR2dztcclxuICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5bYXBwX19pbmRpY2F0b3JdIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLSRzdGVwX193aWR0aCAqIDIuNTtcclxuICAgIHdpZHRoOiAkc3RlcF9fd2lkdGggKiA1O1xyXG59XHJcblxyXG5bYXBwX19pbmRpY2F0b3ItMl0sXHJcblthcHBfX2luZGljYXRvci0zXSxcclxuW2FwcF9faW5kaWNhdG9yLTRdIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6ICRzY2FsZV9faGVpZ2h0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICBmb250LXNpemU6ICRzY2FsZV9faGVpZ2h0ICogMC4yO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5bYXBwX19pbmRpY2F0b3ItMl0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTM1MDtcclxufVxyXG5cclxuW2FwcF9faW5kaWNhdG9yLTNdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ5NWI7XHJcbn1cclxuXHJcblthcHBfX2luZGljYXRvci00XSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjRiNWY2O1xyXG59XHJcblxyXG5bYXBwX19hbnN3ZXJdIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtJGFuc3dlcl9fd2lkdGggLyAyO1xyXG4gICAgd2lkdGg6ICRhbnN3ZXJfX3dpZHRoO1xyXG4gICAgaGVpZ2h0OiAkc2NhbGVfX2hlaWdodCAqIDAuNjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuW2FwcF9fZnJvbV0ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG5bYXBwX19idXR0b25dIHtcclxuICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgIHBhZGRpbmc6IDAuNXZ3O1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE5NjU3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgfVxyXG59XHJcblxyXG5bYXBwX19idXR0b249ZGFuZ2VyXSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG5bYXBwX19idXR0b249d2FybmluZ10ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTcyNjtcclxufVxyXG5cclxuW2FwcF9fYnV0dG9uPWluZm9dIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjg2YzM7XHJcbn1cclxuXHJcblthcHBfX2Zvcm1dIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuW2FwcF9fbGFiZWxdIHtcclxuICAgIG1hcmdpbi1ib3R0b206ICRsYWJlbF9fbWFyZ2luLWJvdHRvbTtcclxuICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG59XHJcblxyXG5bYXBwX19pbnB1dF0ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAuNXZ3O1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzc0NzRmO1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuW2FwcF9fdGl0bGVdIHtcbiAgbWFyZ2luOiAwIDAgNHZoO1xuICBmb250LXNpemU6IDZ2aDtcbiAgZm9udC1mYW1pbHk6IFwiTGVja2VybGkgT25lXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjMzc0NzRmO1xufVxuXG5bYXBwX19jb2RlXSB7XG4gIG1hcmdpbi1ib3R0b206IDR2aDtcbiAgZm9udC1zaXplOiAydnc7XG59XG5cblthcHBfX3JvdW5kXSB7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgZm9udC1zaXplOiAxLjV2dztcbn1cblxuW2FwcF9fc2NvcmVib2FyZF0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA2dmg7XG59XG5bYXBwX19zY29yZWJvYXJkXSBbYXBwX19idXR0b25dIHtcbiAgd2lkdGg6IDN2dztcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuW2FwcF9fc2NvcmVdIHtcbiAgd2lkdGg6IDEydnc7XG4gIGZvbnQtc2l6ZTogMS41dnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuW2FwcF9fY2F0ZWdvcnldIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDN2dyAxdmg7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuW2FwcF9fc2NhbGVdIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgM3Z3IDA7XG4gIGhlaWdodDogMTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuW2FwcF9fbWFya2Vyc10ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBtYXJnaW46IDAgM3Z3IDR2dztcbn1cblxuW2FwcF9fbWFya2VyXSB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMnZoO1xuICB3aWR0aDogNSU7XG59XG5bYXBwX19tYXJrZXJdOm50aC1jaGlsZCgybikge1xuICBoZWlnaHQ6IDF2aDtcbn1cblthcHBfX21hcmtlcl06OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogLTFweDtcbiAgd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0Zjtcbn1cblxuW2FwcF9fdmFsdWVdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJ2aDtcbiAgbGVmdDogLTJ2dztcbiAgd2lkdGg6IDR2dztcbiAgZm9udC1zaXplOiAydnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuW2FwcF9faW5kaWNhdG9yXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gIHdpZHRoOiAyMCU7XG59XG5cblthcHBfX2luZGljYXRvci0yXSxcblthcHBfX2luZGljYXRvci0zXSxcblthcHBfX2luZGljYXRvci00XSB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTB2aDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGZvbnQtc2l6ZTogMnZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblthcHBfX2luZGljYXRvci0yXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjUzNTA7XG59XG5cblthcHBfX2luZGljYXRvci0zXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ5NWI7XG59XG5cblthcHBfX2luZGljYXRvci00XSB7XG4gIGJhY2tncm91bmQ6ICM2NGI1ZjY7XG59XG5cblthcHBfX2Fuc3dlcl0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTElO1xuICB3aWR0aDogMiU7XG4gIGhlaWdodDogNnZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblthcHBfX2Zyb21dIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG5bYXBwX19idXR0b25dIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBwYWRkaW5nOiAwLjV2dztcbiAgd2lkdGg6IDIwdnc7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxOTY1NztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNXZ3O1xufVxuW2FwcF9fYnV0dG9uXTpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cblthcHBfX2J1dHRvbj1kYW5nZXJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cblxuW2FwcF9fYnV0dG9uPXdhcm5pbmddIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTcyNjtcbn1cblxuW2FwcF9fYnV0dG9uPWluZm9dIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyODZjMztcbn1cblxuW2FwcF9fZm9ybV0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5bYXBwX19sYWJlbF0ge1xuICBtYXJnaW4tYm90dG9tOiAxdmg7XG4gIGZvbnQtc2l6ZTogMnZ3O1xufVxuXG5bYXBwX19pbnB1dF0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwLjV2dztcbiAgd2lkdGg6IDIwdnc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNzQ3NGY7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5bYXBwX19pbnB1dF06Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['form']
        }],
        scaleRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scale']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Markus Schmidt\Projekte\perfect-match\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map