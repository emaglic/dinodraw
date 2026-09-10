const APP_VERSION = "v0.8.98";
const canvas = document.querySelector("#drawing-canvas");
const context = canvas.getContext("2d", {
  alpha: false,
  desynchronized: true,
});
const liveCanvas = document.querySelector("#live-canvas");
const liveContext = liveCanvas.getContext("2d", {
  alpha: true,
  desynchronized: true,
});
const appShell = document.querySelector(".app-shell");
const toolbarVisibilityButton = document.querySelector(
  "[data-toolbar-visibility-toggle]"
);
const toolbarVisibilityIcon = document.querySelector(
  "[data-toolbar-visibility-icon]"
);
const toolbarToggle = document.querySelector("[data-toolbar-toggle-shell]");
const toolbarToggleDragHandle = document.querySelector(
  "[data-toolbar-toggle-drag-handle]"
);
const toolbar = document.querySelector(".toolbar");
const dragHandle = document.querySelector("[data-drag-handle]");
const toolButtons = Array.from(document.querySelectorAll("[data-tool]"));
const presetToolbar = document.querySelector("[data-preset-toolbar]");
const presetDragHandle = document.querySelector("[data-preset-drag-handle]");
const presetButtons = Array.from(
  document.querySelectorAll("[data-preset-index]")
);
const settingsDialog = document.querySelector("#settings-dialog");
const eraserDialog = document.querySelector("#eraser-dialog");
const shapeDialog = document.querySelector("#shape-dialog");
const addImageDialog = document.querySelector("#add-image-dialog");
const presetDialog = document.querySelector("#preset-dialog");
const appDialog = document.querySelector("#app-dialog");
const guideDialog = document.querySelector("#guide-dialog");
const appDialogForm = document.querySelector("[data-app-dialog-form]");
const appDialogTitle = document.querySelector("[data-app-dialog-title]");
const appDialogMessage = document.querySelector("[data-app-dialog-message]");
const appDialogField = document.querySelector("[data-app-dialog-field]");
const appDialogInputLabel = document.querySelector("[data-app-dialog-input-label]");
const appDialogInput = document.querySelector("[data-app-dialog-input]");
const appDialogConfirmButton = document.querySelector("[data-app-dialog-confirm]");
const appDialogCancelButtons = Array.from(
  document.querySelectorAll("[data-app-dialog-cancel]")
);
const openSettingsButton = document.querySelector("[data-open-settings]");
const addImageButton = document.querySelector("[data-add-image]");
const resetToolbarsButton = document.querySelector("[data-reset-toolbars]");
const toolbarVisibilityInputs = Array.from(
  document.querySelectorAll("[data-toolbar-visibility]")
);
const documentScreen = document.querySelector("[data-document-screen]");
const documentTitle = document.querySelector("[data-document-title]");
const documentSubtitle = document.querySelector("[data-document-subtitle]");
const documentBreadcrumbs = document.querySelector("[data-document-breadcrumbs]");
const documentList = document.querySelector("[data-document-list]");
const documentPanel = document.querySelector(".document-panel");
const folderBackButton = document.querySelector("[data-folder-back]");
const documentActionMenu = document.querySelector("[data-document-action-menu]");
const documentRenameButton = document.querySelector("[data-document-rename]");
const documentMoveButton = document.querySelector("[data-document-move]");
const documentExportButton = document.querySelector("[data-document-export]");
const documentSavePngButton = document.querySelector("[data-document-save-png]");
const documentSavePdfButton = document.querySelector("[data-document-save-pdf]");
const documentDeleteButton = document.querySelector("[data-document-delete]");
const folderActionMenu = document.querySelector("[data-folder-action-menu]");
const folderRenameButton = document.querySelector("[data-folder-rename]");
const folderMoveButton = document.querySelector("[data-folder-move]");
const folderDeleteButton = document.querySelector("[data-folder-delete]");
const openLibraryButton = document.querySelector("[data-open-library]");
const closeLibraryButton = document.querySelector("[data-close-library]");
const openGuideButtons = Array.from(document.querySelectorAll("[data-open-guide]"));
const openGuideButton = document.querySelector("[data-open-guide]");
const documentIntro = document.querySelector("[data-document-intro]");
const dismissDocumentIntroButton = document.querySelector(
  "[data-dismiss-document-intro]"
);
const newDocumentButton = document.querySelector("[data-new-document]");
const newFolderButton = document.querySelector("[data-new-folder]");
const saveDocumentButtons = Array.from(
  document.querySelectorAll("[data-save-document]")
);
const exportDocumentButtons = Array.from(
  document.querySelectorAll("[data-export-document]")
);
const exportPngZipButtons = Array.from(
  document.querySelectorAll("[data-export-png-zip]")
);
const exportPdfButtons = Array.from(
  document.querySelectorAll("[data-export-pdf]")
);
const importDocumentButtons = Array.from(
  document.querySelectorAll("[data-import-document]")
);
const importDocumentInput = document.querySelector("[data-import-input]");
const saveStatus = document.querySelector("[data-save-status]");
const moveDialog = document.querySelector("#move-dialog");
const moveDialogForm = document.querySelector("[data-move-dialog-form]");
const moveDialogTitle = document.querySelector("[data-move-dialog-title]");
const moveDialogMessage = document.querySelector("[data-move-dialog-message]");
const moveDialogSelect = document.querySelector("[data-move-dialog-select]");
const moveDialogCancelButtons = Array.from(
  document.querySelectorAll("[data-move-dialog-cancel]")
);
const shapeActionToolbar = document.querySelector("[data-shape-action-toolbar]");
const imageActionToolbar = document.querySelector("[data-image-action-toolbar]");
const lassoActionToolbar = document.querySelector("[data-lasso-action-toolbar]");
const shapeSettingsButton = document.querySelector("[data-shape-settings]");
const shapeRotationInput = document.querySelector("[data-shape-rotation]");
const shapeRotationOutput = document.querySelector(
  "[data-shape-rotation-output]"
);
const shapeProportionalResizeButton = document.querySelector(
  "[data-shape-proportional-resize]"
);
const shapeCommitButton = document.querySelector("[data-shape-commit]");
const shapeDeleteButton = document.querySelector("[data-shape-delete]");
const imageRotationInput = document.querySelector("[data-image-rotation]");
const imageRotationOutput = document.querySelector(
  "[data-image-rotation-output]"
);
const imageProportionalResizeButton = document.querySelector(
  "[data-image-proportional-resize]"
);
const imageCommitButton = document.querySelector("[data-image-commit]");
const imageDeleteButton = document.querySelector("[data-image-delete]");
const lassoRotationInput = document.querySelector("[data-lasso-rotation]");
const lassoRotationOutput = document.querySelector(
  "[data-lasso-rotation-output]"
);
const lassoProportionalResizeButton = document.querySelector(
  "[data-lasso-proportional-resize]"
);
const lassoCopyButton = document.querySelector("[data-lasso-copy]");
const lassoCommitButton = document.querySelector("[data-lasso-commit]");
const lassoDeleteButton = document.querySelector("[data-lasso-delete]");
const canvasContextMenu = document.querySelector("[data-canvas-context-menu]");
const lassoPasteButton = document.querySelector("[data-lasso-paste]");
const undoToolbar = document.querySelector("[data-undo-toolbar]");
const undoDragHandle = document.querySelector("[data-undo-drag-handle]");
const undoButton = document.querySelector("[data-undo]");
const redoButton = document.querySelector("[data-redo]");
const fullscreenToolbar = document.querySelector("[data-fullscreen-toolbar]");
const fullscreenDragHandle = document.querySelector("[data-fullscreen-drag-handle]");
const fullscreenButton = document.querySelector("[data-fullscreen-toggle]");
const pageIndicator = document.querySelector("[data-page-indicator]");
const pageDialog = document.querySelector("#page-dialog");
const addPageDialog = document.querySelector("#add-page-dialog");
const addPageCurrentPage = document.querySelector("[data-add-page-current-page]");
const pageList = document.querySelector("[data-page-list]");
const pageActionMenu = document.querySelector("[data-page-action-menu]");
const addPageBeforeButton = document.querySelector("[data-add-page-before]");
const addPageAfterButton = document.querySelector("[data-add-page-after]");
const addPageEndButton = document.querySelector("[data-add-page-end]");
const imageFileButton = document.querySelector("[data-image-file-button]");
const imageInput = document.querySelector("[data-image-input]");
const imagePasteButton = document.querySelector("[data-image-paste]");
const clipboardPreview = document.querySelector("[data-clipboard-preview]");
const clipboardPreviewImage = document.querySelector(
  "[data-clipboard-preview-image]"
);
const clipboardStatus = document.querySelector("[data-clipboard-status]");
const pageInsertBeforeButton = document.querySelector("[data-page-insert-before]");
const pageInsertAfterButton = document.querySelector("[data-page-insert-after]");
const pageDeleteButton = document.querySelector("[data-page-delete]");
const previousPageButton = document.querySelector("[data-page-prev]");
const nextPageButton = document.querySelector("[data-page-next]");
const addPageButton = document.querySelector("[data-page-add]");
const eraserSizeInput = document.querySelector("[data-eraser-size]");
const eraserSizeOutput = document.querySelector("[data-eraser-size-output]");
const presetTitle = document.querySelector("#preset-title");
const presetSizeInput = document.querySelector("[data-preset-size]");
const presetSizeOutput = document.querySelector("[data-preset-size-output]");
const presetOpacityInput = document.querySelector("[data-preset-opacity]");
const presetOpacityOutput = document.querySelector("[data-preset-opacity-output]");
const presetDrawBehindInput = document.querySelector("[data-preset-draw-behind]");
const presetColorGrid = document.querySelector("[data-preset-color-grid]");
const shapeTypeInputs = Array.from(
  document.querySelectorAll("input[name='shape-type']")
);
const shapeStrokeEnabledInput = document.querySelector(
  "[data-shape-stroke-enabled]"
);
const shapeStrokeWidthInput = document.querySelector("[data-shape-stroke-width]");
const shapeStrokeWidthOutput = document.querySelector(
  "[data-shape-stroke-width-output]"
);
const shapeStrokeColorGrid = document.querySelector(
  "[data-shape-stroke-color-grid]"
);
const shapeFillEnabledInput = document.querySelector("[data-shape-fill-enabled]");
const shapeFillColorGrid = document.querySelector("[data-shape-fill-color-grid]");
const backgroundInputs = Array.from(
  document.querySelectorAll("input[name='background']")
);
const touchDrawingInput = document.querySelector("[data-touch-drawing-enabled]");

const state = {
  tool: "draw",
  strokeTool: "draw",
  isDrawing: false,
  activePointerId: null,
  activePointerType: "",
  activeStrokeSnapshot: null,
  lastPoint: null,
  canvasRect: null,
  canvasTransform: null,
  lastLiveInputTimestamp: 0,
  hasLiveStroke: false,
  liveStrokePreset: null,
  liveStrokePoints: [],
  liveLassoDashLength: 0,
  activePageIndex: 0,
  activePresetIndex: 0,
  editingPresetIndex: 0,
  pendingShape: null,
  shapeInteraction: null,
  pendingImage: null,
  imageInteraction: null,
  clipboardImageBlob: null,
  clipboardPreviewUrl: "",
  lassoPath: [],
  selection: null,
  selectionInteraction: null,
  selectionClipboard: null,
  canvasContextMenuPoint: null,
  canvasPasteLongPress: null,
  lassoCopyFeedbackTimer: null,
  eraserPreview: null,
  eraserPreviewTimer: null,
  viewportTouchPointers: new Map(),
  panGesture: null,
  renderFrame: null,
  tooltipTimer: null,
  tooltipTarget: null,
  tooltipPressX: 0,
  tooltipPressY: 0,
  tooltipBlockClickOnShow: false,
  tooltipClickBlockTarget: null,
  appDialogResolve: null,
  appDialogMode: "confirm",
  appDialogResult: null,
  moveDialogResolve: null,
  moveDialogResult: undefined,
  libraryDrag: null,
  libraryDragSuppressClick: false,
  pages: [],
  presets: [],
  documentId: null,
  documentName: "",
  documentCreatedAt: null,
  documentUpdatedAt: null,
  documentLastOpenedAt: null,
  documentFolderId: null,
  documents: [],
  folders: [],
  currentFolderId: null,
  saveTimer: null,
  savePromise: null,
  isLoadingDocument: false,
  isSavingDocument: false,
  shouldSaveAgain: false,
  toolbarsHidden: false,
  documentIntroDismissed: false,
  globalSettings: {
    touchDrawingEnabled: true,
    toolbarVisibility: {
      main: true,
      presets: true,
      undo: true,
      fullscreen: true,
    },
  },
};

const brush = {
  eraseSize: 28,
};

const shapeConfig = {
  type: "rectangle",
  strokeEnabled: true,
  strokeColor: "#000000",
  strokeWidth: 3,
  fillEnabled: false,
  fillColor: "#d6b400",
};

const canvasPixelRatio = 1;
const moveEventName = "pointermove";
const doubleTapDelay = 360;
const eraserPreviewDuration = 160;
const liveInputMinInterval = 24;
const transformInputMinInterval = 56;
const transformPreviewMaxDimension = 480;
const maxPageZoom = 4;
const canvasPasteLongPressDelay = 560;
const canvasPasteLongPressMoveTolerance = 12;
const lassoCopyFeedbackDuration = 650;
const tooltipDelay = 375;
const libraryDragDelay = 360;
const libraryDragMoveTolerance = 8;
const toolbarPositionStorageKey = "mainToolbarPosition";
const presetToolbarPositionStorageKey = "presetToolbarPositionBottomLeft";
const undoToolbarPositionStorageKey = "undoToolbarPositionTopLeft";
const fullscreenToolbarPositionStorageKey = "fullscreenToolbarPosition";
const toolbarTogglePositionStorageKey = "toolbarVisibilityTabPosition";
const globalSettingsStorageKey = "dinodrawGlobalSettings";
const databaseName = "booxDrawingDocuments";
const databaseVersion = 2;
const documentStoreName = "documents";
const folderStoreName = "folders";
const exportFormat = "dinodraw-document";
const legacyExportFormat = "boox-drawing-document";
const exportFormatVersion = 1;
const historyLimit = 30;
const colors = [
  ["Black", "#000000"],
  ["Graphite", "#4a4a4a"],
  ["White", "#ffffff"],
  ["Yellow", "#d6b400"],
  ["Blue", "#0057b8"],
  ["Green", "#167c32"],
  ["Purple", "#6d36a8"],
  ["Orange", "#c34a00"],
  ["Red", "#b00020"],
  ["Brown", "#704214"],
  ["Turquoise", "#008c8c"],
  ["Pink", "#c2185b"],
  ["Cyan", "#007c91"],
  ["Lime", "#6f8f00"],
  ["Navy", "#002f6c"],
  ["Maroon", "#6e102f"],
];
const defaultPresets = [
  { color: "#000000", size: 3, opacity: 1, drawBehind: false },
  { color: "#d6b400", size: 30, opacity: 0.45, drawBehind: true },
  { color: "#0057b8", size: 7, opacity: 1, drawBehind: false },
  { color: "#b00020", size: 7, opacity: 1, drawBehind: false },
  { color: "#008c8c", size: 30, opacity: 0.45, drawBehind: true },
  { color: "#008c8c", size: 7, opacity: 1, drawBehind: false },
];
const previousDefaultPresets = [
  { color: "#000000", size: 4, opacity: 1, drawBehind: false },
  { color: "#d6b400", size: 16, opacity: 0.45, drawBehind: true },
  { color: "#0057b8", size: 4, opacity: 1, drawBehind: false },
  { color: "#b00020", size: 4, opacity: 1, drawBehind: false },
  { color: "#167c32", size: 6, opacity: 0.85, drawBehind: false },
  { color: "#4a4a4a", size: 10, opacity: 0.6, drawBehind: false },
];
let databasePromise = null;

function createId() {
  if (window.crypto && window.crypto.randomUUID) {
    return window.crypto.randomUUID();
  }

  return `doc-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function openDatabase() {
  if (databasePromise) {
    return databasePromise;
  }

  databasePromise = new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error("IndexedDB is not available in this browser."));
      return;
    }

    const request = window.indexedDB.open(databaseName, databaseVersion);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(documentStoreName)) {
        db.createObjectStore(documentStoreName, { keyPath: "id" });
      }

      if (!db.objectStoreNames.contains(folderStoreName)) {
        db.createObjectStore(folderStoreName, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

  return databasePromise;
}

function getDocumentStore(mode) {
  return openDatabase().then(
    (db) => db.transaction(documentStoreName, mode).objectStore(documentStoreName)
  );
}

function getFolderStore(mode) {
  return openDatabase().then(
    (db) => db.transaction(folderStoreName, mode).objectStore(folderStoreName)
  );
}

async function getAllDocuments() {
  const store = await getDocumentStore("readonly");

  return new Promise((resolve, reject) => {
    const request = store.getAll();

    request.onsuccess = () => {
      const documents = request.result || [];

      documents.sort((a, b) => {
        const bDate = b.lastOpenedAt || b.updatedAt || b.createdAt || "";
        const aDate = a.lastOpenedAt || a.updatedAt || a.createdAt || "";

        return String(bDate).localeCompare(String(aDate));
      });
      resolve(documents);
    };
    request.onerror = () => reject(request.error);
  });
}

async function getAllFolders() {
  const store = await getFolderStore("readonly");

  return new Promise((resolve, reject) => {
    const request = store.getAll();

    request.onsuccess = () => {
      const folders = request.result || [];

      folders.sort((a, b) =>
        String(a.name || "").localeCompare(String(b.name || ""))
      );
      resolve(folders);
    };
    request.onerror = () => reject(request.error);
  });
}

async function getDocument(id) {
  const store = await getDocumentStore("readonly");

  return new Promise((resolve, reject) => {
    const request = store.get(id);

    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

async function getFolder(id) {
  const store = await getFolderStore("readonly");

  return new Promise((resolve, reject) => {
    const request = store.get(id);

    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

async function putDocument(record) {
  const store = await getDocumentStore("readwrite");

  return new Promise((resolve, reject) => {
    const request = store.put(record);

    request.onsuccess = () => resolve(record);
    request.onerror = () => reject(request.error);
  });
}

async function putFolder(record) {
  const store = await getFolderStore("readwrite");

  return new Promise((resolve, reject) => {
    const request = store.put(record);

    request.onsuccess = () => resolve(record);
    request.onerror = () => reject(request.error);
  });
}

async function deleteDocumentRecord(id) {
  const store = await getDocumentStore("readwrite");

  return new Promise((resolve, reject) => {
    const request = store.delete(id);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function deleteFolderRecord(id) {
  const store = await getFolderStore("readwrite");

  return new Promise((resolve, reject) => {
    const request = store.delete(id);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

function normalizeFolderId(value) {
  return value && typeof value === "string" ? value : null;
}

function getFolderById(id) {
  const folderId = normalizeFolderId(id);

  if (!folderId) {
    return null;
  }

  return state.folders.find((folder) => folder.id === folderId) || null;
}

function resolveExistingFolderId(id) {
  const folderId = normalizeFolderId(id);

  return getFolderById(folderId) ? folderId : null;
}

function getFolderPath(folderId) {
  const path = [];
  const seen = new Set();
  let currentId = resolveExistingFolderId(folderId);

  while (currentId && !seen.has(currentId)) {
    const folder = getFolderById(currentId);

    if (!folder) {
      break;
    }

    seen.add(currentId);
    path.unshift(folder);
    currentId = resolveExistingFolderId(folder.parentId);
  }

  return path;
}

function getFolderPathLabel(folderId) {
  const path = getFolderPath(folderId);

  if (path.length === 0) {
    return "Root";
  }

  return `Root / ${path.map((folder) => folder.name || "Untitled folder").join(" / ")}`;
}

function countDirectFolderItems(folderId) {
  const parentId = normalizeFolderId(folderId);
  const folderCount = state.folders.filter(
    (folder) => resolveExistingFolderId(folder.parentId) === parentId
  ).length;
  const documentCount = state.documents.filter(
    (record) => resolveExistingFolderId(record.folderId) === parentId
  ).length;

  return folderCount + documentCount;
}

function getDescendantFolderIds(folderId) {
  const excluded = new Set();
  const queue = [folderId];

  while (queue.length > 0) {
    const currentId = queue.shift();

    state.folders.forEach((folder) => {
      if (
        normalizeFolderId(folder.parentId) === currentId &&
        !excluded.has(folder.id)
      ) {
        excluded.add(folder.id);
        queue.push(folder.id);
      }
    });
  }

  return excluded;
}

function getMoveDestinationOptions(excludedFolderId) {
  const excludedIds = excludedFolderId
    ? getDescendantFolderIds(excludedFolderId)
    : new Set();

  if (excludedFolderId) {
    excludedIds.add(excludedFolderId);
  }

  const folderOptions = state.folders
    .filter((folder) => !excludedIds.has(folder.id))
    .map((folder) => ({
      id: folder.id,
      label: getFolderPathLabel(folder.id),
    }));

  folderOptions.sort((a, b) => a.label.localeCompare(b.label));

  return [{ id: null, label: "Root" }].concat(folderOptions);
}

function createFolderRecord(name, parentId) {
  const now = new Date().toISOString();

  return {
    id: createId(),
    name,
    parentId: resolveExistingFolderId(parentId),
    createdAt: now,
    updatedAt: now,
  };
}

function formatDateLabel(value) {
  if (!value) {
    return "Unknown";
  }

  return new Date(value).toLocaleString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function closeAppDialog(result) {
  state.appDialogResult = result;

  if (appDialog.open && appDialog.close) {
    appDialog.close();
    return;
  }

  appDialog.removeAttribute("open");

  if (state.appDialogResolve) {
    state.appDialogResolve(result);
    state.appDialogResolve = null;
  }
}

function showAppDialog(options) {
  return new Promise((resolve) => {
    const hasInput = Boolean(options.inputLabel);
    const showCancel = options.showCancel !== false;

    state.appDialogResolve = resolve;
    state.appDialogMode = hasInput ? "input" : "confirm";
    state.appDialogResult = null;
    appDialogTitle.textContent = options.title || "Dino Draw";
    appDialogMessage.textContent = options.message || "";
    appDialogConfirmButton.textContent = options.confirmLabel || "OK";
    appDialogCancelButtons.forEach((button) => {
      button.style.display = showCancel ? "" : "none";
    });
    appDialogConfirmButton.classList.toggle(
      "document-button-primary",
      !options.destructive
    );
    appDialogConfirmButton.classList.toggle("is-destructive", Boolean(options.destructive));

    if (hasInput) {
      appDialogField.classList.remove("is-hidden");
      appDialogInputLabel.textContent = options.inputLabel;
      appDialogInput.value = options.inputValue || "";
    } else {
      appDialogField.classList.add("is-hidden");
      appDialogInput.value = "";
    }

    if (appDialog.showModal) {
      appDialog.showModal();
    } else {
      appDialog.setAttribute("open", "");
    }

    if (hasInput) {
      appDialogInput.focus();
      appDialogInput.select();
    } else {
      appDialogConfirmButton.focus();
    }
  });
}

function showAlertDialog(title, message) {
  return showAppDialog({
    title,
    message,
    confirmLabel: "OK",
    showCancel: false,
  });
}

function showConfirmDialog(title, message, confirmLabel) {
  return showAppDialog({
    title,
    message,
    confirmLabel,
    cancelLabel: "Cancel",
    destructive: true,
  });
}

function showTextDialog(title, message, inputValue) {
  return showAppDialog({
    title,
    message,
    inputLabel: "Name",
    inputValue,
    confirmLabel: "Save",
  });
}

function closeMoveDialog(result) {
  state.moveDialogResult = result;

  if (moveDialog.open && moveDialog.close) {
    moveDialog.close();
    return;
  }

  moveDialog.removeAttribute("open");

  if (state.moveDialogResolve) {
    state.moveDialogResolve(result);
    state.moveDialogResolve = null;
  }
}

function showMoveDialog(title, message, options, selectedFolderId) {
  return new Promise((resolve) => {
    state.moveDialogResolve = resolve;
    state.moveDialogResult = undefined;
    moveDialogTitle.textContent = title;
    moveDialogMessage.textContent = message;
    moveDialogSelect.textContent = "";

    options.forEach((folderOption) => {
      const option = document.createElement("option");

      option.value = folderOption.id || "";
      option.textContent = folderOption.label;
      moveDialogSelect.appendChild(option);
    });

    moveDialogSelect.value = selectedFolderId || "";

    if (moveDialog.showModal) {
      moveDialog.showModal();
    } else {
      moveDialog.setAttribute("open", "");
    }

    moveDialogSelect.focus();
  });
}

function sanitizeFileName(name) {
  return (
    name
      .trim()
      .replace(/[^a-z0-9-_]+/gi, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase() || "document"
  );
}

function formatPageNumber(number) {
  const text = String(number);

  if (text.length >= 2) {
    return text;
  }

  return `0${text}`;
}

function getCanvasDataUrl(layer) {
  if (!layer.width || !layer.height) {
    return "";
  }

  return layer.toDataURL("image/png");
}

function getDocumentSettings() {
  return {
    eraserSize: brush.eraseSize,
    activePresetIndex: state.activePresetIndex,
    presets: state.presets.map((preset) => ({ ...preset })),
    shapeConfig: { ...shapeConfig },
  };
}

function applyDocumentSettings(settings = {}) {
  brush.eraseSize = Number(settings.eraserSize || brush.eraseSize);
  state.activePresetIndex = Math.max(
    0,
    Math.min(
      Number(settings.activePresetIndex || 0),
      defaultPresets.length - 1
    )
  );
  state.presets = defaultPresets.map((fallback, index) => ({
    ...fallback,
    ...((settings.presets || [])[index] || {}),
  }));

  if (settings.shapeConfig) {
    Object.assign(shapeConfig, settings.shapeConfig);
  }

  updateEraserSize(brush.eraseSize);
  updatePresetButtons();
  syncPresetDialog();
  syncShapeDialog();
}

function createDocumentRecord(name, folderId = state.currentFolderId) {
  const now = new Date().toISOString();
  const pageSize = getCurrentViewportSize();

  return {
    id: createId(),
    name,
    folderId: resolveExistingFolderId(folderId),
    createdAt: now,
    updatedAt: now,
    lastOpenedAt: now,
    appVersion: APP_VERSION,
    activePageIndex: 0,
    settings: getDocumentSettings(),
    pages: [
      {
        background: "blank",
        width: pageSize.width,
        height: pageSize.height,
        underDrawing: "",
        drawing: "",
      },
    ],
  };
}

function serializeCurrentDocument() {
  const now = new Date().toISOString();

  return {
    id: state.documentId,
    name: state.documentName || "Untitled",
    folderId: resolveExistingFolderId(state.documentFolderId),
    createdAt: state.documentCreatedAt || now,
    updatedAt: now,
    lastOpenedAt: state.documentLastOpenedAt || now,
    appVersion: APP_VERSION,
    activePageIndex: state.activePageIndex,
    settings: getDocumentSettings(),
    pages: state.pages.map((page) => ({
      background: page.background,
      width: getPageWidth(page),
      height: getPageHeight(page),
      underDrawing: getCanvasDataUrl(page.underLayer),
      drawing: getCanvasDataUrl(page.layer),
    })),
  };
}

function getPortableDocumentRecord(record) {
  const portableRecord = { ...record };

  delete portableRecord.folderId;

  return portableRecord;
}

function loadImage(dataUrl) {
  return new Promise((resolve) => {
    if (!dataUrl) {
      resolve(null);
      return;
    }

    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = dataUrl;
  });
}

function loadImageBlob(blob) {
  return new Promise((resolve, reject) => {
    if (!blob) {
      reject(new Error("No image data."));
      return;
    }

    const image = new Image();
    const url = URL.createObjectURL(blob);

    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Image could not be loaded."));
    };
    image.src = url;
  });
}

function readBlobAsArrayBuffer(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });
}

function canvasToPngBlob(sourceCanvas) {
  return new Promise((resolve) => {
    if (sourceCanvas.toBlob) {
      sourceCanvas.toBlob((blob) => resolve(blob), "image/png");
      return;
    }

    const dataUrl = sourceCanvas.toDataURL("image/png");
    const binary = atob(dataUrl.split(",")[1]);
    const bytes = new Uint8Array(binary.length);

    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }

    resolve(new Blob([bytes], { type: "image/png" }));
  });
}

async function canvasToPngBytes(sourceCanvas) {
  const blob = await canvasToPngBlob(sourceCanvas);
  const buffer = await readBlobAsArrayBuffer(blob);

  return new Uint8Array(buffer);
}

function getCrcTable() {
  if (getCrcTable.table) {
    return getCrcTable.table;
  }

  const table = new Uint32Array(256);

  for (let index = 0; index < 256; index += 1) {
    let value = index;

    for (let bit = 0; bit < 8; bit += 1) {
      value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    }

    table[index] = value >>> 0;
  }

  getCrcTable.table = table;
  return table;
}

function getCrc32(bytes) {
  const table = getCrcTable();
  let crc = 0xffffffff;

  for (let index = 0; index < bytes.length; index += 1) {
    crc = table[(crc ^ bytes[index]) & 0xff] ^ (crc >>> 8);
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function getAsciiBytes(text) {
  const bytes = new Uint8Array(text.length);

  for (let index = 0; index < text.length; index += 1) {
    bytes[index] = text.charCodeAt(index) & 0xff;
  }

  return bytes;
}

function getBinaryString(bytes) {
  let text = "";
  const chunkSize = 8192;

  for (let index = 0; index < bytes.length; index += chunkSize) {
    const chunk = bytes.subarray(index, index + chunkSize);

    text += String.fromCharCode.apply(null, Array.from(chunk));
  }

  return text;
}

function getCanvasRgbBytes(sourceCanvas) {
  const sourceContext = sourceCanvas.getContext("2d");
  const imageData = sourceContext.getImageData(
    0,
    0,
    sourceCanvas.width,
    sourceCanvas.height
  );
  const rgba = imageData.data;
  const rgb = new Uint8Array(sourceCanvas.width * sourceCanvas.height * 3);
  let rgbIndex = 0;

  for (let index = 0; index < rgba.length; index += 4) {
    rgb[rgbIndex] = rgba[index];
    rgb[rgbIndex + 1] = rgba[index + 1];
    rgb[rgbIndex + 2] = rgba[index + 2];
    rgbIndex += 3;
  }

  return rgb;
}

function writeUint16(bytes, offset, value) {
  bytes[offset] = value & 0xff;
  bytes[offset + 1] = (value >>> 8) & 0xff;
}

function writeUint32(bytes, offset, value) {
  bytes[offset] = value & 0xff;
  bytes[offset + 1] = (value >>> 8) & 0xff;
  bytes[offset + 2] = (value >>> 16) & 0xff;
  bytes[offset + 3] = (value >>> 24) & 0xff;
}

function getDosDateTime(date) {
  const year = Math.max(1980, date.getFullYear());

  return {
    time:
      (date.getHours() << 11) |
      (date.getMinutes() << 5) |
      Math.floor(date.getSeconds() / 2),
    date:
      ((year - 1980) << 9) |
      ((date.getMonth() + 1) << 5) |
      date.getDate(),
  };
}

function appendBytes(target, bytes, offset) {
  target.set(bytes, offset);
  return offset + bytes.length;
}

function createZipBlob(files) {
  const now = getDosDateTime(new Date());
  const records = [];
  let localSize = 0;
  let centralSize = 0;

  files.forEach((file) => {
    const nameBytes = getAsciiBytes(file.name);
    const crc = getCrc32(file.bytes);
    const localHeaderSize = 30 + nameBytes.length;
    const centralHeaderSize = 46 + nameBytes.length;

    records.push({
      nameBytes,
      bytes: file.bytes,
      crc,
      offset: localSize,
      localHeaderSize,
      centralHeaderSize,
    });
    localSize += localHeaderSize + file.bytes.length;
    centralSize += centralHeaderSize;
  });

  const output = new Uint8Array(localSize + centralSize + 22);
  let offset = 0;

  records.forEach((record) => {
    writeUint32(output, offset, 0x04034b50);
    writeUint16(output, offset + 4, 20);
    writeUint16(output, offset + 6, 0);
    writeUint16(output, offset + 8, 0);
    writeUint16(output, offset + 10, now.time);
    writeUint16(output, offset + 12, now.date);
    writeUint32(output, offset + 14, record.crc);
    writeUint32(output, offset + 18, record.bytes.length);
    writeUint32(output, offset + 22, record.bytes.length);
    writeUint16(output, offset + 26, record.nameBytes.length);
    writeUint16(output, offset + 28, 0);
    offset += 30;
    offset = appendBytes(output, record.nameBytes, offset);
    offset = appendBytes(output, record.bytes, offset);
  });

  const centralOffset = offset;

  records.forEach((record) => {
    writeUint32(output, offset, 0x02014b50);
    writeUint16(output, offset + 4, 20);
    writeUint16(output, offset + 6, 20);
    writeUint16(output, offset + 8, 0);
    writeUint16(output, offset + 10, 0);
    writeUint16(output, offset + 12, now.time);
    writeUint16(output, offset + 14, now.date);
    writeUint32(output, offset + 16, record.crc);
    writeUint32(output, offset + 20, record.bytes.length);
    writeUint32(output, offset + 24, record.bytes.length);
    writeUint16(output, offset + 28, record.nameBytes.length);
    writeUint16(output, offset + 30, 0);
    writeUint16(output, offset + 32, 0);
    writeUint16(output, offset + 34, 0);
    writeUint16(output, offset + 36, 0);
    writeUint32(output, offset + 38, 0);
    writeUint32(output, offset + 42, record.offset);
    offset += 46;
    offset = appendBytes(output, record.nameBytes, offset);
  });

  writeUint32(output, offset, 0x06054b50);
  writeUint16(output, offset + 4, 0);
  writeUint16(output, offset + 6, 0);
  writeUint16(output, offset + 8, records.length);
  writeUint16(output, offset + 10, records.length);
  writeUint32(output, offset + 12, centralSize);
  writeUint32(output, offset + 16, centralOffset);
  writeUint16(output, offset + 20, 0);

  return new Blob([output], { type: "application/zip" });
}

function createPdfBlob(pageImages) {
  const objects = [];
  const pageIds = [];
  const imageIds = [];
  const contentIds = [];
  const pageTreeId = 2;
  const catalogId = 1;
  let nextId = 3;

  pageImages.forEach((pageImage) => {
    const pageId = nextId;
    const imageId = nextId + 1;
    const contentId = nextId + 2;

    nextId += 3;
    pageIds.push(pageId);
    imageIds.push(imageId);
    contentIds.push(contentId);

    const width = pageImage.width;
    const height = pageImage.height;
    const content = `q\n${width} 0 0 ${height} 0 0 cm\n/Im${
      pageImage.index
    } Do\nQ\n`;

    objects.push({
      id: imageId,
      body:
        `<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} ` +
        `/ColorSpace /DeviceRGB /BitsPerComponent 8 /Length ${pageImage.bytes.length} >>\nstream\n` +
        getBinaryString(pageImage.bytes) +
        "\nendstream",
    });
    objects.push({
      id: contentId,
      body:
        `<< /Length ${content.length} >>\nstream\n` +
        content +
        "endstream",
    });
    objects.push({
      id: pageId,
      body:
        `<< /Type /Page /Parent ${pageTreeId} 0 R /MediaBox [0 0 ${width} ${height}] ` +
        `/Resources << /XObject << /Im${pageImage.index} ${imageId} 0 R >> >> ` +
        `/Contents ${contentId} 0 R >>`,
    });
  });

  objects.unshift({
    id: pageTreeId,
    body: `<< /Type /Pages /Count ${pageIds.length} /Kids [${pageIds
      .map((id) => `${id} 0 R`)
      .join(" ")}] >>`,
  });
  objects.unshift({
    id: catalogId,
    body: `<< /Type /Catalog /Pages ${pageTreeId} 0 R >>`,
  });
  objects.sort((a, b) => a.id - b.id);

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((object) => {
    offsets[object.id] = pdf.length;
    pdf += `${object.id} 0 obj\n${object.body}\nendobj\n`;
  });

  const xrefOffset = pdf.length;

  pdf += `xref\n0 ${nextId}\n`;
  pdf += "0000000000 65535 f \n";

  for (let id = 1; id < nextId; id += 1) {
    const offset = String(offsets[id] || 0);

    pdf += `${"0000000000".slice(offset.length)}${offset} 00000 n \n`;
  }

  pdf +=
    `trailer\n<< /Size ${nextId} /Root ${catalogId} 0 R >>\n` +
    `startxref\n${xrefOffset}\n%%EOF`;

  return new Blob([getAsciiBytes(pdf)], { type: "application/pdf" });
}

function downloadBlob(blob, filename) {
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function createPageFromSavedPage(savedPage = {}) {
  const underImage = await loadImage(savedPage.underDrawing);
  const image = await loadImage(savedPage.drawing);
  const fallbackWidth =
    (image && image.width) ||
    (underImage && underImage.width) ||
    canvas.width ||
    window.innerWidth;
  const fallbackHeight =
    (image && image.height) ||
    (underImage && underImage.height) ||
    canvas.height ||
    window.innerHeight;
  const page = createPage(
    savedPage.background || "blank",
    savedPage.width || fallbackWidth,
    savedPage.height || fallbackHeight
  );

  if (underImage) {
    page.underContext.drawImage(
      underImage,
      0,
      0,
      savedPage.width || underImage.width,
      savedPage.height || underImage.height,
      0,
      0,
      getPageWidth(page),
      getPageHeight(page)
    );
  }

  if (image) {
    page.context.drawImage(
      image,
      0,
      0,
      savedPage.width || image.width,
      savedPage.height || image.height,
      0,
      0,
      getPageWidth(page),
      getPageHeight(page)
    );
  }

  return page;
}

function setSaveStatus(message) {
  saveStatus.textContent = message;
}

function updateDocumentSubtitle() {
  const currentFolder = getFolderById(state.currentFolderId);
  const folderName = currentFolder ? currentFolder.name || "Untitled folder" : "Root";
  const parentId = currentFolder
    ? resolveExistingFolderId(currentFolder.parentId)
    : null;

  documentTitle.textContent = "Documents";
  documentSubtitle.textContent = folderName;
  folderBackButton.disabled = !currentFolder;
  folderBackButton.dataset.dropFolderId = parentId || "";

  if (!state.documentId) {
    closeLibraryButton.disabled = true;
    saveDocumentButtons.forEach((button) => {
      button.disabled = true;
    });
    exportDocumentButtons.forEach((button) => {
      button.disabled = true;
    });
    exportPngZipButtons.forEach((button) => {
      button.disabled = true;
    });
    exportPdfButtons.forEach((button) => {
      button.disabled = true;
    });
    setSaveStatus("No document");
    return;
  }

  closeLibraryButton.disabled = false;
  saveDocumentButtons.forEach((button) => {
    button.disabled = false;
  });
  exportDocumentButtons.forEach((button) => {
    button.disabled = false;
  });
  exportPngZipButtons.forEach((button) => {
    button.disabled = false;
  });
  exportPdfButtons.forEach((button) => {
    button.disabled = false;
  });
}

function showDocumentScreen() {
  documentScreen.classList.remove("is-hidden");
  updateDocumentSubtitle();
  renderDocumentList();
}

function hideDocumentScreen() {
  if (!state.documentId) {
    return;
  }

  closeDocumentMenus();
  documentScreen.classList.add("is-hidden");
}

function closeDocumentMenus() {
  documentActionMenu.classList.add("is-hidden");
  documentActionMenu.removeAttribute("data-document-id");
  folderActionMenu.classList.add("is-hidden");
  folderActionMenu.removeAttribute("data-folder-id");
}

function positionRecordActionMenu(menu, anchor) {
  const margin = 8;
  const anchorRect = anchor.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();
  const rightAlignedLeft = anchorRect.right - menuRect.width;
  const leftAlignedLeft = anchorRect.left;
  const belowTop = anchorRect.bottom + margin;
  const aboveTop = anchorRect.top - menuRect.height - margin;
  const left =
    rightAlignedLeft >= margin ? rightAlignedLeft : leftAlignedLeft;
  const top =
    belowTop + menuRect.height <= window.innerHeight - margin
      ? belowTop
      : aboveTop;

  menu.style.left = `${Math.max(
    margin,
    Math.min(left, window.innerWidth - menuRect.width - margin)
  )}px`;
  menu.style.top = `${Math.max(
    margin,
    Math.min(top, window.innerHeight - menuRect.height - margin)
  )}px`;
}

function openDocumentActionMenu(id, anchor) {
  const isOpenForDocument =
    !documentActionMenu.classList.contains("is-hidden") &&
    documentActionMenu.dataset.documentId === id;

  if (isOpenForDocument) {
    closeDocumentMenus();
    return;
  }

  closeDocumentMenus();
  documentActionMenu.dataset.documentId = id;
  documentActionMenu.classList.remove("is-hidden");
  documentActionMenu.style.left = "-9999px";
  documentActionMenu.style.top = "-9999px";
  positionRecordActionMenu(documentActionMenu, anchor);
}

function openFolderActionMenu(id, anchor) {
  const isOpenForFolder =
    !folderActionMenu.classList.contains("is-hidden") &&
    folderActionMenu.dataset.folderId === id;

  if (isOpenForFolder) {
    closeDocumentMenus();
    return;
  }

  closeDocumentMenus();
  folderActionMenu.dataset.folderId = id;
  folderActionMenu.classList.remove("is-hidden");
  folderActionMenu.style.left = "-9999px";
  folderActionMenu.style.top = "-9999px";
  positionRecordActionMenu(folderActionMenu, anchor);
}

function setCurrentFolder(folderId) {
  state.currentFolderId = resolveExistingFolderId(folderId);
  updateDocumentSubtitle();
  renderDocumentList();
}

function renderDocumentBreadcrumbs() {
  if (!documentBreadcrumbs) {
    return;
  }

  const path = getFolderPath(state.currentFolderId);
  const crumbs = [{ id: null, name: "Root" }].concat(path);

  documentBreadcrumbs.textContent = "";

  crumbs.forEach((crumb, index) => {
    const button = document.createElement("button");

    button.className = "document-breadcrumb-button";
    button.type = "button";
    button.textContent = crumb.name || "Untitled folder";
    button.dataset.dropFolderId = crumb.id || "";

    if (index === crumbs.length - 1) {
      button.disabled = true;
      button.setAttribute("aria-current", "page");
    } else {
      button.addEventListener("click", () => setCurrentFolder(crumb.id));
    }

    documentBreadcrumbs.appendChild(button);
  });
}

function getCurrentLibraryFolderId(itemType, id) {
  if (itemType === "folder") {
    const folder = getFolderById(id);

    return folder ? resolveExistingFolderId(folder.parentId) : null;
  }

  const record = state.documents.find((documentRecord) => documentRecord.id === id);

  return record ? resolveExistingFolderId(record.folderId) : null;
}

function canDropLibraryItem(itemType, id, folderId) {
  const destinationId = resolveExistingFolderId(folderId);
  const currentFolderId = getCurrentLibraryFolderId(itemType, id);

  if (currentFolderId === destinationId) {
    return false;
  }

  if (itemType === "folder") {
    if (destinationId === id) {
      return false;
    }

    if (getDescendantFolderIds(id).has(destinationId)) {
      return false;
    }
  }

  return true;
}

function clearLibraryDropTarget() {
  if (state.libraryDrag && state.libraryDrag.dropTargetElement) {
    state.libraryDrag.dropTargetElement.classList.remove("is-drop-target");
    state.libraryDrag.dropTargetElement = null;
  }
}

function updateLibraryDropTarget(clientX, clientY) {
  const drag = state.libraryDrag;

  if (!drag) {
    return;
  }

  const target = document.elementFromPoint(clientX, clientY);
  const dropElement = target
    ? target.closest("[data-drop-folder-id]")
    : null;
  const destinationId = dropElement
    ? resolveExistingFolderId(dropElement.dataset.dropFolderId)
    : null;
  const canDrop = dropElement
    ? canDropLibraryItem(drag.itemType, drag.itemId, destinationId)
    : false;

  if (!canDrop) {
    clearLibraryDropTarget();
    drag.dropFolderId = undefined;
    return;
  }

  if (drag.dropTargetElement !== dropElement) {
    clearLibraryDropTarget();
    drag.dropTargetElement = dropElement;
    drag.dropTargetElement.classList.add("is-drop-target");
  }

  drag.dropFolderId = destinationId;
}

function moveLibraryItemToFolder(itemType, id, destinationId) {
  return (async () => {
    await flushDocumentSave();

    if (itemType === "folder") {
      const folder = await getFolder(id);

      if (!folder || !canDropLibraryItem(itemType, id, destinationId)) {
        return false;
      }

      folder.parentId = resolveExistingFolderId(destinationId);
      folder.updatedAt = new Date().toISOString();
      await putFolder(folder);
    } else {
      const record = await getDocument(id);

      if (!record || !canDropLibraryItem(itemType, id, destinationId)) {
        return false;
      }

      record.folderId = resolveExistingFolderId(destinationId);
      record.updatedAt = new Date().toISOString();
      await putDocument(record);

      if (state.documentId === id) {
        state.documentFolderId = record.folderId;
        state.documentUpdatedAt = record.updatedAt;
      }
    }

    await refreshDocuments();
    setSaveStatus("Moved");
    return true;
  })();
}

function createLibraryDragGhost(row) {
  const ghost = row.cloneNode(true);
  const actions = ghost.querySelector(".document-row-actions");

  if (actions) {
    actions.remove();
  }

  ghost.className = `${row.className} document-drag-ghost`;
  ghost.removeAttribute("data-library-type");
  ghost.removeAttribute("data-library-id");
  ghost.removeAttribute("data-drop-folder-id");
  document.body.appendChild(ghost);

  return ghost;
}

function positionLibraryDragGhost(ghost, clientX, clientY) {
  ghost.style.left = `${clientX + 12}px`;
  ghost.style.top = `${clientY + 12}px`;
}

function addLibraryDragInteractions(row) {
  row.addEventListener("pointerdown", (event) => {
    if (event.button !== undefined && event.button !== 0) {
      return;
    }

    if (event.target.closest("button, input, select, a")) {
      return;
    }

    closeDocumentMenus();

    const drag = {
      itemType: row.dataset.libraryType,
      itemId: row.dataset.libraryId,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastY: event.clientY,
      longPressTimer: null,
      isPressReady: false,
      isScrolling: false,
      isDragging: false,
      row,
      ghost: null,
      dropTargetElement: null,
      dropFolderId: undefined,
    };

    state.libraryDrag = drag;

    if (row.setPointerCapture) {
      try {
        row.setPointerCapture(event.pointerId);
      } catch (error) {}
    }

    function startDrag(clientX, clientY) {
      if (!state.libraryDrag || drag.isScrolling || drag.isDragging) {
        return;
      }

      drag.isPressReady = true;
      drag.isDragging = true;
      drag.row.classList.add("is-dragging");
      drag.ghost = createLibraryDragGhost(row);
      state.libraryDragSuppressClick = true;
      positionLibraryDragGhost(drag.ghost, clientX, clientY);
      updateLibraryDropTarget(clientX, clientY);
    }

    drag.longPressTimer = window.setTimeout(() => {
      startDrag(drag.startX, drag.startY);
    }, libraryDragDelay);

    function cancelPendingPress() {
      if (drag.longPressTimer) {
        window.clearTimeout(drag.longPressTimer);
        drag.longPressTimer = null;
      }
    }

    function moveDrag(moveEvent) {
      if (!state.libraryDrag || moveEvent.pointerId !== drag.pointerId) {
        return;
      }

      const deltaX = moveEvent.clientX - drag.startX;
      const deltaY = moveEvent.clientY - drag.startY;

      if (!drag.isDragging) {
        if (moveEvent.cancelable) {
          moveEvent.preventDefault();
        }

        if (
          Math.sqrt(deltaX * deltaX + deltaY * deltaY) >
          libraryDragMoveTolerance
        ) {
          cancelPendingPress();
          drag.isScrolling = true;
        }

        if (drag.isScrolling) {
          documentPanel.scrollTop -= moveEvent.clientY - drag.lastY;
          drag.lastY = moveEvent.clientY;
        }

        return;
      }

      if (moveEvent.cancelable) {
        moveEvent.preventDefault();
      }

      positionLibraryDragGhost(drag.ghost, moveEvent.clientX, moveEvent.clientY);
      updateLibraryDropTarget(moveEvent.clientX, moveEvent.clientY);
    }

    function endDrag(endEvent) {
      if (endEvent && endEvent.pointerId !== drag.pointerId) {
        return;
      }

      window.removeEventListener("pointermove", moveDrag);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", cancelDrag);
      window.removeEventListener("blur", cancelDrag);
      cancelPendingPress();

      if (row.releasePointerCapture) {
        try {
          row.releasePointerCapture(drag.pointerId);
        } catch (error) {}
      }

      const shouldDrop = drag.isDragging && drag.dropFolderId !== undefined;
      const itemType = drag.itemType;
      const itemId = drag.itemId;
      const destinationId = drag.dropFolderId;

      clearLibraryDropTarget();
      drag.row.classList.remove("is-dragging");

      if (drag.ghost) {
        drag.ghost.remove();
      }

      state.libraryDrag = null;

      if (drag.isDragging) {
        window.setTimeout(() => {
          state.libraryDragSuppressClick = false;
        }, 0);
      } else {
        state.libraryDragSuppressClick = false;
      }

      if (shouldDrop) {
        moveLibraryItemToFolder(itemType, itemId, destinationId).catch((error) => {
          setSaveStatus("Move failed");
          console.error(error);
        });
      }
    }

    function cancelDrag() {
      endDrag({ pointerId: drag.pointerId });
    }

    window.addEventListener("pointermove", moveDrag, { passive: false });
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", cancelDrag);
    window.addEventListener("blur", cancelDrag);
  });

  row.addEventListener("click", (event) => {
    if (state.libraryDragSuppressClick) {
      event.preventDefault();
      event.stopPropagation();
    }
  });
}

function renderFolderRow(folder) {
  const row = document.createElement("article");
  const details = document.createElement("div");
  const name = document.createElement("div");
  const icon = document.createElement("span");
  const label = document.createElement("span");
  const meta = document.createElement("div");
  const actions = document.createElement("div");
  const openButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const itemCount = countDirectFolderItems(folder.id);

  row.className = "document-row document-folder-row";
  row.dataset.libraryType = "folder";
  row.dataset.libraryId = folder.id;
  row.dataset.dropFolderId = folder.id;
  details.className = "document-row-details";
  name.className = "document-name document-folder-name";
  icon.className = "material-symbols-outlined document-folder-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = "folder";
  label.textContent = folder.name || "Untitled folder";
  meta.className = "document-meta";
  meta.textContent = `Folder - ${itemCount} item${itemCount === 1 ? "" : "s"} - updated ${formatDateLabel(folder.updatedAt)}`;
  actions.className = "document-row-actions";

  openButton.className = "document-button";
  openButton.type = "button";
  openButton.textContent = "Open";
  openButton.addEventListener("click", () => setCurrentFolder(folder.id));

  menuButton.className = "document-menu-button";
  menuButton.type = "button";
  menuButton.setAttribute(
    "aria-label",
    `${folder.name || "Untitled folder"} actions`
  );
  menuButton.innerHTML = "&#8942;";
  menuButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openFolderActionMenu(folder.id, menuButton);
  });

  name.append(icon, label);
  details.append(name, meta);
  actions.append(openButton, menuButton);
  row.append(details, actions);
  addLibraryDragInteractions(row);

  return row;
}

function renderDocumentList() {
  closeDocumentMenus();
  documentList.textContent = "";
  state.currentFolderId = resolveExistingFolderId(state.currentFolderId);
  updateDocumentSubtitle();
  renderDocumentBreadcrumbs();

  const currentFolderId = state.currentFolderId;
  const folders = state.folders.filter(
    (folder) => resolveExistingFolderId(folder.parentId) === currentFolderId
  );
  const documents = state.documents.filter(
    (documentRecord) =>
      resolveExistingFolderId(documentRecord.folderId) === currentFolderId
  );

  if (folders.length === 0 && documents.length === 0) {
    const empty = document.createElement("div");

    empty.className = "document-empty";
    empty.textContent =
      currentFolderId
        ? "This folder is empty. Create a folder, create a drawing, or import a DinoDraw JSON file."
        : "No drawings yet. Create one or import a DinoDraw JSON file.";
    documentList.appendChild(empty);
    return;
  }

  folders.forEach((folder) => {
    documentList.appendChild(renderFolderRow(folder));
  });

  documents.forEach((documentRecord) => {
    const row = document.createElement("article");
    const details = document.createElement("div");
    const name = document.createElement("div");
    const icon = document.createElement("span");
    const label = document.createElement("span");
    const meta = document.createElement("div");
    const actions = document.createElement("div");
    const openButton = document.createElement("button");
    const menuButton = document.createElement("button");

    row.className = "document-row";
    row.classList.toggle("is-active", documentRecord.id === state.documentId);
    row.dataset.libraryType = "document";
    row.dataset.libraryId = documentRecord.id;
    details.className = "document-row-details";
    name.className = "document-name document-drawing-name";
    icon.className = "material-symbols-outlined document-drawing-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "article";
    label.textContent = documentRecord.name || "Untitled";
    meta.className = "document-meta";
    actions.className = "document-row-actions";
    const pageCount = (documentRecord.pages || []).length || 1;

    meta.textContent = `${pageCount} page${
      pageCount === 1 ? "" : "s"
    } - opened ${formatDateLabel(
      documentRecord.lastOpenedAt || documentRecord.updatedAt
    )} - edited ${formatDateLabel(documentRecord.updatedAt)}`;

    [
      [openButton, "Open"],
    ].forEach(([button, label]) => {
      button.className = "document-button";
      button.type = "button";
      button.textContent = label;
    });
    menuButton.className = "document-menu-button";
    menuButton.type = "button";
    menuButton.setAttribute(
      "aria-label",
      `${documentRecord.name || "Untitled"} actions`
    );
    menuButton.innerHTML = "&#8942;";

    openButton.addEventListener("click", () =>
      openDocument(documentRecord.id).catch((error) => {
        setSaveStatus("Open failed");
        console.error(error);
      })
    );
    menuButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openDocumentActionMenu(documentRecord.id, menuButton);
    });

    name.append(icon, label);
    details.append(name, meta);
    actions.append(openButton, menuButton);
    row.append(details, actions);
    addLibraryDragInteractions(row);
    documentList.appendChild(row);
  });
}

async function refreshDocuments() {
  try {
    const records = await Promise.all([getAllFolders(), getAllDocuments()]);

    state.folders = records[0];
    state.documents = records[1];
    renderDocumentList();
  } catch (error) {
    setSaveStatus("Storage unavailable");
    console.error(error);
  }
}

function scheduleDocumentSave(delay = 700) {
  if (state.isLoadingDocument || !state.documentId || state.pages.length === 0) {
    return;
  }

  window.clearTimeout(state.saveTimer);
  setSaveStatus("Saving...");
  state.saveTimer = window.setTimeout(() => {
    saveCurrentDocument();
  }, delay);
}

async function saveCurrentDocument() {
  if (state.isLoadingDocument || !state.documentId || state.pages.length === 0) {
    return;
  }

  if (state.isSavingDocument) {
    state.shouldSaveAgain = true;
    return state.savePromise;
  }

  window.clearTimeout(state.saveTimer);
  state.saveTimer = null;
  state.isSavingDocument = true;
  setSaveStatus("Saving...");

  state.savePromise = (async () => {
    try {
      const record = serializeCurrentDocument();

      await putDocument(record);
      state.documentUpdatedAt = record.updatedAt;
      setSaveStatus(`Saved ${formatDateLabel(record.updatedAt)}`);
      await refreshDocuments();
    } catch (error) {
      setSaveStatus("Save failed");
      console.error(error);
    } finally {
      state.isSavingDocument = false;
      state.savePromise = null;

      if (state.shouldSaveAgain) {
        state.shouldSaveAgain = false;
        scheduleDocumentSave();
      }
    }
  })();

  return state.savePromise;
}

async function saveDocumentNow() {
  if (!state.documentId) {
    setSaveStatus("No document");
    return;
  }

  await flushDocumentSave();
  await saveCurrentDocument();
}

async function flushDocumentSave() {
  while (state.saveTimer || state.savePromise) {
    if (state.saveTimer) {
      window.clearTimeout(state.saveTimer);
      state.saveTimer = null;
      await saveCurrentDocument();
    } else if (state.savePromise) {
      await state.savePromise;
    }
  }
}

function resetPageHistory(page) {
  page.history.undo = [];
  page.history.redo = [];
  pushHistorySnapshot(page);
}

async function loadDocument(record, shouldHideLibrary = true) {
  if (!record) {
    return;
  }

  await flushDocumentSave();
  state.isLoadingDocument = true;
  clearTemporaryCanvasState();
  state.documentId = record.id;
  state.documentName = record.name || "Untitled";
  state.documentCreatedAt = record.createdAt || new Date().toISOString();
  state.documentUpdatedAt = record.updatedAt || state.documentCreatedAt;
  state.documentLastOpenedAt = record.lastOpenedAt || state.documentUpdatedAt;
  state.documentFolderId = resolveExistingFolderId(record.folderId);
  applyDocumentSettings(record.settings || {});

  const savedPages = record.pages && record.pages.length
    ? record.pages
    : [{ background: "blank", drawing: "" }];

  state.pages = [];

  for (const savedPage of savedPages) {
    const page = await createPageFromSavedPage(savedPage);

    state.pages.push(page);
  }

  state.activePageIndex = Math.max(
    0,
    Math.min(Number(record.activePageIndex || 0), state.pages.length - 1)
  );
  state.pages.forEach(resetPageHistory);
  state.isLoadingDocument = false;

  updateDocumentSubtitle();
  updatePageControls();
  syncBackgroundInputs();
  renderWorkspace();
  setSaveStatus(`Saved ${formatDateLabel(state.documentUpdatedAt)}`);
  await refreshDocuments();

  if (shouldHideLibrary) {
    hideDocumentScreen();
  }
}

async function openDocument(id) {
  if (id === state.documentId) {
    await flushDocumentSave();
    hideDocumentScreen();
    return;
  }

  await flushDocumentSave();
  const record = await getDocument(id);

  if (record) {
    record.lastOpenedAt = new Date().toISOString();
    await putDocument(record);
  }

  await loadDocument(record);
}

async function createNewDocument() {
  await flushDocumentSave();
  const enteredName = await showTextDialog(
    "New Document",
    "Name this Dino Draw document.",
    "Untitled notebook"
  );

  if (enteredName === null) {
    return;
  }

  const name = enteredName && enteredName.trim()
    ? enteredName.trim()
    : "Untitled notebook";
  const record = createDocumentRecord(name, state.currentFolderId);

  record.lastOpenedAt = new Date().toISOString();
  await putDocument(record);
  await refreshDocuments();
  await loadDocument(record);
  scheduleDocumentSave(0);
}

async function createNewFolder() {
  await flushDocumentSave();
  const enteredName = await showTextDialog(
    "New Folder",
    `Create a folder in ${getFolderPathLabel(state.currentFolderId)}.`,
    "Untitled folder"
  );

  if (enteredName === null) {
    return;
  }

  const name = enteredName && enteredName.trim()
    ? enteredName.trim()
    : "Untitled folder";
  const record = createFolderRecord(name, state.currentFolderId);

  await putFolder(record);
  await refreshDocuments();
}

async function renameDocument(id) {
  await flushDocumentSave();
  const record = await getDocument(id);

  if (!record) {
    return;
  }

  const enteredName = await showTextDialog(
    "Rename Document",
    "Update this document name.",
    record.name || "Untitled"
  );
  const name = enteredName ? enteredName.trim() : "";

  if (!name || name === record.name) {
    return;
  }

  record.name = name;
  record.updatedAt = new Date().toISOString();
  await putDocument(record);

  if (state.documentId === id) {
    state.documentName = name;
    state.documentUpdatedAt = record.updatedAt;
    updateDocumentSubtitle();
    setSaveStatus(`Saved ${formatDateLabel(record.updatedAt)}`);
  }

  await refreshDocuments();
}

async function moveDocument(id) {
  await flushDocumentSave();
  const record = await getDocument(id);

  if (!record) {
    return;
  }

  const currentFolderId = resolveExistingFolderId(record.folderId);
  const destinationId = await showMoveDialog(
    "Move Document",
    `Choose a folder for "${record.name || "Untitled"}".`,
    getMoveDestinationOptions(null),
    currentFolderId
  );

  if (destinationId === undefined || destinationId === currentFolderId) {
    return;
  }

  record.folderId = resolveExistingFolderId(destinationId);
  record.updatedAt = new Date().toISOString();
  await putDocument(record);

  if (state.documentId === id) {
    state.documentFolderId = record.folderId;
    state.documentUpdatedAt = record.updatedAt;
    setSaveStatus(`Saved ${formatDateLabel(record.updatedAt)}`);
  }

  await refreshDocuments();
}

async function deleteDocument(id) {
  await flushDocumentSave();
  const record = await getDocument(id);

  if (!record) {
    return;
  }

  const shouldDelete = await showConfirmDialog(
    "Delete Document",
    `Delete "${record.name || "Untitled"}"?`,
    "Delete"
  );

  if (!shouldDelete) {
    return;
  }

  await deleteDocumentRecord(id);

  if (state.documentId === id) {
    window.clearTimeout(state.saveTimer);
    state.saveTimer = null;
    state.documentId = null;
    state.documentName = "";
    state.documentCreatedAt = null;
    state.documentUpdatedAt = null;
    state.documentLastOpenedAt = null;
    state.documentFolderId = null;
    state.pages = [];
    clearTemporaryCanvasState();
    updateDocumentSubtitle();
    updatePageControls();
    renderWorkspace();
  }

  await refreshDocuments();
  showDocumentScreen();
}

async function renameFolder(id) {
  await flushDocumentSave();
  const record = await getFolder(id);

  if (!record) {
    return;
  }

  const enteredName = await showTextDialog(
    "Rename Folder",
    "Update this folder name.",
    record.name || "Untitled folder"
  );
  const name = enteredName ? enteredName.trim() : "";

  if (!name || name === record.name) {
    return;
  }

  record.name = name;
  record.updatedAt = new Date().toISOString();
  await putFolder(record);
  await refreshDocuments();
}

async function moveFolder(id) {
  await flushDocumentSave();
  const record = await getFolder(id);

  if (!record) {
    return;
  }

  const currentParentId = resolveExistingFolderId(record.parentId);
  const destinationId = await showMoveDialog(
    "Move Folder",
    `Choose a parent folder for "${record.name || "Untitled folder"}".`,
    getMoveDestinationOptions(id),
    currentParentId
  );

  if (destinationId === undefined || destinationId === currentParentId) {
    return;
  }

  record.parentId = resolveExistingFolderId(destinationId);
  record.updatedAt = new Date().toISOString();
  await putFolder(record);
  await refreshDocuments();
}

async function deleteFolder(id) {
  await flushDocumentSave();
  const record = await getFolder(id);

  if (!record) {
    return;
  }

  const shouldDelete = await showConfirmDialog(
    "Delete Folder",
    `Delete "${record.name || "Untitled folder"}" and move its contents up one level?`,
    "Delete"
  );

  if (!shouldDelete) {
    return;
  }

  const parentId = resolveExistingFolderId(record.parentId);
  const childFolders = state.folders.filter(
    (folder) => normalizeFolderId(folder.parentId) === id
  );
  const childDocuments = state.documents.filter(
    (documentRecord) => resolveExistingFolderId(documentRecord.folderId) === id
  );
  const now = new Date().toISOString();

  for (const folder of childFolders) {
    folder.parentId = parentId;
    folder.updatedAt = now;
    await putFolder(folder);
  }

  for (const documentRecord of childDocuments) {
    documentRecord.folderId = parentId;
    documentRecord.updatedAt = now;
    await putDocument(documentRecord);

    if (state.documentId === documentRecord.id) {
      state.documentFolderId = parentId;
      state.documentUpdatedAt = now;
    }
  }

  await deleteFolderRecord(id);

  if (state.currentFolderId === id) {
    state.currentFolderId = parentId;
  }

  await refreshDocuments();
}

async function getRecordForExport(id) {
  if (id === state.documentId) {
    await flushDocumentSave();
    return serializeCurrentDocument();
  }

  return getDocument(id);
}

function createDinoDrawBlob(record) {
  const portableRecord = getPortableDocumentRecord(record);
  const exportRecord = {
    format: exportFormat,
    formatVersion: exportFormatVersion,
    exportedAt: new Date().toISOString(),
    document: portableRecord,
  };

  return {
    blob: new Blob([JSON.stringify(exportRecord)], {
      type: "application/json",
    }),
    filename: `${sanitizeFileName(portableRecord.name)}.dinodraw.json`,
    mimeType: "application/json",
  };
}

async function exportDocument(id) {
  const record = await getRecordForExport(id);

  if (!record) {
    return;
  }

  const file = createDinoDrawBlob(record);

  downloadBlob(file.blob, file.filename);
}

async function createFlattenedPageCanvas(savedPage) {
  const width = savedPage.width || canvas.width || window.innerWidth;
  const height = savedPage.height || canvas.height || window.innerHeight;
  const flattenedCanvas = document.createElement("canvas");
  const flattenedContext = flattenedCanvas.getContext("2d");
  const underImage = await loadImage(savedPage.underDrawing);
  const image = await loadImage(savedPage.drawing);

  flattenedCanvas.width = width;
  flattenedCanvas.height = height;
  drawBackground(
    { background: savedPage.background || "blank" },
    flattenedContext,
    width,
    height
  );

  if (underImage) {
    flattenedContext.drawImage(
      underImage,
      0,
      0,
      savedPage.width || underImage.width,
      savedPage.height || underImage.height,
      0,
      0,
      width,
      height
    );
  }

  if (image) {
    flattenedContext.drawImage(
      image,
      0,
      0,
      savedPage.width || image.width,
      savedPage.height || image.height,
      0,
      0,
      width,
      height
    );
  }

  return flattenedCanvas;
}

async function createPngZipBlob(record) {
  const files = [];

  for (let index = 0; index < record.pages.length; index += 1) {
    const pageCanvas = await createFlattenedPageCanvas(record.pages[index]);
    const pageNumber = formatPageNumber(index + 1);

    files.push({
      name: `page-${pageNumber}.png`,
      bytes: await canvasToPngBytes(pageCanvas),
    });
  }

  return {
    blob: createZipBlob(files),
    filename: `${sanitizeFileName(record.name)}-png-pages.zip`,
    mimeType: "application/zip",
    pageCount: files.length,
  };
}

async function exportPngZip(id) {
  const record = await getRecordForExport(id || state.documentId);

  if (!record || !record.pages || record.pages.length === 0) {
    setSaveStatus("No document");
    return;
  }

  setSaveStatus("Exporting PNGs...");
  const file = await createPngZipBlob(record);

  downloadBlob(file.blob, file.filename);
  setSaveStatus(
    `Exported ${file.pageCount} PNG${file.pageCount === 1 ? "" : "s"}`
  );
}

async function createPdfExportBlob(record) {
  const pageImages = [];

  for (let index = 0; index < record.pages.length; index += 1) {
    const pageCanvas = await createFlattenedPageCanvas(record.pages[index]);

    pageImages.push({
      index: index + 1,
      width: pageCanvas.width,
      height: pageCanvas.height,
      bytes: getCanvasRgbBytes(pageCanvas),
    });
  }

  return {
    blob: createPdfBlob(pageImages),
    filename: `${sanitizeFileName(record.name)}.pdf`,
    mimeType: "application/pdf",
    pageCount: pageImages.length,
  };
}

async function exportPdf(id) {
  const record = await getRecordForExport(id || state.documentId);

  if (!record || !record.pages || record.pages.length === 0) {
    setSaveStatus("No document");
    return;
  }

  setSaveStatus("Exporting PDF...");
  const file = await createPdfExportBlob(record);

  downloadBlob(file.blob, file.filename);
  setSaveStatus(
    `Exported ${file.pageCount} PDF page${file.pageCount === 1 ? "" : "s"}`
  );
}

function normalizeImportedDocument(parsed) {
  const isWrappedExport =
    parsed.format === exportFormat || parsed.format === legacyExportFormat;
  const source = isWrappedExport ? parsed.document : parsed;
  const now = new Date().toISOString();

  if (!source || !Array.isArray(source.pages)) {
    throw new Error("Unsupported document format.");
  }

  return {
    id: createId(),
    name: `${source.name || "Imported document"}`,
    folderId: resolveExistingFolderId(state.currentFolderId),
    createdAt: source.createdAt || now,
    updatedAt: now,
    lastOpenedAt: now,
    appVersion: APP_VERSION,
    activePageIndex: Number(source.activePageIndex || 0),
    settings: source.settings || getDocumentSettings(),
    pages: source.pages.map((page) => ({
      background: page.background || "blank",
      width: page.width || canvas.width || window.innerWidth,
      height: page.height || canvas.height || window.innerHeight,
      drawing: page.drawing || "",
      underDrawing: page.underDrawing || "",
    })),
  };
}

function readTextFile(file) {
  if (file.text) {
    return file.text();
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

async function importDocumentFile(file) {
  if (!file) {
    return;
  }

  try {
    const text = await readTextFile(file);
    const record = normalizeImportedDocument(JSON.parse(text));

    await putDocument(record);
    await refreshDocuments();
    await loadDocument(record);
  } catch (error) {
    setSaveStatus("Import failed");
    await showAlertDialog("Import Failed", "That file could not be imported.");
    console.error(error);
  } finally {
    importDocumentInput.value = "";
  }
}

function getCurrentViewportSize() {
  return {
    width: Math.max(1, Math.floor(canvas.width || window.innerWidth || 1)),
    height: Math.max(1, Math.floor(canvas.height || window.innerHeight || 1)),
  };
}

function normalizePageDimension(value, fallback) {
  const dimension = Math.floor(Number(value || fallback || 1));

  return Math.max(1, dimension);
}

function getPageWidth(page) {
  if (!page) {
    return getCurrentViewportSize().width;
  }

  return normalizePageDimension(page.width, page.layer.width);
}

function getPageHeight(page) {
  if (!page) {
    return getCurrentViewportSize().height;
  }

  return normalizePageDimension(page.height, page.layer.height);
}

function getMinPageZoom(page) {
  if (!page) {
    return 1;
  }

  return Math.min(1, canvas.height / getPageHeight(page));
}

function getPageZoom(page) {
  if (!page) {
    return 1;
  }

  const zoom = Number(page.zoom || 1);
  const minZoom = getMinPageZoom(page);

  return Math.min(
    maxPageZoom,
    Math.max(minZoom, isFinite(zoom) ? zoom : 1)
  );
}

function createPage(background = "blank", width, height) {
  const pageSize = getCurrentViewportSize();
  const pageWidth = normalizePageDimension(width, pageSize.width);
  const pageHeight = normalizePageDimension(height, pageSize.height);
  const underLayer = document.createElement("canvas");
  const layer = document.createElement("canvas");
  underLayer.width = pageWidth;
  underLayer.height = pageHeight;
  layer.width = pageWidth;
  layer.height = pageHeight;

  return {
    background,
    width: pageWidth,
    height: pageHeight,
    zoom: 1,
    panX: 0,
    panY: 0,
    underLayer,
    underContext: underLayer.getContext("2d"),
    layer,
    context: layer.getContext("2d"),
    history: {
      undo: [],
      redo: [],
    },
  };
}

function getActivePage() {
  return state.pages[state.activePageIndex];
}

function cloneCanvas(source) {
  const clone = document.createElement("canvas");
  clone.width = source.width;
  clone.height = source.height;
  clone.getContext("2d").drawImage(source, 0, 0);

  return clone;
}

function cloneNullableCanvas(source) {
  return source ? cloneCanvas(source) : null;
}

function createPageSnapshot(page) {
  return {
    background: page.background,
    width: getPageWidth(page),
    height: getPageHeight(page),
    underLayer: cloneCanvas(page.underLayer),
    layer: cloneCanvas(page.layer),
  };
}

function restorePageSnapshot(page, snapshot) {
  page.background = snapshot.background;
  const width = Math.max(
    getPageWidth(page),
    snapshot.width || 0,
    page.layer.width,
    snapshot.layer.width,
    snapshot.underLayer ? snapshot.underLayer.width : 0
  );
  const height = Math.max(
    getPageHeight(page),
    snapshot.height || 0,
    page.layer.height,
    snapshot.layer.height,
    snapshot.underLayer ? snapshot.underLayer.height : 0
  );

  page.width = width;
  page.height = height;
  page.underLayer.width = width;
  page.underLayer.height = height;
  page.underContext = page.underLayer.getContext("2d");
  page.underContext.clearRect(0, 0, page.underLayer.width, page.underLayer.height);
  if (snapshot.underLayer) {
    page.underContext.drawImage(snapshot.underLayer, 0, 0);
  }
  page.layer.width = width;
  page.layer.height = height;
  page.context = page.layer.getContext("2d");
  page.context.clearRect(0, 0, page.layer.width, page.layer.height);
  page.context.drawImage(snapshot.layer, 0, 0);
}

function pushHistorySnapshot(page = getActivePage()) {
  if (!page) {
    return;
  }

  page.history.undo.push(createPageSnapshot(page));
  page.history.redo = [];

  if (page.history.undo.length > historyLimit) {
    page.history.undo.shift();
  }

  updateHistoryControls();
  scheduleDocumentSave();
}

function updateHistoryControls() {
  const page = getActivePage();

  undoButton.disabled = !page || page.history.undo.length <= 1;
  redoButton.disabled = !page || page.history.redo.length === 0;
}

function getActivePreset() {
  return state.presets[state.activePresetIndex];
}

function getEditingPreset() {
  return state.presets[state.editingPresetIndex];
}

function savePresets() {
  try {
    localStorage.setItem("brushPresets", JSON.stringify(state.presets));
  } catch {
    return;
  }
}

function normalizeGlobalSettings(settings = {}) {
  const hasTouchDrawingSetting = Object.prototype.hasOwnProperty.call(
    settings,
    "touchDrawingEnabled"
  );
  const toolbarVisibility = settings.toolbarVisibility || {};

  return {
    touchDrawingEnabled: hasTouchDrawingSetting
      ? Boolean(settings.touchDrawingEnabled)
      : true,
    toolbarVisibility: {
      main: true,
      presets: toolbarVisibility.presets !== false,
      undo: toolbarVisibility.undo !== false,
      fullscreen: toolbarVisibility.fullscreen !== false,
    },
  };
}

function isRegularToolbarEnabled(key) {
  if (key === "main") {
    return true;
  }

  return Boolean(state.globalSettings.toolbarVisibility[key]);
}

function syncGlobalSettingsControls() {
  if (touchDrawingInput) {
    touchDrawingInput.checked = Boolean(state.globalSettings.touchDrawingEnabled);
  }

  toolbarVisibilityInputs.forEach((input) => {
    const key = input.dataset.toolbarVisibility;

    input.checked = isRegularToolbarEnabled(key);
    input.disabled = key === "main";
  });

  if (documentIntro) {
    documentIntro.classList.toggle(
      "is-hidden",
      Boolean(state.documentIntroDismissed)
    );
  }
}

function saveGlobalSettings() {
  try {
    localStorage.setItem(
      globalSettingsStorageKey,
      JSON.stringify(state.globalSettings)
    );
  } catch {
    return;
  }
}

function restoreGlobalSettings() {
  let savedSettings = null;

  try {
    savedSettings = localStorage.getItem(globalSettingsStorageKey);
  } catch {
    savedSettings = null;
  }

  if (savedSettings) {
    try {
      state.globalSettings = normalizeGlobalSettings(JSON.parse(savedSettings));
    } catch {
      state.globalSettings = normalizeGlobalSettings();
    }
  } else {
    state.globalSettings = normalizeGlobalSettings();
  }

  syncGlobalSettingsControls();
}

function updateGlobalSettings(settings = {}) {
  state.globalSettings = normalizeGlobalSettings({
    ...state.globalSettings,
    ...settings,
  });
  saveGlobalSettings();
  syncGlobalSettingsControls();
  updateToolbarVisibility();
}

function presetsMatch(preset, comparison) {
  return (
    preset &&
    comparison &&
    preset.color === comparison.color &&
    Number(preset.size) === comparison.size &&
    Number(preset.opacity) === comparison.opacity &&
    Boolean(preset.drawBehind) === comparison.drawBehind
  );
}

function restorePresets() {
  let savedPresets = null;

  try {
    savedPresets = localStorage.getItem("brushPresets");
  } catch {
    savedPresets = null;
  }

  if (!savedPresets) {
    state.presets = defaultPresets.map((preset) => ({ ...preset }));
    return;
  }

  try {
    const parsedPresets = JSON.parse(savedPresets);
    let didMigrateDefaultPresets = false;

    state.presets = defaultPresets.map((fallback, index) => {
      const savedPreset = parsedPresets[index] || {};

      if (presetsMatch(savedPreset, previousDefaultPresets[index])) {
        didMigrateDefaultPresets = true;
        return { ...fallback };
      }

      return {
        ...fallback,
        ...savedPreset,
      };
    });

    if (didMigrateDefaultPresets) {
      savePresets();
    }
  } catch {
    state.presets = defaultPresets.map((preset) => ({ ...preset }));
  }
}

function ensureVersionBadge() {
  document.title = `DinoDraw ${APP_VERSION}`;

  let badge = document.querySelector(".version-badge");
  const brandVersion = document.querySelector("[data-brand-version]");

  if (!badge) {
    badge = document.createElement("div");
    badge.className = "version-badge";
    badge.setAttribute("aria-label", "Version");
    document.body.appendChild(badge);
  }

  badge.textContent = APP_VERSION;

  if (brandVersion) {
    brandVersion.textContent = APP_VERSION;
  }

  Object.assign(badge.style, {
    position: "fixed",
    right: "12px",
    bottom: "12px",
    zIndex: "10",
    padding: "4px 8px",
    border: "1px solid #000000",
    borderRadius: "4px",
    background: "#ffffff",
    color: "#000000",
    fontSize: "12px",
    fontWeight: "700",
    lineHeight: "1",
    pointerEvents: "none",
    userSelect: "none",
  });
}

function drawBackground(page, targetContext, width, height) {
  const drawingContext = targetContext || context;
  const backgroundWidth = width || canvas.width;
  const backgroundHeight = height || canvas.height;

  drawingContext.fillStyle = "#ffffff";
  drawingContext.fillRect(0, 0, backgroundWidth, backgroundHeight);

  if (page.background === "ruled") {
    const lineCount = 24;
    const step = backgroundHeight / (lineCount + 1);

    drawingContext.strokeStyle = "#777777";
    drawingContext.lineWidth = 2;
    drawingContext.beginPath();

    for (let index = 1; index <= lineCount; index += 1) {
      const y = Math.round(step * index) + 0.5;
      drawingContext.moveTo(0, y);
      drawingContext.lineTo(backgroundWidth, y);
    }

    drawingContext.stroke();
  }

  if (page.background === "graph") {
    const smallStep = 32;
    const largeStep = smallStep * 4;

    drawingContext.lineWidth = 1;

    for (let x = 0; x <= backgroundWidth; x += smallStep) {
      drawingContext.strokeStyle = x % largeStep === 0 ? "#555555" : "#999999";
      drawingContext.lineWidth = x % largeStep === 0 ? 2 : 1;
      drawingContext.beginPath();
      drawingContext.moveTo(Math.round(x) + 0.5, 0);
      drawingContext.lineTo(Math.round(x) + 0.5, backgroundHeight);
      drawingContext.stroke();
    }

    for (let y = 0; y <= backgroundHeight; y += smallStep) {
      drawingContext.strokeStyle = y % largeStep === 0 ? "#555555" : "#999999";
      drawingContext.lineWidth = y % largeStep === 0 ? 2 : 1;
      drawingContext.beginPath();
      drawingContext.moveTo(0, Math.round(y) + 0.5);
      drawingContext.lineTo(backgroundWidth, Math.round(y) + 0.5);
      drawingContext.stroke();
    }
  }
}

function drawViewportBackground() {
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function clampPagePan(page) {
  if (!page) {
    return;
  }

  page.zoom = getPageZoom(page);

  const maxPanX = Math.max(0, getPageWidth(page) - canvas.width / page.zoom);
  const maxPanY = Math.max(0, getPageHeight(page) - canvas.height / page.zoom);
  const panX = Number(page.panX || 0);
  const panY = Number(page.panY || 0);

  page.panX = Math.min(maxPanX, Math.max(0, isFinite(panX) ? panX : 0));
  page.panY = Math.min(maxPanY, Math.max(0, isFinite(panY) ? panY : 0));
}

function getPageViewportTransform(page = getActivePage()) {
  if (!page) {
    return { x: 0, y: 0 };
  }

  clampPagePan(page);

  const pageWidth = getPageWidth(page);
  const pageHeight = getPageHeight(page);
  const zoom = getPageZoom(page);
  const scaledPageWidth = pageWidth * zoom;
  const scaledPageHeight = pageHeight * zoom;

  return {
    scale: zoom,
    x:
      canvas.width > scaledPageWidth
        ? Math.round((canvas.width - scaledPageWidth) / 2)
        : -page.panX * zoom,
    y:
      canvas.height > scaledPageHeight
        ? Math.round((canvas.height - scaledPageHeight) / 2)
        : -page.panY * zoom,
  };
}

function setVisibleContextPageTransform(page = getActivePage()) {
  const transform = getPageViewportTransform(page);

  context.setTransform(
    transform.scale,
    0,
    0,
    transform.scale,
    transform.x,
    transform.y
  );
}

function setLiveContextPageTransform(page = getActivePage()) {
  const transform = getPageViewportTransform(page);

  liveContext.setTransform(
    transform.scale,
    0,
    0,
    transform.scale,
    transform.x,
    transform.y
  );
}

function clearLiveCanvas() {
  liveContext.setTransform(1, 0, 0, 1, 0, 0);
  liveContext.clearRect(0, 0, liveCanvas.width, liveCanvas.height);
  liveContext.globalAlpha = 1;
  liveContext.globalCompositeOperation = "source-over";
  liveCanvas.classList.remove("is-active");
}

function renderPage() {
  const page = getActivePage();

  context.setTransform(1, 0, 0, 1, 0, 0);

  if (!page) {
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    return;
  }

  drawViewportBackground();
  setVisibleContextPageTransform(page);
  drawBackground(page, context, getPageWidth(page), getPageHeight(page));
  context.drawImage(page.underLayer, 0, 0);
  context.drawImage(page.layer, 0, 0);
}

function drawShapePath(targetContext, shape) {
  const width = Math.abs(shape.width);
  const height = Math.abs(shape.height);
  const left = shape.width < 0 ? shape.x + shape.width : shape.x;
  const top = shape.height < 0 ? shape.y + shape.height : shape.y;
  const centerX = left + width / 2;
  const centerY = top + height / 2;

  targetContext.translate(centerX, centerY);
  targetContext.rotate(shape.rotation);
  targetContext.beginPath();

  if (shape.type === "ellipse") {
    targetContext.ellipse(0, 0, width / 2, height / 2, 0, 0, Math.PI * 2);
  } else if (shape.type === "line") {
    targetContext.moveTo(-width / 2, -height / 2);
    targetContext.lineTo(width / 2, height / 2);
  } else if (shape.type === "triangle") {
    targetContext.moveTo(0, -height / 2);
    targetContext.lineTo(width / 2, height / 2);
    targetContext.lineTo(-width / 2, height / 2);
    targetContext.closePath();
  } else {
    targetContext.rect(-width / 2, -height / 2, width, height);
  }
}

function drawShape(targetContext, shape) {
  targetContext.save();
  drawShapePath(targetContext, shape);

  if (shape.fillEnabled && shape.type !== "line") {
    targetContext.fillStyle = shape.fillColor;
    targetContext.globalAlpha = 0.7;
    targetContext.fill();
    targetContext.globalAlpha = 1;
  }

  if (shape.strokeEnabled) {
    targetContext.lineWidth = shape.strokeWidth;
    targetContext.strokeStyle = shape.strokeColor;
    targetContext.lineCap = "round";
    targetContext.lineJoin = "round";
    targetContext.stroke();
  }

  targetContext.restore();
}

function getShapeBounds(shape) {
  const left = shape.width < 0 ? shape.x + shape.width : shape.x;
  const top = shape.height < 0 ? shape.y + shape.height : shape.y;
  const width = Math.abs(shape.width);
  const height = Math.abs(shape.height);

  return { left, top, width, height };
}

function normalizeRotation(rotation) {
  const fullTurn = Math.PI * 2;
  let normalized = rotation % fullTurn;

  if (normalized < 0) {
    normalized += fullTurn;
  }

  return normalized;
}

function degreesToRadians(degrees) {
  return normalizeRotation((degrees * Math.PI) / 180);
}

function radiansToDisplayDegrees(rotation) {
  return Math.round((normalizeRotation(rotation) * 180) / Math.PI) % 360;
}

function syncRotationInput(input, output, rotation) {
  const degrees = radiansToDisplayDegrees(rotation || 0);

  if (!input || document.activeElement === input) {
    if (output) {
      output.textContent = `${degrees}\u00b0`;
    }
    return;
  }

  input.value = String(degrees);

  if (output) {
    output.textContent = `${degrees}\u00b0`;
  }
}

function syncRotationInputs() {
  syncRotationInput(
    shapeRotationInput,
    shapeRotationOutput,
    state.pendingShape ? state.pendingShape.rotation : 0
  );
  syncRotationInput(
    imageRotationInput,
    imageRotationOutput,
    state.pendingImage ? state.pendingImage.rotation : 0
  );
  syncRotationInput(
    lassoRotationInput,
    lassoRotationOutput,
    state.selection ? state.selection.rotation : 0
  );
}

function syncProportionalResizeButton(button, isLocked) {
  const label = isLocked
    ? "Proportional resize locked"
    : "Free resize unlocked";

  if (!button) {
    return;
  }

  button.setAttribute("aria-label", label);
  button.setAttribute("aria-pressed", String(isLocked));
  button.dataset.tooltip = label;
}

function syncProportionalResizeButtons() {
  syncProportionalResizeButton(
    shapeProportionalResizeButton,
    !state.pendingShape || state.pendingShape.proportionalResize !== false
  );
  syncProportionalResizeButton(
    imageProportionalResizeButton,
    !state.pendingImage || state.pendingImage.proportionalResize !== false
  );
  syncProportionalResizeButton(
    lassoProportionalResizeButton,
    !state.selection || state.selection.proportionalResize !== false
  );
}

function normalizeRotationInput(input, output, rotation) {
  if (!input) {
    return;
  }

  const degrees = radiansToDisplayDegrees(rotation || 0);

  input.value = String(degrees);

  if (output) {
    output.textContent = `${degrees}\u00b0`;
  }
}

function setRotationFromSlider(input, output, setter) {
  const degrees = Number(input.value);

  if (!isFinite(degrees)) {
    return;
  }

  setter(degreesToRadians(degrees));

  if (output) {
    output.textContent = `${Math.round(degrees)}\u00b0`;
  }
}

function setRotationSliderValueFromPointer(input, event) {
  const rect = input.getBoundingClientRect();
  const min = Number(input.min || 0);
  const max = Number(input.max || 100);
  const step = Number(input.step || 1);
  const ratio = rect.width > 0
    ? Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width))
    : 0;
  const rawValue = min + (max - min) * ratio;
  const steppedValue = Math.round(rawValue / step) * step;

  input.value = String(Math.min(max, Math.max(min, steppedValue)));
}

function getBoxCenter(box) {
  return {
    x: box.x + box.width / 2,
    y: box.y + box.height / 2,
  };
}

function getBoxHandlePoint(box, point) {
  return getRotatedPoint(point, getBoxCenter(box), box.rotation || 0);
}

function getResizeHandle(box) {
  const point = getBoxHandlePoint(box, {
    x: box.x + box.width,
    y: box.y + box.height,
  });

  return {
    x: point.x,
    y: point.y,
    size: 18,
  };
}

function drawResizeHandle(handle) {
  context.fillStyle = "#ffffff";
  context.strokeStyle = "#000000";
  context.lineWidth = 2;
  context.fillRect(
    handle.x - handle.size / 2,
    handle.y - handle.size / 2,
    handle.size,
    handle.size
  );
  context.strokeRect(
    handle.x - handle.size / 2,
    handle.y - handle.size / 2,
    handle.size,
    handle.size
  );
}

function drawBoxOverlay(box, hasResizeHandle) {
  const center = getBoxCenter(box);
  const resizeHandle = hasResizeHandle ? getResizeHandle(box) : null;

  context.save();
  context.translate(center.x, center.y);
  context.rotate(box.rotation || 0);
  context.setLineDash([8, 6]);
  context.strokeStyle = "#000000";
  context.lineWidth = 2;
  context.strokeRect(-box.width / 2, -box.height / 2, box.width, box.height);
  context.restore();

  context.save();
  if (resizeHandle) {
    drawResizeHandle(resizeHandle);
  }
  context.restore();
}

function isResizeHandleHit(point, box) {
  const handle = getResizeHandle(box);

  return getDistance(point, handle) <= handle.size;
}

function isRotatedBoxHit(point, box) {
  const localPoint = getRotatedPoint(
    point,
    getBoxCenter(box),
    -(box.rotation || 0)
  );

  return (
    localPoint.x >= box.x &&
    localPoint.x <= box.x + box.width &&
    localPoint.y >= box.y &&
    localPoint.y <= box.y + box.height
  );
}

function getRotatedResizeMetrics(point, box) {
  const rotation = box.rotation || 0;
  const center = getBoxCenter(box);
  const anchor = getRotatedPoint({ x: box.x, y: box.y }, center, rotation);
  const axisX = { x: Math.cos(rotation), y: Math.sin(rotation) };
  const axisY = { x: -Math.sin(rotation), y: Math.cos(rotation) };
  const pointerDelta = {
    x: point.x - anchor.x,
    y: point.y - anchor.y,
  };

  return {
    anchor,
    axisX,
    axisY,
    widthAlongAxis: pointerDelta.x * axisX.x + pointerDelta.y * axisX.y,
    heightAlongAxis: pointerDelta.x * axisY.x + pointerDelta.y * axisY.y,
  };
}

function getResizedBoxFromMetrics(metrics, width, height) {
  const center = {
    x:
      metrics.anchor.x +
      (metrics.axisX.x * width) / 2 +
      (metrics.axisY.x * height) / 2,
    y:
      metrics.anchor.y +
      (metrics.axisX.y * width) / 2 +
      (metrics.axisY.y * height) / 2,
  };

  return {
    x: center.x - width / 2,
    y: center.y - height / 2,
    width,
    height,
  };
}

function getProportionalRotatedResize(point, box) {
  const metrics = getRotatedResizeMetrics(point, box);
  const minSize = 24;
  const minScale = Math.max(minSize / box.width, minSize / box.height);
  const requestedScale = Math.max(
    metrics.widthAlongAxis / box.width,
    metrics.heightAlongAxis / box.height
  );
  const scale = Math.max(minScale, requestedScale);
  const width = Math.round(box.width * scale);
  const height = Math.round(box.height * scale);

  return getResizedBoxFromMetrics(metrics, width, height);
}

function getFreeformRotatedResize(point, box) {
  const metrics = getRotatedResizeMetrics(point, box);
  const minSize = 12;
  const width = Math.max(minSize, Math.round(metrics.widthAlongAxis));
  const height = Math.max(minSize, Math.round(metrics.heightAlongAxis));

  return getResizedBoxFromMetrics(metrics, width, height);
}

function getRotatedResize(point, box, isProportional) {
  return isProportional
    ? getProportionalRotatedResize(point, box)
    : getFreeformRotatedResize(point, box);
}

function drawPendingShapeOverlay() {
  if (!state.pendingShape) {
    return;
  }

  const bounds = getShapeBounds(state.pendingShape);

  drawShape(context, state.pendingShape);
  drawBoxOverlay(
    {
      x: bounds.left,
      y: bounds.top,
      width: bounds.width,
      height: bounds.height,
      rotation: state.pendingShape.rotation,
    },
    true
  );
}

function getImageCenter(imageItem) {
  return getBoxCenter(imageItem);
}

function createTransformPreviewCanvas(source, sourceWidth, sourceHeight) {
  const width = Math.max(1, Math.round(sourceWidth || source.width || 1));
  const height = Math.max(1, Math.round(sourceHeight || source.height || 1));
  const scale = Math.min(
    1,
    transformPreviewMaxDimension / Math.max(width, height)
  );
  const preview = document.createElement("canvas");
  const previewContext = preview.getContext("2d");

  preview.width = Math.max(1, Math.round(width * scale));
  preview.height = Math.max(1, Math.round(height * scale));
  previewContext.drawImage(source, 0, 0, preview.width, preview.height);

  return preview;
}

function createSelectionPreviewCanvas(selection) {
  const width = Math.max(
    1,
    selection.underCanvas ? selection.underCanvas.width : 0,
    selection.canvas ? selection.canvas.width : 0,
    Math.round(selection.width || 1)
  );
  const height = Math.max(
    1,
    selection.underCanvas ? selection.underCanvas.height : 0,
    selection.canvas ? selection.canvas.height : 0,
    Math.round(selection.height || 1)
  );
  const merged = document.createElement("canvas");
  const mergedContext = merged.getContext("2d");

  merged.width = width;
  merged.height = height;

  if (selection.underCanvas) {
    mergedContext.drawImage(selection.underCanvas, 0, 0, width, height);
  }

  if (selection.canvas) {
    mergedContext.drawImage(selection.canvas, 0, 0, width, height);
  }

  return createTransformPreviewCanvas(merged, width, height);
}

function drawCanvasImage(targetContext, imageItem) {
  if (!imageItem || !imageItem.image) {
    return;
  }

  const center = getImageCenter(imageItem);

  targetContext.save();
  targetContext.translate(center.x, center.y);
  targetContext.rotate(imageItem.rotation);
  targetContext.drawImage(
    imageItem.image,
    -imageItem.width / 2,
    -imageItem.height / 2,
    imageItem.width,
    imageItem.height
  );
  targetContext.restore();
}

function drawPendingImageOverlay() {
  if (!state.pendingImage) {
    return;
  }

  const imageItem = state.pendingImage;
  const isResizingImage =
    state.imageInteraction && state.imageInteraction.mode === "resize";
  const previewImage = isResizingImage
    ? state.imageInteraction.previewCanvas
    : null;

  if (previewImage) {
    drawCanvasImage(context, { ...imageItem, image: previewImage });
  } else if (!isResizingImage) {
    drawCanvasImage(context, imageItem);
  }
  drawBoxOverlay(imageItem, true);
}

function drawLassoPathOverlay() {
  if (state.lassoPath.length < 2) {
    return;
  }

  context.save();
  context.setLineDash([7, 5]);
  context.strokeStyle = "#000000";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(state.lassoPath[0].x, state.lassoPath[0].y);

  state.lassoPath.slice(1).forEach((point) => {
    context.lineTo(point.x, point.y);
  });

  context.stroke();
  context.restore();
}

function drawLassoPreviewSegment(from, to) {
  context.save();
  setVisibleContextPageTransform();
  context.setLineDash([7, 5]);
  context.lineDashOffset = -state.liveLassoDashLength;
  context.strokeStyle = "#000000";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(from.x, from.y);
  context.lineTo(to.x, to.y);
  context.stroke();
  context.restore();
  state.liveLassoDashLength =
    (state.liveLassoDashLength + getDistance(from, to)) % 12;
}

function drawSelectionContent(targetContext, selection, sourceCanvas) {
  if (!sourceCanvas) {
    return;
  }

  const center = getBoxCenter(selection);

  targetContext.save();
  targetContext.translate(center.x, center.y);
  targetContext.rotate(selection.rotation || 0);
  targetContext.drawImage(
    sourceCanvas,
    -selection.width / 2,
    -selection.height / 2,
    selection.width,
    selection.height
  );
  targetContext.restore();
}

function drawSelectionOverlay() {
  if (!state.selection) {
    return;
  }

  const isResizingSelection =
    state.selectionInteraction &&
    state.selectionInteraction.mode === "resize";
  const previewCanvas = isResizingSelection
    ? state.selectionInteraction.previewCanvas
    : null;

  if (previewCanvas) {
    drawSelectionContent(context, state.selection, previewCanvas);
  } else if (!isResizingSelection) {
    drawSelectionContent(context, state.selection, state.selection.underCanvas);
    drawSelectionContent(context, state.selection, state.selection.canvas);
  }
  drawBoxOverlay(
    {
      x: state.selection.x,
      y: state.selection.y,
      width: state.selection.width,
      height: state.selection.height,
      rotation: state.selection.rotation,
    },
    true
  );
}

function renderWorkspace() {
  renderPage();
  drawSelectionOverlay();
  drawPendingShapeOverlay();
  drawPendingImageOverlay();
  drawLassoPathOverlay();
}

function hasSelectionClipboard() {
  return Boolean(
    state.selectionClipboard &&
      (state.selectionClipboard.underCanvas || state.selectionClipboard.canvas)
  );
}

function updateCanvasContextMenuActions() {
  if (lassoPasteButton) {
    lassoPasteButton.disabled =
      !hasSelectionClipboard() || !state.canvasContextMenuPoint;
  }
}

function closeCanvasContextMenu() {
  if (canvasContextMenu) {
    canvasContextMenu.classList.add("is-hidden");
  }

  state.canvasContextMenuPoint = null;
  updateCanvasContextMenuActions();
}

function getClampedMenuPosition(menu, clientPoint) {
  const margin = 8;
  const rect = menu.getBoundingClientRect();
  const left = Math.min(
    Math.max(margin, clientPoint.x),
    Math.max(margin, window.innerWidth - rect.width - margin)
  );
  const top = Math.min(
    Math.max(margin, clientPoint.y),
    Math.max(margin, window.innerHeight - rect.height - margin)
  );

  return { left, top };
}

function openCanvasContextMenu(clientPoint, pagePoint) {
  if (!canvasContextMenu || !hasSelectionClipboard()) {
    return false;
  }

  if (!isPointInsidePage(pagePoint)) {
    closeCanvasContextMenu();
    return false;
  }

  state.canvasContextMenuPoint = pagePoint;
  canvasContextMenu.classList.remove("is-hidden");
  canvasContextMenu.style.left = "0px";
  canvasContextMenu.style.top = "0px";

  const position = getClampedMenuPosition(canvasContextMenu, clientPoint);

  canvasContextMenu.style.left = `${position.left}px`;
  canvasContextMenu.style.top = `${position.top}px`;
  updateCanvasContextMenuActions();
  hideToolbarTooltip();

  return true;
}

function updateActionToolbar() {
  const hasShape = Boolean(state.pendingShape);
  const hasImage = Boolean(state.pendingImage);
  const hasSelection = Boolean(state.selection);

  shapeActionToolbar.classList.toggle("is-hidden", !hasShape);
  imageActionToolbar.classList.toggle("is-hidden", !hasImage);
  lassoActionToolbar.classList.toggle("is-hidden", !hasSelection);
  if (lassoCopyButton) {
    lassoCopyButton.disabled = !hasSelection;
  }
  syncRotationInputs();
  syncProportionalResizeButtons();
  updateCanvasContextMenuActions();
}

function updateToolbarVisibility() {
  const label = state.toolbarsHidden ? "Show toolbars" : "Hide toolbars";
  const showEnabledToolbars = !state.toolbarsHidden;

  appShell.classList.toggle("are-toolbars-hidden", state.toolbarsHidden);
  toolbar.classList.toggle("is-disabled-by-settings", false);
  presetToolbar.classList.toggle(
    "is-hidden",
    state.tool !== "draw" ||
      !showEnabledToolbars ||
      !isRegularToolbarEnabled("presets")
  );
  undoToolbar.classList.toggle(
    "is-disabled-by-settings",
    !showEnabledToolbars || !isRegularToolbarEnabled("undo")
  );
  fullscreenToolbar.classList.toggle(
    "is-disabled-by-settings",
    !showEnabledToolbars || !isRegularToolbarEnabled("fullscreen")
  );
  toolbarVisibilityButton.setAttribute("aria-label", label);
  toolbarVisibilityButton.dataset.tooltip = label;
  toolbarVisibilityButton.setAttribute(
    "aria-pressed",
    String(state.toolbarsHidden)
  );

  if (toolbarVisibilityIcon) {
    toolbarVisibilityIcon.textContent = state.toolbarsHidden
      ? "keyboard_arrow_down"
      : "keyboard_arrow_up";
  }
}

function toggleToolbarVisibility() {
  hideToolbarTooltip();
  state.toolbarsHidden = !state.toolbarsHidden;
  updateToolbarVisibility();
}

function isHorizontalToggleEdge(edge) {
  return edge === "top" || edge === "bottom";
}

function clampToolbarToggleOffset(edge, offset) {
  const margin = 8;
  const halfSize = isHorizontalToggleEdge(edge) ? 29 : 22;
  const viewportSize = isHorizontalToggleEdge(edge)
    ? window.innerWidth
    : window.innerHeight;
  const minOffset = margin + halfSize;
  const maxOffset = viewportSize - margin - halfSize;

  if (maxOffset < minOffset) {
    return viewportSize / 2;
  }

  return Math.min(Math.max(minOffset, offset), maxOffset);
}

function saveToolbarTogglePosition(edge, offset) {
  try {
    localStorage.setItem(
      toolbarTogglePositionStorageKey,
      JSON.stringify({ edge, offset })
    );
  } catch {
    return;
  }
}

function setToolbarTogglePosition(edge, offset, shouldSave = false) {
  const nextEdge = edge || "top";
  const position = clampToolbarToggleOffset(nextEdge, offset);

  toolbarToggle.dataset.edge = nextEdge;
  toolbarToggle.style.left = "auto";
  toolbarToggle.style.right = "auto";
  toolbarToggle.style.top = "auto";
  toolbarToggle.style.bottom = "auto";

  if (nextEdge === "top") {
    toolbarToggle.style.left = `${position}px`;
    toolbarToggle.style.top = "env(safe-area-inset-top)";
  } else if (nextEdge === "right") {
    toolbarToggle.style.right = "env(safe-area-inset-right)";
    toolbarToggle.style.top = `${position}px`;
  } else if (nextEdge === "bottom") {
    toolbarToggle.style.left = `${position}px`;
    toolbarToggle.style.bottom = "env(safe-area-inset-bottom)";
  } else {
    toolbarToggle.style.left = "env(safe-area-inset-left)";
    toolbarToggle.style.top = `${position}px`;
  }

  if (shouldSave) {
    saveToolbarTogglePosition(nextEdge, position);
  }

  return {
    edge: nextEdge,
    offset: position,
  };
}

function restoreToolbarTogglePosition() {
  let savedPosition = null;

  try {
    savedPosition = localStorage.getItem(toolbarTogglePositionStorageKey);
  } catch {
    return false;
  }

  if (!savedPosition) {
    return false;
  }

  try {
    const position = JSON.parse(savedPosition);

    if (typeof position.centerX === "number" && isFinite(position.centerX)) {
      setToolbarTogglePosition("top", position.centerX);
      return true;
    }

    if (
      ["top", "right", "bottom", "left"].indexOf(position.edge) === -1 ||
      typeof position.offset !== "number" ||
      !isFinite(position.offset)
    ) {
      return false;
    }

    setToolbarTogglePosition(position.edge, position.offset);
    return true;
  } catch {
    try {
      localStorage.removeItem(toolbarTogglePositionStorageKey);
    } catch {
      return false;
    }
  }

  return false;
}

function setDefaultToolbarTogglePosition() {
  setToolbarTogglePosition("top", window.innerWidth / 2);
}

function reclampToolbarTogglePosition() {
  const rect = toolbarToggle.getBoundingClientRect();
  const edge = toolbarToggle.dataset.edge || "top";
  const offset = isHorizontalToggleEdge(edge)
    ? rect.left + rect.width / 2
    : rect.top + rect.height / 2;

  setToolbarTogglePosition(edge, offset, true);
}

function getToolbarToggleEdgeFromPointer(point, currentEdge) {
  const cornerSize = 34;

  if (currentEdge === "top") {
    if (point.x >= window.innerWidth - cornerSize) {
      return "right";
    }
    if (point.x <= cornerSize) {
      return "left";
    }
    return "top";
  }

  if (currentEdge === "right") {
    if (point.y >= window.innerHeight - cornerSize) {
      return "bottom";
    }
    if (point.y <= cornerSize) {
      return "top";
    }
    return "right";
  }

  if (currentEdge === "bottom") {
    if (point.x <= cornerSize) {
      return "left";
    }
    if (point.x >= window.innerWidth - cornerSize) {
      return "right";
    }
    return "bottom";
  }

  if (point.y <= cornerSize) {
    return "top";
  }
  if (point.y >= window.innerHeight - cornerSize) {
    return "bottom";
  }
  return "left";
}

function getToolbarToggleOffsetFromPointer(edge, point) {
  return isHorizontalToggleEdge(edge) ? point.x : point.y;
}

function cancelCanvasPasteLongPress() {
  if (!state.canvasPasteLongPress) {
    return;
  }

  window.clearTimeout(state.canvasPasteLongPress.timer);
  state.canvasPasteLongPress = null;
}

function resetActiveLassoGestureForMenu(pointerId) {
  if (state.activePointerId !== pointerId) {
    return;
  }

  if (canvas.hasPointerCapture && canvas.hasPointerCapture(pointerId)) {
    canvas.releasePointerCapture(pointerId);
  }

  if (
    state.selection &&
    state.selectionInteraction &&
    state.selectionInteraction.startSelection
  ) {
    state.selection = {
      ...state.selection,
      ...state.selectionInteraction.startSelection,
    };
  }

  state.isDrawing = false;
  state.activePointerId = null;
  state.activePointerType = "";
  state.activeStrokeSnapshot = null;
  state.lastPoint = null;
  state.canvasRect = null;
  state.canvasTransform = null;
  state.lastLiveInputTimestamp = 0;
  state.selectionInteraction = null;
  state.lassoPath = [];
  state.liveLassoDashLength = 0;
  clearLiveCanvas();
  updateActionToolbar();
  renderWorkspace();
}

function canStartCanvasPasteLongPress(event) {
  return (
    hasSelectionClipboard() &&
    state.tool === "lasso" &&
    event.isPrimary !== false &&
    event.button <= 0
  );
}

function startCanvasPasteLongPress(event) {
  closeCanvasContextMenu();

  if (!canStartCanvasPasteLongPress(event)) {
    return;
  }

  const clientPoint = { x: event.clientX, y: event.clientY };
  const pagePoint = getPagePointFromClientPoint(clientPoint);

  if (!isPointInsidePage(pagePoint)) {
    return;
  }

  cancelCanvasPasteLongPress();
  state.canvasPasteLongPress = {
    pointerId: event.pointerId,
    clientPoint,
    pagePoint,
    timer: window.setTimeout(() => {
      const press = state.canvasPasteLongPress;

      if (!press || press.pointerId !== event.pointerId) {
        return;
      }

      state.canvasPasteLongPress = null;
      resetActiveLassoGestureForMenu(press.pointerId);
      openCanvasContextMenu(press.clientPoint, press.pagePoint);
    }, canvasPasteLongPressDelay),
  };
}

function updateCanvasPasteLongPress(event) {
  const press = state.canvasPasteLongPress;

  if (!press || press.pointerId !== event.pointerId) {
    return;
  }

  const distance = getDistance(press.clientPoint, {
    x: event.clientX,
    y: event.clientY,
  });

  if (distance > canvasPasteLongPressMoveTolerance) {
    cancelCanvasPasteLongPress();
  }
}

function handleCanvasContextMenu(event) {
  const clientPoint = { x: event.clientX, y: event.clientY };
  const pagePoint = getPagePointFromClientPoint(clientPoint);

  if (event.cancelable) {
    event.preventDefault();
  }

  cancelCanvasPasteLongPress();
  openCanvasContextMenu(clientPoint, pagePoint);
}

function closeCanvasContextMenuFromDocument(event) {
  if (!event.target.closest("[data-canvas-context-menu]")) {
    closeCanvasContextMenu();
  }
}

function clearTemporaryCanvasState() {
  cancelCanvasPasteLongPress();
  closeCanvasContextMenu();
  state.pendingShape = null;
  state.shapeInteraction = null;
  state.pendingImage = null;
  state.imageInteraction = null;
  state.lassoPath = [];
  state.selection = null;
  state.selectionInteraction = null;
  state.hasLiveStroke = false;
  state.liveStrokePreset = null;
  state.liveStrokePoints = [];
  state.liveLassoDashLength = 0;
  clearLiveCanvas();
  state.eraserPreview = null;
  state.viewportTouchPointers.clear();
  state.panGesture = null;
  window.clearTimeout(state.eraserPreviewTimer);
  updateActionToolbar();
}

function restoreFloatingSelectionOrigin() {
  if (!state.selection || !state.selection.beforeSnapshot) {
    return false;
  }

  restorePageSnapshot(getActivePage(), state.selection.beforeSnapshot);
  clearTemporaryCanvasState();
  syncBackgroundInputs();
  renderWorkspace();
  updateHistoryControls();

  return true;
}

function undoPageHistory() {
  const page = getActivePage();

  if (!page || page.history.undo.length <= 1) {
    return;
  }

  page.history.redo.push(page.history.undo.pop());
  restorePageSnapshot(page, page.history.undo[page.history.undo.length - 1]);
  syncBackgroundInputs();
  renderWorkspace();
  updateHistoryControls();
  scheduleDocumentSave();
}

function redoPageHistory() {
  const page = getActivePage();

  if (!page || page.history.redo.length === 0) {
    return;
  }

  const snapshot = page.history.redo.pop();

  page.history.undo.push(snapshot);
  restorePageSnapshot(page, snapshot);
  syncBackgroundInputs();
  renderWorkspace();
  updateHistoryControls();
  scheduleDocumentSave();
}

function undo() {
  if (state.pendingShape) {
    deletePendingShape();
    return;
  }

  if (state.pendingImage) {
    deletePendingImage();
    return;
  }

  if (restoreFloatingSelectionOrigin()) {
    return;
  }

  clearTemporaryCanvasState();
  undoPageHistory();
}

function redo() {
  clearTemporaryCanvasState();
  redoPageHistory();
}

function updateFullscreenButton() {
  const isFullscreen = Boolean(document.fullscreenElement);

  fullscreenButton.setAttribute(
    "aria-label",
    isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
  );
  fullscreenButton.dataset.tooltip = isFullscreen
    ? "Exit fullscreen"
    : "Enter fullscreen";
  fullscreenButton.removeAttribute("title");
  const icon = fullscreenButton.querySelector(".fullscreen-icon");

  if (icon) {
    icon.textContent = isFullscreen ? "fullscreen_exit" : "fullscreen";
  }
}

function toggleFullscreen() {
  if (document.fullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    return;
  }

  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
}

function drawEraserPreview() {
  if (!state.eraserPreview) {
    return;
  }

  context.save();
  context.lineCap = "round";
  context.lineJoin = "round";
  context.strokeStyle = "#000000";
  context.fillStyle = "#000000";
  context.globalAlpha = 0.18;
  context.lineWidth = state.eraserPreview.size;
  context.beginPath();
  context.moveTo(state.eraserPreview.from.x, state.eraserPreview.from.y);
  context.lineTo(state.eraserPreview.to.x, state.eraserPreview.to.y);
  context.stroke();
  context.beginPath();
  context.arc(
    state.eraserPreview.to.x,
    state.eraserPreview.to.y,
    state.eraserPreview.size / 2,
    0,
    Math.PI * 2
  );
  context.fill();

  context.restore();
}

function renderWithPreview() {
  state.renderFrame = null;
  renderPage();
  drawEraserPreview();
}

function requestRenderWithPreview() {
  if (state.renderFrame) {
    return;
  }

  state.renderFrame = window.requestAnimationFrame(renderWithPreview);
}

function scheduleEraserPreviewClear() {
  window.clearTimeout(state.eraserPreviewTimer);

  state.eraserPreviewTimer = window.setTimeout(() => {
    state.eraserPreview = null;
    renderPage();
  }, eraserPreviewDuration);
}

function addEraserPreviewSegment(from, to) {
  state.eraserPreview = {
    from,
    to,
    size: brush.eraseSize,
  };

  requestRenderWithPreview();
  scheduleEraserPreviewClear();
}

function resizeCanvas() {
  const pixelRatio = canvasPixelRatio;
  const width = Math.floor(window.innerWidth * pixelRatio);
  const height = Math.floor(window.innerHeight * pixelRatio);

  canvas.width = width;
  canvas.height = height;
  liveCanvas.width = width;
  liveCanvas.height = height;

  state.pages.forEach(clampPagePan);
  clearLiveCanvas();
  renderWorkspace();
}

function setTool(tool) {
  if (tool !== "shape" && state.pendingShape) {
    commitPendingShape();
  }

  if (state.pendingImage) {
    commitPendingImage();
  }

  if (tool !== "lasso" && state.selection) {
    commitSelection();
  }

  state.tool = tool;
  state.strokeTool = tool;
  updateToolbarVisibility();

  if (tool === "draw") {
    reclampPresetToolbarPosition();
  }

  toolButtons.forEach((button) => {
    const isActive = button.dataset.tool === tool;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  canvas.style.cursor = tool === "erase" ? "cell" : "crosshair";

  if (tool === "shape") {
    openShapeSettings();
  }

  updateActionToolbar();
  renderWorkspace();
}

function hasPointerButton(event, buttonMask) {
  const buttons = event.buttons || 0;

  return (buttons & buttonMask) === buttonMask;
}

function isPenButtonEraseEvent(event) {
  if (event.pointerType !== "pen") {
    return false;
  }

  return (
    event.button === 1 ||
    event.button === 2 ||
    event.button === 5 ||
    hasPointerButton(event, 2) ||
    hasPointerButton(event, 4) ||
    hasPointerButton(event, 32)
  );
}

function isTemporaryEraseEvent(event) {
  const isSecondaryButton =
    event.button === 2 || hasPointerButton(event, 2);
  const isPenEraser = event.button === 5 || hasPointerButton(event, 32);

  return isPenEraser || isSecondaryButton || isPenButtonEraseEvent(event);
}

function getStrokeTool(event) {
  return isTemporaryEraseEvent(event) ? "erase" : state.tool;
}

function canStartStroke(event) {
  if ([0, 2, 5].includes(event.button)) {
    return true;
  }

  return isPenButtonEraseEvent(event);
}

function getPoint(event) {
  const rect = state.canvasRect || canvas.getBoundingClientRect();
  const transform = state.canvasTransform || getPageViewportTransform();

  return {
    x: (event.clientX - rect.left - transform.x) / transform.scale,
    y: (event.clientY - rect.top - transform.y) / transform.scale,
  };
}

function getPagePointFromClientPoint(point) {
  const rect = canvas.getBoundingClientRect();
  const transform = getPageViewportTransform();

  return {
    x: (point.x - rect.left - transform.x) / transform.scale,
    y: (point.y - rect.top - transform.y) / transform.scale,
  };
}

function getViewportPointFromClientPoint(point) {
  const rect = canvas.getBoundingClientRect();

  return {
    x: point.x - rect.left,
    y: point.y - rect.top,
  };
}

function viewportPointToPagePoint(point, page = getActivePage()) {
  const transform = getPageViewportTransform(page);

  return {
    x: (point.x - transform.x) / transform.scale,
    y: (point.y - transform.y) / transform.scale,
  };
}

function isPointInsidePage(point, page = getActivePage()) {
  return (
    page &&
    point.x >= 0 &&
    point.y >= 0 &&
    point.x <= getPageWidth(page) &&
    point.y <= getPageHeight(page)
  );
}

function rememberTouchPointer(event) {
  if (event.pointerType !== "touch") {
    return;
  }

  state.viewportTouchPointers.set(event.pointerId, {
    x: event.clientX,
    y: event.clientY,
  });
}

function forgetTouchPointer(event) {
  if (event.pointerType !== "touch") {
    return;
  }

  state.viewportTouchPointers.delete(event.pointerId);
}

function getTouchPointerCenter() {
  const points = Array.from(state.viewportTouchPointers.values());

  if (points.length === 0) {
    return null;
  }

  const total = points.reduce(
    (sum, point) => ({
      x: sum.x + point.x,
      y: sum.y + point.y,
    }),
    { x: 0, y: 0 }
  );

  return {
    x: total.x / points.length,
    y: total.y / points.length,
  };
}

function getTouchPointerDistance() {
  const points = Array.from(state.viewportTouchPointers.values());

  if (points.length < 2) {
    return 0;
  }

  return getDistance(points[0], points[1]);
}

function setPagePan(page, panX, panY) {
  if (!page) {
    return;
  }

  page.panX = panX;
  page.panY = panY;
  clampPagePan(page);
}

function setPageZoomAroundViewportPoint(page, zoom, viewportPoint) {
  if (!page) {
    return;
  }

  const focusPoint = viewportPointToPagePoint(viewportPoint, page);
  const nextZoom = Math.min(maxPageZoom, Math.max(getMinPageZoom(page), zoom));

  page.zoom = nextZoom;
  setPagePan(
    page,
    focusPoint.x - viewportPoint.x / nextZoom,
    focusPoint.y - viewportPoint.y / nextZoom
  );
}

function cancelActiveTouchActionForPan() {
  if (!state.isDrawing || state.activePointerType !== "touch") {
    return;
  }

  if (
    state.activePointerId !== null &&
    canvas.hasPointerCapture(state.activePointerId)
  ) {
    canvas.releasePointerCapture(state.activePointerId);
  }

  if (state.activeStrokeSnapshot) {
    restorePageSnapshot(getActivePage(), state.activeStrokeSnapshot);
  }

  if (
    state.shapeInteraction &&
    state.shapeInteraction.mode === "create"
  ) {
    state.pendingShape = null;
  }

  state.isDrawing = false;
  state.activePointerId = null;
  state.activePointerType = "";
  state.activeStrokeSnapshot = null;
  state.lastPoint = null;
  state.canvasRect = null;
  state.canvasTransform = null;
  state.lastLiveInputTimestamp = 0;
  state.hasLiveStroke = false;
  state.liveStrokePreset = null;
  state.liveStrokePoints = [];
  state.strokeTool = state.tool;
  state.imageInteraction = null;
  state.shapeInteraction = null;
  state.selectionInteraction = null;
  state.lassoPath = [];
  state.liveLassoDashLength = 0;
  clearLiveCanvas();
  updateActionToolbar();
  renderWorkspace();
}

function startViewportPanGesture(event) {
  const page = getActivePage();
  const center = getTouchPointerCenter();
  const distance = getTouchPointerDistance();

  if (!page || !center) {
    return;
  }

  cancelActiveTouchActionForPan();
  clampPagePan(page);
  state.panGesture = {
    startCenter: center,
    startDistance: distance,
    startZoom: getPageZoom(page),
    startPanX: page.panX || 0,
    startPanY: page.panY || 0,
  };

  if (event.cancelable) {
    event.preventDefault();
  }
}

function handleTouchPointerDownForPan(event) {
  rememberTouchPointer(event);

  if (event.pointerType !== "touch" || state.viewportTouchPointers.size < 2) {
    return false;
  }

  startViewportPanGesture(event);
  return Boolean(state.panGesture);
}

function handleTouchPointerMoveForPan(event) {
  if (event.pointerType !== "touch") {
    return false;
  }

  rememberTouchPointer(event);

  if (!state.panGesture) {
    return false;
  }

  const page = getActivePage();
  const center = getTouchPointerCenter();
  const distance = getTouchPointerDistance();

  if (!page || !center) {
    return false;
  }

  const viewportCenter = getViewportPointFromClientPoint(center);

  if (distance > 0 && state.panGesture.startDistance > 0) {
    const zoom =
      state.panGesture.startZoom *
      (distance / state.panGesture.startDistance);

    setPageZoomAroundViewportPoint(page, zoom, viewportCenter);
  }

  setPagePan(
    page,
    page.panX - (center.x - state.panGesture.startCenter.x) / getPageZoom(page),
    page.panY - (center.y - state.panGesture.startCenter.y) / getPageZoom(page)
  );
  state.panGesture.startCenter = center;

  if (event.cancelable) {
    event.preventDefault();
  }

  renderWorkspace();
  return true;
}

function handleTouchPointerEndForPan(event) {
  const wasPanning = Boolean(state.panGesture);

  forgetTouchPointer(event);

  if (!wasPanning) {
    return false;
  }

  if (state.viewportTouchPointers.size >= 2) {
    const page = getActivePage();
    const center = getTouchPointerCenter();

    if (page && center) {
      clampPagePan(page);
      state.panGesture = {
        startCenter: center,
        startDistance: getTouchPointerDistance(),
        startZoom: getPageZoom(page),
        startPanX: page.panX || 0,
        startPanY: page.panY || 0,
      };
    }
  } else {
    state.panGesture = null;
  }

  if (event.cancelable) {
    event.preventDefault();
  }

  return true;
}

function handleCanvasWheel(event) {
  const page = getActivePage();

  if (!page) {
    return;
  }

  if (event.ctrlKey) {
    const rect = canvas.getBoundingClientRect();
    const zoomFactor = Math.exp(-event.deltaY * 0.01);

    setPageZoomAroundViewportPoint(
      page,
      getPageZoom(page) * zoomFactor,
      {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      }
    );

    if (event.cancelable) {
      event.preventDefault();
    }

    renderWorkspace();
    return;
  }

  const startPanX = page.panX || 0;
  const startPanY = page.panY || 0;
  const zoom = getPageZoom(page);

  setPagePan(
    page,
    startPanX + event.deltaX / zoom,
    startPanY + event.deltaY / zoom
  );

  if (page.panX === startPanX && page.panY === startPanY) {
    return;
  }

  if (event.cancelable) {
    event.preventDefault();
  }

  renderWorkspace();
}

function getDistance(from, to) {
  return Math.hypot(to.x - from.x, to.y - from.y);
}

function drawStrokeSegment(targetContext, from, to, options) {
  if (targetContext.setLineDash) {
    targetContext.setLineDash([]);
  }
  targetContext.lineDashOffset = 0;
  targetContext.lineCap = "round";
  targetContext.lineJoin = "round";
  targetContext.lineWidth = options.size;
  targetContext.globalAlpha = options.opacity;
  targetContext.globalCompositeOperation = options.compositeOperation;
  targetContext.strokeStyle = options.color;
  targetContext.beginPath();
  targetContext.moveTo(from.x, from.y);
  if (from.x === to.x && from.y === to.y) {
    targetContext.lineTo(to.x + 0.01, to.y + 0.01);
  } else {
    targetContext.lineTo(to.x, to.y);
  }
  targetContext.stroke();
  targetContext.globalAlpha = 1;
  targetContext.globalCompositeOperation = "source-over";
}

function drawPageStrokeSegment(targetContext, from, to, options) {
  targetContext.save();
  targetContext.setTransform(1, 0, 0, 1, 0, 0);
  drawStrokeSegment(targetContext, from, to, options);
  targetContext.restore();
}

function drawPageStrokePath(targetContext, points, options) {
  if (points.length === 0) {
    return;
  }

  targetContext.save();
  targetContext.setTransform(1, 0, 0, 1, 0, 0);
  if (targetContext.setLineDash) {
    targetContext.setLineDash([]);
  }
  targetContext.lineDashOffset = 0;
  targetContext.lineCap = "round";
  targetContext.lineJoin = "round";
  targetContext.lineWidth = options.size;
  targetContext.globalAlpha = options.opacity;
  targetContext.globalCompositeOperation = options.compositeOperation;
  targetContext.strokeStyle = options.color;
  targetContext.beginPath();
  targetContext.moveTo(points[0].x, points[0].y);

  if (points.length === 1) {
    targetContext.lineTo(points[0].x + 0.01, points[0].y + 0.01);
  } else {
    points.slice(1).forEach((point) => {
      targetContext.lineTo(point.x, point.y);
    });
  }

  targetContext.stroke();
  targetContext.restore();
}

function drawLiveStrokeSegment(from, to, preset) {
  context.save();
  setVisibleContextPageTransform();
  drawStrokeSegment(context, from, to, {
    color: preset.color,
    size: preset.size,
    opacity: preset.opacity,
    compositeOperation: "source-over",
  });
  context.restore();
}

function getMinimumStrokeDistance() {
  if (state.strokeTool === "erase") {
    return Math.max(2, brush.eraseSize / 8);
  }

  const preset = getActivePreset();

  return Math.max(1, preset.size / 12);
}

function getLatestCoalescedPointerEvent(event) {
  const coalescedEvents = event.getCoalescedEvents
    ? event.getCoalescedEvents()
    : [];

  if (coalescedEvents.length === 0) {
    return event;
  }

  return coalescedEvents[coalescedEvents.length - 1];
}

function getStrokePointEvents(event) {
  return [getLatestCoalescedPointerEvent(event)];
}

function getPointerEventTimestamp(event) {
  const timestamp = Number(event.timeStamp);

  return isFinite(timestamp) ? timestamp : Date.now();
}

function shouldSkipInputEvent(event, minInterval) {
  const timestamp = getPointerEventTimestamp(event);

  if (
    state.lastLiveInputTimestamp > 0 &&
    timestamp - state.lastLiveInputTimestamp < minInterval
  ) {
    return true;
  }

  state.lastLiveInputTimestamp = timestamp;
  return false;
}

function shouldSkipLiveInputEvent(event) {
  return shouldSkipInputEvent(event, liveInputMinInterval);
}

function shouldSkipTransformInputEvent(event) {
  return shouldSkipInputEvent(event, transformInputMinInterval);
}

function drawLine(from, to) {
  const page = getActivePage();
  const preset = getActivePreset();
  const isErasing = state.strokeTool === "erase";

  if (!isErasing) {
    const strokePreset = state.liveStrokePreset || preset;
    const lastLivePoint =
      state.liveStrokePoints[state.liveStrokePoints.length - 1];

    if (
      !lastLivePoint ||
      lastLivePoint.x !== to.x ||
      lastLivePoint.y !== to.y
    ) {
      state.liveStrokePoints.push(to);
    }
    drawLiveStrokeSegment(from, to, strokePreset);
    return;
  }

  const targetContexts = [page.underContext, page.context];

  targetContexts.forEach((layerContext) => {
    drawPageStrokeSegment(layerContext, from, to, {
      color: preset.color,
      size: isErasing ? brush.eraseSize : preset.size,
      opacity: isErasing ? 1 : preset.opacity,
      compositeOperation: isErasing ? "destination-out" : "source-over",
    });
  });

  if (isErasing) {
    addEraserPreviewSegment(from, to);
    return;
  }
}

function commitLiveStrokeToPage(page = getActivePage()) {
  if (
    !page ||
    !state.liveStrokePreset ||
    state.liveStrokePoints.length === 0
  ) {
    return false;
  }

  const targetContext = state.liveStrokePreset.drawBehind
    ? page.underContext
    : page.context;

  drawPageStrokePath(targetContext, state.liveStrokePoints, {
    color: state.liveStrokePreset.color,
    size: state.liveStrokePreset.size,
    opacity: state.liveStrokePreset.opacity,
    compositeOperation: "source-over",
  });

  return true;
}

function createShape(startPoint, endPoint) {
  const width = endPoint.x - startPoint.x;
  const height = endPoint.y - startPoint.y;
  const lineSize =
    shapeConfig.type === "line" ? getSnappedLineSize(width, height) : null;

  return {
    type: shapeConfig.type,
    x: startPoint.x,
    y: startPoint.y,
    width: lineSize ? lineSize.width : width,
    height: lineSize ? lineSize.height : height,
    rotation: 0,
    strokeEnabled: shapeConfig.strokeEnabled,
    strokeColor: shapeConfig.strokeColor,
    strokeWidth: shapeConfig.strokeWidth,
    fillEnabled: shapeConfig.fillEnabled,
    fillColor: shapeConfig.fillColor,
    proportionalResize: true,
  };
}

function getSnappedLineSize(width, height) {
  if (Math.abs(width) >= Math.abs(height)) {
    return { width, height: 0 };
  }

  return { width: 0, height };
}

function getShapeResizeBox(shape, point) {
  const bounds = getShapeBounds(shape);
  const box = {
    x: bounds.left,
    y: bounds.top,
    width: bounds.width,
    height: bounds.height,
    rotation: shape.rotation,
  };
  const metrics = getRotatedResizeMetrics(point, box);

  if (shape.type !== "line") {
    return getRotatedResize(point, box, shape.proportionalResize !== false);
  }

  const lineSize = getSnappedLineSize(
    metrics.widthAlongAxis,
    metrics.heightAlongAxis
  );
  const width = lineSize.width === 0
    ? 0
    : Math.max(12, Math.round(Math.abs(lineSize.width)));
  const height = lineSize.height === 0
    ? 0
    : Math.max(12, Math.round(Math.abs(lineSize.height)));

  return getResizedBoxFromMetrics(metrics, width, height);
}

function commitPendingShape() {
  if (!state.pendingShape) {
    return;
  }

  drawShape(getActivePage().context, state.pendingShape);
  state.pendingShape = null;
  state.shapeInteraction = null;
  pushHistorySnapshot();
  updateActionToolbar();
  renderWorkspace();
}

function deletePendingShape() {
  state.pendingShape = null;
  state.shapeInteraction = null;
  updateActionToolbar();
  renderWorkspace();
}

function setPendingShapeRotation(rotation) {
  if (!state.pendingShape) {
    return;
  }

  state.pendingShape.rotation = normalizeRotation(rotation);
  syncRotationInputs();
  renderWorkspace();
}

function togglePendingShapeProportionalResize() {
  if (!state.pendingShape) {
    return;
  }

  state.pendingShape.proportionalResize =
    state.pendingShape.proportionalResize === false;
  updateActionToolbar();
}

function getInitialImagePlacement(image) {
  const naturalWidth = image.naturalWidth || image.width || 1;
  const naturalHeight = image.naturalHeight || image.height || 1;
  const page = getActivePage();
  const pageWidth = getPageWidth(page);
  const pageHeight = getPageHeight(page);
  const maxWidth = Math.max(1, pageWidth * 0.5);
  const maxHeight = Math.max(1, pageHeight * 0.5);
  const scale = Math.min(maxWidth / naturalWidth, maxHeight / naturalHeight, 1);
  const width = Math.max(1, Math.round(naturalWidth * scale));
  const height = Math.max(1, Math.round(naturalHeight * scale));

  return {
    x: Math.round((pageWidth - width) / 2),
    y: Math.round((pageHeight - height) / 2),
    width,
    height,
  };
}

function addPendingImage(image) {
  if (!image) {
    return;
  }

  commitPendingShape();
  commitPendingImage();
  commitSelection();

  const placement = getInitialImagePlacement(image);

  state.pendingImage = {
    image,
    x: placement.x,
    y: placement.y,
    width: placement.width,
    height: placement.height,
    rotation: 0,
    proportionalResize: true,
  };
  state.imageInteraction = null;
  updateActionToolbar();
  renderWorkspace();
  setSaveStatus("Place image");
}

function commitPendingImage() {
  if (!state.pendingImage) {
    return;
  }

  drawCanvasImage(getActivePage().context, state.pendingImage);
  state.pendingImage = null;
  state.imageInteraction = null;
  pushHistorySnapshot();
  updateActionToolbar();
  renderWorkspace();
}

function deletePendingImage() {
  state.pendingImage = null;
  state.imageInteraction = null;
  updateActionToolbar();
  renderWorkspace();
}

function setPendingImageRotation(rotation) {
  if (!state.pendingImage) {
    return;
  }

  state.pendingImage.rotation = normalizeRotation(rotation);
  syncRotationInputs();
  renderWorkspace();
}

function togglePendingImageProportionalResize() {
  if (!state.pendingImage) {
    return;
  }

  state.pendingImage.proportionalResize =
    state.pendingImage.proportionalResize === false;
  updateActionToolbar();
}

function getImageHit(point) {
  if (!state.pendingImage) {
    return null;
  }

  const imageItem = state.pendingImage;

  if (isResizeHandleHit(point, imageItem)) {
    return "resize";
  }

  return isRotatedBoxHit(point, imageItem) ? "move" : null;
}

function resizePendingImageToPoint(point) {
  const box = getRotatedResize(
    point,
    state.imageInteraction.startImage,
    state.imageInteraction.startImage.proportionalResize !== false
  );

  state.pendingImage.x = box.x;
  state.pendingImage.y = box.y;
  state.pendingImage.width = box.width;
  state.pendingImage.height = box.height;
}

function updatePendingImageInteraction(point) {
  const deltaX = point.x - state.imageInteraction.startPoint.x;
  const deltaY = point.y - state.imageInteraction.startPoint.y;
  const startImage = state.imageInteraction.startImage;

  if (state.imageInteraction.mode === "move") {
    state.pendingImage.x = startImage.x + deltaX;
    state.pendingImage.y = startImage.y + deltaY;
  } else {
    resizePendingImageToPoint(point);
  }
}

function startImage(event) {
  const point = getPoint(event);
  const hit = getImageHit(point);

  if (event.cancelable) {
    event.preventDefault();
  }

  if (!hit) {
    commitPendingImage();
    return false;
  }

  state.imageInteraction = {
    mode: hit,
    startPoint: point,
    startImage: { ...state.pendingImage },
    previewCanvas:
      hit === "resize"
        ? createTransformPreviewCanvas(
            state.pendingImage.image,
            state.pendingImage.image.naturalWidth ||
              state.pendingImage.image.width,
            state.pendingImage.image.naturalHeight ||
              state.pendingImage.image.height
          )
        : null,
  };

  return true;
}

function continueImage(event) {
  if (!state.imageInteraction || !state.pendingImage) {
    return;
  }

  if (event.cancelable) {
    event.preventDefault();
  }

  const latestEvent = getLatestCoalescedPointerEvent(event);

  if (shouldSkipTransformInputEvent(latestEvent)) {
    return;
  }

  updatePendingImageInteraction(getPoint(latestEvent));
  renderWorkspace();
}

function endImage(event) {
  if (!state.imageInteraction) {
    return;
  }

  if (event.cancelable) {
    event.preventDefault();
  }

  updatePendingImageInteraction(getPoint(event));
  state.imageInteraction = null;
  updateActionToolbar();
  renderWorkspace();
}

function getShapeHit(point) {
  if (!state.pendingShape) {
    return null;
  }

  const bounds = getShapeBounds(state.pendingShape);
  const box = {
    x: bounds.left,
    y: bounds.top,
    width: bounds.width,
    height: bounds.height,
    rotation: state.pendingShape.rotation,
  };

  if (isResizeHandleHit(point, box)) {
    return "resize";
  }

  if (state.pendingShape.type === "line") {
    return getLineHit(point, state.pendingShape) ? "move" : null;
  }

  return isRotatedBoxHit(point, box) ? "move" : null;
}

function getRotatedPoint(point, center, rotation) {
  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);
  const x = point.x - center.x;
  const y = point.y - center.y;

  return {
    x: center.x + x * cos - y * sin,
    y: center.y + x * sin + y * cos,
  };
}

function getLineHit(point, shape) {
  const bounds = getShapeBounds(shape);
  const center = {
    x: bounds.left + bounds.width / 2,
    y: bounds.top + bounds.height / 2,
  };
  const start = getRotatedPoint(
    { x: center.x - bounds.width / 2, y: center.y - bounds.height / 2 },
    center,
    shape.rotation
  );
  const end = getRotatedPoint(
    { x: center.x + bounds.width / 2, y: center.y + bounds.height / 2 },
    center,
    shape.rotation
  );
  const lengthSquared =
    (end.x - start.x) * (end.x - start.x) +
    (end.y - start.y) * (end.y - start.y);

  if (lengthSquared === 0) {
    return getDistance(point, start) <= 16;
  }

  const projection = Math.max(
    0,
    Math.min(
      1,
      ((point.x - start.x) * (end.x - start.x) +
        (point.y - start.y) * (end.y - start.y)) /
        lengthSquared
    )
  );
  const closest = {
    x: start.x + projection * (end.x - start.x),
    y: start.y + projection * (end.y - start.y),
  };

  return getDistance(point, closest) <= Math.max(16, shape.strokeWidth + 10);
}

function startShape(event) {
  const point = getPoint(event);
  const hit = getShapeHit(point);

  if (event.cancelable) {
    event.preventDefault();
  }

  if (hit) {
    state.shapeInteraction = {
      mode: hit,
      startPoint: point,
      startShape: { ...state.pendingShape },
    };
    return;
  }

  if (!isPointInsidePage(point)) {
    if (state.pendingShape) {
      commitPendingShape();
    }
    return;
  }

  if (state.pendingShape) {
    commitPendingShape();
  }

  state.pendingShape = createShape(point, point);
  state.shapeInteraction = {
    mode: "create",
    startPoint: point,
    startShape: { ...state.pendingShape },
  };
  updateActionToolbar();
  renderWorkspace();
}

function updateShapeInteraction(point) {
  const deltaX = point.x - state.shapeInteraction.startPoint.x;
  const deltaY = point.y - state.shapeInteraction.startPoint.y;
  const startShape = state.shapeInteraction.startShape;

  if (state.shapeInteraction.mode === "move") {
    state.pendingShape.x = startShape.x + deltaX;
    state.pendingShape.y = startShape.y + deltaY;
  } else if (state.shapeInteraction.mode === "resize") {
    const box = getShapeResizeBox(startShape, point);

    state.pendingShape.x = box.x;
    state.pendingShape.y = box.y;
    state.pendingShape.width = box.width;
    state.pendingShape.height = box.height;
  } else {
    const width = startShape.width + deltaX;
    const height = startShape.height + deltaY;
    const lineSize =
      state.pendingShape.type === "line"
        ? getSnappedLineSize(width, height)
        : null;

    state.pendingShape.width = lineSize ? lineSize.width : width;
    state.pendingShape.height = lineSize ? lineSize.height : height;
  }
}

function continueShape(event) {
  if (!state.shapeInteraction || !state.pendingShape) {
    return;
  }

  if (event.cancelable) {
    event.preventDefault();
  }

  const latestEvent = getLatestCoalescedPointerEvent(event);

  if (shouldSkipTransformInputEvent(latestEvent)) {
    return;
  }

  updateShapeInteraction(getPoint(latestEvent));
  renderWorkspace();
}

function endShape(event) {
  if (!state.shapeInteraction) {
    return;
  }

  if (event.cancelable) {
    event.preventDefault();
  }

  updateShapeInteraction(getPoint(event));
  state.shapeInteraction = null;
  updateActionToolbar();
  renderWorkspace();
}

function getPathBounds(path) {
  const page = getActivePage();
  const pageWidth = getPageWidth(page);
  const pageHeight = getPageHeight(page);
  const xs = path.map((point) => point.x);
  const ys = path.map((point) => point.y);
  const minX = Math.max(0, Math.floor(Math.min(...xs)));
  const minY = Math.max(0, Math.floor(Math.min(...ys)));
  const maxX = Math.min(pageWidth, Math.ceil(Math.max(...xs)));
  const maxY = Math.min(pageHeight, Math.ceil(Math.max(...ys)));

  return {
    x: minX,
    y: minY,
    width: Math.max(1, maxX - minX),
    height: Math.max(1, maxY - minY),
  };
}

function drawLassoPath(targetContext, path, offsetX = 0, offsetY = 0) {
  targetContext.beginPath();
  targetContext.moveTo(path[0].x - offsetX, path[0].y - offsetY);

  path.slice(1).forEach((point) => {
    targetContext.lineTo(point.x - offsetX, point.y - offsetY);
  });

  targetContext.closePath();
}

function extractLassoLayer(sourceLayer, maskCanvas, bounds) {
  const selectedCanvas = document.createElement("canvas");
  const selectedContext = selectedCanvas.getContext("2d");

  selectedCanvas.width = bounds.width;
  selectedCanvas.height = bounds.height;
  selectedContext.drawImage(
    sourceLayer,
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    0,
    0,
    bounds.width,
    bounds.height
  );
  selectedContext.globalCompositeOperation = "destination-in";
  selectedContext.drawImage(maskCanvas, 0, 0);
  selectedContext.globalCompositeOperation = "source-over";

  return selectedCanvas;
}

function clearLassoFromContext(targetContext, path) {
  targetContext.save();
  targetContext.globalCompositeOperation = "destination-out";
  targetContext.fillStyle = "#000000";
  drawLassoPath(targetContext, path);
  targetContext.fill();
  targetContext.restore();
}

function finalizeLassoSelection() {
  if (state.lassoPath.length < 3) {
    state.lassoPath = [];
    renderWorkspace();
    return;
  }

  const bounds = getPathBounds(state.lassoPath);

  if (bounds.width < 4 || bounds.height < 4) {
    state.lassoPath = [];
    renderWorkspace();
    return;
  }

  const page = getActivePage();
  const beforeSnapshot = createPageSnapshot(page);
  const maskCanvas = document.createElement("canvas");
  const maskContext = maskCanvas.getContext("2d");

  maskCanvas.width = bounds.width;
  maskCanvas.height = bounds.height;
  maskContext.fillStyle = "#000000";
  drawLassoPath(maskContext, state.lassoPath, bounds.x, bounds.y);
  maskContext.fill();

  const selectedUnderCanvas = extractLassoLayer(
    page.underLayer,
    maskCanvas,
    bounds
  );
  const selectedCanvas = extractLassoLayer(page.layer, maskCanvas, bounds);

  clearLassoFromContext(page.underContext, state.lassoPath);
  clearLassoFromContext(page.context, state.lassoPath);

  state.selection = {
    underCanvas: selectedUnderCanvas,
    canvas: selectedCanvas,
    x: bounds.x,
    y: bounds.y,
    width: bounds.width,
    height: bounds.height,
    rotation: 0,
    proportionalResize: true,
    beforeSnapshot,
    pushesHistoryOnCommit: true,
    pushesHistoryOnDelete: true,
  };
  state.lassoPath = [];
  updateActionToolbar();
  renderWorkspace();
}

function copySelection() {
  if (!state.selection) {
    return;
  }

  state.selectionClipboard = {
    underCanvas: cloneNullableCanvas(state.selection.underCanvas),
    canvas: cloneNullableCanvas(state.selection.canvas),
    width: Math.max(1, state.selection.width || 1),
    height: Math.max(1, state.selection.height || 1),
    rotation: state.selection.rotation || 0,
    proportionalResize: state.selection.proportionalResize !== false,
  };
  updateCanvasContextMenuActions();
  showLassoCopyFeedback();
  setSaveStatus("Selection copied");
}

function showLassoCopyFeedback() {
  if (!lassoCopyButton) {
    return;
  }

  window.clearTimeout(state.lassoCopyFeedbackTimer);
  lassoCopyButton.classList.add("is-feedback-active");
  state.lassoCopyFeedbackTimer = window.setTimeout(() => {
    lassoCopyButton.classList.remove("is-feedback-active");
    state.lassoCopyFeedbackTimer = null;
  }, lassoCopyFeedbackDuration);
}

function getSelectionPasteBox(point, clipboard, page) {
  const width = Math.max(1, clipboard.width || 1);
  const height = Math.max(1, clipboard.height || 1);
  const maxX = Math.max(0, getPageWidth(page) - width);
  const maxY = Math.max(0, getPageHeight(page) - height);

  return {
    x: Math.min(Math.max(0, point.x - width / 2), maxX),
    y: Math.min(Math.max(0, point.y - height / 2), maxY),
    width,
    height,
  };
}

function pasteSelectionAtPoint(point) {
  const clipboard = state.selectionClipboard;
  const page = getActivePage();

  if (!hasSelectionClipboard() || !page || !isPointInsidePage(point, page)) {
    return;
  }

  if (state.selection) {
    commitSelection();
  }

  const box = getSelectionPasteBox(point, clipboard, page);

  state.lassoPath = [];
  state.selectionInteraction = null;
  state.selection = {
    underCanvas: cloneNullableCanvas(clipboard.underCanvas),
    canvas: cloneNullableCanvas(clipboard.canvas),
    x: box.x,
    y: box.y,
    width: box.width,
    height: box.height,
    rotation: clipboard.rotation || 0,
    proportionalResize: clipboard.proportionalResize !== false,
    beforeSnapshot: null,
    pushesHistoryOnCommit: true,
    pushesHistoryOnDelete: false,
  };
  setTool("lasso");
  updateActionToolbar();
  renderWorkspace();
  setSaveStatus("Selection pasted");
}

function commitSelection() {
  if (!state.selection) {
    return;
  }

  const shouldPushHistory = state.selection.pushesHistoryOnCommit !== false;

  drawSelectionContent(
    getActivePage().underContext,
    state.selection,
    state.selection.underCanvas
  );
  drawSelectionContent(
    getActivePage().context,
    state.selection,
    state.selection.canvas
  );
  state.selection = null;
  state.selectionInteraction = null;
  if (shouldPushHistory) {
    pushHistorySnapshot();
  }
  updateActionToolbar();
  renderWorkspace();
}

function deleteSelection() {
  const shouldPushHistory = Boolean(
    state.selection && state.selection.pushesHistoryOnDelete !== false
  );

  state.selection = null;
  state.selectionInteraction = null;
  if (shouldPushHistory) {
    pushHistorySnapshot();
  }
  updateActionToolbar();
  renderWorkspace();
}

function setSelectionRotation(rotation) {
  if (!state.selection) {
    return;
  }

  state.selection.rotation = normalizeRotation(rotation);
  syncRotationInputs();
  updateActionToolbar();
  renderWorkspace();
}

function toggleSelectionProportionalResize() {
  if (!state.selection) {
    return;
  }

  state.selection.proportionalResize =
    state.selection.proportionalResize === false;
  updateActionToolbar();
}

function resizeSelectionToPoint(point) {
  const box = getRotatedResize(
    point,
    state.selectionInteraction.startSelection,
    state.selectionInteraction.startSelection.proportionalResize !== false
  );

  state.selection.x = box.x;
  state.selection.y = box.y;
  state.selection.width = box.width;
  state.selection.height = box.height;
}

function updateSelectionInteraction(point) {
  if (state.selectionInteraction.mode === "resize") {
    resizeSelectionToPoint(point);
    return;
  }

  state.selection.x =
    state.selectionInteraction.startSelection.x +
    point.x -
    state.selectionInteraction.startPoint.x;
  state.selection.y =
    state.selectionInteraction.startSelection.y +
    point.y -
    state.selectionInteraction.startPoint.y;
}

function getSelectionHit(point) {
  if (!state.selection) {
    return null;
  }

  const box = {
    x: state.selection.x,
    y: state.selection.y,
    width: state.selection.width,
    height: state.selection.height,
    rotation: state.selection.rotation,
  };

  if (isResizeHandleHit(point, box)) {
    return "resize";
  }

  return isRotatedBoxHit(point, box) ? "move" : null;
}

function startLasso(event) {
  const point = getPoint(event);
  const hit = getSelectionHit(point);

  if (event.cancelable) {
    event.preventDefault();
  }

  if (hit) {
    state.selectionInteraction = {
      mode: hit,
      startPoint: point,
      startSelection: { ...state.selection },
      previewCanvas:
        hit === "resize" ? createSelectionPreviewCanvas(state.selection) : null,
    };
    return;
  }

  if (!isPointInsidePage(point)) {
    if (state.selection) {
      commitSelection();
    }
    return;
  }

  if (state.selection) {
    commitSelection();
  }

  clearLiveCanvas();
  state.liveLassoDashLength = 0;
  state.lassoPath = [point];
  renderWorkspace();
}

function continueLasso(event) {
  const latestEvent = getLatestCoalescedPointerEvent(event);
  const point = getPoint(latestEvent);

  if (event.cancelable) {
    event.preventDefault();
  }

  if (state.selectionInteraction && state.selection) {
    if (shouldSkipTransformInputEvent(latestEvent)) {
      return;
    }

    updateSelectionInteraction(point);
    renderWorkspace();
    return;
  }

  if (state.lassoPath.length === 0) {
    return;
  }

  if (shouldSkipLiveInputEvent(latestEvent)) {
    return;
  }

  const lastPoint = state.lassoPath[state.lassoPath.length - 1];

  if (getDistance(lastPoint, point) >= 3) {
    state.lassoPath.push(point);
    drawLassoPreviewSegment(lastPoint, point);
  }
}

function endLasso(event) {
  if (event.cancelable) {
    event.preventDefault();
  }

  if (state.selectionInteraction) {
    updateSelectionInteraction(getPoint(event));
    state.selectionInteraction = null;
    updateActionToolbar();
    renderWorkspace();
    return;
  }

  if (state.lassoPath.length > 0) {
    const point = getPoint(event);

    if (isPointInsidePage(point)) {
      const lastPoint = state.lassoPath[state.lassoPath.length - 1];

      if (getDistance(lastPoint, point) >= 3) {
        state.lassoPath.push(point);
      }
    }
  }

  finalizeLassoSelection();
  clearLiveCanvas();
  state.liveLassoDashLength = 0;
}

function shouldIgnoreCanvasPointer(event) {
  return (
    event.isPrimary === false ||
    (event.pointerType === "touch" && !state.globalSettings.touchDrawingEnabled)
  );
}

function startStroke(event) {
  if (
    state.isDrawing ||
    shouldIgnoreCanvasPointer(event)
  ) {
    return;
  }

  if (!canStartStroke(event)) {
    return;
  }

  if (event.cancelable) {
    event.preventDefault();
  }

  state.canvasRect = canvas.getBoundingClientRect();
  state.canvasTransform = getPageViewportTransform();

  const point = getPoint(event);

  if (!isPointInsidePage(point)) {
    state.canvasRect = null;
    state.canvasTransform = null;
    return;
  }

  canvas.setPointerCapture(event.pointerId);

  state.strokeTool = getStrokeTool(event);
  state.isDrawing = true;
  state.activePointerId = event.pointerId;
  state.activePointerType = event.pointerType || "";
  state.activeStrokeSnapshot =
    state.activePointerType === "touch"
      ? createPageSnapshot(getActivePage())
      : null;
  state.liveStrokePreset =
    state.strokeTool === "erase" ? null : { ...getActivePreset() };
  state.hasLiveStroke = state.strokeTool !== "erase";
  state.liveStrokePoints = state.strokeTool === "erase" ? [] : [point];
  state.lastLiveInputTimestamp = getPointerEventTimestamp(event);
  state.lastPoint = point;
  drawLine(state.lastPoint, state.lastPoint);
}

function continueStroke(event) {
  if (
    !state.isDrawing ||
    !state.lastPoint ||
    event.pointerId !== state.activePointerId
  ) {
    return;
  }

  if (event.cancelable) {
    event.preventDefault();
  }

  state.strokeTool = getStrokeTool(event);

  if (state.strokeTool === "erase" && state.hasLiveStroke) {
    commitLiveStrokeToPage();
    state.hasLiveStroke = false;
    state.liveStrokePreset = null;
    state.liveStrokePoints = [];
    clearLiveCanvas();
    renderPage();
  }

  const points = getStrokePointEvents(event);

  points.forEach((pointEvent) => {
    if (shouldSkipLiveInputEvent(pointEvent)) {
      return;
    }

    const nextPoint = getPoint(pointEvent);

    if (getDistance(state.lastPoint, nextPoint) < getMinimumStrokeDistance()) {
      return;
    }

    drawLine(state.lastPoint, nextPoint);
    if (state.strokeTool !== "erase") {
      state.hasLiveStroke = true;
    }
    state.lastPoint = nextPoint;
  });
}

function endStroke(event) {
  if (!state.isDrawing || event.pointerId !== state.activePointerId) {
    return;
  }

  if (event.cancelable) {
    event.preventDefault();
  }

  if (canvas.hasPointerCapture(event.pointerId)) {
    canvas.releasePointerCapture(event.pointerId);
  }

  const finishedTool = state.strokeTool;
  const finalPoint = getPoint(event);

  if (
    state.lastPoint &&
    isPointInsidePage(finalPoint) &&
    getDistance(state.lastPoint, finalPoint) >= getMinimumStrokeDistance()
  ) {
    drawLine(state.lastPoint, finalPoint);
    if (finishedTool !== "erase") {
      state.hasLiveStroke = true;
    }
  }

  if (finishedTool !== "erase") {
    commitLiveStrokeToPage();
  }

  state.isDrawing = false;
  state.activePointerId = null;
  state.activePointerType = "";
  state.activeStrokeSnapshot = null;
  state.lastPoint = null;
  state.canvasRect = null;
  state.canvasTransform = null;
  state.lastLiveInputTimestamp = 0;
  state.hasLiveStroke = false;
  state.liveStrokePreset = null;
  state.liveStrokePoints = [];
  state.strokeTool = state.tool;

  if (finishedTool !== "erase") {
    clearLiveCanvas();
    renderPage();
  }

  pushHistorySnapshot();
}

function startCanvasAction(event) {
  if (handleTouchPointerDownForPan(event)) {
    return;
  }

  if (
    state.pendingImage &&
    !state.isDrawing &&
    !shouldIgnoreCanvasPointer(event) &&
    event.button === 0
  ) {
    const didStartImageInteraction = startImage(event);

    if (didStartImageInteraction) {
      canvas.setPointerCapture(event.pointerId);
      state.isDrawing = true;
      state.activePointerId = event.pointerId;
      state.activePointerType = event.pointerType || "";
    }
    return;
  }

  if (state.tool === "draw" || state.tool === "erase") {
    startStroke(event);
    return;
  }

  if (
    state.isDrawing ||
    shouldIgnoreCanvasPointer(event) ||
    event.button !== 0
  ) {
    return;
  }

  if (event.cancelable) {
    event.preventDefault();
  }

  state.canvasRect = canvas.getBoundingClientRect();
  state.canvasTransform = getPageViewportTransform();

  canvas.setPointerCapture(event.pointerId);
  state.isDrawing = true;
  state.activePointerId = event.pointerId;
  state.activePointerType = event.pointerType || "";
  state.lastLiveInputTimestamp = getPointerEventTimestamp(event);

  if (state.tool === "shape") {
    startShape(event);
  }

  if (state.tool === "lasso") {
    startLasso(event);
  }
}

function continueCanvasAction(event) {
  if (handleTouchPointerMoveForPan(event)) {
    return;
  }

  if (
    state.imageInteraction &&
    state.isDrawing &&
    event.pointerId === state.activePointerId
  ) {
    continueImage(event);
    return;
  }

  if (state.tool === "draw" || state.tool === "erase") {
    continueStroke(event);
    return;
  }

  if (!state.isDrawing || event.pointerId !== state.activePointerId) {
    return;
  }

  if (state.tool === "shape") {
    continueShape(event);
  }

  if (state.tool === "lasso") {
    continueLasso(event);
  }
}

function endCanvasAction(event) {
  if (handleTouchPointerEndForPan(event)) {
    state.isDrawing = false;
    state.activePointerId = null;
    state.activePointerType = "";
    state.activeStrokeSnapshot = null;
    state.lastPoint = null;
    state.canvasRect = null;
    state.canvasTransform = null;
    state.lastLiveInputTimestamp = 0;
    return;
  }

  if (
    state.imageInteraction &&
    state.isDrawing &&
    event.pointerId === state.activePointerId
  ) {
    if (canvas.hasPointerCapture(event.pointerId)) {
      canvas.releasePointerCapture(event.pointerId);
    }

    endImage(event);
    state.isDrawing = false;
    state.activePointerId = null;
    state.activePointerType = "";
    return;
  }

  if (state.tool === "draw" || state.tool === "erase") {
    endStroke(event);
    return;
  }

  if (!state.isDrawing || event.pointerId !== state.activePointerId) {
    return;
  }

  if (canvas.hasPointerCapture(event.pointerId)) {
    canvas.releasePointerCapture(event.pointerId);
  }

  if (state.tool === "shape") {
    endShape(event);
  }

  if (state.tool === "lasso") {
    endLasso(event);
  }

  state.isDrawing = false;
  state.activePointerId = null;
  state.activePointerType = "";
  state.activeStrokeSnapshot = null;
  state.canvasRect = null;
  state.canvasTransform = null;
  state.lastLiveInputTimestamp = 0;
}

function getPageNavigationDirection(event) {
  const key = event.key || "";
  const code = event.code || "";

  if (
    key === "AudioVolumeUp" ||
    key === "VolumeUp" ||
    code === "AudioVolumeUp" ||
    code === "VolumeUp" ||
    key === "PageUp" ||
    code === "PageUp"
  ) {
    return -1;
  }

  if (
    key === "AudioVolumeDown" ||
    key === "VolumeDown" ||
    code === "AudioVolumeDown" ||
    code === "VolumeDown" ||
    key === "PageDown" ||
    code === "PageDown"
  ) {
    return 1;
  }

  return 0;
}

function isEditableKeyTarget(target) {
  if (!target) {
    return false;
  }

  const tagName = target.tagName;

  return (
    target.isContentEditable ||
    tagName === "INPUT" ||
    tagName === "TEXTAREA" ||
    tagName === "SELECT"
  );
}

function isBlockingPageKeyNavigation() {
  const dialogs = [
    settingsDialog,
    eraserDialog,
    shapeDialog,
    addImageDialog,
    presetDialog,
    pageDialog,
    addPageDialog,
    guideDialog,
    appDialog,
  ];

  return dialogs.some(
    (dialog) => dialog && (dialog.open || dialog.hasAttribute("open"))
  );
}

function handlePageNavigationKeyDown(event) {
  const direction = getPageNavigationDirection(event);

  if (
    direction === 0 ||
    isEditableKeyTarget(event.target) ||
    isBlockingPageKeyNavigation() ||
    !state.documentId ||
    documentScreen.classList.contains("is-hidden") === false ||
    state.pages.length === 0
  ) {
    return;
  }

  if (event.cancelable) {
    event.preventDefault();
  }

  const nextPageIndex = Math.max(
    0,
    Math.min(state.activePageIndex + direction, state.pages.length - 1)
  );

  if (nextPageIndex !== state.activePageIndex) {
    setActivePage(nextPageIndex);
  }
}

function updatePageControls() {
  if (state.pages.length === 0) {
    pageIndicator.textContent = "0/0";
    pageIndicator.disabled = true;
    previousPageButton.disabled = true;
    nextPageButton.disabled = true;
    updateHistoryControls();
    return;
  }

  pageIndicator.textContent = `${state.activePageIndex + 1}/${
    state.pages.length
  }`;
  pageIndicator.disabled = false;
  previousPageButton.disabled = state.activePageIndex === 0;
  nextPageButton.disabled = state.activePageIndex === state.pages.length - 1;
  updateHistoryControls();

  if (pageDialog.open) {
    renderPageList();
  }
}

function setActivePage(index) {
  commitPendingShape();
  commitPendingImage();
  commitSelection();
  state.activePageIndex = Math.max(0, Math.min(index, state.pages.length - 1));
  syncBackgroundInputs();
  updatePageControls();
  renderWorkspace();
  scheduleDocumentSave();
}

function addPage() {
  if (state.pages.length === 0) {
    insertPageAt(0, true);
    return;
  }

  commitPendingShape();
  commitPendingImage();
  commitSelection();
  syncAddPageDialog();

  if (addPageDialog.showModal) {
    addPageDialog.showModal();
    return;
  }

  addPageDialog.setAttribute("open", "");
}

function syncAddPageDialog() {
  if (!addPageCurrentPage) {
    return;
  }

  addPageCurrentPage.textContent = `Current page ${
    state.activePageIndex + 1
  } of ${state.pages.length}`;
}

function closeAddPageDialog() {
  if (addPageDialog.open && addPageDialog.close) {
    addPageDialog.close();
    return;
  }

  addPageDialog.removeAttribute("open");
}

function addPageAtPlacement(placement) {
  let insertIndex = state.activePageIndex + 1;

  if (placement === "before") {
    insertIndex = state.activePageIndex;
  } else if (placement === "end") {
    insertIndex = state.pages.length;
  }

  closeAddPageDialog();
  insertPageAt(insertIndex, true);
}

function closePageDialog() {
  closePageMenus();

  if (pageDialog.open && pageDialog.close) {
    pageDialog.close();
    return;
  }

  pageDialog.removeAttribute("open");
}

function drawPageThumbnail(page, thumbnail) {
  const sourceWidth = getPageWidth(page);
  const sourceHeight = getPageHeight(page);
  const previewWidth = 180;
  const previewHeight = Math.max(
    96,
    Math.round(previewWidth * (sourceHeight / sourceWidth))
  );
  const thumbnailContext = thumbnail.getContext("2d");

  thumbnail.width = previewWidth;
  thumbnail.height = previewHeight;
  drawBackground(page, thumbnailContext, previewWidth, previewHeight);
  thumbnailContext.drawImage(page.underLayer, 0, 0, previewWidth, previewHeight);
  thumbnailContext.drawImage(page.layer, 0, 0, previewWidth, previewHeight);
}

function positionPageActionMenu(anchor) {
  const margin = 8;
  const anchorRect = anchor.getBoundingClientRect();
  const menuRect = pageActionMenu.getBoundingClientRect();
  const rightAlignedLeft = anchorRect.right - menuRect.width;
  const leftAlignedLeft = anchorRect.left;
  const belowTop = anchorRect.bottom + margin;
  const aboveTop = anchorRect.top - menuRect.height - margin;
  const left =
    rightAlignedLeft >= margin ? rightAlignedLeft : leftAlignedLeft;
  const top =
    belowTop + menuRect.height <= window.innerHeight - margin
      ? belowTop
      : aboveTop;

  pageActionMenu.style.left = `${Math.max(
    margin,
    Math.min(left, window.innerWidth - menuRect.width - margin)
  )}px`;
  pageActionMenu.style.top = `${Math.max(
    margin,
    Math.min(top, window.innerHeight - menuRect.height - margin)
  )}px`;
}

function openPageActionMenu(index, anchor) {
  const isOpenForPage =
    !pageActionMenu.classList.contains("is-hidden") &&
    Number(pageActionMenu.dataset.pageIndex) === index;

  if (isOpenForPage) {
    closePageMenus();
    return;
  }

  pageActionMenu.dataset.pageIndex = String(index);
  pageDeleteButton.disabled = state.pages.length <= 1;
  pageActionMenu.classList.remove("is-hidden");
  pageActionMenu.style.left = "-9999px";
  pageActionMenu.style.top = "-9999px";
  positionPageActionMenu(anchor);
}

function closePageMenus() {
  pageActionMenu.classList.add("is-hidden");
  pageActionMenu.removeAttribute("data-page-index");
}

function getInsertedPageBackground(index) {
  const previousPage = state.pages[index - 1];
  const nextPage = state.pages[index];

  if (previousPage) {
    return previousPage.background;
  }

  return nextPage ? nextPage.background : "blank";
}

function insertPageAt(index, shouldActivateInsertedPage = false) {
  commitPendingShape();
  commitPendingImage();
  commitSelection();

  const activePage = getActivePage();
  const insertIndex = Math.max(0, Math.min(index, state.pages.length));
  const page = createPage(getInsertedPageBackground(insertIndex));

  state.pages.splice(insertIndex, 0, page);
  pushHistorySnapshot(page);
  state.activePageIndex = shouldActivateInsertedPage
    ? insertIndex
    : Math.max(0, state.pages.indexOf(activePage));
  syncBackgroundInputs();
  updatePageControls();
  renderWorkspace();
  scheduleDocumentSave();
}

function deletePage(index) {
  if (state.pages.length <= 1) {
    showAlertDialog("Page Required", "A document needs at least one page.");
    return;
  }

  const pageNumber = index + 1;
  showConfirmDialog(
    "Delete Page",
    `Delete page ${pageNumber}? This cannot be undone.`,
    "Delete"
  ).then((shouldDelete) => {
    if (!shouldDelete) {
      return;
    }

    commitPendingShape();
    commitPendingImage();
    commitSelection();
    state.pages.splice(index, 1);

    if (state.activePageIndex > index) {
      state.activePageIndex -= 1;
    } else if (state.activePageIndex >= state.pages.length) {
      state.activePageIndex = state.pages.length - 1;
    }

    syncBackgroundInputs();
    updatePageControls();
    renderWorkspace();
    renderPageList();
    scheduleDocumentSave();
  });
}

function renderPageList() {
  closePageMenus();
  pageList.textContent = "";

  if (state.pages.length === 0) {
    const empty = document.createElement("div");

    empty.className = "document-empty";
    empty.textContent = "No pages yet.";
    pageList.appendChild(empty);
    return;
  }

  state.pages.forEach((page, index) => {
    const row = document.createElement("article");
    const shell = document.createElement("div");
    const jumpButton = document.createElement("button");
    const pageNumber = document.createElement("span");
    const thumbnail = document.createElement("canvas");
    const menuWrap = document.createElement("div");
    const menuButton = document.createElement("button");

    row.className = "page-row";
    row.classList.toggle("is-active", index === state.activePageIndex);
    shell.className = "page-thumbnail-shell";
    jumpButton.className = "page-jump-button";
    jumpButton.type = "button";
    jumpButton.setAttribute("aria-label", `Go to page ${index + 1}`);
    pageNumber.className = "page-number";
    pageNumber.textContent = `Page ${index + 1}`;
    thumbnail.className = "page-thumbnail";
    thumbnail.setAttribute("aria-hidden", "true");
    drawPageThumbnail(page, thumbnail);
    menuWrap.className = "page-menu-wrap";
    menuButton.className = "page-menu-button";
    menuButton.type = "button";
    menuButton.setAttribute("aria-label", `Page ${index + 1} actions`);
    menuButton.innerHTML = "&#8942;";

    jumpButton.addEventListener("click", () => {
      setActivePage(index);
      closePageDialog();
    });
    menuButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openPageActionMenu(index, menuButton);
    });

    jumpButton.append(pageNumber, thumbnail);
    menuWrap.appendChild(menuButton);
    shell.append(jumpButton, menuWrap);
    row.appendChild(shell);
    pageList.appendChild(row);
  });
}

function openPageDialog() {
  if (state.pages.length === 0) {
    return;
  }

  commitPendingShape();
  commitPendingImage();
  commitSelection();
  renderPageList();

  if (pageDialog.showModal) {
    pageDialog.showModal();
    return;
  }

  pageDialog.setAttribute("open", "");
}

function syncBackgroundInputs() {
  const page = getActivePage();

  backgroundInputs.forEach((input) => {
    input.checked = page && input.value === page.background;
  });
}

function setBackground(background) {
  const page = getActivePage();

  if (!page || page.background === background) {
    return;
  }

  page.background = background;
  pushHistorySnapshot();
  renderWorkspace();
}

function updateEraserSize(size) {
  brush.eraseSize = Number(size);
  eraserSizeOutput.textContent = String(brush.eraseSize);
  scheduleDocumentSave();
}

function updatePresetButtons() {
  presetButtons.forEach((button) => {
    const preset = state.presets[Number(button.dataset.presetIndex)];
    const scaledSize = Math.max(3, Math.min(10, Math.round(preset.size / 3)));

    button.classList.toggle(
      "is-active",
      Number(button.dataset.presetIndex) === state.activePresetIndex
    );
    button.classList.toggle("is-draw-behind", Boolean(preset.drawBehind));
    button.style.setProperty("--preset-color", preset.color);
    button.style.setProperty("--preset-opacity", String(preset.opacity));
    button.style.setProperty("--preset-size", `${scaledSize}px`);
    const label = `Brush preset ${Number(button.dataset.presetIndex) + 1}: ${
      preset.size
    }px, ${Math.round(preset.opacity * 100)}% opacity${
      preset.drawBehind ? ", draw behind" : ""
    }`;

    button.setAttribute("aria-label", label);
    button.dataset.tooltip = label;
  });
}

function updatePresetColorButtons() {
  const preset = getEditingPreset();

  Array.from(presetColorGrid.querySelectorAll("[data-color]")).forEach(
    (button) => {
      button.classList.toggle(
        "is-active",
        button.dataset.color === preset.color
      );
    }
  );
}

function updateShapeColorButtons() {
  Array.from(shapeStrokeColorGrid.querySelectorAll("[data-color]")).forEach(
    (button) => {
      button.classList.toggle(
        "is-active",
        button.dataset.color === shapeConfig.strokeColor
      );
    }
  );
  Array.from(shapeFillColorGrid.querySelectorAll("[data-color]")).forEach(
    (button) => {
      button.classList.toggle(
        "is-active",
        button.dataset.color === shapeConfig.fillColor
      );
    }
  );
}

function syncShapeDialog() {
  shapeTypeInputs.forEach((input) => {
    input.checked = input.value === shapeConfig.type;
  });
  shapeStrokeEnabledInput.checked = shapeConfig.strokeEnabled;
  shapeStrokeWidthInput.value = String(shapeConfig.strokeWidth);
  shapeStrokeWidthOutput.textContent = String(shapeConfig.strokeWidth);
  shapeFillEnabledInput.checked = shapeConfig.fillEnabled;
  updateShapeColorButtons();
}

function updateShapeConfig(updates) {
  Object.assign(shapeConfig, updates);

  if (state.pendingShape) {
    Object.assign(state.pendingShape, updates);
    renderWorkspace();
  }

  syncShapeDialog();
  scheduleDocumentSave();
}

function openShapeSettings() {
  syncShapeDialog();

  if (shapeDialog.showModal) {
    shapeDialog.showModal();
    return;
  }

  shapeDialog.setAttribute("open", "");
}

function closeAddImageDialog() {
  if (addImageDialog.open && addImageDialog.close) {
    addImageDialog.close();
    return;
  }

  addImageDialog.removeAttribute("open");
}

function revokeClipboardPreviewUrl() {
  if (state.clipboardPreviewUrl) {
    URL.revokeObjectURL(state.clipboardPreviewUrl);
    state.clipboardPreviewUrl = "";
  }
}

function setClipboardPreviewStatus(message, blob) {
  revokeClipboardPreviewUrl();
  state.clipboardImageBlob = blob || null;

  if (blob) {
    state.clipboardPreviewUrl = URL.createObjectURL(blob);
    clipboardPreviewImage.src = state.clipboardPreviewUrl;
    clipboardPreview.classList.add("has-image");
    imagePasteButton.disabled = false;
  } else {
    clipboardPreviewImage.removeAttribute("src");
    clipboardPreview.classList.remove("has-image");
    imagePasteButton.disabled = true;
  }

  clipboardStatus.textContent = message;
}

async function readClipboardImageBlob() {
  if (!navigator.clipboard || !navigator.clipboard.read) {
    return null;
  }

  const items = await navigator.clipboard.read();

  for (const item of items) {
    for (const type of item.types) {
      if (type.indexOf("image/") === 0) {
        return item.getType(type);
      }
    }
  }

  return null;
}

async function refreshClipboardImagePreview() {
  setClipboardPreviewStatus("Checking clipboard...", null);

  try {
    const blob = await readClipboardImageBlob();

    if (!addImageDialog.open && !addImageDialog.hasAttribute("open")) {
      return;
    }

    if (blob) {
      setClipboardPreviewStatus("Clipboard image ready", blob);
      return;
    }

    setClipboardPreviewStatus("No image found in clipboard", null);
  } catch (error) {
    setClipboardPreviewStatus("Clipboard preview unavailable", null);
    console.error(error);
  }
}

function openAddImageDialog() {
  hideToolbarTooltip();

  if (!state.documentId || state.pages.length === 0) {
    setSaveStatus("No document");
    return;
  }

  setClipboardPreviewStatus("Checking clipboard...", null);

  if (addImageDialog.showModal) {
    addImageDialog.showModal();
  } else {
    addImageDialog.setAttribute("open", "");
  }

  refreshClipboardImagePreview();
}

async function importImageBlob(blob, failureMessage) {
  try {
    const image = await loadImageBlob(blob);

    closeAddImageDialog();
    addPendingImage(image);
  } catch (error) {
    setSaveStatus("Image import failed");
    await showAlertDialog(
      "Image Import Failed",
      failureMessage || "That image could not be imported."
    );
    console.error(error);
  }
}

async function importImageFile(file) {
  if (!file) {
    return;
  }

  if (file.type.indexOf("image/") !== 0) {
    await showAlertDialog("Image Import Failed", "Choose an image file.");
    return;
  }

  await importImageBlob(file, "That image file could not be imported.");
}

async function pasteClipboardImage() {
  let blob = state.clipboardImageBlob;

  if (!blob) {
    try {
      blob = await readClipboardImageBlob();
    } catch (error) {
      setClipboardPreviewStatus("Clipboard image unavailable", null);
      console.error(error);
      return;
    }
  }

  if (!blob) {
    setClipboardPreviewStatus("No image found in clipboard", null);
    return;
  }

  await importImageBlob(blob, "The clipboard image could not be imported.");
}

function getImageBlobFromDataTransfer(dataTransfer) {
  if (!dataTransfer) {
    return null;
  }

  if (dataTransfer.items) {
    for (const item of dataTransfer.items) {
      if (item.kind === "file" && item.type.indexOf("image/") === 0) {
        const file = item.getAsFile();

        if (file) {
          return file;
        }
      }
    }
  }

  if (dataTransfer.files) {
    for (const file of dataTransfer.files) {
      if (file.type.indexOf("image/") === 0) {
        return file;
      }
    }
  }

  return null;
}

function handlePasteEvent(event) {
  const isAddImageOpen =
    addImageDialog.open || addImageDialog.hasAttribute("open");

  if (
    isEditableKeyTarget(event.target) ||
    (!isAddImageOpen && isBlockingPageKeyNavigation()) ||
    !state.documentId ||
    state.pages.length === 0 ||
    documentScreen.classList.contains("is-hidden") === false
  ) {
    return;
  }

  const blob = getImageBlobFromDataTransfer(event.clipboardData);

  if (!blob) {
    return;
  }

  if (event.cancelable) {
    event.preventDefault();
  }

  if (isAddImageOpen) {
    closeAddImageDialog();
  }

  importImageBlob(blob, "The pasted image could not be imported.");
}

function buildShapeColorGrid(grid, key) {
  colors.forEach(([name, color]) => {
    const button = document.createElement("button");
    button.className = "color-button";
    button.type = "button";
    button.dataset.color = color;
    button.style.setProperty("--swatch-color", color);
    button.setAttribute("aria-label", name);
    button.title = name;
    button.addEventListener("click", () =>
      updateShapeConfig({ [key]: color })
    );
    grid.appendChild(button);
  });
}

function selectPreset(index) {
  state.activePresetIndex = index;
  setTool("draw");
  updatePresetButtons();
  scheduleDocumentSave();
}

function syncPresetDialog() {
  const preset = getEditingPreset();

  presetTitle.textContent = `Preset ${state.editingPresetIndex + 1}`;
  presetSizeInput.value = String(preset.size);
  presetSizeOutput.textContent = String(preset.size);
  presetOpacityInput.value = String(Math.round(preset.opacity * 100));
  presetOpacityOutput.textContent = `${Math.round(preset.opacity * 100)}%`;
  presetDrawBehindInput.checked = Boolean(preset.drawBehind);
  updatePresetColorButtons();
}

function updateEditingPreset(updates) {
  Object.assign(getEditingPreset(), updates);
  syncPresetDialog();
  updatePresetButtons();
  savePresets();
  scheduleDocumentSave();
}

function openPresetSettings(index) {
  state.editingPresetIndex = index;
  syncPresetDialog();

  if (presetDialog.showModal) {
    presetDialog.showModal();
    return;
  }

  presetDialog.setAttribute("open", "");
}

function buildPresetColorGrid() {
  colors.forEach(([name, color]) => {
    const button = document.createElement("button");
    button.className = "color-button";
    button.type = "button";
    button.dataset.color = color;
    button.style.setProperty("--swatch-color", color);
    button.setAttribute("aria-label", name);
    button.title = name;
    button.addEventListener("click", () => updateEditingPreset({ color }));
    presetColorGrid.appendChild(button);
  });

  updatePresetColorButtons();
}

function openSettings() {
  if (settingsDialog.showModal) {
    settingsDialog.showModal();
    return;
  }

  settingsDialog.setAttribute("open", "");
}

function openGuide() {
  closeDocumentMenus();

  if (!guideDialog) {
    return;
  }

  if (settingsDialog && settingsDialog.open && settingsDialog.close) {
    settingsDialog.close();
  } else if (settingsDialog) {
    settingsDialog.removeAttribute("open");
  }

  if (guideDialog.showModal) {
    guideDialog.showModal();
    return;
  }

  guideDialog.setAttribute("open", "");
}

function openEraserSettings() {
  if (eraserDialog.showModal) {
    eraserDialog.showModal();
    return;
  }

  eraserDialog.setAttribute("open", "");
}

function getToolbarTooltip() {
  let tooltip = document.querySelector("[data-toolbar-tooltip]");

  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.className = "toolbar-tooltip";
    tooltip.setAttribute("data-toolbar-tooltip", "");
    document.body.appendChild(tooltip);
  }

  return tooltip;
}

function clampTooltipPosition(left, top, tooltipRect, margin) {
  const maxLeft = window.innerWidth - tooltipRect.width - margin;
  const maxTop = window.innerHeight - tooltipRect.height - margin;

  return {
    left: Math.max(margin, Math.min(left, maxLeft)),
    top: Math.max(margin, Math.min(top, maxTop)),
  };
}

function getRectOverlapArea(left, top, width, height, rect) {
  const overlapWidth = Math.max(
    0,
    Math.min(left + width, rect.right) - Math.max(left, rect.left)
  );
  const overlapHeight = Math.max(
    0,
    Math.min(top + height, rect.bottom) - Math.max(top, rect.top)
  );

  return overlapWidth * overlapHeight;
}

function positionToolbarTooltip(target, tooltip) {
  const margin = 8;
  const toolbar =
    target.closest(
      ".toolbar-toggle, .toolbar, .preset-toolbar, .fullscreen-toolbar, .action-toolbar, .undo-toolbar"
    ) || target;
  const targetRect = target.getBoundingClientRect();
  const toolbarRect = toolbar.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  const targetCenterLeft =
    targetRect.left + (targetRect.width - tooltipRect.width) / 2;
  const targetCenterTop =
    targetRect.top + (targetRect.height - tooltipRect.height) / 2;
  const isHorizontalToolbar = toolbarRect.width > toolbarRect.height;
  const rightCandidate = {
    left: toolbarRect.right + margin,
    top: targetCenterTop,
  };
  const leftCandidate = {
    left: toolbarRect.left - tooltipRect.width - margin,
    top: targetCenterTop,
  };
  const bottomCandidate = {
    left: targetCenterLeft,
    top: toolbarRect.bottom + margin,
  };
  const topCandidate = {
    left: targetCenterLeft,
    top: toolbarRect.top - tooltipRect.height - margin,
  };
  let candidates;

  if (isHorizontalToolbar) {
    candidates =
      toolbarRect.top < window.innerHeight / 2
        ? [bottomCandidate, topCandidate, rightCandidate, leftCandidate]
        : [topCandidate, bottomCandidate, rightCandidate, leftCandidate];
  } else {
    candidates =
      toolbarRect.left < window.innerWidth / 2
        ? [rightCandidate, leftCandidate, bottomCandidate, topCandidate]
        : [leftCandidate, rightCandidate, bottomCandidate, topCandidate];
  }

  let bestPosition = null;
  let bestOverlap = Infinity;

  candidates.forEach((candidate) => {
    const position = clampTooltipPosition(
      candidate.left,
      candidate.top,
      tooltipRect,
      margin
    );
    const overlap = getRectOverlapArea(
      position.left,
      position.top,
      tooltipRect.width,
      tooltipRect.height,
      toolbarRect
    );

    if (overlap === 0 && !bestPosition) {
      bestPosition = position;
      bestOverlap = overlap;
      return;
    }

    if (!bestPosition || overlap < bestOverlap) {
      bestPosition = position;
      bestOverlap = overlap;
    }
  });

  tooltip.style.left = `${bestPosition.left}px`;
  tooltip.style.top = `${bestPosition.top}px`;
}

function showToolbarTooltip(target) {
  const label = target.dataset.tooltip || target.getAttribute("aria-label");

  if (!label || target.disabled) {
    return;
  }

  const tooltip = getToolbarTooltip();

  tooltip.textContent = label;
  tooltip.style.left = "-9999px";
  tooltip.style.top = "-9999px";
  tooltip.classList.add("is-visible");
  positionToolbarTooltip(target, tooltip);
}

function hideToolbarTooltip() {
  const tooltip = getToolbarTooltip();

  window.clearTimeout(state.tooltipTimer);
  window.removeEventListener("pointerup", handleToolbarTooltipPressEnd, true);
  window.removeEventListener("pointercancel", handleToolbarTooltipPressEnd, true);
  state.tooltipTimer = null;
  state.tooltipTarget = null;
  state.tooltipBlockClickOnShow = false;
  tooltip.classList.remove("is-visible");
}

function scheduleToolbarTooltip(target, blockClickOnShow) {
  window.clearTimeout(state.tooltipTimer);
  state.tooltipTarget = target;
  state.tooltipBlockClickOnShow = blockClickOnShow;
  state.tooltipTimer = window.setTimeout(() => {
    showToolbarTooltip(target);
    if (state.tooltipBlockClickOnShow) {
      state.tooltipClickBlockTarget = target;
    }
  }, tooltipDelay);
}

function scheduleToolbarTooltipForPress(event) {
  if (event.button !== undefined && event.button !== 0) {
    return;
  }

  state.tooltipClickBlockTarget = null;
  state.tooltipPressX = event.clientX;
  state.tooltipPressY = event.clientY;
  window.addEventListener("pointerup", handleToolbarTooltipPressEnd, true);
  window.addEventListener("pointercancel", handleToolbarTooltipPressEnd, true);
  scheduleToolbarTooltip(event.currentTarget, true);
}

function handleToolbarTooltipPressEnd() {
  hideToolbarTooltip();
}

function handleToolbarTooltipPointerMove(event) {
  if (
    event.pointerType === "mouse" ||
    state.tooltipTarget !== event.currentTarget
  ) {
    return;
  }

  const dx = event.clientX - state.tooltipPressX;
  const dy = event.clientY - state.tooltipPressY;

  if (dx * dx + dy * dy > 64) {
    hideToolbarTooltip();
  }
}

function handleToolbarTooltipClick(event) {
  if (state.tooltipClickBlockTarget !== event.currentTarget) {
    return;
  }

  state.tooltipClickBlockTarget = null;
  event.preventDefault();
  event.stopImmediatePropagation();
  hideToolbarTooltip();
}

function setupToolbarTooltips() {
  const targets = Array.from(
    document.querySelectorAll(
      ".toolbar-toggle button, .toolbar button, .preset-toolbar button, .fullscreen-toolbar button, .action-toolbar button, .undo-toolbar button"
    )
  );

  targets.forEach((target) => {
    if (target.dataset.tooltipReady === "true") {
      return;
    }

    target.dataset.tooltip =
      target.dataset.tooltip ||
      target.getAttribute("aria-label") ||
      target.getAttribute("title") ||
      "";
    target.removeAttribute("title");
    target.dataset.tooltipReady = "true";
    target.addEventListener("pointerleave", hideToolbarTooltip);
    target.addEventListener("pointerdown", scheduleToolbarTooltipForPress);
    target.addEventListener("pointermove", handleToolbarTooltipPointerMove);
    target.addEventListener("pointerup", hideToolbarTooltip);
    target.addEventListener("pointercancel", hideToolbarTooltip);
    target.addEventListener("blur", hideToolbarTooltip);
    target.addEventListener("click", handleToolbarTooltipClick, true);
  });
}

function getDockOrientation(left, top, element) {
  const margin = 8;
  const rect = element.getBoundingClientRect();
  const touchesLeft = left <= margin;
  const touchesTop = top <= margin;
  const touchesRight = left + rect.width >= window.innerWidth - margin;
  const touchesBottom = top + rect.height >= window.innerHeight - margin;

  if (!touchesLeft && !touchesTop && !touchesRight && !touchesBottom) {
    return null;
  }

  const distances = [
    { edge: "left", value: left },
    { edge: "top", value: top },
    { edge: "right", value: window.innerWidth - left - rect.width },
    { edge: "bottom", value: window.innerHeight - top - rect.height },
  ];
  const closestEdge = distances.reduce((closest, next) =>
    next.value < closest.value ? next : closest
  ).edge;

  return closestEdge === "left" || closestEdge === "right"
    ? "vertical"
    : "horizontal";
}

function getPointerDockOrientation(point) {
  const margin = 16;
  const distances = [
    { edge: "left", value: point.x },
    { edge: "top", value: point.y },
    { edge: "right", value: window.innerWidth - point.x },
    { edge: "bottom", value: window.innerHeight - point.y },
  ];
  const touchedEdges = distances.filter((distance) => distance.value <= margin);

  if (touchedEdges.length === 0) {
    return null;
  }

  const closestEdge = touchedEdges.reduce((closest, next) =>
    next.value < closest.value ? next : closest
  ).edge;

  return closestEdge === "left" || closestEdge === "right"
    ? "vertical"
    : "horizontal";
}

function applyToolbarOrientation(element, orientation) {
  if (!orientation) {
    return;
  }

  element.dataset.orientation = orientation;
}

function getToolbarAxisAnchor(start, size, viewportSize) {
  const center = start + size / 2;

  if (center <= viewportSize / 3) {
    return "start";
  }

  if (center >= (viewportSize * 2) / 3) {
    return "end";
  }

  return "center";
}

function getToolbarAxisValue(anchor, start, size, viewportSize) {
  if (anchor === "end") {
    return viewportSize - start - size;
  }

  if (anchor === "center") {
    return (start + size / 2) / viewportSize;
  }

  return start;
}

function getToolbarAxisPosition(anchor, value, size, viewportSize, fallback) {
  if (typeof value !== "number" || !isFinite(value)) {
    return fallback;
  }

  if (anchor === "end") {
    return viewportSize - size - value;
  }

  if (anchor === "center") {
    return value * viewportSize - size / 2;
  }

  return value;
}

function createToolbarPositionRecord(element, left, top, orientation) {
  const rect = element.getBoundingClientRect();
  const anchorX = getToolbarAxisAnchor(left, rect.width, window.innerWidth);
  const anchorY = getToolbarAxisAnchor(top, rect.height, window.innerHeight);

  return {
    left,
    top,
    orientation,
    anchorX,
    anchorY,
    valueX: getToolbarAxisValue(anchorX, left, rect.width, window.innerWidth),
    valueY: getToolbarAxisValue(anchorY, top, rect.height, window.innerHeight),
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
  };
}

function readToolbarPosition(storageKey) {
  let savedPosition = null;

  try {
    savedPosition = localStorage.getItem(storageKey);
  } catch {
    return null;
  }

  if (!savedPosition) {
    return null;
  }

  try {
    return JSON.parse(savedPosition);
  } catch {
    try {
      localStorage.removeItem(storageKey);
    } catch {
      return null;
    }
  }

  return null;
}

function getResponsiveToolbarPosition(position, element) {
  if (!position) {
    return null;
  }

  const rect = element.getBoundingClientRect();
  const left = getToolbarAxisPosition(
    position.anchorX,
    position.valueX,
    rect.width,
    window.innerWidth,
    Number(position.left || 0)
  );
  const top = getToolbarAxisPosition(
    position.anchorY,
    position.valueY,
    rect.height,
    window.innerHeight,
    Number(position.top || 0)
  );

  return { left, top };
}

function clampToolbarPosition(left, top) {
  const rect = toolbar.getBoundingClientRect();
  const margin = 8;
  const maxLeft = window.innerWidth - rect.width - margin;
  const maxTop = window.innerHeight - rect.height - margin;

  return {
    left: Math.min(Math.max(margin, left), maxLeft),
    top: Math.min(Math.max(margin, top), maxTop),
  };
}

function saveToolbarPosition(position) {
  try {
    localStorage.setItem(toolbarPositionStorageKey, JSON.stringify(position));
  } catch {
    return;
  }
}

function setToolbarPosition(left, top, shouldSave = false) {
  let position = clampToolbarPosition(left, top);
  const orientation = getDockOrientation(position.left, position.top, toolbar);

  applyToolbarOrientation(toolbar, orientation);
  position = clampToolbarPosition(position.left, position.top);

  toolbar.style.left = `${position.left}px`;
  toolbar.style.top = `${position.top}px`;
  toolbar.style.right = "auto";
  toolbar.style.bottom = "auto";
  toolbar.style.transform = "none";

  const record = createToolbarPositionRecord(
    toolbar,
    position.left,
    position.top,
    toolbar.dataset.orientation
  );

  if (shouldSave) {
    saveToolbarPosition(record);
  }

  return record;
}

function restoreToolbarPosition() {
  const position = readToolbarPosition(toolbarPositionStorageKey);

  if (!position) {
    return false;
  }

  applyToolbarOrientation(toolbar, position.orientation);
  const responsivePosition = getResponsiveToolbarPosition(position, toolbar);

  setToolbarPosition(responsivePosition.left, responsivePosition.top);
  return true;
}

function setDefaultToolbarPosition() {
  applyToolbarOrientation(toolbar, "vertical");
  const rect = toolbar.getBoundingClientRect();
  const left = 12;
  const top = (window.innerHeight - rect.height) / 2;

  setToolbarPosition(left, top, true);
}

function reclampToolbarPosition() {
  const savedPosition = readToolbarPosition(toolbarPositionStorageKey);

  if (savedPosition) {
    applyToolbarOrientation(toolbar, savedPosition.orientation);
    const position = getResponsiveToolbarPosition(savedPosition, toolbar);

    setToolbarPosition(position.left, position.top, true);
    return;
  }

  const rect = toolbar.getBoundingClientRect();

  setToolbarPosition(rect.left, rect.top, true);
}

function clampPresetToolbarPosition(left, top) {
  const rect = presetToolbar.getBoundingClientRect();
  const margin = 8;
  const maxLeft = window.innerWidth - rect.width - margin;
  const maxTop = window.innerHeight - rect.height - margin;

  return {
    left: Math.min(Math.max(margin, left), maxLeft),
    top: Math.min(Math.max(margin, top), maxTop),
  };
}

function savePresetToolbarPosition(position) {
  try {
    localStorage.setItem(
      presetToolbarPositionStorageKey,
      JSON.stringify(position)
    );
  } catch {
    return;
  }
}

function setPresetToolbarPosition(left, top, shouldSave = false) {
  let position = clampPresetToolbarPosition(left, top);
  const orientation = getDockOrientation(
    position.left,
    position.top,
    presetToolbar
  );

  applyToolbarOrientation(presetToolbar, orientation);
  position = clampPresetToolbarPosition(position.left, position.top);

  presetToolbar.style.left = `${position.left}px`;
  presetToolbar.style.top = `${position.top}px`;
  presetToolbar.style.right = "auto";
  presetToolbar.style.bottom = "auto";
  presetToolbar.style.transform = "none";

  const record = createToolbarPositionRecord(
    presetToolbar,
    position.left,
    position.top,
    presetToolbar.dataset.orientation
  );

  if (shouldSave) {
    savePresetToolbarPosition(record);
  }

  return record;
}

function restorePresetToolbarPosition() {
  const position = readToolbarPosition(presetToolbarPositionStorageKey);

  if (!position) {
    return false;
  }

  applyToolbarOrientation(presetToolbar, position.orientation);
  const responsivePosition = getResponsiveToolbarPosition(
    position,
    presetToolbar
  );

  setPresetToolbarPosition(
    responsivePosition.left,
    responsivePosition.top
  );
  return true;
}

function reclampPresetToolbarPosition() {
  if (presetToolbar.classList.contains("is-hidden")) {
    return;
  }

  const savedPosition = readToolbarPosition(presetToolbarPositionStorageKey);

  if (savedPosition) {
    applyToolbarOrientation(presetToolbar, savedPosition.orientation);
    const position = getResponsiveToolbarPosition(savedPosition, presetToolbar);

    setPresetToolbarPosition(position.left, position.top, true);
    return;
  }

  const rect = presetToolbar.getBoundingClientRect();

  setPresetToolbarPosition(rect.left, rect.top, true);
}

function setDefaultPresetToolbarPosition() {
  applyToolbarOrientation(presetToolbar, "horizontal");
  const rect = presetToolbar.getBoundingClientRect();
  const left = 12;
  const top = window.innerHeight - rect.height - 12;

  setPresetToolbarPosition(left, top, true);
}

function clampUndoToolbarPosition(left, top) {
  const rect = undoToolbar.getBoundingClientRect();
  const margin = 8;
  const maxLeft = window.innerWidth - rect.width - margin;
  const maxTop = window.innerHeight - rect.height - margin;

  return {
    left: Math.min(Math.max(margin, left), maxLeft),
    top: Math.min(Math.max(margin, top), maxTop),
  };
}

function saveUndoToolbarPosition(position) {
  try {
    localStorage.setItem(
      undoToolbarPositionStorageKey,
      JSON.stringify(position)
    );
  } catch {
    return;
  }
}

function setUndoToolbarPosition(left, top, shouldSave = false) {
  let position = clampUndoToolbarPosition(left, top);
  const orientation = getDockOrientation(position.left, position.top, undoToolbar);

  applyToolbarOrientation(undoToolbar, orientation);
  position = clampUndoToolbarPosition(position.left, position.top);

  undoToolbar.style.left = `${position.left}px`;
  undoToolbar.style.top = `${position.top}px`;
  undoToolbar.style.right = "auto";
  undoToolbar.style.bottom = "auto";
  undoToolbar.style.transform = "none";

  const record = createToolbarPositionRecord(
    undoToolbar,
    position.left,
    position.top,
    undoToolbar.dataset.orientation
  );

  if (shouldSave) {
    saveUndoToolbarPosition(record);
  }

  return record;
}

function restoreUndoToolbarPosition() {
  const position = readToolbarPosition(undoToolbarPositionStorageKey);

  if (!position) {
    return false;
  }

  applyToolbarOrientation(undoToolbar, position.orientation);
  const responsivePosition = getResponsiveToolbarPosition(position, undoToolbar);

  setUndoToolbarPosition(
    responsivePosition.left,
    responsivePosition.top
  );
  return true;
}

function reclampUndoToolbarPosition() {
  const savedPosition = readToolbarPosition(undoToolbarPositionStorageKey);

  if (savedPosition) {
    applyToolbarOrientation(undoToolbar, savedPosition.orientation);
    const position = getResponsiveToolbarPosition(savedPosition, undoToolbar);

    setUndoToolbarPosition(position.left, position.top, true);
    return;
  }

  const rect = undoToolbar.getBoundingClientRect();

  setUndoToolbarPosition(rect.left, rect.top, true);
}

function setDefaultUndoToolbarPosition() {
  applyToolbarOrientation(undoToolbar, "horizontal");
  setUndoToolbarPosition(12, 12, true);
}

function clampFullscreenToolbarPosition(left, top) {
  const rect = fullscreenToolbar.getBoundingClientRect();
  const margin = 8;
  const maxLeft = window.innerWidth - rect.width - margin;
  const maxTop = window.innerHeight - rect.height - margin;

  return {
    left: Math.min(Math.max(margin, left), maxLeft),
    top: Math.min(Math.max(margin, top), maxTop),
  };
}

function saveFullscreenToolbarPosition(position) {
  try {
    localStorage.setItem(
      fullscreenToolbarPositionStorageKey,
      JSON.stringify(position)
    );
  } catch {
    return;
  }
}

function setFullscreenToolbarPosition(left, top, shouldSave = false) {
  let position = clampFullscreenToolbarPosition(left, top);
  const orientation = getDockOrientation(
    position.left,
    position.top,
    fullscreenToolbar
  );

  applyToolbarOrientation(fullscreenToolbar, orientation);
  position = clampFullscreenToolbarPosition(position.left, position.top);

  fullscreenToolbar.style.left = `${position.left}px`;
  fullscreenToolbar.style.top = `${position.top}px`;
  fullscreenToolbar.style.right = "auto";
  fullscreenToolbar.style.bottom = "auto";
  fullscreenToolbar.style.transform = "none";

  const record = createToolbarPositionRecord(
    fullscreenToolbar,
    position.left,
    position.top,
    fullscreenToolbar.dataset.orientation
  );

  if (shouldSave) {
    saveFullscreenToolbarPosition(record);
  }

  return record;
}

function restoreFullscreenToolbarPosition() {
  const position = readToolbarPosition(fullscreenToolbarPositionStorageKey);

  if (!position) {
    return false;
  }

  applyToolbarOrientation(fullscreenToolbar, position.orientation);
  const responsivePosition = getResponsiveToolbarPosition(
    position,
    fullscreenToolbar
  );

  setFullscreenToolbarPosition(
    responsivePosition.left,
    responsivePosition.top
  );
  return true;
}

function reclampFullscreenToolbarPosition() {
  const savedPosition = readToolbarPosition(fullscreenToolbarPositionStorageKey);

  if (savedPosition) {
    applyToolbarOrientation(fullscreenToolbar, savedPosition.orientation);
    const position = getResponsiveToolbarPosition(
      savedPosition,
      fullscreenToolbar
    );

    setFullscreenToolbarPosition(position.left, position.top, true);
    return;
  }

  const rect = fullscreenToolbar.getBoundingClientRect();

  setFullscreenToolbarPosition(rect.left, rect.top, true);
}

function setDefaultFullscreenToolbarPosition() {
  applyToolbarOrientation(fullscreenToolbar, "horizontal");
  const rect = fullscreenToolbar.getBoundingClientRect();
  const left = window.innerWidth - rect.width - 12;

  setFullscreenToolbarPosition(left, 12, true);
}

function resetToolbarPositions() {
  hideToolbarTooltip();

  [
    toolbarPositionStorageKey,
    presetToolbarPositionStorageKey,
    undoToolbarPositionStorageKey,
    fullscreenToolbarPositionStorageKey,
    toolbarTogglePositionStorageKey,
    "presetToolbarPositionBottomRight",
  ].forEach((key) => {
    try {
      localStorage.removeItem(key);
    } catch {
      return;
    }
  });

  setDefaultToolbarPosition();
  setDefaultPresetToolbarPosition();
  setDefaultUndoToolbarPosition();
  setDefaultFullscreenToolbarPosition();
  setDefaultToolbarTogglePosition();
  setSaveStatus("Toolbars reset");
}

function startToolbarDrag(event) {
  if (event.cancelable) {
    event.preventDefault();
  }

  const rect = toolbar.getBoundingClientRect();
  const offset = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };

  let lastPosition = {
    left: rect.left,
    top: rect.top,
    orientation: toolbar.dataset.orientation,
  };

  function moveToolbar(moveEvent) {
    if (moveEvent.cancelable) {
      moveEvent.preventDefault();
    }

    applyToolbarOrientation(
      toolbar,
      getPointerDockOrientation({ x: moveEvent.clientX, y: moveEvent.clientY })
    );
    lastPosition = setToolbarPosition(
      moveEvent.clientX - offset.x,
      moveEvent.clientY - offset.y
    );
  }

  function stopToolbarDrag() {
    if (lastPosition) {
      saveToolbarPosition(lastPosition);
    }

    window.removeEventListener("pointermove", moveToolbar);
    window.removeEventListener("pointerup", stopToolbarDrag);
    window.removeEventListener("pointercancel", stopToolbarDrag);
    window.removeEventListener("blur", stopToolbarDrag);
  }

  window.addEventListener("pointermove", moveToolbar, { passive: false });
  window.addEventListener("pointerup", stopToolbarDrag, { once: true });
  window.addEventListener("pointercancel", stopToolbarDrag, { once: true });
  window.addEventListener("blur", stopToolbarDrag, { once: true });
}

function startPresetToolbarDrag(event) {
  if (event.cancelable) {
    event.preventDefault();
  }

  const rect = presetToolbar.getBoundingClientRect();
  const offset = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };

  let lastPosition = {
    left: rect.left,
    top: rect.top,
    orientation: presetToolbar.dataset.orientation,
  };

  function movePresetToolbar(moveEvent) {
    if (moveEvent.cancelable) {
      moveEvent.preventDefault();
    }

    applyToolbarOrientation(
      presetToolbar,
      getPointerDockOrientation({ x: moveEvent.clientX, y: moveEvent.clientY })
    );
    lastPosition = setPresetToolbarPosition(
      moveEvent.clientX - offset.x,
      moveEvent.clientY - offset.y
    );
  }

  function stopPresetToolbarDrag() {
    if (lastPosition) {
      savePresetToolbarPosition(lastPosition);
    }

    window.removeEventListener("pointermove", movePresetToolbar);
    window.removeEventListener("pointerup", stopPresetToolbarDrag);
    window.removeEventListener("pointercancel", stopPresetToolbarDrag);
    window.removeEventListener("blur", stopPresetToolbarDrag);
  }

  window.addEventListener("pointermove", movePresetToolbar, { passive: false });
  window.addEventListener("pointerup", stopPresetToolbarDrag, { once: true });
  window.addEventListener("pointercancel", stopPresetToolbarDrag, {
    once: true,
  });
  window.addEventListener("blur", stopPresetToolbarDrag, { once: true });
}

function startUndoToolbarDrag(event) {
  if (event.cancelable) {
    event.preventDefault();
  }

  const rect = undoToolbar.getBoundingClientRect();
  const offset = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };

  let lastPosition = {
    left: rect.left,
    top: rect.top,
    orientation: undoToolbar.dataset.orientation,
  };

  function moveUndoToolbar(moveEvent) {
    if (moveEvent.cancelable) {
      moveEvent.preventDefault();
    }

    applyToolbarOrientation(
      undoToolbar,
      getPointerDockOrientation({ x: moveEvent.clientX, y: moveEvent.clientY })
    );
    lastPosition = setUndoToolbarPosition(
      moveEvent.clientX - offset.x,
      moveEvent.clientY - offset.y
    );
  }

  function stopUndoToolbarDrag() {
    if (lastPosition) {
      saveUndoToolbarPosition(lastPosition);
    }

    window.removeEventListener("pointermove", moveUndoToolbar);
    window.removeEventListener("pointerup", stopUndoToolbarDrag);
    window.removeEventListener("pointercancel", stopUndoToolbarDrag);
    window.removeEventListener("blur", stopUndoToolbarDrag);
  }

  window.addEventListener("pointermove", moveUndoToolbar, { passive: false });
  window.addEventListener("pointerup", stopUndoToolbarDrag, { once: true });
  window.addEventListener("pointercancel", stopUndoToolbarDrag, { once: true });
  window.addEventListener("blur", stopUndoToolbarDrag, { once: true });
}

function startFullscreenToolbarDrag(event) {
  if (event.cancelable) {
    event.preventDefault();
  }

  const rect = fullscreenToolbar.getBoundingClientRect();
  const offset = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };

  let lastPosition = {
    left: rect.left,
    top: rect.top,
    orientation: fullscreenToolbar.dataset.orientation,
  };

  function moveFullscreenToolbar(moveEvent) {
    if (moveEvent.cancelable) {
      moveEvent.preventDefault();
    }

    applyToolbarOrientation(
      fullscreenToolbar,
      getPointerDockOrientation({ x: moveEvent.clientX, y: moveEvent.clientY })
    );
    lastPosition = setFullscreenToolbarPosition(
      moveEvent.clientX - offset.x,
      moveEvent.clientY - offset.y
    );
  }

  function stopFullscreenToolbarDrag() {
    if (lastPosition) {
      saveFullscreenToolbarPosition(lastPosition);
    }

    window.removeEventListener("pointermove", moveFullscreenToolbar);
    window.removeEventListener("pointerup", stopFullscreenToolbarDrag);
    window.removeEventListener("pointercancel", stopFullscreenToolbarDrag);
    window.removeEventListener("blur", stopFullscreenToolbarDrag);
  }

  window.addEventListener("pointermove", moveFullscreenToolbar, {
    passive: false,
  });
  window.addEventListener("pointerup", stopFullscreenToolbarDrag, {
    once: true,
  });
  window.addEventListener("pointercancel", stopFullscreenToolbarDrag, {
    once: true,
  });
  window.addEventListener("blur", stopFullscreenToolbarDrag, { once: true });
}

function startToolbarToggleDrag(event) {
  if (event.cancelable) {
    event.preventDefault();
  }

  event.stopPropagation();
  hideToolbarTooltip();

  let lastPosition = {
    edge: toolbarToggle.dataset.edge || "top",
    offset: isHorizontalToggleEdge(toolbarToggle.dataset.edge || "top")
      ? event.clientX
      : event.clientY,
  };

  function moveToolbarToggle(moveEvent) {
    if (moveEvent.cancelable) {
      moveEvent.preventDefault();
    }

    const point = {
      x: moveEvent.clientX,
      y: moveEvent.clientY,
    };
    const edge = getToolbarToggleEdgeFromPointer(point, lastPosition.edge);

    lastPosition = setToolbarTogglePosition(
      edge,
      getToolbarToggleOffsetFromPointer(edge, point)
    );
  }

  function stopToolbarToggleDrag() {
    saveToolbarTogglePosition(lastPosition.edge, lastPosition.offset);
    window.removeEventListener("pointermove", moveToolbarToggle);
    window.removeEventListener("pointerup", stopToolbarToggleDrag);
    window.removeEventListener("pointercancel", stopToolbarToggleDrag);
    window.removeEventListener("blur", stopToolbarToggleDrag);
  }

  window.addEventListener("pointermove", moveToolbarToggle, {
    passive: false,
  });
  window.addEventListener("pointerup", stopToolbarToggleDrag, { once: true });
  window.addEventListener("pointercancel", stopToolbarToggleDrag, {
    once: true,
  });
  window.addEventListener("blur", stopToolbarToggleDrag, { once: true });
}

function addPresetButtonInteractions(button) {
  let lastTapAt = 0;
  const index = Number(button.dataset.presetIndex);

  button.addEventListener("click", () => {
    const now = window.performance.now();
    const isDoubleTap = now - lastTapAt <= doubleTapDelay;

    lastTapAt = isDoubleTap ? 0 : now;
    selectPreset(index);

    if (isDoubleTap) {
      openPresetSettings(index);
    }
  });
}

function addToolButtonInteractions(button) {
  let lastTapAt = 0;

  button.addEventListener("click", () => {
    const tool = button.dataset.tool;
    const now = window.performance.now();
    const isDoubleTap = now - lastTapAt <= doubleTapDelay;

    lastTapAt = isDoubleTap ? 0 : now;
    setTool(tool);

    if (tool === "erase" && isDoubleTap) {
      openEraserSettings();
    }
  });
}

function addRotationInputInteractions(input, output, getRotation, setRotation) {
  let isDragging = false;
  const update = () => setRotationFromSlider(input, output, setRotation);
  const endDrag = (event, shouldUpdateFromPointer) => {
    if (!isDragging) {
      return;
    }

    isDragging = false;

    if (input.hasPointerCapture && input.hasPointerCapture(event.pointerId)) {
      input.releasePointerCapture(event.pointerId);
    }

    if (shouldUpdateFromPointer) {
      setRotationSliderValueFromPointer(input, event);
      update();
    }

    normalizeRotationInput(input, output, getRotation());
  };

  input.addEventListener("input", update);
  input.addEventListener("change", update);
  input.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
    if (event.cancelable) {
      event.preventDefault();
    }
    hideToolbarTooltip();

    if (input.setPointerCapture) {
      input.setPointerCapture(event.pointerId);
    }

    isDragging = true;
    setRotationSliderValueFromPointer(input, event);
    update();
  });
  input.addEventListener("pointermove", (event) => {
    if (!isDragging) {
      return;
    }

    if (event.cancelable) {
      event.preventDefault();
    }

    setRotationSliderValueFromPointer(input, event);
    update();
  });
  input.addEventListener("pointerup", (event) => {
    endDrag(event, true);
  });
  input.addEventListener("pointercancel", (event) => {
    endDrag(event, false);
  });
  input.addEventListener("blur", () =>
    normalizeRotationInput(input, output, getRotation())
  );
}

function addProportionalResizeToggleInteraction(button, toggle) {
  let handledPointerToggle = false;

  button.addEventListener("pointerup", (event) => {
    if (button.disabled) {
      return;
    }

    handledPointerToggle = true;
    window.setTimeout(() => {
      handledPointerToggle = false;
    }, 0);
    event.preventDefault();
    event.stopPropagation();
    hideToolbarTooltip();
    toggle();
  }, true);
  button.addEventListener("click", (event) => {
    if (handledPointerToggle) {
      handledPointerToggle = false;
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }

    hideToolbarTooltip();
    toggle();
  });
}

async function initializeApp() {
  ensureVersionBadge();
  restorePresets();
  restoreGlobalSettings();
  buildPresetColorGrid();
  buildShapeColorGrid(shapeStrokeColorGrid, "strokeColor");
  buildShapeColorGrid(shapeFillColorGrid, "fillColor");
  updatePresetButtons();
  syncShapeDialog();
  updateActionToolbar();
  updateToolbarVisibility();
  updateEraserSize(brush.eraseSize);
  applyToolbarOrientation(toolbar, "vertical");
  applyToolbarOrientation(presetToolbar, "horizontal");
  applyToolbarOrientation(undoToolbar, "horizontal");
  applyToolbarOrientation(fullscreenToolbar, "horizontal");

  if (!restoreToolbarPosition()) {
    setDefaultToolbarPosition();
  }
  if (!restorePresetToolbarPosition()) {
    setDefaultPresetToolbarPosition();
  }
  if (!restoreUndoToolbarPosition()) {
    setDefaultUndoToolbarPosition();
  }
  if (!restoreFullscreenToolbarPosition()) {
    setDefaultFullscreenToolbarPosition();
  }
  if (!restoreToolbarTogglePosition()) {
    setDefaultToolbarTogglePosition();
  }

  updateFullscreenButton();
  setupToolbarTooltips();
  resizeCanvas();

  try {
    await refreshDocuments();
    updateDocumentSubtitle();
    updatePageControls();
    renderWorkspace();
  } catch (error) {
    setSaveStatus("Storage unavailable");
    console.error(error);
  }

  showDocumentScreen();
}

toolButtons.forEach(addToolButtonInteractions);

presetButtons.forEach(addPresetButtonInteractions);
addRotationInputInteractions(
  shapeRotationInput,
  shapeRotationOutput,
  () => (state.pendingShape ? state.pendingShape.rotation : 0),
  setPendingShapeRotation
);
addRotationInputInteractions(
  imageRotationInput,
  imageRotationOutput,
  () => (state.pendingImage ? state.pendingImage.rotation : 0),
  setPendingImageRotation
);
addRotationInputInteractions(
  lassoRotationInput,
  lassoRotationOutput,
  () => (state.selection ? state.selection.rotation : 0),
  setSelectionRotation
);
openSettingsButton.addEventListener("click", openSettings);
addImageButton.addEventListener("click", openAddImageDialog);
resetToolbarsButton.addEventListener("click", resetToolbarPositions);
openLibraryButton.addEventListener("click", showDocumentScreen);
closeLibraryButton.addEventListener("click", hideDocumentScreen);
folderBackButton.addEventListener("click", () => {
  const currentFolder = getFolderById(state.currentFolderId);

  if (!currentFolder) {
    return;
  }

  setCurrentFolder(currentFolder.parentId);
});
openGuideButtons.forEach((button) => {
  button.addEventListener("click", openGuide);
});
if (dismissDocumentIntroButton) {
  dismissDocumentIntroButton.addEventListener("click", () => {
    state.documentIntroDismissed = true;
    syncGlobalSettingsControls();
  });
}
newDocumentButton.addEventListener("click", () => {
  createNewDocument().catch((error) => {
    setSaveStatus("Create failed");
    console.error(error);
  });
});
newFolderButton.addEventListener("click", () => {
  createNewFolder().catch((error) => {
    setSaveStatus("Folder failed");
    console.error(error);
  });
});
saveDocumentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    saveDocumentNow().catch((error) => {
      setSaveStatus("Save failed");
      console.error(error);
    });
  });
});
exportDocumentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    exportDocument(state.documentId).catch((error) => {
      setSaveStatus("Export failed");
      console.error(error);
    });
  });
});
exportPngZipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    exportPngZip().catch((error) => {
      setSaveStatus("PNG export failed");
      console.error(error);
    });
  });
});
exportPdfButtons.forEach((button) => {
  button.addEventListener("click", () => {
    exportPdf().catch((error) => {
      setSaveStatus("PDF export failed");
      console.error(error);
    });
  });
});
importDocumentButtons.forEach((button) => {
  button.addEventListener("click", () => importDocumentInput.click());
});
importDocumentInput.addEventListener("change", () => {
  const file = importDocumentInput.files && importDocumentInput.files[0];

  importDocumentFile(file).catch((error) => {
    setSaveStatus("Import failed");
    console.error(error);
  });
});
appDialogForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (state.appDialogMode === "input") {
    closeAppDialog(appDialogInput.value);
    return;
  }

  closeAppDialog(true);
});
appDialogCancelButtons.forEach((button) => {
  button.addEventListener("click", () => closeAppDialog(null));
});
appDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeAppDialog(null);
});
appDialog.addEventListener("close", () => {
  const result = state.appDialogResult;

  appDialogCancelButtons.forEach((button) => {
    button.style.display = "";
  });
  appDialogConfirmButton.classList.remove("is-destructive");

  if (state.appDialogResolve) {
    state.appDialogResolve(result);
    state.appDialogResolve = null;
  }

  state.appDialogResult = null;
});
moveDialogForm.addEventListener("submit", (event) => {
  event.preventDefault();
  closeMoveDialog(moveDialogSelect.value || null);
});
moveDialogCancelButtons.forEach((button) => {
  button.addEventListener("click", () => closeMoveDialog(undefined));
});
moveDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeMoveDialog(undefined);
});
moveDialog.addEventListener("close", () => {
  const result = state.moveDialogResult;

  if (state.moveDialogResolve) {
    state.moveDialogResolve(result);
    state.moveDialogResolve = null;
  }

  state.moveDialogResult = undefined;
});
documentScreen.addEventListener("click", (event) => {
  if (!event.target.closest(".document-row-actions, .document-menu")) {
    closeDocumentMenus();
  }
});
documentPanel.addEventListener("scroll", closeDocumentMenus);
documentRenameButton.addEventListener("click", () => {
  const id = documentActionMenu.dataset.documentId;

  closeDocumentMenus();
  renameDocument(id).catch((error) => {
    setSaveStatus("Rename failed");
    console.error(error);
  });
});
documentMoveButton.addEventListener("click", () => {
  const id = documentActionMenu.dataset.documentId;

  closeDocumentMenus();
  moveDocument(id).catch((error) => {
    setSaveStatus("Move failed");
    console.error(error);
  });
});
documentExportButton.addEventListener("click", () => {
  const id = documentActionMenu.dataset.documentId;

  closeDocumentMenus();
  exportDocument(id).catch((error) => {
    setSaveStatus("Export failed");
    console.error(error);
  });
});
documentSavePngButton.addEventListener("click", () => {
  const id = documentActionMenu.dataset.documentId;

  closeDocumentMenus();
  exportPngZip(id).catch((error) => {
    setSaveStatus("PNG export failed");
    console.error(error);
  });
});
documentSavePdfButton.addEventListener("click", () => {
  const id = documentActionMenu.dataset.documentId;

  closeDocumentMenus();
  exportPdf(id).catch((error) => {
    setSaveStatus("PDF export failed");
    console.error(error);
  });
});
documentDeleteButton.addEventListener("click", () => {
  const id = documentActionMenu.dataset.documentId;

  closeDocumentMenus();
  deleteDocument(id).catch((error) => {
    setSaveStatus("Delete failed");
    console.error(error);
  });
});
folderRenameButton.addEventListener("click", () => {
  const id = folderActionMenu.dataset.folderId;

  closeDocumentMenus();
  renameFolder(id).catch((error) => {
    setSaveStatus("Rename failed");
    console.error(error);
  });
});
folderMoveButton.addEventListener("click", () => {
  const id = folderActionMenu.dataset.folderId;

  closeDocumentMenus();
  moveFolder(id).catch((error) => {
    setSaveStatus("Move failed");
    console.error(error);
  });
});
folderDeleteButton.addEventListener("click", () => {
  const id = folderActionMenu.dataset.folderId;

  closeDocumentMenus();
  deleteFolder(id).catch((error) => {
    setSaveStatus("Delete failed");
    console.error(error);
  });
});
undoButton.addEventListener("click", undo);
redoButton.addEventListener("click", redo);
toolbarVisibilityButton.addEventListener("click", toggleToolbarVisibility);
fullscreenButton.addEventListener("click", toggleFullscreen);
shapeSettingsButton.addEventListener("click", openShapeSettings);
addProportionalResizeToggleInteraction(
  shapeProportionalResizeButton,
  togglePendingShapeProportionalResize
);
shapeCommitButton.addEventListener("click", commitPendingShape);
shapeDeleteButton.addEventListener("click", deletePendingShape);
addProportionalResizeToggleInteraction(
  imageProportionalResizeButton,
  togglePendingImageProportionalResize
);
imageCommitButton.addEventListener("click", commitPendingImage);
imageDeleteButton.addEventListener("click", deletePendingImage);
addProportionalResizeToggleInteraction(
  lassoProportionalResizeButton,
  toggleSelectionProportionalResize
);
lassoCopyButton.addEventListener("click", copySelection);
lassoCommitButton.addEventListener("click", commitSelection);
lassoDeleteButton.addEventListener("click", deleteSelection);
lassoPasteButton.addEventListener("click", () => {
  const point = state.canvasContextMenuPoint;

  closeCanvasContextMenu();

  if (point) {
    pasteSelectionAtPoint(point);
  }
});
previousPageButton.addEventListener("click", () =>
  setActivePage(state.activePageIndex - 1)
);
nextPageButton.addEventListener("click", () =>
  setActivePage(state.activePageIndex + 1)
);
addPageButton.addEventListener("click", addPage);
addPageBeforeButton.addEventListener("click", () => addPageAtPlacement("before"));
addPageAfterButton.addEventListener("click", () => addPageAtPlacement("after"));
addPageEndButton.addEventListener("click", () => addPageAtPlacement("end"));
imageFileButton.addEventListener("click", () => imageInput.click());
imageInput.addEventListener("change", () => {
  const file = imageInput.files && imageInput.files[0];

  importImageFile(file).catch((error) => {
    setSaveStatus("Image import failed");
    console.error(error);
  });
});
imagePasteButton.addEventListener("click", () => {
  pasteClipboardImage().catch((error) => {
    setSaveStatus("Image paste failed");
    console.error(error);
  });
});
addImageDialog.addEventListener("close", () => {
  revokeClipboardPreviewUrl();
  state.clipboardImageBlob = null;
  imageInput.value = "";
});
pageIndicator.addEventListener("click", openPageDialog);
pageDialog.addEventListener("click", (event) => {
  if (!event.target.closest(".page-menu-wrap, .page-menu")) {
    closePageMenus();
  }
});
pageDialog.addEventListener("close", closePageMenus);
pageList.addEventListener("scroll", closePageMenus);
pageInsertBeforeButton.addEventListener("click", (event) => {
  const index = Number(pageActionMenu.dataset.pageIndex);

  event.stopPropagation();
  closePageMenus();
  insertPageAt(index);
});
pageInsertAfterButton.addEventListener("click", (event) => {
  const index = Number(pageActionMenu.dataset.pageIndex);

  event.stopPropagation();
  closePageMenus();
  insertPageAt(index + 1);
});
pageDeleteButton.addEventListener("click", (event) => {
  const index = Number(pageActionMenu.dataset.pageIndex);

  event.stopPropagation();
  closePageMenus();
  deletePage(index);
});
eraserSizeInput.addEventListener("input", () =>
  updateEraserSize(eraserSizeInput.value)
);
presetSizeInput.addEventListener("input", () =>
  updateEditingPreset({ size: Number(presetSizeInput.value) })
);
presetOpacityInput.addEventListener("input", () =>
  updateEditingPreset({ opacity: Number(presetOpacityInput.value) / 100 })
);
presetDrawBehindInput.addEventListener("change", () =>
  updateEditingPreset({ drawBehind: presetDrawBehindInput.checked })
);
shapeTypeInputs.forEach((input) => {
  input.addEventListener("change", () => updateShapeConfig({ type: input.value }));
});
shapeStrokeEnabledInput.addEventListener("change", () =>
  updateShapeConfig({ strokeEnabled: shapeStrokeEnabledInput.checked })
);
shapeStrokeWidthInput.addEventListener("input", () =>
  updateShapeConfig({ strokeWidth: Number(shapeStrokeWidthInput.value) })
);
shapeFillEnabledInput.addEventListener("change", () =>
  updateShapeConfig({ fillEnabled: shapeFillEnabledInput.checked })
);
backgroundInputs.forEach((input) => {
  input.addEventListener("change", () => setBackground(input.value));
});
if (touchDrawingInput) {
  touchDrawingInput.addEventListener("change", () => {
    updateGlobalSettings({
      touchDrawingEnabled: touchDrawingInput.checked,
    });
    setSaveStatus(
      touchDrawingInput.checked
        ? "Touch drawing enabled"
        : "Touch drawing disabled"
    );
  });
}
toolbarVisibilityInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const key = input.dataset.toolbarVisibility;

    if (key === "main") {
      input.checked = true;
      return;
    }

    updateGlobalSettings({
      toolbarVisibility: {
        ...state.globalSettings.toolbarVisibility,
        [key]: input.checked,
      },
    });
    if (input.checked) {
      reclampPresetToolbarPosition();
      reclampUndoToolbarPosition();
      reclampFullscreenToolbarPosition();
    }
  });
});
dragHandle.addEventListener("pointerdown", startToolbarDrag);
presetDragHandle.addEventListener("pointerdown", startPresetToolbarDrag);
undoDragHandle.addEventListener("pointerdown", startUndoToolbarDrag);
fullscreenDragHandle.addEventListener("pointerdown", startFullscreenToolbarDrag);
toolbarToggleDragHandle.addEventListener("pointerdown", startToolbarToggleDrag);
canvas.addEventListener("pointerdown", startCanvasPasteLongPress);
canvas.addEventListener(moveEventName, updateCanvasPasteLongPress);
canvas.addEventListener("pointerup", cancelCanvasPasteLongPress);
canvas.addEventListener("pointercancel", cancelCanvasPasteLongPress);
canvas.addEventListener("pointerdown", startCanvasAction);
canvas.addEventListener(moveEventName, continueCanvasAction);
canvas.addEventListener("pointerup", endCanvasAction);
canvas.addEventListener("pointercancel", endCanvasAction);
canvas.addEventListener("pointerleave", endCanvasAction);
canvas.addEventListener("wheel", handleCanvasWheel, false);
canvas.addEventListener("contextmenu", handleCanvasContextMenu);

window.addEventListener("resize", () => {
  hideToolbarTooltip();
  closeCanvasContextMenu();
  resizeCanvas();
  reclampToolbarPosition();
  reclampPresetToolbarPosition();
  reclampUndoToolbarPosition();
  reclampFullscreenToolbarPosition();
  reclampToolbarTogglePosition();
});
window.addEventListener("keydown", handlePageNavigationKeyDown, true);
document.addEventListener("pointerdown", closeCanvasContextMenuFromDocument, true);
document.addEventListener("paste", handlePasteEvent);
document.addEventListener("fullscreenchange", updateFullscreenButton);
initializeApp();
