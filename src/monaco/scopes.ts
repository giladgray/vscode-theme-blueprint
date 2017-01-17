import Aliases from "../common/aliases";

/**
 * A map of colors to array of scopes that use that color as `foreground`.
 * For best results, use the shortest possible token.
 * Leave notes next to tricky selectors so we know what to test for.
 * Selectors with more than two words are dangerous as they often cause specificity conflicts with other rules.
 */
export default {
    [Aliases.PUNCTUATION]: [
        "brackets",
        "delimiter",
    ],
    [Aliases.TAG]: [
        "tag",
    ],
    [Aliases.COMMENT]: [
        "comment",
    ],
    [Aliases.STRING]: [
        "string",
        "attribute.value",
    ],
    [Aliases.NUMERAL]: [
        "number",
    ],
    [Aliases.TEXT]: [
    ],
    [Aliases.VARIABLE]: [
        "identifier",
    ],
    [Aliases.BUILTIN]: [
    ],
    [Aliases.FUNCTION]: [
        "function",
    ],
    [Aliases.KEYWORD]: [
        "keyword",
    ],
    [Aliases.OPERATOR]: [
        "operator",
    ],
    [Aliases.CLASS]: [
        "entity",
        "attribute.name",
    ],
    [Aliases.TYPE]: [
        "type",
    ],
};
