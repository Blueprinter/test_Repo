function doGet() {
  var template = HtmlService.createTemplateFromFile('Index');

  // Build and return HTML in IFRAME sandbox mode.
  return template.evaluate()
      .setTitle('Compress Image')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
};
