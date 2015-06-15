this["template"] = this["template"] || {};
this["template"]["contact"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <li class=\"dataItem\" id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n\n    "
    + alias3(((helper = (helper = helpers.fullName || (depth0 != null ? depth0.fullName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fullName","hash":{},"data":data}) : helper)))
    + "\n\n    <span class=\"delete\" id=\"delete\"><i class=\"fa fa-trash\"></i></i></span>\n\n\n    <ul class='contactInfo'>\n      <li>\n        <i class=\"fa fa-phone\"></i>\n        "
    + alias3(((helper = (helper = helpers.phoneNumber || (depth0 != null ? depth0.phoneNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phoneNumber","hash":{},"data":data}) : helper)))
    + "\n      </li>\n      <li>\n        <i class=\"fa fa-envelope-o\"></i>\n        "
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\n      </li>\n      <li>\n        <i class=\"fa fa-twitter\"></i>\n        "
    + alias3(((helper = (helper = helpers.handle || (depth0 != null ? depth0.handle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"handle","hash":{},"data":data}) : helper)))
    + "\n      </li>\n      <li class=\"categoryList\">\n        <i class=\"fa fa-tag\"></i>\n        "
    + alias3(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"category","hash":{},"data":data}) : helper)))
    + "\n      </li>\n    </ul>\n  </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});