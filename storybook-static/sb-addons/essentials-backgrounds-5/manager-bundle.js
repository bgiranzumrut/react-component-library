try {
  (() => {
    var re = Object.create;
    var Y = Object.defineProperty;
    var ie = Object.getOwnPropertyDescriptor;
    var ae = Object.getOwnPropertyNames;
    var ce = Object.getPrototypeOf,
      le = Object.prototype.hasOwnProperty;
    var E = ((e) =>
      typeof require < "u"
        ? require
        : typeof Proxy < "u"
          ? new Proxy(e, {
              get: (o, c) => (typeof require < "u" ? require : o)[c],
            })
          : e)(function (e) {
      if (typeof require < "u") return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var M = (e, o) => () => (e && (o = e((e = 0))), o);
    var se = (e, o) => () => (
      o || e((o = { exports: {} }).exports, o), o.exports
    );
    var ue = (e, o, c, r) => {
      if ((o && typeof o == "object") || typeof o == "function")
        for (let i of ae(o))
          !le.call(e, i) &&
            i !== c &&
            Y(e, i, {
              get: () => o[i],
              enumerable: !(r = ie(o, i)) || r.enumerable,
            });
      return e;
    };
    var Ie = (e, o, c) => (
      (c = e != null ? re(ce(e)) : {}),
      ue(
        o || !e || !e.__esModule
          ? Y(c, "default", { value: e, enumerable: !0 })
          : c,
        e,
      )
    );
    var p = M(() => {});
    var h = M(() => {});
    var f = M(() => {});
    var X = se((Q, V) => {
      p();
      h();
      f();
      (function (e) {
        if (typeof Q == "object" && typeof V < "u") V.exports = e();
        else if (typeof define == "function" && define.amd) define([], e);
        else {
          var o;
          typeof window < "u" || typeof window < "u"
            ? (o = window)
            : typeof self < "u"
              ? (o = self)
              : (o = this),
            (o.memoizerific = e());
        }
      })(function () {
        var e, o, c;
        return (function r(i, d, l) {
          function t(a, I) {
            if (!d[a]) {
              if (!i[a]) {
                var s = typeof E == "function" && E;
                if (!I && s) return s(a, !0);
                if (n) return n(a, !0);
                var S = new Error("Cannot find module '" + a + "'");
                throw ((S.code = "MODULE_NOT_FOUND"), S);
              }
              var m = (d[a] = { exports: {} });
              i[a][0].call(
                m.exports,
                function (b) {
                  var C = i[a][1][b];
                  return t(C || b);
                },
                m,
                m.exports,
                r,
                i,
                d,
                l,
              );
            }
            return d[a].exports;
          }
          for (var n = typeof E == "function" && E, u = 0; u < l.length; u++)
            t(l[u]);
          return t;
        })(
          {
            1: [
              function (r, i, d) {
                i.exports = function (l) {
                  if (typeof Map != "function" || l) {
                    var t = r("./similar");
                    return new t();
                  } else return new Map();
                };
              },
              { "./similar": 2 },
            ],
            2: [
              function (r, i, d) {
                function l() {
                  return (
                    (this.list = []),
                    (this.lastItem = void 0),
                    (this.size = 0),
                    this
                  );
                }
                (l.prototype.get = function (t) {
                  var n;
                  if (this.lastItem && this.isEqual(this.lastItem.key, t))
                    return this.lastItem.val;
                  if (((n = this.indexOf(t)), n >= 0))
                    return (this.lastItem = this.list[n]), this.list[n].val;
                }),
                  (l.prototype.set = function (t, n) {
                    var u;
                    return this.lastItem && this.isEqual(this.lastItem.key, t)
                      ? ((this.lastItem.val = n), this)
                      : ((u = this.indexOf(t)),
                        u >= 0
                          ? ((this.lastItem = this.list[u]),
                            (this.list[u].val = n),
                            this)
                          : ((this.lastItem = { key: t, val: n }),
                            this.list.push(this.lastItem),
                            this.size++,
                            this));
                  }),
                  (l.prototype.delete = function (t) {
                    var n;
                    if (
                      (this.lastItem &&
                        this.isEqual(this.lastItem.key, t) &&
                        (this.lastItem = void 0),
                      (n = this.indexOf(t)),
                      n >= 0)
                    )
                      return this.size--, this.list.splice(n, 1)[0];
                  }),
                  (l.prototype.has = function (t) {
                    var n;
                    return this.lastItem && this.isEqual(this.lastItem.key, t)
                      ? !0
                      : ((n = this.indexOf(t)),
                        n >= 0 ? ((this.lastItem = this.list[n]), !0) : !1);
                  }),
                  (l.prototype.forEach = function (t, n) {
                    var u;
                    for (u = 0; u < this.size; u++)
                      t.call(
                        n || this,
                        this.list[u].val,
                        this.list[u].key,
                        this,
                      );
                  }),
                  (l.prototype.indexOf = function (t) {
                    var n;
                    for (n = 0; n < this.size; n++)
                      if (this.isEqual(this.list[n].key, t)) return n;
                    return -1;
                  }),
                  (l.prototype.isEqual = function (t, n) {
                    return t === n || (t !== t && n !== n);
                  }),
                  (i.exports = l);
              },
              {},
            ],
            3: [
              function (r, i, d) {
                var l = r("map-or-similar");
                i.exports = function (a) {
                  var I = new l(!1),
                    s = [];
                  return function (S) {
                    var m = function () {
                      var b = I,
                        C,
                        R,
                        T = arguments.length - 1,
                        x = Array(T + 1),
                        O = !0,
                        A;
                      if ((m.numArgs || m.numArgs === 0) && m.numArgs !== T + 1)
                        throw new Error(
                          "Memoizerific functions should always be called with the same number of arguments",
                        );
                      for (A = 0; A < T; A++) {
                        if (
                          ((x[A] = { cacheItem: b, arg: arguments[A] }),
                          b.has(arguments[A]))
                        ) {
                          b = b.get(arguments[A]);
                          continue;
                        }
                        (O = !1),
                          (C = new l(!1)),
                          b.set(arguments[A], C),
                          (b = C);
                      }
                      return (
                        O &&
                          (b.has(arguments[T])
                            ? (R = b.get(arguments[T]))
                            : (O = !1)),
                        O ||
                          ((R = S.apply(null, arguments)),
                          b.set(arguments[T], R)),
                        a > 0 &&
                          ((x[T] = { cacheItem: b, arg: arguments[T] }),
                          O ? t(s, x) : s.push(x),
                          s.length > a && n(s.shift())),
                        (m.wasMemoized = O),
                        (m.numArgs = T + 1),
                        R
                      );
                    };
                    return (
                      (m.limit = a),
                      (m.wasMemoized = !1),
                      (m.cache = I),
                      (m.lru = s),
                      m
                    );
                  };
                };
                function t(a, I) {
                  var s = a.length,
                    S = I.length,
                    m,
                    b,
                    C;
                  for (b = 0; b < s; b++) {
                    for (m = !0, C = 0; C < S; C++)
                      if (!u(a[b][C].arg, I[C].arg)) {
                        m = !1;
                        break;
                      }
                    if (m) break;
                  }
                  a.push(a.splice(b, 1)[0]);
                }
                function n(a) {
                  var I = a.length,
                    s = a[I - 1],
                    S,
                    m;
                  for (
                    s.cacheItem.delete(s.arg), m = I - 2;
                    m >= 0 &&
                    ((s = a[m]), (S = s.cacheItem.get(s.arg)), !S || !S.size);
                    m--
                  )
                    s.cacheItem.delete(s.arg);
                }
                function u(a, I) {
                  return a === I || (a !== a && I !== I);
                }
              },
              { "map-or-similar": 1 },
            ],
          },
          {},
          [3],
        )(3);
      });
    });
    p();
    h();
    f();
    p();
    h();
    f();
    p();
    h();
    f();
    p();
    h();
    f();
    var g = __REACT__,
      {
        Children: Ee,
        Component: we,
        Fragment: D,
        Profiler: Be,
        PureComponent: Re,
        StrictMode: xe,
        Suspense: Le,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Pe,
        cloneElement: Me,
        createContext: De,
        createElement: Ge,
        createFactory: Ue,
        createRef: Fe,
        forwardRef: Ne,
        isValidElement: He,
        lazy: qe,
        memo: w,
        startTransition: ze,
        unstable_act: Ke,
        useCallback: G,
        useContext: Ve,
        useDebugValue: We,
        useDeferredValue: Ye,
        useEffect: je,
        useId: $e,
        useImperativeHandle: Ze,
        useInsertionEffect: Je,
        useLayoutEffect: Qe,
        useMemo: j,
        useReducer: Xe,
        useRef: eo,
        useState: U,
        useSyncExternalStore: oo,
        useTransition: no,
        version: to,
      } = __REACT__;
    p();
    h();
    f();
    var lo = __STORYBOOK_API__,
      {
        ActiveTabs: so,
        Consumer: uo,
        ManagerContext: Io,
        Provider: mo,
        RequestResponseError: po,
        addons: F,
        combineParameters: ho,
        controlOrMetaKey: fo,
        controlOrMetaSymbol: go,
        eventMatchesShortcut: bo,
        eventToShortcut: So,
        experimental_MockUniversalStore: Co,
        experimental_UniversalStore: yo,
        experimental_requestResponse: ko,
        experimental_useUniversalStore: vo,
        isMacLike: _o,
        isShortcutTaken: To,
        keyToSymbol: Ao,
        merge: Oo,
        mockChannel: Eo,
        optionOrAltSymbol: wo,
        shortcutMatchesShortcut: Bo,
        shortcutToHumanString: Ro,
        types: $,
        useAddonState: xo,
        useArgTypes: Lo,
        useArgs: Po,
        useChannel: Mo,
        useGlobalTypes: Do,
        useGlobals: L,
        useParameter: P,
        useSharedState: Go,
        useStoryPrepared: Uo,
        useStorybookApi: Fo,
        useStorybookState: No,
      } = __STORYBOOK_API__;
    p();
    h();
    f();
    var Vo = __STORYBOOK_COMPONENTS__,
      {
        A: Wo,
        ActionBar: Yo,
        AddonPanel: jo,
        Badge: $o,
        Bar: Zo,
        Blockquote: Jo,
        Button: Qo,
        ClipboardCode: Xo,
        Code: en,
        DL: on,
        Div: nn,
        DocumentWrapper: tn,
        EmptyTabContent: rn,
        ErrorFormatter: an,
        FlexBar: cn,
        Form: ln,
        H1: sn,
        H2: un,
        H3: In,
        H4: dn,
        H5: mn,
        H6: pn,
        HR: hn,
        IconButton: B,
        IconButtonSkeleton: fn,
        Icons: gn,
        Img: bn,
        LI: Sn,
        Link: Cn,
        ListItem: yn,
        Loader: kn,
        Modal: vn,
        OL: _n,
        P: Tn,
        Placeholder: An,
        Pre: On,
        ProgressSpinner: En,
        ResetWrapper: wn,
        ScrollArea: Bn,
        Separator: Rn,
        Spaced: xn,
        Span: Ln,
        StorybookIcon: Pn,
        StorybookLogo: Mn,
        Symbols: Dn,
        SyntaxHighlighter: Gn,
        TT: Un,
        TabBar: Fn,
        TabButton: Nn,
        TabWrapper: Hn,
        Table: qn,
        Tabs: zn,
        TabsState: Kn,
        TooltipLinkList: N,
        TooltipMessage: Vn,
        TooltipNote: Wn,
        UL: Yn,
        WithTooltip: H,
        WithTooltipPure: jn,
        Zoom: $n,
        codeCommon: Zn,
        components: Jn,
        createCopyToClipboardFunction: Qn,
        getStoryHref: Xn,
        icons: et,
        interleaveSeparators: ot,
        nameSpaceClassNames: nt,
        resetComponents: tt,
        withReset: rt,
      } = __STORYBOOK_COMPONENTS__;
    p();
    h();
    f();
    var st = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: ut,
        AccessibilityIcon: It,
        AddIcon: dt,
        AdminIcon: mt,
        AlertAltIcon: pt,
        AlertIcon: ht,
        AlignLeftIcon: ft,
        AlignRightIcon: gt,
        AppleIcon: bt,
        ArrowBottomLeftIcon: St,
        ArrowBottomRightIcon: Ct,
        ArrowDownIcon: yt,
        ArrowLeftIcon: kt,
        ArrowRightIcon: vt,
        ArrowSolidDownIcon: _t,
        ArrowSolidLeftIcon: Tt,
        ArrowSolidRightIcon: At,
        ArrowSolidUpIcon: Ot,
        ArrowTopLeftIcon: Et,
        ArrowTopRightIcon: wt,
        ArrowUpIcon: Bt,
        AzureDevOpsIcon: Rt,
        BackIcon: xt,
        BasketIcon: Lt,
        BatchAcceptIcon: Pt,
        BatchDenyIcon: Mt,
        BeakerIcon: Dt,
        BellIcon: Gt,
        BitbucketIcon: Ut,
        BoldIcon: Ft,
        BookIcon: Nt,
        BookmarkHollowIcon: Ht,
        BookmarkIcon: qt,
        BottomBarIcon: zt,
        BottomBarToggleIcon: Kt,
        BoxIcon: Vt,
        BranchIcon: Wt,
        BrowserIcon: Yt,
        ButtonIcon: jt,
        CPUIcon: $t,
        CalendarIcon: Zt,
        CameraIcon: Jt,
        CategoryIcon: Qt,
        CertificateIcon: Xt,
        ChangedIcon: er,
        ChatIcon: or,
        CheckIcon: nr,
        ChevronDownIcon: tr,
        ChevronLeftIcon: rr,
        ChevronRightIcon: ir,
        ChevronSmallDownIcon: ar,
        ChevronSmallLeftIcon: cr,
        ChevronSmallRightIcon: lr,
        ChevronSmallUpIcon: sr,
        ChevronUpIcon: ur,
        ChromaticIcon: Ir,
        ChromeIcon: dr,
        CircleHollowIcon: mr,
        CircleIcon: Z,
        ClearIcon: pr,
        CloseAltIcon: hr,
        CloseIcon: fr,
        CloudHollowIcon: gr,
        CloudIcon: br,
        CogIcon: Sr,
        CollapseIcon: Cr,
        CommandIcon: yr,
        CommentAddIcon: kr,
        CommentIcon: vr,
        CommentsIcon: _r,
        CommitIcon: Tr,
        CompassIcon: Ar,
        ComponentDrivenIcon: Or,
        ComponentIcon: Er,
        ContrastIcon: wr,
        ControlsIcon: Br,
        CopyIcon: Rr,
        CreditIcon: xr,
        CrossIcon: Lr,
        DashboardIcon: Pr,
        DatabaseIcon: Mr,
        DeleteIcon: Dr,
        DiamondIcon: Gr,
        DirectionIcon: Ur,
        DiscordIcon: Fr,
        DocChartIcon: Nr,
        DocListIcon: Hr,
        DocumentIcon: qr,
        DownloadIcon: zr,
        DragIcon: Kr,
        EditIcon: Vr,
        EllipsisIcon: Wr,
        EmailIcon: Yr,
        ExpandAltIcon: jr,
        ExpandIcon: $r,
        EyeCloseIcon: Zr,
        EyeIcon: Jr,
        FaceHappyIcon: Qr,
        FaceNeutralIcon: Xr,
        FaceSadIcon: ei,
        FacebookIcon: oi,
        FailedIcon: ni,
        FastForwardIcon: ti,
        FigmaIcon: ri,
        FilterIcon: ii,
        FlagIcon: ai,
        FolderIcon: ci,
        FormIcon: li,
        GDriveIcon: si,
        GithubIcon: ui,
        GitlabIcon: Ii,
        GlobeIcon: di,
        GoogleIcon: mi,
        GraphBarIcon: pi,
        GraphLineIcon: hi,
        GraphqlIcon: fi,
        GridAltIcon: gi,
        GridIcon: q,
        GrowIcon: bi,
        HeartHollowIcon: Si,
        HeartIcon: Ci,
        HomeIcon: yi,
        HourglassIcon: ki,
        InfoIcon: vi,
        ItalicIcon: _i,
        JumpToIcon: Ti,
        KeyIcon: Ai,
        LightningIcon: Oi,
        LightningOffIcon: Ei,
        LinkBrokenIcon: wi,
        LinkIcon: Bi,
        LinkedinIcon: Ri,
        LinuxIcon: xi,
        ListOrderedIcon: Li,
        ListUnorderedIcon: Pi,
        LocationIcon: Mi,
        LockIcon: Di,
        MarkdownIcon: Gi,
        MarkupIcon: Ui,
        MediumIcon: Fi,
        MemoryIcon: Ni,
        MenuIcon: Hi,
        MergeIcon: qi,
        MirrorIcon: zi,
        MobileIcon: Ki,
        MoonIcon: Vi,
        NutIcon: Wi,
        OutboxIcon: Yi,
        OutlineIcon: ji,
        PaintBrushIcon: $i,
        PaperClipIcon: Zi,
        ParagraphIcon: Ji,
        PassedIcon: Qi,
        PhoneIcon: Xi,
        PhotoDragIcon: ea,
        PhotoIcon: z,
        PinAltIcon: oa,
        PinIcon: na,
        PlayAllHollowIcon: ta,
        PlayBackIcon: ra,
        PlayHollowIcon: ia,
        PlayIcon: aa,
        PlayNextIcon: ca,
        PlusIcon: la,
        PointerDefaultIcon: sa,
        PointerHandIcon: ua,
        PowerIcon: Ia,
        PrintIcon: da,
        ProceedIcon: ma,
        ProfileIcon: pa,
        PullRequestIcon: ha,
        QuestionIcon: fa,
        RSSIcon: ga,
        RedirectIcon: ba,
        ReduxIcon: Sa,
        RefreshIcon: J,
        ReplyIcon: Ca,
        RepoIcon: ya,
        RequestChangeIcon: ka,
        RewindIcon: va,
        RulerIcon: _a,
        SaveIcon: Ta,
        SearchIcon: Aa,
        ShareAltIcon: Oa,
        ShareIcon: Ea,
        ShieldIcon: wa,
        SideBySideIcon: Ba,
        SidebarAltIcon: Ra,
        SidebarAltToggleIcon: xa,
        SidebarIcon: La,
        SidebarToggleIcon: Pa,
        SpeakerIcon: Ma,
        StackedIcon: Da,
        StarHollowIcon: Ga,
        StarIcon: Ua,
        StatusFailIcon: Fa,
        StatusPassIcon: Na,
        StatusWarnIcon: Ha,
        StickerIcon: qa,
        StopAltHollowIcon: za,
        StopAltIcon: Ka,
        StopIcon: Va,
        StorybookIcon: Wa,
        StructureIcon: Ya,
        SubtractIcon: ja,
        SunIcon: $a,
        SupportIcon: Za,
        SwitchAltIcon: Ja,
        SyncIcon: Qa,
        TabletIcon: Xa,
        ThumbsUpIcon: ec,
        TimeIcon: oc,
        TimerIcon: nc,
        TransferIcon: tc,
        TrashIcon: rc,
        TwitterIcon: ic,
        TypeIcon: ac,
        UbuntuIcon: cc,
        UndoIcon: lc,
        UnfoldIcon: sc,
        UnlockIcon: uc,
        UnpinIcon: Ic,
        UploadIcon: dc,
        UserAddIcon: mc,
        UserAltIcon: pc,
        UserIcon: hc,
        UsersIcon: fc,
        VSCodeIcon: gc,
        VerifiedIcon: bc,
        VideoIcon: Sc,
        WandIcon: Cc,
        WatchIcon: yc,
        WindowsIcon: kc,
        WrenchIcon: vc,
        XIcon: _c,
        YoutubeIcon: Tc,
        ZoomIcon: Ac,
        ZoomOutIcon: Oc,
        ZoomResetIcon: Ec,
        iconList: wc,
      } = __STORYBOOK_ICONS__;
    p();
    h();
    f();
    var Pc = __STORYBOOK_CLIENT_LOGGER__,
      {
        deprecate: Mc,
        logger: K,
        once: Dc,
        pretty: Gc,
      } = __STORYBOOK_CLIENT_LOGGER__;
    var W = Ie(X());
    p();
    h();
    f();
    var Wc = __STORYBOOK_THEMING__,
      {
        CacheProvider: Yc,
        ClassNames: jc,
        Global: $c,
        ThemeProvider: Zc,
        background: Jc,
        color: Qc,
        convert: Xc,
        create: el,
        createCache: ol,
        createGlobal: nl,
        createReset: tl,
        css: rl,
        darken: il,
        ensure: al,
        ignoreSsrWarning: cl,
        isPropValid: ll,
        jsx: sl,
        keyframes: ul,
        lighten: Il,
        styled: ee,
        themes: dl,
        typography: ml,
        useTheme: pl,
        withTheme: hl,
      } = __STORYBOOK_THEMING__;
    p();
    h();
    f();
    function oe(e) {
      for (var o = [], c = 1; c < arguments.length; c++)
        o[c - 1] = arguments[c];
      var r = Array.from(typeof e == "string" ? [e] : e);
      r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
      var i = r.reduce(function (t, n) {
        var u = n.match(/\n([\t ]+|(?!\s).)/g);
        return u
          ? t.concat(
              u.map(function (a) {
                var I, s;
                return (s =
                  (I = a.match(/[\t ]/g)) === null || I === void 0
                    ? void 0
                    : I.length) !== null && s !== void 0
                  ? s
                  : 0;
              }),
            )
          : t;
      }, []);
      if (i.length) {
        var d = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, i) +
            "}",
          "g",
        );
        r = r.map(function (t) {
          return t.replace(
            d,
            `
`,
          );
        });
      }
      r[0] = r[0].replace(/^\r?\n/, "");
      var l = r[0];
      return (
        o.forEach(function (t, n) {
          var u = l.match(/(?:^|\n)( *)$/),
            a = u ? u[1] : "",
            I = t;
          typeof t == "string" &&
            t.includes(`
`) &&
            (I = String(t)
              .split(
                `
`,
              )
              .map(function (s, S) {
                return S === 0 ? s : "" + a + s;
              }).join(`
`)),
            (l += I + r[n + 1]);
        }),
        l
      );
    }
    var ne = "storybook/background",
      y = "backgrounds",
      de = {
        light: { name: "light", value: "#F8F8F8" },
        dark: { name: "dark", value: "#333" },
      },
      me = w(function () {
        let e = P(y),
          [o, c, r] = L(),
          [i, d] = U(!1),
          { options: l = de, disable: t = !0 } = e || {};
        if (t) return null;
        let n = o[y] || {},
          u = n.value,
          a = n.grid || !1,
          I = l[u],
          s = !!r?.[y],
          S = Object.keys(l).length;
        return g.createElement(pe, {
          length: S,
          backgroundMap: l,
          item: I,
          updateGlobals: c,
          backgroundName: u,
          setIsTooltipVisible: d,
          isLocked: s,
          isGridActive: a,
          isTooltipVisible: i,
        });
      }),
      pe = w(function (e) {
        let {
            item: o,
            length: c,
            updateGlobals: r,
            setIsTooltipVisible: i,
            backgroundMap: d,
            backgroundName: l,
            isLocked: t,
            isGridActive: n,
            isTooltipVisible: u,
          } = e,
          a = G(
            (I) => {
              r({ [y]: I });
            },
            [r],
          );
        return g.createElement(
          D,
          null,
          g.createElement(
            B,
            {
              key: "grid",
              active: n,
              disabled: t,
              title: "Apply a grid to the preview",
              onClick: () => a({ value: l, grid: !n }),
            },
            g.createElement(q, null),
          ),
          c > 0
            ? g.createElement(
                H,
                {
                  key: "background",
                  placement: "top",
                  closeOnOutsideClick: !0,
                  tooltip: ({ onHide: I }) =>
                    g.createElement(N, {
                      links: [
                        ...(o
                          ? [
                              {
                                id: "reset",
                                title: "Reset background",
                                icon: g.createElement(J, null),
                                onClick: () => {
                                  a({ value: void 0, grid: n }), I();
                                },
                              },
                            ]
                          : []),
                        ...Object.entries(d).map(([s, S]) => ({
                          id: s,
                          title: S.name,
                          icon: g.createElement(Z, {
                            color: S?.value || "grey",
                          }),
                          active: s === l,
                          onClick: () => {
                            a({ value: s, grid: n }), I();
                          },
                        })),
                      ].flat(),
                    }),
                  onVisibleChange: i,
                },
                g.createElement(
                  B,
                  {
                    disabled: t,
                    key: "background",
                    title: "Change the background of the preview",
                    active: !!o || u,
                  },
                  g.createElement(z, null),
                ),
              )
            : null,
        );
      }),
      he = ee.span(
        ({ background: e }) => ({
          borderRadius: "1rem",
          display: "block",
          height: "1rem",
          width: "1rem",
          background: e,
        }),
        ({ theme: e }) => ({
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        }),
      ),
      fe = (e, o = [], c) => {
        if (e === "transparent") return "transparent";
        if (o.find((i) => i.value === e) || e) return e;
        let r = o.find((i) => i.name === c);
        if (r) return r.value;
        if (c) {
          let i = o.map((d) => d.name).join(", ");
          K.warn(oe`
        Backgrounds Addon: could not find the default color "${c}".
        These are the available colors for your story based on your configuration:
        ${i}.
      `);
        }
        return "transparent";
      },
      te = (0, W.default)(1e3)((e, o, c, r, i, d) => ({
        id: e || o,
        title: o,
        onClick: () => {
          i({ selected: c, name: o });
        },
        value: c,
        right: r ? g.createElement(he, { background: c }) : void 0,
        active: d,
      })),
      ge = (0, W.default)(10)((e, o, c) => {
        let r = e.map(({ name: i, value: d }) =>
          te(null, i, d, !0, c, d === o),
        );
        return o !== "transparent"
          ? [te("reset", "Clear background", "transparent", null, c, !1), ...r]
          : r;
      }),
      be = { default: null, disable: !0, values: [] },
      Se = w(function () {
        let e = P(y, be),
          [o, c] = U(!1),
          [r, i] = L(),
          d = r[y]?.value,
          l = j(() => fe(d, e.values, e.default), [e, d]);
        Array.isArray(e) &&
          K.warn(
            "Addon Backgrounds api has changed in Storybook 6.0. Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md",
          );
        let t = G(
          (n) => {
            i({ [y]: { ...r[y], value: n } });
          },
          [e, r, i],
        );
        return e.disable
          ? null
          : g.createElement(
              H,
              {
                placement: "top",
                closeOnOutsideClick: !0,
                tooltip: ({ onHide: n }) =>
                  g.createElement(N, {
                    links: ge(e.values, l, ({ selected: u }) => {
                      l !== u && t(u), n();
                    }),
                  }),
                onVisibleChange: c,
              },
              g.createElement(
                B,
                {
                  key: "background",
                  title: "Change the background of the preview",
                  active: l !== "transparent" || o,
                },
                g.createElement(z, null),
              ),
            );
      }),
      Ce = w(function () {
        let [e, o] = L(),
          { grid: c } = P(y, { grid: { disable: !1 } });
        if (c?.disable) return null;
        let r = e[y]?.grid || !1;
        return g.createElement(
          B,
          {
            key: "background",
            active: r,
            title: "Apply a grid to the preview",
            onClick: () => o({ [y]: { ...e[y], grid: !r } }),
          },
          g.createElement(q, null),
        );
      });
    F.register(ne, () => {
      F.add(ne, {
        title: "Backgrounds",
        type: $.TOOL,
        match: ({ viewMode: e, tabId: o }) =>
          !!(e && e.match(/^(story|docs)$/)) && !o,
        render: () =>
          FEATURES?.backgroundsStoryGlobals
            ? g.createElement(me, null)
            : g.createElement(
                D,
                null,
                g.createElement(Se, null),
                g.createElement(Ce, null),
              ),
      });
    });
  })();
} catch (e) {
  console.error(
    "[Storybook] One of your manager-entries failed: " + import.meta.url,
    e,
  );
}
