import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addParticipant } from '../actions';

class AddPanel extends Component {
   constructor(props) {
      super(props);

      this.validateFields = this.validateFields.bind(this);
      this.addNewParticipant = this.addNewParticipant.bind(this);
   }

   componentDidMount() {
      document.querySelector('.btn-add').setAttribute('disabled', 'disabled');
   }

   validateFields() {
      let flag = [0, 0, 0];

      let nameRg = /^([A-Za-z ]{5,16})$/;
      flag[0] = nameRg.test(this.refs.fullname.value) ? 1 : 0;

      let emailRg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      flag[1] = emailRg.test(this.refs.email.value) ? 1 : 0;

      let phoneRg = /^(\d{10})$/;
      flag[2] = phoneRg.test(this.refs.phone.value) ? 1 : 0;

      let elem = document.querySelector('.btn-add');
      if (flag.join('') === '111') {
         elem.classList.add('enable');
         elem.removeAttribute('disabled');
      } else {
         elem.classList.remove('enable');
         elem.setAttribute('disabled', 'disabled');
      }
   }

   addNewParticipant() {
      this.props.dispatch(
         addParticipant({
            fullname: this.refs.fullname.value,
            email: this.refs.email.value,
            phone: this.refs.phone.value
         })
      );

      // reset fields and button
      this.refs.fullname.value = '';
      this.refs.email.value = '';
      this.refs.phone.value = '';
      document.querySelector('.btn-add').setAttribute('disabled', 'disabled');
      document.querySelector('.btn-add').classList.remove('enable');
   }

   render() {
      return (
         <table className="add-new-panel">
            <tbody>
               <tr>
                  <td>
                     <input ref="fullname" type="text" placeholder="Full name" onChange={this.validateFields} />
                  </td>
                  <td>
                     <input ref="email" type="text" placeholder="E-mail address" onChange={this.validateFields} />
                  </td>
                  <td>
                     <input ref="phone" type="text" placeholder="Phone number" onChange={this.validateFields} />
                  </td>
                  <td>
                     <button onClick={this.addNewParticipant} className="cmd-btn btn-add" type="button" title="Add new">
                        Add new
                     </button>
                  </td>
               </tr>
            </tbody>
         </table>
      );
   }
}

export default connect()(AddPanel);
