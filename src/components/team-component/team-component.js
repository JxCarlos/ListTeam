import React, { Component } from "react";
import "./team-component.css";

class TeamComponent extends Component {
  constructor(props) {
		super(props);
		this.inputValue = "";
    this.team = this.props.team;
    this.teamIndex = this.props.teamIndex;
    this.onChangeInput = this.onChangeInput.bind(this);
		this.addChannel = this.addChannel.bind(this);
		this.formValidation = this.formValidation.bind(this);
    this.state = {
      team: this.team
    };
  }

  onChangeInput({ target }) {
    this.inputValue = target.value;
  }

  componentDidMount() {}

  formValidation() {
		return isNaN(this.inputValue) && this.inputValue.length;		
	}

  removeChannel(index) {
    this.setState(({ team }) => {
      team.channels.splice(index, 1);
      return [team];
    });
  }

  addChannel() {
    if (this.formValidation()) {
      this.team.channels.push({
        name: this.inputValue,
        index: this.team.channels.length + 1
      });
      this.setState({ team: this.team });
    }
  }

  render() {
    return (
      <div>
        {this.state.team && (
          <div>
            <span className="team-name">{this.state.team.name}</span>
            <span className="add-channel">
              <input placeholder="Channel name" onChange={this.onChangeInput} />
              <button onClick={this.addChannel}>&#8853;</button>
            </span>
          </div>
        )}
        {this.state.team && (
          <ul className="one">
            {this.state.team.channels &&
              this.state.team.channels.map((channel, idx) => (
                <li className="channel-name" key={channel.index}>
                  <span>{channel.name}</span>
                  <button onClick={() => this.removeChannel(idx)}>
                    &#8854;
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    );
  }
}

export default TeamComponent;
