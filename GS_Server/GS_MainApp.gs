function doUserChoice(po) {
try{
  var ao,choice,k,map,newKey,rslt;

  //Logger.log('po 5: ' + JSON.stringify(po))
  
  ao = {};
  
  choice = po.idActionChoice;
  //Logger.log('choice 10: ' + choice)

  map = {
    "idUserID":"userName",
    "idActionChoice":"commitDescription",
    "idRepoName":"repoName",
    "idFileName":"fileName",
    "idFolderName":"folders",
    "idActionDescription":"commitDescription",
    "idIsPrivateRepo":"private",
    "idTokenID":"true",
    "idSrcFileID":"srcFileID",
    "idTargetFileID":"trgtFileID"
  }
  
  for (k in po) {
    newKey = map[k];
    if (!newKey) {continue;}
    
    ao[newKey] = po[k];    
  }
  
  switch(choice) {
    case 'createFile':
      rslt = createNewFileInExistingRepo_(ao);
      break;
    case 'updateFile':
      rslt = updateFile_(ao);
      break;
    case 'newRepo':
      rslt = createNewRepo_(ao);
      break;
    case 'pullRepo':
      rslt = abc_(ao);
      break;
    case 'pushProject':
      rslt = pushAllFilesToRepo_(ao);
      break;
    case 'pullOneFile':
      rslt = getFileContent_(ao);
      break;
    case 'dletRepo':
      rslt = deleteRepo_(ao);
      break;
    case 'dletFile':
      rslt = deleteOneFile_(ao);
      break;
    case 'dletAllFilesInRepo':
      rslt = dletFilesInRepo_(ao);
      break;
    default:
      rslt = "There was a client side error";
      break;
  }
  
  Logger.log('rslt 64: ' + rslt)
  
  if (rslt !== true) {
    Logger.log('should stringify')
    rslt = JSON.stringify(rslt);
  }
  return rslt;
}catch(e) {
  Logger.log('Error: ' + e.message + "\nStack: " + e.stack)
  return e;
}
}
