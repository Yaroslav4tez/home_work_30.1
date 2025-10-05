import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Select, MenuItem } from "@mui/material";


const arrSerwer = [1, 2, 3];
const imgSrc = [
    "https://pm1.aminoapps.com/6698/ef83a81c1604f09835921b239b86a741a8a26a86_hq.jpg",
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/6/65/C3p0_bio_pic.jpeg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/R2-D2_-_Genuine_Movie_Star.jpg/960px-R2-D2_-_Genuine_Movie_Star.jpg",
]


const AllPerson = () => {

    const [people, setPerson] = useState('');
    const handleChange = (event) => {
    setPerson(event.target.value);
  };

  const [person, setPersonInfo] = useState([]);

  useEffect(() => {
    async function getPersonInfo() {
      try {
        const askSerwer = arrSerwer.map(id => `https://swapi.info/api/people/${id}`);
        const responses = await Promise.all(askSerwer.map(u => fetch(u)));
        const data = await Promise.all(responses.map(r => r.json()));
        setPersonInfo(data);
      }
      catch (error){
        console.error('error here:', error);
      }
    }
    getPersonInfo();  
  }, [])

  return (
    <div className="containerSwapi">
      <div className="star-wars-bg-container">
        <div className="star-wars-crawl text-center text-warning">
            <p>
                A long time ago in a galaxy far, far away.... <br /> <br />
                Episode IV <br /> 
                A NEW HOPE <br /> <br />
                It is a period of civil war. <br />
                Rebel spaceships, striking from a hidden base, <br />
                have won their first victory against the evil Galactic <br />
                Empire. During the battle, Rebel spies managed to steal <br />
                secret plans to the Empire’s ultimate weapon, the DEATH STAR, <br />
                an armored space station with enough power to destroy an entire planet. <br />
          
            </p>
        </div>
      </div>
      <div className="rightContainer">
        <Box sx={{ minWidth: 400 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Person</InputLabel>
                <Select
                    className="select"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={people}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="Luke">Luke Skywalker</MenuItem>
                    <MenuItem value="C-3PO">C-3PO</MenuItem>
                    <MenuItem value="33BBY">33BBY</MenuItem>
                </Select>
                {people === "Luke" && (
                    <div className="peopleStyle">
                        {person
                        .filter(p => p.name === "Luke Skywalker")
                        .map((p, i) => (
                            <div key={p.name} className="person-card">
                                <h1>{p.name}</h1>
                                <p>height: {p.height} cm</p>
                                <p>mass: {p.mass} kg</p>
                                <p>hair color: {p.hair_color}</p>
                                <p>birth year: {p.birth_year}</p>
                                    <img
                                        src={imgSrc[0]}
                                        alt={p.name}
                                        loading="lazy"
                                        width={250}
                                    />
                            </div>
                            ))}
                    </div>
                    )}
                {people === "C-3PO" && (
                    <div className="peopleStyle">
                        {person
                        .filter(p => p.name === "C-3PO")
                        .map((p, i) => (
                            <div key={p.name} className="person-card">
                                <h1>{p.name}</h1>
                                <p>height: {p.height} cm</p>
                                <p>mass: {p.mass} kg</p>
                                <p>hair color: {p.hair_color}</p>
                                <p>birth year: {p.birth_year}</p>
                                    <img
                                        src={imgSrc[1]}
                                        alt={p.name}
                                        loading="lazy"
                                        width={250}
                                    />
                            </div>
                            ))}
                    </div>
                )}
                {people === "33BBY" && (
                    <div className="peopleStyle">
                        {person
                        .filter(p => p.name === "R2-D2")
                        .map((p, i) => (
                            <div key={p.name} className="person-card">
                                <h1>{p.name}</h1>
                                <p>height: {p.height} cm</p>
                                <p>mass: {p.mass} kg</p>
                                <p>hair color: {p.hair_color}</p>
                                <p>birth year: {p.birth_year}</p>
                                    <img
                                        src={imgSrc[2]}
                                        alt={p.name}
                                        loading="lazy"
                                        width={250}
                                    />
                            </div>
                            ))}
                    </div>
                )}
            </FormControl>
        </Box>
      </div>
    </div>
  );
};

export default AllPerson;