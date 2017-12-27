// FILM Object
// =======================================
// Code snippet that switch with a button the object film content into a container

// ============================================

// this is the object for films
let film = {
  // here there's the init function to take the variables from the global variables from the button
    init: function(title,rate,date,time){
      this.title = title;
      this.rate  = rate;
      this.date  = date;
      this.time  = time;
      },
      // The description takes the variables from the init function
    description:function(){
      // Description variable will show a description of the film
      let description = `${this.title} has an rate of ${this.rate} and will be shown on ${this.date} at ${this.time}`;
      // Remember ever to return the variable
    return description;
    }

};
// ==========================================


// Jquery selector to button iteration
$('.info-button').on('click', function(){
        // First lets create a new object
        let movie= Object.create(film),

        // take variables from the button with data-*
        // Use the jquery data()  to take the data-* attributes on the button itself
          button = $(this),
          title = button.data('title'),
          rate = button.data('rate'),
          date = button.data('date'),
          time = button.data('time');

        // this init the object givin the button variables
        movie.init(title,rate,date,time);

        // Commented lines below just to test the object
        // console.log(movie.title);
        // console.log(movie.description());
        // ==============================================
        let rateMovie = movie.rate;
      // The .movie-desc class is the container for the description of the object film
       $(this).siblings('.movie-desc')
       // the empty() reset the container and prevent the append replication with another click event
      .empty()
      .addClass(rateMovie)
      .addClass('text-white font-italic lead text-center text-uppercase shadow-text mt-5 py-5 px-3')
      .append(movie.description())
      ;
      $(this).parent('.overlay').mouseleave(function(){
        $(this).children('.movie-desc')
        .removeClass(rateMovie)
        .empty();
      });
});
