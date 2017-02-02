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
        "markup.list.beginning",
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
        "markup.detected-link",
    ],
    [Aliases.VARIABLE]: [
        "variable",
        "variable.expr",
        "variable.interpolation",
    ],
    [Aliases.BUILTIN]: [
        "constant.language",
        "variable.language",
        "variable.other.constant",
        "support.class",
        "support.module",
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
        "punctuation.definition.keyword",
        "support.type",
        "storage",
        "storage.type",
        "storage.modifier",
        "markup.bold",
    ],
    [Aliases.OPERATOR]: [
        "keyword.operator",
        "entity.name.tag.reference", // Sass &
        "entity.other.attribute-name.parent-selector", // Less &
        "punctuation.definition.interpolation", // Sass #{}
        "punctuation.definition.template-expression",
        "punctuation.definition.typeparameters", // .map<type>(...) brackets
        "punctuation.section.embedded", // JSX prop={} braces
        "regex.negation", // /[^abc]/
        "markup.italic",
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
