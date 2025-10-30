// Exposes nextChunk() to the window so inline onclick handlers (in passages) can call it.
window.nextChunk = function() {
	try {
		var chunks = State.variables.textChunks;
		var current = State.variables.currentChunk;

		if (!Array.isArray(chunks)) return;

		if (typeof current !== 'number') {
			State.variables.currentChunk = 0;
			current = 0;
		}

		if (current < chunks.length - 1) {
			State.variables.currentChunk++;
			$('#text-display').text(chunks[State.variables.currentChunk]);
		} else {
			// All chunks shown, show link if present
			$('#dialogue-box').addClass('finished');
			$('#next-link').show();
		}
	} catch (e) {
		// silent fail — prevents script errors breaking the story
		console.error('nextChunk error', e);
	}
};
