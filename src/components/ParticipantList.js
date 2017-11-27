import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParticipantItem from './ParticipantItem';
import { sortParticipants } from '../actions';

class ParticipantList extends Component {
   constructor(props) {
      super(props);

      this.state = {
         order: 'asc'
      };

      this.toggleOrder = this.toggleOrder.bind(this);
      this.getSiblings = this.getSiblings.bind(this);
      this.onFieldSort = this.onFieldSort.bind(this);
   }

   toggleOrder(item) {
      return { asc: 'desc', desc: 'asc' }[item];
   }

   getSiblings(elem) {
      let siblings = [];
      let sibling = elem.parentNode.firstChild;
      for (; sibling; sibling = sibling.nextSibling) {
         if (sibling.nodeType !== 1 || sibling === elem) continue;
         siblings.push(sibling);
      }
      return siblings;
   }

   onFieldSort(event, field) {
      let localOrder = this.state.order;
      if (event.target.className.length === 0) {
         this.getSiblings(event.target).map(elem => (elem.className = ''));
         localOrder = 'asc';
      }

      this.props.dispatch(sortParticipants(field, localOrder));
      event.target.className = `sort ${localOrder}`;
      this.setState({ order: this.toggleOrder(localOrder) });
   }

   render() {
      let participantItems;
      if (this.props.participants.length > 0) {
         participantItems = this.props.participants.map(data => <ParticipantItem key={data.id} data={data} />);
      } else {
         participantItems = (
            <tr>
               <td className="no-data" colSpan={4} />
            </tr>
         );
      }

      return (
         <table className="data-panel">
            <thead>
               <tr>
                  <th onClick={event => this.onFieldSort(event, 'fullname')}>Name</th>
                  <th onClick={event => this.onFieldSort(event, 'email')}>E-mail address</th>
                  <th onClick={event => this.onFieldSort(event, 'phone')}>Phone number</th>
                  <th />
               </tr>
            </thead>
            <tbody>{participantItems}</tbody>
         </table>
      );
   }
}

const mapStateToProps = state => {
   return {
      participants: state.participants
   };
};

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(ParticipantList);
