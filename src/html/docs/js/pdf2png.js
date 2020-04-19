function data_url2base64  (uri) {
  console.log("CALL: data_url2base64(uri) uri='" +uri.substr(0,20)+ "...'");
  var idx = uri.indexOf('base64,') + 'base64,'.length; // or = 28 if you're sure about the prefix
  var content = uri.substring(idx);
  // use e.g. for zip file
  // zip.file('a.pdf', content, {base64: true});
  return content;
};

function showPDF(pdf_url) {
	$("#pdf-loader").show();

	PDFJS.getDocument({ url: pdf_url }).then(function(pdf_doc) {
		__PDF_DOC = pdf_doc;
		__TOTAL_PAGES = __PDF_DOC.numPages;

		// Hide the pdf loader and show pdf container in HTML
		$("#pdf-loader").hide();
		$("#pdf-canvas").hide();
		$("#pdf-contents").show();
		$("#pdf-total-pages").text(__TOTAL_PAGES);

		// Show the first page
		showPage(1);
	}).catch(function(error) {
		// If error re-show the upload button
		$("#pdf-loader").hide();
		$("#upload-button").show();

		alert(error.message);
	});;
}

function create_image_thumb_tag(pLoader,pFilename,pDataURL) {
  var width_missing = false;
  var height_missing = false;
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
    html += 'width="150"' + lf4d.aOptions.width4thumb +'" ';
  }
  var vFilename = pFilename || "image_undefined.png";
  vFilename = vFilename.replace(/[^A-Za-z0-9 _\-\.]/g,"_");
  html += 'src="' + pDataURL +'" ';
  html += 'title="' + vFilename + '"/>';
  return html;
}

function showPage(page_no) {
	__PAGE_RENDERING_IN_PROGRESS = 1;
	__CURRENT_PAGE = page_no;

	// Disable Prev & Next buttons while page is being loaded
	$("#pdf-next, #pdf-prev").attr('disabled', 'disabled');
	//$("#pdf-add, #pdf-download").attr('disabled', 'disabled');

	// While page is being rendered hide the canvas and show a loading message
  $("#pdf-slide-preview").hide();
  $("#pdf-canvas").hide();
	$("#page-loader").show();
	$("#download-image").hide();

	// Update current page in HTML
	$("#pdf-current-page").text(page_no);

	// Fetch the page
	__PDF_DOC.getPage(page_no).then(function(page) {
		// As the canvas is of a fixed width we need to set the scale of the viewport accordingly
		var scale_required = __CANVAS.width / page.getViewport(1).width;
    var scale_required_preview = __CANVAS_PREVIEW.width / page.getViewport(1).width;

		// Get viewport of the page at required scale
		var viewport = page.getViewport(scale_required);
    var viewport_preview = page.getViewport(scale_required_preview);

		// Set canvas height
		__CANVAS.height = viewport.height;
    // Set canvas height for preview
    __CANVAS_PREVIEW.height = viewport_preview.height;

		var renderContext = {
			canvasContext: __CANVAS_CTX,
			viewport: viewport
		};

    var renderContext_preview = {
      canvasContext: __CANVAS_CTX_PREVIEW,
      viewport: viewport_preview
    };

		// Render the page contents in the canvas
		page.render(renderContext).then(function() {
			__PAGE_RENDERING_IN_PROGRESS = 0;

			// Re-enable Prev & Next buttons
			$("#pdf-next, #pdf-prev").removeAttr('disabled');

			// Show the canvas and hide the page loader
      //$("#pdf-canvas").show();
      $("#page-loader").hide();
			//$("#download-image").show();
		});
    // Render the page contents in the canvas
		page.render(renderContext_preview).then(function() {
			__PAGE_RENDERING_IN_PROGRESS = 0;

			// Re-enable Prev & Next buttons
			$("#pdf-next, #pdf-prev").removeAttr('disabled');

			// Show the canvas and hide the page loader
      $("#pdf-slide-preview").show();
			$("#page-loader").hide();
			//$("#download-image").show();
		});
	});
}

function show_add_slides () {
  console.log("show_add_slides");
  $('fInputTable').hide();
  $('#divaddslides').show();
}

// Upon click this should should trigger click on the #file-to-upload file input element
// This is better than showing the not-good-looking file input element
$("#upload-button").on('click', function() {
	$("#file-to-upload").trigger('click');
  $('#divaddslides').hide();
  $("#divpdf").show();
});

// When user chooses a PDF file
$("#file-to-upload").on('change', function() {
	// Validate whether PDF
    if(['application/pdf'].indexOf($("#file-to-upload").get(0).files[0].type) == -1) {
        alert('Error : Not a PDF');
        return;
    }

	$("#upload-button").hide();
  $("#pdf-selector-show").show();
  $("#divaddslides").hide();
	// Send the object url of the pdf
	showPDF(URL.createObjectURL($("#file-to-upload").get(0).files[0]));
});

// Previous page of the PDF
$("#close-add-slides").on('click', function() {
  $("#divaddslides").hide();
  $("#divpdf").hide();
  $("#fInputTable").show();
});


// Previous page of the PDF
$("#pdf-prev").on('click', function() {
	if(__CURRENT_PAGE != 1)
		showPage(--__CURRENT_PAGE);
});

// Add Slide and then show next page of the PDF
$("#pdf-add").on('click', function() {
  var arr_img = vDataJSON.files.image;
  var slide_index = arr_img.length || 0;
  var img_data_url = $("#pdf-canvas").get(0).toDataURL("img/png");
  var vFilename = $("#tImageBaseName").val() + slide_index + ".png";
	var data = {
						"name": vFilename,
						"file": data_url2base64(img_data_url),
						"mime_type": "image/png",
						"tag": create_image_thumb_tag(file2image,vFilename,img_data_url)
					};
  // file2image is the LoadFile4DOM loader for images defined in index.html
	console.log("CALL: add PDF image.onclick('" + data.name + "')");
	var vNode = document.getElementById("outimage");
	if (vNode) {
		//console.log("CALL: file2image.onload('" + data.name + "'): "+JSON.stringify(data,null,4));
		var arr_img = vDataJSON.files.image;
		vNode.innerHTML = vNode.innerHTML + "<li>Slide " + slide_index + ": <tt>" + data.name + "</tt><br>" + data.tag + "</li>";
		arr_img.push(data);
		//zip.file(data.name, data.file, {base64: true})
		setSlideCount();
	} else {
		console.error("ERROR: DOM Element 'outimage' does not exist!");
	}
	if(__CURRENT_PAGE != __TOTAL_PAGES) {
    showPage(++__CURRENT_PAGE);
  } else {
    alert("Last Slide added!");
  }
});
// close PDF slide view
$("#pdf-close").on('click', function() {

});
// Next page of the PDF
$("#pdf-next").on('click', function() {
	if(__CURRENT_PAGE != __TOTAL_PAGES)
		showPage(++__CURRENT_PAGE);
});

// Download button
$("#download-pdf-slide").on('click', function() {
  console.log("Pressed download-pdf-slide");
	$("#download-image").attr('href', __CANVAS.toDataURL()).attr('download', 'slide'+(__CURRENT_PAGE-1)+'.png');
});
$("#download-image").on('click', function() {
	$(this).attr('href', __CANVAS.toDataURL()).attr('download', 'slide'+(__CURRENT_PAGE-1)+'.png');
});
