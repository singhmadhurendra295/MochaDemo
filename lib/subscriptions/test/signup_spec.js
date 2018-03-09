var assert = require("assert");
var MembershipApplication = require("../models/membership_application");


describe("Applying for mission",function(){
	var validApp;

	before(function(){
		validApp = new MembershipApplication({
			"first":"mm",
			"last":"mm",
			"email":"a@yopmail.com",	
			"age":30,
			"height":66,
			"weight":180
		})
	})

	describe("Application valid if",function(){
		it("all validation successful",function(){
			assert(validApp.isValid(),"Not Valid")
		});

		 it('email is 4 characters or less', function () {
	      assert(validApp.emailIsValid());
	    });

		it('age validation', function () {
	      assert(validApp.ageIsValid());
	    });

		it('height validation', function () {
	      assert(validApp.heightIsValid());
	    });

	    it('weight validation', function () {
	      assert(validApp.weightIsValid());
	    });
	})
}) 