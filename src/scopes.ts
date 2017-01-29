import Aliases from "./aliases";

/**
 * A map of colors to array of scopes that use that color as `foreground`.
 * For best results, use the shortest possible token.
 * Leave notes next to tricky selectors so we know what to test for.
 * Selectors with more than two words are dangerous as they often cause specificity conflicts with other rules.
 */
export default {
    [Aliases.PUNCTUATION]: [
        "brace.var",
        "declaration.paren",
        "function.brace",
        "literal.brace",
        "parameter.round",
        "punctuation",
        "punctuation.brace",
        "punctuation.embedded",
        "punctuation.function.section",
        "punctuation.link",
        "punctuation.separator",
        "tag.assignment",
        "markup.heading.name",
    ],
    [Aliases.COMMENT]: [
        "comment",
        "comment.line",
    ],
    [Aliases.STRING]: [
        "string",
        "string.scss", // `$var: "string"` is all .variable
        "markup.punctuation.quote", // markdown blockquote `>`
    ],
    [Aliases.NUMERAL]: [
        "constant.numeric",
        "markup.list.beginning",
    ],
    [Aliases.TEXT]: [
        "variable.property",
        "variable.var.property",
    ],
    [Aliases.FUNCTION]: [
        "decorator.punctuation",
        "decorator.variable",
        "entity.mixin", // Sass & Less mixins
        "function.name",
        "function.support",
        "function.name.expression",
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
        "variable.support",
        "support.builtin",
        "support.module.node",
        "constant.character",
        "constant.other",
        "support.constant",
    ],
    [Aliases.TAG]: [
        "tag.name",
        "json.property-name",
        "entity.pseudo-element",
    ],
    [Aliases.KEYWORD]: [
        "keyword",
        "keyword.control",
        "support.module",
        "storage",
        "storage.type",
        "storage.modifier",
        "markup.bold",
    ],
    [Aliases.OPERATOR]: [
        "operator",
        "entity.reference", // Sass &
        "entity.parent-selector", // Less &
        "punctuation.definition.interpolation", // Sass #{}
        "punctuation.expression.section", // JSX prop={} braces
        "punctuation.typeparameters", // .map<type>(...) brackets
        "regex.negation", // /[^abc]/
        "string.template-expression", // `${}`
        "markup.italic",
    ],
    [Aliases.CLASS]: [
        "entity",
        "punctuation.regex.group",
        "markup.heading.punctuation",
    ],
    [Aliases.TYPE]: [
        "entity.name.type",
        "entity.other.inherited-class",
        "support.type.primitive",
    ],
};
