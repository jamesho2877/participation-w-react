export const generateParticipants = () => {
   return {
      type: 'GENERATE_PARTICIPANTS'
   };
};

export const sortParticipants = (field, order) => {
   return {
      type: 'SORT_PARTICIPANTS',
      field,
      order
   };
};

export const deleteParticipant = id => {
   return {
      type: 'DELETE_PARTICIPANT',
      id
   };
};

export const addParticipant = participant => {
   return {
      type: 'ADD_PARTICIPANT',
      participant
   };
};

export const updateParticipant = participant => {
   return {
      type: 'UPDATE_PARTICIPANT',
      participant
   };
};
