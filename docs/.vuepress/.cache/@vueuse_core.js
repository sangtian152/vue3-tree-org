import {
  DefaultMagicKeysAliasMap,
  StorageSerializers,
  SwipeDirection,
  TransitionPresets,
  and,
  assert,
  asyncComputed,
  autoResetRef,
  biSyncRef,
  breakpointsAntDesign,
  breakpointsBootstrapV5,
  breakpointsQuasar,
  breakpointsSematic,
  breakpointsTailwind,
  breakpointsVuetify,
  bypassFilter,
  clamp,
  computedInject,
  containsProp,
  controlledComputed,
  controlledRef,
  createEventHook,
  createFetch,
  createFilterWrapper,
  createGlobalState,
  createSharedComposable,
  createSingletonPromise,
  createUnrefFn,
  debounceFilter,
  debouncedWatch,
  defaultDocument,
  defaultLocation,
  defaultNavigator,
  defaultWindow,
  eagerComputed,
  extendRef,
  get,
  getSSRHandler,
  identity,
  ignorableWatch,
  increaseWithUnit,
  invoke,
  isBoolean,
  isClient,
  isDef,
  isDefined,
  isFunction,
  isNumber,
  isObject,
  isString,
  isWindow,
  makeDestructurable,
  noop,
  not,
  now,
  objectPick,
  onClickOutside,
  onKeyDown,
  onKeyPressed,
  onKeyStroke,
  onKeyUp,
  onStartTyping,
  or,
  pausableFilter,
  pausableWatch,
  promiseTimeout,
  rand,
  reactify,
  reactifyObject,
  reactivePick,
  refDefault,
  set,
  setSSRHandler,
  syncRef,
  templateRef,
  throttleFilter,
  throttledWatch,
  timestamp,
  toReactive,
  toRefs,
  tryOnBeforeUnmount,
  tryOnMounted,
  tryOnScopeDispose,
  tryOnUnmounted,
  unrefElement,
  until,
  useActiveElement,
  useAsyncQueue,
  useAsyncState,
  useBase64,
  useBattery,
  useBreakpoints,
  useBroadcastChannel,
  useBrowserLocation,
  useClamp,
  useClipboard,
  useColorMode,
  useConfirmDialog,
  useCounter,
  useCssVar,
  useCycleList,
  useDark,
  useDebounce,
  useDebounceFn,
  useDebouncedRefHistory,
  useDeviceMotion,
  useDeviceOrientation,
  useDevicePixelRatio,
  useDevicesList,
  useDisplayMedia,
  useDocumentVisibility,
  useDraggable,
  useElementBounding,
  useElementByPoint,
  useElementHover,
  useElementSize,
  useElementVisibility,
  useEventBus,
  useEventListener,
  useEventSource,
  useEyeDropper,
  useFavicon,
  useFetch,
  useFocus,
  useFocusWithin,
  useFps,
  useFullscreen,
  useGeolocation,
  useIdle,
  useIntersectionObserver,
  useInterval,
  useIntervalFn,
  useKeyModifier,
  useLastChanged,
  useLocalStorage,
  useMagicKeys,
  useManualRefHistory,
  useMediaControls,
  useMediaQuery,
  useMemoize,
  useMemory,
  useMounted,
  useMouse,
  useMouseInElement,
  useMousePressed,
  useMutationObserver,
  useNavigatorLanguage,
  useNetwork,
  useNow,
  useOnline,
  usePageLeave,
  useParallax,
  usePermission,
  usePointer,
  usePointerSwipe,
  usePreferredColorScheme,
  usePreferredDark,
  usePreferredLanguages,
  useRafFn,
  useRefHistory,
  useResizeObserver,
  useScreenSafeArea,
  useScriptTag,
  useScroll,
  useScrollLock,
  useSessionStorage,
  useShare,
  useSpeechRecognition,
  useSpeechSynthesis,
  useStorage,
  useStorageAsync,
  useStyleTag,
  useSwipe,
  useTemplateRefsList,
  useTextSelection,
  useThrottle,
  useThrottleFn,
  useThrottledRefHistory,
  useTimeAgo,
  useTimeout,
  useTimeoutFn,
  useTimestamp,
  useTitle,
  useToggle,
  useTransition,
  useUrlSearchParams,
  useUserMedia,
  useVModel,
  useVModels,
  useVibrate,
  useVirtualList,
  useWakeLock,
  useWebNotification,
  useWebSocket,
  useWebWorker,
  useWebWorkerFn,
  useWindowFocus,
  useWindowScroll,
  useWindowSize,
  watchAtMost,
  watchOnce,
  watchWithFilter,
  whenever
} from "./chunk-5RCLMAOM.js";
import "./chunk-WGU5RFFQ.js";
import {
  init_define_EXTERNAL_LINK_ICON_LOCALES,
  init_define_MZ_ZOOM_OPTIONS
} from "./chunk-TEWQWOMZ.js";

// dep:@vueuse_core
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_MZ_ZOOM_OPTIONS();
export {
  DefaultMagicKeysAliasMap,
  StorageSerializers,
  SwipeDirection,
  TransitionPresets,
  and,
  assert,
  asyncComputed,
  autoResetRef,
  biSyncRef,
  breakpointsAntDesign,
  breakpointsBootstrapV5,
  breakpointsQuasar,
  breakpointsSematic,
  breakpointsTailwind,
  breakpointsVuetify,
  bypassFilter,
  clamp,
  computedInject,
  containsProp,
  controlledComputed,
  controlledRef,
  createEventHook,
  createFetch,
  createFilterWrapper,
  createGlobalState,
  reactify as createReactiveFn,
  createSharedComposable,
  createSingletonPromise,
  createUnrefFn,
  debounceFilter,
  useDebounce as debouncedRef,
  debouncedWatch,
  defaultDocument,
  defaultLocation,
  defaultNavigator,
  defaultWindow,
  eagerComputed,
  extendRef,
  get,
  getSSRHandler,
  identity,
  ignorableWatch,
  increaseWithUnit,
  invoke,
  isBoolean,
  isClient,
  isDef,
  isDefined,
  isFunction,
  isNumber,
  isObject,
  isString,
  isWindow,
  makeDestructurable,
  noop,
  not,
  now,
  objectPick,
  onClickOutside,
  onKeyDown,
  onKeyPressed,
  onKeyStroke,
  onKeyUp,
  onStartTyping,
  or,
  pausableFilter,
  pausableWatch,
  promiseTimeout,
  rand,
  reactify,
  reactifyObject,
  reactivePick,
  refDefault,
  set,
  setSSRHandler,
  syncRef,
  templateRef,
  throttleFilter,
  useThrottle as throttledRef,
  throttledWatch,
  timestamp,
  toReactive,
  toRefs,
  tryOnBeforeUnmount,
  tryOnMounted,
  tryOnScopeDispose,
  tryOnUnmounted,
  unrefElement,
  until,
  useActiveElement,
  useAsyncQueue,
  useAsyncState,
  useBase64,
  useBattery,
  useBreakpoints,
  useBroadcastChannel,
  useBrowserLocation,
  useClamp,
  useClipboard,
  useColorMode,
  useConfirmDialog,
  useCounter,
  useCssVar,
  useCycleList,
  useDark,
  useDebounce,
  useDebounceFn,
  useDebouncedRefHistory,
  useDeviceMotion,
  useDeviceOrientation,
  useDevicePixelRatio,
  useDevicesList,
  useDisplayMedia,
  useDocumentVisibility,
  useDraggable,
  useElementBounding,
  useElementByPoint,
  useElementHover,
  useElementSize,
  useElementVisibility,
  useEventBus,
  useEventListener,
  useEventSource,
  useEyeDropper,
  useFavicon,
  useFetch,
  useFocus,
  useFocusWithin,
  useFps,
  useFullscreen,
  useGeolocation,
  useIdle,
  useIntersectionObserver,
  useInterval,
  useIntervalFn,
  useKeyModifier,
  useLastChanged,
  useLocalStorage,
  useMagicKeys,
  useManualRefHistory,
  useMediaControls,
  useMediaQuery,
  useMemoize,
  useMemory,
  useMounted,
  useMouse,
  useMouseInElement,
  useMousePressed,
  useMutationObserver,
  useNavigatorLanguage,
  useNetwork,
  useNow,
  useOnline,
  usePageLeave,
  useParallax,
  usePermission,
  usePointer,
  usePointerSwipe,
  usePreferredColorScheme,
  usePreferredDark,
  usePreferredLanguages,
  useRafFn,
  useRefHistory,
  useResizeObserver,
  useScreenSafeArea,
  useScriptTag,
  useScroll,
  useScrollLock,
  useSessionStorage,
  useShare,
  useSpeechRecognition,
  useSpeechSynthesis,
  useStorage,
  useStorageAsync,
  useStyleTag,
  useSwipe,
  useTemplateRefsList,
  useTextSelection,
  useThrottle,
  useThrottleFn,
  useThrottledRefHistory,
  useTimeAgo,
  useTimeout,
  useTimeoutFn,
  useTimestamp,
  useTitle,
  useToggle,
  useTransition,
  useUrlSearchParams,
  useUserMedia,
  useVModel,
  useVModels,
  useVibrate,
  useVirtualList,
  useWakeLock,
  useWebNotification,
  useWebSocket,
  useWebWorker,
  useWebWorkerFn,
  useWindowFocus,
  useWindowScroll,
  useWindowSize,
  watchAtMost,
  watchOnce,
  watchWithFilter,
  whenever
};
//# sourceMappingURL=@vueuse_core.js.map
