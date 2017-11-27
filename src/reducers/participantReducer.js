import Chance from 'chance';
import _ from 'lodash';

const participantReducer = (state = [], action) => {
   switch (action.type) {
      case 'GENERATE_PARTICIPANTS':
         return generateParticipants();
      case 'SORT_PARTICIPANTS':
         return sortParticipants(state, action.field, action.order);
      case 'DELETE_PARTICIPANT':
         return state.filter(participant => participant.id !== action.id);
      case 'ADD_PARTICIPANT':
         let chance = new Chance();
         return [
            {
               id: chance.fbid(),
               fullname: action.participant.fullname,
               email: action.participant.email,
               phone: action.participant.phone
            },
            ...state
         ];
      case 'UPDATE_PARTICIPANT':
         return state.map(participant => {
            if (participant.id === action.participant.id) {
               participant.fullname = action.participant.fullname;
               participant.email = action.participant.email;
               participant.phone = action.participant.phone;
            }
            return participant;
         });
      default:
         return state;
   }
};

function sortParticipants(participants, field, order) {
   return _.orderBy(participants, [field], [order]);
}

function generateParticipants() {
   let chance = new Chance();
   let list = [];

   for (let i = 0; i < 20; i++) {
      let newName = chance.name();
      list.push({
         id: chance.fbid(),
         fullname: newName,
         email:
            newName
               .toLowerCase()
               .split(' ')
               .join('.') +
            '@' +
            chance.domain(),
         phone: chance.phone({ formatted: false })
      });
   }

   return list;
}

export default participantReducer;
