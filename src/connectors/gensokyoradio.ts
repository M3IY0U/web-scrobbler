export {};

Connector.playerSelector = '#navBot';

Connector.trackSelector = '#playerTitle';

Connector.artistSelector = '#playerArtist';

Connector.albumSelector = '#playerAlbum';

Connector.getCurrentTime = () =>
	Util.stringToSeconds(
		Util.getTextFromSelectors('#playerCounter')?.split(' / ')[0]
	);

Connector.getDuration = () =>
	Util.stringToSeconds(
		Util.getTextFromSelectors('#playerCounter')?.split(' / ')[1]
	);

Connector.playButtonSelector = '#playStopBtn';
