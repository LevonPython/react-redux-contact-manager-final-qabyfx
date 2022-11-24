import React from 'react';
import { connect } from 'react-redux';

/// PeopleList component
const PeopleList = () => {
  // Change component
  function Change(e, index, type) {
    console.log('e', e.target.value);
    contacts[index][type] = e.target.value;
    const dispatch = useDispatch();
    console.log(':::', contacts[index][type]);
  }

  const contacts = useSelector((state) => state.contacts);
  console.log('DATA: ', contacts);
  if (contacts.length > 0) {
    const listItems = contacts.map((val, index) => (
      <li key={index} id={index}>
        <b>Name:</b>
        <input
          value={val['name']}
          className="changeContacts"
          onChange={(e) => Change(e, index, 'name')}
        />
        <div className="crossSign">
          <Delete index={index} />
        </div>
        <br />
        <span>
          <b>Age:</b>
          <input
            value={val['age']}
            className="changeContacts"
            // onChange={(e) => handleChange(e, index, 'age')}
          />
        </span>
        <br />
        <span>
          <b>Location:</b>{' '}
          <input
            value={val['location']}
            className="changeContacts"
            // onChange={(e) => handleChange(e, index, 'location')}
          />
        </span>
        <br />
        <span>
          <b>Phone:</b>{' '}
          <input
            value={val['phone']}
            className="changeContacts"
            // onChange={(e) => handleChange(e, index, 'phone')}
          />
        </span>
      </li>
    ));
    return (
      <container className="contact-list">
        <span id="allContacts">
          <b>All Contacts</b>
        </span>
        <ul>{listItems}</ul>
      </container>
    );
  } else {
    return <ul className="no_contacts">No Contacts found</ul>;
  }
};

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
  };
}

export default connect(mapStateToProps)(PeopleList);
