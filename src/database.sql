-- Database name: gallery

CREATE TABLE items (
	id SERIAL PRIMARY KEY,
	imgPath VARCHAR(400),
	description varchar(140),
	likes INTEGER
);

INSERT INTO items (imgPath,description,likes) Values ('https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350','A beautiful Blue rose',509);

INSERT INTO items (imgPath,description,likes) Values ('https://cdn.arstechnica.net/wp-content/uploads/2016/07/Snow-line-artists-conception-640x543.jpg','Milky Way',1024);

INSERT INTO items (imgPath,description,likes) Values ('http://www.planetastronomy.com/astronews/astrn-2010/06/astron13.jpg','Celestial Body',1);

INSERT INTO items (imgPath,description,likes) Values ('http://skinkk.com/wp-content/uploads/2018/05/Pulsefire-Twisted-Fate.jpg','Objectively coolest champion in League of Legends',99999);

INSERT INTO items (imgPath,description,likes) Values ('https://cdn.cgmagonline.com/wp-content/uploads/2018/08/cyberpunk-2077-confirmed-for-pc-ps4-and-xbox-one-optimization-from-the-start-2.jpg','So excited to play CyberPunk2077',324);

INSERT INTO items (imgPath,description,likes) Values ('https://i.pinimg.com/236x/2f/00/ba/2f00ba07747457fcc6ccf4e583cfb57f--sci-fi-art-august-.jpg','No mans sky',200);

INSERT INTO items (imgPath,description,likes) Values ('https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/abyss-watchers-dks3.jpg','Farrens Undead legion',500);

INSERT INTO items (imgPath,description,likes) Values ('https://sneakerfreaker-cdn.s3-accelerate.amazonaws.com/image/J.-CREW-KILLSHOT-2-1.jpg?mtime=20180508095929','Killshots',900);
