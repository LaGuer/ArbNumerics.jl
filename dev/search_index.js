var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Overview",
    "title": "Overview",
    "category": "page",
    "text": ""
},

{
    "location": "#ArbNumerics-1",
    "page": "Overview",
    "title": "ArbNumerics",
    "category": "section",
    "text": "ArbNumerics.jl offers efficient mathematical computation with multiprecision values\nFloating Point values, Real values (as interval enclosures) and Complex values are supported\nSet the precision to a given number of bits (24..8000) or to cover a number of digits (10..2400)\nMany mathematical functions are available\nSome basic matrix functions are supported\nA Julian perspective on Frederik Johansson\'s Arb C library"
},

{
    "location": "settingvalues/#",
    "page": "Setting Values",
    "title": "Setting Values",
    "category": "page",
    "text": ""
},

{
    "location": "settingvalues/#Setting-Values-1",
    "page": "Setting Values",
    "title": "Setting Values",
    "category": "section",
    "text": "To set a floating point value with 100 bits of precisionjulia> two = ArbFloat(2, bits=100)\n2.0\njulia> sqrt2 = sqrt(two)\n1.41421356237309504880168872421To set a floating point value with 30 digits precisionjulia> two = ArbFloat(2, digits=30)\n2.0\njulia> sqrt2 = sqrt(two)\n1.41421356237309504880168872421To set a real valued interval with 100 bits of precisiontwo = ArbReal(2, bits=100)\nsqrt2 = sqrt(two)To set a real valued interval with 30 digits precisiontwo = ArbReal(2, digits=30)\nsqrt2 = sqrt(two)"
},

{
    "location": "mathfunctions/#",
    "page": "Math Functions",
    "title": "Math Functions",
    "category": "page",
    "text": ""
},

{
    "location": "mathfunctions/#arithmetic-functions-1",
    "page": "Math Functions",
    "title": "arithmetic functions",
    "category": "section",
    "text": "+,-, *, /\nsquare, cube, sqrt, cbrt, hypot\npow(x,i), root(x,i) where i is an integer > 0\nfactorial, doublefactorial, risingfactorial\nbinomial"
},

{
    "location": "mathfunctions/#elementary-functions-1",
    "page": "Math Functions",
    "title": "elementary functions",
    "category": "section",
    "text": "exp, expm1\nlog, log1p, log2, log10\nsin, cos, tan, csc, sec, cot\nasin, acos, atan, atan(y,x)\nsinh, cosh, tanh, csch, sech, coth\nasinh, acosh, atanh"
},

{
    "location": "mathfunctions/#gamma-functions-1",
    "page": "Math Functions",
    "title": "gamma functions",
    "category": "section",
    "text": "gamma, lgamma\nrgamma, digamma"
},

{
    "location": "mathfunctions/#error-functions-1",
    "page": "Math Functions",
    "title": "error functions",
    "category": "section",
    "text": "erf, erfc, erfi"
},

{
    "location": "mathfunctions/#Bessel-functions-1",
    "page": "Math Functions",
    "title": "Bessel functions",
    "category": "section",
    "text": "besselj, besselj0, besselj1\nbessely, bessely0, bessely1\nbesseli, besselk"
},

{
    "location": "mathfunctions/#Airy-functions-1",
    "page": "Math Functions",
    "title": "Airy functions",
    "category": "section",
    "text": "airyai, airyaiprime\nairybi, airybiprime"
},

{
    "location": "mathfunctions/#arithmetic-geometric-mean-1",
    "page": "Math Functions",
    "title": "arithmetic-geometric mean",
    "category": "section",
    "text": "agm, agm1"
},

{
    "location": "mathfunctions/#elliptic-functions-1",
    "page": "Math Functions",
    "title": "elliptic functions",
    "category": "section",
    "text": "elliptice, elliptick\nellipticp, ellipticpi\nellipticzeta, ellipticsigma"
},

{
    "location": "mathfunctions/#other-special-functions-1",
    "page": "Math Functions",
    "title": "other special functions",
    "category": "section",
    "text": "ei, si, ci\nshi, chi\nzeta, eta, xi    # Reimann\nlambertw"
},

{
    "location": "intervalfunctions/#",
    "page": "Interval Functions",
    "title": "Interval Functions",
    "category": "page",
    "text": ""
},

{
    "location": "intervalfunctions/#parts-1",
    "page": "Interval Functions",
    "title": "parts",
    "category": "section",
    "text": "midpoint, radius\nupperbound, lowerbound\nupperbound_abs, lowerbound_abs"
},

{
    "location": "intervalfunctions/#construction-1",
    "page": "Interval Functions",
    "title": "construction",
    "category": "section",
    "text": "setball(midpoint, radius)\nsetinterval(lobound, hibound)"
},

{
    "location": "intervalfunctions/#retrieval-1",
    "page": "Interval Functions",
    "title": "retrieval",
    "category": "section",
    "text": "midpoint, radius = ball(x::ArbReal)\nlobound, hibound = interval(x::ArbReal)"
},

{
    "location": "libarb_differences/#",
    "page": "LibArb Differences",
    "title": "LibArb Differences",
    "category": "page",
    "text": ""
},

{
    "location": "libarb_differences/#ArbNumerics-and-LibArb-1",
    "page": "LibArb Differences",
    "title": "ArbNumerics and LibArb",
    "category": "section",
    "text": "The input values have no memory of the precision that was used to create them. An input value could be, say,    [1.0 +/- 0.25], regardless of whether the precision used to compute it was 2 bits, 100 bits, or 1000000 bits.Just think of a ball as a pair of rational numbers, not in terms of precision. The precision p for the new operation specifies (in almost all functions) that the midpoint of the output ball is to be rounded to at most p bits; if p = 100 then the output will be rounded to at most 100 bits even if the inputs have 1000000 bits.– Fredrik Johansson on nemo-dev, 2018-Dec-05"
},

{
    "location": "references/#",
    "page": "References",
    "title": "References",
    "category": "page",
    "text": ""
},

{
    "location": "references/#References-1",
    "page": "References",
    "title": "References",
    "category": "section",
    "text": ""
},

{
    "location": "documentindex/#",
    "page": "Index",
    "title": "Index",
    "category": "page",
    "text": ""
},

{
    "location": "documentindex/#Index-1",
    "page": "Index",
    "title": "Index",
    "category": "section",
    "text": ""
},

]}
