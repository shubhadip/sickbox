import * as React from 'react';
import { hot } from 'react-hot-loader';
import './HomeBox.scss';

interface IProps {
  title: string;
  description: string;
  imageUrl: string;
  altTag: string;
}

function HomeBox(props: IProps) {
  const img =
    props.imageUrl ||
    'https://cdn.shopify.com/s/files/1/2225/6647/files/12_660x275.png';
  return (
    <section className="homebox">
      <img src={img} alt={props.altTag} />
      <article>
        <p className="title">{props.title}</p>
        <p className="desc">{props.description}</p>
      </article>
    </section>
  );
}

export default hot(module)(HomeBox);
