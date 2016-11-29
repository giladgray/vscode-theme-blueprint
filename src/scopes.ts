import Aliases from "./aliases";
import Colors from "./colors";

/**
 * A map of colors to array of scopes that use that color as `foreground`.
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
        "punctuation.link",
        "punctuation.separator",
        "tag.assignment"
    ],
    [Aliases.COMMENT]: [
        "comment",
        "markup.punctuation.quote"
    ],
    [Aliases.STRING]: [
        "string",
        "string.quoted.double",
        "string.quoted.single"
    ],
    [Aliases.NUMERAL]: [
        "constant.numeric",
        "markup.list.beginning"
    ],
    [Aliases.TEXT]: [
        "variable.property",
        "variable.var.property"
    ],
    [Aliases.VARIABLE]: [
        "variable",
        "variable.declaration"
    ],
    [Aliases.BUILTIN]: [
        "constant.language",
        "variable.language",
        "support.builtin",
        "support.module.node",
        "constant.character",
        "constant.other",
        "support.constant"
    ],
    [Aliases.FUNCTION]: [
        "decorator.punctuation",
        "decorator.variable",
        "function.name",
        "function.support",
        "function.name.expression",
        "markup.italic"
    ],
    [Aliases.KEYWORD]: [
        "keyword",
        "keyword.control",
        "support.module",
        "storage",
        "storage.type",
        "storage.modifier",
        "markup.bold"
    ],
    [Aliases.OPERATOR]: [
        "operator",
        "template-expression",
        "regex.negation"
    ],
    [Aliases.TAG]: [
        "entity.tag",
        "definition.tag",
        "json.property-name"
    ],
    [Aliases.CLASS]: [
        "entity.other.attribute-name",
        "punctuation.regex.group"
    ],
    [Aliases.TYPE]: [
        "entity.name.type",
        "entity.other.inherited-class",
        "support.type.primitive"
    ],
    "#AE81FF": [
        "invalid.deprecated"
    ],
    "#75715E": [
        "meta.diff",
        "meta.diff.header",
        "markup.ignored.git_gutter",
        "markup.untracked.git_gutter"
    ],
    [Colors.RED3]: [
        "markup.deleted",
        "markup.deleted.git_gutter"
    ],
    [Colors.GREEN3]: [
        "markup.inserted",
        "markup.inserted.git_gutter"
    ],
    [Colors.ORANGE3]: [
        "markup.changed",
        "markup.changed.git_gutter"
    ],
    [Colors.WHITE]: [
        "markup.raw.inline"
    ]
}
