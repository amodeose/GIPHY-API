var myKey = 'ErmCBDJeH1Y9gC5ABMtCzMz9DTxnEWHn';

var topics = ['cat', 'dog', 'cow', 'turtle', 'chicken', 'bird', 'lizard'];

for (let i = 0; i < topics.length; i++) {
    $('div').append($('<button>').text(topics[i]));
}