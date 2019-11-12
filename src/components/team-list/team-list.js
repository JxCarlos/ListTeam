import React, { Component } from "react";
import TeamComponent from "../team-component/team-component";
import "./team-list.css";

class TeamList extends Component {
  constructor(props) {
		super(props);
		this.inputValue = "";
    this.teams = [
      {
        name: "Team1",
        channels: [
          {
            name: "Channel1",
            index: 1
          },
          {
            name: "Channel2",
            index: 2
          }
        ]
      },
      {
        name: "Team2",
        channels: [
          {
            name: "Channel1",
            index: 1
          },
          {
            name: "Channel2",
            index: 2
          }
        ]
      }
    ];

    this.state = {
      teams: this.teams
		};
		this.onChangeInput = this.onChangeInput.bind(this);
		this.addTeam = this.addTeam.bind(this);
		this.formValidation = this.formValidation.bind(this);
	}
	
	onChangeInput({target}){
		this.inputValue = target.value;
	}

	componentDidMount() {}


  formValidation() {
		return isNaN(this.inputValue) && this.inputValue.length;
	}

  addTeam() {
		if (this.formValidation()){
			this.teams.push(
				{
					name: this.inputValue,
					channels: [],
				}
			)
			this.setState(
				{teams: this.teams}
			)
		}
	}

  render() {
		const { teams } = this.state;
    return (
      <div>
        <div className="teams-list">
          <ul>
            {teams &&
              teams.map((team, idx) => (
                <li key={idx}>
                  <TeamComponent team={team} teamIndex={idx} />
                </li>
              ))}
          </ul>
        </div>
        <div className="add-team">
          <b>Add Team</b>
          <input placeholder="Team name" onChange={this.onChangeInput}/>
          <button onClick={this.addTeam}>&#8853;</button>
        </div>
      </div>
    );
  }
}

export default TeamList;
