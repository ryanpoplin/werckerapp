/*global describe, it */
'use strict';
(function () {
    
    describe('A Happy Hour Application', function () {
        
        describe('Backbone.js Application Dependency Checker...', function () {
            
            it('jQuery is avaliable...', function () {
            	expect(jQuery() !== undefined).to.equal(true);
            });
            
            it('Lodash is avaliable...', function () {
            	expect(_ !== undefined).to.equal(true);
            });

            it('Backbone is avaliable...', function () {
            	expect(Backbone !== undefined).to.equal(true);
            });
        
        });
    
    });

})();
