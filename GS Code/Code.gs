function doGet() {
  var h;
  
  h = HtmlService.createTemplateFromFile('H_Stripe').evaluate();
  h.setTitle('Stripe V3');
  
  return h;
}
