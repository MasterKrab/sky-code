/*
Copyright (c) 2017-present Olaolu Olawuyi

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

export default {
  inherit: false,
  base: "vs-dark",
  colors: {
    contrastBorder: "#282B3C",
    focusBorder: "#282B3C",
    foreground: "#ffffff",
    "widget.shadow": "#232635",
    "selection.background": "#7580B850",
    errorForeground: "#EF5350",
    "button.background": "#7e57c2cc",
    "button.foreground": "#ffffffcc",
    "button.hoverBackground": "#7e57c2",
    "dropdown.background": "#292D3E",
    "dropdown.border": "#7e57c2",
    "dropdown.foreground": "#ffffffcc",
    "input.background": "#313850",
    "input.border": "#7e57c2",
    "input.foreground": "#ffffffcc",
    "input.placeholderForeground": "#ffffffcc",
    "inputOption.activeBorder": "#ffffffcc",
    "inputValidation.errorBackground": "#ef5350f2",
    "inputValidation.errorBorder": "#EF5350",
    "inputValidation.infoBackground": "#64b5f6f2",
    "inputValidation.infoBorder": "#64B5F6",
    "inputValidation.warningBackground": "#ffca28f2",
    "inputValidation.warningBorder": "#FFCA28",
    "scrollbar.shadow": "#292D3E00",
    "scrollbarSlider.activeBackground": "#694CA4cc",
    "scrollbarSlider.background": "#694CA466",
    "scrollbarSlider.hoverBackground": "#694CA4cc",
    "badge.background": "#7e57c2",
    "badge.foreground": "#ffffff",
    "progress.background": "#7e57c2",
    "list.activeSelectionBackground": "#7e57c2",
    "list.activeSelectionForeground": "#ffffff",
    "list.dropBackground": "#2E3245",
    "list.focusBackground": "#0000002e",
    "list.focusForeground": "#ffffff",
    "list.highlightForeground": "#ffffff",
    "list.hoverBackground": "#0000001a",
    "list.hoverForeground": "#ffffff",
    "list.inactiveSelectionBackground": "#929ac90d",
    "list.inactiveSelectionForeground": "#929ac9",
    "activityBar.background": "#282C3D",
    "activityBar.dropBackground": "#7e57c2e3",
    "activityBar.foreground": "#eeffff",
    "activityBar.border": "#282C3D",
    "activityBarBadge.background": "#7e57c2",
    "activityBarBadge.foreground": "#ffffff",
    "sideBar.background": "#292D3E",
    "sideBar.foreground": "#6C739A",
    "sideBar.border": "#282B3C",
    "sideBarTitle.foreground": "#eeffff",
    "sideBarSectionHeader.background": "#292D3E",
    "sideBarSectionHeader.foreground": "#eeffff",
    "editorGroup.background": "#32374C",
    "editorGroup.border": "#2E3245",
    "editorGroup.dropBackground": "#7e57c273",
    "editorGroupHeader.noTabsBackground": "#32374C",
    "editorGroupHeader.tabsBackground": "#31364a",
    "editorGroupHeader.tabsBorder": "#262A39",
    "tab.activeBackground": "#292D3E",
    "tab.activeForeground": "#eeffff",
    "tab.border": "#272B3B",
    "tab.activeBorder": "#262A39",
    "tab.unfocusedActiveBorder": "#262A39",
    "tab.inactiveBackground": "#31364A",
    "tab.inactiveForeground": "#929ac9",
    "editor.background": "#292D3E",
    "editor.foreground": "#BFC7D5",
    "editorLineNumber.foreground": "#4c5374",
    "editorLineNumber.activeForeground": "#eeffff",
    "editorCursor.foreground": "#7e57c2",
    "editor.selectionBackground": "#7580B850",
    "editor.selectionHighlightBackground": "#383D51",
    "editor.inactiveSelectionBackground": "#7e57c25a",
    "editor.wordHighlightBackground": "#32374D",
    "editor.wordHighlightStrongBackground": "#2E3250",
    "editor.findMatchBackground": "#7e57c25a",
    "editor.findMatchHighlightBackground": "#2E3248",
    "editor.hoverHighlightBackground": "#7e57c25a",
    "editor.lineHighlightBackground": "#0003",

    "editor.rangeHighlightBackground": "#7e57c25a",
    "editorIndentGuide.background": "#4E557980",
    "editorCodeLens.foreground": "#FFCA28",
    "editorOverviewRuler.currentContentForeground": "#7e57c2",
    "editorOverviewRuler.incomingContentForeground": "#7e57c2",
    "editorOverviewRuler.commonContentForeground": "#7e57c2",
    "editorError.foreground": "#EF5350",
    "editorWarning.foreground": "#FFCA28",
    "editorGutter.modifiedBackground": "#e2b93d",
    "editorGutter.addedBackground": "#9CCC65",
    "editorGutter.deletedBackground": "#EF5350",
    "diffEditor.insertedTextBackground": "#99b76d23",
    "diffEditor.removedTextBackground": "#ef535033",
    "editorWidget.background": "#31364a",
    "editorSuggestWidget.background": "#2C3043",
    "editorSuggestWidget.border": "#2B2F40",
    "editorSuggestWidget.foreground": "#bfc7d5",
    "editorSuggestWidget.highlightForeground": "#ffffff",
    "editorSuggestWidget.selectedBackground": "#7e57c2",
    "editorHoverWidget.background": "#292D3E",
    "editorHoverWidget.border": "#7e57c2",
    "debugExceptionWidget.background": "#292D3E",
    "debugExceptionWidget.border": "#7e57c2",
    "editorMarkerNavigation.background": "#31364a",
    "editorMarkerNavigationError.background": "#EF5350",
    "editorMarkerNavigationWarning.background": "#FFCA28",
    "peekView.border": "#7e57c2",
    "peekViewEditor.background": "#232635",
    "peekViewEditor.matchHighlightBackground": "#7e57c25a",
    "peekViewResult.background": "#2E3245",
    "peekViewResult.fileForeground": "#eeffff",
    "peekViewResult.lineForeground": "#eeffff",
    "peekViewResult.matchHighlightBackground": "#7e57c25a",
    "peekViewResult.selectionBackground": "#2E3250",
    "peekViewResult.selectionForeground": "#eeffff",
    "peekViewTitle.background": "#292D3E",
    "peekViewTitleDescription.foreground": "#697098",
    "peekViewTitleLabel.foreground": "#eeffff",
    "merge.currentHeaderBackground": "#7e57c25a",
    "merge.incomingHeaderBackground": "#7e57c25a",
    "panel.background": "#292D3E",
    "panel.border": "#282B3C",
    "panelTitle.activeBorder": "#7e57c2",
    "panelTitle.activeForeground": "#eeffff",
    "panelTitle.inactiveForeground": "#bfc7d580",
    "statusBar.background": "#282C3D",
    "statusBar.foreground": "#676E95",
    "statusBar.border": "#262A39",
    "statusBar.debuggingBackground": "#202431",
    "statusBar.debuggingBorder": "#1F2330",
    "statusBar.noFolderBackground": "#292D3E",
    "statusBar.noFolderBorder": "#25293A",
    "statusBarItem.activeBackground": "#202431",
    "statusBarItem.hoverBackground": "#202431",
    "statusBarItem.prominentBackground": "#202431",
    "statusBarItem.prominentHoverBackground": "#202431",
    "titleBar.activeBackground": "#292d3e",
    "titleBar.activeForeground": "#eeefff",
    "titleBar.border": "#30364c",
    "titleBar.inactiveBackground": "#30364c",
    "notifications.background": "#292D3E",
    "notifications.foreground": "#ffffffcc",
    "notificationLink.foreground": "#80CBC4",
    "extensionButton.prominentForeground": "#ffffffcc",
    "extensionButton.prominentBackground": "#7e57c2cc",
    "extensionButton.prominentHoverBackground": "#7e57c2",
    "pickerGroup.foreground": "#d1aaff",
    "pickerGroup.border": "#2E3245",
    "terminal.ansiWhite": "#ffffff",
    "terminal.ansiBlack": "#676E95",
    "terminal.ansiBlue": "#82AAFF",
    "terminal.ansiCyan": "#89DDFF",
    "terminal.ansiGreen": "#a9c77d",
    "terminal.ansiMagenta": "#C792EA",
    "terminal.ansiRed": "#ff5572",
    "terminal.ansiYellow": "#FFCB6B",
    "terminal.ansiBrightWhite": "#ffffff",
    "terminal.ansiBrightBlack": "#676E95",
    "terminal.ansiBrightBlue": "#82AAFF",
    "terminal.ansiBrightCyan": "#89DDFF",
    "terminal.ansiBrightGreen": "#C3E88D",
    "terminal.ansiBrightMagenta": "#C792EA",
    "terminal.ansiBrightRed": "#ff5572",
    "terminal.ansiBrightYellow": "#FFCB6B",
    "debugToolBar.background": "#292D3E",
    "walkThrough.embeddedEditorBackground": "#232635",
    "gitDecoration.modifiedResourceForeground": "#e2c08de6",
    "gitDecoration.deletedResourceForeground": "#EF535090",
    "gitDecoration.untrackedResourceForeground": "#a9c77dff",
    "gitDecoration.ignoredResourceForeground": "#69709890",
    "gitDecoration.conflictingResourceForeground": "#FFEB95CC",
    "editorActiveLineNumber.foreground": "#eeffff",
    "breadcrumb.foreground": "#6c739a",
    "breadcrumb.focusForeground": "#bfc7d5",
    "breadcrumb.activeSelectionForeground": "#eeffff",
    "breadcrumbPicker.background": "#292D3E",
  },
  rules: [
    {
      foreground: "#697098",
      fontStyle: "italic",
      token: "comment",
    },
    {
      foreground: "#C3E88D",
      token: "string",
    },
    {
      foreground: "#ff5370",
      token: "number",
    },
    {
      foreground: "#C3E88D",
      token: "string.quoted",
    },
    {
      foreground: "#bfc7d5",
      token: "string.unquoted",
    },
    {
      foreground: "#ffcb6b",
      token: "support.constant.math",
    },
    {
      foreground: "#F78C6C",
      token: "constant.numeric",
    },
    {
      foreground: "#F78C6C",
      token: "constant.character.numeric",
    },
    {
      foreground: "#82AAFF",
      token: "constant.language",
    },
    {
      foreground: "#82AAFF",
      token: "punctuation.definition.constant",
    },
    {
      foreground: "#82AAFF",
      token: "variable.other.constant",
    },
    {
      foreground: "#82AAFF",
      token: "constant.character",
    },
    {
      foreground: "#82AAFF",
      token: "constant.other",
    },
    {
      foreground: "#F78C6C",
      token: "constant.character.escape",
    },
    {
      foreground: "#80CBC4",
      token: "string.regexp",
    },
    {
      foreground: "#80CBC4",
      token: "string.regexp keyword.other",
    },
    {
      foreground: "#eeffff",
      token: "meta.function punctuation.separator.comma",
    },
    {
      foreground: "#ffcb6b",
      token: "variable",
    },
    {
      foreground: "#c792ea",
      token: "punctuation.accessor",
    },
    {
      foreground: "#c792ea",
      token: "keyword",
    },
    {
      foreground: "#c792ea",
      token: "storage",
    },
    {
      foreground: "#c792ea",
      token: "storage.type",
    },
    {
      foreground: "#c792ea",
      token: "meta.var.expr storage.type",
    },
    {
      foreground: "#c792ea",
      token: "storage.type.property.js",
    },
    {
      foreground: "#c792ea",
      token: "storage.type.property.ts",
    },
    {
      foreground: "#c792ea",
      token: "storage.type.property.tsx",
    },
    {
      foreground: "#c792ea",
      token: "meta.class meta.method.declaration meta.var.expr storage.type.js",
    },
    {
      foreground: "#ffcb6b",
      token: "entity.name.class",
    },
    {
      foreground: "#ffcb6b",
      token: "meta.class entity.name.type.class",
    },
    {
      foreground: "#a9c77d",
      token: "entity.other.inherited-class",
    },
    {
      foreground: "#82AAFF",
      token: "entity.name.function",
    },
    {
      foreground: "#7986E7",
      token: "variable.parameter",
    },
    {
      foreground: "#89DDFF",
      token: "punctuation.definition.tag",
    },
    {
      foreground: "#89DDFF",
      token: "meta.tag",
    },
    {
      foreground: "#ff5572",
      token: "entity.name.tag support.class.component",
    },
    {
      foreground: "#ff5572",
      token: "meta.tag.other.html",
    },
    {
      foreground: "#ff5572",
      token: "meta.tag.other.js",
    },
    {
      foreground: "#ff5572",
      token: "meta.tag.other.tsx",
    },
    {
      foreground: "#ff5572",
      token: "entity.name.tag.tsx",
    },
    {
      foreground: "#ff5572",
      token: "entity.name.tag.js",
    },
    {
      foreground: "#ff5572",
      token: "entity.name.tag",
    },
    {
      foreground: "#ff5572",
      token: "meta.tag.js",
    },
    {
      foreground: "#ff5572",
      token: "meta.tag.tsx",
    },
    {
      foreground: "#ff5572",
      token: "meta.tag.html",
    },
    {
      foreground: "#ffcb6b",
      token: "entity.other.attribute-name",
    },
    {
      foreground: "#ffcb6b",
      token: "entity.name.tag.custom",
    },
    {
      foreground: "#82AAFF",
      token: "support.function",
    },
    {
      foreground: "#82AAFF",
      token: "support.constant",
    },
    {
      foreground: "#89DDFF",
      token: "support.constant.meta.property-value",
    },
    {
      foreground: "#ffcb6b",
      token: "support.type",
    },
    {
      foreground: "#ffcb6b",
      token: "support.class",
    },
    {
      foreground: "#ffcb6b",
      token: "support.variable.dom",
    },
    {
      background: "#ff2c83",
      foreground: "#ffffff",
      token: "invalid",
    },
    {
      foreground: "#ffffff",
      background: "#d3423e",
      token: "invalid.deprecated",
    },
    {
      foreground: "#89DDFF",
      token: "keyword.operator",
    },
    {
      foreground: "#c792ea",
      token: "keyword.operator.relational",
    },
    {
      foreground: "#c792ea",
      token: "keyword.operator.assignment",
    },
    {
      foreground: "#697098",
      token: "comment.line.double-slash",
    },
    {
      foreground: "#cdebf7",
      token: "object",
    },
    {
      foreground: "#ff5874",
      token: "constant.language.null",
    },
    {
      foreground: "#bfc7d5",
      token: "meta.brace",
    },
    {
      foreground: "#c792ea",
      token: "meta.delimiter.period",
    },
    {
      foreground: "#d9f5dd",
      token: "punctuation.definition.string",
    },
    {
      foreground: "#ff5874",
      token: "constant.language.boolean",
    },
    {
      foreground: "#ffffff",
      token: "object.comma",
    },
    {
      foreground: "#89DDFF",
      token: "variable.parameter.function",
    },
    {
      foreground: "#80CBC4",
      token: "support.type.vendored.property-name",
    },
    {
      foreground: "#80CBC4",
      token: "support.constant.vendored.property-value",
    },
    {
      foreground: "#80CBC4",
      token: "support.type.property-name",
    },
    {
      foreground: "#80CBC4",
      token: "meta.property-list entity.name.tag",
    },
    {
      foreground: "#ff5572",
      token: "meta.property-list entity.name.tag.reference",
    },
    {
      foreground: "#F78C6C",
      token: "constant.other.color.rgb-value punctuation.definition.constant",
    },
    {
      foreground: "#FFEB95",
      token: "constant.other.color",
    },
    {
      foreground: "#FFEB95",
      token: "keyword.other.unit",
    },
    {
      foreground: "#c792ea",
      token: "meta.selector",
    },
    {
      foreground: "#FAD430",
      token: "entity.other.attribute-name.id",
    },
    {
      foreground: "#80CBC4",
      token: "meta.property-name",
    },
    {
      foreground: "#c792ea",
      fontStyle: "italic",
      token: "entity.name.tag.doctype",
    },
    {
      foreground: "#c792ea",
      fontStyle: "italic",
      token: "meta.tag.sgml.doctype",
    },
    {
      foreground: "#d9f5dd",
      token: "punctuation.definition.parameters",
    },
    {
      foreground: "#89DDFF",
      token: "keyword.control.operator",
    },
    {
      foreground: "#c792ea",
      token: "keyword.operator.logical",
    },
    {
      foreground: "#ff5572",
      token: "variable.instance",
    },
    {
      foreground: "#ff5572",
      token: "variable.other.instance",
    },
    {
      foreground: "#ff5572",
      token: "variable.reaedwrite.instance",
    },
    {
      foreground: "#ff5572",
      token: "variable.other.readwrite.instance",
    },
    {
      foreground: "#89DDFF",
      token: "variable.other.property",
    },
    {
      foreground: "#89DDFF",
      token: "variable.other.object.property",
    },
    {
      foreground: "#82AAFF",
      token: "entity.name.function",
    },
    {
      foreground: "#c792ea",
      token: "keyword.operator.comparison",
    },
    {
      foreground: "#89DDFF",
      token: "support.constant",
    },
    {
      foreground: "#89DDFF",
      token: "keyword.other.special-method",
    },
    {
      foreground: "#89DDFF",
      token: "keyword.other.new",
    },
    {
      foreground: "#89DDFF",
      token: "support.function",
    },
    {
      foreground: "#020e14",
      background: "#F78C6C",
      token: "invalid.broken",
    },
    {
      background: "#8BD649",
      foreground: "#ffffff",
      token: "invalid.unimplemented",
    },
    {
      foreground: "#ffffff",
      background: "#ec5f67",
      token: "invalid.illegal",
    },
    {
      foreground: "#ff5572",
      token: "variable.language",
    },
    {
      foreground: "#89DDFF",
      token: "support.variable.property",
    },
    {
      foreground: "#82AAFF",
      token: "variable.function",
    },
    {
      foreground: "#ec5f67",
      token: "variable.interpolation",
    },
    {
      foreground: "#82AAFF",
      token: "meta.function-call",
    },
    {
      foreground: "#d3423e",
      token: "punctuation.section.embedded",
    },
    {
      foreground: "#bfc7d5",
      token: "punctuation.terminator.expression",
    },
    {
      foreground: "#bfc7d5",
      token: "punctuation.definition.arguments",
    },
    {
      foreground: "#bfc7d5",
      token: "punctuation.definition.array",
    },
    {
      foreground: "#bfc7d5",
      token: "punctuation.section.array",
    },
    {
      foreground: "#bfc7d5",
      token: "meta.array",
    },
    {
      foreground: "#d9f5dd",
      token: "punctuation.definition.list.begin",
    },
    {
      foreground: "#d9f5dd",
      token: "punctuation.definition.list.end",
    },
    {
      foreground: "#d9f5dd",
      token: "punctuation.separator.arguments",
    },
    {
      foreground: "#d9f5dd",
      token: "punctuation.definition.list",
    },
    {
      foreground: "#d3423e",
      token: "string.template meta.template.expression",
    },
    {
      foreground: "#bfc7d5",
      token: "string.template punctuation.definition.string",
    },
    {
      foreground: "#c792ea",
      fontStyle: "italic",
      token: "italic",
    },
    {
      foreground: "#ffcb6b",
      fontStyle: "bold",
      token: "bold",
    },
    {
      foreground: "#697098",
      fontStyle: "italic",
      token: "quote",
    },
    {
      foreground: "#80CBC4",
      token: "raw",
    },
    {
      foreground: "#89DDFF",
      token: "variable.assignment.coffee",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.parameter.function.coffee",
    },
    {
      foreground: "#89DDFF",
      token: "variable.assignment.coffee",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.other.readwrite.cs",
    },
    {
      foreground: "#82AAFF",
      token: "entity.name.type.class.cs",
    },
    {
      foreground: "#82AAFF",
      token: "storage.type.cs",
    },
    {
      foreground: "#B2CCD6",
      token: "entity.name.type.namespace.cs",
    },
    {
      foreground: "#ff5572",
      token: "entity.name.tag.css",
    },
    {
      foreground: "#ff5572",
      token: "entity.name.tag.less",
    },
    {
      foreground: "#ff5572",
      token: "entity.name.tag.custom.css",
    },
    {
      foreground: "#ff5572",
      token: "entity.name.tag.wildcard.css",
    },
    {
      foreground: "#ff5572",
      token: "entity.name.tag.wildcard.less",
    },
    {
      foreground: "#ff5572",
      token: "entity.name.tag.wildcard.scss",
    },
    {
      foreground: "#ff5572",
      token: "entity.name.tag.wildcard.sass",
    },
    {
      foreground: "#FFEB95",
      token: "keyword.other.unit.css",
    },
    {
      foreground: "#FFEB95",
      token: "constant.length.units.css",
    },
    {
      foreground: "#FFEB95",
      token: "keyword.other.unit.less",
    },
    {
      foreground: "#FFEB95",
      token: "constant.length.units.less",
    },
    {
      foreground: "#FFEB95",
      token: "keyword.other.unit.scss",
    },
    {
      foreground: "#FFEB95",
      token: "constant.length.units.scss",
    },
    {
      foreground: "#FFEB95",
      token: "keyword.other.unit.sass",
    },
    {
      foreground: "#FFEB95",
      token: "constant.length.units.sass",
    },
    {
      foreground: "#F78C6C",
      token:
        "meta.attribute-selector.css entity.other.attribute-name.attribute",
    },
    {
      foreground: "#bfc7d5",
      token: "source.js source.css meta.property-list",
    },
    {
      foreground: "#bfc7d5",
      token: "source.js source.css punctuation.section",
    },
    {
      foreground: "#bfc7d5",
      token: "source.js source.css punctuation.terminator.rule",
    },
    {
      foreground: "#bfc7d5",
      token: "source.js source.css punctuation.definition.entity.end.bracket",
    },
    {
      foreground: "#bfc7d5",
      token: "source.js source.css punctuation.definition.entity.begin.bracket",
    },
    {
      foreground: "#bfc7d5",
      token: "source.js source.css punctuation.separator.key-value",
    },
    {
      foreground: "#bfc7d5",
      token: "source.js source.css punctuation.definition.attribute-selector",
    },
    {
      foreground: "#bfc7d5",
      token: "source.js source.css meta.property-list",
    },
    {
      foreground: "#bfc7d5",
      token:
        "source.js source.css meta.property-list punctuation.separator.comma",
    },
    {
      foreground: "#bfc7d5",
      token: "source.ts source.css punctuation.section",
    },
    {
      foreground: "#bfc7d5",
      token: "source.ts source.css punctuation.terminator.rule",
    },
    {
      foreground: "#bfc7d5",
      token: "source.ts source.css punctuation.definition.entity.end.bracket",
    },
    {
      foreground: "#bfc7d5",
      token: "source.ts source.css punctuation.definition.entity.begin.bracket",
    },
    {
      foreground: "#bfc7d5",
      token: "source.ts source.css punctuation.separator.key-value",
    },
    {
      foreground: "#bfc7d5",
      token: "source.ts source.css punctuation.definition.attribute-selector",
    },
    {
      foreground: "#bfc7d5",
      token: "source.ts source.css meta.property-list",
    },
    {
      foreground: "#bfc7d5",
      token:
        "source.ts source.css meta.property-list punctuation.separator.comma",
    },
    {
      foreground: "#82AAFF",
      token: "source.elixir support.type.elixir",
    },
    {
      foreground: "#82AAFF",
      token: "source.elixir meta.module.elixir entity.name.class.elixir",
    },
    {
      foreground: "#ffcb6b",
      token: "source.elixir entity.name.function",
    },
    {
      foreground: "#82AAFF",
      token: "source.elixir constant.other.symbol.elixir",
    },
    {
      foreground: "#82AAFF",
      token: "source.elixir constant.other.keywords.elixir",
    },
    {
      foreground: "#a9c77d",
      token: "source.elixir punctuation.definition.string",
    },
    {
      foreground: "#ffcb6b",
      token: "source.elixir variable.other.readwrite.module.elixir",
    },
    {
      foreground: "#ffcb6b",
      token:
        "source.elixir variable.other.readwrite.module.elixir punctuation.definition.variable.elixir",
    },
    {
      foreground: "#c792ea",
      token: "source.elixir .punctuation.binary.elixir",
    },
    {
      foreground: "#DDDDDD",
      token: "source.go meta.function-call.go",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.qraphql",
    },
    {
      foreground: "#ffcb6b",
      token: "entity.other.attribute-name.id.html",
    },
    {
      foreground: "#89DDFF",
      token: "punctuation.definition.tag.html",
    },
    {
      foreground: "#c792ea",
      fontStyle: "italic",
      token: "meta.tag.sgml.doctype.html",
    },
    {
      foreground: "#ffcb8b",
      token: "meta.class entity.name.type.class.js",
    },
    {
      foreground: "#82AAFF",
      fontStyle: "normal",
      token: "meta.method.declaration storage.type.js",
    },
    {
      foreground: "#bfc7d5",
      token: "terminator.js",
    },
    {
      foreground: "#bfc7d5",
      token: "meta.js punctuation.definition.js",
    },
    {
      foreground: "#eeffff",
      token: "entity.name.type.instance.jsdoc",
    },
    {
      foreground: "#eeffff",
      token: "entity.name.type.instance.phpdoc",
    },
    {
      foreground: "#78ccf0",
      token: "variable.other.jsdoc",
    },
    {
      foreground: "#78ccf0",
      token: "variable.other.phpdoc",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.other.meta.import.js",
    },
    {
      foreground: "#bfc7d5",
      token: "meta.import.js variable.other",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.other.meta.export.js",
    },
    {
      foreground: "#bfc7d5",
      token: "meta.export.js variable.other",
    },
    {
      foreground: "#7986E7",
      token: "variable.parameter.function.js",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.other.readwrite.js",
    },
    {
      foreground: "#bfc7d5",
      token: "meta.jsx.children",
    },
    {
      foreground: "#bfc7d5",
      token: "meta.jsx.children.js",
    },
    {
      foreground: "#bfc7d5",
      token: "meta.jsx.children.tsx",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.other.object.js",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.other.object.jsx",
    },
    {
      foreground: "#bfc7d5",
      token: "meta.object-literal.key.js",
    },
    {
      foreground: "#bfc7d5",
      token: "meta.object-literal.key.jsx",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.object.property.js",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.object.property.jsx",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.js",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.other.js",
    },
    {
      foreground: "#ffcb8b",
      token: "entity.name.type.js",
    },
    {
      foreground: "#ffcb8b",
      token: "entity.name.type.module.js",
    },
    {
      foreground: "#bfc7d5",
      token: "support.class.js",
    },
    {
      foreground: "#C3E88D",
      fontStyle: "normal",
      token: "support.type.property-name.json",
    },
    {
      foreground: "#ffcb6b",
      token: "support.constant.json",
    },
    {
      foreground: "#80CBC4",
      fontStyle: "normal",
      token: "meta.structure.dictionary.value.json string.quoted.double",
    },
    {
      foreground: "#80CBC4",
      fontStyle: "normal",
      token: "string.quoted.double.json punctuation.definition.string.json",
    },
    {
      foreground: "#ff5874",
      token:
        "meta.structure.dictionary.json meta.structure.dictionary.value constant.language",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.other.ruby",
    },
    {
      foreground: "#89DDFF",
      token: "constant.language.symbol.hashkey.ruby",
    },
    {
      foreground: "#ff5572",
      token: "entity.name.tag.less",
    },
    {
      foreground: "#F78C6C",
      token:
        "meta.attribute-selector.less entity.other.attribute-name.attribute",
    },
    {
      foreground: "#82b1ff",
      token: "markup.heading",
    },
    {
      foreground: "#c792ea",
      fontStyle: "italic",
      token: "markup.italic",
    },
    {
      foreground: "#ffcb6b",
      fontStyle: "bold",
      token: "markup.bold",
    },
    {
      foreground: "#697098",
      fontStyle: "italic",
      token: "markup.quote",
    },
    {
      foreground: "#80CBC4",
      token: "markup.inline.raw",
    },
    {
      foreground: "#ff869a",
      token: "markup.underline.link",
    },
    {
      foreground: "#ff869a",
      token: "markup.underline.link.image",
    },
    {
      foreground: "#a9c77d",
      token: "markup.meta.attribute-list",
    },
    {
      fontStyle: "bold",
      token: "markup.admonition",
    },
    {
      foreground: "#D9F5DD",
      token: "markup.list.bullet",
    },
    {
      fontStyle: "italic",
      token: "markup.superscript",
    },
    {
      fontStyle: "italic",
      token: "markup.subscript",
    },
    {
      foreground: "#bfc7d5",
      token: "string.other.link.title.markdown",
    },
    {
      foreground: "#bfc7d5",
      token: "string.other.link.description.markdown",
    },
    {
      foreground: "#82b1ff",
      token: "punctuation.definition.string.markdown",
    },
    {
      foreground: "#82b1ff",
      token: "punctuation.definition.string.begin.markdown",
    },
    {
      foreground: "#82b1ff",
      token: "punctuation.definition.string.end.markdown",
    },
    {
      foreground: "#82b1ff",
      token: "meta.link.inline.markdown punctuation.definition.string",
    },
    {
      foreground: "#ff5572",
      token: "punctuation.definition.metadata.markdown",
    },
    {
      foreground: "#82b1ff",
      token: "beginning.punctuation.definition.list.markdown",
    },
    {
      foreground: "#F78C6C",
      token: "entity.name.function.asciidoc",
    },
    {
      foreground: "#bec5d4",
      token: "variable.other.php",
    },
    {
      foreground: "#ffcb8b",
      token: "support.class.php",
    },
    {
      foreground: "#bfc7d5",
      token: "meta.function-call.php punctuation",
    },
    {
      foreground: "#ffcb6b",
      token: "variable.other.global.php",
    },
    {
      foreground: "#ffcb6b",
      token: "variable.other.global.php punctuation.definition.variable",
    },
    {
      foreground: "#ff5874",
      token: "constant.language.python",
    },
    {
      foreground: "#7986E7",
      token: "variable.parameter.function.python",
    },
    {
      foreground: "#7986E7",
      token: "meta.function-call.arguments.python",
    },
    {
      foreground: "#B2CCD6",
      token: "meta.function-call.python",
    },
    {
      foreground: "#B2CCD6",
      token: "meta.function-call.generic.python",
    },
    {
      foreground: "#bfc7d5",
      token: "punctuation.python",
    },
    {
      foreground: "#ffcb6b",
      token: "entity.name.function.decorator.python",
    },
    {
      foreground: "#8EACE3",
      token: "source.python variable.language.special",
    },
    {
      foreground: "#DDDDDD",
      token: "variable.scss",
    },
    {
      foreground: "#DDDDDD",
      token: "variable.sass",
    },
    {
      foreground: "#DDDDDD",
      token: "variable.parameter.url.scss",
    },
    {
      foreground: "#DDDDDD",
      token: "variable.parameter.url.sass",
    },
    {
      foreground: "#82AAFF",
      token: "source.css.scss meta.at-rule variable",
    },
    {
      foreground: "#82AAFF",
      token: "source.css.sass meta.at-rule variable",
    },
    {
      foreground: "#bec5d4",
      token: "source.css.scss meta.at-rule variable",
    },
    {
      foreground: "#bec5d4",
      token: "source.css.sass meta.at-rule variable",
    },
    {
      foreground: "#F78C6C",
      token:
        "meta.attribute-selector.scss entity.other.attribute-name.attribute",
    },
    {
      foreground: "#F78C6C",
      token:
        "meta.attribute-selector.sass entity.other.attribute-name.attribute",
    },
    {
      foreground: "#ff5572",
      token: "entity.name.tag.scss",
    },
    {
      foreground: "#ff5572",
      token: "entity.name.tag.sass",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.other.readwrite.alias.ts",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.other.readwrite.alias.tsx",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.other.readwrite.ts",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.other.readwrite.tsx",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.other.object.ts",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.other.object.tsx",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.object.property.ts",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.object.property.tsx",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.other.ts",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.other.tsx",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.tsx",
    },
    {
      foreground: "#bfc7d5",
      token: "variable.ts",
    },
    {
      foreground: "#78ccf0",
      token: "entity.name.type.ts",
    },
    {
      foreground: "#78ccf0",
      token: "entity.name.type.tsx",
    },
    {
      foreground: "#82AAFF",
      token: "support.class.node.ts",
    },
    {
      foreground: "#82AAFF",
      token: "support.class.node.tsx",
    },
    {
      foreground: "#eeffff",
      token: "meta.type.parameters.ts entity.name.type",
    },
    {
      foreground: "#eeffff",
      token: "meta.type.parameters.tsx entity.name.type",
    },
    {
      foreground: "#bfc7d5",
      token: "meta.import.ts punctuation.definition.block",
    },
    {
      foreground: "#bfc7d5",
      token: "meta.import.tsx punctuation.definition.block",
    },
    {
      foreground: "#bfc7d5",
      token: "meta.export.ts punctuation.definition.block",
    },
    {
      foreground: "#bfc7d5",
      token: "meta.export.tsx punctuation.definition.block",
    },
    {
      foreground: "#82AAFF",
      token: "meta.decorator punctuation.decorator.ts",
    },
    {
      foreground: "#82AAFF",
      token: "meta.decorator punctuation.decorator.tsx",
    },
    {
      foreground: "#82AAFF",
      token: "meta.tag.js meta.jsx.children.tsx",
    },
    {
      foreground: "#89DDFF",
      token: "entity.name.tag.yaml",
    },
    {
      foreground: "#bec5d4",
      token: "variable.parameter.handlebars",
    },
    {
      foreground: "#ffcb6b",
      token:
        "entity.other.attribute-name.handlebars variable.parameter.handlebars",
    },
    {
      foreground: "#89DDFF",
      token: "entity.other.attribute-name.handlebars",
    },
    {
      foreground: "#7986E7",
      token:
        "entity.other.attribute-value.handlebars variable.parameter.handlebars",
    },
    {
      fontStyle: "normal",
      token:
        "meta.tag.js meta.embedded.expression.js punctuation.section.embedded.begin.js",
    },
    {
      fontStyle: "normal",
      token:
        "meta.tag.js meta.embedded.expression.js punctuation.section.embedded.end.js",
    },
    {
      fontStyle: "normal",
      token:
        "meta.property-list.css meta.property-value.css variable.other.less",
    },
    {
      fontStyle: "normal",
      token: "punctuation.section.embedded.begin.js.jsx",
    },
    {
      fontStyle: "normal",
      token: "punctuation.section.embedded.end.js.jsx",
    },
    {
      fontStyle: "normal",
      token: "meta.property-list.scss variable.scss",
    },
    {
      fontStyle: "normal",
      token: "meta.property-list.sass variable.sass",
    },
    {
      fontStyle: "normal",
      token: "keyword.operator.logical",
    },
    {
      fontStyle: "normal",
      token: "keyword.operator.arithmetic",
    },
    {
      fontStyle: "normal",
      token: "keyword.operator.bitwise",
    },
    {
      fontStyle: "normal",
      token: "keyword.operator.increment",
    },
    {
      fontStyle: "normal",
      token: "keyword.operator.ternary",
    },
    {
      fontStyle: "normal",
      token: "keyword.operator.comparison",
    },
    {
      fontStyle: "normal",
      token: "keyword.operator.assignment",
    },
    {
      fontStyle: "normal",
      token: "keyword.operator.operator",
    },
    {
      fontStyle: "normal",
      token: "keyword.operator.or.regexp",
    },
    {
      fontStyle: "normal",
      token: "keyword.operator.expression.in",
    },
    {
      fontStyle: "normal",
      token: "keyword.operator.type",
    },
    {
      fontStyle: "normal",
      token: "punctuation.section.embedded.js",
    },
    {
      fontStyle: "normal",
      token: "punctuation.definintion.string",
    },
    {
      fontStyle: "normal",
      token: "punctuation",
    },
  ],
  encodedTokensColors: [],
};
