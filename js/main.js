const API_URL = 'https://www.scorebat.com/video-api/v3/';

async function getHighlights() {
	const response = await fetch(API_URL);
	const data = await response.json();

	const competitionName = data.competition;
	const matchTitle = data.title;
	const date = data.date;
	const video = data.embed;

	console.log(data);
	// console.log(competitionName, matchTitle, date, video);
}

getHighlights();
