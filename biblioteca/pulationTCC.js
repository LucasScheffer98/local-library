#! /usr/bin/env node

console.log(
  'This script populates some test games to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Jogo = require("./models/jogo");

const jogo = [];


const mongoose = require("mongoose");

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createjogo();
  console.log("Debug: Closing mongoose");
  await mongoose.connection.close();
}

async function jogoCreate(index, titulo, autor, ano) {
  const jogodetail = {
    title,
    summary,
    author,
    isbn,
  };
  if (genre != false) jogodetail.genre = genre;

  const jogo = new Jogo(Jogodetail);
  await jogo.save();
  Jogos[index] = Jogo;
  console.log(`Added Jogo: ${title}`);
}

async function createJogos() {
  console.log("Adding Jogos");
  await Promise.all([
    JogoCreate(
      0,
      "The Name of the Wind (The Kingkiller Chronicle, #1)",
      "I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep.",
      "9781473211896",
    ),
    JogoCreate(
      1,
      "The Wise Man's Fear (The Kingkiller Chronicle, #2)",
      "Picking up the tale of Kvothe Kingkiller once again, we follow him into exile, into political intrigue, courtship, adventure, love and magic... and further along the path that has turned Kvothe, the mightiest magician of his age, a legend in his own time, into Kote, the unassuming pub landlord.",
      "9788401352836",

    ),
    JogoCreate(
      2,
      "The Slow Regard of Silent Things (Kingkiller Chronicle)",
      "Deep below the University, there is a dark place. Few people know of it: a broken web of ancient passageways and abandoned rooms. A young woman lives there, tucked among the sprawling tunnels of the Underthing, snug in the heart of this forgotten place.",
      "9780756411336",
    ),
    JogoCreate(
      3,
      "Apes and Angels",
      "Humankind headed out to the stars not for conquest, nor exploration, nor even for curiosity. Humans went to the stars in a desperate crusade to save intelligent life wherever they found it. A wave of death is spreading through the Milky Way galaxy, an expanding sphere of lethal gamma ...",
      "9780765379528",
    ),
    JogoCreate(
      4,
      "Death Wave",
      "In Ben Bova's previous novel New Earth, Jordan Kell led the first human mission beyond the solar system. They discovered the ruins of an ancient alien civilization. But one alien AI survived, and it revealed to Jordan Kell that an explosion in the black hole at the heart of the Milky Way galaxy has created a wave of deadly radiation, expanding out from the core toward Earth. Unless the human race acts to save itself, all life on Earth will be wiped out...",
      "9780765379504",
    
    ),
    JogoCreate(
      5,
      "Test Jogo 1",
      "Summary of test Jogo 1",
      "ISBN111111",
    ),
    JogoCreate(
      6,
      "Test Jogo 2",
      "Summary of test Jogo 2",
      "ISBN222222",
      false
    ),
  ]);
}

async function createJogoInstances() {
  console.log("Adding authors");
  await Promise.all([
    JogoInstanceCreate(
      0,
      Jogos[0],
      "London Gollancz, 2014.",
      false,
      "Available"
    ),
    JogoInstanceCreate(1, Jogos[1], " Gollancz, 2011.", false, "Loaned"),
    JogoInstanceCreate(2, Jogos[2], " Gollancz, 2015.", false, false),
    JogoInstanceCreate(
      3,
      Jogos[3],
      "New York Tom Doherty Associates, 2016.",
      false,
      "Available"
    ),
    JogoInstanceCreate(
      4,
      Jogos[3],
      "New York Tom Doherty Associates, 2016.",
      false,
      "Available"
    ),
    JogoInstanceCreate(
      5,
      Jogos[3],
      "New York Tom Doherty Associates, 2016.",
      false,
      "Available"
    ),
    JogoInstanceCreate(
      6,
      Jogos[4],
      "New York, NY Tom Doherty Associates, LLC, 2015.",
      false,
      "Available"
    ),
    JogoInstanceCreate(
      7,
      Jogos[4],
      "New York, NY Tom Doherty Associates, LLC, 2015.",
      false,
      "Maintenance"
    ),
    JogoInstanceCreate(
      8,
      Jogos[4],
      "New York, NY Tom Doherty Associates, LLC, 2015.",
      false,
      "Loaned"
    ),
    JogoInstanceCreate(9, Jogos[0], "Imprint XXX2", false, false),
    JogoInstanceCreate(10, Jogos[1], "Imprint XXX3", false, false),
  ]);
}