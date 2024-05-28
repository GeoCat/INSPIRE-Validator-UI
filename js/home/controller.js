// Show/Hide Beta banner
if (betaBanner == true) {
	$("#betaBanner").show();
} else {
	$("#betaBanner").hide();
}

//Show STAGING label
if (labelStaging == true) {
	$(document).prop('title', "[STAGING] " + $(document).prop('title'));
}

//Show version label if exists
if (validatorVersionLabel !== null && validatorVersionLabel !== undefined) {

	// Create a comment with the version label
	var commentNode = document.createComment('Validator version: ' + validatorVersionLabel);

	// Insert the comment node right at the start of the head
	document.head.insertBefore(commentNode, document.head.firstChild);
}