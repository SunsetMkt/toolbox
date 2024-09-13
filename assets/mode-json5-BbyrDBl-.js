var v={exports:{}};(function(k,p){ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(i,u,x){var d=i("../lib/oop"),s=i("./text_highlight_rules").TextHighlightRules,o=function(){this.$rules={start:[{token:"variable",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'},{token:"string",regex:'"',next:"string"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"text",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"punctuation.operator",regex:/[,]/},{token:"text",regex:"\\s+"}],string:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]}};d.inherits(o,s),u.JsonHighlightRules=o}),ace.define("ace/mode/json5_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/json_highlight_rules"],function(i,u,x){var d=i("../lib/oop"),s=i("./json_highlight_rules").JsonHighlightRules,o=function(){s.call(this);var g=[{token:"variable",regex:/[a-zA-Z$_\u00a1-\uffff][\w$\u00a1-\uffff]*\s*(?=:)/},{token:"variable",regex:/['](?:(?:\\.)|(?:[^'\\]))*?[']\s*(?=:)/},{token:"constant.language.boolean",regex:/(?:null)\b/},{token:"string",regex:/'/,next:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\/bfnrt]|$)/,consumeLineEnd:!0},{token:"string",regex:/'|$/,next:"start"},{defaultToken:"string"}]},{token:"string",regex:/"(?![^"]*":)/,next:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\/bfnrt]|$)/,consumeLineEnd:!0},{token:"string",regex:/"|$/,next:"start"},{defaultToken:"string"}]},{token:"constant.numeric",regex:/[+-]?(?:Infinity|NaN)\b/}];for(var e in this.$rules)this.$rules[e].unshift.apply(this.$rules[e],g);this.normalizeRules()};d.inherits(o,s),u.Json5HighlightRules=o}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(i,u,x){var d=i("../range").Range,s=function(){};(function(){this.checkOutdent=function(o,g){return/^\s+$/.test(o)?/^\s*\}/.test(g):!1},this.autoOutdent=function(o,g){var e=o.getLine(g),t=e.match(/^(\s*\})/);if(!t)return 0;var n=t[1].length,a=o.findMatchingBracket({row:g,column:n});if(!a||a.row==g)return 0;var r=this.$getIndent(o.getLine(a.row));o.replace(new d(g,0,g,n-1),r)},this.$getIndent=function(o){return o.match(/^\s*/)[0]}}).call(s.prototype),u.MatchingBraceOutdent=s}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(i,u,x){var d=i("../../lib/oop"),s=i("../../range").Range,o=i("./fold_mode").FoldMode,g=u.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};d.inherits(g,o),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var a=e.getLine(n);if(this.singleLineBlockCommentRe.test(a)&&!this.startRegionRe.test(a)&&!this.tripleStarBlockCommentRe.test(a))return"";var r=this._getFoldWidgetBase(e,t,n);return!r&&this.startRegionRe.test(a)?"start":r},this.getFoldWidgetRange=function(e,t,n,a){var r=e.getLine(n);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,n);var l=r.match(this.foldingStartMarker);if(l){var c=l.index;if(l[1])return this.openingBracketBlock(e,l[1],n,c);var h=e.getCommentFoldRange(n,c+l[0].length,1);return h&&!h.isMultiLine()&&(a?h=this.getSectionRange(e,n):t!="all"&&(h=null)),h}if(t!=="markbegin"){var l=r.match(this.foldingStopMarker);if(l){var c=l.index+l[0].length;return l[1]?this.closingBracketBlock(e,l[1],n,c):e.getCommentFoldRange(n,c,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),a=n.search(/\S/),r=t,c=n.length;t=t+1;for(var h=t,l=e.getLength();++t<l;){n=e.getLine(t);var m=n.search(/\S/);if(m!==-1){if(a>m)break;var f=this.getFoldWidgetRange(e,"all",t);if(f){if(f.start.row<=r)break;if(f.isMultiLine())t=f.end.row;else if(a==m)break}h=t}}return new s(r,c,h,e.getLine(h).length)},this.getCommentRegionBlock=function(e,t,n){for(var a=t.search(/\s*$/),r=e.getLength(),c=n,h=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,l=1;++n<r;){t=e.getLine(n);var m=h.exec(t);if(m&&(m[1]?l--:l++,!l))break}var f=n;if(f>c)return new s(c,a,f,t.length)}}).call(g.prototype)}),ace.define("ace/mode/json5",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json5_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle"],function(i,u,x){var d=i("../lib/oop"),s=i("./text").Mode,o=i("./json5_highlight_rules").Json5HighlightRules,g=i("./matching_brace_outdent").MatchingBraceOutdent,e=i("./folding/cstyle").FoldMode,t=function(){this.HighlightRules=o,this.$outdent=new g,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new e};d.inherits(t,s),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.checkOutdent=function(n,a,r){return this.$outdent.checkOutdent(a,r)},this.autoOutdent=function(n,a,r){this.$outdent.autoOutdent(a,r)},this.$id="ace/mode/json5"}).call(t.prototype),u.Mode=t}),function(){ace.require(["ace/mode/json5"],function(i){k&&(k.exports=i)})}()})(v);
