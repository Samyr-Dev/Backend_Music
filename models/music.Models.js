const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  singer: {
    type: String,
    required: true
  },
  song: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    enum: ['Pop', 'Rock', 'Hip-Hop', 'Jazz', 'Classical', 'Other'],
    required: true
  },
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

// Criação de Índice composto para garantir que a combinação de cantor e música seja única.
musicSchema.index({ singer: 1, song: 1 }, { unique: true });

const Music = mongoose.model('Music', musicSchema);
module.exports = Music;
