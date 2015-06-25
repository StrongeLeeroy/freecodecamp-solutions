var quoteCollection = [
	{quote: 'Man - a being in search of meaning.', author: 'Plato'},
	{quote: 'Space is the breath of art.', author: 'Frank Lloyd Wright'},
	{quote: 'If you have one good idea, people will lend you twenty.', author: 'Marie von Ebner-Eschenbach'},
	{quote: 'I am always ready to learn although I do not always like being taught.', author: 'Winston Churchill'},
	{quote: 'Work out your own salvation. Do not depend on others.', author: 'Buddha'},
	{quote: 'Always live in the ugliest house on the street - then you don\'t have to look at it.', author: 'David Hockney'},
	{quote: 'Never lend your car to anyone to whom you have given birth.', author: 'Erma Bombeck'},
	{quote: 'Don\'t cry because it\'s over, smile because it happened.', author: 'Dr. Seuss'},
	{quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.', author: 'Albert Einstein'},
	{quote: 'Be the change that you wish to see in the world.', author: 'Mahatma Gandhi'},
	{quote: 'If you tell the truth, you don\'t have to remember anything.', author: 'Mark Twain'},
	{quote: 'Always forgive your enemies; nothing annoys them so much.', author: 'Oscar Wilde'},
	{quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.', author: 'Mahatma Gandhi'},
	{quote: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.", author: 'Apple Inc.'},
	{quote: 'Without music, life would be a mistake.', author: 'Friedrich Nietzsche'}
];

$(document).ready(function(){
	printQuote();

	$('.new-quote').click(function(){
		printQuote();
	});
});

function chooseRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function printQuote(){
	var randomQuote = chooseRandom(0, quoteCollection.length - 1);
  var tweetText = truncateQuote(quoteCollection[randomQuote].quote) + ' (by ' + quoteCollection[randomQuote].author + ')';
  console.log(tweetText);
	$('.quote').text(quoteCollection[randomQuote].quote);
	$('.author').text('-' + quoteCollection[randomQuote].author);
  $('.twitter-share-button').attr('data-text', tweetText);
  
    $('iframe').remove();
    var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-url', 'http://www.gorkahernandez.com')
        .attr('data-text', tweetText);
    $('#tweetBtn').append(tweetBtn);
    twttr.widgets.load();
}

function truncateQuote(quote){
  if (quote.length > 80){
    return quote.substr(0, 80).trim() + '...';
  } else {
    return quote;
  }
}