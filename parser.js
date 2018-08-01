/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,3],$V1=[1,4],$V2=[1,5],$V3=[1,6],$V4=[1,7],$V5=[1,8],$V6=[1,9],$V7=[1,10],$V8=[1,11],$V9=[1,12],$Va=[1,13],$Vb=[1,15],$Vc=[1,16],$Vd=[1,17],$Ve=[1,18],$Vf=[1,19],$Vg=[1,20],$Vh=[1,21],$Vi=[5,6,7,8,9,10,11,12,14],$Vj=[5,6,7,14],$Vk=[5,6,7,8,9,14];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"+":6,"-":7,"*":8,"/":9,"^":10,"!":11,"%":12,"(":13,")":14,"NUMERO":15,"NUMERO_R":16,"BINARIO":17,"OCT":18,"HEX":19,"palavras-reservadas":20,"IDENTIFICADOR":21,"PI":22,"STR_CONST":23,"algoritmo":24,"declaracao_algoritmo":25,"bloco_declaracao":26,"fun_decl_list":27,"var_decl_block":28,"ALGORITMO":29,";":30,"VARIAVEIS":31,"var-decl-list":32,"FIM-VARIAVEIS":33,"var_decl":34,"var-dec-list":35,"var-list":36,":":37,"tipo_primitivo":38,"tipo_matriz":39,",":40,"INTEIRO":41,"REAL":42,"CARACTERE":43,"LITERAL":44,"LOGICO":45,"MATRIZ":46,"lista_dimensoes":47,"DE":48,"tipo_primitivo-plural":49,"[":50,"inteiro_literal":51,"]":52,"INTEIROS":53,"REAIS":54,"CARACTERES":55,"LITERAIS":56,"LOGICOS":57,"INICIO":58,"lista_declaracao":59,"FIM":60,"declaracao":61,"declaracao_atribuicao":62,"chamada_funcao":63,"declaracao_retorno":64,"declaracao_se":65,"declaracao_enquanto":66,"declaracao_para":67,"RETORNE":68,"expressao":69,"lvalue":70,"lista_indices":71,":=":72,"expr":73,"SE":74,"ENTAO":75,"FIM-SE":76,"SENAO":77,"ENQUANTO":78,"FACA":79,"FIM-ENQUANTO":80,"PARA":81,"ATE":82,"FIM-PARA":83,"passo_mudanca":84,"PASSO":85,"OU":86,"E":87,"|":88,"&":89,"=":90,"<>":91,">":92,">=":93,"<":94,"<=":95,"termo":96,"~":97,"NAO":98,"literal":99,"argumentos":100,"C_CONST":101,"VERDADEIRO":102,"FALSO":103,"declaracao_funcao":104,"FUNCAO":105,"declaracao_var_fun":106,"lista_parametros":107,"parametro":108,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"+",7:"-",8:"*",9:"/",10:"^",11:"!",12:"%",13:"(",14:")",15:"NUMERO",16:"NUMERO_R",17:"BINARIO",18:"OCT",19:"HEX",20:"palavras-reservadas",21:"IDENTIFICADOR",22:"PI",23:"STR_CONST",27:"fun_decl_list",29:"ALGORITMO",30:";",31:"VARIAVEIS",33:"FIM-VARIAVEIS",35:"var-dec-list",37:":",40:",",41:"INTEIRO",42:"REAL",43:"CARACTERE",44:"LITERAL",45:"LOGICO",46:"MATRIZ",48:"DE",50:"[",52:"]",53:"INTEIROS",54:"REAIS",55:"CARACTERES",56:"LITERAIS",57:"LOGICOS",58:"INICIO",60:"FIM",68:"RETORNE",72:":=",73:"expr",74:"SE",75:"ENTAO",76:"FIM-SE",77:"SENAO",78:"ENQUANTO",79:"FACA",80:"FIM-ENQUANTO",81:"PARA",82:"ATE",83:"FIM-PARA",85:"PASSO",86:"OU",87:"E",88:"|",89:"&",90:"=",91:"<>",92:">",93:">=",94:"<",95:"<=",97:"~",98:"NAO",101:"C_CONST",102:"VERDADEIRO",103:"FALSO",105:"FUNCAO"},
productions_: [0,[3,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,2],[4,2],[4,3],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[24,4],[24,5],[25,3],[28,3],[32,2],[32,3],[34,4],[34,4],[36,3],[36,0],[38,1],[38,1],[38,1],[38,1],[38,1],[39,4],[47,3],[47,4],[51,1],[51,1],[51,1],[51,1],[49,1],[49,1],[49,1],[49,1],[49,1],[26,3],[59,1],[59,2],[59,0],[61,1],[61,2],[61,1],[61,1],[61,1],[61,1],[64,2],[64,3],[70,2],[70,1],[71,3],[71,4],[62,4],[65,5],[65,7],[66,5],[67,9],[67,10],[84,2],[84,3],[84,3],[69,3],[69,3],[69,3],[69,3],[69,3],[69,3],[69,3],[69,3],[69,3],[69,3],[69,3],[69,3],[69,3],[69,3],[69,3],[69,3],[69,2],[69,2],[69,2],[69,2],[69,1],[96,1],[96,1],[96,1],[96,3],[63,4],[63,3],[100,1],[100,3],[99,1],[99,1],[99,1],[99,1],[99,1],[99,1],[104,6],[104,7],[104,8],[104,9],[106,2],[106,3],[106,0],[107,1],[107,3],[108,3],[108,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 typeof console !== 'undefined' ? output_error($$[$0-1]) : print($$[$0-1]);
          return $$[$0-1]; 
break;
case 2:
this.$ = $$[$0-2]+$$[$0];
break;
case 3:
this.$ = $$[$0-2]-$$[$0];
break;
case 4:
this.$ = $$[$0-2]*$$[$0];
break;
case 5:
this.$ = $$[$0-2]/$$[$0];
break;
case 6:
this.$ = Math.pow($$[$0-2], $$[$0]);
break;
case 7:

          this.$ = (function fact (n) { return n==0 ? 1 : fact(n-1) * n })($$[$0-1]);
        
break;
case 8:
this.$ = $$[$0-1]/100;
break;
case 9:
this.$ = -$$[$0];
break;
case 10:
this.$ = $$[$0-1];
break;
case 11: case 12:
this.$ = Number(yytext);
break;
case 13:


            this.$ = parseInt(yytext.substring(2), 2);
        
break;
case 14:

            this.$ = parseInt(yytext.substring(2), 8);
        
break;
case 15:

            this.$ = parseInt(yytext.substring(2), 16);
        
break;
case 16:

            this.$ = 1;
            output_error("palavra reservada" + $$[$0]);
        
break;
case 17:

            this.$ = 2;
        
break;
case 18:
this.$ = Math.PI;
break;
case 19:

            this.$ = Number(stringBuffer);
        
break;
}
},
table: [{3:1,4:2,7:$V0,13:$V1,15:$V2,16:$V3,17:$V4,18:$V5,19:$V6,20:$V7,21:$V8,22:$V9,23:$Va},{1:[3]},{5:[1,14],6:$Vb,7:$Vc,8:$Vd,9:$Ve,10:$Vf,11:$Vg,12:$Vh},{4:22,7:$V0,13:$V1,15:$V2,16:$V3,17:$V4,18:$V5,19:$V6,20:$V7,21:$V8,22:$V9,23:$Va},{4:23,7:$V0,13:$V1,15:$V2,16:$V3,17:$V4,18:$V5,19:$V6,20:$V7,21:$V8,22:$V9,23:$Va},o($Vi,[2,11]),o($Vi,[2,12]),o($Vi,[2,13]),o($Vi,[2,14]),o($Vi,[2,15]),o($Vi,[2,16]),o($Vi,[2,17]),o($Vi,[2,18]),o($Vi,[2,19]),{1:[2,1]},{4:24,7:$V0,13:$V1,15:$V2,16:$V3,17:$V4,18:$V5,19:$V6,20:$V7,21:$V8,22:$V9,23:$Va},{4:25,7:$V0,13:$V1,15:$V2,16:$V3,17:$V4,18:$V5,19:$V6,20:$V7,21:$V8,22:$V9,23:$Va},{4:26,7:$V0,13:$V1,15:$V2,16:$V3,17:$V4,18:$V5,19:$V6,20:$V7,21:$V8,22:$V9,23:$Va},{4:27,7:$V0,13:$V1,15:$V2,16:$V3,17:$V4,18:$V5,19:$V6,20:$V7,21:$V8,22:$V9,23:$Va},{4:28,7:$V0,13:$V1,15:$V2,16:$V3,17:$V4,18:$V5,19:$V6,20:$V7,21:$V8,22:$V9,23:$Va},o($Vi,[2,7]),o($Vi,[2,8]),o($Vi,[2,9]),{6:$Vb,7:$Vc,8:$Vd,9:$Ve,10:$Vf,11:$Vg,12:$Vh,14:[1,29]},o($Vj,[2,2],{8:$Vd,9:$Ve,10:$Vf,11:$Vg,12:$Vh}),o($Vj,[2,3],{8:$Vd,9:$Ve,10:$Vf,11:$Vg,12:$Vh}),o($Vk,[2,4],{10:$Vf,11:$Vg,12:$Vh}),o($Vk,[2,5],{10:$Vf,11:$Vg,12:$Vh}),o([5,6,7,8,9,10,14],[2,6],{11:$Vg,12:$Vh}),o($Vi,[2,10])],
defaultActions: {14:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    var stringBuffer;

    function output_error(message){
        console.log(message);
    }
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:this.begin("MultiLineComment");
break;
case 2:this.popState();
break;
case 3:;
break;
case 4:;//Deletes most characters
break;
case 5:;
break;
case 6:;//Deletes missing characters if needed
break;
case 7:;// Ignore
break;
case 8:this.begin("SingleLineComment");
break;
case 9:; // Delete
break;
case 10:this.popState();
break;
case 11:this.popState();
break;
case 12:return 29
break;
case 13:return 82
break;
case 14:return 55
break;
case 15:return 43
break;
case 16:return 78
break;
case 17:return 48
break;
case 18:return 75
break;
case 19:return 87
break;
case 20:return 79
break;
case 21:return 103
break;
case 22:return 80
break;
case 23:return 83
break;
case 24:return 33
break;
case 25:return 76
break;
case 26:return 60
break;
case 27:return 105
break;
case 28:return 58
break;
case 29:return 53
break;
case 30:return 41
break;
case 31:return 56
break;
case 32:return 44
break;
case 33:return 57
break;
case 34:return 45
break;
case 35:return 46
break;
case 36:return 98
break;
case 37:return 86
break;
case 38:return 81
break;
case 39:return 85
break;
case 40:return 42
break;
case 41:return 54
break;
case 42:return 68
break;
case 43:return 77
break;
case 44:return 74
break;
case 45:return 31
break;
case 46:return 102
break;
case 47:
                            output_error("BINARIO " + yy_.yytext + "\n");
                            return 17;
                        
break;
case 48:
                            output_error("OCTAL " + yy_.yytext + "\n");
                            return 18;
                        
break;
case 49:
                            output_error("HEXADECIMAL " + yy_.yytext + "\n");
                            return 19;
                        
break;
case 50:
                            output_error("REAL "+ yy_.yytext + "\n");
                            return 16;
                        
break;
case 51:
                            output_error("DECIMAL " + yy_.yytext + "\n");
                            return 15;
                        
break;
case 52:return 21
break;
case 53:return 8
break;
case 54:return 9
break;
case 55:return 7
break;
case 56:return 6
break;
case 57:return 10
break;
case 58:return 11
break;
case 59:return 12
break;
case 60:return 13
break;
case 61:return 14
break;
case 62:return 22
break;
case 63:return 5
break;
case 64:
                            stringBuffer = "";
                            this.begin("quotes");
                        
break;
case 65:                        
                            this.popState();
                            return 23;
                        
break;
case 66:stringBuffer+=yy_.yytext;
break;
case 67:stringBuffer+=yy_.yytext.substring(1);
break;
case 68:stringBuffer+="\n";
break;
case 69:stringBuffer+="\b";
break;
case 70:stringBuffer+="\t";
break;
case 71:stringBuffer+="\n";
break;
case 72:stringBuffer+="\f";
break;
case 73:stringBuffer+="0";
break;
case 74:;
break;
case 75:
                            output_error("Unterminated string constant");
                            this.popState();
                        
break;
case 76:
                            output_error("String contains null character");
                            this.popState();
                        
break;
case 77:
                            output_error("EOF in string constant");
                            this.popState();
                        
break;
case 78:stringBuffer ="\n"; return C_CONST; 
break;
case 79:stringBuffer = "\b"; return C_CONST; 
break;
case 80:stringBuffer = "\t"; return C_CONST; 
break;
case 81:stringBuffer = "\n"; return C_CONST; 
break;
case 82:stringBuffer = "\f"; return C_CONST; 
break;
case 83:stringBuffer = yy_.yytext.slice(1,-1); return C_CONST;
break;
case 84:stringBuffer = ""; return C_CONST;
break;
case 85:
                            return yy_.yytext;
                        
break;
case 86:
                            return yy_.yytext;
                        
break;
case 87:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/\*)/,/^(?:\*+\/)/,/^(?:[^\n\*]*)/,/^(?:\*+[^\n\/])/,/^(?:\n)/,/^(?:[^\n])/,/^(?:$)/,/^(?:\/\/)/,/^(?:[^\n])/,/^(?:\n)/,/^(?:$)/,/^(?:([aA])([lL])([gG])([oO])([rR])([iI])([tT])([mM])([oO]))/,/^(?:([aA])([tT])([eEéÉ]))/,/^(?:([cC])([aA])([rR])([aA])([cC])([tT])([eE])([rR])([eE])([sS]))/,/^(?:([cC])([aA])([rR])([aA])([cC])([tT])([eE])([rR])([eE]))/,/^(?:([eE])([nN])([qQ])([uU])([aA])([nN])([tT])([oO]))/,/^(?:([dD])([eE]))/,/^(?:([eE])([nN])([tT])([aA])([oO]))/,/^(?:([eE])|&&)/,/^(?:([fF])([aA])([cC])([aA]))/,/^(?:([fF])([aA])([lL])([sS])([oO]))/,/^(?:([fF])([iI])([mM])-([eE])([nN])([qQ])([uU])([aA])([nN])([tT])([oO]))/,/^(?:([fF])([iI])([mM])-([pP])([aA])([rR])([aA]))/,/^(?:([fF])([iI])([mM])-([vV])([aA])([rR])([iI])([aAáÁãÃ])([vV])([eE])([iI])([sS]))/,/^(?:([fF])([iI])([mM])-([sS])([eE]))/,/^(?:([fF])([iI])([mM]))/,/^(?:([fF])([uU])([nN])([cCçÇ])([aAáÁãÃ])([oO]))/,/^(?:([iI])([nN])([iIíÍ])([cC])([iI])([oO]))/,/^(?:([iI])([nN])([tT])([eE])([iI])([rR])([oO])([sS]))/,/^(?:([iI])([nN])([tT])([eE])([iI])([rR])([oO]))/,/^(?:([lL])([iI])([tT])([eE])([rR])([aA])([iI])([sS]))/,/^(?:([lL])([iI])([tT])([eE])([rR])([aA])([lL]))/,/^(?:([lL])([oOóÓ])([gG])([iI])([cC])([oO])([sS]))/,/^(?:([lL])([oOóÓ])([gG])([iI])([cC])([oO]))/,/^(?:([mM])([aA])([tT])([rR])([iI])([zZ]))/,/^(?:([nN])([aAáÁãÃ])([oO]))/,/^(?:([oO])([uU])|\|\|)/,/^(?:([pP])([aA])([rR])([aA]))/,/^(?:([pP])([aA])([sS])([sS])([oO]))/,/^(?:([rR])([eE])([aA])([lL]))/,/^(?:([rR])([eE])([aA])([iI])([sS]))/,/^(?:([rR])([eE])([tT])([oO])([rR])([nN])([eE]))/,/^(?:([sS])([eE])([nN])([aAáÁãÃ])([oO]))/,/^(?:([sS])([eE]))/,/^(?:([vV])([aA])([rR])([iI])([aAáÁãÃ])([vV])([eE])([iI])([sS]))/,/^(?:([vV])([eE])([rR])([dD])([aA])([dD])([eE])([iI])([rR])([oO]))/,/^(?:(0[bB][01]+))/,/^(?:(0[cC][0-8]+))/,/^(?:(0[xX][0-9a-fA-F]+))/,/^(?:([0-9]+\.[0-9]+))/,/^(?:([0-9]+))/,/^(?:([a-zA-Z_][a-zA-Z0-9_]*))/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:!)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:PI\b)/,/^(?:$)/,/^(?:")/,/^(?:")/,/^(?:[^\\\n\0\"]+)/,/^(?:\\[^btnf0\0\n])/,/^(?:\\\n)/,/^(?:\\b)/,/^(?:\\t)/,/^(?:\\n)/,/^(?:\\f)/,/^(?:\\0)/,/^(?:\\)/,/^(?:\n)/,/^(?:[\0]|\0$)/,/^(?:$)/,/^(?:(['])\\n([']))/,/^(?:(['])\\b([']))/,/^(?:(['])\\t([']))/,/^(?:(['])\\n([']))/,/^(?:(['])\\f([']))/,/^(?:(['])[^\n]([']))/,/^(?:(['])([']))/,/^(?:(:=|<=|>=|<>))/,/^(?:(\+|-|\*|\/|;|,|<|:|@|\(|\)|~|\{|\}|=|\.|\||\^))/,/^(?:.)/],
conditions: {"MultiLineComment":{"rules":[2,3,4,5,6,7],"inclusive":false},"SingleLineComment":{"rules":[9,10,11],"inclusive":false},"quotes":{"rules":[65,66,67,68,69,70,71,72,73,74,75,76,77],"inclusive":false},"INITIAL":{"rules":[0,1,8,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,78,79,80,81,82,83,84,85,86,87],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}