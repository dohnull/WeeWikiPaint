/*global desc, task, jake, fail, complete */

"use strict";
task("default", ["Lint"]);

function nodeListOptions() {
    return {
        bitwise: true,
        curly: false,
        eqeqeq: true,
        forin: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        regexp: true,
        undef: true,
        strict: true,
        trailing: true,
        node: true
    };
}

desc("Lint everything");
task("Lint", [], function () {
    var lint = require("./build/lint/lint_runner.js");

    var files = new jake.FileList();
    files.include("**/*.js");
    files.exclude("node_modules");
    files.exclude("build");
    var options = nodeListOptions();
    lint.validateFileList(files.toArray(), options, {});

});
