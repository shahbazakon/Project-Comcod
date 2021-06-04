app.get("/C", checklogin,(req, res) => {
    res.render("course-page", {
        target: "C Course",
        Heading_1: "What is c language",
        topic_1_1: "History of c language",
        topic_1_2: "Features of C",
        topic_1_3: "How to install C",
        topic_1_4: "First C Program",
        topic_1_5: "Compilation Process in C",
        topic_1_6: "printf scanf",
        topic_1_7: "Variables in C",
        topic_1_8: "Data Types in c",
        topic_1_9: "Keywords in c",
        topic_1_10: "C Identifiers",
        topic_1_11: "C Operators",
        topic_1_12: "C Comments",
        topic_1_13: "C Format Specifier",
        topic_1_14: "C Escape Sequence",
        topic_1_15: "ASCII value in C",
        topic_1_16: "Constants in C",
        topic_1_17: "Literals in C",
        topic_1_18: "Tokens in C",
        topic_1_19: "C Boolean",
        topic_1_20: "Static in C",
        topic_1_21: "Programming Errors in C",
        topic_1_22: "Compile time vs Runtime",
        topic_1_23: "Conditional Operator in C",
        topic_1_24: "Bitwise Operator in C",
        topic_1_25: "2s complement in C",
        break_1: "C Fundamental Test",

        Heading_2: "C Control Statements",
        topic_2_1: "C if-else",
        topic_2_2: "C switch",
        topic_2_3: "if-else vs switch",
        topic_2_4: "C Loops",
        topic_2_5: "C do-while loop",
        topic_2_6: "C while loop",
        topic_2_7: "C for loop",
        topic_2_8: "Nested Loops in C",
        topic_2_9: "Infinite Loop in C",
        topic_2_10: "C break",
        topic_2_11: "C continue",
        topic_2_12: "C goto",
        topic_2_13: "Type Casting",
        break_2: "C Control Statement Test",

        Heading_3: "C Functions",
        topic_3_1: "What is function",
        topic_3_2: "Call: Value &amp;Reference",
        topic_3_3: "Recursion in c",
        topic_3_4: "Storage Classes",
        break_3: "C Functions Test",

        Heading_4: "C Array",
        topic_4_1: "1-D Array",
        topic_4_2: "2-D Array",
        topic_4_3: "Return an Array in C",
        topic_4_4: "Array to Function",
        break_4: "C Array Test",

        Heading_5: "C Pointers",
        break_5: "C Pointer to Pointer",

        Heading_6: "C Pointer Arithmetic",
        topic_6_1: "Dangling Pointers in C",
        topic_6_3: "sizeof() operator in C",
        topic_6_4: "const Pointer in C",
        topic_6_5: "void pointer in C",
        topic_6_6: "C Dereference Pointer",
        topic_6_7: "Null Pointer in C",
        topic_6_8: "C Function Pointer",
        topic_6_9: "Function pointer as argument in C",
        break_6: "C Pointers Test",

        msg: "The C Language is developed by Dennis Ritchie for creating system applications that directly interact with the hardware devices such as drivers, kernels, etc",

    })
});


app.get("/java", checklogin,(req, res) => {
    res.render("course-page", {
        target: "java Course",
        Heading_1: "What is java language",
        topic_1_1: "History of java language",
        topic_1_2: "Features of java",
        topic_1_3: "How to install java",
        topic_1_4: "First java Program",
        topic_1_5: "Compilation Process in java",
        topic_1_6: "printf scanf",
        topic_1_7: "Variables in java",
        topic_1_8: "Data Types in java",
        topic_1_9: "Keywords in java",
        topic_1_10: "java Identifiers",
        topic_1_11: "java Operators",
        topic_1_12: "java Comments",
        topic_1_13: "java Format Specifier",
        topic_1_14: "java Escape Sequence",
        topic_1_15: "ASCII value in java",
        topic_1_16: "Constants in java",
        topic_1_17: "Literals in java",
        topic_1_18: "Tokens in java",
        topic_1_19: "java Boolean",
        topic_1_20: "Static in java",
        topic_1_21: "Programming Errors in java",
        topic_1_22: "Compile time vs Runtime",
        topic_1_23: "Conditional Operator in java",
        topic_1_24: "Bitwise Operator in java",
        topic_1_25: "2s complement in java",
        break_1: "java Fundamental Test",

        Heading_2: "java Control Statements",
        topic_2_1: "java if-else",
        topic_2_2: "java switch",
        topic_2_3: "if-else vs switch",
        topic_2_4: "java Loops",
        topic_2_5: "java do-while loop",
        topic_2_6: "java while loop",
        topic_2_7: "java for loop",
        topic_2_8: "Nested Loops in java",
        topic_2_9: "Infinite Loop in java",
        topic_2_10: "java break",
        topic_2_11: "java continue",
        topic_2_12: "java goto",
        topic_2_13: "Type Casting",
        break_2: "C Control Statement Test",

        Heading_3: "java Functions",
        topic_3_1: "What is function",
        topic_3_2: "Call: Value &amp;Reference",
        topic_3_3: "Recursion in java",
        topic_3_4: "Storage Classes",
        break_3: "java Functions Test",

        Heading_4: "java Array",
        topic_4_1: "1-D Array",
        topic_4_2: "2-D Array",
        topic_4_3: "Return an Array in java",
        topic_4_4: "Array to Function",
        break_4: "java Array Test",

        Heading_5: "java Pointers",
        break_5: "java Pointer to Pointer",

        Heading_6: "java Pointer Arithmetic",
        topic_6_1: "Dangling Pointers in java",
        topic_6_3: "sizeof() operator in java",
        topic_6_4: "const Pointer in java",
        topic_6_5: "void pointer in java",
        topic_6_6: "java Dereference Pointer",
        topic_6_7: "Null Pointer in java",
        topic_6_8: "java Function Pointer",
        topic_6_9: "Function pointer as argument in java",
        break_6: "java Pointers Test",

        msg: "The C Language is developed by Dennis Ritchie for creating system applications that directly interact with the hardware devices such as drivers, kernels, etc",

       
    })
});


app.get("/python", checklogin,(req, res) => {
    res.render("course-page", {
        target: "python Course",
        Heading_1: "What is python language",
        topic_1_1: "History of python language",
        topic_1_2: "Features of python",
        topic_1_3: "How to install python",
        topic_1_4: "First python Program",
        topic_1_5: "Compilation Process in python",
        topic_1_6: "printf scanf",
        topic_1_7: "Variables in python",
        topic_1_8: "Data Types in python",
        topic_1_9: "Keywords in python",
        topic_1_10: "python Identifiers",
        topic_1_11: "python Operators",
        topic_1_12: "python Comments",
        topic_1_13: "python Format Specifier",
        topic_1_14: "python Escape Sequence",
        topic_1_15: "ASCII value in python",
        topic_1_16: "Constants in python",
        topic_1_17: "Literals in python",
        topic_1_18: "Tokens in python",
        topic_1_19: "python Boolean",
        topic_1_20: "Static in python",
        topic_1_21: "Programming Errors in python",
        topic_1_22: "Compile time vs Runtime",
        topic_1_23: "Conditional Operator in python",
        topic_1_24: "Bitwise Operator in python",
        topic_1_25: "2s complement in python",
        break_1: "python Fundamental Test",

        Heading_2: "python Control Statements",
        topic_2_1: "python if-else",
        topic_2_2: "python switch",
        topic_2_3: "if-else vs switch",
        topic_2_4: "python Loops",
        topic_2_5: "python do-while loop",
        topic_2_6: "python while loop",
        topic_2_7: "python for loop",
        topic_2_8: "Nested Loops in python",
        topic_2_9: "Infinite Loop in python",
        topic_2_10: "python break",
        topic_2_11: "python continue",
        topic_2_12: "python goto",
        topic_2_13: "Type Casting",
        break_2: "python Control Statement Test",

        Heading_3: "python Functions",
        topic_3_1: "What is function",
        topic_3_2: "Call: Value &amp;Reference",
        topic_3_3: "Recursion in python",
        topic_3_4: "Storage Classes",
        break_3: "python Functions Test",

        Heading_4: "python Array",
        topic_4_1: "1-D Array",
        topic_4_2: "2-D Array",
        topic_4_3: "Return an Array in python",
        topic_4_4: "Array to Function",
        break_4: "python Array Test",

        Heading_5: "python Pointers",
        break_5: "python Pointer to Pointer",

        Heading_6: "python Pointer Arithmetic",
        topic_6_1: "Dangling Pointers in python",
        topic_6_3: "sizeof() operator in python",
        topic_6_4: "const Pointer in python",
        topic_6_5: "void pointer in python",
        topic_6_6: "python Dereference Pointer",
        topic_6_7: "Null Pointer in python",
        topic_6_8: "python Function Pointer",
        topic_6_9: "Function pointer as argument in python",
        break_6: "python Pointers Test",

        
    })
});


app.get("/c++", checklogin,(req, res) => {
    res.render("course-page", {
        target: "C++ Course",
        Heading_1: "What is c++ language",
        topic_1_1: "History of c++ language",
        topic_1_2: "Features of C++",
        topic_1_3: "How to install C++",
        topic_1_4: "First C++ Program",
        topic_1_5: "Compilation Process in C++",
        topic_1_6: "printf scanf",
        topic_1_7: "Variables in C++",
        topic_1_8: "Data Types in c++",
        topic_1_9: "Keywords in c++",
        topic_1_10: "C++ Identifiers",
        topic_1_11: "C++ Operators",
        topic_1_12: "C++ Comments",
        topic_1_13: "C++ Format Specifier",
        topic_1_14: "C++ Escape Sequence",
        topic_1_15: "ASCII value in C++",
        topic_1_16: "Constants in C++",
        topic_1_17: "Literals in C++",
        topic_1_18: "Tokens in C++",
        topic_1_19: "C++ Boolean",
        topic_1_20: "Static in C++",
        topic_1_21: "Programming Errors in C++",
        topic_1_22: "Compile time vs Runtime",
        topic_1_23: "Conditional Operator in C++",
        topic_1_24: "Bitwise Operator in C++",
        topic_1_25: "2s complement in C++",
        break_1: "C++ Fundamental Test",

        Heading_2: "C++ Control Statements",
        topic_2_1: "C++ if-else",
        topic_2_2: "C++ switch",
        topic_2_3: "if-else vs switch",
        topic_2_4: "C++ Loops",
        topic_2_5: "C++ do-while loop",
        topic_2_6: "C++ while loop",
        topic_2_7: "C++ for loop",
        topic_2_8: "Nested Loops in C++",
        topic_2_9: "Infinite Loop in C++",
        topic_2_10: "C++ break",
        topic_2_11: "C++ continue",
        topic_2_12: "C++ goto",
        topic_2_13: "Type Casting",
        break_2: "C++ Control Statement Test",

        Heading_3: "C++ Functions",
        topic_3_1: "What is function",
        topic_3_2: "Call: Value &amp;Reference",
        topic_3_3: "Recursion in c++",
        topic_3_4: "Storage Classes",
        break_3: "C++ Functions Test",

        Heading_4: "C++ Array",
        topic_4_1: "1-D Array",
        topic_4_2: "2-D Array",
        topic_4_3: "Return an Array in C++",
        topic_4_4: "Array to Function",
        break_4: "C++ Array Test",

        Heading_5: "C++ Pointers",
        break_5: "C++ Pointer to Pointer",

        Heading_6: "C++ Pointer Arithmetic",
        topic_6_1: "Dangling Pointers in C++",
        topic_6_3: "sizeof() operator in C++",
        topic_6_4: "const Pointer in C++",
        topic_6_5: "void pointer in C++",
        topic_6_6: "C++ Dereference Pointer",
        topic_6_7: "Null Pointer in C++",
        topic_6_8: "C++ Function Pointer",
        topic_6_9: "Function pointer as argument in C++",
        break_6: "C++ Pointers Test",

     

    })
});


app.get("/ruby", checklogin,(req, res) => {
    res.render("course-page", {
        target: "ruby Course",
        Heading_1: "What is ruby language",
        topic_1_1: "History of ruby language",
        topic_1_2: "Features of ruby",
        topic_1_3: "How to install ruby",
        topic_1_4: "First ruby Program",
        topic_1_5: "Compilation Process in ruby",
        topic_1_6: "printf scanf",
        topic_1_7: "Variables in ruby",
        topic_1_8: "Data Types in ruby",
        topic_1_9: "Keywords in ruby",
        topic_1_10: "ruby Identifiers",
        topic_1_11: "ruby Operators",
        topic_1_12: "ruby Comments",
        topic_1_13: "ruby Format Specifier",
        topic_1_14: "ruby Escape Sequence",
        topic_1_15: "ASCII value in ruby",
        topic_1_16: "Constants in ruby",
        topic_1_17: "Literals in ruby",
        topic_1_18: "Tokens in ruby",
        topic_1_19: "ruby Boolean",
        topic_1_20: "Static in ruby",
        topic_1_21: "Programming Errors in ruby",
        topic_1_22: "Compile time vs Runtime",
        topic_1_23: "Conditional Operator in ruby",
        topic_1_24: "Bitwise Operator in ruby",
        topic_1_25: "2s complement in ruby",
        break_1: "ruby Fundamental Test",

        Heading_2: "ruby Control Statements",
        topic_2_1: "ruby if-else",
        topic_2_2: "ruby switch",
        topic_2_3: "if-else vs switch",
        topic_2_4: "ruby Loops",
        topic_2_5: "ruby do-while loop",
        topic_2_6: "ruby while loop",
        topic_2_7: "ruby for loop",
        topic_2_8: "Nested Loops in ruby",
        topic_2_9: "Infinite Loop in ruby",
        topic_2_10: "ruby break",
        topic_2_11: "ruby continue",
        topic_2_12: "ruby goto",
        topic_2_13: "Type Casting",
        break_2: "ruby Control Statement Test",

        Heading_3: "ruby Functions",
        topic_3_1: "What is function",
        topic_3_2: "Call: Value &amp;Reference",
        topic_3_3: "Recursion in ruby",
        topic_3_4: "Storage Classes",
        break_3: "ruby Functions Test",

        Heading_4: "ruby Array",
        topic_4_1: "1-D Array",
        topic_4_2: "2-D Array",
        topic_4_3: "Return an Array in ruby",
        topic_4_4: "Array to Function",
        break_4: "ruby Array Test",

        Heading_5: "ruby Pointers",
        break_5: "ruby Pointer to Pointer",

        Heading_6: "ruby Pointer Arithmetic",
        topic_6_1: "Dangling Pointers in ruby",
        topic_6_3: "sizeof() operator in ruby",
        topic_6_4: "const Pointer in ruby",
        topic_6_5: "void pointer in ruby",
        topic_6_6: "ruby Dereference Pointer",
        topic_6_7: "Null Pointer in ruby",
        topic_6_8: "ruby Function Pointer",
        topic_6_9: "Function pointer as argument in ruby",
        break_6: "ruby Pointers Test",

        

    })
});


app.get("/swift", checklogin,(req, res) => {
    res.render("../view/course-page", {
        target: "swift Course",
        Heading_1: "What is swift language",
        topic_1_1: "History of swift language",
        topic_1_2: "Features of swift",
        topic_1_3: "How to install swift",
        topic_1_4: "First swift Program",
        topic_1_5: "Compilation Process in swift",
        topic_1_6: "printf scanf",
        topic_1_7: "Variables in swift",
        topic_1_8: "Data Types in swift",
        topic_1_9: "Keywords in swift",
        topic_1_10: "swift Identifiers",
        topic_1_11: "swift Operators",
        topic_1_12: "swift Comments",
        topic_1_13: "swift Format Specifier",
        topic_1_14: "swift Escape Sequence",
        topic_1_15: "ASCII value in swift",
        topic_1_16: "Constants in swift",
        topic_1_17: "Literals in swift ",
        topic_1_18: "Tokens in swift",
        topic_1_19: "swift Boolean",
        topic_1_20: "Static in swift",
        topic_1_21: "Programming Errors in swift",
        topic_1_22: "Compile time vs Runtime",
        topic_1_23: "Conditional Operator in swift",
        topic_1_24: "Bitwise Operator in swift",
        topic_1_25: "2s complement in swift",
        break_1: "swift Fundamental Test",

        Heading_2: "swift Control Statements",
        topic_2_1: "swift if-else",
        topic_2_2: "swift switch",
        topic_2_3: "if-else vs switch",
        topic_2_4: "swift Loops",
        topic_2_5: "swift do-while loop",
        topic_2_6: "swift while loop",
        topic_2_7: "swift for loop",
        topic_2_8: "Nested Loops in swift ",
        topic_2_9: "Infinite Loop in swift",
        topic_2_10: "swift break",
        topic_2_11: "swift continue",
        topic_2_12: "swift goto",
        topic_2_13: "Type Casting",
        break_2: "swift Control Statement Test",

        Heading_3: "swift Functions",
        topic_3_1: "What is function",
        topic_3_2: "Call: Value &amp;Reference",
        topic_3_3: "Recursion in c",
        topic_3_4: "Storage Classes",
        break_3: "swift Functions Test",

        Heading_4: "C Array",
        topic_4_1: "1-D Array",
        topic_4_2: "2-D Array",
        topic_4_3: "Return an Array in swift",
        topic_4_4: "Array to Function",
        break_4: "swift Array Test",
        Heading_5: "swift Pointers",
        break_5: "swift Pointer to Pointer",
        Heading_6: "swift Pointer Arithmetic",
        topic_6_1: "Dangling Pointers in swift",
        topic_6_3: "sizeof() operator in swift",
        topic_6_4: "const Pointer in swift",
        topic_6_5: "void pointer in swift",
        topic_6_6: "swift Dereference Pointer",
        topic_6_7: "Null Pointer in swift",
        topic_6_8: "swift Function Pointer",
        topic_6_9: "Function pointer as argument in swift",
        break_6: "swift Pointers Test",

       
    })
});