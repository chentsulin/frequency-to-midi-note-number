'use strict';

module.exports = function frequencyToMidiNoteNumber(frequency) {
  return Math.round(69 + 12 * Math.log2(frequency / 440));
};
