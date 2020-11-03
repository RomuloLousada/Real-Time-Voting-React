const express = require("express");
var cors = require("cors");

const app = express();

app.use(cors());

let candidates = [];
let intervalVotes = null;
let intervalPopularity = null;

const CONSTS = {
  MIN_POPULARITY: 1,
  MAX_POPULARITY: 10,
  MIN_VOTES: 1,
  MAX_VOTES: 10,
  INTERVAL_VOTES: 100,
  INTERVAL_POPULARITY: 5000,
  STARTING_VOTES: 0
};

randomNumber = (start = CONSTS.MIN_VOTES, end = CONSTS.MAX_VOTES) => {
  return Math.max(start, Math.ceil(Math.random() * end));
};

fillCandidates = () => {
  candidates = [
    {
      id: 1,
      name: "Marco Minnemann",
      votes: CONSTS.STARTING_VOTES,
      percentage: 0,
      popularity: CONSTS.MIN_POPULARITY,
      photo: 'marco.jpg'
    },
    {
      id: 2,
      name: "Mike Portnoy",
      votes: CONSTS.STARTING_VOTES,
      percentage: 0,
      popularity: CONSTS.MIN_POPULARITY,
      photo: 'mike.jpg'
    },
    {
      id: 3,
      name: "Neil Peart",
      votes: CONSTS.STARTING_VOTES,
      percentage: 0,
      popularity: CONSTS.MIN_POPULARITY,
      photo: 'neil.jpg'
    }
  ];
}

simulateVoting = () => {
  intervalVotes = setInterval(() => {
    candidates.forEach((candidate) => {
      const minVotes = CONSTS.MIN_VOTES;
      const maxVotes = CONSTS.MIN_VOTES * candidate.popularity;

      candidate.votes += randomNumber(minVotes, maxVotes);
    });
  }, CONSTS.INTERVAL_VOTES);
}

simulatePopularity = () => {
  intervalPopularity = setInterval(() => {
    candidates.forEach((candidate) => {
      const newPopularity = randomNumber(CONSTS.MIN_POPULARITY, CONSTS.MAX_POPULARITY);
      candidate.popularity = (candidate.popularity + newPopularity) / 2;
    });
  }, CONSTS.INTERVAL_POPULARITY);
}

/*
 * Routes
 */

app.get("/", (_, res) => {
  res.json({
    message: "Welcome to the voting simulator! Access /votes to watch a simulated real time voting."
  });
});

app.get("/votes", (_, res) => {
  const copiedcandidates = Object.assign([], candidates);
  const sortedCandidates = copiedcandidates.sort((a, b) => {
    return b.votes - a.votes
  });

  const totalVotes = sortedCandidates.reduce((acc, cur) => {
    return acc + cur.votes;
  }, 0);

  sortedCandidates.forEach((candidate) => {
    candidate.percentage = (candidate.votes / totalVotes) * 100;
  });

  res.json({
    candidates: sortedCandidates,
    totalVotes: totalVotes
  });
});

app.listen(8080);

fillCandidates();
simulateVoting();
simulatePopularity();