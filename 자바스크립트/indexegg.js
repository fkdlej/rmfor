$(document).ready(function () {
  var search = $(location).attr('search').substr(1)
  switch (search) {
    case 'rmfor':
      typing('Are the search results gray? Is Greg really what you want?')
      break;
    case 'eft':
      typing('My attack effect is splendor itself.')
      break;
    case 'wjr':
      typing('I am the one who beats you do you understand wjr')
      break;
    case 'kr':
      typing('my god is korean No problem. Do you understand')
      break;
    case 'impossible':
      typing('They are skills that are not worth leveling up and have no effect, just attacking. Do you understand')
      break;
    case 'Greg_Sword':
      typing('It is the only skill God gave me. No one can know the power this sword possesses. do you know why This time, I m curious and ask.')
      break;
    case 'search':
      typing('Aren t you doing a search ? As far as I know, if you see this article now, you did a search.Therefore, you do not have to search for a search.')
      break;
    case 'Greg':
      typing('나의 영어 이름을 알았는가. 좋다. 너는 한국인이 아닌 것이다. 아 이게 왜 한국어라 물었는가. 그것에 대한 답은... Because my god is Korean. 알겠는가? Do you understand')
      break;
    case '42':
      typing("The answer to everything... is 42. no it's true")
      break;
    case 'Kamen%20Rider':
      $(".dialog>ul").append("<li onclick='typing($(this).text());'>" + '1, Kuuga, Agito, Ryuyuki, 555, Blade, Hibiki, Kabuto, Den - O, Kiba, Decade, Double, OOO, Fourze, Wizard, Drive, Gaim, Ghost, Ex - Aid, Build, Geo, Zero - One, Saber, Levis, Gitz...and Code' + "</li>")
      $('address.eft').toggleClass('off');
      break;
    default:
      typing('The game has already begun.')
      break;
  }
  var egg = $('#egg');
  $(egg).keydown(function (e) {
    if (e.keyCode == 13) {
      switch ($(egg).val()) {
        case '1004':
          typing("i am an angel")
          break;
        case 'hacking':
          rmfor_hp = 2048;
          wjr_hp = -2480;
          setTimeout(() => {
            hp_fun();
            alert('If hacked, you need to reset the server. Do you understand')
            location.reload(true)
          }, 2048);
          break;
        case '3000':
          typing("I will say that I love you as much as max (3000).")
          break;
        case 'rmfor':
          typing("yes i am greg How did you find out about this egg? answer me")
          break;
        case 'effort':
          typing("Those who give up also try hard and give up because it just doesn't work. Don't ignore giving up.")
          break;
        case 'canvas':
          typing("Draw whatever you want on that blank screen. That will be one of the ways you grow.")
          break;
        case 'chat gpt':
          typing("Not yet. It's still a long way from having power equal to mine. Ask more questions and find more answers. then you will grow Do you understand")
          break;
        case 'html': case 'css': case 'JavaScript': case 'jQuery':
          typing("You don't have to jump over the invisible wall and take the red pill. It would be better to just stay still. Did you ask for a warning? The answer to that question is true.")
          break;
        case 'q': case 'Q':
          typing("Behold my queenly power.")
          break;
        case 'w': case 'W':
          typing("The game for these wonderful players has already begun.")
          break;
        case 'e': case 'E':
          typing("Do you know where our energy comes from? The answer to that is 'truth'.")
          break;
        case 'r': case 'R':
          typing("If you want to beat random numbers, go for integers. Do you understand")
          break;
        case 'life':
          typing("what is life Aren't you curious Even if you answer no, I'm interested.")
          break;
        case 'Smartphone':
          typing("I will define it as the beginning of a new era, the destruction of mankind. With this, growth stopped, and with this, mankind's body was transformed.")
          break;
        case 'computer':
          typing("see the new era That's the answer. Do you understand")
          break;
        default:
          typing('did you find the secret')
          break;
      }
      $(egg).val('');
    }
  });
});