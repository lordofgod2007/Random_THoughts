function kabir() {
    var a = ["Games don't make you violent, lag does.",
        "I'm not a player. I'm a gamer. Players get chicks. I get achievements.",
        "Failure doesn't mean the game is over, it means try again with experience.",
        "I'm the hero of a thousand stories. I'm a superhero, an assassin a soldier. I've slain dragons and traveled through portals. I am a spartan, a commander. A king. I've saved a thousand worlds and countless more lives. What am I? I'm a gamer.",
        "I don't need to get a life. I'm a gamer I have lots of lives.",
        "Home is where you are 'Player 1'.",
        "I'm a gamer. Not because I don't have a life. But because I choose to have man",
        " I don't have birthdays. I level up!",

        " I don't know how to play video games casually. I'm either not interested at all or I play 16 hours and forget to eat.",
        "If someone pauses their game just to text you back, marry them.",
        " Education is important, but video games are importanter.",
        " Tips on how to talk to someone while they're gaming: Don't.",
        " I chose to be a gamer because nothing epic ever happens in real life.",
        "That moment when you finish a game and just don't know what to do with your life anymore.",
        " 5:00AM the hour when the legends are either waking up or going to sleep.",
        " Eat. Sleep. Game. Repeat.",
        "What doesn't kill me, gives me EXP.",
        " Keep calm and game on.",
        "I have a dream. That one day, my mom will understand that online games cannot be paused.",
        "If people were influenced by video games, then majority of Facebook users would be farmers by now.",
        " Keep calm and blame it on the lag.",
        " I am sorry for what I said, when I was playing video games."]


    var quotes =  Math.floor(Math.random()*a.length);
        document.getElementById("p1").innerHTML = a[[quotes]];
}