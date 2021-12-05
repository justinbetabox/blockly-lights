import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['neopixels_import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import neopixels");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python['neopixels_import'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import board\nimport neopixels\n';
  return code;
};
