'use strict';
// Constants
const quotes = [
  {
    author: 'Eric S. Raymond',
    quote:
      'Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painte',
  },
  {
    author: 'Mosher',
    quote:
      'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.',
  },
  {
    author: 'Linus Torvalds',
    quote: 'Talk is cheap. Show me the code.',
  },
  {
    author: 'Antoine de Saint-Exupery',
    quote:
      'Perfection [in design] is achieved, not when there is nothing more to add, but when there is nothing left to take away.',
  },
  {
    author: 'Yoggi Berra',
    quote:
      'In theory, theory and practice are the same. In practice, they’re not.',
  },
  {
    author: 'Tom DeMarco',
    quote:
      'Computer system analysis is like child-rearing; you can do grievous damage, but you cannot ensure success.',
  },
  {
    author: 'Rick Cook',
    quote:
      'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to build bigger and better idiots. So far, the universe is winning.',
  },
  {
    author: 'Edward V Berard',
    quote:
      'Walking on water and developing software from a specification are easy if both are frozen.',
  },
  {
    author: 'Alan J. Perlis',
    quote:
      'When someone says: ‘I want a programming language in which I need only say what I wish done’, give him a lollipop.',
  },
  {
    author: 'Ted Nelson',
    quote:
      'Learning to program has no more to do with designing interactive software than learning to touch type has to do with writing poetry.',
  },
];

const quote = document.querySelector('.quote');

// Functions
function selectQuote() {
  const num = Math.floor(Math.random() * quotes.length);
  quote.innerText = `${quotes[num].quote} - ${quotes[num].author} - `;
}
// Main
selectQuote();
