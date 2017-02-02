import Aliases from "./aliases";

/**
 * A map of colors to array of scopes that use that color as `foreground`.
 * For best results, use the shortest possible token.
 * Leave notes next to tricky selectors so we know what to test for.
 * Selectors with more than two words are dangerous as they often cause specificity conflicts with other rules.
 */
export default {
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
        "variable.other.property",
        "variable.other.object.property",
        "support.variable.property", // this.refHandlers.[target] is not a builtin reference
        "support.type.property-name", // CSS properties
    ],
    [Aliases.FUNCTION]: [
        "entity.name.function",
        "support.function",
        "entity.other.attribute-name.class.mixin", // Sass & Less mixins
        "meta.decorator",
        "meta.link.inline",
    ],
    [Aliases.VARIABLE]: [
        "variable",
        "markup.inline.raw",
    ],
    [Aliases.BUILTIN]: [
        "constant.language",
        "variable.language",
        "variable.other.constant",
        "support.class",
        "support.module",
        "support.type",
        "support.variable",
        "constant.character",
        "constant.other",
        "support.constant",
    ],
    [Aliases.TAG]: [
        "entity.name.tag",
        "support.type.property-name.json",
        "entity.other.attribute-name.pseudo-element",
    ],
    [Aliases.KEYWORD]: [
        "keyword",
        "keyword.control",
        "storage",
        "storage.type",
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
    ],
};
