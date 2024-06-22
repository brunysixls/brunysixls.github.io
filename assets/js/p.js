const texts = [
      "Now With Lexend!",
      "100x Better UI!!!",
      "Also Try DannyBredLessons",
      "Also Try 60%Glasses!",
      "Still Active During Summer!",
      "Hi Im Baldi Nice To Meet Ya!",
      "Now Better Then Frogies Arcade",
      "Wsg Fat Ass -Frogiee1",
      "If You Give Me A Cease And Desist It Will Be BrunysEXCEL"
    ];


    const randomIndex = Math.floor(Math.random() * texts.length);


    const paragraph = document.getElementById('dynamic-text');


    paragraph.textContent = texts[randomIndex];
