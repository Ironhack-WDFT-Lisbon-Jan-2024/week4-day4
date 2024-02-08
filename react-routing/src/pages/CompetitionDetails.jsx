/* eslint-disable react/prop-types */

import {useParams} from "react-router-dom";

function CompetitionDetails(props){
    
    // Object Destructuring 
    const {competitionId} = useParams();
    const {competitions} = props;

    //console.log(competitionId);
    const foundCompetition = competitions.find((oneCompetition)=>{
        return oneCompetition.id /* Data Type: Number */ == competitionId // Data Type: String;
    })

return(<section>
    {
        foundCompetition? (<div>
            <h3>{foundCompetition.name}</h3>
            <p>{foundCompetition.location}</p>   
            <p>Year: {foundCompetition.year}</p>
        </div>) : (<p>No competitions for you, senhor.</p>)
    }

    </section>)

}

export default CompetitionDetails