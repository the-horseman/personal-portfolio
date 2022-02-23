function drk_mod() {
    let drk = document.getElementById('drk-mde');
    let lte = document.getElementById('lte-mde');
    let id1 = document.getElementById("qual-head");
    let id2 = document.getElementById("Xth");
    let id3 = document.getElementById("XIIth");
    let id4 = document.getElementById("clg");
    let id5 = document.getElementById("rsme");
    let id6 = document.getElementById("skll-head");
    let id7 = document.getElementById("lang");
    let id8 = document.getElementById("lang-name");
    let id9 = document.getElementById("tool");
    let id10 = document.getElementById("tool-name");
    let id11 = document.getElementById("bdy");
    let id12 = document.getElementById("htl");
    let id13 = document.getElementById("pro-head");
    let id14 = document.getElementById("hnd-head");
    let id15 = document.getElementById("hnd-det");
    let id16 = document.getElementById("voc-head");
    let id17 = document.getElementById("voc-det");
    let id18 = document.getElementById("dat-head");
    let id19 = document.getElementById("dat-det");
    let id20 = document.getElementById("and-head");
    let id21 = document.getElementById("and-det");
    let id22 = document.getElementById("wrk-ex");
    let id23 = document.getElementById("ongc");
    let id24 = document.getElementById("ongc-wrk");
    let id25 = document.getElementById("org");
    let id26 = document.getElementById("org-wrk");
    let id27 = document.getElementById("cont-head");


    drk.style.display = "none";
    lte.style.display = "block";
    id1.style.color = "#f0d5ff";
    id2.style.color = "white";
    id3.style.color = "white";
    id4.style.color = "white";
    id5.style.color = "#190126";
    id5.style.backgroundColor = "#f0d5ff";
    id6.style.color = "#f0d5ff";
    id7.style.color = "#f0d5ff";
    id8.style.color = "white";
    id9.style.color = "#f0d5ff";
    id10.style.color = "white";
    id11.style.backgroundColor = "#190126";
    id12.style.backgroundColor = "#190126";
    id13.style.color = "#f0d5ff";
    id14.style.color = "#f0d5ff";
    id15.style.color = "white";
    id16.style.color = "#f0d5ff"
    id17.style.color = "white";
    id18.style.color = "#f0d5ff";
    id19.style.color = "white";
    id20.style.color = "#f0d5ff";
    id21.style.color = "white";
    id22.style.color = "#f0d5ff";
    id23.style.color = "#f0d5ff";
    id24.style.color = "white";
    id25.style.color = "#f0d5ff";
    id26.style.color = "white";
    id27.style.color = "#f0d5ff";
}

function lte_mod() {
    let drk = document.getElementById('drk-mde');
    let lte = document.getElementById('lte-mde');
    let id1 = document.getElementById("qual-head");
    let id2 = document.getElementById("Xth");
    let id3 = document.getElementById("XIIth");
    let id4 = document.getElementById("clg");
    let id5 = document.getElementById("rsme");
    let id6 = document.getElementById("skll-head");
    let id7 = document.getElementById("lang");
    let id8 = document.getElementById("lang-name");
    let id9 = document.getElementById("tool");
    let id10 = document.getElementById("tool-name");
    let id11 = document.getElementById("bdy");
    let id12 = document.getElementById("htl");
    let id13 = document.getElementById("pro-head");
    let id14 = document.getElementById("hnd-head");
    let id15 = document.getElementById("hnd-det");
    let id16 = document.getElementById("voc-head");
    let id17 = document.getElementById("voc-det");
    let id18 = document.getElementById("dat-head");
    let id19 = document.getElementById("dat-det");
    let id20 = document.getElementById("and-head");
    let id21 = document.getElementById("and-det");
    let id22 = document.getElementById("wrk-ex");
    let id23 = document.getElementById("ongc");
    let id24 = document.getElementById("ongc-wrk");
    let id25 = document.getElementById("org");
    let id26 = document.getElementById("org-wrk");
    let id27 = document.getElementById("cont-head");


    drk.style.display = "block";
    lte.style.display = "none";
    id1.style.color = "#77349b";
    id2.style.color = "black";
    id3.style.color = "black";
    id4.style.color = "black";
    id5.style.color = "#fdfefd";
    id5.style.backgroundColor = "#77349b";
    id6.style.color = "#77349b";
    id7.style.color = "#77349b";
    id8.style.color = "black";
    id9.style.color = "#77349b";
    id10.style.color = "black";
    id11.style.backgroundColor = "#fdfefd";
    id12.style.backgroundColor = "#fdfefd";
    id13.style.color = "#77349b";
    id14.style.color = "#77349b";
    id15.style.color = "black";
    id16.style.color = "#77349b"
    id17.style.color = "black";
    id18.style.color = "#77349b";
    id19.style.color = "black";
    id20.style.color = "#77349b";
    id21.style.color = "black";
    id22.style.color = "#77349b";
    id23.style.color = "#77349b";
    id24.style.color = "black";
    id25.style.color = "#77349b";
    id26.style.color = "black";
    id27.style.color = "#77349b";
}


function cnt_me() {
    let dat = $("form").serializeArray();
    console.log(dat[0]["value"]);
    console.log(dat[1]["value"]);
    console.log(dat[2]["value"]);

    Email.send({
        Host: "smtp.gmail.com",
        Username: "contactmemail2002@gmail.com",
        Password: "contactme123",
        To: 'aryanrishi20@gmail.com',
        From: "contactmemail2002@gmail.com",
        Subject: "Contact Me Form",
        Body: "Name => " + dat[0]["value"] + "   Email => " + dat[1]["value"] + "   Message => " + dat[2]["value"],
    }).then(
        message => alert(message)
    );
}