// import React from 'react';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NavComponent from 'Components/Nav/Nav.component';
import { db } from 'Utils/Firebase';
import { setIsGrandAdmin } from 'Store/Admin/Admin.action';

export const mapStateToProps = (state) => ({
  isGrandAdmin: state.AdminReducer.isGrandAdmin,
});

export const mapDispatchToProps = (dispatch) => ({
  setGrandAdmin: (isGrandAdmin) => dispatch(setIsGrandAdmin(isGrandAdmin)),
});

export const NavContainer = (props) => {
  const { admin: { uid }, setGrandAdmin, isGrandAdmin } = props;

  const Fetchdata = () => {
    db.collection('admins')
      .where('uid', '==', uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          const { isGrandAdmin } = element.data();
          setGrandAdmin(isGrandAdmin);
        });
      });
  };

  useEffect(() => {
    Fetchdata();
  });

  return (
    <NavComponent isGrandAdmin={isGrandAdmin} />
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
