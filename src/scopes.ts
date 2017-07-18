import Aliases from "./aliases";

/**
 * A map of colors to array of scopes that use that color as `foreground`.
 * For best results, use the shortest possible token.
 * Leave notes next to tricky selectors so we know what to test for.
 * Selectors with more than two words are dangerous as they often cause specificity conflicts with other rules.
 */
export const foregrounds: Record<string, string[]> = {
    [Aliases.PUNCTUATION]: [
        "punctuation.definition",
        "punctuation.section",
        "meta.brace",
        "tag.assignment",
        "markup.heading.name",
    ],
    [Aliases.COMMENT]: [
        "comment",
        "comment.line",
        "punctuation.definition.comment",
    ],
    [Aliases.STRING]: [
        "string",
        "string.scss", // `$var: "string"` is all .variable
        "punctuation.definition.string",
        "markup.punctuation.quote", // markdown blockquote `>`
    ],
    [Aliases.NUMERAL]: [
        "constant.numeric",
        "beginning.punctuation.definition.list", // markdown lists
    ],
    [Aliases.TEXT]: [
        "variable.object.property",
        "variable.other.property",
        "variable.other.constant.property",
        "variable.other.object.property",
        "support.variable.property", // this.refHandlers.[target] is not a builtin reference
        "support.type.property-name", // CSS properties
    ],
    [Aliases.FUNCTION]: [
        "entity.name.function",
        "support.function",
        "entity.other.attribute-name.class.mixin", // Sass & Less mixins
        "meta.decorator",
        "meta.decorator variable",
        "meta.link.inline",
    ],
    [Aliases.VARIABLE]: [
        "variable",
        "markup.inline.raw",
    ],
    [Aliases.LANGUAGE]: [
        "variable.language",
        "support.class",
        "support.module",
        "support.type",
        "support.variable",
        "constant.character",
        "constant.other",
        "support.constant",
    ],
    [Aliases.CONSTANT]: [
        "constant.language",
    ],
    [Aliases.TAG]: [
        "entity.name.tag",
        "entity.name.tag support.class.component", // <Popover>
        "support.type.property-name.json",
        "entity.other.attribute-name.pseudo-element",
    ],
    [Aliases.KEYWORD]: [
        "keyword",
        "keyword.control",
        "storage",
        "storage.type",
        "storage.type punctuation",
        "storage.modifier",
        "markup.bold",
        "punctuation.definition.bold",
        "punctuation.definition.keyword",
    ],
    [Aliases.OPERATOR]: [
        "keyword.operator",
        "entity.name.tag.reference", // Sass &
        "entity.other.attribute-name.parent-selector", // Less &
        "markup.italic",
        "punctuation.definition.italic",
        "punctuation.definition.interpolation", // Sass #{}
        "punctuation.definition.template-expression",
        "punctuation.definition.typeparameters", // .map<type>(...) brackets
        "punctuation.section.embedded", // JSX prop={} braces
    ],
    [Aliases.CLASS]: [
        "entity",
        // "punctuation.definition.entity", // CSS [.]class
        "punctuation.regex.group",
        "markup.heading.punctuation",
    ],
    [Aliases.TYPE]: [
        "entity.name.type",
        "entity.other.inherited-class",
        "support.type.primitive",
        "entity.other.attribute-name.pseudo-class",
    ],
};

export const fontStyles: Record<string, string[]> = {
    italic: [
        // italicize all type signatures
        "meta.type",
        "meta.return.type",
        "entity.name.type.interface", // interface [IProps]
        "meta.interface entity.other.inherited-class", // extends [IProps]
    ],
    normal: [
        // revert a few special cases in type signatures
        "meta.type keyword.control", // [export] type
        "meta.type storage.type.type", // export [type]
    ],
};
