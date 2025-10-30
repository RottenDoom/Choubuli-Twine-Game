// Macro to set background
Macro.add('setbg', {
  handler: function() {
    var bgUrl = this.args[0];
    var bgWindow = $('#bg-window');
    
    if (bgWindow.length === 0) {
      // Create bg-window if it doesn't exist
      $('#passages').prepend('<div id="bg-window"><img src="' + bgUrl + '" alt="Background"></div>');
    } else {
      bgWindow.find('img').attr('src', bgUrl);
    }
  }
});

// Macro to set character sprite
Macro.add('setsprite', {
  handler: function() {
    var spriteUrl = this.args[0];
    var spriteContainer = $('#sprite-container');
    
    if (spriteContainer.length === 0) {
      $('#bg-window').after('<div id="sprite-container"></div>');
      spriteContainer = $('#sprite-container');
    }
    
    if (spriteUrl === 'none' || spriteUrl === '') {
      spriteContainer.html('');
    } else {
      spriteContainer.html('<img src="' + spriteUrl + '" class="character-sprite speaking" alt="Character">');
    }
  }
});

// Macro to create dialogue box wrapper
Macro.add('dialogue', {
  tags: ['name', 'text'],
  handler: function() {
    var characterName = this.payload[0].contents;
    var dialogueText = this.payload[1].contents;
    
    var output = '<div id="dialogue-box">';
    output += '<div class="character-name">' + characterName + '</div>';
    output += dialogueText;
    output += '</div>';
    
    $(this.output).wiki(output);
  }
});

// Macro for clickable hotspots
Macro.add('hotspot', {
  handler: function() {
    var x = this.args[0];
    var y = this.args[1];
    var width = this.args[2];
    var height = this.args[3];
    var passage = this.args[4];
    
    var hotspot = $('<div class="hotspot"></div>');
    hotspot.css({
      left: x + 'px',
      top: y + 'px',
      width: width + 'px',
      height: height + 'px'
    });
    
    hotspot.on('click', function() {
      Engine.play(passage);
    });
    
    $('#bg-window').append(hotspot);
  }
});