import * as React from 'react';
import { hot } from 'react-hot-loader';
import './HomePromote.scss';
// import Button from '../../common/Button/Button';
// import { browserHistory } from './../../../history';

// function handleClick() {
//   browserHistory.push('/p/sick-day-box');
// }

export const HomePromote = () => {
  return (
    <section className="homepromote-wrapper">
      <div className="homepromote">
        <h1>For Someone You Care About</h1>
        <article>
          <img
            src="https://cdn.shopify.com/s/files/1/2225/6647/files/gift_660x440.png"
            alt=""
          />
          <div className="content-wrapper">
            <p className="heading">
              Perfect for the less than prepared students, friends, and
              coworkers in your life.
            </p>
            <p className="sub-heading">
              Send Sick Day Box to that special someone to show them you care.
              Sometimes we all need a mom-in-a-box to make sure there is soup
              and ginger ale on hand for the next time we wake up feeling sick.
              Who wants to run out to the store on a sick day?
            </p>
            {/* <Button title={'GIFT IT'} onClick={handleClick}  className='btn'/> */}
            <a href="/p/sick-day-box" className="btn-product">
              Gift It
            </a>
          </div>
        </article>
        <hr />
        <article>
          <img
            src="https://cdn.shopify.com/s/files/1/2225/6647/files/office_660x440.png"
            alt="pack-of-3"
          />
          <div className="content-wrapper">
            <p className="heading"> Stock up the office.</p>
            <p className="sub-heading">
              Weather any storm with a 3 pack of Sick Day Boxes for the office.
            </p>
            {/* <Button title={'BUY PACK Of 3'} onClick={handleClick} /> */}
            <a href="/p/sick-day-box" className="btn-product">
              Pack 3
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default hot(module)(HomePromote);
