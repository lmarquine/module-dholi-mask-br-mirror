define(["uiRegistry","js/view/mask"],function(c,d){return function(a){c.async("checkoutProvider")(function(b){b.on("shippingAddress",function(f){d.apply()});Object.getOwnPropertyNames(b).forEach(function(i,j,h){if(i.indexOf("billingAddress")!=-1){b.on(i,function(e){d.apply()})}})});return a}});