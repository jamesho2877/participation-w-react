import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateParticipant, deleteParticipant } from '../actions';

class ParticipantItem extends Component {
   constructor(props) {
      super(props);

      this.state = {
         participant: undefined
      };

      this.renderNormalRow = this.renderNormalRow.bind(this);
      this.renderSelectedRow = this.renderSelectedRow.bind(this);
   }

   renderNormalRow({ data } = this.props) {
      return (
         <tr>
            <td>{data.fullname}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>
               <button onClick={() => this.setState({ participant: data })} className="cmd-icons btn-edit" alt="edit" title="Edit" />
               <button
                  onClick={event => this.props.dispatch(deleteParticipant(event.target.dataset.id))}
                  className="cmd-icons btn-delete"
                  alt="delete"
                  title="Delete"
                  data-id={data.id}
               />
            </td>
         </tr>
      );
   }

   renderSelectedRow() {
      return (
         <tr className="selected">
            <td>
               <input
                  type="text"
                  defaultValue={this.state.participant.fullname}
                  onChange={event => {
                     event.persist();
                     this.setState(prevState => ({
                        participant: {
                           ...prevState.participant,
                           fullname: event.target.value
                        }
                     }));
                  }}
               />
            </td>
            <td>
               <input
                  type="text"
                  defaultValue={this.state.participant.email}
                  onChange={event => {
                     event.persist();
                     this.setState(prevState => ({
                        participant: {
                           ...prevState.participant,
                           email: event.target.value
                        }
                     }));
                  }}
               />
            </td>
            <td>
               <input
                  type="text"
                  defaultValue={this.state.participant.phone}
                  onChange={event => {
                     event.persist();
                     this.setState(prevState => ({
                        participant: {
                           ...prevState.participant,
                           phone: event.target.value
                        }
                     }));
                  }}
               />
            </td>
            <td>
               <button onClick={() => this.setState({ participant: undefined })} className="btn-cancel" type="button" title="Cancel">
                  Cancel
               </button>
               <button
                  onClick={event => {
                     this.props.dispatch(
                        updateParticipant({
                           id: this.state.participant.id,
                           fullname: this.state.participant.fullname,
                           email: this.state.participant.email,
                           phone: this.state.participant.phone
                        })
                     );
                     this.setState({ participant: undefined });
                  }}
                  className="btn-save"
                  type="button"
                  title="Save"
               >
                  Save
               </button>
            </td>
         </tr>
      );
   }

   render() {
      return !this.state.participant ? this.renderNormalRow() : this.renderSelectedRow();
   }
}

export default connect()(ParticipantItem);
