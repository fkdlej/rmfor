var rmfor_hp;
var wjr_hp;
var game_poit = 0;
var coin_poit = Math.floor(Math.random() * 12);
var extra_attack = 0;
var extra_life = 0;
var rmfor_lv = 1;
wjr_hp = (Math.floor(Math.random() * 64) + 64) * 2;
rmfor_hp = (Math.floor(Math.random() * 64) + 64) * 2 + extra_life * 16;
var skin_var = "";
var skin_var_rmfor = "";
var attack_click = 0;
var mosx = 0;
var mosy = 0;
function click_hover_text(text_var) {
  var text_hover_item = $("span.hover");
  $(text_hover_item).text(text_var);
  $(text_hover_item).addClass("off");
  $(text_hover_item).removeClass("off");
  $(text_hover_item).css("top", mosy + "px");
  $(text_hover_item).css("left", mosx + "px");
}

function default_function_skill(x, y) {
  wjr_hp -= x * (rmfor_lv / 2);
  rmfor_hp += y * (rmfor_lv / 2);
}

function typing(text) {
  var txt = text.split("");
  $(".Game_screen>h1").text("");
  for (let x = 0; x < txt.length; x++) {
    setTimeout(() => {
      $(".Game_screen>h1").append(txt[x]);
    }, 100 * x);
  }
}
function skin(params) {
  switch (Math.floor(Math.random() * 4)) {
    case 1:
      return "2";
      break;
    case 2:
      return "아이";
      break;
    case 3:
      return "광기";
      break;
    default:
      return "";
      break;
  }
}
function poit_fun(params) {
  $(".growth_span").text(game_poit);
  $(".growth_life_span").text(extra_life);
  $(".growth_attack_span").text(extra_attack);
  if (game_poit === 0) {
    $(".Game_screen").removeClass("off");
    $(".growth_screen").addClass("off");
  }
}
function shopping_fun(poit, skin_name) {
  coin_poit -= poit;
  skin_var_rmfor = skin_name;
  if (coin_poit <= 0) {
    rmfor_hp -= 2;
  }
  $(".shopping_span").text(coin_poit);
  var items = $("div.item");
  $(items).addClass("off");
  var onitem = items[Math.floor(Math.random() * items.length)];
  $(onitem).removeClass("off");
}
function hp_fun() {
  if (wjr_hp <= 0) {
    alert("Do you know that the enemy is dead?");
    skin_var = skin();
    game_poit += 1;
    coin_poit += Math.floor(Math.random() * 12);
    rmfor_lv++;
    $("img#wjr").attr(
      "src",
      "이미지/캐릭터/적" + skin_var + "-file/적_죽음.gif"
    );
    $(".Interaction").css("pointer-events", "none");
    setTimeout(() => {
      $(".Game_screen").addClass("off");
      $(".growth_screen").removeClass("off");
      poit_fun();
      wjr_hp = (Math.floor(Math.random() * 64) + 64 * rmfor_lv) * 2;
      $("img#wjr").attr("src", "이미지/캐릭터/적" + skin_var + "-file/적.gif");
      $(".Interaction").css("pointer-events", "all");
    }, 1000);
  }
  if (rmfor_hp <= 0) {
    alert("Should I admit that I am dead?");
    $("img#rmfor").attr(
      "src",
      "이미지/캐릭터/그랙" + skin_var_rmfor + "-file/그랙_죽음.gif"
    );
    $(".Interaction").css("pointer-events", "none");
    setTimeout(() => {
      rmfor_lv -= 1;
      coin_poit -= Math.floor(Math.random() * 12);
      rmfor_hp = (Math.floor(Math.random() * 64) + 64) * 2 + extra_life * 16;
      $("img#rmfor").attr(
        "src",
        "이미지/캐릭터/그랙" + skin_var_rmfor + "-file/그랙.gif"
      );
      $(".Interaction").css("pointer-events", "all");
    }, 1000);
  }
}
function texts(my, codes) {
  if ($(my).data("lv") <= 7) {
    $(my).data("lv", $(my).data("lv") + 1);
    $(my)
      .find("p")
      .text("lv : " + $(my).data("lv"));
  } else {
    $(my).remove();
  }
  $(my).data("click", $(my).data("click") + 1);
  switch ($(my).data("click")) {
    case 1:
      $(".dialog>ul").append(
        "<li onclick='typing($(this).text());'>" + codes[0] + "</li>"
      );
      break;
    case 2:
      $(".dialog>ul").append(
        "<li onclick='typing($(this).text());'>" + codes[1] + "</li>"
      );
      break;
    case 3:
      $(".dialog>ul").append(
        "<li onclick='typing($(this).text());'>" + codes[2] + "</li>"
      );
      break;
    case 4:
      $(".dialog>ul").append(
        "<li onclick='typing($(this).text());'>" + codes[3] + "</li>"
      );
      break;
    case 5:
      $(".dialog>ul").append(
        "<li onclick='typing($(this).text());'>" + codes[4] + "</li>"
      );
      break;
    case 6:
      $(".dialog>ul").append(
        "<li onclick='typing($(this).text());'>" + codes[5] + "</li>"
      );
      break;
    case 7:
      $(".dialog>ul").append(
        "<li onclick='typing($(this).text());'>" + codes[6] + "</li>"
      );
      break;

    default:
      break;
  }
}

$(document).ready(function () {
  $(document).mousemove(function (e) {
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    mosx = e.pageX;
    mosy = e.pageY;
  });
  setInterval(() => {
    $("li.rmfor_hp").text("rmfor : " + rmfor_hp);
    $("li.wjr_hp").text("wjr : " + wjr_hp);
  }, 10);
  $("li.rmfor_hp").text("rmfor : " + rmfor_hp);
  $("li.wjr_hp").text("wjr : " + wjr_hp);
  $("address.eft li").click(function (e) {
    $(".Game_screen>h1").click(function (e) {
      $(".Game_screen>h1").html("O w <span style='color: red;'>O</span>");
    });
    wjr_hp -= extra_attack * 2;
    $("li.rmfor_hp").text("rmfor : " + rmfor_hp);
    $("li.wjr_hp").text("wjr : " + wjr_hp);
    typing($(this).find("h1").text());
    $("img#eft").attr(
      "src",
      $(this).find("img").attr("src") + "?number=" + Math.random() * 256
    );
    $("img#wjr").attr(
      "src",
      "이미지/캐릭터/적" + skin_var + "-file/적_데미지.gif"
    );
    $("img#rmfor").attr(
      "src",
      "이미지/캐릭터/그랙" + skin_var_rmfor + "-file/그랙_공격.gif"
    );
    $("address.eft").toggleClass("off");
    setTimeout(() => {
      $("img#wjr").attr(
        "src",
        "이미지/캐릭터/적" + skin_var + "-file/적_공격.gif"
      );
      $("img#rmfor").attr(
        "src",
        "이미지/캐릭터/그랙" + skin_var_rmfor + "-file/그랙_데미지.gif"
      );
      setTimeout(() => {
        $("img#wjr").attr(
          "src",
          "이미지/캐릭터/적" + skin_var + "-file/적.gif"
        );
        $("img#rmfor").attr(
          "src",
          "이미지/캐릭터/그랙" + skin_var_rmfor + "-file/그랙.gif"
        );
      }, 1000);
      rmfor_hp -= Math.floor(Math.random() * 4) * rmfor_lv;
      wjr_hp += Math.floor(Math.random() * 4) * rmfor_lv;
      $("li.rmfor_hp").text("rmfor : " + rmfor_hp);
      $("li.wjr_hp").text("wjr : " + wjr_hp);
      $(".button_attack").css("pointer-events", "all");
      hp_fun();
    }, 1000);
  });
});
