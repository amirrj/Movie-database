
function search(){
    
    document.getElementById('id01').style.display='block'

    var xhr = new XMLHttpRequest();


    var type = document.getElementById('type').value;
    var genre = document.getElementById('genre').value;
    var year = document.getElementById('year').value;
    
    var movieURL = "https://api.themoviedb.org/3/discover/movie?year="+year+"&with_genres="+genre+"&page="+Math.floor((Math.random()*8)+1)+"&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=521b74ece859b5d1881f8a2788a772ff";
    
    var seriesURL = "https://api.themoviedb.org/3/discover/tv?api_key=521b74ece859b5d1881f8a2788a772ff&language=en-US&sort_by=popularity.desc&first_air_date_year="+year+"&page=1&timezone=America%2FNew_York&with_genres="+genre+"&include_null_first_air_dates=false";
    

    xhr.onload = function(){
        if(xhr.status === 200){
            var response = JSON.parse(xhr.responseText);
           
            
            var resultsLength = response.results.length;
            var randomResult = Math.floor(Math.random()*resultsLength);
           
            
            document.getElementById('moviePoster').setAttribute('src', 'http://image.tmdb.org/t/p/w185/' + response.results[randomResult].poster_path );
            
            if(type === "Movie"){
            document.getElementById('movieTitle').innerHTML = response.results[randomResult].title;
            }else{
                document.getElementById('movieTitle').innerHTML = response.results[randomResult].name;
            }
            
            document.getElementById('movieRating').innerHTML = "Average Rating(" + response.results[randomResult].vote_count + " votes) <br> " + response.results[randomResult].vote_average +" / 10.0"
            
            document.getElementById('moviePlot').innerHTML = response.results[randomResult].overview;
            
            
            
            
            var pages = response.total_pages;
            var randomPage = Math.floor((Math.random()* pages)+1);
            
            
            
        }
    }
    
    if(type === "Movie"){
        xhr.open("GET", movieURL);
    }else{
        xhr.open("GET", seriesURL);
    }

    xhr.send();
    
    
    
    
    // Get the modal
var modal = document.getElementById('id01');


    
};




// large screen search 


function largeSearch(){
    
    
    
    $('.imgcontainer').css('display', 'block');
    $('#largePlotTitle').css('display', 'block');
    

    var xhr = new XMLHttpRequest();


    var type = document.getElementById('type').value;
    var genre = document.getElementById('genre').value;
    var year = document.getElementById('year').value;
    
    var movieURL = "https://api.themoviedb.org/3/discover/movie?year="+year+"&with_genres="+genre+"&page="+Math.floor((Math.random()*8)+1)+"&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=521b74ece859b5d1881f8a2788a772ff";
    
    var seriesURL = "https://api.themoviedb.org/3/discover/tv?api_key=521b74ece859b5d1881f8a2788a772ff&language=en-US&sort_by=popularity.desc&first_air_date_year="+year+"&page=1&timezone=America%2FNew_York&with_genres="+genre+"&include_null_first_air_dates=false";
    

    xhr.onload = function(){
        if(xhr.status === 200){
            var response = JSON.parse(xhr.responseText);
            
            
            var resultsLength = response.results.length;
            var randomResult = Math.floor(Math.random()*resultsLength);
            
            
            document.getElementById('largeMoviePoster').setAttribute('src', 'http://image.tmdb.org/t/p/w185/' + response.results[randomResult].poster_path );
            
            if(type === "Movie"){
            document.getElementById('largeMovieTitle').innerHTML = response.results[randomResult].title;
            }else{
                document.getElementById('largeMovieTitle').innerHTML = response.results[randomResult].name;
            }
            
            document.getElementById('largeMovieRating').innerHTML = "Average Rating(" + response.results[randomResult].vote_count + " votes) <br> " + response.results[randomResult].vote_average +" / 10.0"
            
            document.getElementById('largeMoviePlot').innerHTML = response.results[randomResult].overview;
            
            
            
            
            var pages = response.total_pages;
            var randomPage = Math.floor((Math.random()* pages)+1);
            
            
            
        }
    }
    
    if(type === "Movie"){
        xhr.open("GET", movieURL);
    }else{
        xhr.open("GET", seriesURL);
    }

    xhr.send();
    
    



    
};

