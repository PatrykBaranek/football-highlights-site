const url = 'https://www.scorebat.com/video-api/v3/';

const getHighlights = async () => {
	try {
		const res = await fetch(url);

		const data = await res.json();

		const { competition, title, videos } = data.response;

		console.log(competition, title, videos);
	} catch (err) {
		console.log(err.message);
	}
	// console.log(competitionName, matchTitle, date, video);
};

getHighlights();
