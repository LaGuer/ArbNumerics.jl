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
    "text": "ArbNumerics.jl is a Julian perspective on Frederik Johansson\'s Arb C library, offering state of the art mathematical computation with multiprecision floating point values and assured interval enclosures. This package outperforms BigFloats when computing elementary and advanced mathematical functions in precisions upto 4000 bits (1200 digits) and beyond.  Performance reflects the Arb C library. Simple arithmetic is somewhat slower than with BigFloat, although polynomial evaluation is somewhat faster than with BigFloat. All the elementary and advanced math functions are faster than with BigFloat."
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
