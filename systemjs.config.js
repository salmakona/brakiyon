System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true,
        target: "ES5",
        module: "commonjs"},
    map: {
        '@angular': 'node_modules/@angular',
        'rxjs'    : 'node_modules/rxjs',
        'ng2-pagination' : 'node_modules/ng2-pagination/dist',
        'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
        'underscore': 'npm:underscore/underscore.js'
    },
    paths: {
        'node_modules/@angular/*': 'node_modules/@angular/*/bundles'
    },
    meta: {
        '@angular/*': {'format': 'cjs'}
    },
    packages: {
        'app'                              : {main: 'main', defaultExtension: 'ts'},
        'rxjs'                             : {main: 'Rx'},
        'ng2-pagination'                    :{main: 'ng2-pagination'},
        '@angular/core'                    : {main: 'core.umd.min.js'},
        '@angular/common'                  : {main: 'common.umd.min.js'},
        '@angular/compiler'                : {main: 'compiler.umd.min.js'},
        '@angular/router'                  : {main: 'router.umd.min.js'},
        '@angular/forms'                  : {main: 'forms.umd.min.js'},
        '@angular/http'                    : {main: 'http.umd.min.js'},
        '@angular/platform-browser'        : {main: 'platform-browser.umd.min.js'},
        '@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic.umd.min.js'}
    }
});