/* ---------------------------------------
 Exported Module Variable: AudioSlides4Web
 Package:  audioslides4web
 Version:  1.2.1  Date: 2020/03/11 7:40:53
 Homepage: https://github.com/niebert/audioslides4web#readme
 Author:   Engelbert Niehaus
 License:  MIT
 Date:     2020/03/11 7:40:53
 Require Module with:
    const AudioSlides4Web = require('audioslides4web');
 JSHint: installation with 'npm install jshint -g'
 ------------------------------------------ */

/*jshint  laxcomma: true, asi: true, maxerr: 150 */
/*global alert, confirm, console, prompt */
/* ---------------------------------------
 Exported Module Variable: LinkParam
 Package:  linkparam
 Version:  1.1.6
 Homepage: https://github.com/niebert/LinkParam#readme
 Author:   Engelbert Niehaus
 License:  MIT
 Date:     2018/12/09 19:54:52
 Require Module with:
    const LinkParam = require('linkparam');
 ------------------------------------------ */

//--- JSHint Settings: -----
/*jshint  laxcomma: true, asi: true, maxerr: 150 */
/*global alert, confirm, console, prompt */
//#################################################################
//# Javascript Class: LinkParam()
//#       SuperClass:
//#   Class Filename: linkparam.js
//#
//# Author of Class:      Engelbert Niehaus
//# email:                niehaus@uni-landau.de
//# created               undefined
//# last modifications    2017/11/14 11:11:20
//# GNU Public License V3 - OpenSource
//#
//# created with JavaScript Class Creator JSCC
//#     https://niebert.github.io/JavascriptClassGenerator
//#################################################################

//---------------------------------------------------------------------
//---Store File in Subdirectory /js and import this Class in HTML-File with
// SCRIPT-Tag:  LANGUAGE="JavaScript" SRC="js/linkparam.js"
//---------------------------------------------------------------------
//---Constructor of Class LinkParam()
// Call the constructor for creating an instance of class LinkParam
// by the following command in HTML-file that imports this class
// var vMyInstance = new LinkParam();
//---------------------------------------------------------------------
//----Attributes-------------------------------------------------------
//---------------------------------------------------------------------
// If you want to access the attributes of LinkParam, use
// the attribute name with a leading "this." in the definition of method of LinkParam, e.g.
// this.aName = "Hello World";
//---------------------------------------------------------------------
//----Methods----------------------------------------------------------
//---------------------------------------------------------------------
// (1) If you want to assign definitions of methods for single instance of the class 'LinkParam'
// they are defined with
//    this.my_method = function (pPar1,pPar2)
// this approach allows to overwrite the method definition of single instances dynamically.
//---------------------------------------------------------------------
// (2) A prototype definition of methods for 'LinkParam' will be set by
// use the method's name and extend it with 'LinkParam'.
//    LinkParam.prototype.my_method = function (pPar1,pPar2)
// This approach consumes less memory for instances.
//---------------------------------------------------------------------

	// no superclass defined


function LinkParam () {
	// no superclass defined

    //---------------------------------------------------------------------
    //---Attributes of Class "LinkParam()"
    //---------------------------------------------------------------------
	//---PUBLIC: size (Integer): Counts the Number of Parameter
	this.size = 0;
	//---PUBLIC: aVars (Hash): Attribute: 'aVars' Type: 'Hash' stores all URL parameters
	this.aVars = {} ;
	//---PUBLIC: aLink (String): Attribute: 'aLink' Type: 'String' stores the Link before '?'
	this.aLink = "";

    //---------------------------------------------------------------------
    //---Methods of Class "LinkParam()"
    //---------------------------------------------------------------------
	//----PUBLIC Method: LinkParam.init(pDoc:Document)-----
	// init(pDoc)
	//	init extract the link with parameters from document.location.search and store aLink
	//----PUBLIC Method: LinkParam.parseURL(pLink:String):String-----
	// parseURL(pLink)  Return: String
	//	parses the URL stores the variables in 'aVar' e.g. ..&lastname=Niehaus&... stores aVars['name']='Niehaus'
	//----PUBLIC Method: LinkParam.getURL(pVarHash:Hash):String-----
	// getURL(pVarHash)  Return: String
	//	Comment for getLink
	//----PUBLIC Method: LinkParam.setValue(pVar:String,pValue:String)-----
	// setValue(pVar,pValue)
	//	Comment for setValue
	//----PUBLIC Method: LinkParam.getValue(pVar:String):String-----
	// getValue(pVar)  Return: String
	//	Comment for getValue(pVar) return the definition of the parameter exists otherwise en empty string
	//----PUBLIC Method: LinkParam.deleteValue(pVar:String)-----
	// deleteValue(pVar)
	//	Comment for deleteValue in the parameter hash aVars
	//	return a Boolean if delete was sucessful, resp. variable pVar exists in Hash aVars
	//----PUBLIC Method: LinkParam.getLink4URL():String-----
	// getLink4URL()  Return: String
	//	get the Link part of the URL without the URL parameters
	//----PUBLIC Method: LinkParam.getParam4URL():String-----
	// getParam4URL()  Return: String
	//	get the parameter string for the URL starting with ? if aVars contains variables
	//----PUBLIC Method: LinkParam.decodeParam(pParam:String):String-----
	// decodeParam(pParam)  Return: String
	//	decode a parameter from the URL
	//----PUBLIC Method: LinkParam.encodeParam(pParam:String)-----
	// encodeParam(pParam)
	//	encode a parameter for a call from the app.
	//----PUBLIC Method: LinkParam.getTableHTML():String-----
	// getTableHTML()  Return: String
	//	creates a HTML table with two column for key and value of the parameter hash aVars
	//----PUBLIC Method: LinkParam.getEditTableHTML(pPrefixID:String):String-----
	// getEditTableHTML(pPrefixID)  Return: String
	//	creates a Edit HTML table with two column for key and value of the parameter hash aVars.
	//	The keys of aVars are used as IDs for the HTML form.
	//	An optional ID prefix as parameter can be used to create a unique ID for the DOM elements
	//	All parameters are visible in an input field.
	//----PUBLIC Method: LinkParam.calcSize()-----
	// calcSize()
	//	calculates the number of variables defined in the URL parameters, stores result in length
	//----PUBLIC Method: LinkParam.encodeHTML(pValue:String,pWrapCode:Boolean):String-----
	// encodeHTML(pValue,pWrapCode)  Return: String
	//	Encodes source code for HTML-Output in as code or textarea in the following way:
	//	 1) Replace "&" character with "&amp;"
	//	 2) Replace "<" character with "&lt;"
	//	 3) Replace ">" character with "&gt;"
	//	The converted pValue will wrapped with <pre> and <code> tags for direct display as HTML
	//	and without code tag wrapper if the code is written as inner HTML and value to a textarea.
	//----PUBLIC Method: LinkParam.exists(pVar:String):Boolean-----
	// exists(pVar)  Return: Boolean
	//	checks if the parameter with variable 'pVar' exists in parameter hash this.aVars
	//----PUBLIC Method: LinkParam.param2DOM(pLinkID:String,pDOMID:String,pOutType:String)-----
	// param2DOM(pLinkID,pDOMID,pOutType)
	//	param2DOM(pLinkID,pDOMID) read the Link Parameter of the pLinkID if exists and
	//	- (html) writes the content to innerHTML (pOutType='html') of DOM node pDOMID or
	//	- (val) writes the content to the value of the HTML input object with the ID pDOMID



}
//-------------------------------------------------------------------------
//---END Constructor of Class "LinkParam()"
//-------------------------------------------------------------------------

//
//#################################################################
//# PUBLIC Method: init()
//#    used in Class: LinkParam
//# Parameter:
//#    pDoc:Document
//# Comment:
//#    init extract the link with parameters from document.location.search and store aLink
//#
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.init = function (pDoc) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: init(pDoc:Document)");
  // alert("js/linkparam.js - Call: init(pDoc:Document)");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.init(pDoc);
  //-------------------------------------------------------

  //save "document" object in aDoc as Attribute for further use
  this.aDoc = pDoc;
  this.aLink = pDoc.location;
  this.aVars = this.parseURL(pDoc.location.search);

}
//----End of Method init Definition


//#################################################################
//# PUBLIC Method: parseURL()
//#    used in Class: LinkParam
//# Parameter:
//#    pLink:String
//# Comment:
//#    parses the URL stores the variables in 'aVar' e.g. ..&lastname=Niehaus&... stores aVars['name']='Niehaus'
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.parseURL = function (pLink) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: parseURL(pLink:String):String");
  // alert("js/linkparam.js - Call: parseURL(pLink:String):String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.parseURL(pLink);
  //-------------------------------------------------------

  var vLink = pLink || "";
  var vParams = {},
      vTokens,
      vRE = /[?&]?([^=]+)=([^&]*)/g;
  if (vLink != "") {
    vLink = vLink.split('+').join(' ');
    while (vTokens = vRE.exec(vLink)) {
      vParams[this.decodeParam(vTokens[1])] = this.decodeParam(vTokens[2]);
      this.calcSize();
    }
  } else {
      console.log("parseURL(pLink) - pLink contains no parameters")
  }
  return vParams;

}
//----End of Method parseURL Definition


//#################################################################
//# PUBLIC Method: getURL()
//#    used in Class: LinkParam
//# Parameter:
//#    pVarHash:Hash
//# Comment:
//#    Comment for getLink
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.getURL = function (pVarHash) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: getURL(pVarHash:Hash):String");
  // alert("js/linkparam.js - Call: getURL(pVarHash:Hash):String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.getURL(pVarHash);
  //-------------------------------------------------------

  var vParam = "";
  if (pVarHash) {
      vParam = this.getParam4URL(pVarHash);
  } else {
      vParam = this.getParam4URL();
  }
  return this.getLink4URL() + vParam;

}
//----End of Method getURL Definition


//#################################################################
//# PUBLIC Method: setValue()
//#    used in Class: LinkParam
//# Parameter:
//#    pVar:String
//#    pValue:String
//# Comment:
//#    sets the value of a link parameter, this is useful
//#    when a parameter for URL are generated from the link parameters
//#    defined in LinkParam
//# created
//# last modifications
//#################################################################

LinkParam.prototype.setValue = function (pVar,pValue) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: setValue(pVar:String,pValue:String)");
  // alert("js/linkparam.js - Call: setValue(pVar:String,pValue:String)");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.setValue(pVar,pValue);
  //-------------------------------------------------------

  if (this.aVars.hasOwnProperty(pVar)) {
    console.log("Value of link parameter '"+pVar+"' changed");
  } else {
    this.calcSize();
    console.log("New  link parameter '"+pVar+"' created");
  }
  this.aVars[pVar] = pValue

}
//----End of Method setValue Definition


//#################################################################
//# PUBLIC Method: getValue()
//#    used in Class: LinkParam
//# Parameter:
//#    pVar:String
//# Comment:
//#    Comment for getValue(pVar) return the definition of the parameter exists otherwise en empty string
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.getValue = function (pVar) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: getValue(pVar:String):String");
  // alert("js/linkparam.js - Call: getValue(pVar:String):String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.getValue(pVar);
  //-------------------------------------------------------

  var vRet = "";
  if (this.aVars.hasOwnProperty(pVar)) {
      vRet = this.aVars[pVar]
  } else {
      console.log("ERROR: variable '"+pVar+"' does not exist in LinkParam");
  }
  return vRet;

}
//----End of Method getValue Definition


//#################################################################
//# PUBLIC Method: deleteValue()
//#    used in Class: LinkParam
//# Parameter:
//#    pVar:String
//# Comment:
//#    Comment for deleteValue in the parameter hash aVars
//#    return a Boolean if delete was sucessful, resp. variable pVar exists in Hash aVars
//#
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.deleteValue = function (pVar) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: deleteValue(pVar:String)");
  // alert("js/linkparam.js - Call: deleteValue(pVar:String)");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.deleteValue(pVar);
  //-------------------------------------------------------

  var vRet = false;
  if (this.aVars.hasOwnProperty(pVar)) {
      delete this.aVars[pVar];
      vRet = true;
      this.calcSize();
  }
  return vRet;

}
//----End of Method deleteValue Definition


//#################################################################
//# PUBLIC Method: getLink4URL()
//#    used in Class: LinkParam
//# Parameter:
//#
//# Comment:
//#    get the Link part of the URL without the URL parameters
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.getLink4URL = function () {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: getLink4URL():String");
  // alert("js/linkparam.js - Call: getLink4URL():String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.getLink4URL();
  //-------------------------------------------------------

  return this.aLink;

}
//----End of Method getLink4URL Definition


//#################################################################
//# PUBLIC Method: getParam4URL()
//#    used in Class: LinkParam
//# Parameter:
//#
//# Comment:
//#    get the parameter string for the URL starting with ? if aVars contains variables
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.getParam4URL = function () {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: getParam4URL():String");
  // alert("js/linkparam.js - Call: getParam4URL():String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.getParam4URL();
  //-------------------------------------------------------

	  var vHash = this.aVars || {} ;
	  var vOut = "";
	  var vSep = "?";
	  for (var iID in vHash) {
	    if (vHash.hasOwnProperty(iID)) {
        vOut += vSep + this.encodeParam(iID) + "=" + this.encodeParam(vHash[iID]);
	      vSep = "&";
	    }
	  }
	  return vOut;

}
//----End of Method getParam4URL Definition


//#################################################################
//# PUBLIC Method: decodeParam()
//#    used in Class: LinkParam
//# Parameter:
//#    pParam:String
//# Comment:
//#    decode a parameter from the URL
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.decodeParam = function (pParam) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: decodeParam(pParam:String):String");
  // alert("js/linkparam.js - Call: decodeParam(pParam:String):String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.decodeParam(pParam);
  //-------------------------------------------------------

  pParam = pParam.replace(/\+/g,  " ");
  pParam = decodeURIComponent(pParam);
  return pParam;


}
//----End of Method decodeParam Definition


//#################################################################
//# PUBLIC Method: encodeParam()
//#    used in Class: LinkParam
//# Parameter:
//#    pParam:String
//# Comment:
//#    encode a parameter for a call from the app.
//#
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.encodeParam = function (pParam) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: encodeParam(pParam:String)");
  // alert("js/linkparam.js - Call: encodeParam(pParam:String)");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.encodeParam(pParam);
  //-------------------------------------------------------

  var vParam = encodeURIComponent(pParam);
  vParam = vParam.replace(/'/g,"%27").replace(/"/g,"%22");
  return vParam;

}
//----End of Method encodeParam Definition


//#################################################################
//# PUBLIC Method: getTableHTML()
//#    used in Class: LinkParam
//# Parameter:
//#
//# Comment:
//#    creates a HTML table with two column for key and value of the parameter hash aVars
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.getTableHTML = function () {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: getTableHTML():String");
  // alert("js/linkparam.js - Call: getTableHTML():String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.getTableHTML();
  //-------------------------------------------------------

  var vOut = "";
  var vHash = this.aVars;
  vOut += "<table border=1>";
  vOut += "<tr><td><b>Variable</b></td><td>Value</td></tr>";
  var vWrapCode = true;
  for (var iID in vHash) {
      if (vHash.hasOwnProperty(iID)) {
        vOut += "<tr>";
        vOut += "<td>";
        vOut += "<b>"+iID+"</b>";
        vOut += "</td>";
        vOut += "<td>";
        // second parameter vWrapCode = true for non textarea use;
        vOut += this.encodeHTML(vHash[iID],vWrapCode);
        vOut += "</td>";
        vOut += "</tr>";
      }
  }
  vOut += "</table>";
  return vOut;

}
//----End of Method getTableHTML Definition


//#################################################################
//# PUBLIC Method: getEditTableHTML()
//#    used in Class: LinkParam
//# Parameter:
//#    pPrefixID:String
//# Comment:
//#    creates a Edit HTML table with two column for key and value of the parameter hash aVars.
//#    The keys of aVars are used as IDs for the HTML form.
//#    An optional ID prefix as parameter can be used to create a unique ID for the DOM elements
//#    All parameters are visible in an input field.
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.getEditTableHTML = function (pPrefixID) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: getEditTableHTML(pPrefixID:String):String");
  // alert("js/linkparam.js - Call: getEditTableHTML(pPrefixID:String):String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.getEditTableHTML(pPrefixID);
  //-------------------------------------------------------

  var vPrefixID = pPredixID || "";
  var vOut = "";
  var vHash = this.aVars;
  vOut += "<table border=1>";
  var vRows = 1;
  var vContent = "";
  var vMaxRows = 10;
  var vWrapCode = false;
  for (var iID in vHash) {
      if (vHash.hasOwnProperty(iID)) {
        vContent = this.encodeHTML(vHash[iID],vWrapCode);
        vRows = (vHash[iID].split("\n")).length;
        if (vRows > vMaxRows) {
            vRows = vMaxRows;
        }
        vOut += "<tr>";
        vOut += "<td>";
        vOut += "<b>"+iID+"</b>";
        vOut += "</td>";
        vOut += "<td>";
        // second parameter vWrapCode = true for non textarea use;
        vOut += "<textarea id='"+vPrefix+iID+"'' cols='90' rows='"+vRows+"''>";
        vOut += vContent;
        vOut += "</textarea>";
        vOut += "</td>";
        vOut += "</tr>";
      }
  }
  vOut += "</table>";
  return vOut;

}
//----End of Method getEditTableHTML Definition


//#################################################################
//# PUBLIC Method: calcSize()
//#    used in Class: LinkParam
//# Parameter:
//#
//# Comment:
//#    calculates the number of variables defined in the URL parameters, stores result in length
//#
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.calcSize = function () {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: calcSize()");
  // alert("js/linkparam.js - Call: calcSize()");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.calcSize();
  //-------------------------------------------------------

  var vRet = 0;
  if (this.aVars) {
      var vHash = this.aVars;
      for (var key in vHash) {
          vRet++;
      }
  } else {
      console.log("ERROR: variable '"+pVar+"' does not exist in LinkParam");
  }
  return vRet;

}
//----End of Method calcSize Definition


//#################################################################
//# PUBLIC Method: encodeHTML()
//#    used in Class: LinkParam
//# Parameter:
//#    pValue:String
//#    pWrapCode:Boolean
//# Comment:
//#    Encodes source code for HTML-Output in as code or textarea in the following way:
//#     1) Replace "&" character with "&amp;"
//#     2) Replace "<" character with "&lt;"
//#     3) Replace ">" character with "&gt;"
//#    The converted pValue will wrapped with <pre> and <code> tags for direct display as HTML
//#    and without code tag wrapper if the code is written as inner HTML and value to a textarea.
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.encodeHTML = function (pValue,pWrapCode) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: encodeHTML(pValue:String,pWrapCode:Boolean):String");
  // alert("js/linkparam.js - Call: encodeHTML(pValue:String,pWrapCode:Boolean):String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.encodeHTML(pValue,pWrapCode);
  //-------------------------------------------------------

  var vValue = pValue || "";
  if (vValue != "") {
      vValue = vValue.replace(/</g,"&lt;");
      vValue = vValue.replace(/>/g,"&gt;");
      vValue = vValue.replace(/&/g,"&amp;");
  }
  if (pWrapCode && (pWrapCode === true)) {
      vValue = "<pre><code>"+vValue+"</code></pre>";
  }
  return vValue

}
//----End of Method encodeHTML Definition


//#################################################################
//# PUBLIC Method: exists()
//#    used in Class: LinkParam
//# Parameter:
//#    pVar:String
//# Comment:
//#    checks if the parameter with variable 'pVar' exists in parameter hash this.aVars
//# Return: Boolean
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.exists = function (pVar) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: exists(pVar:String):Boolean");
  // alert("js/linkparam.js - Call: exists(pVar:String):Boolean");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.exists(pVar);
  //-------------------------------------------------------

  var vRet = false;
  if (pVar) {
     vRet = this.aVars.hasOwnProperty(pVar)
  }
  return vRet;


}
//----End of Method exists Definition


//#################################################################
//# PUBLIC Method: param2DOM()
//#    used in Class: LinkParam
//# Parameter:
//#    pLinkID:String
//#    pDOMID:String
//#    pOutType:String
//# Comment:
//#    param2DOM(pLinkID,pDOMID) read the Link Parameter of the pLinkID if exists and
//#    - (html) writes the content to innerHTML (pOutType='html') of DOM node pDOMID or
//#    - (val) writes the content to the value of the HTML input object with the ID pDOMID
//#
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.param2DOM = function (pLinkID,pDOMID,pOutType) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: param2DOM(pLinkID:String,pDOMID:String,pOutType:String)");
  // alert("js/linkparam.js - Call: param2DOM(pLinkID:String,pDOMID:String,pOutType:String)");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.param2DOM(pLinkID,pDOMID,pOutType);
  //-------------------------------------------------------
	var vOutType = pOutType    ||    "html";
  if (this.exists(pLinkID)) {
      var vDOMID = pDOMID || pLinkID; // vDOMID is set by parameter pLinkID otherwise pDOMID == pLinkID;
      var vOutDOM = document.getElementById(vDOMID);
      if (vOutDOM) {
          if (vOutType == "html") {
              vOutDOM.innerHTML = this.getValue(pLinkID);
          } else {
              vOutDOM.value = this.getValue(pLinkID);
          }
      } else {
          console.log("DOM node ["+vDOMID+"] does not exist!")
      }
  } else {
      console.log("pLinkID does not exist in param2DOM-call")
  }


}
//----End of Method param2DOM Definition



//-------------------------------------------
//---End Definition of Class-----------------
// JS Class: LinkParam
//-------------------------------------------
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})}
/* canvas-toBlob.js
 * A canvas.toBlob() implementation.
 * 2016-05-26
 * 
 * By Eli Grey, http://eligrey.com and Devin Samarin, https://github.com/eboyjr
 * License: MIT
 *   See https://github.com/eligrey/canvas-toBlob.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,
  plusplus: true */

/*! @source http://purl.eligrey.com/github/canvas-toBlob.js/blob/master/canvas-toBlob.js */

(function(view) {
"use strict";
var
	  Uint8Array = view.Uint8Array
	, HTMLCanvasElement = view.HTMLCanvasElement
	, canvas_proto = HTMLCanvasElement && HTMLCanvasElement.prototype
	, is_base64_regex = /\s*;\s*base64\s*(?:;|$)/i
	, to_data_url = "toDataURL"
	, base64_ranks
	, decode_base64 = function(base64) {
		var
			  len = base64.length
			, buffer = new Uint8Array(len / 4 * 3 | 0)
			, i = 0
			, outptr = 0
			, last = [0, 0]
			, state = 0
			, save = 0
			, rank
			, code
			, undef
		;
		while (len--) {
			code = base64.charCodeAt(i++);
			rank = base64_ranks[code-43];
			if (rank !== 255 && rank !== undef) {
				last[1] = last[0];
				last[0] = code;
				save = (save << 6) | rank;
				state++;
				if (state === 4) {
					buffer[outptr++] = save >>> 16;
					if (last[1] !== 61 /* padding character */) {
						buffer[outptr++] = save >>> 8;
					}
					if (last[0] !== 61 /* padding character */) {
						buffer[outptr++] = save;
					}
					state = 0;
				}
			}
		}
		// 2/3 chance there's going to be some null bytes at the end, but that
		// doesn't really matter with most image formats.
		// If it somehow matters for you, truncate the buffer up outptr.
		return buffer;
	}
;
if (Uint8Array) {
	base64_ranks = new Uint8Array([
		  62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1
		, -1, -1,  0, -1, -1, -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9
		, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
		, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35
		, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
	]);
}
if (HTMLCanvasElement && (!canvas_proto.toBlob || !canvas_proto.toBlobHD)) {
	if (!canvas_proto.toBlob)
	canvas_proto.toBlob = function(callback, type /*, ...args*/) {
		  if (!type) {
			type = "image/png";
		} if (this.mozGetAsFile) {
			callback(this.mozGetAsFile("canvas", type));
			return;
		} if (this.msToBlob && /^\s*image\/png\s*(?:$|;)/i.test(type)) {
			callback(this.msToBlob());
			return;
		}

		var
			  args = Array.prototype.slice.call(arguments, 1)
			, dataURI = this[to_data_url].apply(this, args)
			, header_end = dataURI.indexOf(",")
			, data = dataURI.substring(header_end + 1)
			, is_base64 = is_base64_regex.test(dataURI.substring(0, header_end))
			, blob
		;
		if (Blob.fake) {
			// no reason to decode a data: URI that's just going to become a data URI again
			blob = new Blob
			if (is_base64) {
				blob.encoding = "base64";
			} else {
				blob.encoding = "URI";
			}
			blob.data = data;
			blob.size = data.length;
		} else if (Uint8Array) {
			if (is_base64) {
				blob = new Blob([decode_base64(data)], {type: type});
			} else {
				blob = new Blob([decodeURIComponent(data)], {type: type});
			}
		}
		callback(blob);
	};

	if (!canvas_proto.toBlobHD && canvas_proto.toDataURLHD) {
		canvas_proto.toBlobHD = function() {
			to_data_url = "toDataURLHD";
			var blob = this.toBlob();
			to_data_url = "toDataURL";
			return blob;
		}
	} else {
		canvas_proto.toBlobHD = canvas_proto.toBlob;
	}
}
}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || this.content || this));
var vDOM2ID = {
  "tTitle":"title",
  "tCourse":"course",
  "tAuthor":"author",
  "tFirst":"first",
  "tLast":"last",
  "tAudioType":"audiotype",
  "tAudioExt":"audioext",
  "tImageExt":"imageext",
  "tAudioBaseName":"audiobasename",
  "tImageBaseName":"imagebasename",
  "tDate":"date"
};

var vID2DOM = {};

// create a revers map
for (var variable in vDOM2ID) {
  if (vDOM2ID.hasOwnProperty(variable)) {
    vID2DOM[vDOM2ID[variable]] = variable;
  }
}

function el4ijsond (id) {
  return el(vID2DOM[id]);
}

function readDOM2JSON(pDOM2ID,pJSON){
  for (var id in pDOM2ID) {
    console.log("readDOM2JSON id='" + id + "'");
    if (pDOM2ID.hasOwnProperty(id)) {
      var vID = getJSONID(pDOM2ID[id]);
      //vID = vID.replace(/audio/,"audio.");
      //vID = vID.replace(/image/,"image.");
      switch (vID) {
        case "first":
          pJSON[vID] = getInteger(el(id).value);
        break;
        case "last":
          pJSON[vID] = getInteger(el(id).value);
        break;
        case "audiobasename":
          pJSON.data.audio.basename = el(id).value;
        break;
        case "audiotype":
          pJSON.data.audio.type = el(id).value;
        break;
        case "audioext":
          pJSON.data.audio.ext = el(id).value;
        break;
        case "imagebasename":
          pJSON.data.image.basename = el(id).value;
        break;
        case "imageext":
          pJSON.data.image.ext = el(id).value;
        break;
        default:
           if  (pJSON.hasOwnProperty(vID)) {
             pJSON[vID] = el(id).value;
           } else {
             console.log("WARNING: pJSON has no property '"+vID+"'");
           }
      } // /switch
    } // /if
  } //  /for
  return pJSON;
}

function getJSONID(pid) {
  var id4JSON = pid;
  if (id4JSON) {
    id4JSON = id4JSON.replace(/^audio/,"data.audio.");
    id4JSON = id4JSON.replace(/^image/,"data.audio.");
  } else {
    id4JSON = 'ID_undef';
    console.log("ERROR: getJSONID(pid) pid undefined - return pid='ID_undef'");
  }

  return id4JSON;
}

function getDate() {
	var vNow = new Date();
	var vMonth = vNow.getMonth()+1;
	return vNow.getDate()+"."+vMonth+"."+vNow.getFullYear();
}

function outTime(pNr) {
	var vOut = pNr;
	if (pNr == 0) {
		vOut = "00"
	} if (pNr<10) {
		vOut = "0"+pNr;
	};
	return vOut
}

function getDateTime() {
	var vNow = new Date();
	var vSep = "/"; // set separator for date
	var vOut = vNow.getFullYear() + vSep +outTime(vNow.getMonth()+1) + vSep + outTime(vNow.getDate());
  vOut += " "; // Separator between Date and Time
	vSep = ":"; // set separator for time
	vOut += vNow.getHours() + vSep + outTime(vNow.getMinutes()) + vSep + outTime(vNow.getSeconds());
	return vOut;
}

function getTimeIndex() {
	var d = new Date();
  return d.getTime();
};
/* ---------------------------------------
 Exported Module Variable: LoadFile4DOM
 Package:  loadfile4dom
 Version:  1.1.6  Date: 2019/01/07 16:21:22
 Homepage: https://gitlab.com/niehausbert/loadfile4dom#readme
 Author:   Engelbert Niehaus
 License:  MIT
 Date:     2019/01/07 16:21:22
 Require Module with:
    const LoadFile4DOM = require('loadfile4dom');
 JSHint: installation with 'npm install jshint -g'
 ------------------------------------------ */

/*jshint  laxcomma: true, asi: true, maxerr: 150 */
/*global alert, confirm, console, prompt */
// #################################################################
// # Javascript Class: LoadFile4DOM()
// #   Class Filename: loadfile4dom.js
// #
//# Author of Class:      Bert Niehaus
//# email:                niebert GitHub
//# Created:              2018/12/12 14:49:10
//# Modified              2018/12/30 9:54:14
//# GNU Public License V3 - OpenSource
//#
//# created with JavaScript ClassEditorUML
//#     https://niebert.github.io/ClassEditorUML
//#################################################################

//---------------------------------------------------------------------
//---- USED CLASSES: ----
// Used classes in parameters of methods, return values of methods and attributes

// NodeJS: Require additional Modules

//---------------------------------------------------------------------
// Configuration Code:
// the configuration code will be used to create some constants
//---------------------------------------------------------------------
//---Constructor of Class LoadFile4DOM()
// Call the constructor for creating an instance of class LoadFile4DOM
// by the following command in HTML-file that imports this class
// var vLoadFile4DOM = new LoadFile4DOM();
//---------------------------------------------------------------------
//----Attributes-------------------------------------------------------
//---------------------------------------------------------------------
// If you want to access the attributes of LoadFile4DOM in the code for methods, use
// the attribute name with a leading "this." in the definition of method of LoadFile4DOM, e.g.
// this.aName = "Hello World";
//---------------------------------------------------------------------
//----Methods----------------------------------------------------------
//---------------------------------------------------------------------
// (1) If you want to assign definitions of methods for single instance of the class 'LoadFile4DOM'
// they are defined with
//    this.my_method = function (pPar1,pPar2)
// this approach allows to overwrite the method definition of single instances dynamically.
//---------------------------------------------------------------------
// (2) A prototype definition of methods for 'LoadFile4DOM' will be set by
// use the method's name and extend it with 'LoadFile4DOM'.
//    LoadFile4DOM.prototype.my_method = function (pPar1,pPar2)
// This approach consumes less memory for instances.
//---------------------------------------------------------------------



function LoadFile4DOM () {
    //---------------------------------------------------------------------
    //---Attributes of Class "LoadFile4DOM()"
    //---------------------------------------------------------------------

    // ------------------------------------------
    // public: aDoc   Class:
    // This attribute stores a reference to the document object of the browser. Reference provided with the init-method
    this.aDoc = null;   // Class:
    // ------------------------------------------
    // public: aOptions   Class:
    // This hash stores the options of the init method - e.g. "id4loadfile" as DIV container for the input elements in the DOM that holds all created file loaders i.e. holding the input-file-tags for load a JSON file
    this.aOptions = null;   // Class:
    // ------------------------------------------
    // public: aFileLoader   Class:
    // This attribute stores the number of file loaders created with instance
    this.aFileLoader = {};   // Class:
    // ------------------------------------------
    // public: aLoadFileHolder   Class:
    // This attribute stores the reference to the DIV node of the file holder node in the DOM that is created by this.create_holder()
    this.aLoadFileHolder = {
      "id": "holder4loadfile",
      "dom": null,
      "timeout": 0,
      "var4dom": "undef_call_var",
      "debug": false
    };   // Class:
    // ------------------------------------------
    // public: defaults_options   Class:
    // the attribute stores the default options for LoadFile4DOM
    this.defaults_options = {
      "id": "loadfile_holder_div",
      "dom": null,
      "width4thumb": 150,
      "setonload": false,
      "timeout": 1000,
      "debug": false
    };   // Class:
    // ------------------------------------------
    // public: type2accept   Class:
    // the attribute maps the type to the accept tag of files of the input-file-tag
    this.type2accept = {
          "all": "*",
          "audio": "audio/*",
          "audiourl": "text/*",
          "data": "*",
          "image": "image/*",
          "image_thumb": "image/*",
          "json": "application/json",
          "text": "text/*",
          "texturl": "text/*",
          "video": "video/*",
          "videourl": "text/*",
          "url": "text/*",
          "zip": "application/zip"
        };   // Class:
    // ------------------------------------------
    // public: type2accept   Class:
    // the attribute maps the type to the accept tag of files of the input-file-tag
    this.type2returntype = {
          "all": "filehash",
          "audio": "filehash",
          "audiourl": "filehash",
          "data": "filehash",
          "image": "dom",
          "image_thumb": "dom",
          "json": "file",
          "text": "file",
          "texturl": "filehash",
          "video": "filehash",
          "videourl": "filehash",
          "url": "filehash",
          "zip": "filehash"
        };   // Class:
        // ------------------------------------------
    // public: defaults_loader   Class:
    // the attribute stores the default loader tags if not options are provided
    this.defaults_loader = {
      "filetype": "text",
      "id": "loader123456789",
      "name": "defaultloader",
      "value": "Dialog Loader Button",
      "accept": "text/*",
      "onchange": "console.log('open dialog click on 'defaultloader')",
      "multiple": true
    };   // Class:
    // ------------------------------------------
    // public: aLoaderCount   Class:
    // the attribute stores the number of created loaders to create unique loader IDs in the DOM together with the method getTimeStamp()
    this.aLoaderCount = 0;   // Class:
    //---------------------------------------------------------------------
    //---Methods of Class "LoadFile4DOM()"
    //---------------------------------------------------------------------

    // #################################################################
    // # public Method: init()  Class: LoadFile4DOM
    // # Parameter:
    // #    pDoc:
    // #      the parameter contains a reference to the document object of the browser
    // #    pOptions:
    // #      the parameter stores options
    // # Comment:
    // #    the method performs the initialization of the instance of LoadFile4DOM. pOptions contains the ID for the LoadFile4DOM holder, it is in general a DIV element with the HTML-input-tags for uploading a files.
    // #
    // #################################################################

    // #################################################################
    // # public Method: getTimeStamp()  Class: LoadFile4DOM
    // # Parameter:
    // #
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: create_input_tags()  Class: LoadFile4DOM
    // # Parameter:
    // #
    // # Comment:
    // #    the method injects the input-files tags for the loaders in the DOM - the method is called by LoadFile4DOM.create() with body-onload attribute.
    // #
    // #################################################################

    // #################################################################
    // # public Method: create()  Class: LoadFile4DOM
    // # Parameter:
    // #
    // # Comment:
    // #    the method creates a DOM node for the file in the `window.document` of the browser and  adds an object in `this.aFileLoader` the each constructed file loader with the appropriate ID.
    // #
    // #################################################################

    // #################################################################
    // # public Method: get_holder()  Class: LoadFile4DOM
    // # Parameter:
    // #
    // # Comment:
    // #    the method returns the LoadFile4DOM holder as DOM node. The id of the LoadFile4DOM holder is stored in this.aOptions.id4loadfile. The holder is an existing DIV node in the DOM (Document Object Model) or it will be created by the create_holder
    // #
    // #################################################################

    // #################################################################
    // # public Method: create_load_dialog()  Class: LoadFile4DOM
    // # Parameter:
    // #    pOptions:
    // #      the parameter provides ...
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: create_holder()  Class: LoadFile4DOM
    // # Parameter:
    // #
    // # Comment:
    // #    the method creates a hidden holder DIV element for the input-tags of the load file instance. The loader ID of the DIV element is stored in this.aOptions.id4loadfile
    // #
    // #################################################################

    // #################################################################
    // # public Method: open_dialog()  Class: LoadFile4DOM
    // # Parameter:
    // #    pID:
    // #      the parameter provides the ID of the FileLoader input tag in the DOM
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: set_defaults()  Class: LoadFile4DOM
    // # Parameter:
    // #    options:
    // #      the parameter provides ...
    // #     defaults:
    // #      the parameter provides ...
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: get_loader_options()  Class: LoadFile4DOM
    // # Parameter:
    // #    pID:
    // #      the parameter provides name for DOM input-file  for the loader
    // #    pFileType:
    // #      the parameter provides the type of loader e.g. text, image, file2image, audio, video, zip
    // #    pOptions:
    // #      the parameter provides additional options e.g. style options with width and height for an image
    // # Comment:
    // #    the method returns a hash for loader e.g. the command
    // #    var loader4txt = lf4d.get_loader_options("mytxtfile","text",loader_opts);
    // #    creates the following hash:
    // #        loader4txt={
    // #           "type": "text",
    // #            "id": "mytxtfile1t1545978644012",
    // #            "name": "mytxtfile",
    // #            "value": "Dialog mytxtfile",
    // #            "accept": "text/*",
    // #            "onload": "var4dom0t1545978644011.open_dialog('mytxtfile')",
    // #            "multiple": false
    // #        }
    // #    In loadfile4dom.js the call of create_load_dialog(loader_option) creates the loader.
    // #
    // #
    // #################################################################

    // #################################################################
    // # public Method: get_input_attributes()  Class: LoadFile4DOM
    // # Parameter:
    // #    pID:
    // #      the parameter provides ...
    // #    pFileType:
    // #      the parameter provides type of loader e.g. `text`, `image`, `zip`, ...
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: error_file_type()  Class: LoadFile4DOM
    // # Parameter:
    // #    pLoader:
    // #      the parameter provides ...
    // #    pFileToLoad:
    // #      the parameter provides ...
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: handle_text()  Class: LoadFile4DOM
    // # Parameter:
    // #    pLoader:
    // #      the parameter provides ...
    // #    pFileReader:
    // #      the parameter provides ...
    // #    pFileToLoad:
    // #      the parameter provides ...
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: handle_json()  Class: LoadFile4DOM
    // # Parameter:
    // #    pLoader:
    // #      the parameter provides ...
    // #    pFileReader:
    // #      the parameter provides ...
    // #    pFileToLoad:
    // #      the parameter provides ...
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: handle_image()  Class: LoadFile4DOM
    // # Parameter:
    // #    pLoader:
    // #      the parameter provides ...
    // #    pFileReader:
    // #      the parameter provides ...
    // #    pFileToLoad:
    // #      the parameter provides ...
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: handle_image_thumb()  Class: LoadFile4DOM
    // # Parameter:
    // #
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: handle_data()  Class: LoadFile4DOM
    // # Parameter:
    // #    pLoader:
    // #      the parameter provides ...
    // #    pFileReader:
    // #      the parameter provides ...
    // #    pFileToLoad:
    // #      the parameter provides ...
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: handle_audio()  Class: LoadFile4DOM
    // # Parameter:
    // #    pLoader:
    // #      the parameter provides ...
    // #    pFileReader:
    // #      the parameter provides ...
    // #    pFileToLoad:
    // #      the parameter provides ...
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: handle_video()  Class: LoadFile4DOM
    // # Parameter:
    // #    pLoader:
    // #      the parameter provides ...
    // #    pFileReader:
    // #      the parameter provides ...
    // #    pFileToLoad:
    // #      the parameter provides ...
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: handle_file_type()  Class: LoadFile4DOM
    // # Parameter:
    // #    pLoader:
    // #      the parameter provides ...
    // #    pFileReader:
    // #      the parameter provides ...
    // #    pFileToLoad:
    // #      the parameter provides ...
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: handle_single_file()  Class: LoadFile4DOM
    // # Parameter:
    // #    pLoader:
    // #      the parameter provides ...
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: handle_multiple_files()  Class: LoadFile4DOM
    // # Parameter:
    // #    pLoader:
    // #      the parameter provides ...
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: handle_file()  Class: LoadFile4DOM
    // # Parameter:
    // #    pID:
    // #      the parameter provides ...
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: log()  Class: LoadFile4DOM
    // # Parameter:
    // #    pMessage:
    // #      the parameter provides ...
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

    // #################################################################
    // # public Method: set_onload()  Class: LoadFile4DOM
    // # Parameter:
    // #
    // # Comment:
    // #    the method performs ...
    // #
    // #################################################################

};
//---------------------------------------------------------------------
//---END Constructor for Call  "new LoadFile4DOM()"
//---------------------------------------------------------------------

//#################################################################
//# public Method: init()  Class: LoadFile4DOM
//# Parameter:
//#    pDoc:
//#      the parameter contains a reference to the document object of the browser
//#    pOptions:
//#      the parameter stores options
//# Comment:
//#    the method performs the initialization of the instance of LoadFile4DOM. pOptions contains the ID for the LoadFile4DOM holder, it is in general a DIV element with the HTML-input-tags for uploading a files.
//#
//#################################################################

LoadFile4DOM.prototype.init = function (pDoc,pOptions) {
  // ----Debugging------------------------------------------
  //  console.log("loadfile4dom.js - Call: init(pDoc,pOptions)");
  //  alert("loadfile4dom.js - Call: init(pDoc,pOptions)");
  // ----Create Object/Instance of LoadFile4DOM and call init()----
  //     var vLoadFile4DOM = new LoadFile4DOM();
  //     vLoadFile4DOM.init(pDoc,pOptions);
  // -------------------------------------------------------
  console.log("CALL: init() with options="+JSON.stringify(pOptions,null,4));
  var vOptions = pOptions || {};
  //  save the reference "document" object
  this.aDoc = pDoc;
  //  store options provided as parameter in the init-method
  /*
  this.defaults = {
    "id4loadfile": "loadfile_div",
    "dom": null,
    "var4dom": "loadfile_div"+this.getTimeStamp()
  };
  */
  // console.log("vOptions="+JSON.stringify(vOptions,null,4));
  // set default options and store options as attribute
  this.aOptions = this.set_defaults(vOptions,this.defaults_options);
  console.log("this.aOptions="+JSON.stringify(this.aOptions,null,4));
  // Create var4dom that is unique in DOM for calling the instance
  var var4dom = "var4dom" + this.getTimeStamp();
  this.aLoadFileHolder.var4dom = var4dom;
  this.aDoc[var4dom] = this;
  // WARNING: do not set options.setonload = true - LoadFile4DOM does not create input-file-tags
  // setTimeout to assign "LoadFile4DOM.create()" to body onload event.
  /*
  var self = this;
  if (this.aOptions.setonload === true) {
    setTimeout(self.create,this.aOptions.timeout);
  }
  */

};
// ---- Method: init() Class: LoadFile4DOM ------

//#################################################################
//# public Method: getTimeStamp()  Class: LoadFile4DOM
//# Parameter:
//#
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.getTimeStamp = function () {
  // ----Debugging------------------------------------------
  //  console.log("loadfile4dom.js - Call: getTimeStamp()");
  //  alert("loadfile4dom.js - Call: getTimeStamp()");
  // ----Create Object/Instance of LoadFile4DOM and call getTimeStamp()----
  //     var vLoadFile4DOM = new LoadFile4DOM();
  //     vLoadFile4DOM.getTimeStamp();
  // -------------------------------------------------------
  //  create a time stamp with a number
  var now = new Date();
  var timestamp = this.aLoaderCount + 't' + now.getTime();
  this.aLoaderCount++;
  //  return the integer as time in milli seconds since January 1st, 1970 0:00am
  return timestamp;

};
// ---- Method: getTimeStamp() Class: LoadFile4DOM ------

//#################################################################
//# public Method: create_input_tags()  Class: LoadFile4DOM
//# Parameter:
//#
//# Comment:
//#    the method injects the input-files tags for the loaders in the DOM - the method is called by LoadFile4DOM.create() with body-onload attribute.
//#
//#################################################################

LoadFile4DOM.prototype.create_input_tags = function () {
  // ----Debugging------------------------------------------
  // console.log("loadfile4dom.js - Call: create()");
  //  alert("loadfile4dom.js - Call: create()");
  // ----Create Object/Instance of LoadFile4DOM and call create()----
  //     var vLoadFile4DOM = new LoadFile4DOM();
  //     vLoadFile4DOM.create(pLoaderID);
  // -------------------------------------------------------
  //  create a hidden DOM node and append the DOM node to this.aLoadFileHolder
  var fl = this.aFileLoader;
  var vLoadFileHolder = this.get_holder();
  for (var loadid in fl) {
    console.log("CALL: create_input_tags('"+ loadid +"')");
    if (fl.hasOwnProperty(loadid)) {
      console.log("CALL: create_input_tags('"+ loadid +"') exists");
      // append the created "input" tag to the holder
      if (vLoadFileHolder) {
          if (fl[loadid].dom) {
            console.log("CALL: create_input_tags('" + loadid + "') for DOM node for input-file tag with ID ['" + fl[loadid].id + "'] appended to DOM!");
            vLoadFileHolder.appendChild(fl[loadid].dom);
          } else {
            console.error("ERROR: DOM node for input-file tag with ID ['" + fl[loadid].id + "'] was not created with !");
          }
      } else {
        console.log("LoadFile4DOM.create_input_tags():  LoadFile4DOM holder does not exist - no append Loader Dialog ['" + loadid + "'] to holder possible");
      }
    }
  }

};
// ---- Method: create_input_tags() Class: LoadFile4DOM ------

//#################################################################
//# public Method: create()  Class: LoadFile4DOM
//# Parameter:
//#
//# Comment:
//#    the method creates a DOM node for the file in the `window.document` of the browser and  adds an object in `this.aFileLoader` the each constructed file loader with the appropriate ID.
//#
//#################################################################

LoadFile4DOM.prototype.create = function () {

  // ----Debugging------------------------------------------
  //  console.log("loadfile4dom.js - Call: create()");
  //  alert("loadfile4dom.js - Call: create()");
  // ----Create Object/Instance of LoadFile4DOM and call create()----
  //     var vLoadFile4DOM = new LoadFile4DOM();
  //     vLoadFile4DOM.create(pLoaderID);
  // -------------------------------------------------------
  //  create a hidden DOM node and append the DOM node to this.aLoadFileHolder
  if (this.aLoadFileHolder) {
    if (this.aLoadFileHolder.dom) {
      console.log("LoadFile4DOM.create()-Call: aLoadFileHolder.dom exists");
    } else {
      console.log("LoadFile4DOM.create()-Call: Create DIV node in DOM! this.aOptions.debug="+this.aOptions.debug);
      this.create_holder();
    }
  } else {
    console.log("CALL: LoadFile4DOM.create(): Create DIV node for LoadFile input-tagss: LoadFile4DOM.create_holder() because aLoadFileHolder is not defined!");
    this.create_holder();
  }
  this.create_input_tags();

};
// ---- Method: create() Class: LoadFile4DOM ------

//#################################################################
//# public Method: get_holder()  Class: LoadFile4DOM
//# Parameter:
//#
//# Comment:
//#    the method returns the LoadFile4DOM holder as DOM node. The id of the LoadFile4DOM holder is stored in this.aOptions.id4loadfile. The holder is an existing DIV node in the DOM (Document Object Model) or it will be created by the create_holder
//#
//#################################################################

LoadFile4DOM.prototype.get_holder = function () {

  var vHolder = null;
  if (this.aLoadFileHolder.hasOwnProperty("dom")) {
    vHolder = this.aLoadFileHolder.dom;
    if (vHolder) {
      console.log("CALL: get_holder(): aLoadFileHolder.dom exists with ID=["+this.aLoadFileHolder.id+"]");
    } else {var vID = this.aOptions.id4loadfile;
    //  vLoadFileHolder refers to hidden DIV-node that is used for adding the LoadFile instances.
      vHolder = this.aDoc.getElementById(vID);
      if (vHolder) {
        console.log("CALL: get_holder(): DOM node for Holder with aLoadFileHolder.id exists with ID=["+this.aLoadFileHolder.ide+"] ");
      } else {
        console.log("CALL: get_holder(): DOM node for Holder with aLoadFileHolder.id does not exist with ID=["+this.aLoadFileHolder.ide+"] - Holder generation failed by LoadFile4DOM.create_holder()");
        vHolder = null;
      }
    }
  }
  return vHolder;

};
// ---- Method: get_holder() Class: LoadFile4DOM ------

//#################################################################
//# public Method: create_load_dialog()  Class: LoadFile4DOM
//# Parameter:
//#    pOptions:
//#      the parameter provides ...
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.create_load_dialog = function (pOptions) {
  // ----Debugging------------------------------------------
  //  alert("loadfile4dom.js - Call: create_load_dialog(pID)");
  // ----Create Object/Instance of LoadFile4DOM and call create_load_dialog()----
  //     var vLoadFile4DOM = new LoadFile4DOM();
  //     vLoadFile4DOM.create_load_dialog(pID);
  // -------------------------------------------------------
  //  create a node <input type="file" id="myloaderid" name="myloader" value="Dialog myloaderid" onchange="vJSONEditor.loadJSON(this.id)"/>
  var vID = pOptions.name; // use pOptions.name as ID because it has no time stamp at the end.
  console.log("loadfile4dom.js - Call: create_load_dialog('"+vID+"')"+"\nOptions="+JSON.stringify(pOptions,null,4));
  var doc = this.aDoc;
  // create the file-input element
  var vInput = doc.createElement("input");
  //
  var vAttDef = (pOptions || this.get_input_attributes(vID));
  // if multiple files can be loaded then the "name" attribute needs array brackets for multiple files
  if (vAttDef.multiple === true) {
    vAttDef.name += "[]";
  }
  // now add all attributes to the created "input" tag.
  var a = null;
  for (var key in vAttDef) {
    if ((key != "multiple") && (key != "onload")) {
      if (vAttDef.hasOwnProperty(key)) {
            console.log("create_load_dialog() ['"+vID+"']." + key +  "="+vAttDef[key]);
            a = doc.createAttribute(key);
            a.nodeValue = vAttDef[key];
            vInput.setAttributeNode(a);
      }
    }
  }
  // if we allow multiple file select, add the attribute "multiple" to the input tag
  if (vAttDef.multiple === true) {
    a = doc.createAttribute('multiple');
    a.nodeValue = "multiple";
    vInput.setAttributeNode(a);
  }
  var vNewLoader = {
    "dom": vInput, //  the element of the <input ...> tag in DOM (Document Object Model)
    "onload": pOptions.onload
  };
  vNewLoader = this.set_defaults(vNewLoader,vAttDef);
  console.log('vNewLoader=' + JSON.stringify(vNewLoader,null,4));

  this.aFileLoader[vID] = vNewLoader;
  //console.log('DOM vAttDef:\n' + JSON.stringify(vAttDef,null,4));
  //console.log('DOM vInput:\n' + vInput.outerHTML);


};
// ---- Method: create_load_dialog() Class: LoadFile4DOM ------

//#################################################################
//# public Method: create_holder()  Class: LoadFile4DOM
//# Parameter:
//#
//# Comment:
//#    the method creates a hidden holder DIV element for the input-tags of the load file instance. The loader ID of the DIV element is stored in this.aOptions.id4loadfile
//#
//#################################################################

LoadFile4DOM.prototype.create_holder = function () {
  // ----Debugging------------------------------------------
  //  console.log("loadfile4dom.js - Call: create_holder()");
  //  alert("loadfile4dom.js - Call: create_holder()");
  // ----Create Object/Instance of LoadFile4DOM and call create_holder()----
  //     var vLoadFile4DOM = new LoadFile4DOM();
  //     vLoadFile4DOM.create_holder();
  // -------------------------------------------------------
  //  this.aOptions.id4loadfile contains the ID of the DIV tag of the LoadFile holder.
  //  get the LoadFile holder ID from Options that was defined in the init()-method
  var vHolderID = this.aLoadFileHolder.id || "holder4loadfile";
  this.aLoadFileHolder.dom =  null;
  //this.aLoadFileHolder.var4dom = "onload4inputfile" + this.getTimeStamp();
  var doc = this.aDoc;
  var vBody = doc.getElementsByTagName("body")[0];
  if (vBody) {
    console.log("CALL: create_holder() document.body exists!");
  } else {
    console.log("WARNING: create_holder() document.body does not exist!");
  }
  if (this.aOptions.hasOwnProperty("id4loadfile")) {
      console.log("Options contain a holder ID ["+this.aOptions.id4loadfile+"]");
      vHolderID = this.aOptions.id4loadfile;
  } else {
    // appending a time stamp make the id unique, e.g. 'holder4loadfile'
    // so that it is not in conflict with existing ids in the HTML DOM tree
    vHolderID += this.getTimeStamp();
    console.log("Use default holder name of DIV tag ["+vHolderID+"]");
  }
  // check if DIV element for holder exists
  this.aLoadFileHolder.id = vHolderID;
  this.aLoadFileHolder.dom = doc.getElementById(vHolderID);
  if (this.aLoadFileHolder.dom) {
    console.log("Load Dialog holder DIV tag with ID=["+vHolderID+"] exists");
  } else {
    var lf_holder = doc.createElement('div');
    //  create the "id" attribute
    var att = doc.createAttribute("id");
    //  create a unique ID for the DIV element
    att.nodeValue = vHolderID;
    //  append the DIV holder with the id id4loadfile
    lf_holder.setAttributeNode(att);
    // add "var4dom" variable to DIV tag
    var attvar4dom = doc.createAttribute("var4dom");
    attvar4dom.nodeValue = this.aLoadFileHolder.var4dom;
    lf_holder.setAttributeNode(attvar4dom);
    //--- Hide Holder ---
    if (this.aOptions.debug === false) {
      // Hide Holder "style="display:none" if aOptions.debug=false
      var atthide = doc.createAttribute("style");
      atthide.nodeValue = "display:none";
      lf_holder.setAttributeNode(atthide);
    } else {
      console.log("CALL create_holder(): Holder and input-file tags are visible browser");
    }
    // --- Append Holder to body in DOM ---
    // DOM Node create: <div id="id4loadfile872934878924"></div>
    //  append the LoadFileHolder at the document.body
    vBody.appendChild(lf_holder);
    // store reference to holder node
    this.aLoadFileHolder.dom = lf_holder;
    console.log("CALL create_holder(): LoadFile holder created as DIV element with ID=["+vHolderID+"]");
    //setTimeout(this)
  };
  return this.aLoadFileHolder.dom;

};
// ---- Method: create_holder() Class: LoadFile4DOM ------

//#################################################################
//# public Method: open_dialog()  Class: LoadFile4DOM
//# Parameter:
//#    pID:
//#      the parameter provides the ID of the FileLoader input tag in the DOM
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.open_dialog = function (pID) {
  // ----Debugging------------------------------------------
  //  console.log("loadfile4dom.js - Call: open_dialog(pID)");
  //  alert("loadfile4dom.js - Call: open_dialog(pID)");
  // ----Create Object/Instance of LoadFile4DOM and call open_dialog()----
  //     var vLoadFile4DOM = new LoadFile4DOM();
  //     vLoadFile4DOM.open_dialog(pID);
  // -------------------------------------------------------
  //  get DOM id of the upload <input ...> tag with pID in this.aFileHolder
  var fl = this.aFileLoader;
  if (fl.hasOwnProperty(pID)) {
      console.log("CLICK: File Loader with ID=["+pID+"] will open the file dialog of browser");
      var vLoaderDOM = fl[pID].dom;
      //  trigger a onclick event in the hidden Upload Button of the browser to open Load Dialog
      vLoaderDOM.click();
  } else {
      console.error("ERROR: File Loader with ID=["+pID+"] is not defined");
  }
};
// ---- Method: open_dialog() Class: LoadFile4DOM ------

//#################################################################
//# public Method: set_defaults()  Class: LoadFile4DOM
//# Parameter:
//#    options:
//#      the parameter provides ...
//#     defaults:
//#      the parameter provides ...
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.set_defaults = function (options, defaults) {

  var obj = {};
  defaults = defaults || {};
  for (var d in defaults) {
    if (defaults.hasOwnProperty(d)) {
      obj[d] = defaults[d];
    }
  }
  for (var k in options) {
    if (options.hasOwnProperty(k)) {
      obj[k] = options[k];
    }
  }
  return obj;

};
// ---- Method: set_defaults() Class: LoadFile4DOM ------

//#################################################################
//# public Method: overwrite_options()  Class: LoadFile4DOM
//# Parameter:
//#    options:
//#      the parameter provides ...
//#     overwrite_opts:
//#      the parameter provides ...
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.overwrite_options = function (options, overwrite_opts) {

  var obj = {};
  for (var k in options) {
    if (options.hasOwnProperty(k)) {
      obj[k] = options[k];
    }
  }
  for (var d in overwrite_opts) {
    if (overwrite_opts.hasOwnProperty(d)) {
      obj[d] = overwrite_opts[d];
    }
  }
  return obj;

};
// ---- Method: overwrite_options() Class: LoadFile4DOM ------

//#################################################################
//# public Method: get_loader_options()  Class: LoadFile4DOM
//# Parameter:
//#    pID:
//#      the parameter provides name for DOM input-file  for the loader
//#    pFileType:
//#      the parameter provides the type of loader e.g. text, image, image_thumb, audio, video, zip
//#    pOptions:
//#      the parameter provides additional options e.g. style options with width and height for an image
//# Comment:
//#    the method returns a hash for loader e.g. the command
//#    var loader4txt = lf4d.get_loader_options("mytxtfile","text",loader_opts);
//#    creates the following hash:
//#        loader4txt={
//#           "type": "text",
//#            "id": "mytxtfile1t1545978644012",
//#            "name": "mytxtfile",
//#            "value": "Dialog mytxtfile",
//#            "accept": "text/*",
//#            "onload": "var4dom0t1545978644011.open_dialog('mytxtfile')",
//#            "multiple": false
//#        }
//#    In loadfile4dom.js the call of create_load_dialog(loader_option) creates the loader.
//#
//#
//#################################################################

LoadFile4DOM.prototype.get_loader_options = function (pID,pFileType,pOptions) {
  var vUniqueID = pID + this.getTimeStamp(); //  has to be uniqued in the DOM
  var vFileType = pFileType || this.defaults_loader.filetype;
  var vOptions = {
    "type": "file",
    "filetype": vFileType,
    "id":vUniqueID,
    "name": pID,
    "value": "Dialog "+pID,
    "accept": this.type2accept[vFileType],
    "returntype": this.type2returntype[vFileType],
    //"onload":"console.log('open dialog click '"+pID+"')",
    "onchange": this.aLoadFileHolder.var4dom + ".handle_file('"+pID+"')",
  };
  // set defaults in options if not set by vOptions
  vOptions = this.set_defaults(vOptions,this.defaults_loader);
  vOptions = this.overwrite_options(vOptions,pOptions);
  // return the genrated options
  return vOptions;

};
// ---- Method: get_loader_options() Class: LoadFile4DOM ------



//#################################################################
//# public Method: get_input_attributes()  Class: LoadFile4DOM
//# Parameter:
//#    pID:
//#      the parameter provides ...
//#    pFileType:
//#      the parameter provides type of loader e.g. `text`, `image`, `zip`, ...
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.get_input_attributes = function (pID,pFileType) {

  console.log("get_input_attributes('"+pID+"')");
  var vUniqueID = pID + this.getTimeStamp(); //  has to be uniqued in the DOM
  var vLoader = null;
  var vFileType = pFileType || "all";
  // the following hash contains all the input attributes
  if (this.aFileLoader.hasOwnProperty(pID)) {
    vLoader = this.aFileLoader[pID];
  } else {
    console.error("CALL: get_input_attributes() - this.aFileLoader['" + pID + "'] does not exist! File handler does not exist");
  }
  var vAtts = {
    "type": "file",
    "filetype": vFileType,
    "id":vUniqueID,
    "name": pID,
    "value": "Dialog "+pID,
    "accept": this.type2accept[vType],
    "returntype": this.type2returntype[vFileType],
    "onchange": this.aLoadFileHolder.var4dom + ".handle_file('"+pID+"')",
    "multiple": this.defaults_loader.multiple
  };
  return vAtts;
};
// ---- Method: get_input_attributes() Class: LoadFile4DOM ------

//#################################################################
//# public Method: error_file_type()  Class: LoadFile4DOM
//# Parameter:
//#    pLoader:
//#      the parameter provides ...
//#    pFileToLoad:
//#      the parameter provides ...
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.error_file_type = function (pLoader,pFileToLoad) {

  console.log("handle_"+pLoader.filetype+"() LoaderID='"+pLoader.id+"' FileType='"+pLoader.filetype+"' FileName='" + ((pFileToLoad.name) || "?") + "'");
  var mime_type = this.type2accept[pLoader.filetype] || "*";
      var vErrMsg = "";
      var vSep = "";
      //--- Check MIME Type ----------
      if (mime_type === "*") {
        console.log("All MIME-types allowed by loader ['" + pLoader.id + "'] - Filetype='" + pLoader.filetype + "' MIME-Type of File='" + pFileToLoad.type + "'");
      } else {
        //--- Check if MIME Type matches with file type -----
        if (!pFileToLoad.type.match(mime_type)) {
          // early escape function if file type is not an image
          vErrMsg += vSep + "File Type '" + pFileToLoad.type + "' does not match with the mime '" + mime_type + "'";
          vSep = "\n";
        }
      }
      //--- Check if file extension matches with extension of loaded file
      var fn = pFileToLoad.name;
      var ext = "";
      if (pLoader.hasOwnProperty("file_extension")) {
        ext = pLoader.file_extension;
        var found = fn.indexOf(ext);
        // myfile.txt - fn.length=10 - found=6 for file_extension='.txt'
        if ((found > 0) &&  (fn.length - ext.length - 1 >= found)) {
          console.log("Filename '" + fn + "' has extension '" + ext + "'!'");
        } else {
          vErrMsg += vSep + "The filename '" + fn + "' does not have the extension '" + ext + "'";
          vSep = "\n";
        }
      }
      if (vErrMsg === "") {
        vErrMsg = null;
      } else {
        console.error(vErrMsg);
        // ERROR:  send error to onload handler,
        // i.e. call the onload() function with an Error Message
        pLoader.onload(pFileToLoad,vErrMsg);
      }
      return vErrMsg;

};
// ---- Method: error_file_type() Class: LoadFile4DOM ------

LoadFile4DOM.prototype.data_url2base64 = function (uri) {
  console.log("CALL: data_url2base64(uri) uri='" +uri.substr(0,20)+ "...'");
  var idx = uri.indexOf('base64,') + 'base64,'.length; // or = 28 if you're sure about the prefix
  var content = uri.substring(idx);
  // use e.g. for zip file
  // zip.file('a.pdf', content, {base64: true});
  return content;
};

LoadFile4DOM.prototype.handle_return_type = function (pLoader,pFile,pFileToLoad) {
  console.log("handle_return_type('" + pFileToLoad.name + "')");
  if (!pFile) {
    console.error("ERROR: no File provided to handle_return_type(...,pFile,...) in pFile");
  } else {
    // send the file vFile to the defined file handler of the FileLoader
    if (pLoader.hasOwnProperty("returntype"))  {
      console.log("handle_return_type('" + pFileToLoad.name + "') returntype='" + pLoader.returntype + "'");
      switch (pLoader.returntype) {
        case "filehash":
          pLoader.onload({
            "name": pFileToLoad.name,
            "file": pFile,
            "mime_type": pFileToLoad.type
          });
        break;
        case "file":
          pLoader.onload(pFile);
        break;
        default:
          pLoader.onload(pFile);
      }
    } else {
      console.log("handle_return_type('" + pFileToLoad.name + "') undefined returntype - use 'filehash' as return type");
      pLoader.onload({
        "name": pFileToLoad.name,
        "file": pFile,
        "mime_type": pFileToLoad.type
      });
    }
  }
};


//#################################################################
//# public Method: handle_text()  Class: LoadFile4DOM
//# Parameter:
//#    pLoader:
//#      the parameter provides ...
//#    pFileReader:
//#      the parameter provides ...
//#    pFileToLoad:
//#      the parameter provides ...
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.handle_text = function (pLoader,pFileReader,pFileToLoad) {
  var vThis = this; // map "this" to "vThis" for callback inside pFileReader
  if (!this.error_file_type(pLoader,pFileToLoad)) {
    pFileReader.onload = function(fileLoadedEvent){
      // handle file onload event of the FileReader instance
      var vFile = fileLoadedEvent.target.result;
      // check if the user wants to have just the file
      // or a filehash with more information about the file e.g. mime_type
      vThis.handle_return_type(pLoader,vFile,pFileToLoad);
    };
    var vEncoding = "UTF-8";
    if (pLoader.hasOwnProperty("encoding")) {
      vEncoding = pLoader.encoding;
    }
    pFileReader.readAsText(pFileToLoad, vEncoding);
  }

};
// ---- Method: handle_text() Class: LoadFile4DOM ------

//#################################################################
//# public Method: handle_json()  Class: LoadFile4DOM
//# Parameter:
//#    pLoader:
//#      the parameter provides ...
//#    pFileReader:
//#      the parameter provides ...
//#    pFileToLoad:
//#      the parameter provides ...
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.handle_json = function (pLoader,pFileReader,pFileToLoad) {
  var vThis = this; // map "this" to "vThis" for callback inside pFileReader
  if (pLoader) {
      console.log("CALL: handle_json('" + pLoader.id + "','" + pLoader.filetype + "')");
      if (!this.error_file_type(pLoader,pFileToLoad)) {
        pFileReader.onload = function(fileLoadedEvent){
          var vFile = fileLoadedEvent.target.result;
          // send the file vFile to the defined file handler of the FileLoader
          var vJSON = null;
          // Parse JSON and check if syntax is valid.
          // console.log("handle_json() Loaded File:\n"+vFile);
          try {
              vFile = vFile + "";
              vJSON = JSON.parse(vFile);
          } catch (err) {
              vJSON = null; // Init with an empty class
              console.error("ERROR: onload handler with errors - "+err); // error in the above string (in this case, yes)!
              // call onload handler with a ppopulated error err,
              pLoader.onload(vJSON,err);
              return; // early exit function
          }
          // check if the user wants to have just the file
          // or a filehash with more information about the file e.g. mime_type
          vThis.handle_return_type(pLoader,vFile,pFileToLoad);
        };
        var vEncoding = "UTF-8";
        if (pLoader.hasOwnProperty("encoding")) {
          vEncoding = pLoader.encoding;
        }
        pFileReader.readAsText(pFileToLoad, vEncoding);
      }
    } else {
      console.error("CALL: handle_json() pLoader does not exist!");
    }
};
// ---- Method: handle_json() Class: LoadFile4DOM ------

//#################################################################
//# public Method: handle_image()  Class: LoadFile4DOM
//# Parameter:
//#    pLoader:
//#      the parameter provides ...
//#    pFileReader:
//#      the parameter provides ...
//#    pFileToLoad:
//#      the parameter provides ...
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.handle_image = function (pLoader,pFileReader,pFileToLoad) {
  var vThis = this; // map "this" to "vThis" for callback inside pFileReader
  if (!this.error_file_type(pLoader,pFileToLoad)) {
    pFileReader.onload = function(event){
      if (pLoader.hasOwnProperty("returntype")) {
        // handle the return types
        switch (pLoader.returntype) {
          case "img":
            var img = new Image();
            img.onload = function(){
              var vWidth = parseInt(img.width);
              var vHeight = parseInt(img.height);
              var vScale = 1.0;
              // proportional scale
              if (pLoader.hasOwnProperty("width")) {
                vWidth = parseInt(pLoader.width);
                vScale = parseInt(pLoader.width)/parseInt(img.width);
                vHeight = parseInt(parseInt(img.height) * vScale);
              }
              if (pLoader.hasOwnProperty("height")) {
                vHeight = parseInt(pLoader.height);
                vScale = parseInt(pLoader.height)/parseInt(img.height);
                vWidth = parseInt(parseInt(img.width) * vScale);
              }
              canvas.width = vWidth;
              canvas.height = vHeight;
              ctx.drawImage(img,0,0);
            };
            img.src = event.target.result;
            // send the image file "img" to the defined file handler of the FileLoader
            var data = {
              "name": pFileToLoad.name,
              "file": vThis.data_url2base64(event.target.result),
              "mime_type": pFileToLoad.type,
              "img": img
            };
            pLoader.onload(data);
          break;
          default:
            // handle other default return types
            var vFile = vThis.data_url2base64(event.target.result);
            vThis.handle_return_type(pLoader,vFile,pFileToLoad);
        }
      } else {
        // without "returntype" return the file
        pLoader.onload(event.target.result);
      }
    };
    pFileReader.readAsDataURL(pFileToLoad);
  }

};
// ---- Method: handle_image() Class: LoadFile4DOM ------

//#################################################################
//# public Method: handle_image_thumb()  Class: LoadFile4DOM
//# Parameter:
//#
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.handle_image_thumb = function (pLoader,pFileReader,pFileToLoad) {

  var vThis = this; // map "this" to "vThis" for callback inside pFileReader
  if (!this.error_file_type(pLoader,pFileToLoad)) {
    pFileReader.onload = function(event){
      if (pLoader.hasOwnProperty("returntype")) {
        // handle the return types
        var width_missing = false;
        var height_missing = false;
        switch (pLoader.returntype) {
          case "tag":
            var html = '<img class="thumb" ';
            if (pLoader.hasOwnProperty("width")) {
                html += 'width="' + pLoader.width +'" ';
            } else {
              width_missing = true;
            }
            if (pLoader.hasOwnProperty("height")) {
                html += 'height="' + pLoader.height +'" ';
            } else {
              height_missing = true;
            }
            if (width_missing && height_missing) {
              html += 'width="' + vThis.aOptions.width4thumb +'" ';
            }
            var vFilename = pFileToLoad.name;
            vFilename = vFilename.replace(/[^A-Za-z0-9 _\-\.]/g,"_");
            html += 'src="' + event.target.result +'" ';
            html += 'title="' + vFilename + '"/>';
            // send the image file "img" to the defined file handler of the FileLoader
            var data = {
              "name": pFileToLoad.name,
              "file": vThis.data_url2base64(event.target.result),
              "mime_type": pFileToLoad.type,
              "tag": html
            };
            pLoader.onload(data);
          break;
          default:
            // handle other default return types
            var vFile = vThis.data_url2base64(event.target.result);
            vThis.handle_return_type(pLoader,vFile,pFileToLoad);
        }
      } else {
        // without "returntype" return just the file
        pLoader.onload(event.target.result);
      }
    };
    pFileReader.readAsDataURL(pFileToLoad);
  }

};
// ---- Method: handle_image_thumb() Class: LoadFile4DOM ------

//#################################################################
//# public Method: handle_data()  Class: LoadFile4DOM
//# Parameter:
//#    pLoader:
//#      the parameter provides ...
//#    pFileReader:
//#      the parameter provides ...
//#    pFileToLoad:
//#      the parameter provides ...
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.handle_data = function (pLoader,pFileReader,pFileToLoad) {

  var vThis = this; // map "this" to "vThis" for callback inside pFileReader
  // check if file type has no error according to MIME type and extension
  if (!this.error_file_type(pLoader,pFileToLoad)) {
          pFileReader.onload = function(fileLoadedEvent){
            // handle file onload event of the FileReader instance
            var vFile = fileLoadedEvent.target.result;
            // check if the user wants to have just the file
            // or a filehash with more information about the file e.g. mime_type
            // remove mime type from data URL e.g. "data:application/pdf;base64, ..."
            vFile = vThis.data_url2base64(vFile);
            vThis.handle_return_type(pLoader,vFile,pFileToLoad);
          };
          pFileReader.readAsDataURL(pFileToLoad);
          //pFileReader.readAsBinaryString(pFileToLoad);
  }

};
// ---- Method: handle_data() Class: LoadFile4DOM ------

//#################################################################
//# public Method: handle_audio()  Class: LoadFile4DOM
//# Parameter:
//#    pLoader:
//#      the parameter provides ...
//#    pFileReader:
//#      the parameter provides ...
//#    pFileToLoad:
//#      the parameter provides ...
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.handle_audio = function (pLoader,pFileReader,pFileToLoad) {

  var vThis = this; // map "this" to "vThis" for callback inside pFileReader
  if (!this.error_file_type(pLoader,pFileToLoad)) {
          pFileReader.onload = function(fileLoadedEvent){
            // handle file onload event of the FileReader instance
            var vFile = fileLoadedEvent.target.result;
            // check if the user wants to have just the file
            // or a filehash with more information about the file e.g. mime_type
            vFile = vThis.data_url2base64(vFile);
            // removed mime type from data URL e.g. "data:application/pdf;base64, ..."
            vThis.handle_return_type(pLoader,vFile,pFileToLoad);
          };
          pFileReader.readAsDataURL(pFileToLoad);
  }

};
// ---- Method: handle_audio() Class: LoadFile4DOM ------

//#################################################################
//# public Method: handle_video()  Class: LoadFile4DOM
//# Parameter:
//#    pLoader:
//#      the parameter provides ...
//#    pFileReader:
//#      the parameter provides ...
//#    pFileToLoad:
//#      the parameter provides ...
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.handle_video = function (pLoader,pFileReader,pFileToLoad) {

  var vThis = this; // map "this" to "vThis" for callback inside pFileReader
  if (!this.error_file_type(pLoader,pFileToLoad)) {
          pFileReader.onload = function(fileLoadedEvent){
            // handle file onload event of the FileReader instance
            var vFile = fileLoadedEvent.target.result;
            // check if the user wants to have just the file
            // or a filehash with more information about the file e.g. mime_type
            vFile = vThis.data_url2base64(vFile);
            // removed mime type from data URL e.g. "data:application/pdf;base64, ..."
            vThis.handle_return_type(pLoader,vFile,pFileToLoad);
          };
          pFileReader.readAsDataURL(pFileToLoad);
  }

};
// ---- Method: handle_video() Class: LoadFile4DOM ------

//#################################################################
//# public Method: handle_file_type()  Class: LoadFile4DOM
//# Parameter:
//#    pLoader:
//#      the parameter provides ...
//#    pFileReader:
//#      the parameter provides ...
//#    pFileToLoad:
//#      the parameter provides ...
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.handle_file_type = function (pLoader,pFileReader,pFileToLoad) {

  console.log("CALL: handle_file_type('" + pLoader.id + "','" + pLoader.filetype + "')");
  switch (pLoader.filetype) {
    case "text":
      this.handle_text(pLoader,pFileReader,pFileToLoad);
    break;
    case "json":
      this.handle_json(pLoader,pFileReader,pFileToLoad);
    break;
    case "image":
      this.handle_image(pLoader,pFileReader,pFileToLoad);
    break;
    case "image_thumb":
      this.handle_image_thumb(pLoader,pFileReader,pFileToLoad);
    break;
    case "audio":
      this.handle_audio(pLoader,pFileReader,pFileToLoad);
    break;
    case "video":
      this.handle_audio(pLoader,pFileReader,pFileToLoad);
    break;
    case "zip":
      this.handle_zip(pLoader,pFileReader,pFileToLoad);
    break;
    default:
      if (this.hasOwnProperty("handle_"+pLoader.filetype)) {
        this["handle_"+pLoader.filetype](pLoader,pFileReader,pFileToLoad);
      } else {
        this.handle_data(pLoader,pFileReader,pFileToLoad);
      }
  }

};
// ---- Method: handle_file_type() Class: LoadFile4DOM ------

//#################################################################
//# public Method: handle_single_file()  Class: LoadFile4DOM
//# Parameter:
//#    pLoader:
//#      the parameter provides ...
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.handle_single_file = function (pLoader) {

  console.log("CALL: handle_single_file('"+pLoader.id+"')");
  if (pLoader.dom.files) {
    var fileToLoad = pLoader.dom.files[0]; //for input type=file
    console.log("CALL: handle_single_file('"+fileToLoad.name+"') - pLoader.dom.files exist");
    if (fileToLoad) {
      console.log("handle_single_file('"+fileToLoad.name+"') loaded.");
      var fileReader = new FileReader();
      // set the onload handler
      this.handle_file_type(pLoader,fileReader,fileToLoad);
    } else {
      console.error("ERROR: fileToLoad does not exist!");
    }
  } else {
    console.error("ERROR: pLoader.dom.files does not exist!");
  }

};
// ---- Method: handle_single_file() Class: LoadFile4DOM ------

//#################################################################
//# public Method: handle_multiple_files()  Class: LoadFile4DOM
//# Parameter:
//#    pLoader:
//#      the parameter provides ...
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.handle_multiple_files = function (pLoader) {

  console.log("CALL: handle_multiple_files('"+pLoader.id+"')");
  if (pLoader.dom.files) {
    console.log("CALL: handle_multiple_files('"+pLoader.id+"') - pLoader.dom.files exist with "+(pLoader.dom.files.length)+" files!");
    //for (var i = 0, f; f = pLoader.dom.files[i]; i++) {
    for (var i = 0; i < pLoader.dom.files.length; i++) {
      var fileToLoad = pLoader.dom.files[i]; //for input type=file
      if (fileToLoad) {
        console.log("handle_multiple_file('"+fileToLoad.name+"') loaded.");
        var fileReader = new FileReader();
        // set the onload handler
        this.handle_file_type(pLoader,fileReader,fileToLoad);
      } else {
        console.error("ERROR: fileToLoad does not exist!");
      }
    }
  } else {
    console.error("ERROR: pLoader.dom.files does not exist!");
  }

};
// ---- Method: handle_multiple_files() Class: LoadFile4DOM ------

//#################################################################
//# public Method: handle_file()  Class: LoadFile4DOM
//# Parameter:
//#    pID:
//#      the parameter provides ...
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.handle_file = function (pID) {

  //console.log(this.aFileHolder.var4dom + ".handle_file('" + pID + "')");
  console.log("handle_file() - FileHandler executed for Loader ['" + pID + "']");
  if (this.aFileLoader.hasOwnProperty(pID)) {
    var vLoader = this.aFileLoader[pID];
    console.log("handle_file() - Loader['" + pID + "'] with options=" + JSON.stringify(vLoader,null,4));

    if (vLoader.dom) {
      console.log("handle_file() - DOM Node with ID='" + pID + "' exists in vLoader.dom");
    } else {
      console.log("handle_file() - get DOM Node for ID='" + pID + "' with document.getElementById('"+pID+"')");
      var vNode = this.aDoc.getElementById(vLoader.id);
      console.log("handle_file() - get DOM Node for Loader '" + pID + "' with document.getElementById('"+vLoader.id+"')");
      if (vNode) {
        console.log("handle_file() - Loader Node with ID='"+vLoader.id+"' exists. Update FileLoader['" + pID + "'].dom with vNode");
        this.aFileLoader[pID].dom = vNode;
      } else {
        //--- ERROR ----
        console.error("DOM node for loader does not exist - load operation cancelled");
        return ; // early exist of handle_file() call.
      }
    }
    if (vLoader.multiple === true) {
      console.log("handle_file() - Loading multiple files is allowed - apply handle_file('" + pID + "') to all files");
      this.handle_multiple_files(vLoader);
    } else {
      console.log("handle_file() - Loading single file and apply handle_file('" + pID + "') to file");
      this.handle_single_file(vLoader);
    }
  } else {
    console.error("ERROR: Loader ['"+pID+"'] does not exist in this.aFileLoader");
  }
};
// ---- Method: handle_file() Class: LoadFile4DOM ------

//#################################################################
//# public Method: log()  Class: LoadFile4DOM
//# Parameter:
//#    pMessage:
//#      the parameter provides ...
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.log = function (pMessage) {



        //console.log("debug="+this.aOptions.debug);
        if (this.aOptions.debug === true) {
          console.log(pMessage);
        }

};
// ---- Method: log() Class: LoadFile4DOM ------

//#################################################################
//# public Method: set_onload()  Class: LoadFile4DOM
//# Parameter:
//#
//# Comment:
//#    the method performs ...
//#
//#################################################################

LoadFile4DOM.prototype.set_onload = function () {
  // Do not use if you import <script src="loadfile4dom.js"> before <body> tag exists in DOM
  var self = this;
  var vBody = document.getElementsByTagName("body")[0];

  vBody.addEventListener("load", self.create(), false);

  console.log("LoadFile4DOM.create() call assigned to onload-handler of body-tag");

};
// ---- Method: set_onload() Class: LoadFile4DOM ------

// LoadFile4DOM = LoadFile4DOM;
/* ---------------------------------------
 Exported Module Variable: Handlebars4Code
 Package:  handlebars4code
 Version:  1.1.1  Date: 2018/12/12 8:18:43
 Homepage: https://github.com/niebert/Handlebars4Code#readme
 Author:   Engelbert Niehaus
 License:  MIT
 Date:     2018/12/12 8:18:43
 Inheritance: 'Handlebars4Code' inherits from 'Handlebars'
 Require Module with:
    const Handlebars4Code = require('handlebars4code');
    var  compileCode = Handlebars4Code.compile(vTemplate);
 JSHint: installation with 'npm install jshint -g'
 ------------------------------------------ */

/*jshint  laxcomma: true, asi: true, maxerr: 150 */
/*global alert, confirm, console, prompt */
// require the Handlebars module from NPM
// const Handlebars = require('handlebars');
/**!

 @license
 handlebars v4.0.11

Copyright (C) 2011-2017 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsRuntime = __webpack_require__(2);

	var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

	// Compiler imports

	var _handlebarsCompilerAst = __webpack_require__(35);

	var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

	var _handlebarsCompilerBase = __webpack_require__(36);

	var _handlebarsCompilerCompiler = __webpack_require__(41);

	var _handlebarsCompilerJavascriptCompiler = __webpack_require__(42);

	var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

	var _handlebarsCompilerVisitor = __webpack_require__(39);

	var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

	var _handlebarsNoConflict = __webpack_require__(34);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	var _create = _handlebarsRuntime2['default'].create;
	function create() {
	  var hb = _create();

	  hb.compile = function (input, options) {
	    return _handlebarsCompilerCompiler.compile(input, options, hb);
	  };
	  hb.precompile = function (input, options) {
	    return _handlebarsCompilerCompiler.precompile(input, options, hb);
	  };

	  hb.AST = _handlebarsCompilerAst2['default'];
	  hb.Compiler = _handlebarsCompilerCompiler.Compiler;
	  hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
	  hb.Parser = _handlebarsCompilerBase.parser;
	  hb.parse = _handlebarsCompilerBase.parse;

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst.Visitor = _handlebarsCompilerVisitor2['default'];

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(4);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(21);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(6);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(22);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(34);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(10);

	var _decorators = __webpack_require__(18);

	var _logger = __webpack_require__(20);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.0.11';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$defineProperty = __webpack_require__(7)['default'];

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  try {
	    if (loc) {
	      this.lineNumber = line;

	      // Work around issue under safari where we can't directly set the column value
	      /* istanbul ignore next */
	      if (_Object$defineProperty) {
	        Object.defineProperty(this, 'column', {
	          value: column,
	          enumerable: true
	        });
	      } else {
	        this.column = column;
	      }
	    }
	  } catch (nop) {
	    /* Ignore if the browser is very particular */
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;

	var _helpersBlockHelperMissing = __webpack_require__(11);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(12);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(13);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(14);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(15);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(16);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(17);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(19);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$seal = __webpack_require__(23)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(4);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },
	    // An empty object to use as replacement for null-contexts
	    nullContext: _Object$seal({}),

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  // Use the current closure context to save the partial-block if this partial
	  var currentPartialBlock = options.data && options.data['partial-block'];
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    (function () {
	      options.data = _base.createFrame(options.data);
	      // Wrapper function to get access to currentPartialBlock from the closure
	      var fn = options.fn;
	      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
	        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        // Restore the partial-block from the closure for the execution of the block
	        // i.e. the part inside the block of the partial call.
	        options.data = _base.createFrame(options.data);
	        options.data['partial-block'] = currentPartialBlock;
	        return fn(context, options);
	      };
	      if (fn.partials) {
	        options.partials = Utils.extend({}, options.partials, fn.partials);
	      }
	    })();
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	module.exports = __webpack_require__(30).Object.seal;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(26);

	__webpack_require__(27)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(28)
	  , core    = __webpack_require__(30)
	  , fails   = __webpack_require__(33);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(29)
	  , core      = __webpack_require__(30)
	  , ctx       = __webpack_require__(31)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(32);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var AST = {
	  // Public API used to evaluate derived attributes regarding AST nodes
	  helpers: {
	    // a mustache is definitely a helper if:
	    // * it is an eligible helper, and
	    // * it has at least one parameter or hash segment
	    helperExpression: function helperExpression(node) {
	      return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
	    },

	    scopedId: function scopedId(path) {
	      return (/^\.|this\b/.test(path.original)
	      );
	    },

	    // an ID is simple if it only has one part, and that part is not
	    // `..` or `this`.
	    simpleId: function simpleId(path) {
	      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
	    }
	  }
	};

	// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports['default'] = AST;
	module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	exports.__esModule = true;
	exports.parse = parse;

	var _parser = __webpack_require__(37);

	var _parser2 = _interopRequireDefault(_parser);

	var _whitespaceControl = __webpack_require__(38);

	var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

	var _helpers = __webpack_require__(40);

	var Helpers = _interopRequireWildcard(_helpers);

	var _utils = __webpack_require__(5);

	exports.parser = _parser2['default'];

	var yy = {};
	_utils.extend(yy, Helpers);

	function parse(input, options) {
	  // Just return if an already-compiled AST was passed in.
	  if (input.type === 'Program') {
	    return input;
	  }

	  _parser2['default'].yy = yy;

	  // Altering the shared object here, but this is ok as parser is a sync operation
	  yy.locInfo = function (locInfo) {
	    return new yy.SourceLocation(options && options.srcName, locInfo);
	  };

	  var strip = new _whitespaceControl2['default'](options);
	  return strip.accept(_parser2['default'].parse(input));
	}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	// File ignored in coverage tests via setting in .istanbul.yml
	/* Jison generated parser */
	"use strict";

	exports.__esModule = true;
	var handlebars = (function () {
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition_plus0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
	        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
	        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$
	        /**/) {

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                    break;
	                case 2:
	                    this.$ = yy.prepareProgram($$[$0]);
	                    break;
	                case 3:
	                    this.$ = $$[$0];
	                    break;
	                case 4:
	                    this.$ = $$[$0];
	                    break;
	                case 5:
	                    this.$ = $$[$0];
	                    break;
	                case 6:
	                    this.$ = $$[$0];
	                    break;
	                case 7:
	                    this.$ = $$[$0];
	                    break;
	                case 8:
	                    this.$ = $$[$0];
	                    break;
	                case 9:
	                    this.$ = {
	                        type: 'CommentStatement',
	                        value: yy.stripComment($$[$0]),
	                        strip: yy.stripFlags($$[$0], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 10:
	                    this.$ = {
	                        type: 'ContentStatement',
	                        original: $$[$0],
	                        value: $$[$0],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 11:
	                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 12:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
	                    break;
	                case 13:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
	                    break;
	                case 14:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
	                    break;
	                case 15:
	                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 16:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 17:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 18:
	                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
	                    break;
	                case 19:
	                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
	                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
	                    program.chained = true;

	                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

	                    break;
	                case 20:
	                    this.$ = $$[$0];
	                    break;
	                case 21:
	                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
	                    break;
	                case 22:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 23:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 24:
	                    this.$ = {
	                        type: 'PartialStatement',
	                        name: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        indent: '',
	                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 25:
	                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 26:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
	                    break;
	                case 27:
	                    this.$ = $$[$0];
	                    break;
	                case 28:
	                    this.$ = $$[$0];
	                    break;
	                case 29:
	                    this.$ = {
	                        type: 'SubExpression',
	                        path: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 30:
	                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 31:
	                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 32:
	                    this.$ = yy.id($$[$0 - 1]);
	                    break;
	                case 33:
	                    this.$ = $$[$0];
	                    break;
	                case 34:
	                    this.$ = $$[$0];
	                    break;
	                case 35:
	                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 36:
	                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
	                    break;
	                case 37:
	                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
	                    break;
	                case 38:
	                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
	                    break;
	                case 39:
	                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
	                    break;
	                case 40:
	                    this.$ = $$[$0];
	                    break;
	                case 41:
	                    this.$ = $$[$0];
	                    break;
	                case 42:
	                    this.$ = yy.preparePath(true, $$[$0], this._$);
	                    break;
	                case 43:
	                    this.$ = yy.preparePath(false, $$[$0], this._$);
	                    break;
	                case 44:
	                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
	                    break;
	                case 45:
	                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
	                    break;
	                case 46:
	                    this.$ = [];
	                    break;
	                case 47:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 48:
	                    this.$ = [$$[$0]];
	                    break;
	                case 49:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 50:
	                    this.$ = [];
	                    break;
	                case 51:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 58:
	                    this.$ = [];
	                    break;
	                case 59:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 64:
	                    this.$ = [];
	                    break;
	                case 65:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 70:
	                    this.$ = [];
	                    break;
	                case 71:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 78:
	                    this.$ = [];
	                    break;
	                case 79:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 82:
	                    this.$ = [];
	                    break;
	                case 83:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 86:
	                    this.$ = [];
	                    break;
	                case 87:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 90:
	                    this.$ = [];
	                    break;
	                case 91:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 94:
	                    this.$ = [];
	                    break;
	                case 95:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 98:
	                    this.$ = [$$[$0]];
	                    break;
	                case 99:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 100:
	                    this.$ = [$$[$0]];
	                    break;
	                case 101:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	            }
	        },
	        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 13: 40, 15: [1, 20], 17: 39 }, { 20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51] }, { 72: [1, 35], 86: 52 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54] }, { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] }, { 13: 63, 15: [1, 20], 18: [1, 62] }, { 15: [2, 48], 18: [2, 48] }, { 33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 66, 47: [1, 67] }, { 30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 80] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51] }, { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 84, 47: [1, 67] }, { 47: [2, 55] }, { 4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 88, 47: [1, 67] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 31: 94, 33: [2, 60], 63: 95, 64: 76, 65: [1, 44], 69: 96, 70: 77, 71: 78, 72: [1, 79], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 66], 36: 97, 63: 98, 64: 76, 65: [1, 44], 69: 99, 70: 77, 71: 78, 72: [1, 79], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 106] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 110] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76] }, { 33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 114] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 118] }, { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 124] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 125] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 109] }, { 20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 75, 33: [2, 72], 41: 127, 63: 128, 64: 76, 65: [1, 44], 69: 129, 70: 77, 71: 78, 72: [1, 79], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 130] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 131] }, { 33: [2, 63] }, { 72: [1, 133], 76: 132 }, { 33: [1, 134] }, { 33: [2, 69] }, { 15: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 138], 77: [1, 137] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 139] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
	        defaultActions: { 4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32] },
	        parseError: function parseError(str, hash) {
	            throw new Error(str);
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = "",
	                yylineno = 0,
	                yyleng = 0,
	                recovering = 0,
	                TERROR = 2,
	                EOF = 1;
	            this.lexer.setInput(input);
	            this.lexer.yy = this.yy;
	            this.yy.lexer = this.lexer;
	            this.yy.parser = this;
	            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
	            var yyloc = this.lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = this.lexer.options && this.lexer.options.ranges;
	            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
	            function popStack(n) {
	                stack.length = stack.length - 2 * n;
	                vstack.length = vstack.length - n;
	                lstack.length = lstack.length - n;
	            }
	            function lex() {
	                var token;
	                token = self.lexer.lex() || 1;
	                if (typeof token !== "number") {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            }
	            var symbol,
	                preErrorSymbol,
	                state,
	                action,
	                a,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == "undefined") {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === "undefined" || !action.length || !action[0]) {
	                    var errStr = "";
	                    if (!recovering) {
	                        expected = [];
	                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                            expected.push("'" + this.terminals_[p] + "'");
	                        }
	                        if (this.lexer.showPosition) {
	                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
	                        } else {
	                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
	                        }
	                        this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
	                    }
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(this.lexer.yytext);
	                        lstack.push(this.lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        if (!preErrorSymbol) {
	                            yyleng = this.lexer.yyleng;
	                            yytext = this.lexer.yytext;
	                            yylineno = this.lexer.yylineno;
	                            yyloc = this.lexer.yylloc;
	                            if (recovering > 0) recovering--;
	                        } else {
	                            symbol = preErrorSymbol;
	                            preErrorSymbol = null;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
	                        if (typeof r !== "undefined") {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        }
	    };
	    /* Jison generated lexer */
	    var lexer = (function () {
	        var lexer = { EOF: 1,
	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },
	            setInput: function setInput(input) {
	                this._input = input;
	                this._more = this._less = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = '';
	                this.conditionStack = ['INITIAL'];
	                this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
	                if (this.options.ranges) this.yylloc.range = [0, 0];
	                this.offset = 0;
	                return this;
	            },
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) this.yylloc.range[1]++;

	                this._input = this._input.slice(1);
	                return ch;
	            },
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) this.yylineno -= lines.length - 1;
	                var r = this.yylloc.range;

	                this.yylloc = { first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                return this;
	            },
	            more: function more() {
	                this._more = true;
	                return this;
	            },
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
	            },
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	            },
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) this.done = true;

	                var token, match, tempMatch, index, col, lines;
	                if (!this._more) {
	                    this.yytext = '';
	                    this.match = '';
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (!this.options.flex) break;
	                    }
	                }
	                if (match) {
	                    lines = match[0].match(/(?:\r\n?|\n).*/g);
	                    if (lines) this.yylineno += lines.length;
	                    this.yylloc = { first_line: this.yylloc.last_line,
	                        last_line: this.yylineno + 1,
	                        first_column: this.yylloc.last_column,
	                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
	                    this.yytext += match[0];
	                    this.match += match[0];
	                    this.matches = match;
	                    this.yyleng = this.yytext.length;
	                    if (this.options.ranges) {
	                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                    }
	                    this._more = false;
	                    this._input = this._input.slice(match[0].length);
	                    this.matched += match[0];
	                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
	                    if (this.done && this._input) this.done = false;
	                    if (token) return token;else return;
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
	                }
	            },
	            lex: function lex() {
	                var r = this.next();
	                if (typeof r !== 'undefined') {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },
	            popState: function popState() {
	                return this.conditionStack.pop();
	            },
	            _currentRules: function _currentRules() {
	                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	            },
	            topState: function topState() {
	                return this.conditionStack[this.conditionStack.length - 2];
	            },
	            pushState: function begin(condition) {
	                this.begin(condition);
	            } };
	        lexer.options = {};
	        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START
	        /**/) {

	            function strip(start, end) {
	                return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
	            }

	            var YYSTATE = YY_START;
	            switch ($avoiding_name_collisions) {
	                case 0:
	                    if (yy_.yytext.slice(-2) === "\\\\") {
	                        strip(0, 1);
	                        this.begin("mu");
	                    } else if (yy_.yytext.slice(-1) === "\\") {
	                        strip(0, 1);
	                        this.begin("emu");
	                    } else {
	                        this.begin("mu");
	                    }
	                    if (yy_.yytext) return 15;

	                    break;
	                case 1:
	                    return 15;
	                    break;
	                case 2:
	                    this.popState();
	                    return 15;

	                    break;
	                case 3:
	                    this.begin('raw');return 15;
	                    break;
	                case 4:
	                    this.popState();
	                    // Should be using `this.topState()` below, but it currently
	                    // returns the second top instead of the first top. Opened an
	                    // issue about it at https://github.com/zaach/jison/issues/291
	                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
	                        return 15;
	                    } else {
	                        yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
	                        return 'END_RAW_BLOCK';
	                    }

	                    break;
	                case 5:
	                    return 15;
	                    break;
	                case 6:
	                    this.popState();
	                    return 14;

	                    break;
	                case 7:
	                    return 65;
	                    break;
	                case 8:
	                    return 68;
	                    break;
	                case 9:
	                    return 19;
	                    break;
	                case 10:
	                    this.popState();
	                    this.begin('raw');
	                    return 23;

	                    break;
	                case 11:
	                    return 55;
	                    break;
	                case 12:
	                    return 60;
	                    break;
	                case 13:
	                    return 29;
	                    break;
	                case 14:
	                    return 47;
	                    break;
	                case 15:
	                    this.popState();return 44;
	                    break;
	                case 16:
	                    this.popState();return 44;
	                    break;
	                case 17:
	                    return 34;
	                    break;
	                case 18:
	                    return 39;
	                    break;
	                case 19:
	                    return 51;
	                    break;
	                case 20:
	                    return 48;
	                    break;
	                case 21:
	                    this.unput(yy_.yytext);
	                    this.popState();
	                    this.begin('com');

	                    break;
	                case 22:
	                    this.popState();
	                    return 14;

	                    break;
	                case 23:
	                    return 48;
	                    break;
	                case 24:
	                    return 73;
	                    break;
	                case 25:
	                    return 72;
	                    break;
	                case 26:
	                    return 72;
	                    break;
	                case 27:
	                    return 87;
	                    break;
	                case 28:
	                    // ignore whitespace
	                    break;
	                case 29:
	                    this.popState();return 54;
	                    break;
	                case 30:
	                    this.popState();return 33;
	                    break;
	                case 31:
	                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
	                    break;
	                case 32:
	                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
	                    break;
	                case 33:
	                    return 85;
	                    break;
	                case 34:
	                    return 82;
	                    break;
	                case 35:
	                    return 82;
	                    break;
	                case 36:
	                    return 83;
	                    break;
	                case 37:
	                    return 84;
	                    break;
	                case 38:
	                    return 81;
	                    break;
	                case 39:
	                    return 75;
	                    break;
	                case 40:
	                    return 77;
	                    break;
	                case 41:
	                    return 72;
	                    break;
	                case 42:
	                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
	                    break;
	                case 43:
	                    return 'INVALID';
	                    break;
	                case 44:
	                    return 5;
	                    break;
	            }
	        };
	        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
	        lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
	        return lexer;
	    })();
	    parser.lexer = lexer;
	    function Parser() {
	        this.yy = {};
	    }Parser.prototype = parser;parser.Parser = Parser;
	    return new Parser();
	})();exports["default"] = handlebars;
	module.exports = exports["default"];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _visitor = __webpack_require__(39);

	var _visitor2 = _interopRequireDefault(_visitor);

	function WhitespaceControl() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  this.options = options;
	}
	WhitespaceControl.prototype = new _visitor2['default']();

	WhitespaceControl.prototype.Program = function (program) {
	  var doStandalone = !this.options.ignoreStandalone;

	  var isRoot = !this.isRootSeen;
	  this.isRootSeen = true;

	  var body = program.body;
	  for (var i = 0, l = body.length; i < l; i++) {
	    var current = body[i],
	        strip = this.accept(current);

	    if (!strip) {
	      continue;
	    }

	    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
	        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
	        openStandalone = strip.openStandalone && _isPrevWhitespace,
	        closeStandalone = strip.closeStandalone && _isNextWhitespace,
	        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

	    if (strip.close) {
	      omitRight(body, i, true);
	    }
	    if (strip.open) {
	      omitLeft(body, i, true);
	    }

	    if (doStandalone && inlineStandalone) {
	      omitRight(body, i);

	      if (omitLeft(body, i)) {
	        // If we are on a standalone node, save the indent info for partials
	        if (current.type === 'PartialStatement') {
	          // Pull out the whitespace from the final line
	          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
	        }
	      }
	    }
	    if (doStandalone && openStandalone) {
	      omitRight((current.program || current.inverse).body);

	      // Strip out the previous content node if it's whitespace only
	      omitLeft(body, i);
	    }
	    if (doStandalone && closeStandalone) {
	      // Always strip the next node
	      omitRight(body, i);

	      omitLeft((current.inverse || current.program).body);
	    }
	  }

	  return program;
	};

	WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
	  this.accept(block.program);
	  this.accept(block.inverse);

	  // Find the inverse program that is involed with whitespace stripping.
	  var program = block.program || block.inverse,
	      inverse = block.program && block.inverse,
	      firstInverse = inverse,
	      lastInverse = inverse;

	  if (inverse && inverse.chained) {
	    firstInverse = inverse.body[0].program;

	    // Walk the inverse chain to find the last inverse that is actually in the chain.
	    while (lastInverse.chained) {
	      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
	    }
	  }

	  var strip = {
	    open: block.openStrip.open,
	    close: block.closeStrip.close,

	    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
	    // so our parent can determine if we actually are standalone
	    openStandalone: isNextWhitespace(program.body),
	    closeStandalone: isPrevWhitespace((firstInverse || program).body)
	  };

	  if (block.openStrip.close) {
	    omitRight(program.body, null, true);
	  }

	  if (inverse) {
	    var inverseStrip = block.inverseStrip;

	    if (inverseStrip.open) {
	      omitLeft(program.body, null, true);
	    }

	    if (inverseStrip.close) {
	      omitRight(firstInverse.body, null, true);
	    }
	    if (block.closeStrip.open) {
	      omitLeft(lastInverse.body, null, true);
	    }

	    // Find standalone else statments
	    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
	      omitLeft(program.body);
	      omitRight(firstInverse.body);
	    }
	  } else if (block.closeStrip.open) {
	    omitLeft(program.body, null, true);
	  }

	  return strip;
	};

	WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
	  return mustache.strip;
	};

	WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
	  /* istanbul ignore next */
	  var strip = node.strip || {};
	  return {
	    inlineStandalone: true,
	    open: strip.open,
	    close: strip.close
	  };
	};

	function isPrevWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = body.length;
	  }

	  // Nodes that end with newlines are considered whitespace (but are special
	  // cased for strip operations)
	  var prev = body[i - 1],
	      sibling = body[i - 2];
	  if (!prev) {
	    return isRoot;
	  }

	  if (prev.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
	  }
	}
	function isNextWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = -1;
	  }

	  var next = body[i + 1],
	      sibling = body[i + 2];
	  if (!next) {
	    return isRoot;
	  }

	  if (next.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
	  }
	}

	// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body, i, multiple) {
	  var current = body[i == null ? 0 : i + 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
	    return;
	  }

	  var original = current.value;
	  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
	  current.rightStripped = current.value !== original;
	}

	// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body, i, multiple) {
	  var current = body[i == null ? body.length - 1 : i - 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
	    return;
	  }

	  // We omit the last node if it's whitespace only and not preceeded by a non-content node.
	  var original = current.value;
	  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
	  current.leftStripped = current.value !== original;
	  return current.leftStripped;
	}

	exports['default'] = WhitespaceControl;
	module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function Visitor() {
	  this.parents = [];
	}

	Visitor.prototype = {
	  constructor: Visitor,
	  mutating: false,

	  // Visits a given value. If mutating, will replace the value if necessary.
	  acceptKey: function acceptKey(node, name) {
	    var value = this.accept(node[name]);
	    if (this.mutating) {
	      // Hacky sanity check: This may have a few false positives for type for the helper
	      // methods but will generally do the right thing without a lot of overhead.
	      if (value && !Visitor.prototype[value.type]) {
	        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
	      }
	      node[name] = value;
	    }
	  },

	  // Performs an accept operation with added sanity check to ensure
	  // required keys are not removed.
	  acceptRequired: function acceptRequired(node, name) {
	    this.acceptKey(node, name);

	    if (!node[name]) {
	      throw new _exception2['default'](node.type + ' requires ' + name);
	    }
	  },

	  // Traverses a given array. If mutating, empty respnses will be removed
	  // for child elements.
	  acceptArray: function acceptArray(array) {
	    for (var i = 0, l = array.length; i < l; i++) {
	      this.acceptKey(array, i);

	      if (!array[i]) {
	        array.splice(i, 1);
	        i--;
	        l--;
	      }
	    }
	  },

	  accept: function accept(object) {
	    if (!object) {
	      return;
	    }

	    /* istanbul ignore next: Sanity code */
	    if (!this[object.type]) {
	      throw new _exception2['default']('Unknown type: ' + object.type, object);
	    }

	    if (this.current) {
	      this.parents.unshift(this.current);
	    }
	    this.current = object;

	    var ret = this[object.type](object);

	    this.current = this.parents.shift();

	    if (!this.mutating || ret) {
	      return ret;
	    } else if (ret !== false) {
	      return object;
	    }
	  },

	  Program: function Program(program) {
	    this.acceptArray(program.body);
	  },

	  MustacheStatement: visitSubExpression,
	  Decorator: visitSubExpression,

	  BlockStatement: visitBlock,
	  DecoratorBlock: visitBlock,

	  PartialStatement: visitPartial,
	  PartialBlockStatement: function PartialBlockStatement(partial) {
	    visitPartial.call(this, partial);

	    this.acceptKey(partial, 'program');
	  },

	  ContentStatement: function ContentStatement() /* content */{},
	  CommentStatement: function CommentStatement() /* comment */{},

	  SubExpression: visitSubExpression,

	  PathExpression: function PathExpression() /* path */{},

	  StringLiteral: function StringLiteral() /* string */{},
	  NumberLiteral: function NumberLiteral() /* number */{},
	  BooleanLiteral: function BooleanLiteral() /* bool */{},
	  UndefinedLiteral: function UndefinedLiteral() /* literal */{},
	  NullLiteral: function NullLiteral() /* literal */{},

	  Hash: function Hash(hash) {
	    this.acceptArray(hash.pairs);
	  },
	  HashPair: function HashPair(pair) {
	    this.acceptRequired(pair, 'value');
	  }
	};

	function visitSubExpression(mustache) {
	  this.acceptRequired(mustache, 'path');
	  this.acceptArray(mustache.params);
	  this.acceptKey(mustache, 'hash');
	}
	function visitBlock(block) {
	  visitSubExpression.call(this, block);

	  this.acceptKey(block, 'program');
	  this.acceptKey(block, 'inverse');
	}
	function visitPartial(partial) {
	  this.acceptRequired(partial, 'name');
	  this.acceptArray(partial.params);
	  this.acceptKey(partial, 'hash');
	}

	exports['default'] = Visitor;
	module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.SourceLocation = SourceLocation;
	exports.id = id;
	exports.stripFlags = stripFlags;
	exports.stripComment = stripComment;
	exports.preparePath = preparePath;
	exports.prepareMustache = prepareMustache;
	exports.prepareRawBlock = prepareRawBlock;
	exports.prepareBlock = prepareBlock;
	exports.prepareProgram = prepareProgram;
	exports.preparePartialBlock = preparePartialBlock;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function validateClose(open, close) {
	  close = close.path ? close.path.original : close;

	  if (open.path.original !== close) {
	    var errorNode = { loc: open.path.loc };

	    throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
	  }
	}

	function SourceLocation(source, locInfo) {
	  this.source = source;
	  this.start = {
	    line: locInfo.first_line,
	    column: locInfo.first_column
	  };
	  this.end = {
	    line: locInfo.last_line,
	    column: locInfo.last_column
	  };
	}

	function id(token) {
	  if (/^\[.*\]$/.test(token)) {
	    return token.substr(1, token.length - 2);
	  } else {
	    return token;
	  }
	}

	function stripFlags(open, close) {
	  return {
	    open: open.charAt(2) === '~',
	    close: close.charAt(close.length - 3) === '~'
	  };
	}

	function stripComment(comment) {
	  return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
	}

	function preparePath(data, parts, loc) {
	  loc = this.locInfo(loc);

	  var original = data ? '@' : '',
	      dig = [],
	      depth = 0,
	      depthString = '';

	  for (var i = 0, l = parts.length; i < l; i++) {
	    var part = parts[i].part,

	    // If we have [] syntax then we do not treat path references as operators,
	    // i.e. foo.[this] resolves to approximately context.foo['this']
	    isLiteral = parts[i].original !== part;
	    original += (parts[i].separator || '') + part;

	    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
	      if (dig.length > 0) {
	        throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
	      } else if (part === '..') {
	        depth++;
	        depthString += '../';
	      }
	    } else {
	      dig.push(part);
	    }
	  }

	  return {
	    type: 'PathExpression',
	    data: data,
	    depth: depth,
	    parts: dig,
	    original: original,
	    loc: loc
	  };
	}

	function prepareMustache(path, params, hash, open, strip, locInfo) {
	  // Must use charAt to support IE pre-10
	  var escapeFlag = open.charAt(3) || open.charAt(2),
	      escaped = escapeFlag !== '{' && escapeFlag !== '&';

	  var decorator = /\*/.test(open);
	  return {
	    type: decorator ? 'Decorator' : 'MustacheStatement',
	    path: path,
	    params: params,
	    hash: hash,
	    escaped: escaped,
	    strip: strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareRawBlock(openRawBlock, contents, close, locInfo) {
	  validateClose(openRawBlock, close);

	  locInfo = this.locInfo(locInfo);
	  var program = {
	    type: 'Program',
	    body: contents,
	    strip: {},
	    loc: locInfo
	  };

	  return {
	    type: 'BlockStatement',
	    path: openRawBlock.path,
	    params: openRawBlock.params,
	    hash: openRawBlock.hash,
	    program: program,
	    openStrip: {},
	    inverseStrip: {},
	    closeStrip: {},
	    loc: locInfo
	  };
	}

	function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
	  if (close && close.path) {
	    validateClose(openBlock, close);
	  }

	  var decorator = /\*/.test(openBlock.open);

	  program.blockParams = openBlock.blockParams;

	  var inverse = undefined,
	      inverseStrip = undefined;

	  if (inverseAndProgram) {
	    if (decorator) {
	      throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
	    }

	    if (inverseAndProgram.chain) {
	      inverseAndProgram.program.body[0].closeStrip = close.strip;
	    }

	    inverseStrip = inverseAndProgram.strip;
	    inverse = inverseAndProgram.program;
	  }

	  if (inverted) {
	    inverted = inverse;
	    inverse = program;
	    program = inverted;
	  }

	  return {
	    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
	    path: openBlock.path,
	    params: openBlock.params,
	    hash: openBlock.hash,
	    program: program,
	    inverse: inverse,
	    openStrip: openBlock.strip,
	    inverseStrip: inverseStrip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareProgram(statements, loc) {
	  if (!loc && statements.length) {
	    var firstLoc = statements[0].loc,
	        lastLoc = statements[statements.length - 1].loc;

	    /* istanbul ignore else */
	    if (firstLoc && lastLoc) {
	      loc = {
	        source: firstLoc.source,
	        start: {
	          line: firstLoc.start.line,
	          column: firstLoc.start.column
	        },
	        end: {
	          line: lastLoc.end.line,
	          column: lastLoc.end.column
	        }
	      };
	    }
	  }

	  return {
	    type: 'Program',
	    body: statements,
	    strip: {},
	    loc: loc
	  };
	}

	function preparePartialBlock(open, program, close, locInfo) {
	  validateClose(open, close);

	  return {
	    type: 'PartialBlockStatement',
	    name: open.path,
	    params: open.params,
	    hash: open.hash,
	    program: program,
	    openStrip: open.strip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable new-cap */

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.Compiler = Compiler;
	exports.precompile = precompile;
	exports.compile = compile;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _ast = __webpack_require__(35);

	var _ast2 = _interopRequireDefault(_ast);

	var slice = [].slice;

	function Compiler() {}

	// the foundHelper register will disambiguate helper lookup from finding a
	// function in a context. This is necessary for mustache compatibility, which
	// requires that context functions in blocks are evaluated by blockHelperMissing,
	// and then proceed as if the resulting value was provided to blockHelperMissing.

	Compiler.prototype = {
	  compiler: Compiler,

	  equals: function equals(other) {
	    var len = this.opcodes.length;
	    if (other.opcodes.length !== len) {
	      return false;
	    }

	    for (var i = 0; i < len; i++) {
	      var opcode = this.opcodes[i],
	          otherOpcode = other.opcodes[i];
	      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
	        return false;
	      }
	    }

	    // We know that length is the same between the two arrays because they are directly tied
	    // to the opcode behavior above.
	    len = this.children.length;
	    for (var i = 0; i < len; i++) {
	      if (!this.children[i].equals(other.children[i])) {
	        return false;
	      }
	    }

	    return true;
	  },

	  guid: 0,

	  compile: function compile(program, options) {
	    this.sourceNode = [];
	    this.opcodes = [];
	    this.children = [];
	    this.options = options;
	    this.stringParams = options.stringParams;
	    this.trackIds = options.trackIds;

	    options.blockParams = options.blockParams || [];

	    // These changes will propagate to the other compiler components
	    var knownHelpers = options.knownHelpers;
	    options.knownHelpers = {
	      'helperMissing': true,
	      'blockHelperMissing': true,
	      'each': true,
	      'if': true,
	      'unless': true,
	      'with': true,
	      'log': true,
	      'lookup': true
	    };
	    if (knownHelpers) {
	      for (var _name in knownHelpers) {
	        /* istanbul ignore else */
	        if (_name in knownHelpers) {
	          this.options.knownHelpers[_name] = knownHelpers[_name];
	        }
	      }
	    }

	    return this.accept(program);
	  },

	  compileProgram: function compileProgram(program) {
	    var childCompiler = new this.compiler(),
	        // eslint-disable-line new-cap
	    result = childCompiler.compile(program, this.options),
	        guid = this.guid++;

	    this.usePartial = this.usePartial || result.usePartial;

	    this.children[guid] = result;
	    this.useDepths = this.useDepths || result.useDepths;

	    return guid;
	  },

	  accept: function accept(node) {
	    /* istanbul ignore next: Sanity code */
	    if (!this[node.type]) {
	      throw new _exception2['default']('Unknown type: ' + node.type, node);
	    }

	    this.sourceNode.unshift(node);
	    var ret = this[node.type](node);
	    this.sourceNode.shift();
	    return ret;
	  },

	  Program: function Program(program) {
	    this.options.blockParams.unshift(program.blockParams);

	    var body = program.body,
	        bodyLength = body.length;
	    for (var i = 0; i < bodyLength; i++) {
	      this.accept(body[i]);
	    }

	    this.options.blockParams.shift();

	    this.isSimple = bodyLength === 1;
	    this.blockParams = program.blockParams ? program.blockParams.length : 0;

	    return this;
	  },

	  BlockStatement: function BlockStatement(block) {
	    transformLiteralToPath(block);

	    var program = block.program,
	        inverse = block.inverse;

	    program = program && this.compileProgram(program);
	    inverse = inverse && this.compileProgram(inverse);

	    var type = this.classifySexpr(block);

	    if (type === 'helper') {
	      this.helperSexpr(block, program, inverse);
	    } else if (type === 'simple') {
	      this.simpleSexpr(block);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('blockValue', block.path.original);
	    } else {
	      this.ambiguousSexpr(block, program, inverse);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('ambiguousBlockValue');
	    }

	    this.opcode('append');
	  },

	  DecoratorBlock: function DecoratorBlock(decorator) {
	    var program = decorator.program && this.compileProgram(decorator.program);
	    var params = this.setupFullMustacheParams(decorator, program, undefined),
	        path = decorator.path;

	    this.useDecorators = true;
	    this.opcode('registerDecorator', params.length, path.original);
	  },

	  PartialStatement: function PartialStatement(partial) {
	    this.usePartial = true;

	    var program = partial.program;
	    if (program) {
	      program = this.compileProgram(partial.program);
	    }

	    var params = partial.params;
	    if (params.length > 1) {
	      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
	    } else if (!params.length) {
	      if (this.options.explicitPartialContext) {
	        this.opcode('pushLiteral', 'undefined');
	      } else {
	        params.push({ type: 'PathExpression', parts: [], depth: 0 });
	      }
	    }

	    var partialName = partial.name.original,
	        isDynamic = partial.name.type === 'SubExpression';
	    if (isDynamic) {
	      this.accept(partial.name);
	    }

	    this.setupFullMustacheParams(partial, program, undefined, true);

	    var indent = partial.indent || '';
	    if (this.options.preventIndent && indent) {
	      this.opcode('appendContent', indent);
	      indent = '';
	    }

	    this.opcode('invokePartial', isDynamic, partialName, indent);
	    this.opcode('append');
	  },
	  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
	    this.PartialStatement(partialBlock);
	  },

	  MustacheStatement: function MustacheStatement(mustache) {
	    this.SubExpression(mustache);

	    if (mustache.escaped && !this.options.noEscape) {
	      this.opcode('appendEscaped');
	    } else {
	      this.opcode('append');
	    }
	  },
	  Decorator: function Decorator(decorator) {
	    this.DecoratorBlock(decorator);
	  },

	  ContentStatement: function ContentStatement(content) {
	    if (content.value) {
	      this.opcode('appendContent', content.value);
	    }
	  },

	  CommentStatement: function CommentStatement() {},

	  SubExpression: function SubExpression(sexpr) {
	    transformLiteralToPath(sexpr);
	    var type = this.classifySexpr(sexpr);

	    if (type === 'simple') {
	      this.simpleSexpr(sexpr);
	    } else if (type === 'helper') {
	      this.helperSexpr(sexpr);
	    } else {
	      this.ambiguousSexpr(sexpr);
	    }
	  },
	  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
	    var path = sexpr.path,
	        name = path.parts[0],
	        isBlock = program != null || inverse != null;

	    this.opcode('getContext', path.depth);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    path.strict = true;
	    this.accept(path);

	    this.opcode('invokeAmbiguous', name, isBlock);
	  },

	  simpleSexpr: function simpleSexpr(sexpr) {
	    var path = sexpr.path;
	    path.strict = true;
	    this.accept(path);
	    this.opcode('resolvePossibleLambda');
	  },

	  helperSexpr: function helperSexpr(sexpr, program, inverse) {
	    var params = this.setupFullMustacheParams(sexpr, program, inverse),
	        path = sexpr.path,
	        name = path.parts[0];

	    if (this.options.knownHelpers[name]) {
	      this.opcode('invokeKnownHelper', params.length, name);
	    } else if (this.options.knownHelpersOnly) {
	      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
	    } else {
	      path.strict = true;
	      path.falsy = true;

	      this.accept(path);
	      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
	    }
	  },

	  PathExpression: function PathExpression(path) {
	    this.addDepth(path.depth);
	    this.opcode('getContext', path.depth);

	    var name = path.parts[0],
	        scoped = _ast2['default'].helpers.scopedId(path),
	        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

	    if (blockParamId) {
	      this.opcode('lookupBlockParam', blockParamId, path.parts);
	    } else if (!name) {
	      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
	      this.opcode('pushContext');
	    } else if (path.data) {
	      this.options.data = true;
	      this.opcode('lookupData', path.depth, path.parts, path.strict);
	    } else {
	      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
	    }
	  },

	  StringLiteral: function StringLiteral(string) {
	    this.opcode('pushString', string.value);
	  },

	  NumberLiteral: function NumberLiteral(number) {
	    this.opcode('pushLiteral', number.value);
	  },

	  BooleanLiteral: function BooleanLiteral(bool) {
	    this.opcode('pushLiteral', bool.value);
	  },

	  UndefinedLiteral: function UndefinedLiteral() {
	    this.opcode('pushLiteral', 'undefined');
	  },

	  NullLiteral: function NullLiteral() {
	    this.opcode('pushLiteral', 'null');
	  },

	  Hash: function Hash(hash) {
	    var pairs = hash.pairs,
	        i = 0,
	        l = pairs.length;

	    this.opcode('pushHash');

	    for (; i < l; i++) {
	      this.pushParam(pairs[i].value);
	    }
	    while (i--) {
	      this.opcode('assignToHash', pairs[i].key);
	    }
	    this.opcode('popHash');
	  },

	  // HELPERS
	  opcode: function opcode(name) {
	    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
	  },

	  addDepth: function addDepth(depth) {
	    if (!depth) {
	      return;
	    }

	    this.useDepths = true;
	  },

	  classifySexpr: function classifySexpr(sexpr) {
	    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

	    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

	    // a mustache is an eligible helper if:
	    // * its id is simple (a single part, not `this` or `..`)
	    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

	    // if a mustache is an eligible helper but not a definite
	    // helper, it is ambiguous, and will be resolved in a later
	    // pass or at runtime.
	    var isEligible = !isBlockParam && (isHelper || isSimple);

	    // if ambiguous, we can possibly resolve the ambiguity now
	    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
	    if (isEligible && !isHelper) {
	      var _name2 = sexpr.path.parts[0],
	          options = this.options;

	      if (options.knownHelpers[_name2]) {
	        isHelper = true;
	      } else if (options.knownHelpersOnly) {
	        isEligible = false;
	      }
	    }

	    if (isHelper) {
	      return 'helper';
	    } else if (isEligible) {
	      return 'ambiguous';
	    } else {
	      return 'simple';
	    }
	  },

	  pushParams: function pushParams(params) {
	    for (var i = 0, l = params.length; i < l; i++) {
	      this.pushParam(params[i]);
	    }
	  },

	  pushParam: function pushParam(val) {
	    var value = val.value != null ? val.value : val.original || '';

	    if (this.stringParams) {
	      if (value.replace) {
	        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
	      }

	      if (val.depth) {
	        this.addDepth(val.depth);
	      }
	      this.opcode('getContext', val.depth || 0);
	      this.opcode('pushStringParam', value, val.type);

	      if (val.type === 'SubExpression') {
	        // SubExpressions get evaluated and passed in
	        // in string params mode.
	        this.accept(val);
	      }
	    } else {
	      if (this.trackIds) {
	        var blockParamIndex = undefined;
	        if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
	          blockParamIndex = this.blockParamIndex(val.parts[0]);
	        }
	        if (blockParamIndex) {
	          var blockParamChild = val.parts.slice(1).join('.');
	          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
	        } else {
	          value = val.original || value;
	          if (value.replace) {
	            value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
	          }

	          this.opcode('pushId', val.type, value);
	        }
	      }
	      this.accept(val);
	    }
	  },

	  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
	    var params = sexpr.params;
	    this.pushParams(params);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    if (sexpr.hash) {
	      this.accept(sexpr.hash);
	    } else {
	      this.opcode('emptyHash', omitEmpty);
	    }

	    return params;
	  },

	  blockParamIndex: function blockParamIndex(name) {
	    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
	      var blockParams = this.options.blockParams[depth],
	          param = blockParams && _utils.indexOf(blockParams, name);
	      if (blockParams && param >= 0) {
	        return [depth, param];
	      }
	    }
	  }
	};

	function precompile(input, options, env) {
	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
	  }

	  options = options || {};
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var ast = env.parse(input, options),
	      environment = new env.Compiler().compile(ast, options);
	  return new env.JavaScriptCompiler().compile(environment, options);
	}

	function compile(input, options, env) {
	  if (options === undefined) options = {};

	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
	  }

	  options = _utils.extend({}, options);
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var compiled = undefined;

	  function compileInput() {
	    var ast = env.parse(input, options),
	        environment = new env.Compiler().compile(ast, options),
	        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
	    return env.template(templateSpec);
	  }

	  // Template is only compiled on first use and cached after that point.
	  function ret(context, execOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled.call(this, context, execOptions);
	  }
	  ret._setup = function (setupOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._setup(setupOptions);
	  };
	  ret._child = function (i, data, blockParams, depths) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._child(i, data, blockParams, depths);
	  };
	  return ret;
	}

	function argEquals(a, b) {
	  if (a === b) {
	    return true;
	  }

	  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
	    for (var i = 0; i < a.length; i++) {
	      if (!argEquals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	}

	function transformLiteralToPath(sexpr) {
	  if (!sexpr.path.parts) {
	    var literal = sexpr.path;
	    // Casting to string here to make false and 0 literal values play nicely with the rest
	    // of the system.
	    sexpr.path = {
	      type: 'PathExpression',
	      data: false,
	      depth: 0,
	      parts: [literal.original + ''],
	      original: literal.original + '',
	      loc: literal.loc
	    };
	  }
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _base = __webpack_require__(4);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _codeGen = __webpack_require__(43);

	var _codeGen2 = _interopRequireDefault(_codeGen);

	function Literal(value) {
	  this.value = value;
	}

	function JavaScriptCompiler() {}

	JavaScriptCompiler.prototype = {
	  // PUBLIC API: You can override these methods in a subclass to provide
	  // alternative compiled forms for name lookup and buffering semantics
	  nameLookup: function nameLookup(parent, name /* , type*/) {
	    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
	      return [parent, '.', name];
	    } else {
	      return [parent, '[', JSON.stringify(name), ']'];
	    }
	  },
	  depthedLookup: function depthedLookup(name) {
	    return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
	  },

	  compilerInfo: function compilerInfo() {
	    var revision = _base.COMPILER_REVISION,
	        versions = _base.REVISION_CHANGES[revision];
	    return [revision, versions];
	  },

	  appendToBuffer: function appendToBuffer(source, location, explicit) {
	    // Force a source as this simplifies the merge logic.
	    if (!_utils.isArray(source)) {
	      source = [source];
	    }
	    source = this.source.wrap(source, location);

	    if (this.environment.isSimple) {
	      return ['return ', source, ';'];
	    } else if (explicit) {
	      // This is a case where the buffer operation occurs as a child of another
	      // construct, generally braces. We have to explicitly output these buffer
	      // operations to ensure that the emitted code goes in the correct location.
	      return ['buffer += ', source, ';'];
	    } else {
	      source.appendToBuffer = true;
	      return source;
	    }
	  },

	  initializeBuffer: function initializeBuffer() {
	    return this.quotedString('');
	  },
	  // END PUBLIC API

	  compile: function compile(environment, options, context, asObject) {
	    this.environment = environment;
	    this.options = options;
	    this.stringParams = this.options.stringParams;
	    this.trackIds = this.options.trackIds;
	    this.precompile = !asObject;

	    this.name = this.environment.name;
	    this.isChild = !!context;
	    this.context = context || {
	      decorators: [],
	      programs: [],
	      environments: []
	    };

	    this.preamble();

	    this.stackSlot = 0;
	    this.stackVars = [];
	    this.aliases = {};
	    this.registers = { list: [] };
	    this.hashes = [];
	    this.compileStack = [];
	    this.inlineStack = [];
	    this.blockParams = [];

	    this.compileChildren(environment, options);

	    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
	    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

	    var opcodes = environment.opcodes,
	        opcode = undefined,
	        firstLoc = undefined,
	        i = undefined,
	        l = undefined;

	    for (i = 0, l = opcodes.length; i < l; i++) {
	      opcode = opcodes[i];

	      this.source.currentLocation = opcode.loc;
	      firstLoc = firstLoc || opcode.loc;
	      this[opcode.opcode].apply(this, opcode.args);
	    }

	    // Flush any trailing content that might be pending.
	    this.source.currentLocation = firstLoc;
	    this.pushSource('');

	    /* istanbul ignore next */
	    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
	      throw new _exception2['default']('Compile completed with content left on stack');
	    }

	    if (!this.decorators.isEmpty()) {
	      this.useDecorators = true;

	      this.decorators.prepend('var decorators = container.decorators;\n');
	      this.decorators.push('return fn;');

	      if (asObject) {
	        this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
	      } else {
	        this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
	        this.decorators.push('}\n');
	        this.decorators = this.decorators.merge();
	      }
	    } else {
	      this.decorators = undefined;
	    }

	    var fn = this.createFunctionContext(asObject);
	    if (!this.isChild) {
	      var ret = {
	        compiler: this.compilerInfo(),
	        main: fn
	      };

	      if (this.decorators) {
	        ret.main_d = this.decorators; // eslint-disable-line camelcase
	        ret.useDecorators = true;
	      }

	      var _context = this.context;
	      var programs = _context.programs;
	      var decorators = _context.decorators;

	      for (i = 0, l = programs.length; i < l; i++) {
	        if (programs[i]) {
	          ret[i] = programs[i];
	          if (decorators[i]) {
	            ret[i + '_d'] = decorators[i];
	            ret.useDecorators = true;
	          }
	        }
	      }

	      if (this.environment.usePartial) {
	        ret.usePartial = true;
	      }
	      if (this.options.data) {
	        ret.useData = true;
	      }
	      if (this.useDepths) {
	        ret.useDepths = true;
	      }
	      if (this.useBlockParams) {
	        ret.useBlockParams = true;
	      }
	      if (this.options.compat) {
	        ret.compat = true;
	      }

	      if (!asObject) {
	        ret.compiler = JSON.stringify(ret.compiler);

	        this.source.currentLocation = { start: { line: 1, column: 0 } };
	        ret = this.objectLiteral(ret);

	        if (options.srcName) {
	          ret = ret.toStringWithSourceMap({ file: options.destName });
	          ret.map = ret.map && ret.map.toString();
	        } else {
	          ret = ret.toString();
	        }
	      } else {
	        ret.compilerOptions = this.options;
	      }

	      return ret;
	    } else {
	      return fn;
	    }
	  },

	  preamble: function preamble() {
	    // track the last context pushed into place to allow skipping the
	    // getContext opcode when it would be a noop
	    this.lastContext = 0;
	    this.source = new _codeGen2['default'](this.options.srcName);
	    this.decorators = new _codeGen2['default'](this.options.srcName);
	  },

	  createFunctionContext: function createFunctionContext(asObject) {
	    var varDeclarations = '';

	    var locals = this.stackVars.concat(this.registers.list);
	    if (locals.length > 0) {
	      varDeclarations += ', ' + locals.join(', ');
	    }

	    // Generate minimizer alias mappings
	    //
	    // When using true SourceNodes, this will update all references to the given alias
	    // as the source nodes are reused in situ. For the non-source node compilation mode,
	    // aliases will not be used, but this case is already being run on the client and
	    // we aren't concern about minimizing the template size.
	    var aliasCount = 0;
	    for (var alias in this.aliases) {
	      // eslint-disable-line guard-for-in
	      var node = this.aliases[alias];

	      if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
	        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
	        node.children[0] = 'alias' + aliasCount;
	      }
	    }

	    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

	    if (this.useBlockParams || this.useDepths) {
	      params.push('blockParams');
	    }
	    if (this.useDepths) {
	      params.push('depths');
	    }

	    // Perform a second pass over the output to merge content when possible
	    var source = this.mergeSource(varDeclarations);

	    if (asObject) {
	      params.push(source);

	      return Function.apply(this, params);
	    } else {
	      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
	    }
	  },
	  mergeSource: function mergeSource(varDeclarations) {
	    var isSimple = this.environment.isSimple,
	        appendOnly = !this.forceBuffer,
	        appendFirst = undefined,
	        sourceSeen = undefined,
	        bufferStart = undefined,
	        bufferEnd = undefined;
	    this.source.each(function (line) {
	      if (line.appendToBuffer) {
	        if (bufferStart) {
	          line.prepend('  + ');
	        } else {
	          bufferStart = line;
	        }
	        bufferEnd = line;
	      } else {
	        if (bufferStart) {
	          if (!sourceSeen) {
	            appendFirst = true;
	          } else {
	            bufferStart.prepend('buffer += ');
	          }
	          bufferEnd.add(';');
	          bufferStart = bufferEnd = undefined;
	        }

	        sourceSeen = true;
	        if (!isSimple) {
	          appendOnly = false;
	        }
	      }
	    });

	    if (appendOnly) {
	      if (bufferStart) {
	        bufferStart.prepend('return ');
	        bufferEnd.add(';');
	      } else if (!sourceSeen) {
	        this.source.push('return "";');
	      }
	    } else {
	      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

	      if (bufferStart) {
	        bufferStart.prepend('return buffer + ');
	        bufferEnd.add(';');
	      } else {
	        this.source.push('return buffer;');
	      }
	    }

	    if (varDeclarations) {
	      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
	    }

	    return this.source.merge();
	  },

	  // [blockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // On stack, after: return value of blockHelperMissing
	  //
	  // The purpose of this opcode is to take a block of the form
	  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
	  // replace it on the stack with the result of properly
	  // invoking blockHelperMissing.
	  blockValue: function blockValue(name) {
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs(name, 0, params);

	    var blockName = this.popStack();
	    params.splice(1, 0, blockName);

	    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
	  },

	  // [ambiguousBlockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // Compiler value, before: lastHelper=value of last found helper, if any
	  // On stack, after, if no lastHelper: same as [blockValue]
	  // On stack, after, if lastHelper: value
	  ambiguousBlockValue: function ambiguousBlockValue() {
	    // We're being a bit cheeky and reusing the options value from the prior exec
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs('', 0, params, true);

	    this.flushInline();

	    var current = this.topStack();
	    params.splice(1, 0, current);

	    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
	  },

	  // [appendContent]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  //
	  // Appends the string value of `content` to the current buffer
	  appendContent: function appendContent(content) {
	    if (this.pendingContent) {
	      content = this.pendingContent + content;
	    } else {
	      this.pendingLocation = this.source.currentLocation;
	    }

	    this.pendingContent = content;
	  },

	  // [append]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Coerces `value` to a String and appends it to the current buffer.
	  //
	  // If `value` is truthy, or 0, it is coerced into a string and appended
	  // Otherwise, the empty string is appended
	  append: function append() {
	    if (this.isInline()) {
	      this.replaceStack(function (current) {
	        return [' != null ? ', current, ' : ""'];
	      });

	      this.pushSource(this.appendToBuffer(this.popStack()));
	    } else {
	      var local = this.popStack();
	      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
	      if (this.environment.isSimple) {
	        this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
	      }
	    }
	  },

	  // [appendEscaped]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Escape `value` and append it to the buffer
	  appendEscaped: function appendEscaped() {
	    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
	  },

	  // [getContext]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  // Compiler value, after: lastContext=depth
	  //
	  // Set the value of the `lastContext` compiler value to the depth
	  getContext: function getContext(depth) {
	    this.lastContext = depth;
	  },

	  // [pushContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext, ...
	  //
	  // Pushes the value of the current context onto the stack.
	  pushContext: function pushContext() {
	    this.pushStackLiteral(this.contextName(this.lastContext));
	  },

	  // [lookupOnContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext[name], ...
	  //
	  // Looks up the value of `name` on the current context and pushes
	  // it onto the stack.
	  lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
	    var i = 0;

	    if (!scoped && this.options.compat && !this.lastContext) {
	      // The depthed query is expected to handle the undefined logic for the root level that
	      // is implemented below, so we evaluate that directly in compat mode
	      this.push(this.depthedLookup(parts[i++]));
	    } else {
	      this.pushContext();
	    }

	    this.resolvePath('context', parts, i, falsy, strict);
	  },

	  // [lookupBlockParam]
	  //
	  // On stack, before: ...
	  // On stack, after: blockParam[name], ...
	  //
	  // Looks up the value of `parts` on the given block param and pushes
	  // it onto the stack.
	  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
	    this.useBlockParams = true;

	    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
	    this.resolvePath('context', parts, 1);
	  },

	  // [lookupData]
	  //
	  // On stack, before: ...
	  // On stack, after: data, ...
	  //
	  // Push the data lookup operator
	  lookupData: function lookupData(depth, parts, strict) {
	    if (!depth) {
	      this.pushStackLiteral('data');
	    } else {
	      this.pushStackLiteral('container.data(data, ' + depth + ')');
	    }

	    this.resolvePath('data', parts, 0, true, strict);
	  },

	  resolvePath: function resolvePath(type, parts, i, falsy, strict) {
	    // istanbul ignore next

	    var _this = this;

	    if (this.options.strict || this.options.assumeObjects) {
	      this.push(strictLookup(this.options.strict && strict, this, parts, type));
	      return;
	    }

	    var len = parts.length;
	    for (; i < len; i++) {
	      /* eslint-disable no-loop-func */
	      this.replaceStack(function (current) {
	        var lookup = _this.nameLookup(current, parts[i], type);
	        // We want to ensure that zero and false are handled properly if the context (falsy flag)
	        // needs to have the special handling for these values.
	        if (!falsy) {
	          return [' != null ? ', lookup, ' : ', current];
	        } else {
	          // Otherwise we can use generic falsy handling
	          return [' && ', lookup];
	        }
	      });
	      /* eslint-enable no-loop-func */
	    }
	  },

	  // [resolvePossibleLambda]
	  //
	  // On stack, before: value, ...
	  // On stack, after: resolved value, ...
	  //
	  // If the `value` is a lambda, replace it on the stack by
	  // the return value of the lambda
	  resolvePossibleLambda: function resolvePossibleLambda() {
	    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
	  },

	  // [pushStringParam]
	  //
	  // On stack, before: ...
	  // On stack, after: string, currentContext, ...
	  //
	  // This opcode is designed for use in string mode, which
	  // provides the string value of a parameter along with its
	  // depth rather than resolving it immediately.
	  pushStringParam: function pushStringParam(string, type) {
	    this.pushContext();
	    this.pushString(type);

	    // If it's a subexpression, the string result
	    // will be pushed after this opcode.
	    if (type !== 'SubExpression') {
	      if (typeof string === 'string') {
	        this.pushString(string);
	      } else {
	        this.pushStackLiteral(string);
	      }
	    }
	  },

	  emptyHash: function emptyHash(omitEmpty) {
	    if (this.trackIds) {
	      this.push('{}'); // hashIds
	    }
	    if (this.stringParams) {
	      this.push('{}'); // hashContexts
	      this.push('{}'); // hashTypes
	    }
	    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
	  },
	  pushHash: function pushHash() {
	    if (this.hash) {
	      this.hashes.push(this.hash);
	    }
	    this.hash = { values: [], types: [], contexts: [], ids: [] };
	  },
	  popHash: function popHash() {
	    var hash = this.hash;
	    this.hash = this.hashes.pop();

	    if (this.trackIds) {
	      this.push(this.objectLiteral(hash.ids));
	    }
	    if (this.stringParams) {
	      this.push(this.objectLiteral(hash.contexts));
	      this.push(this.objectLiteral(hash.types));
	    }

	    this.push(this.objectLiteral(hash.values));
	  },

	  // [pushString]
	  //
	  // On stack, before: ...
	  // On stack, after: quotedString(string), ...
	  //
	  // Push a quoted version of `string` onto the stack
	  pushString: function pushString(string) {
	    this.pushStackLiteral(this.quotedString(string));
	  },

	  // [pushLiteral]
	  //
	  // On stack, before: ...
	  // On stack, after: value, ...
	  //
	  // Pushes a value onto the stack. This operation prevents
	  // the compiler from creating a temporary variable to hold
	  // it.
	  pushLiteral: function pushLiteral(value) {
	    this.pushStackLiteral(value);
	  },

	  // [pushProgram]
	  //
	  // On stack, before: ...
	  // On stack, after: program(guid), ...
	  //
	  // Push a program expression onto the stack. This takes
	  // a compile-time guid and converts it into a runtime-accessible
	  // expression.
	  pushProgram: function pushProgram(guid) {
	    if (guid != null) {
	      this.pushStackLiteral(this.programExpression(guid));
	    } else {
	      this.pushStackLiteral(null);
	    }
	  },

	  // [registerDecorator]
	  //
	  // On stack, before: hash, program, params..., ...
	  // On stack, after: ...
	  //
	  // Pops off the decorator's parameters, invokes the decorator,
	  // and inserts the decorator into the decorators list.
	  registerDecorator: function registerDecorator(paramSize, name) {
	    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
	        options = this.setupHelperArgs(name, paramSize);

	    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
	  },

	  // [invokeHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // Pops off the helper's parameters, invokes the helper,
	  // and pushes the helper's return value onto the stack.
	  //
	  // If the helper is not found, `helperMissing` is called.
	  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
	    var nonHelper = this.popStack(),
	        helper = this.setupHelper(paramSize, name),
	        simple = isSimple ? [helper.name, ' || '] : '';

	    var lookup = ['('].concat(simple, nonHelper);
	    if (!this.options.strict) {
	      lookup.push(' || ', this.aliasable('helpers.helperMissing'));
	    }
	    lookup.push(')');

	    this.push(this.source.functionCall(lookup, 'call', helper.callParams));
	  },

	  // [invokeKnownHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // This operation is used when the helper is known to exist,
	  // so a `helperMissing` fallback is not required.
	  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
	    var helper = this.setupHelper(paramSize, name);
	    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
	  },

	  // [invokeAmbiguous]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of disambiguation
	  //
	  // This operation is used when an expression like `{{foo}}`
	  // is provided, but we don't know at compile-time whether it
	  // is a helper or a path.
	  //
	  // This operation emits more code than the other options,
	  // and can be avoided by passing the `knownHelpers` and
	  // `knownHelpersOnly` flags at compile-time.
	  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
	    this.useRegister('helper');

	    var nonHelper = this.popStack();

	    this.emptyHash();
	    var helper = this.setupHelper(0, name, helperCall);

	    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

	    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
	    if (!this.options.strict) {
	      lookup[0] = '(helper = ';
	      lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
	    }

	    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
	  },

	  // [invokePartial]
	  //
	  // On stack, before: context, ...
	  // On stack after: result of partial invocation
	  //
	  // This operation pops off a context, invokes a partial with that context,
	  // and pushes the result of the invocation back.
	  invokePartial: function invokePartial(isDynamic, name, indent) {
	    var params = [],
	        options = this.setupParams(name, 1, params);

	    if (isDynamic) {
	      name = this.popStack();
	      delete options.name;
	    }

	    if (indent) {
	      options.indent = JSON.stringify(indent);
	    }
	    options.helpers = 'helpers';
	    options.partials = 'partials';
	    options.decorators = 'container.decorators';

	    if (!isDynamic) {
	      params.unshift(this.nameLookup('partials', name, 'partial'));
	    } else {
	      params.unshift(name);
	    }

	    if (this.options.compat) {
	      options.depths = 'depths';
	    }
	    options = this.objectLiteral(options);
	    params.push(options);

	    this.push(this.source.functionCall('container.invokePartial', '', params));
	  },

	  // [assignToHash]
	  //
	  // On stack, before: value, ..., hash, ...
	  // On stack, after: ..., hash, ...
	  //
	  // Pops a value off the stack and assigns it to the current hash
	  assignToHash: function assignToHash(key) {
	    var value = this.popStack(),
	        context = undefined,
	        type = undefined,
	        id = undefined;

	    if (this.trackIds) {
	      id = this.popStack();
	    }
	    if (this.stringParams) {
	      type = this.popStack();
	      context = this.popStack();
	    }

	    var hash = this.hash;
	    if (context) {
	      hash.contexts[key] = context;
	    }
	    if (type) {
	      hash.types[key] = type;
	    }
	    if (id) {
	      hash.ids[key] = id;
	    }
	    hash.values[key] = value;
	  },

	  pushId: function pushId(type, name, child) {
	    if (type === 'BlockParam') {
	      this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
	    } else if (type === 'PathExpression') {
	      this.pushString(name);
	    } else if (type === 'SubExpression') {
	      this.pushStackLiteral('true');
	    } else {
	      this.pushStackLiteral('null');
	    }
	  },

	  // HELPERS

	  compiler: JavaScriptCompiler,

	  compileChildren: function compileChildren(environment, options) {
	    var children = environment.children,
	        child = undefined,
	        compiler = undefined;

	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      compiler = new this.compiler(); // eslint-disable-line new-cap

	      var existing = this.matchExistingProgram(child);

	      if (existing == null) {
	        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
	        var index = this.context.programs.length;
	        child.index = index;
	        child.name = 'program' + index;
	        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
	        this.context.decorators[index] = compiler.decorators;
	        this.context.environments[index] = child;

	        this.useDepths = this.useDepths || compiler.useDepths;
	        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
	        child.useDepths = this.useDepths;
	        child.useBlockParams = this.useBlockParams;
	      } else {
	        child.index = existing.index;
	        child.name = 'program' + existing.index;

	        this.useDepths = this.useDepths || existing.useDepths;
	        this.useBlockParams = this.useBlockParams || existing.useBlockParams;
	      }
	    }
	  },
	  matchExistingProgram: function matchExistingProgram(child) {
	    for (var i = 0, len = this.context.environments.length; i < len; i++) {
	      var environment = this.context.environments[i];
	      if (environment && environment.equals(child)) {
	        return environment;
	      }
	    }
	  },

	  programExpression: function programExpression(guid) {
	    var child = this.environment.children[guid],
	        programParams = [child.index, 'data', child.blockParams];

	    if (this.useBlockParams || this.useDepths) {
	      programParams.push('blockParams');
	    }
	    if (this.useDepths) {
	      programParams.push('depths');
	    }

	    return 'container.program(' + programParams.join(', ') + ')';
	  },

	  useRegister: function useRegister(name) {
	    if (!this.registers[name]) {
	      this.registers[name] = true;
	      this.registers.list.push(name);
	    }
	  },

	  push: function push(expr) {
	    if (!(expr instanceof Literal)) {
	      expr = this.source.wrap(expr);
	    }

	    this.inlineStack.push(expr);
	    return expr;
	  },

	  pushStackLiteral: function pushStackLiteral(item) {
	    this.push(new Literal(item));
	  },

	  pushSource: function pushSource(source) {
	    if (this.pendingContent) {
	      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
	      this.pendingContent = undefined;
	    }

	    if (source) {
	      this.source.push(source);
	    }
	  },

	  replaceStack: function replaceStack(callback) {
	    var prefix = ['('],
	        stack = undefined,
	        createdStack = undefined,
	        usedLiteral = undefined;

	    /* istanbul ignore next */
	    if (!this.isInline()) {
	      throw new _exception2['default']('replaceStack on non-inline');
	    }

	    // We want to merge the inline statement into the replacement statement via ','
	    var top = this.popStack(true);

	    if (top instanceof Literal) {
	      // Literals do not need to be inlined
	      stack = [top.value];
	      prefix = ['(', stack];
	      usedLiteral = true;
	    } else {
	      // Get or create the current stack name for use by the inline
	      createdStack = true;
	      var _name = this.incrStack();

	      prefix = ['((', this.push(_name), ' = ', top, ')'];
	      stack = this.topStack();
	    }

	    var item = callback.call(this, stack);

	    if (!usedLiteral) {
	      this.popStack();
	    }
	    if (createdStack) {
	      this.stackSlot--;
	    }
	    this.push(prefix.concat(item, ')'));
	  },

	  incrStack: function incrStack() {
	    this.stackSlot++;
	    if (this.stackSlot > this.stackVars.length) {
	      this.stackVars.push('stack' + this.stackSlot);
	    }
	    return this.topStackName();
	  },
	  topStackName: function topStackName() {
	    return 'stack' + this.stackSlot;
	  },
	  flushInline: function flushInline() {
	    var inlineStack = this.inlineStack;
	    this.inlineStack = [];
	    for (var i = 0, len = inlineStack.length; i < len; i++) {
	      var entry = inlineStack[i];
	      /* istanbul ignore if */
	      if (entry instanceof Literal) {
	        this.compileStack.push(entry);
	      } else {
	        var stack = this.incrStack();
	        this.pushSource([stack, ' = ', entry, ';']);
	        this.compileStack.push(stack);
	      }
	    }
	  },
	  isInline: function isInline() {
	    return this.inlineStack.length;
	  },

	  popStack: function popStack(wrapped) {
	    var inline = this.isInline(),
	        item = (inline ? this.inlineStack : this.compileStack).pop();

	    if (!wrapped && item instanceof Literal) {
	      return item.value;
	    } else {
	      if (!inline) {
	        /* istanbul ignore next */
	        if (!this.stackSlot) {
	          throw new _exception2['default']('Invalid stack pop');
	        }
	        this.stackSlot--;
	      }
	      return item;
	    }
	  },

	  topStack: function topStack() {
	    var stack = this.isInline() ? this.inlineStack : this.compileStack,
	        item = stack[stack.length - 1];

	    /* istanbul ignore if */
	    if (item instanceof Literal) {
	      return item.value;
	    } else {
	      return item;
	    }
	  },

	  contextName: function contextName(context) {
	    if (this.useDepths && context) {
	      return 'depths[' + context + ']';
	    } else {
	      return 'depth' + context;
	    }
	  },

	  quotedString: function quotedString(str) {
	    return this.source.quotedString(str);
	  },

	  objectLiteral: function objectLiteral(obj) {
	    return this.source.objectLiteral(obj);
	  },

	  aliasable: function aliasable(name) {
	    var ret = this.aliases[name];
	    if (ret) {
	      ret.referenceCount++;
	      return ret;
	    }

	    ret = this.aliases[name] = this.source.wrap(name);
	    ret.aliasable = true;
	    ret.referenceCount = 1;

	    return ret;
	  },

	  setupHelper: function setupHelper(paramSize, name, blockHelper) {
	    var params = [],
	        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
	    var foundHelper = this.nameLookup('helpers', name, 'helper'),
	        callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : (container.nullContext || {})');

	    return {
	      params: params,
	      paramsInit: paramsInit,
	      name: foundHelper,
	      callParams: [callContext].concat(params)
	    };
	  },

	  setupParams: function setupParams(helper, paramSize, params) {
	    var options = {},
	        contexts = [],
	        types = [],
	        ids = [],
	        objectArgs = !params,
	        param = undefined;

	    if (objectArgs) {
	      params = [];
	    }

	    options.name = this.quotedString(helper);
	    options.hash = this.popStack();

	    if (this.trackIds) {
	      options.hashIds = this.popStack();
	    }
	    if (this.stringParams) {
	      options.hashTypes = this.popStack();
	      options.hashContexts = this.popStack();
	    }

	    var inverse = this.popStack(),
	        program = this.popStack();

	    // Avoid setting fn and inverse if neither are set. This allows
	    // helpers to do a check for `if (options.fn)`
	    if (program || inverse) {
	      options.fn = program || 'container.noop';
	      options.inverse = inverse || 'container.noop';
	    }

	    // The parameters go on to the stack in order (making sure that they are evaluated in order)
	    // so we need to pop them off the stack in reverse order
	    var i = paramSize;
	    while (i--) {
	      param = this.popStack();
	      params[i] = param;

	      if (this.trackIds) {
	        ids[i] = this.popStack();
	      }
	      if (this.stringParams) {
	        types[i] = this.popStack();
	        contexts[i] = this.popStack();
	      }
	    }

	    if (objectArgs) {
	      options.args = this.source.generateArray(params);
	    }

	    if (this.trackIds) {
	      options.ids = this.source.generateArray(ids);
	    }
	    if (this.stringParams) {
	      options.types = this.source.generateArray(types);
	      options.contexts = this.source.generateArray(contexts);
	    }

	    if (this.options.data) {
	      options.data = 'data';
	    }
	    if (this.useBlockParams) {
	      options.blockParams = 'blockParams';
	    }
	    return options;
	  },

	  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
	    var options = this.setupParams(helper, paramSize, params);
	    options = this.objectLiteral(options);
	    if (useRegister) {
	      this.useRegister('options');
	      params.push('options');
	      return ['options=', options];
	    } else if (params) {
	      params.push(options);
	      return '';
	    } else {
	      return options;
	    }
	  }
	};

	(function () {
	  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

	  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

	  for (var i = 0, l = reservedWords.length; i < l; i++) {
	    compilerWords[reservedWords[i]] = true;
	  }
	})();

	JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
	  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
	};

	function strictLookup(requireTerminal, compiler, parts, type) {
	  var stack = compiler.popStack(),
	      i = 0,
	      len = parts.length;
	  if (requireTerminal) {
	    len--;
	  }

	  for (; i < len; i++) {
	    stack = compiler.nameLookup(stack, parts[i], type);
	  }

	  if (requireTerminal) {
	    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
	  } else {
	    return stack;
	  }
	}

	exports['default'] = JavaScriptCompiler;
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	/* global define */
	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var SourceNode = undefined;

	try {
	  /* istanbul ignore next */
	  if (false) {
	    // We don't support this in AMD environments. For these environments, we asusme that
	    // they are running on the browser and thus have no need for the source-map library.
	    var SourceMap = require('source-map');
	    SourceNode = SourceMap.SourceNode;
	  }
	} catch (err) {}
	/* NOP */

	/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
	if (!SourceNode) {
	  SourceNode = function (line, column, srcFile, chunks) {
	    this.src = '';
	    if (chunks) {
	      this.add(chunks);
	    }
	  };
	  /* istanbul ignore next */
	  SourceNode.prototype = {
	    add: function add(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src += chunks;
	    },
	    prepend: function prepend(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src = chunks + this.src;
	    },
	    toStringWithSourceMap: function toStringWithSourceMap() {
	      return { code: this.toString() };
	    },
	    toString: function toString() {
	      return this.src;
	    }
	  };
	}

	function castChunk(chunk, codeGen, loc) {
	  if (_utils.isArray(chunk)) {
	    var ret = [];

	    for (var i = 0, len = chunk.length; i < len; i++) {
	      ret.push(codeGen.wrap(chunk[i], loc));
	    }
	    return ret;
	  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
	    // Handle primitives that the SourceNode will throw up on
	    return chunk + '';
	  }
	  return chunk;
	}

	function CodeGen(srcFile) {
	  this.srcFile = srcFile;
	  this.source = [];
	}

	CodeGen.prototype = {
	  isEmpty: function isEmpty() {
	    return !this.source.length;
	  },
	  prepend: function prepend(source, loc) {
	    this.source.unshift(this.wrap(source, loc));
	  },
	  push: function push(source, loc) {
	    this.source.push(this.wrap(source, loc));
	  },

	  merge: function merge() {
	    var source = this.empty();
	    this.each(function (line) {
	      source.add(['  ', line, '\n']);
	    });
	    return source;
	  },

	  each: function each(iter) {
	    for (var i = 0, len = this.source.length; i < len; i++) {
	      iter(this.source[i]);
	    }
	  },

	  empty: function empty() {
	    var loc = this.currentLocation || { start: {} };
	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
	  },
	  wrap: function wrap(chunk) {
	    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

	    if (chunk instanceof SourceNode) {
	      return chunk;
	    }

	    chunk = castChunk(chunk, this, loc);

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
	  },

	  functionCall: function functionCall(fn, type, params) {
	    params = this.generateList(params);
	    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
	  },

	  quotedString: function quotedString(str) {
	    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
	    .replace(/\u2029/g, '\\u2029') + '"';
	  },

	  objectLiteral: function objectLiteral(obj) {
	    var pairs = [];

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        var value = castChunk(obj[key], this);
	        if (value !== 'undefined') {
	          pairs.push([this.quotedString(key), ':', value]);
	        }
	      }
	    }

	    var ret = this.generateList(pairs);
	    ret.prepend('{');
	    ret.add('}');
	    return ret;
	  },

	  generateList: function generateList(entries) {
	    var ret = this.empty();

	    for (var i = 0, len = entries.length; i < len; i++) {
	      if (i) {
	        ret.add(',');
	      }

	      ret.add(castChunk(entries[i], this));
	    }

	    return ret;
	  },

	  generateArray: function generateArray(entries) {
	    var ret = this.generateList(entries);
	    ret.prepend('[');
	    ret.add(']');

	    return ret;
	  }
	};

	exports['default'] = CodeGen;
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;
/* vDataJSON is the main JSON data storage defined in index.html
  vDataJSON is provided as parameter to createHandleBarsCompiler(pDataJSON)
   * createHandleBarsCompiler() expects a hash key "tpl" containing the templates.
   * createHandleBarsCompiler() generates HandleBars compiler functions
     in pDataJSON["out"] for all keys pDataJSON["tpl"]
  create for all templates in the hash vDataJSON["tpl"] a Handlebars compiler
  e.g. vDataJSON["tpl"]["javascript"] is a Handlebars template for Javascript
  Code generation. Following iteration will create a compliler
  in vDataJSON["out"]["javascript"]
*/
var vCodeCompiler = {};

function clone_json(pJSON) {
  var vJSON = {};
  if (pJSON) {
    vJSON = JSON.parse(JSON.stringify(pJSON));
  } else {
    console.log("ERROR: cloneJSON(pJSON) - pJSON undefined!");
  }
  return vJSON;
}


function value_in_array( pValue, pArray ) {
  var ret = -1;
  if (pArray) {
    for (var i = 0; i < pArray.length; i++) {
      if (pValue == pArray[i]) {
        ret = i;
      }
    };
  } else {
    console.log("value_in_array()-Call pArray undefined");
  };
  return ret;
}

function createHandleBarsCompiler(pDataJSON) {
  for (var tplID in pDataJSON.tpl) {
    if (pDataJSON.tpl.hasOwnProperty(tplID)) {
      pDataJSON.out[tplID] = Handlebars.compile(pDataJSON.tpl[tplID]);
    }
  }
}

// Use helper in Template with:
// {{#ifcond var1 '==' var2}}
//   ...
// {{/ifcond}}

Handlebars.registerHelper('ifcond', function (v1, operator, v2, options) {

    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});

// Block helpers can be called in template
// {{#bold}}{{body}}{{/bold}}

Handlebars.registerHelper('bold', function(options) {
  var ret = "";
  ret += '<div class="mybold">';
  ret += options.fn(this);
  ret += '</div>';
  return new Handlebars.SafeString(ret);
});

// Simple Iterators helper functions
/*
{{#listhtml attributes}}
   <div class="comment">
     <h2>{{subject}}</h2>
     {{{body}}}
   </div>
 {{/listhtml}}
*/

Handlebars.registerHelper('listhtml', function(context, options) {
  var ret = "<ul>";

  for(var i=0, j=context.length; i<j; i++) {
    ret = ret + "<li>" + options.fn(context[i]) + "</li>";
  }

  return ret + "</ul>";
});

/* Hash Arguments of Helper Calls
Like regular helpers, block helpers can accept an optional
 Hash as its final argument.
 Let's revisit the list helper and make it possible for us
 to add any number of optional attributes to the <ul> element we will create.

{{#listhtmlattr nav id="nav-bar" class="top"}}
 <a href="{{url}}">{{title}}</a>
{{/listhtmlattr}}

Handlebars provides the final hash as options.hash.
This makes it easier to accept a variable number of parameters,
while also accepting an optional Hash. If the template provides
no hash arguments, Handlebars will automatically pass an empty object ({}),
so you don't need to check for the existence of hash arguments.
*/

Handlebars.registerHelper('eachparam', function(context, pClassname,options) {

  var vText =  context.map(function(item) {
    return "" + options.fn(item) + "";
  }).join("\n");

  for (var varID in options.hash) {
    if (options.hash.hasOwnProperty(varID)) {
      console.log("eachparam options.hash['"+varID+"']='"+options.hash[varID]+"'");
      vText = vText.replace(new RegExp('{{' + varID + '}}', 'g'), options.hash[varID])
    }
  };
  return vText
});

Handlebars.registerHelper('foreach', function(pArray, pData, options) {
  var ret = "";
  // vRequire is a Hash that collects all classes
  // that are needed to create attributes or
  // create a return class of the type.
  var vRequire = {};
  var vLib = "";
  var item;
  for (var i=0; i<pArray.length; i++) {
    item = clone_json(pArray[i]);
    item.data = pData;
    ret += options.fn(item);
  };
  return ret
});


Handlebars.registerHelper('listhtmlattr', function(context, options) {
  var attrs = Object.keys(options.hash).map(function(key) {
    return key + '="' + options.hash[key] + '"';
  }).join(" ");

  return "<ul " + attrs + ">" + context.map(function(item) {
    return "<li>" + options.fn(item) + "</li>";
  }).join("\n") + "</ul>";
});

Handlebars.registerHelper('indent', function(pText, pIndent) {
  var vText = pText ||"ERROR: undefined pText in helper-indent ";
  var vIndent = "        ";
  if(typeof(pIndent) == "string") {
    console.log("CALL: helper-indent: pIndent is of type 'String'");
    vIndent = pIndent;
  } else {
    if (pIndent.hasOwnProperty("hash")) {
      if (pIndent.hash.hasOwnProperty("indent")) {
        vIndent = pIndent.hash.indent;
      } else {
        console.log("ERROR: helper-indent: pIndent.hash 'indent' property undefined - use default indent");
      }
    } else {
      console.log("ERROR: helper-indent: pIndent undefined - use default indent");
    }
  }
  var vCR = "";
  console.log("indent-helper: vIndent='"+vIndent+"'");
  //vIndent = "\n" + vIndent;
  if (vText && (vText != "")) {
    vText = vText.replace(/\n/g,"\n"+vIndent);
  };
  return new Handlebars.SafeString(vIndent+vText);
});



Handlebars.registerHelper('codeindent', function(pContext, options) {
  var vIndent = "";
  var vText = "";
  var vCR = "";
  if (options) {
    if (options.hash.hasOwnProperty("indent")) {
      vIndent = options.hash["indent"];
      //console.log("Indent for Code Coments in HandleBars: '"+vIndent+"'");
    };
    vText = options.fn(pContext);
    //console.log("pContext: "+pContext);
  } else {
    console.log("options in helper 'commentindent' undefined");
  };
  if (pContext) {
    //console.log("Type: "+typeof(pContext)+" '"+pContext+"'");
    vText = pContext;
  };
  //vIndent = "\n" + vIndent;
  if (vText != "") {
    vText = vText.replace(/\n/g,"\n"+vIndent+"  ");
  };
  return vIndent+"  "+vText+"\n";
});

/*
{{lowercase myfilename}}
{{lowercase "My Filename"}}
*/

Handlebars.registerHelper('lowercase', function(pString) {
  var vString = pString.toLowerCase();
  return new Handlebars.SafeString(vString);
});

Handlebars.registerHelper('requirelibs', function(pArray, options) {
  var ret = ""; // return value
  var vSep = ""; // newline separator - empty for first line
  var vMod = "";


  function filename2var(pFile) {
    // converts first character to uppercase.
    // e.g. "myclass" to "Myclase"
    var vFile = pFile || "undef_require_lib";
    if (vFile.indexOf("/")>=0) {
      vFile = vFile.slice(vFile.lastIndexOf("/")+1);
    };
    vFile = vFile.replace(/[^A-Za-z0-9]/g,"_"); // remove illegial characters in variable name
    return vFile.charAt(0).toUpperCase() + vFile.slice(1);
  };

  for (var i = 0; i < pArray.length; i++) {
    vFile = pArray[i];
    //ret += options.fn({"variable":filename2var(vFile),"module":vFile})
    ret += options.fn(pArray[i])
  };
  //return new Handlebars.SafeString(ret);
  console.log("Require List:\n"+ret);
  return ret
});

Handlebars.registerHelper('requireclass', function(pData,pSettings, options) {
  var vRequirePath = pData.reposinfo.require_path || "./libs/";
  var ret = "";
  // vRequire is a Hash that collects all classes
  // that are needed to create attributes or
  // create a return class of the type.
  var vRequire = {};
  var vLib = "";
  var vPars;

  function addlib_check (pCheckTitle,pLib) {
    // constructors are required if the class is NOT a base class
    // so class/library is added if an only if it is not a base class
    console.log("("+pCheckTitle+") addlib_check('"+pLib+"')");
    if (pLib != "") {
      console.log("Base Class '"+pLib+"' index="+value_in_array(pLib,pSettings.baseclasslist));
      if ((value_in_array(pLib,pSettings.baseclasslist) >= 0) || (pLib == pData.superclassname)) {
        console.log("("+pCheckTitle+") Library '"+pLib+"' is a Base Class - no required");
      } else {
        console.log("Local Class '"+pLib+"' index="+value_in_array(pLib,pSettings.localclasslist));
        if (value_in_array(pLib,pSettings.localclasslist) >= 0) {
          // pLib is a local library
          vRequire[pLib] = vRequirePath + name2filename(pLib);
          console.log("("+pCheckTitle+") Library '"+pLib+"' is a Local Class - require('"+vRequire[pLib]+"')");
        } else {
          vRequire[pLib] = name2filename(pLib);
          console.log("("+pCheckTitle+") Library '"+pLib+"' is a Remote Class - require('"+vRequire[pLib]+"')");
        };
      };
    };
  }; //END: addlib_check()

  console.log("Call Helper: requireclasslist - superclass='"+pData.superclassname+"' require_path='"+vRequirePath+"'");
  for (var i=0; i<pData.attributes.length; i++) {
    // populate vRequire with classes that a needed as
    // constructors for attributes
    addlib_check("Attribute",pData.attributes[i].class);
  };
  for (var i=0; i<pData.methods.length; i++) {
    // populate vRequire with classes that a needed as
    // constructors for returned instances of those classes
    addlib_check("Method "+pData.methods[i].name+"() Return",pData.methods[i].return);
    vPars = pData.methods[i].parameter;
    for (var k=0; k<vPars.length; k++) {
      addlib_check("Parameter "+pData.methods[i].name+"()",vPars[k].class);
    };
  };
  // vRequire is a Hash therefore double usage of classes
  // in attributes and returns of methods lead just to one
  // require call in the list
  var vSep = "";
  for (var iLib in vRequire) {
    if (vRequire.hasOwnProperty(iLib)) {
      ret += options.fn({"variable":iLib,"module":vRequire[iLib]})
      //ret += vSep + "const " + iLib + " = require('" + vRequire[iLib]+"');";
      vSep = "\n";
    }
  };
  //return new Handlebars.SafeString(ret);
  console.log("Require List:\n"+ret);
  return ret;
});

Handlebars.registerHelper('removereturn', function(pString) {
  var vString = pString.replace(/\n/g," - ");
  return new Handlebars.SafeString(vString);
});


function name2filename(pName) {
  var vFilename = pName.toLowerCase();
  vFilename = vFilename.replace(/[^a-z0-9]/g,"_");
  vFilename = vFilename.replace(/_[_]+/g,"_");
  return vFilename;
}


Handlebars.registerHelper('filename', function(pString) {
   var vText = pString || "no_filename";
   return name2filename(vText);
});

// -----------

function paramCallString(pParamArray) {
  var ret = "";
  var vComma = "";

  for(var i=0, j=pParamArray.length; i<j; i++) {
    ret += vComma +  pParamArray[i].name;
    vComma = ",";
  };

  return new Handlebars.SafeString(ret);
}

Handlebars.registerHelper('paramcall', paramCallString);

// -----------

function paramTypeString(pParamArray) {
  // creates from JSON parameters of a method the variable list with types
  var ret = "";
  var vComma = "";
  if (pParamArray) {
    for(var i=0, j=pParamArray.length; i<j; i++) {
      ret += vComma +  pParamArray[i].name+":"+pParamArray[i].class;
      vComma = ",";
    };
  } else {
    console.log("No pParamArray in 'paramcall' helper.");
  }

  return new Handlebars.SafeString(ret);
}

Handlebars.registerHelper('paramtype', paramTypeString);
// -----------

function attribs4UMLString(pArray) {
  // pArray contains the array of Attributes
  var ret = "";
  var vSep = "";
  var vVis = "-";
  for(var i=0, j=pArray.length; i<j; i++) {
    switch (pArray[i].visibility) {
      case "public":
        vVis = "+";
      break;
      case "public":
        vVis = "-";
      break;
      default:
        vVis = "-";
    };
    ret += vSep + " " + vVis + " " + pArray[i].name+":"+pArray[i].class;
    vSep = "<br>";
  };
  return new Handlebars.SafeString(ret);
}

Handlebars.registerHelper('requireattribs', attribs4UMLString);

// -----------

function attribs4UMLString(pArray) {
  // pArray contains the array of Attributes
  var ret = "";
  var vSep = "";
  var vVis = "-";
  for(var i=0, j=pArray.length; i<j; i++) {
    switch (pArray[i].visibility) {
      case "public":
        vVis = "+";
      break;
      case "private":
        vVis = "-";
      break;
      default:
        vVis = "-";
    };
    ret += vSep + " " + vVis + " " + pArray[i].name+":"+pArray[i].class;
    vSep = "<br>";
  };
  return ret;
}

Handlebars.registerHelper('attribs_uml', attribs4UMLString);

// -----------

function methods4UMLString(pArray) {
  // pArray contains the array of Attributes
  var ret = "";
  var vSep = "";
  var vVis = "-";
  for(var i=0, j=pArray.length; i<j; i++) {
    switch (pArray[i].visibility) {
      case "public":
        vVis = "+";
      break;
      case "private":
        vVis = "-";
      break;
      default:
        vVis = "-";
    };
    ret += vSep + " " + vVis + " " + pArray[i].name+"(";
    ret += paramTypeString(pArray[i].parameter);
    ret += ")";
    if (pArray[i].return != "") {
      ret += ":"+pArray[i].return
    };
    vSep = "<br>";
  };
  return new Handlebars.SafeString(ret);
}

Handlebars.registerHelper('methods_uml', methods4UMLString);

// -----------

function parameterListString(pParamArray,pIndent) {
  var ret = "";
  var vNewLine = "";
  var vComment = "";
  var vExtraIndent = "  "
  for(var i=0, j=pParamArray.length; i<j; i++) {
    ret += vNewLine +  pParamArray[i].name + ":"+pParamArray[i].class;
    vNewLine = "\n"+pIndent;
    vComment = pParamArray[i].comment;
    if (vComment != "") {
      vComment = vComment.replace(/\n/g,vNewLine+vExtraIndent);
      // Split comment at "\n" and inject the vNewLine indent with additional spaces for the comment
      ret += vNewLine + vExtraIndent + vComment;
    };
  };
  return new Handlebars.SafeString(ret);
}

Handlebars.registerHelper('parameterlist', parameterListString);

// -----------
//---- Define the static class Handlebars4Code
// The class was extended by src/libs/handlebars_helpers.js
// build.js creates main.js

function create_compiler(pTplJSON) {
  var vTemplate = "";
  for (var tplID in pTplJSON) {
    if (pTplJSON.hasOwnProperty(tplID)) {
      vTemplate = pTplJSON[tplID];
      vCodeCompiler[tplID] = Handlebars.compile(vTemplate);
    };
  };
};

function get_compiler () {
  return vCodeCompiler;
};


function compile_code(pTplID,pJSON) {
  // pJSON is JSON data of the UML Class
  var vCode = vCodeCompiler[pTplID](pJSON);
  return vCode;
};


var Handlebars4Code = {
  "create_compiler": create_compiler,
  "compile_code": compile_code,
  "get_compiler": get_compiler
};
//---- BEGIN: src/audioslides4web.js -----
var zip = new JSZip();

//-----------------------------------------------
//--- DOWNLOAD ZIP ------------------------------
//---Use FileSaver.js by Eli Grey to save ZIP----
//-----------------------------------------------
function download_zip(pFilename,pZIP) {
  var vFilename = pFilename || "my_loaded_files.zip";
  pZIP.generateAsync({type:"blob"}).then(function (blob) { // 1) generate the zip file
    saveAs(blob, vFilename);                          // 2) trigger the download
  }, function (err) {
    console.error("ERROR: generation of zip-file '" + vFilename + "' - "+err);
  });
}

function el(pID) {
  var vNode = document.getElementById(pID);
  if (vNode) {
    return vNode;
  } else {
    console.log("Error Node ['"+pID+"']");
    return document.getElementById("tUndefined");
  }
}

function getInteger(x) {
  var parsed = parseInt(x, 10);
  if (isNaN(parsed)) {
    return 0;
  }
  return parsed;
}

function getInteger4DOM(pDOMID) {
  var parsed = 0;
  var vNode = el(pDOMID);
  if (vNode) {
    var x = vNode.value;
    parsed = getInteger(x);
  }
  return parsed;
}



function get_root_dir() {
  var vTitle = el("tTitle").value;
  var vPath = "audio_slides";
  if (vTitle) {
    vPath = string2filename(vTitle);
  };
  console.log("Root Directory: '" + vPath + "'");
  return vPath;
}

function populateSlides4JSON(pDOM2ID,pJSON) {
  var arr_audio = vDataJSON.files.audio;
  pJSON = readDOM2JSON(pDOM2ID,pJSON);
  pJSON.data.slides = [];
  pJSON.first = getInteger4DOM("tFirst");
  pJSON.last = getInteger4DOM("tLast");
  var vAudioType = "mpeg";
  var vFound = -1;
  var vExt = "-";
  for (var i = pJSON.first; i < (pJSON.last+1); i++) {
    //alert("Create Slide "+i);
    vAudioType = "-";
    vExt = "-";
    vFound = -1;
    for (var k = 0; k < arr_audio.length; k++) {
      // extract the audio number in filename
      if (arr_audio[k]) {
        nr = extract_number(arr_audio[k].name,-1);
        if (nr == i) {
          // if the number matches with the filename set the vAudioType
          vFound = k;
        }
      }
    }
    // Set the audio type if audio comment exist
    if (vFound >=  0) {
      vAudioType = getType4AudioExt(arr_audio[vFound].name);
      vExt = getExtension(arr_audio[vFound].name);
      console.log("Slide " + i + " with Audio of Type '" + vAudioType + "'");
    } else {
      console.log("Slide " + i + " no Audio ");
    }
    pJSON.data.slides.push({
      "number": i,
      "audiotype": vAudioType,
      "ext": vExt
    });
  }
  return pJSON;
}

function setSlideCount() {
  // get number of loaded slides
  var arr_img = vDataJSON.files.image;
  var vCount_Image = arr_img.length;
  var vFirst = 30000;
  var vLast = -1;
  // get number of loaded audio files
  var arr_audio = vDataJSON.files.audio;
  var vCount_Audio = arr_audio.length;
  // determine maximum and calc slide count
  var vSlideCount = vCount_Image;
  if (vCount_Audio > vCount_Image) {
    vSlideCount = vCount_Audio;
  }
  // check all slide numbers encoded in the filename
  var nr = 0;
  for (i = 0; i < arr_img.length; i++) {
    nr = extract_number(arr_img[i].name,vLast);
    if (nr > vLast) {
      vLast = nr;
    };
    nr = extract_number(arr_img[i].name,vFirst);
    if (nr < vFirst) {
      vFirst = nr;
    };

  }
  for (i = 0; i < arr_audio.length; i++) {
    nr = extract_number(arr_audio[i].name,vLast);
    if (nr > vLast) {
      vLast = nr;
    };
    nr = extract_number(arr_audio[i].name,vFirst);
    if (nr < vFirst) {
      vFirst = nr;
    };
  }

  // the setting of tFirst as integer
  //var vFirst = getInteger4DOM("tFirst");
  // set tLast = vFirst + vSlideCount - 1
  el("tFirst").value = vFirst;
  el("tLast").value = vLast;
}

function convert(pTplID) {
    var vTplID = pTplID || "audioslides";
    var vJSON = getDataJSON();
    var vFileName = el("tFileName").value+".html";
    if (vJSON)  {
        var vOutput = Handlebars4Code.compile_code(vTplID,vJSON);
        // File is a Javascript Class defined in FileSaver.js
        var file = new File([vOutput], {type: "text/plain;charset=utf-8"});
        // method saveAs() is defined in FileSaver.js so import filesaver.js and blob.js to your Javascript project
        //saveAs(file,vFileName);
    } else {
        alert("ERROR: Could not parse JSON");
    }
}

function setTemplate(pTplID) {
  //convert(pTpl);
  el("tTemplate").value = vDataJSON.tpl[pTplID];
}


function callSource() {
  //var vURL = "https://"+el("sWikiLanguage").value + "." + el("sWikiDomain").value+".org/wiki/";
  //vURL += encodeURI(el("tTitle").value);
  //document.location.href=vURL;
  var vBaseName = el("tFileName").value;
  var vFileName = vBaseName+".html";
  vJSON = getDataJSON();
  alert("Save '"+vBaseName+".html' and create subfolder '"+el("tImageBaseName").value+"' and '"+el("tAudioBaseName").value+"'\nand store the images and audio files in the folder.\nDisplay '"+vBaseName+".html' in your browser");
  var vOutput = Handlebars4Code.compile_code("audioslides",vJSON);
  var file = new File([vOutput], {type: "text/plain;charset=utf-8"});
  saveAs(file,vFileName);
}

function callSourceZIP() {
  //var vURL = "output_zip.html?"+get_link_parameter();
  //document.location.href=vURL;
  zip = new JSZip();
  var vJSON = getDataJSON();
  if (vJSON) {
    //var vOutput = Handlebars4Code.compile_code("audioslides",vJSON);
    var index_out = get_index_html(vJSON);
    el("outtext").value = index_out;
    var vRootDir = get_root_dir();
    var vFileName = el("tFileName").value;
    save_html2zip(vRootDir+"/"+vFileName,index_out);
    save_audio2tip(vRootDir+"/audio/");
    save_images2zip(vRootDir+"/images/");
    download_zip(vRootDir+".zip",zip);
  } else {
    console.error("ERROR: data in vJSON with slides info is not defined!");
  }
  //window.open(vURL);
}

function save_html2zip(pFileName,pOut) {
  console.log("Save main HTML '"+pFileName+"'");
  zip.file(pFileName, pOut);
}

function save_audio2tip(pPath) {
  var arr_audio = vDataJSON.files.audio;
  var vBaseName = el("tAudioBaseName").value;
  for (i = 0; i < arr_audio.length; i++) {
    if (arr_audio[i]) {
      nr = extract_number(arr_audio[i].name,-1);
      vFileName = pPath + vBaseName + nr + "." + getExtension(arr_audio[i].name);
      zip.file(vFileName, arr_audio[i].file, {base64: true});
    }
  }
}

function save_images2zip(pPath) {
  var arr_img = vDataJSON.files.image;
  var vBaseName = el("tImageBaseName").value;
  var vFileName = "";
  for (i = 0; i < arr_img.length; i++) {
    if (arr_img[i]) {
      nr = extract_number(arr_img[i].name,-1);
      vFileName = pPath + vBaseName + nr + "." + getExtension(arr_img[i].name);
      zip.file(vFileName, arr_img[i].file, {base64: true});
    }
  }


}

function displaySource() {
  //var vURL = "https://"+el("sWikiLanguage").value + "." + el("sWikiDomain").value+".org/wiki/";
  //vURL += encodeURI(el("tTitle").value);
  var vURL = "output_textarea.html?"+ get_link_parameter();
  //document.location.href=vURL;
  window.open(vURL);
}

function get_index_html(pJSON) {
  var out = "undefined index.html in get_index_html()";
  if (pJSON) {
    out = Handlebars4Code.compile_code("audioslides",pJSON);
  } else {
    console.error("ERROR - get_index_html(): data in vJSON with slides info is not defined!");
  }
  //var out = get_header_html();
  //out += get_slides_html();
  //out += get_tail_html();
  return out;
}

function get_header_html() {
  var out = "";
  //out += ;
  return out;
}

function get_slides_html() {
  var out = "";
  //out += ;
  return out;
}

function get_tail_html() {
  var out = "";
  //out += ;
  return out;
}

function parseJSON(pString) {
    var vString = pString || "{}";
    var vJSON;
    if(vString) {
      try {
          vJSON = JSON.parse(vString);
      } catch(e) {
          alert("JSON Parsing Error: "+e); // error in the above string (in this case, yes)!
      }
      if (vJSON)  {
        return vJSON;
      } else {
        alert("ERROR: Could not parse JSON");
        return null;
      }
    }
}

function getDataJSON() {
  var vJSON = vDataJSON.initdata;
  for (var id in vDOM2ID) {
    if (vDOM2ID.hasOwnProperty(id)) {
        var id4JSON = vDOM2ID[id];
        //vJSON["title"] = vLinkParam.getValue(vDOM2ID["tTitle"]);
        /*
        "tAudioType":"audiotype",
        "tAudioExt":"audioext",
        "tImageExt":"imageext",
        "tAudioBaseName":"audiobasename",
        "tImageBaseName":"imagebasename",
        */
        switch (id4JSON) {
          case "first":
            vJSON[id4JSON] = getInteger4DOM(id);
          break;
          case "last":
            vJSON[id4JSON] =  getInteger4DOM(id);
          break;
          case "audiobasename":
            vJSON.data.audio.basename = el(id).value;
          break;
          case "audiotype":
            vJSON.data.audio.type = el(id).value;
          break;
          case "audioext":
            vJSON.data.audio.ext = el(id).value;
          break;
          case "imagebasename":
            vJSON.data.image.basename = el(id).value;
          break;
          case "imageext":
            vJSON.data.image.ext = el(id).value;
          break;
          default:
            //console.log("vJSON."+id4JSON+"='"+el(id).value+"'");
            //eval("vJSON."+id4JSON+"='"+el(id).value+"'");
            vJSON[id4JSON] = el(id).value;
        }
      }
      console.log("getDataJSON:\n"+JSON.stringify(vJSON,null,4));
  }
  vJSON = populateSlides4JSON(vDOM2ID,vJSON);
  console.log(JSON.stringify(vJSON,null,4));
  return vJSON;
}

function getREADME(pFolder,pFileType,pTypeID) {
  var vOut = "README "+pTypeID+"-Folder \""+pFolder+"/\"\n";
  vOut +="\nCopy all of your "+pFileType+" in this folder \""+pFolder+"/\"\n";
  vOut +="\n - /" + pFolder + "/" +
        el("t"+pTypeID+"BaseName").value +
        el("tFirst").value + "." +
        el("t"+pTypeID+"Ext").value;
  vOut += "\n - ...";
  vOut +="\n - /" + pFolder + "/" +
        el("t"+pTypeID+"BaseName").value +
        el("tLast").value + "." +
        el("t"+pTypeID+"Ext").value+"\n\n";
  return vOut;
}

function extract_number(name,nr) {
       // name = "my_audio_01.mp3"
       var name_split = name.split(".");
       // name_split[0] = "my_audio_01"
       var digits = name_split[0].replace(/[^0-9]/g,"");
       // digits = "01"
       if (digits.length > 0) {
         nr = parseInt(digits);
       }
       return nr;
}

function extract_extension(name,ext) {
       // name = "my_audio_01.mp3"
       var name_split = name.split(".");
       // name_split[1] = "mp3"
       if (name_split.length > 0) {
         ext = name_split[name_split.length - 1];
       }
       return ext;
}
//---- END: src/audioslides4web.js -----


// -------NPM Export Variable: AudioSlides4Web---------------
module.exports = AudioSlides4Web;